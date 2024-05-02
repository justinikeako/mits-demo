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

const openai = createOpenAI({
  apiKey: env.OPENAI_API_KEY,
});

function Spinner() {
  return <div>Loading...</div>;
}

// Mock the database call to get the user by email.
async function getUserByEmail(email: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    email,
    uid: nanoid(),
    alternativeEmail: email,
  };
}

async function submitUserMessage(userInput: string): Promise<{
  id: number;
  role: Message["role"];
  display: ReturnType<typeof streamUI>;
}> {
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
  const ui = streamUI({
    model: openai("gpt-3.5-turbo-0125"),
    initial: <Spinner />,
    prompt: "You are a helpful assistant",
    messages: [
      ...history.get().map((message) => ({
        role: message.role as "assistant" | "user",
        content: message.content,
        name: message.name,
      })),
    ],
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
          "Show the UI for resetting a user's password. Use this when the user has forgotten their password and wants to reset it",
        parameters: z
          .object({
            accountEmail: z.string().describe("The account email"),
            alternativeEmail: z
              .string()
              .describe("The alternative email attatched to the account"),
          })
          .required(),
        generate: async function* ({ accountEmail, alternativeEmail }) {
          // Show a spinner on the client while we wait for the response.
          yield <Spinner />;

          // Check account email and alternative email address against the database.
          const user = await getUserByEmail(accountEmail);

          // If the user doesn't exist, return an error message.
          if (!user) {
            return <ChatMessage role="assistant" content="User not found" />;
          }

          // If the user exists, but the email addresses don't match, return an error message.
          if (
            user.email !== accountEmail ||
            user.alternativeEmail !== alternativeEmail
          ) {
            addMessageToHistory({
              id: nanoid(),
              role: "assistant",
              content: "Incorrect alternative email address",
            });

            return (
              <ChatMessage
                role="assistant"
                content="Incorrect alternative email address"
              />
            );
          }

          // If the user exists and the email addresses match, return the password reset link.
          return `https://${env.NEXT_PUBLIC_DRUPAL_BASE_URL}/user/password/reset/${user.uid}`;
        },
      },
    },
  });

  return {
    id: Date.now(),
    role: "assistant",
    display: ui,
  };
}

export type Message = {
  role: CoreMessage["role"];
  content: string;
  id: string;
  name?: string;
};

// The state of the AI. It can be any JSON object.
export type AIState = Message[];

// The UI state that the client will keep track of, which contains the message IDs and their UI nodes.
export type UIState = {
  id: string;
  display: React.ReactNode;
}[];

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
