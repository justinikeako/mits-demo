import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "~/lib/utils";

const buttonVariants = cva(
  "group relative flex select-none items-center justify-center gap-1 text-center disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none",
  {
    variants: {
      intent: {
        primary:
          "flex h-10 items-center gap-2 rounded-lg border-b border-t border-b-transparent font-bold shadow outline-offset-4 ring-1 before:absolute before:block before:size-full before:rounded-lg before:opacity-0 active:shadow-sm active:before:opacity-100",
        tertiary:
          "rounded-lg bg-transparent hover:bg-black/5 active:bg-black/15",
      },
      color: {
        amber:
          "border-t-amber-500 bg-amber-600 text-amber-50 shadow-amber-950 ring-amber-700 before:bg-amber-950/5 focus-visible:outline-amber-600 active:border-b-amber-500 active:border-t-transparent",
        blue: "border-t-blue-600 bg-blue-700 text-blue-50 shadow-blue-950 ring-blue-800 before:bg-blue-950/5 focus-visible:outline-blue-700 active:border-b-blue-600 active:border-t-transparent",
      },
      size: {
        lg: "text-lg",
        md: "",
      },
    },
    compoundVariants: [
      { intent: "primary", size: "lg", className: "h-12 px-4" },
      { intent: "primary", size: "md", className: "h-10 px-4" },
      { intent: "tertiary", size: "md", className: "-m-3 p-3" },
    ],
    defaultVariants: {
      intent: "primary",
      size: "md",
      color: "blue",
    },
  },
);

type ButtonProps = {
  asChild?: boolean;
} & VariantProps<typeof buttonVariants> &
  React.ComponentProps<"button">;

export const Button = forwardRef<React.ElementRef<"button">, ButtonProps>(
  function Button({ intent, size, color, asChild, ...props }, ref) {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        {...props}
        ref={ref}
        className={cn(buttonVariants({ intent, size, color }), props.className)}
      />
    );
  },
);
