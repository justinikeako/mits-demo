import { createOpenAI } from "@ai-sdk/openai";
import {
  createAI,
  streamUI,
  getMutableAIState,
  createStreamableValue,
} from "ai/rsc";
import { z } from "zod";
import { nanoid } from "nanoid";
import { ChatMessage } from "~/components/chat-message";
import { env } from "~/env";
import type { CoreMessage } from "ai";
import { ResetPasswordButton } from "~/components/reset-password-button";

const openai = createOpenAI({
  apiKey: env.OPENAI_API_KEY,
});

function Spinner() {
  return <div>Loading...</div>;
}

// Mock the database call to get the user by example email.
async function getUserByEmail(email: string) {
  if (email !== "example@example.com") {
    return null;
  }

  return {
    uid: nanoid(),
    email,
    alternativeEmail: "example@alternative.com",
  };
}

async function submitUserMessage(userInput: string): Promise<ClientMessage> {
  "use server";

  const history = getMutableAIState<typeof AI>();

  // Update the AI state with the new user message.
  history.update([
    ...history.get(),
    {
      id: nanoid(),
      role: "user",
      content: userInput,
    },
  ]);

  function addMessageToHistory(message: Message) {
    history.update([...history.get(), message]);
  }

  let textStream: ReturnType<typeof createStreamableValue<string>> | undefined;
  let textNode: React.ReactNode | undefined;

  // The `streamUI()` creates a generated, streamable UI.
  const ui = await streamUI({
    model: openai("gpt-3.5-turbo-0125"),
    initial: <Spinner />,
    // refine the system prompt below

    system: `\
You are a helpful assistant for a technical support service at a the University of the West Indies Mona Jamaica. Your job primarily consists of helping users reset their password if they've forgotten it.

If the user requests a password reset, if the user hasn't provided their account email and their alternative email, ask them for it so you can find the user in the database. Only ask for one at a time. Refrain from running the function if only one of the two aforementioned email addresses has been provided. If the user has provided BOTH account email and an alternative email, call \`showPasswordReset\` to show the password reset form.

Besides that you can also chat with the user and answer other support questions they might have.`,
    messages: history.get().map((message) => ({
      role: message.role as "assistant" | "user",
      content: message.content,
      name: message.name,
    })),
    // `text` is called when an AI returns a text response (as opposed to a tool call).
    // Its content is streamed from the LLM, so this function will be called
    // multiple times with `content` being incremental.
    text: ({ content, done, delta }) => {
      if (!textStream) {
        textStream = createStreamableValue("");
        textNode = <ChatMessage role="assistant" content={textStream.value} />;
      }

      // When it's the final content, mark the state as done and ready for the client to access.
      if (done) {
        textStream.done();

        history.done([
          ...history.get(),
          {
            id: nanoid(),
            role: "assistant",
            content,
          },
        ]);
      } else {
        textStream.update(delta);
      }

      return textNode;
    },
    tools: {
      showPasswordReset: {
        description:
          "Show the UI for resetting a user's password. Use this when the user has forgotten their password and wants to reset it. If the user hasn't provided an email address, ask them for it so you can find the user in the database.",
        parameters: z
          .object({
            accountEmail: z
              .string()
              .describe(
                "The account email. If not provided, ask the user for it",
              ),
            alternativeEmail: z
              .string()
              .describe(
                "The alternative email attatched to the account. If not provided, ask the user for it",
              ),
          })
          .required(),
        generate: async function* ({ accountEmail, alternativeEmail }) {
          // Show a spinner on the client while we wait for the response.
          yield <Spinner />;

          // Check account email and alternative email address against the database.
          const user = await getUserByEmail(accountEmail);

          console.log(accountEmail, alternativeEmail);

          // If the user doesn't exist, return an error message.
          if (!user) {
            addMessageToHistory({
              id: nanoid(),
              role: "assistant",
              content: `Sorry, I couldn't find a user with the email address ${accountEmail}`,
            });

            return (
              <ChatMessage
                role="assistant"
                content={`Sorry, I couldn't find a user with the email address ${accountEmail}`}
              />
            );
          }

          // If the user exists, but the email addresses don't match, return an error message.
          if (
            user.email !== accountEmail ||
            user.alternativeEmail !== alternativeEmail
          ) {
            addMessageToHistory({
              id: nanoid(),
              role: "assistant",
              content:
                "The alternative email address provided is not associated with this account",
            });

            return (
              <ChatMessage
                role="assistant"
                content="The alternative email address provided is not associated with this account"
              />
            );
          }

          return <ResetPasswordButton user={user} />;
        },
      },
    },
  });

  return {
    id: nanoid(),
    display: ui.value,
  };
}

export type Message = {
  role: CoreMessage["role"];
  content: string;
  id: string;
  name?: string;
};

export type ClientMessage = {
  id: string;
  display: React.ReactNode;
};
// The state of the AI. It can be any JSON object.
export type AIState = Message[];

// The UI state that the client will keep track of, which contains the message IDs and their UI nodes.
export type UIState = ClientMessage[];

// AI is a provider you wrap your application with so you can access AI and UI state in your components.
export const AI = createAI({
  actions: {
    submitUserMessage,
  },
  // Each state can be any shape of object, but for chat applications
  // it makes sense to have an array of messages. Or you may prefer something like { id: number, messages: Message[] }
  initialUIState: [] as UIState,
  initialAIState: [] as AIState,
});
