"use client";
import Link from "next/link";
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

const procurementItems = [
  {
    title: "Layanan Pengadaan",
    desc: "Patra Jasa menyediakan pengadaan barang dan jasa yang mendukung business continuity perusahaan dengan proses standar yang jelas.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
    ),
  },
  {
    title: "Proses Terbuka",
    desc: "Kami melaksanakan proses tender dan pemilihan vendor secara transparan dan sesuai kebijakan internal serta peraturan yang berlaku.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
    ),
  },
  {
    title: "Hubungi Pengadaan",
    desc: "Untuk informasi lebih lanjut mengenai lelang dan kerjasama vendor, silakan kontak tim pengadaan kami.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
    ),
  },
];

export default function ProcurementPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <PageHero
        eyebrow="Pengadaan"
        title="Solusi Pengadaan Terintegrasi untuk"
        titleAccent="Proyek Strategis."
        description="Dukungan pengadaan yang cepat, transparan, dan terpercaya untuk kebutuhan operasional dan infrastruktur perusahaan."
        variant="blue"
      />

      <section className="max-w-6xl mx-auto px-6 lg:px-10 py-20">
        <SectionTitle
          eyebrow="Layanan Pengadaan"
          title="Proses yang Transparan dan Terpercaya."
          align="center"
        />

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          className="grid gap-10 lg:grid-cols-3"
        >
          {procurementItems.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="rounded-3xl bg-white p-10 shadow-lg border border-slate-100 hover:border-patra-blue-200 transition-colors"
            >
              <div className="w-14 h-14 rounded-2xl bg-patra-blue-100 text-patra-blue-400 flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h2 className="text-xl font-semibold text-slate-900 mb-4">{item.title}</h2>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Ingin Menjadi Mitra Pengadaan?</h2>
          <p className="text-slate-600 leading-relaxed mb-8">Ajukan proposal dan identitas perusahaan Anda untuk bergabung dalam ekosistem pengadaan Patra Jasa.</p>
          <Link href="/kontak-kami" className="inline-flex rounded-full bg-patra-blue-400 px-8 py-4 text-white font-semibold hover:bg-patra-blue-300 transition">Hubungi Tim Pengadaan</Link>
        </div>
      </section>
    </main>
  );
}