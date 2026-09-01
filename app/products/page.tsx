"use client";
import SiteNav from "@/components/system/SiteNav";

import { motion } from "motion/react";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/components/i18n/LanguageProvider";

export default function ProductsOverviewPage() {
  const { t } = useI18n();

  const pillars = [
    {
      title: t("products.pillar0"),
      subtitle: "Property",
      description: t("products.pillar0.desc"),
      href: "/products/property-1",
    },
    {
      title: t("products.pillar1"),
      subtitle: "Hotels & Resorts",
      description: t("products.pillar1.desc"),
      href: "/products/hotels-resorts",
    },
    {
      title: t("products.pillar2"),
      subtitle: "Services",
      description: t("products.pillar2.desc"),
      href: "/products/services",
    },
  ];

  return (
    <main className="min-h-screen w-full bg-ink font-sans text-paper">
      <div className="relative z-10">
        <SiteNav />

        <section className="relative flex min-h-[55vh] items-end overflow-hidden pb-16 pt-32 bg-white">
          <div className="container-site relative z-10">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="t-eyebrow mb-3 text-patragreen-600 font-bold"
            >
              {t("nav.bisnis")}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="t-section max-w-2xl text-paper"
            >
              {t("products.heroTitle1")} <span className="text-patragreen-600">{t("products.heroTitle2")}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="mt-4 max-w-xl text-base text-ash"
            >
              {t("products.heroDesc")}
            </motion.p>
          </div>
        </section>

        <section className="section-pad bg-sand border-t border-ash/10">
          <div className="container-site">
            <p className="t-eyebrow mb-8 text-patragreen-600 font-bold">{t("products.eyebrow")}</p>
            <h2 className="t-section max-w-3xl mb-12 text-paper">{t("products.title")}</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.6 }}
                  className="flex flex-col rounded-2xl border border-ash/15 bg-white p-8 hover:border-patragreen-500/40 shadow-sm transition-colors"
                >
                  <p className="t-caption mb-3 text-patragreen-700 font-bold">{p.subtitle}</p>
                  <h3 className="text-xl font-bold text-paper mb-3">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-ash mb-6 flex-1">{p.description}</p>
                  <Link
                    href={p.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-patragreen-600 hover:text-patragreen-500 transition-colors"
                  >
                    {t("common.jelajahi")} <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad border-t border-ash/10 bg-white">
          <div className="container-site">
            <p className="t-eyebrow mb-8 text-patragreen-600 font-bold">{t("products.sorotan")}</p>
            <div className="grid gap-4 lg:grid-cols-3">
              {pillars.map((p, i) => (
                <motion.a
                  key={p.subtitle}
                  href={p.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.6 }}
                  className="group flex items-center justify-between rounded-xl border border-ash/15 bg-sand px-6 py-5 hover:border-patragreen-500/40 hover:bg-patragreen-50/50 shadow-sm transition-all"
                >
                  <div>
                    <h3 className="font-bold text-paper group-hover:text-patragreen-700 transition-colors">{p.subtitle}</h3>
                    <p className="mt-1 text-xs text-ash">{p.description}</p>
                  </div>
                  <ArrowRight className="ml-4 h-4 w-4 shrink-0 text-ash group-hover:text-patragreen-600 group-hover:translate-x-1 transition-all" />
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