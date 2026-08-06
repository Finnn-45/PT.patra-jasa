"use client";
import Link from "next/link";
import { motion, type Variants } from "motion/react";
import PageHero from "@/app/components/PageHero";
import SectionTitle from "@/app/components/SectionTitle";

// ── Animasi ──────────────────────────────────────────────────────────────────

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

// ── Data ──────────────────────────────────────────────────────────────────────

const newsCategories = [
  {
    title: "Media & Informasi",
    desc: "Berita seputar kegiatan operasional, kemitraan strategis, dan publikasi resmi yang menggambarkan komitmen Patra Jasa.",
    img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop",
    link: "/berita/media-informasi",
    accent: "patra-blue",
  },
  {
    title: "TJSL",
    desc: "Cerita tentang inisiatif sosial, lingkungan, dan kolaborasi komunitas yang menjadi bagian dari tanggung jawab sosial perusahaan.",
    img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2813&auto=format&fit=crop",
    link: "/berita/tjsl",
    accent: "patra-green",
  },
];

const stats = [
  { value: "120+", label: "Artikel Terbit" },
  { value: "15", label: "Penghargaan" },
  { value: "9", label: "Lokasi Kegiatan" },
  { value: "30+", label: "Program TJSL" },
];

// ── Komponen ──────────────────────────────────────────────────────────────────

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans overflow-hidden">
      
      {/* ── Hero Section ── */}
      <PageHero
        eyebrow="Berita"
        title="Informasi korporat dan"
        titleAccent="kegiatan sosial"
        description="Update berita terbaru Patra Jasa seputar inovasi, penghargaan, TJSL, dan program keberlanjutan yang memperkuat komitmen kami terhadap masyarakat dan lingkungan."
        variant="blue"
        stats={stats}
      />

      {/* ── Berita Kategori ── */}
      <section className="max-w-6xl mx-auto px-6 lg:px-10 py-20">
        <SectionTitle
          eyebrow="Kategori Berita"
          title="Jelajahi Kabar Terbaru Dari Kami."
          align="left"
        />

        <div className="grid gap-8 md:grid-cols-2">
          {newsCategories.map((item, idx) => {
            const isBlue = item.accent === "patra-blue";
            return (
              <motion.article
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
                transition={{ delay: idx * 0.15 }}
                className="group rounded-3xl bg-white shadow-lg border border-slate-100 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" />
                  <div className={`absolute inset-0 bg-gradient-to-t ${isBlue ? "from-patra-blue-500/90 via-patra-blue-500/30" : "from-patra-green-600/90 via-patra-green-600/30"} to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500`} />
                  
                  <div className="absolute bottom-5 left-6">
                    <h3 className={`text-2xl font-bold text-white drop-shadow-md inline-flex items-center gap-3`}>
                      <span className={`w-2.5 h-2.5 rounded-full ${isBlue ? "bg-patra-blue-300" : "bg-patra-green-200"} animate-pulse`} />
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Body */}
                <div className="p-10">
                  <p className="text-slate-600 leading-relaxed mb-8 font-light">{item.desc}</p>
                  <Link
                    href={item.link}
                    className={`inline-flex items-center gap-2 rounded-full ${isBlue ? "bg-patra-blue-400 hover:bg-patra-blue-300" : "bg-patra-green-500 hover:bg-patra-green-400"} px-7 py-3 text-sm font-semibold text-white transition shadow-lg`}
                  >
                    Lihat Berita {item.accent === "patra-blue" ? "Media" : "TJSL"}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="relative overflow-hidden rounded-3xl bg-patra-blue-500 p-12 md:p-16 text-white shadow-2xl"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.15),_transparent_45%),radial-gradient(circle_at_bottom_left,_rgba(50,81,209,0.5),_transparent_45%)]" />
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
              alt="Kantor Patra Jasa"
              className="absolute inset-0 w-full h-full object-cover opacity-15 mix-blend-luminosity"
            />
            
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
              <div className="max-w-2xl">
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Tetap Terhubung Dengan Kami</h3>
                <p className="text-white/85 leading-relaxed font-light text-lg">
                  Dapatkan informasi terbaru seputar inovasi, program keberlanjutan, dan kegiatan Patra Jasa langsung dari sumber resmi.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
                <Link href="/kontak-kami" className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-bold text-slate-900 hover:bg-slate-100 transition shadow-lg">
                  Hubungi Kami
                </Link>
                <Link href="/" className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-md px-7 py-4 text-sm font-bold text-white hover:bg-white/20 transition">
                  Kembali ke Home
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}