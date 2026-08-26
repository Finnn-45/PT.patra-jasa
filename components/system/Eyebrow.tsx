import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type EyebrowProps = {
  children: ReactNode;
  className?: string;
};

/** Small uppercase kicker with an architectural leading rule. */
export default function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <p className={cn("t-eyebrow inline-flex items-center gap-3", className)}>
      <span aria-hidden className="h-px w-9 bg-current opacity-60" />
      <span>{children}</span>
    </p>
  );
}
