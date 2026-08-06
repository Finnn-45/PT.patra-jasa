"use client";
import PageHero from "@/app/components/PageHero";
import SectionTitle from "@/app/components/SectionTitle";
import { motion, type Variants } from "motion/react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const subsidiaries = [
  { name: "Patra Hospitality", description: "Operasional hotel dan layanan tamu premium." },
  { name: "Patra Facility Management", description: "Layanan manajemen fasilitas dan layanan operasional." },
  { name: "Patra Energy & Property", description: "Sinergi pengelolaan aset dan properti yang produktif." },
];

export default function SubsidiariesPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <PageHero
        eyebrow="Anak Perusahaan"
        title="Jaringan Anak Perusahaan yang"
        titleAccent="Mendukung Ekosistem Bisnis"
        description="Kumpulan anak perusahaan Patra Jasa yang berkontribusi dalam bidang properti, hospitality, dan layanan korporat."
        variant="blue"
      />

      <section className="max-w-6xl mx-auto px-6 lg:px-10 py-20">
        <SectionTitle
          eyebrow="Bisnis Terintegrasi"
          title="Anak Perusahaan yang Memperkuat Jaringan Patra"
          description="Kolaborasi unit bisnis yang mendukung keahlian dalam properti, hospitality, dan manajemen fasilitas untuk memberikan solusi komprehensif."
          align="left"
        />

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {subsidiaries.map((company) => (
            <motion.div
              key={company.name}
              variants={fadeUp}
              className="rounded-3xl bg-white p-10 shadow-lg border border-slate-100 hover:border-patra-blue-200 transition-colors"
            >
              <div className="w-14 h-14 rounded-2xl bg-patra-blue-100 text-patra-blue-400 flex items-center justify-center mb-6">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{company.name}</h3>
              <p className="text-slate-600 leading-relaxed">{company.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}