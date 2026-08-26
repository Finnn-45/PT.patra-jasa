"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { cn } from "@/lib/utils";

type ImageRevealProps = {
  src: string;
  alt: string;
  aspect?: string;
  className?: string;
  caption?: string;
};

/**
 * Editorial image treatment: a hairline-framed image that starts desaturated,
 * reveals via clip-path as it scrolls into view, and warms to full colour with
 * a gentle zoom on hover. Lean and architectural — no card chrome.
 */
export default function ImageReveal({
  src,
  alt,
  aspect = "aspect-[4/3]",
  className,
  caption,
}: ImageRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <figure className={cn("media-frame", className)} ref={ref as any}>
      <motion.div
        className={cn("relative h-full w-full", aspect)}
        initial={{ clipPath: "inset(100% 0 0 0)" }}
        animate={inView ? { clipPath: "inset(0% 0 0 0)" } : {}}
        transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover" />
      </motion.div>
      {caption && <figcaption className="t-caption mt-3 text-ash">{caption}</figcaption>}
    </figure>
  );
}
