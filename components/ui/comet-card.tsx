"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface CometCardProps {
  title: string;
  subtitle: string;
  description: string;
  linkText: string;
  href: string;
  rotateDepth?: number;
  translateDepth?: number;
  className?: string;
}

export function CometCard({
  title,
  subtitle,
  description,
  linkText,
  href,
  rotateDepth = 18,
  translateDepth = 20,
  className,
}: CometCardProps) {
  const [style, setStyle] = useState({
    transform: "perspective(900px) rotateX(0deg) rotateY(0deg)",
  });

  const handleMouseMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const target = event.currentTarget;
    const rect = target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * rotateDepth * -1;
    const rotateX = ((y - centerY) / centerY) * rotateDepth;
    const translateX = ((x - centerX) / centerX) * translateDepth;
    const translateY = ((y - centerY) / centerY) * translateDepth;

    setStyle({
      transform: `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateX(${translateX}px) translateY(${translateY}px)`,
    });
  };

  const handleMouseLeave = () => {
    setStyle({ transform: "perspective(900px) rotateX(0deg) rotateY(0deg) translateX(0px) translateY(0px)" });
  };

  return (
    <motion.a
      href={href}
      className={cn(
        "group relative block overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-950/90 p-6 shadow-2xl shadow-slate-950/10 transition-transform duration-500 hover:-translate-y-1 hover:shadow-2xl",
        className,
      )}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1000 }}
      whileHover={{ scale: 1.01 }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(96,165,250,0.16),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(52,211,153,0.14),_transparent_30%)] opacity-80" />
      <motion.div
        className="relative z-10 rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
        style={style}
        transition={{ type: "spring", stiffness: 160, damping: 18 }}
      >
        <div className="mb-6 inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-slate-200/90 backdrop-blur-sm">
          {subtitle}
        </div>
        <h3 className="text-2xl font-bold text-white sm:text-3xl">{title}</h3>
        <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">{description}</p>

        <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-white transition group-hover:text-patra-blue-200">
          <span>{linkText}</span>
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" />
            <path d="m13 6 6 6-6 6" />
          </svg>
        </div>
      </motion.div>
    </motion.a>
  );
}
