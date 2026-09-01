"use client";
import SiteNav from "@/components/system/SiteNav";

import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/app/components/Footer";
import { useI18n } from "@/components/i18n/LanguageProvider";
import { tjslArticles, mediaNewsArticles } from "@/lib/newsData";
import { Calendar, ArrowLeft } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function StoryPage({ params }: PageProps) {
  const { slug } = use(params);
  const { t } = useI18n();

  const story =
    tjslArticles.find((item) => item.slug === slug) ||
    mediaNewsArticles.find((item) => item.slug === slug);

  if (!story) return notFound();

  const title = story.titleKey ? t(story.titleKey as any) : story.title;

  return (
    <main className="min-h-screen w-full bg-ink font-sans text-paper">
      <div className="relative z-10">
        <SiteNav />

        {/* Hero */}
        <section className="relative flex min-h-[55vh] items-end overflow-hidden pb-16 pt-32 bg-white">
          <div className="container-site relative z-10">
            <Link
              href="/berita/tjsl"
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-ash/20 bg-sand px-4 py-2 text-xs font-bold text-ash hover:border-patragreen-500 hover:text-patragreen-700 transition-all shadow-sm"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> {t("common.kembaliKeTjsl")}
            </Link>
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-patragreen-50 border border-patragreen-200 px-3.5 py-1 text-xs font-bold text-patragreen-700">
                {story.category}
              </span>
              <span className="flex items-center gap-1.5 text-xs text-ash">
                <Calendar className="h-3.5 w-3.5 text-patragreen-600" />
                {story.date}
              </span>
            </div>
            <h1 className="t-section max-w-4xl text-paper">{title}</h1>
          </div>
        </section>

        {/* Body content */}
        <section className="section-pad border-t border-ash/10 bg-sand">
          <div className="container-site max-w-4xl">
            {story.img && (
              <div className="mb-10 overflow-hidden rounded-2xl border border-ash/15 bg-white shadow-md">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={story.img}
                  alt={title}
                  className="max-h-[480px] w-full object-cover"
                />
              </div>
            )}
            <div className="rounded-2xl border border-ash/15 bg-white p-8 md:p-12 shadow-sm">
              <p className="text-lg leading-relaxed text-paper font-medium mb-6">
                {story.excerpt}
              </p>
              <div className="prose max-w-none text-base leading-relaxed text-ash whitespace-pre-line border-t border-ash/10 pt-6">
                {story.content}
              </div>
            </div>
            <div className="mt-10">
              <Link
                href="/berita/tjsl"
                className="inline-flex items-center gap-2 rounded-full bg-patragreen-600 px-6 py-3 text-sm font-bold text-white hover:bg-patragreen-500 transition-all shadow-md"
              >
                <ArrowLeft className="h-4 w-4" /> {t("common.kembaliKeTjsl")}
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}