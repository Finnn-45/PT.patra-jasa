"use client";
import { motion, type Variants } from "motion/react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

interface PageHeroProps {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  description: string;
  variant?: "blue" | "green" | "dark";
  stats?: { value: string; label: string }[];
}

const variantStyles = {
  blue: {
    bg: "bg-patra-blue-500",
    accent: "text-patra-blue-300",
    badge: "bg-patra-blue-400",
    radial: "rgba(255,255,255,0.16)",
    radial2: "rgba(50,81,209,0.4)",
    glow: "bg-patra-blue-400/20",
  },
  green: {
    bg: "bg-patra-green-600",
    accent: "text-patra-green-200",
    badge: "bg-patra-green-300",
    radial: "rgba(255,255,255,0.18)",
    radial2: "rgba(53,134,14,0.5)",
    glow: "bg-patra-green-400/20",
  },
  dark: {
    bg: "bg-slate-900",
    accent: "text-patra-blue-300",
    badge: "bg-patra-blue-400",
    radial: "rgba(255,255,255,0.12)",
    radial2: "rgba(50,81,209,0.3)",
    glow: "bg-patra-blue-400/15",
  },
};

export default function PageHero({ eyebrow, title, titleAccent, description, variant = "blue", stats }: PageHeroProps) {
  const styles = variantStyles[variant];

  return (
    <section data-nav-theme="dark" className={`relative overflow-hidden ${styles.bg} py-32 md:py-40 text-white`}>
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.16),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(50,81,209,0.4),_transparent_45%)]"
        style={{
          background: `radial-gradient(circle at top left, ${styles.radial}, transparent 40%), radial-gradient(circle at bottom right, ${styles.radial2}, transparent 45%)`,
        }}
      />
      <div className={`absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full ${styles.glow} blur-3xl`} />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10"
      >
        <motion.div
          variants={fadeUp}
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md mb-8"
        >
          <span className={`w-2 h-2 rounded-full ${styles.badge} animate-pulse`} />
          <span className="text-xs font-bold tracking-widest uppercase text-white/90">{eyebrow}</span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight max-w-4xl"
        >
          {title} {titleAccent && <span className={styles.accent}>{titleAccent}</span>}
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-3xl text-lg text-white/90 leading-relaxed font-light"
        >
          {description}
        </motion.p>

        {stats && (
          <motion.div
            variants={fadeUp}
            className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl border-t border-white/15 pt-10"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl md:text-4xl font-black text-white">{s.value}</div>
                <div className="text-sm text-white/70 mt-1 font-medium uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}