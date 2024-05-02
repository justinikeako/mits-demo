import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "~/lib/utils";

const buttonVariants = cva(
  "group relative flex w-fit select-none items-center justify-center gap-2 text-center disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-none",
  {
    variants: {
      intent: {
        primary:
          "h-10 rounded-lg bg-blue-800 bg-gradient-to-b from-white/25 font-bold text-white shadow shadow-blue-950 outline-offset-4 ring-1 ring-blue-900/10 before:absolute before:inset-0 before:block before:rounded-lg before:border-y before:border-b-black/25 before:border-t-white/25 after:absolute after:inset-0 after:block after:rounded-lg after:bg-transparent after:transition-colors hover:after:bg-blue-50/5 focus-visible:outline-blue-700 active:bg-gradient-to-t active:shadow-sm active:before:rotate-180 active:after:bg-blue-950/5 active:after:transition-none",
        secondary:
          "h-10 rounded-lg bg-amber-50 bg-gradient-to-b from-white/75 font-bold text-amber-950 shadow shadow-amber-950/10 outline-offset-4 ring-1 ring-amber-500/10 before:absolute before:inset-0 before:block before:rounded-lg before:border-b before:border-amber-950/10 after:absolute after:inset-0 after:block after:rounded-lg after:bg-transparent after:transition-colors hover:after:bg-white/15 focus-visible:outline-amber-700 active:bg-gradient-to-t active:shadow-sm active:before:rotate-180 active:after:bg-amber-300/5 active:after:transition-none",
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
