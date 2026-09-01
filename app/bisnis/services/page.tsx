"use client";
import SiteNav from "@/components/system/SiteNav";

import { motion } from "motion/react";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/components/i18n/LanguageProvider";

export default function ServicesPage() {
  const { t } = useI18n();

  const services = [
    {
      id: "rental",
      title: t("services.0.title"),
      desc: t("services.0.desc"),
      features: t("services.0.features").split("|").map((f) => f.trim()),
    },
    {
      id: "building",
      title: t("services.1.title"),
      desc: t("services.1.desc"),
      features: t("services.1.features").split("|").map((f) => f.trim()),
    },
    {
      id: "convention",
      title: t("services.2.title"),
      desc: t("services.2.desc"),
      features: t("services.2.features").split("|").map((f) => f.trim()),
    },
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
              {t("services.ey")}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="t-section max-w-2xl"
            >
              {t("services.title1")} <span className="text-patragreen-400">{t("services.title2")}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="mt-4 max-w-xl text-base text-ash"
            >
              {t("services.heroDesc")}
            </motion.p>
          </div>
        </section>

        <section className="section-pad">
          <div className="container-site space-y-16">
            {services.map((svc, i) => (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`grid gap-12 lg:grid-cols-2 lg:items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                <div className="flex-1">
                  <div className="mb-6 inline-grid h-16 w-16 place-items-center rounded-2xl bg-patragreen-700/40 text-patragreen-300">
                    <BuildingIcon />
                  </div>
                  <h2 className="t-section text-patragreen-400 mb-5">{svc.title}</h2>
                  <p className="text-base leading-relaxed text-ash">{svc.desc}</p>
                  <ul className="mt-6 space-y-3">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-sm text-ash">
                        <span className="grid h-6 w-6 place-items-center rounded-full bg-patragreen-700/40 text-patragreen-300">
                          <CheckStar />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Link
                      href="/products/services"
                      className="inline-flex items-center gap-2 rounded-full bg-patragreen-600 px-6 py-3 text-sm font-semibold text-white hover:bg-patragreen-500 transition-colors"
                    >
                      {t("common.selengkapnya")} <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
                <div className="media-frame aspect-[4/3] w-full flex-1 rounded-2xl overflow-hidden">
                  <div className="flex h-full w-full items-center justify-center rounded-2xl bg-gradient-to-br from-patragreen-800/60 to-charcoal/60 p-10">
                    <h3 className="t-section text-center text-paper">{svc.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
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
              <h2 className="t-section">{t("services.ctaTitle")}</h2>
              <p className="t-lead mx-auto mt-5 max-w-lg text-ash">{t("services.ctaDesc")}</p>
              <Link
                href="/kontak-kami"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-patragreen-600 px-8 py-3.5 text-sm font-bold text-white hover:bg-patragreen-500 transition-colors"
              >
                {t("common.hubungiKamiSekarang")} <ArrowRight className="h-4 w-4" />
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

function BuildingIcon() {
  return (
    <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  );
}

function CheckStar() {
  return (
    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}