"use client";
import SiteNav from "@/components/system/SiteNav";

import { motion } from "motion/react";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import { ArrowRight, Building2, MapPin } from "lucide-react";
import { useI18n } from "@/components/i18n/LanguageProvider";

export default function PropertyPage() {
  const { t } = useI18n();

  const stats = [
    { value: "40+", label: t("property.stats.0") },
    { value: "10+", label: t("property.stats.1") },
    { value: "50+", label: t("property.stats.2") },
    { value: "100%", label: t("property.stats.3") },
  ];

  const propertyTypes = [
    {
      title: t("property.type0"),
      icon: <Building2 className="h-7 w-7" />,
      desc: t("property.type0.desc"),
      features: t("property.type0.features").split("|").map((f) => f.trim()),
      locations: ["Jakarta", "Cirebon", "Yogyakarta"],
    },
    {
      title: t("property.type1"),
      icon: <Building2 className="h-7 w-7" />,
      desc: t("property.type1.desc"),
      features: t("property.type1.features").split("|").map((f) => f.trim()),
      locations: ["Jakarta", "Bandung", "Surabaya"],
    },
  ];

  const upcomingProjects = [
    {
      nama: t("property.up.0.nama"),
      lokasi: t("property.up.0.lokasi"),
      desc: t("property.up.0.desc"),
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

        <section className="relative flex min-h-[65vh] items-end overflow-hidden pb-20 pt-32">
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/20" />
          <div className="container-site relative z-10">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="t-eyebrow mb-3 text-patragreen-300"
            >
              Property
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="t-section max-w-2xl"
            >
              {t("property.heroTitle1")} <span className="text-patragreen-400">{t("property.heroTitle2")}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="mt-4 max-w-xl text-base text-ash"
            >
              {t("property.heroDesc")}
            </motion.p>
          </div>
        </section>

        <section className="section-pad border-b border-ash/10">
          <div className="container-site grid grid-cols-2 gap-8 lg:grid-cols-4">
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
            <p className="t-eyebrow mb-8 text-patragreen-300">Property</p>
            <div className="grid gap-6 lg:grid-cols-2">
              {propertyTypes.map((type, i) => (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="group rounded-2xl border border-ash/10 bg-charcoal/40 p-8 hover:border-patragreen-600/40 transition-colors"
                >
                  <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-patragreen-700/40 text-patragreen-300">
                    {type.icon}
                  </div>
                  <h3 className="text-xl font-bold text-paper mb-3">{type.title}</h3>
                  <p className="text-sm leading-relaxed text-ash mb-6">{type.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {type.features.map((f) => (
                      <span key={f} className="rounded-full border border-patragreen-600/40 bg-patragreen-900/30 px-4 py-1.5 text-xs font-semibold text-patragreen-300">
                        {f}
                      </span>
                    ))}
                  </div>
                  <span className="flex items-center gap-2 text-xs text-ash">
                    <MapPin className="h-3.5 w-3.5 text-patragreen-400" />
                    {type.locations.join(" | ")}
                  </span>
                  <div className="mt-6">
                    <Link
                      href="/products/property-1"
                      className="inline-flex items-center gap-2 text-xs font-bold text-patragreen-400 hover:text-patragreen-300 transition-colors"
                    >
                      {t("common.selengkapnya")} <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad border-t border-ash/10">
          <div className="container-site">
            <p className="t-eyebrow mb-8 text-patragreen-300">{t("property.upcomingEy")}</p>
            <h2 className="t-section max-w-3xl mb-12">{t("property.upcomingTitle")}</h2>
            <div className="grid gap-4 lg:grid-cols-2">
              {upcomingProjects.map((pr, i) => (
                <motion.div
                  key={pr.nama}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.6 }}
                  className="rounded-2xl border border-ash/10 bg-charcoal/40 p-8"
                >
                  <p className="t-caption mb-2 text-patragreen-300">{pr.lokasi}</p>
                  <h3 className="text-xl font-bold text-paper mb-3">{pr.nama}</h3>
                  <p className="text-sm leading-relaxed text-ash">{pr.desc}</p>
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
              <h2 className="t-section">{t("property.ctaTitle")}</h2>
              <p className="t-lead mx-auto mt-5 max-w-lg text-ash">{t("property.ctaDesc")}</p>
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