"use client";

import { Button } from "~/components/button";
import { Icon } from "~/components/icon";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function ChatInput() {
  const [inputValue, setInputValue] = useState("");

  const router = useRouter();
  return (
    <form
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log("submitting form", inputValue);

        //navigate to the chat page with the input value
        router.push(`/chat?message=${inputValue}`);
      }}
      className="border-1 mt-10 flex w-full rounded-xl border border-gray-400 py-1 pl-4 pr-1 text-sm shadow-sm outline-2 -outline-offset-1 outline-blue-800 has-[input:focus]:outline sm:w-fit sm:text-base md:text-lg"
    >
      <input
        type="text"
        name=""
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        id=""
        placeholder="E.g. I need a projector for my next class"
        className="flex-1 placeholder-gray-500 outline-none sm:w-96"
      />
      <Button type="submit" className="md:hidden" iconOnly>
        <Icon name="arrow_right" />
      </Button>
      <Button type="submit" size="lg" className="max-md:hidden">
        <span>Get your Answer</span>
        <Icon name="arrow_right" />
      </Button>
    </form>
  );
}

export default ChatInput;
