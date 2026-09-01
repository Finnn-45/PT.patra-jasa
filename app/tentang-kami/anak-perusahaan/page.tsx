"use client";
import TentangSubnav from "@/components/system/TentangSubnav";
import SiteNav from "@/components/system/SiteNav";

import { motion } from "motion/react";
import Footer from "@/app/components/Footer";
import { Building2 } from "lucide-react";
import { useI18n } from "@/components/i18n/LanguageProvider";

export default function SubsidiariesPage() {
  const { t } = useI18n();

  const subsidiaries = [
    { name: "Patra Hospitality", description: t("anak.0.desc") },
    { name: "Patra Facility Management", description: t("anak.1.desc") },
    { name: "Patra Energy & Property", description: t("anak.2.desc") },
  ];

  return (
    <main className="min-h-screen w-full bg-ink font-sans text-paper">
      <div className="relative z-10">
        <SiteNav />
        <TentangSubnav />

        <section className="relative flex min-h-[50vh] items-end overflow-hidden pb-16 pt-32 bg-white">
          <div className="container-site relative z-10">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="t-eyebrow mb-3 text-patragreen-600 font-bold">{t("tentang.nav6")}</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="t-section max-w-2xl text-paper">
              {t("anak.heroTitle1")} <span className="text-patragreen-600">{t("anak.heroTitle2")}</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.7 }} className="mt-4 max-w-xl text-base text-ash">
              {t("anak.heroDesc")}
            </motion.p>
          </div>
        </section>

        <section className="section-pad border-t border-ash/10 bg-sand">
          <div className="container-site">
            <p className="t-eyebrow mb-8 text-patragreen-600 font-bold">{t("anak.eyebrow")}</p>
            <h2 className="t-section max-w-3xl mb-12 text-paper">{t("anak.title")}</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {subsidiaries.map((company, i) => (
                <motion.div key={company.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.6 }} className="rounded-2xl border border-ash/15 bg-white p-8 hover:border-patragreen-500/40 shadow-sm transition-colors">
                  <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-patragreen-50 border border-patragreen-200 text-patragreen-600"><Building2 className="h-7 w-7" /></div>
                  <h3 className="text-xl font-bold text-paper mb-3">{company.name}</h3>
                  <p className="text-sm leading-relaxed text-ash">{company.description}</p>
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