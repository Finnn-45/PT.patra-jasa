import { cn } from "@/lib/utils";

type DividerProps = {
  className?: string;
  tone?: "dark" | "light";
};

/** Hairline horizontal rule. */
export default function Divider({ className, tone = "dark" }: DividerProps) {
  return (
    <hr
      aria-hidden
      className={cn("divider-hair", tone === "light" && "opacity-40", className)}
    />
  );
}
