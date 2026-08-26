"use client";

import { motion } from "motion/react";
import SiteNav from "@/components/system/SiteNav";
import Footer from "@/app/components/Footer";
import { Award } from "lucide-react";
import { useI18n } from "@/components/i18n/LanguageProvider";

export default function AwardsPage() {
  const { t } = useI18n();

  const awards = [
    { title: "APQ Awards 2026", desc: t("award.0.desc") },
    { title: t("award.1"), desc: t("award.1.desc") },
    { title: t("award.2"), desc: t("award.2.desc") },
  ];

  return (
    <main className="min-h-screen w-full bg-ink font-sans text-paper">
      <div className="relative z-10">
        <SiteNav />

        <section className="relative flex min-h-[50vh] items-end overflow-hidden pb-16 pt-32 bg-white">
          <div className="container-site relative z-10">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="t-eyebrow mb-3 text-patragreen-600 font-bold">{t("tentang.nav5")}</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="t-section max-w-2xl text-paper">
              {t("award.heroTitle1")} <span className="text-patragreen-600">{t("award.heroTitle2")}</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.7 }} className="mt-4 max-w-xl text-base text-ash">
              {t("award.heroDesc")}
            </motion.p>
          </div>
        </section>

        <section className="section-pad border-t border-ash/10 bg-sand">
          <div className="container-site">
            <p className="t-eyebrow mb-8 text-patragreen-600 font-bold">{t("award.eyebrow")}</p>
            <h2 className="t-section max-w-3xl mb-12 text-paper">{t("award.title")}</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {awards.map((award, i) => (
                <motion.div key={award.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.6 }} className="rounded-2xl border border-ash/15 bg-white p-8 hover:border-patragreen-500/40 shadow-sm transition-colors">
                  <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-patragreen-50 border border-patragreen-200 text-patragreen-600"><Award className="h-7 w-7" /></div>
                  <h3 className="text-xl font-bold text-paper mb-3">{award.title}</h3>
                  <p className="text-sm leading-relaxed text-ash">{award.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}