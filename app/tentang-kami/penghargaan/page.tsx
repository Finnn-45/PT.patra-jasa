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

const awards = [
  { title: "APQ Awards 2026", desc: "Dua penghargaan atas inovasi layanan dan kinerja operasional yang unggul." },
  { title: "Penghargaan TJSL", desc: "Pengakuan atas program tanggung jawab sosial dan lingkungan perusahaan." },
  { title: "Penghargaan Digital", desc: "Pengakuan atas inovasi informasi digital dan layanan pelanggan." },
];

export default function AwardsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <PageHero
        eyebrow="Penghargaan"
        title="Pengakuan atas Komitmen"
        titleAccent="Kualitas dan Inovasi."
        description="Deretan penghargaan nasional dan internasional yang memperkuat reputasi Patra Jasa di sektor hospitality, properti, dan layanan korporat."
        variant="blue"
      />

      <section className="max-w-6xl mx-auto px-6 lg:px-10 py-20">
        <SectionTitle
          eyebrow="Highlight Penghargaan"
          title="Pengakuan atas Dedikasi Kami."
          description="Berbagai penghargaan dari sektor hospitality, properti, informasi digital, dan tanggung jawab sosial perusahaan."
          align="center"
        />

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {awards.map((award) => (
            <motion.div
              key={award.title}
              variants={fadeUp}
              className="rounded-3xl bg-white p-10 shadow-lg border border-slate-100 hover:border-patra-blue-200 transition-colors"
            >
              <div className="w-14 h-14 rounded-2xl bg-patra-blue-100 text-patra-blue-400 flex items-center justify-center mb-6">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{award.title}</h3>
              <p className="text-slate-600 leading-relaxed">{award.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}