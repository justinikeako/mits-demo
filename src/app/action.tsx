import { createOpenAI } from "@ai-sdk/openai";
import { createAI, streamUI, getMutableAIState } from "ai/rsc";
import { z } from "zod";
import { nanoid } from "nanoid";
import type { ChatCompletionAssistantMessageParam } from "ai/prompts";
import { ChatMessage } from "~/components/chat-message";
import { env } from "~/env";
import { CoreMessage } from "ai";

const openai = createOpenAI({
  apiKey: env.OPENAI_API_KEY,
});

// An example of a spinner component. You can also import your own components,
// or 3rd party component libraries.
function Spinner() {
  return <div>Loading...</div>;
}

async function submitUserMessage(userInput: string): Promise<{
  id: number;
  role: Message["role"];
  display: React.ReactNode;
}> {
  "use server";

  const aiState = getMutableAIState<typeof AI>();

  // Update the AI state with the new user message.
  aiState.update([
    ...aiState.get(),
    {
      id: nanoid(),
      role: "user",
      content: userInput,
    },
  ]);

  // The `streamUI()` creates a generated, streamable UI.
  const ui = streamUI({
    model: openai("gpt-3.5-turbo-0125"),
    initial: <Spinner />,
    prompt: "You are a helpful assistant",
    messages: [
      ...aiState.get().map((message) => ({
        role: message.role as "assistant" | "user",
        content: message.content,
        name: message.name,
      })),
    ],
    // `text` is called when an AI returns a text response (as opposed to a tool call).
    // Its content is streamed from the LLM, so this function will be called
    // multiple times with `content` being incremental.
    text: ({ content, done, delta }) => {
      // When it's the final content, mark the state as done and ready for the client to access.
      if (done) {
        textStream.done();

        aiState.done([
          ...aiState.get(),
          {
            id: nanoid(),
            role: "assistant",
            content,
          },
        ]);
      } else {
        textStream.update(delta);
      }

      return <p>{content}</p>;
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

          // Fetch the flight information from an external API.
          const flightInfo = await resetPassword(flightNumber);

          // Update the final AI state.
          aiState.done([
            ...aiState.get(),
            {
              id: nanoid(),
              role: "function",
              name: "get_flight_info",
              // Content can be any string to provide context to the LLM in the rest of the conversation.
              content: JSON.stringify(flightInfo),
            },
          ]);

          // Return the flight card to the client.
          return <FlightCard flightInfo={flightInfo} />;
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
export const AI = createAI<AIState, UIState>({
  actions: {
    submitUserMessage,
  },
  // Each state can be any shape of object, but for chat applications
  // it makes sense to have an array of messages. Or you may prefer something like { id: number, messages: Message[] }
  initialUIState: [],
  initialAIState: [],
});
