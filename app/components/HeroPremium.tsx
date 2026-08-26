"use client";

import { motion, type Variants } from "motion/react";
import { ArrowRight } from "lucide-react";
import Container from "@/components/system/Container";
import PatraButton from "@/components/system/PatraButton";

/* ── Motion primitives ──────────────────────────────────────────────────────
   Purposeful, cinematic entrances only. No decorative looping.            */
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const lineReveal: Variants = {
  hidden: { y: "115%" },
  visible: { y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } },
};

/**
 * Cinematic full-viewport hero.
 * ENERGY + ARCHITECTURE + MOVEMENT are expressed editorially: a slow
 * architectural image treatment, restrained typography motion, and a quiet
 * scroll cue — no 3D, no noise.
 */
export default function HeroPremium() {
  return (
    <section data-nav-theme="dark" className="relative min-h-screen w-full overflow-hidden bg-transparent">
      {/* ── Image treatment: architecture, slow settle-in ── */}
      <div className="absolute inset-0" aria-hidden>
        <motion.div
          initial={{ scale: 1.18 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=70&w=1600&auto=format&fit=crop"
            alt=""
            className="h-full w-full object-cover object-center"
            style={{ filter: "grayscale(40%) contrast(1.04)", opacity: 0.35 }}
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-ink/75 via-ink/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
      </div>

      {/* ── Architectural vertical hairlines (desktop) ── */}
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden md:grid md:grid-cols-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="h-full w-px justify-self-end bg-paper/5" />
        ))}
      </div>

      {/* ── Content ── */}
      <Container className="relative z-10 flex min-h-screen flex-col justify-center pb-24 pt-32 md:pb-28">
        <motion.div initial="hidden" animate="visible" variants={stagger}>
          {/* Label */}
          <motion.p
            variants={fadeUp}
            className="mb-8 inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.35em] text-patragreen-300"
          >
            <span className="h-px w-10 bg-patragreen-300/70" aria-hidden />
            PT Patra Jasa
          </motion.p>

          {/* Headline — masked line reveals */}
          <h1 className="t-display uppercase text-paper">
            <span className="block overflow-hidden pb-[0.08em]">
              <motion.span variants={lineReveal} className="block">
                Building Experiences.
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-[0.08em]">
              <motion.span variants={lineReveal} className="block text-ash">
                Powering
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-[0.08em]">
              <motion.span
                variants={lineReveal}
                className="block text-patragreen-400"
              >
                Indonesia.
              </motion.span>
            </span>
          </h1>
        </motion.div>

        {/* Supporting copy + CTA */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="mt-12 flex flex-col gap-10 md:flex-row md:items-end md:justify-between"
        >
          <motion.p variants={fadeUp} className="t-lead max-w-md text-ash">
            Part of the Pertamina ecosystem, creating value through hospitality,
            property and business services.
          </motion.p>

          <motion.div variants={fadeUp}>
            <PatraButton href="#statement" variant="primary" size="lg">
              Explore Patra Jasa
            </PatraButton>
          </motion.div>
        </motion.div>
      </Container>

      {/* ── Bottom bar: hairline + editorial meta + scroll cue ── */}
      <div className="absolute inset-x-0 bottom-0 z-10">
        <div className="divider-hair" aria-hidden />
        <Container className="flex items-end justify-between gap-6 py-5">
          <p className="t-caption text-ash">
            Est. 1975 · Jakarta, Indonesia
          </p>
          <p className="hidden items-center gap-3 sm:flex">
            <span className="t-caption text-ash">Scroll</span>
            <motion.span
              aria-hidden
              className="block h-px w-16 origin-left bg-ash"
              animate={{ scaleX: [0.2, 1, 0.2] }}
              transition={{ repeat: Infinity, duration: 2.6, ease: "easeInOut" }}
            />
            <ArrowRight className="h-3.5 w-3.5 text-ash" />
          </p>
        </Container>
      </div>
    </section>
  );
}