import type { ReactNode } from "react";

/**
 * Root shell.
 *
 * Scrolling is intentionally native (no JS smooth-scroll): it is the
 * smoothest and lightest option across devices, and anchor links still
 * glide via the CSS `scroll-behavior` rule in globals.css.
 */
export default function Shell({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
