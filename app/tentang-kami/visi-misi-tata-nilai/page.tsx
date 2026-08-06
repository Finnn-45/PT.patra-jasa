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

const values = [
  { title: "Amanah", description: "Memegang teguh kepercayaan yang diberikan." },
  { title: "Kompeten", description: "Terus belajar dan mengembangkan kapabilitas." },
  { title: "Harmonis", description: "Saling peduli dan menghargai perbedaan." },
  { title: "Loyal", description: "Berdedikasi dan mengutamakan kepentingan bangsa." },
  { title: "Adaptif", description: "Terus berinovasi dan antusias menghadapi perubahan." },
  { title: "Kolaboratif", description: "Membangun kerja sama yang sinergis." },
];

export default function VisiMisiPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <PageHero
        eyebrow="Tentang Kami"
        title="Visi, Misi, dan"
        titleAccent="Tata Nilai Patra Jasa"
        description="Landasan budaya dan arah strategis perusahaan yang selaras dengan tujuan keberlanjutan dan pelayanan unggul."
        variant="blue"
      />

      <section className="max-w-6xl mx-auto px-6 lg:px-10 py-20">
        <SectionTitle
          eyebrow="Visi & Misi"
          title="Landasan Strategis untuk Pertumbuhan yang Bertanggung Jawab"
          description="Menegaskan tujuan korporat dan nilai operasional yang menjadi panduan Patra Jasa dalam menghadirkan layanan unggul bagi pelanggan dan pemangku kepentingan."
          align="center"
        />

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          className="mt-12 grid gap-8 lg:grid-cols-2"
        >
          <motion.div variants={fadeUp} className="rounded-3xl bg-white p-10 shadow-lg border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Visi</h2>
            <p className="text-slate-600 leading-relaxed">Menjadi perusahaan pengembang properti dan penyedia layanan hospitality terkemuka di Indonesia yang menciptakan nilai tambah berkelanjutan.</p>
          </motion.div>

          <motion.div variants={fadeUp} className="rounded-3xl bg-white p-10 shadow-lg border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Misi</h2>
            <ul className="list-disc pl-6 space-y-4 text-slate-600 leading-relaxed">
              <li>Menghadirkan produk properti yang inovatif dan berorientasi pada kepuasan pelanggan.</li>
              <li>Memberikan layanan keramahtamahan bertaraf internasional yang memadukan budaya lokal.</li>
              <li>Mengoptimalkan sinergi operasional demi memberikan keuntungan terbaik bagi stakeholders.</li>
            </ul>
          </motion.div>
        </motion.div>
      </section>

      <section className="max-w-6xl mx-auto px-6 lg:px-10 py-20">
        <SectionTitle
          eyebrow="Tata Nilai"
          title="AKHLAK sebagai Budaya Perusahaan"
          description="Nilai-nilai Patra Jasa yang menjadi pedoman dalam pelayanan, etika kerja, dan kolaborasi internal dan eksternal."
          align="left"
        />

        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {values.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="rounded-3xl bg-white p-8 shadow-lg border border-slate-100 hover:border-patra-blue-200 transition-colors min-h-[220px]"
            >
              <h3 className="text-xl font-bold text-patra-blue-400 mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}