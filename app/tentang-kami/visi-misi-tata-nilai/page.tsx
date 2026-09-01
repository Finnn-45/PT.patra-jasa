"use client";
import TentangSubnav from "@/components/system/TentangSubnav";
import SiteNav from "@/components/system/SiteNav";

import { motion } from "motion/react";
import Footer from "@/app/components/Footer";

import { useI18n } from "@/components/i18n/LanguageProvider";

export default function VisiMisiPage() {
  const { t } = useI18n();

  const values = [
    { title: t("visi.v0"), description: t("visi.v0.desc") },
    { title: t("visi.v1"), description: t("visi.v1.desc") },
    { title: t("visi.v2"), description: t("visi.v2.desc") },
    { title: t("visi.v3"), description: t("visi.v3.desc") },
    { title: t("visi.v4"), description: t("visi.v4.desc") },
    { title: t("visi.v5"), description: t("visi.v5.desc") },
  ];

  return (
    <main className="min-h-screen w-full bg-ink font-sans text-paper">
      <div className="relative z-10">
        <SiteNav />
        <TentangSubnav />

        <section className="relative flex min-h-[50vh] items-end overflow-hidden pb-16 pt-32 bg-white">
          <div className="container-site relative z-10">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="t-eyebrow mb-3 text-patragreen-600 font-bold">{t("tentang.eyebrow")}</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="t-section max-w-2xl text-paper">
              {t("visi.heroTitle")}
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.7 }} className="mt-4 max-w-xl text-base text-ash">
              {t("visi.heroDesc")}
            </motion.p>
          </div>
        </section>

        <section className="section-pad border-t border-ash/10 bg-white">
          <div className="container-site">
            <p className="t-eyebrow mb-8 text-patragreen-600 font-bold">{t("visi.eyebrow")}</p>
            <h2 className="t-section max-w-3xl mb-12 text-paper">{t("visi.title")}</h2>
            <div className="grid gap-4 lg:grid-cols-2">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="rounded-2xl border border-ash/15 bg-sand p-8 shadow-sm">
                <h3 className="t-caption mb-4 text-patragreen-700 font-bold">{t("visi.visiLabel")}</h3>
                <p className="text-base leading-relaxed text-ash">{t("visi.visiText")}</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.6 }} className="rounded-2xl border border-ash/15 bg-sand p-8 shadow-sm">
                <h3 className="t-caption mb-4 text-patragreen-700 font-bold">{t("visi.misiLabel")}</h3>
                <ul className="list-disc space-y-3 pl-5 text-base leading-relaxed text-ash">
                  <li>{t("visi.m1")}</li>
                  <li>{t("visi.m2")}</li>
                  <li>{t("visi.m3")}</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* AKHLAK Section — Pertamina-style layout */}
        <section className="section-pad border-t border-ash/10 bg-white">
          <div className="container-site">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="t-eyebrow mb-3 font-bold text-patragreen-600"
            >
              {t("visi.valuesEyebrow")}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="t-section mb-10 text-paper"
            >
              {t("visi.valuesTitle")}
            </motion.h2>

            {/* Main AKHLAK Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden rounded-3xl border border-ash/10 bg-white shadow-lg"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Left — Logo panel */}
                <div
                  className="flex flex-col items-center justify-center gap-5 p-10 lg:w-72 lg:shrink-0 lg:border-r lg:border-ash/10"
                  style={{ background: "linear-gradient(160deg, #f8f9fc 0%, #eef2f8 100%)" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/Web_Photo_Editor-4.webp"
                    alt="Logo AKHLAK"
                    className="h-auto w-48 object-contain"
                  />
                  <p className="text-center text-[10px] font-semibold uppercase tracking-widest leading-relaxed text-ash/70">
                    Amanah · Kompeten · Harmonis<br />Loyal · Adaptif · Kolaboratif
                  </p>
                </div>

                {/* Right — Values grid */}
                <div className="flex-1 p-8 lg:p-10">
                  <div className="grid grid-cols-1 gap-0 sm:grid-cols-2">
                    {values.map((item, i) => {
                      // AKH (0,1,2) = navy, LAK (3,4,5) = teal — matching the logo
                      const isNavy = i < 3;
                      const color = isNavy ? "#1e3770" : "#00b8d4";
                      return (
                        <motion.div
                          key={item.title}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 + i * 0.07, duration: 0.5 }}
                          className="group border-b border-ash/10 py-6 pr-6 last:border-b-0 sm:[&:nth-child(2n)]:border-l sm:[&:nth-child(2n)]:pl-6 sm:[&:nth-child(2n)]:pr-0"
                        >
                          <h3
                            className="mb-1.5 text-sm font-black uppercase tracking-wider"
                            style={{ color }}
                          >
                            {item.title}
                          </h3>
                          <p className="text-sm leading-relaxed text-ash">{item.description}</p>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}