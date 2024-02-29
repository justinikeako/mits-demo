import { cn } from "~/lib/utils";

export function PageSection(props: React.ComponentProps<"div">) {
  return (
    <section className="odd:bg-gray-100">
      <div
        {...props}
        className={cn(
          "px-6 py-16 2xl:container sm:px-8 md:px-12 lg:px-16",
          props.className,
        )}
      />
    </section>
  );
}

export function SectionHeading(props: React.ComponentProps<"h2">) {
  return (
    <h2
      {...props}
      className={cn("text-xl md:text-2xl lg:text-3xl", props.className)}
    />
  );
}
