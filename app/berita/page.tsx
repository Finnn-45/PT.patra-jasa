"use client";

import { motion } from "motion/react";
import SiteNav from "@/components/system/SiteNav";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import { ArrowRight, Newspaper } from "lucide-react";
import { useI18n } from "@/components/i18n/LanguageProvider";

export default function NewsPage() {
  const { t } = useI18n();

  const newsCategories = [
    {
      title: t("nav.media"),
      desc: t("berita.catMedia.desc"),
      link: "/berita/media-informasi",
    },
    {
      title: t("nav.tjsl"),
      desc: t("berita.catTjsl.desc"),
      link: "/berita/tjsl",
    },
  ];

  const stats = [
    { value: "120+", label: t("berita.stats.0") },
    { value: "15", label: t("berita.stats.1") },
    { value: "9", label: t("berita.stats.2") },
    { value: "30+", label: t("berita.stats.3") },
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
              {t("berita.eyebrow")}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="t-section max-w-2xl text-paper"
            >
              {t("berita.title1")}{" "}
              <span className="text-patragreen-600">{t("berita.title2")}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="mt-4 max-w-xl text-base text-ash"
            >
              {t("berita.desc")}
            </motion.p>
          </div>
        </section>

        <section className="section-pad border-b border-ash/10 bg-sand">
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
                <div className="t-metric text-patragreen-600">{s.value}</div>
                <p className="t-caption mt-3 text-ash">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="section-pad bg-white">
          <div className="container-site">
            <p className="t-eyebrow mb-8 text-patragreen-600 font-bold">{t("common.kategoriBerita")}</p>
            <h2 className="t-section max-w-3xl mb-12 text-paper">{t("berita.kategoriTitle")}</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {newsCategories.map((item, i) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.6 }}
                  className="group rounded-2xl border border-ash/15 bg-sand p-10 hover:border-patragreen-500/40 shadow-sm transition-colors"
                >
                  <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-patragreen-50 border border-patragreen-200 text-patragreen-600">
                    <Newspaper className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-paper mb-3">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-ash mb-8">{item.desc}</p>
                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-2 rounded-full bg-patragreen-600 px-6 py-3 text-sm font-semibold text-white hover:bg-patragreen-500 transition-colors shadow-sm"
                  >
                    {t("berita.lihatBerita")} <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad border-t border-ash/10 bg-sand">
          <div className="container-site">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-3xl border border-patragreen-500/30 bg-gradient-to-br from-white to-patragreen-50/60 p-12 text-center shadow-lg"
            >
              <h2 className="t-section text-paper">{t("berita.ctaTitle")}</h2>
              <p className="t-lead mx-auto mt-5 max-w-lg text-ash">{t("berita.ctaDesc")}</p>
              <Link
                href="/kontak-kami"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-patragreen-600 px-8 py-3.5 text-sm font-bold text-white hover:bg-patragreen-500 transition-colors shadow-md"
              >
                {t("common.hubungiKami")} <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}