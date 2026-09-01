"use client";
import SiteNav from "@/components/system/SiteNav";

import { motion } from "motion/react";
import Footer from "@/app/components/Footer";
import { useI18n } from "@/components/i18n/LanguageProvider";

const items = [
  {
    img: "https://www.patra-jasa.com/wp-content/uploads/2021/05/patra-land-kuningan.jpg",
    href: "/products/property-1",
  },
  {
    img: "https://www.patra-jasa.com/wp-content/uploads/2021/05/pertamina-3.jpg",
    href: "/products/property-1",
  },
  {
    img: "https://www.patra-jasa.com/wp-content/uploads/2021/05/patrajasaofficetower.jpg",
    href: "/products/property-1",
  },
];

export default function PropertiSewaPage() {
  const { t } = useI18n();

  return (
    <main className="min-h-screen w-full bg-ink font-sans text-paper">
      <div className="relative z-10">
        <SiteNav />

        {/* Page Hero */}
        <section className="relative flex min-h-[60vh] items-end overflow-hidden pb-16 pt-32">
          <div className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://patra-jasa.com/wp-content/uploads/2021/07/patra-lease-4.jpg"
              alt="Properti Sewa"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />
          </div>
          <div className="container-site relative z-10">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="t-eyebrow mb-3 text-patragreen-200"
            >
              Property · <span className="text-white">Properti Sewa</span>
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="t-section max-w-2xl text-white drop-shadow-md"
            >
              {t("ps.heroTitle")}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="mt-4 max-w-xl text-base text-gray-200"
            >
              {t("ps.heroDesc")}
            </motion.p>
          </div>
        </section>

        {/* Property grid */}
        <section className="section-pad bg-white">
          <div className="container-site">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((item, i) => (
                <motion.a
                  key={item.img}
                  href={item.href}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: i * 0.08, duration: 0.6 }}
                  className="group flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-black/5 shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-black/10 hover:-translate-y-1.5"
                >
                  <div className="media-frame aspect-[4/3] w-full overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.img}
                      alt={t(`ps.${i}.name`)}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col flex-1 p-6">
                    <h2 className="text-lg font-bold leading-snug text-paper group-hover:text-patragreen-700 transition-colors">
                      {t(`ps.${i}.name`)}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-ash">{t(`ps.${i}.desc`)}</p>
                  </div>
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