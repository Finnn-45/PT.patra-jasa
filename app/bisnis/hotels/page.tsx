"use client";
import { motion, type Variants } from "motion/react";
import Link from "next/link";
import PageHero from "@/app/components/PageHero";
import SectionTitle from "@/app/components/SectionTitle";

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

const hotelCategories = [
  {
    title: "Hotel Bisnis",
    description: "Fasilitas pertemuan dan akomodasi yang mendukung perjalanan bisnis dengan layanan profesional.",
    href: "/bisnis/hotels",
    gradient: "from-patra-blue-500 via-patra-blue-400 to-patra-green-400"
  },
  {
    title: "Hotel Resort",
    description: "Akomodasi santai dengan suasana resort yang nyaman bagi keluarga dan tamu liburan.",
    href: "/bisnis/hotels",
    gradient: "from-emerald-500 via-cyan-500 to-sky-400"
  },
  {
    title: "Convention & MICE",
    description: "Ruang event modern untuk seminar, workshop, dan kegiatan konferensi berskala profesional.",
    href: "/bisnis/hotels",
    gradient: "from-patra-blue-700 via-slate-700 to-patra-blue-500"
  }
];

export default function HotelsPage() {
  return (
    <main className="min-h-screen w-full bg-slate-50 font-sans">
      
      {/* ── Hero Section ── */}
      <PageHero
        eyebrow="Hotels & Resorts"
        title="Kemewahan dalam"
        titleAccent="Keramahtamahan."
        description="Jaringan hotel dan resor Patra Jasa memberikan pengalaman menginap hangat dan profesional, menjunjung tinggi standar layanan korporat di setiap properti."
        variant="blue"
      />

      {/* ── Introduction ── */}
      <section className="w-full bg-white py-20 px-6 lg:px-16">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-24">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            className="lg:w-1/3"
          >
            <h2 className="text-sm font-bold text-patra-green-600 tracking-widest uppercase mb-3">Hospitality Division</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Kenyamanan Berkualitas di Seluruh Nusantara.</h3>
          </motion.div>
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            className="lg:w-2/3"
          >
            <p className="text-lg text-slate-600 font-light leading-relaxed mb-8">
              Lebih dari sekadar tempat menginap, Hotels & Resorts Patra Jasa dirancang sebagai destinasi pilihan untuk liburan keluarga, perjalanan bisnis, maupun kegiatan MICE (Meeting, Incentive, Convention, and Exhibition). Kami bangga memberikan pelayanan dari hati yang mencerminkan budaya keramahtamahan Indonesia.
            </p>
            <div className="flex gap-4">
              <div className="flex flex-col">
                <span className="text-3xl font-black text-slate-900">9</span>
                <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">Properti</span>
              </div>
              <div className="w-px bg-slate-200"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-black text-slate-900">3+</span>
                <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">Provinsi</span>
              </div>
              <div className="w-px bg-slate-200"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-black text-slate-900">5-Star</span>
                <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">Quality</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="w-full bg-slate-50 py-24 px-6 lg:px-16">
        <div className="max-w-[1440px] mx-auto">
          <SectionTitle
            eyebrow="Kategori Hotel"
            title="Pilihan Akomodasi untuk Setiap Kebutuhan."
            align="center"
          />
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="grid gap-6 lg:grid-cols-3"
          >
            {hotelCategories.map((category) => (
              <motion.div key={category.title} variants={fadeUp} className="relative overflow-hidden rounded-[2rem] p-10 shadow-2xl shadow-slate-900/10 text-white">
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient}`} />
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-4">{category.title}</h3>
                  <p className="text-slate-100 leading-relaxed mb-8">{category.description}</p>
                  <Link href={category.href} className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.25em] text-white hover:text-slate-100 transition-colors">
                    Jelajahi
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="w-full bg-patra-blue-400 py-24 px-6 lg:px-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.15),_transparent_45%)]" />
        <div className="relative z-10 max-w-[1440px] mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Temukan Hotel Patra Jasa yang Tepat untuk Anda.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-patra-blue-100 text-lg max-w-2xl mx-auto mb-10">
              Hubungi tim resmi kami untuk informasi inventaris, harga, dan paket yang tersedia untuk pelanggan korporat dan wisatawan.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/kontak-kami" className="px-8 py-4 bg-white text-patra-blue-500 font-bold rounded-full hover:bg-slate-100 transition-all duration-300">
                Hubungi Kami
              </Link>
              <Link href="/bisnis/hotels" className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300">
                Lihat Detail Hotel
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}