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

const governanceItems = [
  {
    title: "Sistem Pelaporan Pelanggaran",
    description: "Melalui whistleblowing system, semua stakeholder dapat menyampaikan dugaan pelanggaran secara rahasia dan anonim.",
  },
  {
    title: "Dokumentasi GCG",
    description: "Pedoman tata kelola yang mencakup kode etik, konflik kepentingan, gratifikasi, dan anti-penyuapan.",
  },
];

export default function GovernancePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <PageHero
        eyebrow="Tata Kelola Perusahaan"
        title="Prinsip GCG dan"
        titleAccent="Kepatuhan Perusahaan"
        description="Kerangka pelaporan, tata kerja, dan dokumentasi yang mendukung transparansi dan integritas korporat Patra Jasa."
        variant="blue"
      />

      <section className="max-w-6xl mx-auto px-6 lg:px-10 py-20">
        <SectionTitle
          eyebrow="Corporate Governance"
          title="Transparansi dan Integritas dalam Setiap Proses"
          description="Membangun kepercayaan melalui tata kelola perusahaan yang jelas, akuntabel, dan dapat diandalkan."
          align="left"
        />

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          className="mt-12 grid gap-8 lg:grid-cols-2"
        >
          {governanceItems.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="rounded-3xl bg-white p-10 shadow-lg border border-slate-100 hover:border-patra-blue-200 transition-colors"
            >
              <div className="w-14 h-14 rounded-2xl bg-patra-blue-100 text-patra-blue-400 flex items-center justify-center mb-6">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}