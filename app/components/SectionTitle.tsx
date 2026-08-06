"use client";
import { motion, type Variants } from "motion/react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

interface SectionTitleProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  accent?: "blue" | "green";
}

export default function SectionTitle({ eyebrow, title, description, align = "center", accent = "blue" }: SectionTitleProps) {
  const accentColor = accent === "blue" ? "text-patra-blue-400" : "text-patra-green-500";
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className={`mb-14 ${alignClass}`}
    >
      <p className={`text-sm font-bold ${accentColor} tracking-widest uppercase mb-3`}>{eyebrow}</p>
      <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">{title}</h2>
      {description && (
        <p className={`mt-4 text-slate-600 text-base md:text-lg font-light leading-relaxed ${align === "center" ? "max-w-3xl mx-auto" : "max-w-3xl"}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}