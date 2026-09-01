"use client";
import SiteNav from "@/components/system/SiteNav";

import { motion } from "motion/react";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/components/i18n/LanguageProvider";

export default function PropertyPage() {
  const { t } = useI18n();

  const propertyItems = [
    {
      title: t("property1.item0.title"),
      desc: t("property1.item0.desc"),
      img: "https://patra-jasa.com/wp-content/uploads/2023/03/1.-Cover-Patra-Residence-Palagan-scaled.jpg",
      href: "/products/properti-jual",
    },
    {
      title: t("property1.item1.title"),
      desc: t("property1.item1.desc"),
      img: "https://patra-jasa.com/wp-content/uploads/2021/06/patrajasaofficetower-1.jpeg",
      href: "/products/properti-sewa",
    },
  ];

  const upcomingProjects = [
    {
      name: t("property1.up.0.name"),
      desc: t("property1.up.0.desc"),
      img: "https://www.patra-jasa.com/wp-content/uploads/2022/11/11.jpg",
    },
  ];

  return (
    <main className="min-h-screen w-full bg-ink font-sans text-paper">
      <div className="relative z-10">
        <SiteNav />

        {/* Page Hero */}
        <section className="relative flex min-h-[65vh] items-end overflow-hidden pb-20 pt-32">
          <div className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://patra-jasa.com/wp-content/uploads/2021/07/Foto-Gedung.jpg" alt="Property" className="h-full w-full object-cover" style={{ filter: "grayscale(20%) contrast(1.05)" }} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
          </div>
          <div className="container-site relative z-10">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="t-eyebrow mb-3 text-patragreen-300 font-bold">{t("nav.bisnis")} · Property</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="t-section max-w-2xl text-white drop-shadow-md">Property</motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.7 }} className="mt-4 max-w-xl text-base text-gray-200">
              {t("property1.heroDesc")}
            </motion.p>
          </div>
        </section>

        {/* Property items */}
        <section className="section-pad bg-white">
          <div className="container-site space-y-20">
            {propertyItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`grid gap-12 lg:grid-cols-2 lg:items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                <div>
                  <h2 className="t-section text-patragreen-700 mb-5">{item.title}</h2>
                  <p className="text-base leading-relaxed text-ash whitespace-pre-line">{item.desc}</p>
                  <Link href={item.href} className="mt-8 inline-flex items-center gap-2 rounded-full bg-patragreen-600 px-6 py-3 text-sm font-semibold text-white hover:bg-patragreen-500 transition-colors shadow-sm">
                    {t("common.selengkapnya")} <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <div className="media-frame aspect-square w-full rounded-2xl overflow-hidden shadow-lg">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.img} alt={item.title} loading="lazy" className="h-full w-full object-cover" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Upcoming Projects */}
        <section className="section-pad border-t border-ash/10 bg-sand">
          <div className="container-site">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="t-section mb-12 text-center text-paper">
              {t("property1.upcoming")}
            </motion.h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {upcomingProjects.map((p, i) => (
                <motion.div key={p.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }} className="overflow-hidden rounded-2xl border border-ash/15 bg-white shadow-sm hover:border-patragreen-500/40 transition-colors">
                  <div className="media-frame aspect-[4/3] w-full">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-cover" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-patragreen-700">{p.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ash">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}