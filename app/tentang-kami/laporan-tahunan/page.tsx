"use client";
import TentangSubnav from "@/components/system/TentangSubnav";
import SiteNav from "@/components/system/SiteNav";

import { motion } from "motion/react";
import Footer from "@/app/components/Footer";
import { FileText, Download } from "lucide-react";
import { useI18n } from "@/components/i18n/LanguageProvider";

export default function AnnualReportPage() {
  const { t } = useI18n();

  const reports = [
    { title: t("laporan.0"), description: t("laporan.0.desc"), cta: t("laporan.0.cta") },
    { title: t("laporan.1"), description: t("laporan.1.desc"), cta: t("laporan.1.cta") },
  ];

  return (
    <main className="min-h-screen w-full bg-ink font-sans text-paper">
      <div className="relative z-10">
        <SiteNav />
        <TentangSubnav />

        <section className="relative flex min-h-[50vh] items-end overflow-hidden pb-16 pt-32 bg-white">
          <div className="container-site relative z-10">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="t-eyebrow mb-3 text-patragreen-600 font-bold">{t("tentang.nav4")}</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="t-section max-w-2xl text-paper">
              {t("laporan.heroTitle1")} <span className="text-patragreen-600">{t("laporan.heroTitle2")}</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.7 }} className="mt-4 max-w-xl text-base text-ash">
              {t("laporan.heroDesc")}
            </motion.p>
          </div>
        </section>

        <section className="section-pad border-t border-ash/10 bg-sand">
          <div className="container-site">
            <p className="t-eyebrow mb-8 text-patragreen-600 font-bold">{t("laporan.eyebrow")}</p>
            <h2 className="t-section max-w-3xl mb-12 text-paper">{t("laporan.title")}</h2>
            <div className="grid gap-4 lg:grid-cols-2">
              {reports.map((report, i) => (
                <motion.div key={report.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.6 }} className="rounded-2xl border border-ash/15 bg-white p-8 hover:border-patragreen-500/40 shadow-sm transition-colors">
                  <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-patragreen-50 border border-patragreen-200 text-patragreen-600"><FileText className="h-7 w-7" /></div>
                  <h3 className="text-xl font-bold text-paper mb-3">{report.title}</h3>
                  <p className="text-sm leading-relaxed text-ash mb-6">{report.description}</p>
                  <button className="inline-flex items-center gap-2 rounded-full bg-patragreen-600 px-6 py-3 text-sm font-semibold text-white hover:bg-patragreen-500 transition-colors shadow-sm">
                    {report.cta} <Download className="h-4 w-4" />
                  </button>
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