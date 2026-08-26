"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import Eyebrow from "./Eyebrow";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  /** "dark" = sits on a dark surface (white text); "light" = sits on a light surface (dark text). */
  tone?: "dark" | "light";
  className?: string;
  id?: string;
};

/** Oversized editorial section heading with optional kicker + description. */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className,
  id,
}: SectionHeadingProps) {
  const textColor = tone === "dark" ? "text-white" : "text-paper";
  const muted = tone === "dark" ? "text-gray-300" : "text-ash";
  const accent =
    tone === "dark" ? "text-patragreen-300" : "text-patragreen-600";

  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <Eyebrow
          className={cn("mb-6", accent, align === "center" && "justify-center")}
        >
          {eyebrow}
        </Eyebrow>
      )}
      <h2 className={cn("t-section", textColor)}>{title}</h2>
      {description && (
        <p
          className={cn(
            "t-lead mt-7 max-w-2xl",
            muted,
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
