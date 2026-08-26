import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost";
type Size = "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-3 rounded-full font-semibold tracking-wide transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none";

const sizes: Record<Size, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-patragreen-600 text-white hover:bg-patragreen-500 hover:-translate-y-0.5 shadow-[0_16px_44px_-20px_rgba(237,27,47,0.55)]",
  outline:
    "border border-paper/40 text-paper hover:border-paper hover:bg-paper hover:text-ink",
  ghost:
    "text-paper hover:text-patragreen-300",
};

type PatraButtonProps = {
  href?: string;
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  className?: string;
  children: ReactNode;
} & Omit<React.ComponentPropsWithoutRef<typeof Link>, "href">;

/** Premium pill button; renders a link when `href` is provided. */
export default function PatraButton({
  href,
  variant = "primary",
  size = "md",
  arrow = true,
  className,
  children,
  ...props
}: PatraButtonProps) {
  const Comp: any = href ? Link : "button";
  return (
    <Comp
      href={href ?? undefined}
      className={cn(base, sizes[size], variants[variant], className)}
      {...props}
    >
      <span>{children}</span>
      {arrow && (
        <span
          aria-hidden
          className="grid place-items-center transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
        >
          <ArrowUpRight className="h-4 w-4" />
        </span>
      )}
    </Comp>
  );
}
