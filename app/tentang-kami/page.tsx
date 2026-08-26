"use client";

import { motion } from "motion/react";
import SiteNav from "@/components/system/SiteNav";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/components/i18n/LanguageProvider";

export default function TentangKami() {
  const { t } = useI18n();

  const aboutSubNav = [
    { key: "tentang.nav0", href: "/tentang-kami" },
    { key: "tentang.nav1", href: "/tentang-kami/visi-misi-tata-nilai" },
    { key: "tentang.nav2", href: "/tentang-kami/manajemen" },
    { key: "tentang.nav3", href: "/tentang-kami/tata-kelola-perusahaan" },
    { key: "tentang.nav4", href: "/tentang-kami/laporan-tahunan" },
    { key: "tentang.nav5", href: "/tentang-kami/penghargaan" },
    { key: "tentang.nav6", href: "/tentang-kami/anak-perusahaan" },
  ];

  const metrics = [
    { value: "22", label: t("home.metrics.0") },
    { value: "9", label: t("home.metrics.1") },
    { value: "850+", label: t("home.metrics.2") },
    { value: "9", label: t("home.metrics.3") },
  ];

  return (
    <main className="min-h-screen w-full bg-ink font-sans text-paper">
      <div className="relative z-10">
        <SiteNav />

        {/* Page Hero */}
        <section className="relative flex min-h-[60vh] items-end overflow-hidden pb-20 pt-32">
          <div className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://www.patra-jasa.com/wp-content/uploads/2021/07/patrajasa.jpg"
              alt={t("tentang.heroTitle")}
              className="h-full w-full object-cover"
              style={{ filter: "grayscale(20%) contrast(1.05)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
          </div>
          <div className="container-site relative z-10">
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="t-eyebrow mb-3 text-patragreen-300 font-bold">
              {t("tentang.eyebrow")}
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="t-section max-w-2xl text-white drop-shadow-md">
              {t("tentang.heroTitle")}
            </motion.h1>
          </div>
        </section>

        {/* Sub navigation */}
        <nav className="sticky top-16 z-40 border-b border-ash/15 bg-white shadow-sm" aria-label={t("tentang.eyebrow")}>
          <div className="container-site overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex gap-0 whitespace-nowrap">
              {aboutSubNav.map((l, i) => (
                <Link key={l.key} href={l.href}
                  className={`border-b-2 px-4 py-4 text-xs font-bold uppercase tracking-wider transition-all ${i === 0 ? "border-patragreen-600 text-patragreen-700 bg-patragreen-50/50" : "border-transparent text-ash hover:border-patragreen-500 hover:text-paper"}`}
                >
                  {t(l.key)}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* Main content */}
        <section className="section-pad bg-white">
          <div className="container-site">
            <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                <h2 className="t-section text-patragreen-700">{t("tentang.heroTitle")}</h2>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }} className="space-y-5">
                <p className="text-base leading-relaxed text-ash">{t("tentang.p1")}</p>
                <p className="text-base leading-relaxed text-ash">{t("tentang.p2")}</p>
              </motion.div>
            </div>

            {/* Company image */}
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }} className="media-frame mt-16 aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-lg md:aspect-[16/7]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://www.patra-jasa.com/wp-content/uploads/2021/07/patrajasa.jpg" alt={t("tentang.imgAlt")} className="h-full w-full object-cover" />
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="section-pad border-t border-ash/10 bg-sand">
          <div className="container-site">
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
              {metrics.map((m, i) => (
                <motion.div key={m.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }} className="border-t border-patragreen-600/30 pt-6 text-center">
                  <div className="t-metric text-patragreen-600">{m.value}</div>
                  <p className="t-caption mt-3 text-ash">{m.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About sub-pages cards */}
        <section className="section-pad border-t border-ash/10 bg-white">
          <div className="container-site">
            <p className="t-eyebrow mb-8 text-patragreen-600 font-bold">{t("tentang.explore")}</p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {aboutSubNav.slice(1).map((item, i) => (
                <motion.a key={item.key} href={item.href}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.6 }}
                  className="group flex items-center justify-between rounded-xl border border-ash/15 bg-sand px-6 py-5 hover:border-patragreen-500/40 hover:bg-patragreen-50/50 shadow-sm transition-all"
                >
                  <span className="font-bold text-paper group-hover:text-patragreen-700 transition-colors">{t(item.key)}</span>
                  <ArrowRight className="h-4 w-4 text-ash group-hover:text-patragreen-600 group-hover:translate-x-1 transition-all" />
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}