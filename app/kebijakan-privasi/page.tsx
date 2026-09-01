"use client";
import SiteNav from "@/components/system/SiteNav";

import { motion } from "motion/react";
import Footer from "@/app/components/Footer";
import { useI18n } from "@/components/i18n/LanguageProvider";

export default function PrivacyPolicyPage() {
  const { t } = useI18n();

  const sections = [
    { title: t("privasi.0.title"), body: t("privasi.0.body") },
    { title: t("privasi.1.title"), body: t("privasi.1.body") },
    { title: t("privasi.2.title"), body: t("privasi.2.body") },
    { title: t("privasi.3.title"), body: t("privasi.3.body") },
  ];

  return (
    <main className="min-h-screen w-full bg-ink font-sans text-paper">
      <div className="relative z-10">
        <SiteNav />

        <section className="relative flex min-h-[50vh] items-end overflow-hidden pb-16 pt-32 bg-white">
          <div className="container-site relative z-10">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="t-eyebrow mb-3 text-patragreen-600 font-bold">{t("footer.l.lainnya3")}</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="t-section max-w-2xl text-paper">{t("privasi.heroTitle")}</motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.7 }} className="mt-4 max-w-xl text-base text-ash">
              {t("privasi.heroDesc")}
            </motion.p>
          </div>
        </section>

        <section className="section-pad border-t border-ash/10 bg-sand">
          <div className="container-site grid gap-4">
            {sections.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05, duration: 0.6 }} className="rounded-2xl border border-ash/15 bg-white p-8 shadow-sm">
                <h2 className="t-caption mb-3 text-patragreen-700 font-bold">{s.title}</h2>
                <p className="text-base leading-relaxed text-ash">{s.body}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}