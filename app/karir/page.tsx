"use client";

import { motion } from "motion/react";
import SiteNav from "@/components/system/SiteNav";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import { ArrowRight, Briefcase } from "lucide-react";
import { useI18n } from "@/components/i18n/LanguageProvider";

export default function CareersPage() {
  const { t } = useI18n();

  const careerHighlights = [
    { title: t("karir.0.title"), desc: t("karir.0.desc") },
    { title: t("karir.1.title"), desc: t("karir.1.desc") },
    { title: t("karir.2.title"), desc: t("karir.2.desc") },
  ];

  const roles = [
    { title: "Hospitality", label: "Front Office / Food & Beverage" },
    { title: "Property", label: "Project Management / Development" },
    { title: "Services", label: "Facility Management / Logistics" },
  ];

  return (
    <main className="min-h-screen w-full bg-ink font-sans text-paper">
      <div className="relative z-10">
        <SiteNav />

        <section className="relative flex min-h-[55vh] items-end overflow-hidden pb-16 pt-32 bg-white">
          <div className="container-site relative z-10">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="t-eyebrow mb-3 text-patragreen-600 font-bold">{t("nav.karir")}</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="t-section max-w-2xl text-paper">
              {t("karir.heroTitle1")} <span className="text-patragreen-600">{t("karir.heroTitle2")}</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.7 }} className="mt-4 max-w-xl text-base text-ash">
              {t("karir.heroDesc")}
            </motion.p>
          </div>
        </section>

        <section className="section-pad bg-sand border-t border-ash/10">
          <div className="container-site">
            <p className="t-eyebrow mb-8 text-patragreen-600 font-bold">{t("common.mengapaPatraJasa")}</p>
            <h2 className="t-section max-w-3xl mb-12 text-paper">{t("karir.title")}</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {careerHighlights.map((h, i) => (
                <motion.div key={h.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.6 }} className="rounded-2xl border border-ash/15 bg-white p-8 hover:border-patragreen-500/40 shadow-sm transition-colors">
                  <h3 className="text-xl font-bold text-patragreen-700 mb-3">{h.title}</h3>
                  <p className="text-sm leading-relaxed text-ash">{h.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad border-t border-ash/10 bg-white">
          <div className="container-site">
            <p className="t-eyebrow mb-8 text-patragreen-600 font-bold">{t("karir.areaEy")}</p>
            <h2 className="t-section max-w-3xl mb-12 text-paper">{t("karir.areaTitle")}</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {roles.map((role, i) => (
                <motion.div key={role.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.6 }} className="rounded-2xl border border-ash/15 bg-sand p-8 hover:border-patragreen-500/40 shadow-sm transition-colors">
                  <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-patragreen-50 border border-patragreen-200 text-patragreen-600"><Briefcase className="h-7 w-7" /></div>
                  <h3 className="text-xl font-bold text-paper mb-2">{role.title}</h3>
                  <span className="inline-flex rounded-full border border-patragreen-200 bg-patragreen-50 px-4 py-1.5 text-xs font-bold text-patragreen-700">{role.label}</span>
                  <p className="mt-4 text-sm leading-relaxed text-ash">{t("karir.roleDesc")}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad border-t border-ash/10 bg-sand">
          <div className="container-site">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="rounded-3xl border border-patragreen-500/30 bg-gradient-to-br from-white to-patragreen-50/60 p-12 text-center shadow-lg">
              <h2 className="t-section text-paper">{t("karir.ctaTitle")}</h2>
              <p className="t-lead mx-auto mt-5 max-w-lg text-ash">{t("karir.ctaDesc")}</p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <a href="mailto:hr@patra-jasa.com" className="inline-flex items-center justify-center gap-2 rounded-full bg-patragreen-600 px-8 py-3.5 text-sm font-bold text-white hover:bg-patragreen-500 shadow-md transition-colors">
                  hr@patra-jasa.com
                </a>
                <Link href="/tentang-kami" className="inline-flex items-center justify-center gap-2 rounded-full border border-patragreen-600 px-8 py-3.5 text-sm font-bold text-patragreen-700 hover:bg-patragreen-50 transition-colors">
                  {t("common.kenaliPerusahaan")} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}