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
      title: t("srv.0.title"),
      desc: t("srv.0.desc"),
      img: "https://www.patra-jasa.com/wp-content/uploads/2021/05/DSC_0087.jpg",
      href: "/products/services/facility-management",
      features: [t("srv.0.feature0"), t("srv.0.feature1"), t("srv.0.feature2"), t("srv.0.feature3")],
    },
    {
      title: t("srv.1.title"),
      desc: t("srv.1.desc"),
      img: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=800&auto=format&fit=crop",
      href: "/products/services/catering",
      features: [t("srv.1.feature0"), t("srv.1.feature1"), t("srv.1.feature2"), t("srv.1.feature3")],
    },
    {
      title: t("srv.2.title"),
      desc: t("srv.2.desc"),
      img: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=800&auto=format&fit=crop",
      href: "/products/services/laundry",
      features: [t("srv.2.feature0"), t("srv.2.feature1"), t("srv.2.feature2"), t("srv.2.feature3")],
    },
  ];

  return (
    <main className="min-h-screen w-full bg-ink font-sans text-paper">
      <div className="relative z-10">
        <SiteNav />

        {/* Hero */}
        <section className="relative flex min-h-[65vh] items-end overflow-hidden pb-20 pt-32">
          <div className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://www.patra-jasa.com/wp-content/uploads/2025/07/banner-service.jpg" alt="Services" className="h-full w-full object-cover" style={{ filter: "grayscale(20%) contrast(1.05)" }} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
          </div>
          <div className="container-site relative z-10">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="t-eyebrow mb-3 text-patragreen-300 font-bold">{t("nav.bisnis")} · {t("nav.services")}</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="t-section max-w-2xl text-white drop-shadow-md">{t("nav.services")}</motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.7 }} className="mt-4 max-w-xl text-base text-gray-200">
              {t("srv.heroTitle")}
            </motion.p>
          </div>
        </section>

        {/* Services items */}
        <section className="section-pad bg-white">
          <div className="container-site space-y-20">
            {services.map((svc, i) => (
              <motion.div key={svc.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className={`grid gap-12 lg:grid-cols-2 lg:items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <div>
                  <h2 className="t-section text-patragreen-700 mb-5">{svc.title}</h2>
                  <p className="text-base leading-relaxed text-ash">{svc.desc}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {svc.features.map((f) => (
                      <span key={f} className="rounded-full border border-patragreen-200 bg-patragreen-50 px-4 py-1.5 text-xs font-bold text-patragreen-700">{f}</span>
                    ))}
                  </div>
                  <Link href={svc.href} className="mt-8 inline-flex items-center gap-2 rounded-full bg-patragreen-600 px-6 py-3 text-sm font-semibold text-white hover:bg-patragreen-500 transition-colors shadow-sm">
                    {t("common.selengkapnya")} <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <div className="media-frame aspect-square w-full rounded-2xl overflow-hidden shadow-lg">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={svc.img} alt={svc.title} loading="lazy" className="h-full w-full object-cover" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}