"use client";

import { motion } from "motion/react";
import SiteNav from "@/components/system/SiteNav";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { useI18n } from "@/components/i18n/LanguageProvider";

import { tjslArticles } from "@/lib/newsData";

function newsHref(slug: string): string {
  const map: Record<string, string> = {};
  for (const list of [tjslArticles]) {
    for (const a of list) if (a.externalUrl) map[a.slug] = a.externalUrl;
  }
  return map[slug] ?? `/berita/tjsl/${slug}`;
}

export default function TJSLPage() {
  const { t } = useI18n();

  const tjslItems = tjslArticles.map((item) => ({
    ...item,
    displayTitle: item.titleKey ? t(item.titleKey as any) : item.title,
  }));

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
              className="t-section max-w-2xl text-paper"
            >
              {t("tjsl.title")}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="mt-4 max-w-xl text-base text-ash"
            >
              {t("tjsl.desc")}
            </motion.p>
          </div>
        </section>

        <nav className="sticky top-16 z-40 border-b border-ash/15 bg-white shadow-sm">
          <div className="container-site flex gap-0">
            <Link
              href="/berita/media-informasi"
              className="border-b-2 border-transparent px-5 py-4 text-xs font-bold uppercase tracking-wider text-ash hover:border-patragreen-500 hover:text-paper transition-all"
            >
              {t("mi.tabMedia")}
            </Link>
            <Link
              href="/berita/tjsl"
              className="border-b-2 border-patragreen-600 px-5 py-4 text-xs font-bold uppercase tracking-wider text-patragreen-700 bg-patragreen-50/50"
            >
              {t("mi.tabTjsl")}
            </Link>
          </div>
        </nav>

        <section className="section-pad bg-sand">
          <div className="container-site">
            {/* TJSL intro */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-16 rounded-3xl border border-patragreen-200 bg-white p-10 shadow-sm"
            >
              <p className="t-eyebrow mb-3 text-patragreen-700 font-bold">{t("tjsl.aboutEyebrow")}</p>
              <h2 className="t-section max-w-2xl text-paper">{t("tjsl.aboutTitle")}</h2>
              <p className="t-lead mt-5 max-w-2xl text-ash">{t("tjsl.aboutDesc")}</p>
            </motion.div>
            {/* TJSL news grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {tjslItems.map((item, i) => (
                <motion.article
                  key={item.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="group overflow-hidden rounded-2xl border border-ash/15 bg-white shadow-sm hover:border-patragreen-500/40 transition-colors flex flex-col"
                >
                  <Link href={newsHref(item.slug)} target="_blank" rel="noopener noreferrer" className="media-frame aspect-[16/10] w-full block overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.img} alt={item.displayTitle} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </Link>
                  <div className="flex flex-col flex-1 p-6">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="rounded-full bg-patragreen-50 border border-patragreen-200 px-3 py-1 text-xs font-bold text-patragreen-700">
                        {item.category}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-ash">
                        <Calendar className="h-3.5 w-3.5 text-patragreen-600" />
                        {item.date}
                      </span>
                    </div>
                    <h2 className="text-base font-bold leading-snug text-paper group-hover:text-patragreen-700 transition-colors flex-1">
                      <Link href={newsHref(item.slug)} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        {item.displayTitle}
                      </Link>
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-ash line-clamp-3">{item.excerpt}</p>
                    <Link
                      href={newsHref(item.slug)} target="_blank" rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-patragreen-600 hover:text-patragreen-700 transition-colors"
                    >
                      {t("common.bacaSelengkapnya")} <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}