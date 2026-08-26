"use client";

import { motion } from "motion/react";
import SiteNav from "@/components/system/SiteNav";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/components/i18n/LanguageProvider";

export default function ProcurementPage() {
  const { t } = useI18n();

  const procurementItems = [
    { title: t("pengadaan.0"), desc: t("pengadaan.0.desc"), icon: <BagIcon /> },
    { title: t("pengadaan.1"), desc: t("pengadaan.1.desc"), icon: <ScaleIcon /> },
    { title: t("pengadaan.2"), desc: t("pengadaan.2.desc"), icon: <ContactIcon /> },
  ];

  return (
    <main className="min-h-screen w-full bg-ink font-sans text-paper">
      <div className="relative z-10">
        <SiteNav />

        <section className="relative flex min-h-[50vh] items-end overflow-hidden pb-16 pt-32 bg-white">
          <div className="container-site relative z-10">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="t-eyebrow mb-3 text-patragreen-600 font-bold">{t("nav.pengadaan")}</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="t-section max-w-2xl text-paper">
              {t("pengadaan.heroTitle1")} <span className="text-patragreen-600">{t("pengadaan.heroTitle2")}</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.7 }} className="mt-4 max-w-xl text-base text-ash">
              {t("pengadaan.heroDesc")}
            </motion.p>
          </div>
        </section>

        <section className="section-pad border-t border-ash/10 bg-sand">
          <div className="container-site">
            <p className="t-eyebrow mb-8 text-patragreen-600 font-bold">{t("pengadaan.eyebrow")}</p>
            <h2 className="t-section max-w-3xl mb-12 text-paper">{t("pengadaan.title")}</h2>
            <div className="grid gap-4 lg:grid-cols-3">
              {procurementItems.map((item, i) => (
                <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.6 }} className="rounded-2xl border border-ash/15 bg-white p-8 hover:border-patragreen-500/40 shadow-sm transition-colors">
                  <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-patragreen-50 border border-patragreen-200 text-patragreen-600">{item.icon}</div>
                  <h3 className="text-xl font-bold text-paper mb-4">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-ash">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad border-t border-ash/10 bg-white">
          <div className="container-site">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="rounded-3xl border border-patragreen-500/30 bg-gradient-to-br from-sand to-patragreen-50/60 p-12 text-center shadow-lg">
              <h2 className="t-section text-paper">{t("pengadaan.ctaTitle")}</h2>
              <p className="t-lead mx-auto mt-5 max-w-lg text-ash">{t("pengadaan.ctaDesc")}</p>
              <Link href="/kontak-kami" className="mt-8 inline-flex items-center gap-2 rounded-full bg-patragreen-600 px-8 py-3.5 text-sm font-bold text-white hover:bg-patragreen-500 transition-colors shadow-md">
                {t("common.hubungiTimPengadaan")} <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}

function BagIcon() {
  return (
    <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  );
}

function ScaleIcon() {
  return (
    <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 0 0112 2.944a11.955 0 01-8.618 3.04A12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}

function ContactIcon() {
  return (
    <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}