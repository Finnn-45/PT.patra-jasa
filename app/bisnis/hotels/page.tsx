"use client";

import { motion } from "motion/react";
import SiteNav from "@/components/system/SiteNav";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/components/i18n/LanguageProvider";

export default function HotelsPage() {
  const { t } = useI18n();

  const stats = [
    { value: "9", label: t("hotels.stats.0") },
    { value: "3+", label: t("hotels.stats.1") },
    { value: "5-Star", label: "Quality" },
  ];

  const hotelCategories = [
    { title: t("hotels.cat0"), description: t("hotels.cat0.desc") },
    { title: t("hotels.cat1"), description: t("hotels.cat1.desc") },
    { title: t("hotels.cat2"), description: t("hotels.cat2.desc") },
  ];

  const businessNav = [
    { label: t("nav.property"), href: "/products/property-1" },
    { label: t("nav.hotels"), href: "/products/hotels-resorts" },
    { label: t("nav.services"), href: "/products/services" },
  ];

  return (
    <main className="min-h-screen w-full bg-ink font-sans text-paper">
      <div className="relative z-10">
        <SiteNav />

        <section className="relative flex min-h-[60vh] items-end overflow-hidden pb-16 pt-32">
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/20" />
          <div className="container-site relative z-10">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="t-eyebrow mb-3 text-patragreen-300"
            >
              {t("nav.hotels")}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="t-section max-w-2xl"
            >
              {t("hotels.heroTitle1")} <span className="text-patragreen-400">{t("hotels.heroTitle2")}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="mt-4 max-w-xl text-base text-ash"
            >
              {t("hotels.heroDesc")}
            </motion.p>
          </div>
        </section>

        <section className="section-pad border-b border-ash/10">
          <div className="container-site grid grid-cols-3 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="border-t border-patragreen-600/30 pt-6 text-center"
              >
                <div className="t-metric text-patragreen-300">{s.value}</div>
                <p className="t-caption mt-3 text-ash">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="section-pad">
          <div className="container-site">
            <p className="t-eyebrow mb-8 text-patragreen-300">{t("hotels.divEyebrow")}</p>
            <h2 className="t-section max-w-3xl mb-12">{t("hotels.divTitle")}</h2>
            <p className="t-lead max-w-3xl text-ash">{t("hotels.divDesc")}</p>
          </div>
        </section>
<section className="section-pad border-t border-ash/10">
          <div className="container-site">
            <p className="t-eyebrow mb-8 text-patragreen-300">{t("hotels.catEyebrow")}</p>
            <h2 className="t-section max-w-3xl mb-12">{t("hotels.catTitle")}</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {hotelCategories.map((cat, i) => (
                <motion.div
                  key={cat.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.6 }}
                  className="group relative overflow-hidden rounded-2xl border border-ash/10 bg-charcoal/40 p-10 hover:border-patragreen-600/40 transition-colors"
                >
                  <p className="t-caption mb-4 text-patragreen-300">{cat.title}</p>
                  <p className="text-sm leading-relaxed text-ash">{cat.description}</p>
                  <Link
                    href="/products/hotels-resorts"
                    className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-patragreen-400 hover:text-patragreen-300 transition-colors"
                  >
                    {t("common.jelajahi")} <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad border-t border-ash/10">
          <div className="container-site">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-3xl border border-patragreen-600/30 bg-gradient-to-br from-patragreen-900/40 to-charcoal/40 p-12 text-center backdrop-blur-sm"
            >
              <h2 className="t-section">{t("hotels.ctaTitle")}</h2>
              <p className="t-lead mx-auto mt-5 max-w-lg text-ash">{t("hotels.ctaDesc")}</p>
              <Link
                href="/kontak-kami"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-patragreen-600 px-8 py-3.5 text-sm font-bold text-white hover:bg-patragreen-500 transition-colors"
              >
                {t("common.hubungiKami")} <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </section>

        <section className="section-pad border-t border-ash/10">
          <div className="container-site">
            <p className="t-eyebrow mb-8 text-patragreen-300">{t("common.bisnisLainnya")}</p>
            <div className="grid gap-4 sm:grid-cols-3">
              {businessNav.map((b, i) => (
                <motion.a
                  key={b.label}
                  href={b.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.6 }}
                  className="group flex items-center justify-between rounded-xl border border-ash/10 bg-charcoal/40 px-6 py-5 hover:border-patragreen-600/40 transition-all"
                >
                  <span className="font-semibold text-paper group-hover:text-patragreen-300 transition-colors">{b.label}</span>
                  <ArrowRight className="h-4 w-4 text-ash group-hover:text-patragreen-300 group-hover:translate-x-1 transition-all" />
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