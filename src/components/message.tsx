"use client";

import { useId } from "react";
import type { Message } from "ai";
import type { StreamableValue } from "ai/rsc";
import { useStreamableText } from "~/lib/hooks/use-streamable-text";

export function ChatMessage({
  role,
  content,
}: {
  role: Message["role"];
  content: string | StreamableValue<string>;
}) {
  const senderLabelId = useId();

  const text = useStreamableText(content);

  return (
    <div className="w-full" aria-labelledby={senderLabelId}>
      <div className="flex items-center gap-4">
        {role === "user" ? (
          <>
            <div className="flex size-8 shrink-0 select-none items-center justify-center rounded-full bg-gray-300 font-semibold">
              IA
            </div>

            <div className="font-semibold" id={senderLabelId}>
              You <span className="sr-only">said at x:xx xxx</span>
            </div>
          </>
        ) : (
          <>
            <div className="flex size-8 shrink-0 select-none items-center justify-center rounded-full bg-blue-800 text-[8px] font-semibold text-white">
              M.I.T.S.
            </div>
            <div className="font-semibold" id={senderLabelId}>
              The Bot <span className="sr-only">said at x:xx xxx</span>
            </div>
          </>
        )}
      </div>

      <div className="pl-12">{text}</div>
    </div>
  );
}
export function ToolMessage({ children }: { children: React.ReactNode }) {
  const senderLabelId = useId();

  return (
    <div className="w-full" aria-labelledby={senderLabelId}>
      <div className="flex items-center gap-4">
        <div className="flex size-8 shrink-0 select-none items-center justify-center rounded-full bg-blue-800 text-[8px] font-semibold text-white">
          M.I.T.S.
        </div>
        <div className="font-semibold" id={senderLabelId}>
          The Bot <span className="sr-only">said at x:xx xxx</span>
        </div>
      </div>

      <div className="pl-12">{children}</div>
    </div>
  );
}
