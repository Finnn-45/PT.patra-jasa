import { type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const base = "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-patra-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white";

const variants = {
  primary: "bg-patra-blue-400 text-white hover:bg-patra-blue-300 shadow-lg shadow-patra-blue-400/20",
  secondary: "bg-white text-slate-900 border border-slate-200 hover:bg-slate-50",
  ghost: "bg-transparent text-slate-900 hover:bg-slate-100 border border-transparent",
  accent: "bg-patra-green-500 text-white hover:bg-patra-green-600",
};

type PatraButtonProps = (
  | ({ as: "button" } & ButtonHTMLAttributes<HTMLButtonElement>)
  | ({ as: "a" } & AnchorHTMLAttributes<HTMLAnchorElement>)
) & {
  variant?: keyof typeof variants;
  className?: string;
};

export function PatraButton({ as = "button", variant = "primary", className, ...rest }: PatraButtonProps) {
  const classes = cn(base, variants[variant], className);
  if (as === "a") {
    return <a className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)} />;
  }
  return <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)} />;
}
