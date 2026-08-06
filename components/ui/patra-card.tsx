"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface PatraCardProps {
  title: string;
  description: string;
  label?: string;
  href?: string;
  cta?: string;
  image?: string;
  accent?: "blue" | "green" | "red";
  children?: React.ReactNode;
  className?: string;
}

const accentMap = {
  blue: "border-patra-blue-200 bg-patra-blue-50 text-slate-900",
  green: "border-patra-green-200 bg-patra-green-50 text-slate-900",
  red: "border-patra-red-200 bg-patra-red-50 text-slate-900",
};

export function PatraCard({ title, description, label, href, cta, image, accent = "blue", children, className }: PatraCardProps) {
  return (
    <motion.article whileHover={{ y: -4 }} className={cn("group overflow-hidden rounded-[2rem] border bg-white p-6 shadow-lg shadow-slate-900/5 transition-all duration-300", accentMap[accent], className)}>
      {label && <p className="text-xs uppercase tracking-[0.3em] text-slate-500 mb-4">{label}</p>}
      {image && (
        <div className="overflow-hidden rounded-3xl mb-6">
          <img src={image} alt={title} className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105" />
        </div>
      )}
      <h3 className="text-2xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-sm leading-relaxed text-slate-600 mb-6">{description}</p>
      {children}
      {href && cta && (
        <a href={href} className="inline-flex items-center gap-2 text-sm font-semibold text-patra-blue-500 hover:text-patra-blue-400 transition">
          {cta}
          <span aria-hidden="true">→</span>
        </a>
      )}
    </motion.article>
  );
}
