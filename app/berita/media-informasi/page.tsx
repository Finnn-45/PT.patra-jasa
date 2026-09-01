"use client";
import SiteNav from "@/components/system/SiteNav";

import { useState } from "react";
import { motion } from "motion/react";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { useI18n } from "@/components/i18n/LanguageProvider";

import { mediaNewsArticles, tjslArticles } from "@/lib/newsData";

function newsHref(slug: string): string {
  return `/berita/media-informasi/${slug}`;
}

export default function MediaInformasiPage() {
  const { t } = useI18n();
  const [search, setSearch] = useState("");

  const newsItems = mediaNewsArticles.map((item) => ({
    ...item,
    displayTitle: item.titleKey ? t(item.titleKey as any) : item.title,
  }));

  const filtered = newsItems.filter((item) => {
    const q = search.toLowerCase().trim();
    if (!q) return true;
    return (
      item.displayTitle.toLowerCase().includes(q) ||
      item.excerpt.toLowerCase().includes(q) ||
      item.date.toLowerCase().includes(q)
    );
  });

  return (
    <main className="min-h-screen w-full bg-ink font-sans text-paper">
      <div className="relative z-10">
        <SiteNav />

        <section className="relative flex min-h-[50vh] items-end overflow-hidden pb-16 pt-32 bg-white">
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
              className="t-section text-paper"
            >
              {t("mi.title")}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="mt-4 max-w-xl text-base text-ash"
            >
              {t("mi.desc")}
            </motion.p>
          </div>
        </section>

        {/* Sticky category tabs */}
        <nav className="sticky top-16 z-40 border-b border-ash/15 bg-white shadow-sm">
          <div className="container-site flex items-center justify-between gap-4">
            <div className="flex gap-0">
              <Link
                href="/berita/media-informasi"
                className="border-b-2 border-patragreen-600 px-5 py-4 text-xs font-bold uppercase tracking-wider text-patragreen-700 bg-patragreen-50/50"
              >
                {t("mi.tabMedia")}
              </Link>
              <Link
                href="/berita/tjsl"
                className="border-b-2 border-transparent px-5 py-4 text-xs font-bold uppercase tracking-wider text-ash hover:border-patragreen-500 hover:text-paper transition-all"
              >
                {t("mi.tabTjsl")}
              </Link>
            </div>
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t("mi.search")}
              className="w-48 rounded-full border border-ash/20 bg-linen px-4 py-2 text-xs text-paper placeholder:text-stone outline-none focus:border-patragreen-500 transition-colors hidden sm:block"
            />
          </div>
        </nav>

        {/* News grid */}
        <section className="section-pad bg-sand">
          <div className="container-site">
            {filtered.length === 0 ? (
              <div className="py-20 text-center text-ash">{t("mi.empty")}</div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((item, i) => (
                  <motion.article
                    key={item.slug}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06, duration: 0.6 }}
                    className="group overflow-hidden rounded-2xl border border-ash/15 bg-white shadow-sm hover:border-patragreen-500/40 transition-colors flex flex-col"
                  >
                    <Link href={newsHref(item.slug)} className="media-frame aspect-[16/10] w-full block overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={item.img} alt={item.displayTitle} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </Link>
                    <div className="flex flex-col flex-1 p-6">
                      <div className="mb-3 flex items-center gap-2 text-xs text-ash">
                        <Calendar className="h-3.5 w-3.5 text-patragreen-600" />
                        {item.date}
                      </div>
                      <h2 className="text-base font-bold leading-snug text-paper group-hover:text-patragreen-700 transition-colors flex-1">
                        <Link href={newsHref(item.slug)} className="hover:underline">
                          {item.displayTitle}
                        </Link>
                      </h2>
                      <p className="mt-3 text-sm leading-relaxed text-ash line-clamp-3">{item.excerpt}</p>
                      <Link
                        href={newsHref(item.slug)}
                        className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-patragreen-600 hover:text-patragreen-700 transition-colors"
                      >
                        {t("common.bacaSelengkapnya")} <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </div>
            )}
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}