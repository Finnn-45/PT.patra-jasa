"use client";
import TentangSubnav from "@/components/system/TentangSubnav";
import SiteNav from "@/components/system/SiteNav";

import { motion } from "motion/react";
import Footer from "@/app/components/Footer";
import { Users } from "lucide-react";
import { useI18n } from "@/components/i18n/LanguageProvider";

export default function ManagementPage() {
  const { t } = useI18n();

  const leadership = [
    { name: t("mng.0"), role: t("mng.0.role") },
    { name: t("mng.1"), role: t("mng.1.role") },
    { name: t("mng.2"), role: t("mng.2.role") },
  ];

  return (
    <main className="min-h-screen w-full bg-ink font-sans text-paper">
      <div className="relative z-10">
        <SiteNav />
        <TentangSubnav />

        <section className="relative flex min-h-[50vh] items-end overflow-hidden pb-16 pt-32 bg-white">
          <div className="container-site relative z-10">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="t-eyebrow mb-3 text-patragreen-600 font-bold">{t("tentang.nav2")}</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="t-section max-w-2xl text-paper">
              {t("mng.heroTitle")} <span className="text-patragreen-600">{t("mng.heroTitle2")}</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.7 }} className="mt-4 max-w-xl text-base text-ash">
              {t("mng.heroDesc")}
            </motion.p>
          </div>
        </section>

        <section className="section-pad border-t border-ash/10 bg-sand">
          <div className="container-site">
            <p className="t-eyebrow mb-8 text-patragreen-600 font-bold">{t("mng.eyebrow")}</p>
            <h2 className="t-section max-w-3xl mb-12 text-paper">{t("mng.title")}</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {leadership.map((person, i) => (
                <motion.div key={person.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.6 }} className="rounded-2xl border border-ash/15 bg-white p-8 hover:border-patragreen-500/40 shadow-sm transition-colors">
                  <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-patragreen-50 border border-patragreen-200 text-patragreen-600"><Users className="h-7 w-7" /></div>
                  <p className="t-caption mb-2 text-patragreen-700 font-bold">{t("mng.posisi")}</p>
                  <h3 className="text-xl font-bold text-paper mb-2">{person.name}</h3>
                  <p className="text-sm leading-relaxed text-ash">{person.role}</p>
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