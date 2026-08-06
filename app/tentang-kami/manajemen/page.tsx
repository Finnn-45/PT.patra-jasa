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

const leadership = [
  { name: "Direktur Utama", role: "Strategi & Kepemimpinan" },
  { name: "Direktur Keuangan & SDM", role: "Keuangan dan Talenta" },
  { name: "Direktur Operasi", role: "Operasional dan Layanan" },
];

export default function ManagementPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <PageHero
        eyebrow="Manajemen"
        title="Tim Kepemimpinan yang"
        titleAccent="Memimpin Pertumbuhan"
        description="Profil eksekutif dan manajemen senior yang mengarahkan bisnis Patra Jasa menuju keunggulan operasional."
        variant="blue"
      />

      <section className="max-w-6xl mx-auto px-6 lg:px-10 py-20">
        <SectionTitle
          eyebrow="Tim Eksekutif"
          title="Manajemen yang Mengarahkan Visi Patra Jasa"
          description="Tim kepemimpinan yang mendorong inovasi, layanan, dan pertumbuhan bisnis melalui strategi yang terstruktur dan berorientasi hasil."
          align="left"
        />

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {leadership.map((person) => (
            <motion.div
              key={person.name}
              variants={fadeUp}
              className="rounded-3xl bg-white p-10 shadow-lg border border-slate-100 hover:border-patra-green-200 transition-colors"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-patra-green-500 mb-3">Posisi</p>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{person.name}</h3>
              <p className="text-slate-600 leading-relaxed">{person.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}