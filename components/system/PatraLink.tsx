import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type PatraLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

/** Editorial text link with an animated arrow micro-interaction. */
export default function PatraLink({ href, children, className }: PatraLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-patragreen-300 transition-colors duration-300 hover:text-paper",
        className
      )}
    >
      <span
        aria-hidden
        className="h-px w-7 bg-current transition-all duration-300 group-hover:w-10"
      />
      <span>{children}</span>
      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}
