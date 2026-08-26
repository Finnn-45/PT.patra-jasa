"use client";

import { motion, type Variants } from "motion/react";
import {
  Building2,
  Hotel,
  Settings,
  ArrowRight,
  ChevronDown,
  MapPin,
  Mail,
  Phone,
  BadgeCheck,
} from "lucide-react";
import { useI18n } from "@/components/i18n/LanguageProvider";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

function CorporateNavbar() {
  const { t } = useI18n();
  const links = [
    { key: "c3d.nav.about", href: "#tentang" },
    { key: "c3d.nav.bisnis", href: "#bisnis" },
    { key: "c3d.nav.media", href: "#media" },
    { key: "c3d.nav.kontak", href: "#kontak" },
  ];
  return (
    <header className="fixed top-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2">
      <nav className="flex items-center justify-between rounded-2xl border border-white/15 bg-white/10 px-4 py-2.5 shadow-[0_8px_40px_-12px_rgba(2,30,88,0.6)] backdrop-blur-xl">
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="Patra Jasa" className="h-6 w-auto object-contain" />
          <span className="hidden text-sm font-bold tracking-wide text-white sm:inline">
            Patra Jasa
          </span>
        </div>
        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-white/85 transition hover:bg-white/10 hover:text-white"
            >
              {t(l.key)}
            </a>
          ))}
        </div>
        <a
          href="#kontak"
          className="rounded-full bg-[#ED1B2F] px-4 py-2 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#F25163]"
        >
          {t("c3d.nav.cta")}
        </a>
      </nav>
    </header>
  );
}

/* ── Hero ─────────────────────────────────────────────────────────────────── */
function Hero() {
  const { t } = useI18n();
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24 lg:px-16">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="relative z-10 max-w-3xl"
      >
        <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
          <span className="h-2 w-2 rounded-full bg-[#ED1B2F] animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-white/90">
            {t("c3d.badge")}
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="text-5xl font-black leading-[1.05] tracking-tight text-white drop-shadow-2xl md:text-7xl"
        >
          {t("c3d.hero.title1")}
          <br />
          <span className="bg-gradient-to-r from-[#ED1B2F] via-[#F25163] to-[#EACE6C] bg-clip-text text-transparent">
            {t("c3d.hero.title2")}
          </span>
        </motion.h1>

        <motion.p variants={fadeUp} className="mt-6 max-w-xl text-lg leading-relaxed font-light text-white/85 md:text-xl">
          {t("c3d.hero.desc")}
        </motion.p>

        <motion.div variants={fadeUp} className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#bisnis"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#ED1B2F] px-8 py-4 font-bold text-white shadow-[0_10px_40px_-10px_rgba(237,27,47,0.7)] transition hover:-translate-y-1 hover:bg-[#F25163]"
          >
            {t("c3d.hero.cta1")}
            <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
          </a>
          <a
            href="#tentang"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-md transition hover:bg-white/20"
          >
            {t("c3d.hero.cta2")}
          </a>
        </motion.div>
      </motion.div>

      <div className="pointer-events-none absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white/70">
        <span className="text-xs font-semibold uppercase tracking-[0.3em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </div>
    </section>
  );
}
/* ── Tentang ──────────────────────────────────────────────────────────────── */
function Tentang() {
  const { t } = useI18n();
  const stats = [
    { value: 22, label: t("c3d.stats0") },
    { value: 9, label: t("c3d.stats1") },
    { value: 850, label: t("c3d.stats2"), suffix: "+" },
    { value: 9, label: t("c3d.stats3") },
  ];
  return (
    <section id="tentang" className="relative flex min-h-screen items-center px-6 py-24 lg:px-16">
      <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-2">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#EACE6C]">
            {t("c3d.tentang.eyebrow")}
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl font-bold leading-tight text-white md:text-5xl">
            {t("c3d.tentang.title1")} <span className="text-[#5EAAE3]">{t("c3d.tentang.title2")}</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-6 text-lg font-light leading-relaxed text-white/85">
            {t("c3d.tentang.desc")}
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex items-center gap-3 text-white/90">
            <BadgeCheck className="h-5 w-5 text-[#B7D731]" />
            <span className="font-medium">{t("c3d.tentang.badge")}</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
          className="grid grid-cols-2 gap-4"
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              className="rounded-2xl border border-white/15 bg-white/10 p-6 text-center backdrop-blur-xl"
            >
              <div className="text-4xl font-black text-white md:text-5xl">
                {s.value}
                {s.suffix ?? ""}
              </div>
              <div className="mt-2 text-xs font-bold uppercase tracking-widest text-white/70">
                {s.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ── Pilar Bisnis ─────────────────────────────────────────────────────────── */
function Bisnis() {
  const { t } = useI18n();
  const pillars = [
    { icon: Building2, title: "Property", desc: t("c3d.pillars.0.desc"), accent: "from-patra-blue-400/70 to-patra-blue-500/80", ring: "ring-patra-blue-300/40" },
    { icon: Hotel, title: "Hotels & Resorts", desc: t("c3d.pillars.1.desc"), accent: "from-patra-red-300/70 to-patra-red-500/80", ring: "ring-patra-red-300/40" },
    { icon: Settings, title: "Services", desc: t("c3d.pillars.2.desc"), accent: "from-patra-green-300/70 to-patra-green-500/80", ring: "ring-patra-green-300/40" },
  ];
  return (
    <section id="bisnis" className="relative flex min-h-screen items-center px-6 py-24 lg:px-16">
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
          className="mb-12 text-center"
        >
          <motion.p variants={fadeUp} className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#EACE6C]">
            {t("c3d.pillars.eyebrow")}
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl font-bold text-white md:text-5xl">
            {t("c3d.pillars.title")}
          </motion.h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-8 backdrop-blur-xl transition hover:-translate-y-2 hover:border-white/30"
            >
              <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${p.accent} opacity-40 blur-2xl`} />
              <p.icon className="mb-5 h-12 w-12 text-white drop-shadow" strokeWidth={1.5} />
              <h3 className="text-2xl font-bold text-white">{p.title}</h3>
              <p className="mt-3 font-light leading-relaxed text-white/80">{p.desc}</p>
              <a
                href="#kontak"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#EACE6C] transition group-hover:gap-3"
              >
                {t("c3d.pillars.cta")} <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
/* ── Media & Informasi ────────────────────────────────────────────────────── */
function Media() {
  const { t } = useI18n();
  const media = [
    { tag: t("c3d.media.0.tag"), title: t("c3d.media.0.title"), date: t("c3d.media.0.date") },
    { tag: t("c3d.media.1.tag"), title: t("c3d.media.1.title"), date: t("c3d.media.1.date") },
    { tag: t("c3d.media.2.tag"), title: t("c3d.media.2.title"), date: t("c3d.media.2.date") },
  ];
  return (
    <section id="media" className="relative flex min-h-screen items-center px-6 py-24 lg:px-16">
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
          className="mb-12"
        >
          <motion.p variants={fadeUp} className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#EACE6C]">
            {t("c3d.media.eyebrow")}
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl font-bold text-white md:text-5xl">
            {t("c3d.media.title")}
          </motion.h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {media.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
              className="flex flex-col justify-between rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl"
            >
              <div>
                <span className="inline-block rounded-full bg-[#ED1B2F] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  {m.tag}
                </span>
                <h3 className="mt-4 text-xl font-bold leading-snug text-white">{m.title}</h3>
              </div>
              <p className="mt-6 text-sm text-white/60">{m.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Kontak / CTA + Footer ────────────────────────────────────────────────── */
function Kontak() {
  const { t } = useI18n();
  return (
    <section id="kontak" className="relative flex min-h-screen flex-col justify-end px-6 pb-10 pt-24 lg:px-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={stagger}
        className="mx-auto mb-14 w-full max-w-4xl rounded-3xl border border-white/20 bg-gradient-to-br from-[#006CB8]/80 to-[#003C66]/80 p-10 text-center backdrop-blur-2xl md:p-14"
      >
        <motion.h2 variants={fadeUp} className="text-3xl font-bold text-white md:text-5xl">
          {t("c3d.kontak.title")}
        </motion.h2>
        <motion.p variants={fadeUp} className="mx-auto mt-4 max-w-2xl font-light leading-relaxed text-white/80">
          {t("c3d.kontak.desc")}
        </motion.p>
        <motion.div variants={fadeUp} className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
          <div className="flex items-center gap-2 text-white/85">
            <Mail className="h-5 w-5 text-[#EACE6C]" /> info@patrajasa.co.id
          </div>
          <div className="flex items-center gap-2 text-white/85">
            <Phone className="h-5 w-5 text-[#EACE6C]" /> +62 21 1234 5678
          </div>
        </motion.div>
        <motion.div variants={fadeUp} className="mt-6 flex items-center justify-center gap-2 text-white/70">
          <MapPin className="h-5 w-5 text-[#EACE6C]" /> Jakarta, Indonesia
        </motion.div>
      </motion.div>

      <footer className="mx-auto w-full max-w-6xl border-t border-white/15 py-8 text-center text-sm text-white/60">
        <p>{t("c3d.kontak.footer", { year: new Date().getFullYear() })}</p>
      </footer>
    </section>
  );
}

export default function CorporatePage() {
  return (
    <>
      <CorporateNavbar />
      <Hero />
      <Tentang />
      <Bisnis />
      <Media />
      <Kontak />
    </>
  );
}