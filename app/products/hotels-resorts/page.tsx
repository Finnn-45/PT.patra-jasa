"use client";

import { motion } from "motion/react";
import SiteNav from "@/components/system/SiteNav";
import Footer from "@/app/components/Footer";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/components/i18n/LanguageProvider";

export default function HotelsResortsPage() {
  const { t } = useI18n();

  const hotels = [
    { name: "The Patra Bali Resort & Villas", location: "Bali", img: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=800&auto=format&fit=crop", desc: t("hrs.0.desc") },
    { name: "Patra Semarang Hotel & Convention", location: "Semarang, Jawa Tengah", img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800&auto=format&fit=crop", desc: t("hrs.1.desc") },
    { name: "Patra Comfort Bandung", location: "Bandung, Jawa Barat", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=800&auto=format&fit=crop", desc: t("hrs.2.desc") },
    { name: "Patra Jakarta", location: "Jakarta", img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800&auto=format&fit=crop", desc: t("hrs.3.desc") },
    { name: "Patra Jasa Anyer Beach Hotel", location: "Anyer, Banten", img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800&auto=format&fit=crop", desc: t("hrs.4.desc") },
    { name: "Patra Malioboro Yogyakarta", location: "Yogyakarta", img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=800&auto=format&fit=crop", desc: t("hrs.5.desc") },
  ];

  return (
    <main className="min-h-screen w-full bg-ink font-sans text-paper">
      <div className="relative z-10">
        <SiteNav />

        {/* Hero */}
        <section className="relative flex min-h-[65vh] items-end overflow-hidden pb-20 pt-32">
          <div className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://patra-jasa.com/wp-content/uploads/2021/09/800x800-_-1mb-Icon-Hotels-_-Resorts-scaled.jpg" alt="Hotels & Resorts" className="h-full w-full object-cover" style={{ filter: "grayscale(20%) contrast(1.05)" }} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
          </div>
          <div className="container-site relative z-10">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="t-eyebrow mb-3 text-patragreen-300 font-bold">{t("nav.bisnis")} · {t("nav.hotels")}</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="t-section max-w-2xl text-white drop-shadow-md">{t("nav.hotels")}</motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.7 }} className="mt-4 max-w-xl text-base text-gray-200">
              {t("hrs.heroDesc")}
            </motion.p>
          </div>
        </section>

        {/* Portfolio */}
        <section className="section-pad bg-white">
          <div className="container-site">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="mb-12">
              <p className="t-eyebrow mb-3 text-patragreen-600 font-bold">{t("hrs.portfolioEy")}</p>
              <h2 className="t-section max-w-2xl text-paper">{t("hrs.title1")} <span className="text-patragreen-600">{t("hrs.title2")}</span> {t("hrs.title3")}</h2>
            </motion.div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-6">
              {hotels.map((hotel, i) => (
                <motion.div
                  key={hotel.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.6 }}
                  className="group overflow-hidden rounded-2xl border border-ash/15 bg-white shadow-sm hover:border-patragreen-500/40 transition-colors"
                >
                  <div className="media-frame aspect-[16/10] w-full">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={hotel.img} alt={hotel.name} loading="lazy" className="h-full w-full object-cover" />
                  </div>
                  <div className="p-6">
                    <p className="t-caption mb-2 text-patragreen-700 font-bold">{hotel.location}</p>
                    <h3 className="text-lg font-bold text-paper group-hover:text-patragreen-600 transition-colors">{hotel.name}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-ash">{hotel.desc}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-patragreen-600 hover:text-patragreen-700 transition-colors">
                      {t("common.lihatDetail")} <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA for MyPatraHotels */}
        <section className="section-pad border-t border-ash/10 bg-sand">
          <div className="container-site">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-3xl border border-patragreen-500/30 bg-gradient-to-br from-white to-patragreen-50/60 p-12 text-center shadow-lg"
            >
              <p className="t-eyebrow mb-4 text-patragreen-700 font-bold">{t("hrs.mypatraEy")}</p>
              <h2 className="t-section text-paper">{t("hrs.ctaTitle1")}<br />{t("hrs.ctaTitle2")} <span className="text-patragreen-600">{t("hrs.ctaTitle3")}</span></h2>
              <p className="t-lead mx-auto mt-5 max-w-lg text-ash">{t("hrs.ctaDesc")}</p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a href="https://mypatrahotels.com" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-patragreen-600 px-8 py-3.5 text-sm font-bold text-white hover:bg-patragreen-500 transition-colors shadow-md">
                  {t("hrs.ctaVisit")} <ArrowRight className="h-4 w-4" />
                </a>
                <a href="https://play.google.com/store/apps/details?id=my.patra.hotels" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-patragreen-600 px-8 py-3.5 text-sm font-bold text-patragreen-700 hover:bg-patragreen-50 transition-colors">
                  {t("common.downloadPlayStore")}
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}