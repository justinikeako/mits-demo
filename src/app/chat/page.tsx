"use client";

import { useActions, useUIState } from "ai/rsc";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Button } from "~/components/button";
import { Icon } from "~/components/icon";
import type { AI } from "../action";

export default function Page() {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useUIState<typeof AI>();
  const { submitUserMessage } = useActions<typeof AI>();

  return (
    <div className="absolute inset-0 z-50 h-svh bg-white">
      <div className="sticky top-0 z-40 h-16 shrink-0 bg-white/90 ring-1 ring-black/5 backdrop-blur">
        <div className="flex h-full items-center justify-center px-6 2xl:container sm:px-8 md:px-12 lg:px-16">
          <Link href="/" className="flex gap-2">
            <Image
              width="138"
              height="80"
              src="/mits-logo.svg"
              alt="Homepage"
              className="h-5 w-auto"
            />
            <span className="rounded-full bg-blue-800 px-2 text-white ">
              Chat
            </span>
          </Link>
        </div>
      </div>

      <div className="mx-auto flex h-fit w-full max-w-4xl flex-col-reverse justify-end gap-10 px-4 pb-32 pt-8">
        {messages.map(({ id, display }) => display).reverse()}
      </div>

      <div className="fixed inset-x-0 bottom-0 bg-white pb-8">
        <form
          onSubmit={async (e) => {
            e.preventDefault();

            // Add user message to UI state
            setMessages((currentMessages) => [
              ...currentMessages,
              {
                id: Date.now(),
                role: "user",
                display: <div>{inputValue}</div>,
              },
            ]);

            // Submit and get response message
            const responseMessage = await submitUserMessage(inputValue);
            setMessages((currentMessages) => [
              ...currentMessages,
              { ...responseMessage, role: "assistant" },
            ]);

            // setInputValue("");
          }}
          className="mx-auto flex w-full max-w-4xl rounded-xl border border-gray-400 bg-white py-1 pl-4 pr-1 text-sm shadow-sm outline-2 -outline-offset-1 outline-blue-800 has-[textarea:focus]:outline sm:text-base md:text-lg"
        >
          <textarea
            name="message"
            id="message"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask us a question..."
            className="flex-1 resize-none py-2.5 placeholder-gray-500 outline-none sm:w-96"
            rows={1}
          />
          <Button className="md:hidden" iconOnly>
            <Icon name="arrow_right" />
          </Button>
          <Button size="lg" className="max-md:hidden">
            <span>Send</span>
            <Icon name="arrow_right" />
          </Button>
        </form>
      </div>
    </div>
  );
}
