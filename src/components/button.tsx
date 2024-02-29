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
          "flex h-10 items-center gap-2 rounded-lg font-bold shadow outline-offset-4 ring-1 before:absolute before:inset-0 before:block before:rounded-lg before:border-t after:absolute after:inset-0 after:block after:rounded-lg after:opacity-0 active:shadow-sm active:after:opacity-100",
        tertiary:
          "rounded-lg bg-transparent hover:bg-black/5 active:bg-black/15",
      },
      color: {
        amber: "",
        blue: "",
      },
      size: {
        lg: "h-12 text-lg",
        md: "h-10",
      },
      iconOnly: {
        true: "",
        false: "px-4",
      },
    },
    compoundVariants: [
      {
        intent: "primary",
        color: "blue",
        className:
          "bg-blue-700 text-blue-50 shadow-blue-950 ring-blue-800 before:border-blue-600 after:bg-blue-950/5 focus-visible:outline-blue-700 active:before:border-b active:before:border-t-0",
      },
      {
        intent: "primary",
        color: "amber",
        className:
          "bg-amber-600 text-amber-50 shadow-amber-950 ring-amber-700 before:border-amber-500 after:border-t-red-400 after:bg-amber-950/5 focus-visible:outline-amber-600 active:border-t-0 active:before:border-b",
      },
      { intent: "tertiary", iconOnly: true, size: "md", className: "size-10" },
      { intent: "tertiary", iconOnly: true, size: "lg", className: "size-12" },
      { iconOnly: true, size: "md", className: "w-10" },
      { iconOnly: true, size: "lg", className: "w-12" },
    ],
    defaultVariants: {
      intent: "primary",
      size: "md",
      color: "blue",
      iconOnly: false,
    },
  },
);

type ButtonProps = {
  asChild?: boolean;
} & VariantProps<typeof buttonVariants> &
  React.ComponentProps<"button">;

export const Button = forwardRef<React.ElementRef<"button">, ButtonProps>(
  function Button({ intent, size, color, iconOnly, asChild, ...props }, ref) {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        {...props}
        ref={ref}
        className={cn(
          buttonVariants({ intent, size, color, iconOnly }),
          props.className,
        )}
      />
    );
  },
);
