import { createOpenAI } from "@ai-sdk/openai";
import {
  createAI,
  streamUI,
  getMutableAIState,
  createStreamableValue,
} from "ai/rsc";
import { z } from "zod";
import { nanoid } from "nanoid";
import { ChatMessage, ToolMessage } from "~/components/message";
import { env } from "~/env";
import type { CoreMessage } from "ai";
import { PasswordResetForm } from "~/components/password-reset-form";
import { EmailQuotaForm } from "~/components/email-quota";
import { RequestInPersonSupportForm } from "~/components/support-request-form";

const openai = createOpenAI({
  apiKey: env.OPENAI_API_KEY,
});

function Spinner() {
  return <div>Loading...</div>;
}

// A mock function for changing the user's email address.
async function changeEmail(email: string) {
  "use server";

  return email;
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

If the user requests a password reset, call \`showPasswordReset\` to show the password reset form.

If the user requests to increase their email quota, call \`showEmailQuota\` to show the email quota form.

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
        generate: async function* (user) {
          // Show a spinner on the client while we wait for the response.
          yield <Spinner />;

          return (
            <ToolMessage>
              <PasswordResetForm userInfo={user} />
            </ToolMessage>
          );
        },
      },
      showEmailQuota: {
        description:
          "Show the UI for increasing the user's email quota. Use this when the user has reached their email quota and wants to increase it.",
        parameters: z
          .object({
            accountEmail: z
              .string()
              .describe(
                "The account email. If not provided, ask the user for it",
              ),
          })
          .required(),
        generate: async function* (user) {
          // Show a spinner on the client while we wait for the response.
          yield <Spinner />;

          return (
            <ToolMessage>
              <EmailQuotaForm defaultEmail={user.accountEmail} />
            </ToolMessage>
          );
        },
      },
      showSupportRequest: {
        description:
          "Show the UI for requesting in-person support. Use this when the user has technical issues that can't be resolved through the chatbot.",
        parameters: z
          .object({
            accountEmail: z
              .string()
              .describe(
                "The account email. If not provided, ask the user for it",
              ),
            message: z
              .string()
              .describe("The message. If not provided, ask the user for it"),
          })
          .required(),
        generate: async function* () {
          // Show a spinner on the client while we wait for the response.
          yield <Spinner />;

          return (
            <ToolMessage>
              <RequestInPersonSupportForm />
            </ToolMessage>
          );
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
    changeEmail,
  },
  // Each state can be any shape of object, but for chat applications
  // it makes sense to have an array of messages. Or you may prefer something like { id: number, messages: Message[] }
  initialUIState: [] as UIState,
  initialAIState: [] as AIState,
});
