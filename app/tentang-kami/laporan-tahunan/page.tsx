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

const reports = [
  {
    title: "Laporan Tahunan 2025",
    description: "Ringkasan pencapaian finansial, operasional, dan keberlanjutan yang memperlihatkan arah strategis Patra Jasa.",
    cta: "Unduh Ringkasan",
  },
  {
    title: "Laporan Keberlanjutan",
    description: "Dokumentasi inisiatif TJSL, ESG, dan dampak sosial yang mendukung pertumbuhan perusahaan yang bertanggung jawab.",
    cta: "Pelajari Lebih",
  },
];

export default function AnnualReportPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <PageHero
        eyebrow="Laporan Tahunan"
        title="Rekaman Kinerja dan"
        titleAccent="Inisiatif Tahunan"
        description="Ringkasan pencapaian operasional, finansial, dan keberlanjutan yang mendukung pertumbuhan jangka panjang Patra Jasa."
        variant="blue"
      />

      <section className="max-w-6xl mx-auto px-6 lg:px-10 py-20">
        <SectionTitle
          eyebrow="Transparansi"
          title="Laporan Tahunan yang Menjadi Dasar Keputusan"
          description="Akses ringkasan laporan tahunan dan highlight kinerja yang menunjukkan arah strategis perusahaan dan komitmen terhadap stakeholder."
          align="left"
        />

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          className="mt-12 grid gap-8 lg:grid-cols-2"
        >
          {reports.map((report) => (
            <motion.div
              key={report.title}
              variants={fadeUp}
              className="rounded-3xl bg-white p-10 shadow-lg border border-slate-100 hover:border-patra-blue-200 transition-colors"
            >
              <div className="w-14 h-14 rounded-2xl bg-patra-blue-100 text-patra-blue-400 flex items-center justify-center mb-6">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{report.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-8">{report.description}</p>
              <button className="inline-flex items-center gap-2 rounded-full bg-patra-blue-400 hover:bg-patra-blue-300 px-6 py-3 text-sm font-semibold text-white transition">
                {report.cta}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
              </button>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}