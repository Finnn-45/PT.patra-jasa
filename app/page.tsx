"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import SiteNav from "@/components/system/SiteNav";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useI18n } from "@/components/i18n/LanguageProvider";
import { mediaNewsArticles, tjslArticles } from "@/lib/newsData";

function newsHref(slug: string): string {
  const map: Record<string, string> = {};
  for (const list of [mediaNewsArticles, tjslArticles]) {
    for (const a of list) if (a.externalUrl) map[a.slug] = a.externalUrl;
  }
  return map[slug] ?? `/berita/media-informasi/${slug}`;
}

/* ── Hero slider ─────────────────────────────────────────────────────── */
function HeroSlider() {
  const { t } = useI18n();
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Hero slides from patra-jasa.com
  const slides = [
    {
      img: "https://www.patra-jasa.com/wp-content/uploads/2025/10/MyPatrahotel-Web-rev-800px-x-1536px-1.jpg",
      href: "https://play.google.com/store/apps/details?id=my.patra.hotels",
      label: t("home.slides.0.label"),
      sub: t("home.slides.0.sub"),
    },
    {
      img: "https://www.patra-jasa.com/wp-content/uploads/2025/10/easy-booking-1536-x-800-copy.jpg",
      href: "https://mypatrahotels.com",
      label: t("home.slides.1.label"),
      sub: t("home.slides.1.sub"),
    },
    {
      img: "https://www.patra-jasa.com/wp-content/uploads/2026/04/WebDesktop_Banner-Website_Home_PatraJasa.jpg",
      href: "/tentang-kami",
      label: t("home.slides.2.label"),
      sub: t("home.slides.2.sub"),
    },
  ];
  const slidesCount = slides.length;

  const go = (idx: number, dir: number) => {
    setDirection(dir);
    setCurrent(idx);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      go((current + 1) % slidesCount, 1);
    }, 5000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  const touchX = useRef<number | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    touchX.current = e.touches[0]?.clientX ?? null;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0]?.clientX - touchX.current;
    touchX.current = null;
    if (dx === undefined || Math.abs(dx) < 48) return;
    if (dx < 0) go((current + 1) % slidesCount, 1);
    else go((current - 1 + slidesCount) % slidesCount, -1);
  };

  return (
    <section
      className="relative h-[100svh] w-full overflow-hidden"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <AnimatePresence initial={false} custom={direction} mode="sync">
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={slides[current].img}
            alt={slides[current].label}
            fetchPriority={current === 0 ? "high" : undefined}
            decoding="async"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/10 to-transparent" />

          {/* Slide content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-x-0 bottom-28 container-site"
          >
            <p className="t-eyebrow mb-3 text-patragreen-200">
              <span className="inline-block h-px w-8 bg-patragreen-200/70 mr-3 align-middle" />
              {slides[current].sub}
            </p>
            <h1 className="t-display text-white drop-shadow-md">{slides[current].label}</h1>
            {slides[current].href && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="mt-6"
              >
                <Link
                  href={slides[current].href}
                  className="inline-flex items-center gap-2 rounded-full bg-patragreen-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/20 hover:bg-patragreen-400 transition-colors active:scale-[0.98]"
                >
                  {t("common.lihatSelengkapnya")} <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Controls — swipe-friendly dots on mobile, arrows on desktop */}
      <div className="absolute bottom-9 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i, i > current ? 1 : -1)}
            aria-label={`Slide ${i + 1}`}
            className="p-2"
          >
            <span
              className={`block h-1 rounded-full transition-all duration-500 ${
                i === current ? "w-8 bg-white" : "w-3 bg-white/40 hover:bg-white/70"
              }`}
            />
          </button>
        ))}
      </div>
      <button
        onClick={() => go((current - 1 + slidesCount) % slidesCount, -1)}
        className="absolute left-4 top-1/2 hidden -translate-y-1/2 z-10 md:grid h-11 w-11 place-items-center rounded-full border border-white/30 text-white hover:bg-white/25 hover:border-white/60 transition-colors bg-black/45"
        aria-label={t("common.slideSebelumnya")}
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={() => go((current + 1) % slidesCount, 1)}
        className="absolute right-4 top-1/2 hidden -translate-y-1/2 z-10 md:grid h-11 w-11 place-items-center rounded-full border border-white/30 text-white hover:bg-white/25 hover:border-white/60 transition-colors bg-black/45"
        aria-label={t("common.slideBerikutnya")}
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </section>
  );
}
/* ── Stats banner ────────────────────────────────────────────────────── */
function StatsBanner() {
  const { t } = useI18n();
  const metrics = [
    { value: "22", label: t("home.metrics.0") },
    { value: "9", label: t("home.metrics.1") },
    { value: "850+", label: t("home.metrics.2") },
    { value: "9", label: t("home.metrics.3") },
  ];

  return (
    <section className="section-pad cv-auto relative overflow-hidden bg-white">
      <div className="container-site">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14 text-center"
        >
          <h2 className="t-section text-paper">
            {t("home.stats.t1")} <span className="text-patragreen-600">{t("home.stats.t2")}</span>
          </h2>
          <p className="t-lead mx-auto mt-5 max-w-xl text-ash">
            {t("home.stats.desc")}
          </p>
        </motion.div>
        <div className="grid grid-cols-2 gap-y-12 lg:grid-cols-4 lg:gap-y-0 lg:divide-x lg:divide-graphite">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className="px-4 text-center"
            >
              <div className="t-metric text-patragreen-600">{m.value}</div>
              <p className="t-caption mt-4 text-stone">{m.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Business pillars ────────────────────────────────────────────────── */
function BusinessPillars() {
  const { t } = useI18n();
  const pillars = [
    {
      title: "Property",
      desc: t("home.pillars.0.desc"),
      img: "https://patra-jasa.com/wp-content/uploads/2021/07/2.jpg",
      href: "/products/property-1",
    },
    {
      title: "Hotels & Resorts",
      desc: t("home.pillars.1.desc"),
      img: "https://patra-jasa.com/wp-content/uploads/2021/09/800x800-_-1mb-Icon-Hotels-_-Resorts-scaled.jpg",
      href: "/products/hotels-resorts",
    },
    {
      title: "Services",
      desc: t("home.pillars.2.desc"),
      img: "https://www.patra-jasa.com/wp-content/uploads/2025/07/PRD00151-rev.jpg",
      href: "/products/services",
    },
  ];

  return (
    <section
      className="section-pad cv-auto text-paper"
      style={{ background: "linear-gradient(180deg, var(--color-linen) 0%, var(--color-sand) 100%)" }}
    >
      <div className="container-site">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="t-eyebrow mb-3 text-patragreen-600">{t("home.pillars.eyebrow")}</p>
            <h2 className="t-section max-w-xl text-paper">{t("home.pillars.title")}</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm font-semibold text-patragreen-600 hover:text-patragreen-700 transition-colors"
            >
              {t("common.semuaBisnis")} <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <motion.a
              key={pillar.title}
              href={pillar.href}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.7 }}
              className="group relative overflow-hidden rounded-2xl bg-charcoal min-h-[320px] flex items-end ring-1 ring-black/5 shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-black/10 hover:-translate-y-1.5"
            >
              <div className="absolute inset-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={pillar.img}
                  alt={pillar.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent" />
              </div>
              <div className="relative z-10 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{pillar.title}</h3>
                <p className="text-sm leading-relaxed text-gray-300">{pillar.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.2em] text-patragreen-300">
                  {t("common.jelajahi")} <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
/* ── Video section ───────────────────────────────────────────────────── */
function VideoSection() {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLElement>(null);

  // Autoplay as requested, but the iframe only mounts when the section
  // approaches the viewport — zero cost while it stays offscreen.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { rootMargin: "300px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative w-full overflow-hidden bg-black">
      <div className="relative h-[60vh] w-full">
        {inView ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src="https://www.youtube.com/embed/dMgP-cc_WDg?autoplay=1&mute=1&loop=1&playlist=dMgP-cc_WDg&controls=0&playsinline=1&rel=0&modestbranding=1"
            title="Patra Jasa Intro Video"
            allow="autoplay; encrypted-media; picture-in-picture"
          />
        ) : (
          /* Lightweight poster shown until the section nears the viewport */
          <div className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://i.ytimg.com/vi/dMgP-cc_WDg/maxresdefault.jpg"
              alt=""
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 grid place-items-center bg-black/25">
              <span className="grid h-16 w-16 place-items-center rounded-full bg-white/95 shadow-xl">
                <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6 fill-[#c90f22]" aria-hidden>
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

/* ── News section ────────────────────────────────────────────────────── */
function NewsSection() {
  const { t } = useI18n();
  const newsItems = [
    {
      slug: "patra-jasa-tanam-1-000-bibit-mangrove-perkuat-ketahanan-pesisir",
      title: t("home.news.0.title"),
      date: t("home.news.0.date"),
      category: t("home.news.cat"),
      img: "https://www.patra-jasa.com/wp-content/uploads/2026/07/WhatsApp-Image-2026-07-08-at-08.04.37-1-1.jpeg",
    },
    {
      slug: "patra-jasa-raih-dua-penghargaan-apq-awards-2026",
      title: t("home.news.1.title"),
      date: t("home.news.1.date"),
      category: t("home.news.cat"),
      img: "https://www.patra-jasa.com/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-17-at-20.22.42.jpeg",
    },
    {
      slug: "pt-patra-jasa-raih-penghargaan-4-star-gold-wso-2026",
      title: t("home.news.2.title"),
      date: t("home.news.2.date"),
      category: t("home.news.cat"),
      img: "https://www.patra-jasa.com/wp-content/uploads/2026/05/WhatsApp-Image-2026-05-12-at-07.56.05-3-768x512.jpeg",
    },
    {
      slug: "patra-jasa-giz-percepat-transisi-energi-green-building",
      title: t("home.news.3.title"),
      date: t("home.news.3.date"),
      category: t("home.news.cat"),
      img: "https://www.patra-jasa.com/wp-content/uploads/2026/05/IMG_1100-768x512.jpg",
    },
    {
      slug: "bumi-hour-2026-patra-jasa-komitmen-efisiensi-energi",
      title: t("home.news.4.title"),
      date: t("home.news.4.date"),
      category: t("home.news.cat"),
      img: "https://www.patra-jasa.com/wp-content/uploads/2026/05/DSC07955-768x512.jpg",
    },
    {
      slug: "patra-jasa-gelar-kegiatan-sosial-ramadhan-2026",
      title: t("home.news.5.title"),
      date: t("home.news.5.date"),
      category: t("home.news.cat"),
      img: "https://www.patra-jasa.com/wp-content/uploads/2026/04/WhatsApp-Image-2026-04-01-at-08.49.24.jpeg",
    },
  ];

  return (
    <section className="section-pad cv-auto bg-white text-paper">
      <div className="container-site">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="t-eyebrow mb-3 text-patragreen-600">{t("home.news.eyebrow")}</p>
            <h2 className="t-section text-paper">{t("home.news.title")}</h2>
          </div>
          <Link
            href="/berita/media-informasi"
            className="inline-flex items-center gap-2 rounded-full border border-patragreen-600/30 px-6 py-2.5 text-sm font-semibold text-patragreen-600 hover:bg-patragreen-600 hover:text-white hover:border-patragreen-600 transition-all"
          >
            {t("common.lihatSemuaBerita")} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((item, i) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-black/5 shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-black/10 hover:-translate-y-1.5"
            >
              <Link href={newsHref(item.slug)} target="_blank" rel="noopener noreferrer" className="media-frame aspect-[16/10] w-full block overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.img} alt={item.title} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </Link>
              <div className="flex flex-col flex-1 p-6">
                <div className="mb-3 flex items-center gap-3">
                  <span className="rounded-full bg-patragreen-50 px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-patragreen-700">
                    {item.category}
                  </span>
                  <span className="text-xs text-stone">{item.date}</span>
                </div>
                <h3 className="text-base font-semibold leading-snug text-paper group-hover:text-patragreen-700 transition-colors flex-1">
                  <Link href={newsHref(item.slug)} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {item.title}
                  </Link>
                </h3>
                <Link
                  href={newsHref(item.slug)} target="_blank" rel="noopener noreferrer"
                  className="interactive-line inline-flex items-center gap-1.5 self-start text-xs font-bold uppercase tracking-wider text-patragreen-600 transition-colors mt-auto pt-4"
                >
                  {t("common.bacaSelengkapnya")} <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
/* ── Contact section ─────────────────────────────────────────────────── */
function ContactSection() {
  const { t } = useI18n();
  return (
    <section
      className="section-pad cv-auto relative overflow-hidden text-paper"
      style={{ background: "linear-gradient(180deg, var(--color-sand) 0%, var(--color-linen) 100%)" }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(237,27,47,0.06),transparent_60%)]" aria-hidden />
      <div className="container-site relative z-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="t-eyebrow mb-4 text-patragreen-600">{t("home.contact.eyebrow")}</p>
            <h2 className="t-section text-paper">{t("home.contact.title")}</h2>
            <p className="t-lead mt-5 max-w-md text-ash">
              {t("home.contact.desc")}
            </p>
            <div className="mt-8 space-y-5">
              <div className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-black/5">
                <p className="text-xs font-bold uppercase tracking-widest text-patragreen-700 mb-1">
                  {t("home.contact.kantorPusat")}
                </p>
                <p className="text-sm text-paper">{t("home.contact.address")}</p>
              </div>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-black/5">
                <p className="text-xs font-bold uppercase tracking-widest text-patragreen-700 mb-1">
                  {t("home.contact.telepon")}
                </p>
                <p className="text-sm text-paper">{t("home.contact.phone")}</p>
              </div>
              <div className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-black/5">
                <p className="text-xs font-bold uppercase tracking-widest text-patragreen-700 mb-1">
                  {t("home.contact.email")}
                </p>
                <p className="break-all text-sm text-paper">{t("home.contact.mail")}</p>
              </div>
            </div>
            </div>
          </motion.div>
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <form className="rounded-2xl border border-ash/15 bg-white p-8 shadow-xl shadow-black/5 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-ash mb-2">
                    {t("common.form.nama")} <span className="text-patragreen-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder={t("common.form.namaLengkap")}
                    required
                    className="w-full rounded-lg border border-ash/20 bg-linen px-4 py-3 text-sm text-paper placeholder:text-stone outline-none focus:border-patragreen-500 focus:bg-white focus:ring-1 focus:ring-patragreen-500/30 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-ash mb-2">
                    {t("common.form.email")} <span className="text-patragreen-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder={t("common.form.emailPlaceholder")}
                    required
                    className="w-full rounded-lg border border-ash/20 bg-linen px-4 py-3 text-sm text-paper placeholder:text-stone outline-none focus:border-patragreen-500 focus:bg-white focus:ring-1 focus:ring-patragreen-500/30 transition-all"
                  />
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-ash mb-2">
                    {t("common.form.telephone")} <span className="text-patragreen-500">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder={t("common.form.teleponPlaceholder")}
                    required
                    className="w-full rounded-lg border border-ash/20 bg-linen px-4 py-3 text-sm text-paper placeholder:text-stone outline-none focus:border-patragreen-500 focus:bg-white focus:ring-1 focus:ring-patragreen-500/30 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-ash mb-2">
                    {t("common.form.perusahaan")} <span className="text-patragreen-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder={t("common.form.namaPerusahaan")}
                    required
                    className="w-full rounded-lg border border-ash/20 bg-linen px-4 py-3 text-sm text-paper placeholder:text-stone outline-none focus:border-patragreen-500 focus:bg-white focus:ring-1 focus:ring-patragreen-500/30 transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-ash mb-2">
                  {t("common.form.pesan")} <span className="text-patragreen-500">*</span>
                </label>
                <textarea
                  rows={4}
                  placeholder={t("common.form.pesanPlaceholder")}
                  required
                  className="w-full rounded-lg border border-ash/20 bg-linen px-4 py-3 text-sm text-paper placeholder:text-stone outline-none focus:border-patragreen-500 focus:bg-white focus:ring-1 focus:ring-patragreen-500/30 transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-patragreen-600 py-3.5 text-sm font-bold text-white hover:bg-patragreen-500 active:scale-[0.99] transition-all cursor-pointer shadow-md shadow-patragreen-600/20"
              >
                {t("common.kirimPesan")}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-ink font-sans text-paper">
      <div className="relative z-10">
        <SiteNav />
        <HeroSlider />
        <StatsBanner />
        <BusinessPillars />
        <VideoSection />
        <NewsSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}