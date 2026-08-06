"use client";
import Link from "next/link";
import { motion, type Variants } from "motion/react";
import { Card, Carousel } from "@/components/ui/apple-cards-carousel";
import { CountUpNumber } from "@/app/components/CountUpNumber";
import HeroSlider from "@/app/components/HeroSlider";
import SectionTitle from "@/app/components/SectionTitle";

// ── Data ──────────────────────────────────────────────────────────────────────

const businessPillars = [
  {
    id: "property",
    title: "Property",
    desc: "Mengembangkan kawasan hunian dan komersial terpadu yang memadukan fleksibilitas dan gaya hidup modern.",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    link: "/products/property-1",
    colSpan: "lg:col-span-2",
    rowSpan: "lg:row-span-2",
  },
  {
    id: "hotels",
    title: "Hotels & Resorts",
    desc: "Menghadirkan pengalaman menginap tak terlupakan dengan layanan standar emas di berbagai destinasi premium Indonesia.",
    img: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2000&auto=format&fit=crop",
    link: "/bisnis/hotels",
    colSpan: "lg:col-span-1",
    rowSpan: "lg:row-span-1",
  },
  {
    id: "services",
    title: "Services",
    desc: "Layanan dukungan bisnis yang andal dan terpercaya.",
    img: "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2000&auto=format&fit=crop",
    link: "/bisnis/services",
    colSpan: "lg:col-span-1",
    rowSpan: "lg:row-span-1",
  }
];

const mediaData = [
  {
    category: "Lingkungan",
    title: "Patra Jasa Tanam 1.000 Bibit Mangrove, Perkuat Ketahanan Pesisir",
    src: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2813&auto=format&fit=crop",
    content: (
      <div className="text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans">
        <p className="mb-6">PT Patra Jasa melakukan penanaman 1.000 bibit mangrove sebagai bagian dari komitmen kami terhadap pelestarian lingkungan dan ketahanan pesisir Indonesia.</p>
        <p className="mb-6 text-sm text-slate-500">7 Juli, 2026</p>
      </div>
    ),
  },
  {
    category: "Penghargaan",
    title: "Patra Jasa Raih Dua Penghargaan pada APQ Awards 2026",
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    content: (
      <div className="text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans">
        <p className="mb-6">Pengakuan atas dedikasi dan komitmen kami dalam memberikan layanan terbaik serta mendorong inovasi berkelanjutan dan Continuous Improvement.</p>
        <p className="mb-6 text-sm text-slate-500">15 Juni, 2026</p>
      </div>
    ),
  },
  {
    category: "Kemitraan",
    title: "Patra Jasa–GIZ Percepat Transisi Energi",
    src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
    content: (
      <div className="text-neutral-600 dark:text-neutral-400 text-base md:text-xl font-sans">
        <p className="mb-6">Patra Jasa bersinergi bersama GIZ mempercepat transisi energi melalui pengembangan Green Building dan investasi hijau berkelanjutan.</p>
        <p className="mb-6 text-sm text-slate-500">7 Mei, 2026</p>
      </div>
    ),
  },
];

const mediaCarouselItems = mediaData.map((item, index) => (
  <Card key={item.title} card={item} index={index} layout={true} />
));

// ── Animasi ──────────────────────────────────────────────────────────────────

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

// ── Komponen ──────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-white font-sans">
      
      {/* ── Hero Slider ── */}
      <HeroSlider />

      {/* ── About Preview (Scroll Reveal) ── */}
      <section className="w-full bg-white py-24 md:py-32 px-6 lg:px-16 overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center"
          >
            <motion.div variants={fadeUp} className="space-y-8">
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-patra-blue-400">Tentang Perusahaan</p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Membangun Nilai Korporat dengan Pilar Bisnis yang Terintegrasi.
              </h2>
              <p className="text-lg text-slate-600 font-light leading-relaxed">
                Sebagai anak perusahaan PT Pertamina (Persero), Patra Jasa hadir sebagai mitra terpercaya dalam pengembangan aset, pengelolaan hotel premium, dan layanan solusi bisnis yang profesional.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/tentang-kami"
                  className="inline-flex items-center justify-center rounded-full bg-patra-blue-400 px-8 py-4 text-sm font-bold text-white transition hover:bg-patra-blue-300 shadow-lg shadow-patra-blue-400/15"
                >
                  Pelajari Tentang Kami
                </Link>
                <Link
                  href="#pilar"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 px-8 py-4 text-sm font-semibold text-slate-700 transition hover:border-patra-blue-400 hover:text-patra-blue-400"
                >
                  Jelajahi Pilar Bisnis
                </Link>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-[2.5rem] border border-slate-100 bg-slate-50 p-10 shadow-[0_30px_80px_-55px_rgba(15,23,42,0.4)]">
              <div className="inline-flex items-center gap-3 rounded-full bg-white px-4 py-2 text-sm font-semibold text-patra-blue-500 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-patra-blue-500" />
                Corporate Profile
              </div>
              <p className="mt-8 text-slate-600 text-base leading-relaxed">
                Patra Jasa adalah perusahaan korporat dengan akar yang kuat di Indonesia. Kami terus memperkuat posisi sebagai pelopor bisnis properti, hospitality, dan layanan terpadu dengan kualitas dan kepercayaan yang tinggi.
              </p>
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-white p-6 border border-slate-200 shadow-sm">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400 mb-3">Perusahaan</p>
                  <p className="text-xl font-bold text-slate-900">Sejak 1975</p>
                </div>
                <div className="rounded-3xl bg-white p-6 border border-slate-200 shadow-sm">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400 mb-3">Fokus</p>
                  <p className="text-xl font-bold text-slate-900">Property, Hotel, Services</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Pilar Bisnis (Bento Grid) ── */}
      <section id="pilar" className="w-full bg-slate-50 py-24 px-6 lg:px-16">
        <div className="max-w-[1440px] mx-auto">
          <SectionTitle
            eyebrow="Pilar Bisnis Utama"
            title="Menjawab Kebutuhan Melalui Tiga Sektor Strategis."
            description="Jelajahi berbagai solusi bisnis dan pengembangan aset yang kami hadirkan untuk mendukung pertumbuhan ekonomi berkelanjutan."
            align="left"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-[300px] lg:auto-rows-[350px]">
            {businessPillars.map((item, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
                key={item.id}
                className={`relative rounded-3xl overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer ${item.colSpan} ${item.rowSpan}`}
                onClick={() => window.location.href = item.link}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h4 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:-translate-y-2 transition-transform duration-500">{item.title}</h4>
                  <p className="text-slate-300 font-light line-clamp-2 md:line-clamp-3 group-hover:text-white transition-colors duration-500 mb-6 group-hover:-translate-y-2">
                    {item.desc}
                  </p>
                  
                  <div className="overflow-hidden h-0 group-hover:h-12 transition-all duration-500 opacity-0 group-hover:opacity-100 flex items-center">
                    <span className="inline-flex items-center gap-2 text-patra-blue-400 font-bold uppercase tracking-wider text-sm">
                      Eksplorasi {item.title}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Statistik Perusahaan (CountUp) ── */}
      <section className="w-full bg-patra-blue-50 py-24 px-6 lg:px-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-r from-patra-blue-200/80 to-patra-blue-300/80" />
        
        <div className="relative z-10 max-w-[1440px] mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">Berjuang Bersama, Besar Bersama</h2>
            <p className="text-slate-600 font-medium max-w-2xl mx-auto">Tumbuh kuat menjadi penggerak ekonomi, kami mencatat berbagai pencapaian emas selama beberapa dekade.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-patra-blue-200 pt-8 border-t border-patra-blue-200">
            <div className="flex flex-col items-center py-4 md:py-0">
              <div className="text-4xl md:text-6xl font-black text-patra-blue-400 mb-2">
                <CountUpNumber target={22} />
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-600">Proyek Strategis</p>
            </div>
            
            <div className="flex flex-col items-center py-4 md:py-0">
              <div className="text-4xl md:text-6xl font-black text-patra-blue-400 mb-2">
                <CountUpNumber target={9} />
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-600">Hotel & Resorts</p>
            </div>
            
            <div className="flex flex-col items-center py-4 md:py-0">
              <div className="text-4xl md:text-6xl font-black text-patra-blue-400 mb-2">
                <CountUpNumber target={850} suffix="+" />
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-600">Karyawan</p>
            </div>
            
            <div className="flex flex-col items-center py-4 md:py-0">
              <div className="text-4xl md:text-6xl font-black text-patra-blue-400 mb-2">
                <CountUpNumber target={9} duration={1200} />
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-600">Proyek Mendatang</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Media & Informasi (Apple Cards Carousel) ── */}
      <section className="w-full bg-white py-24 px-6 lg:px-16 overflow-hidden">
        <div className="max-w-[1440px] mx-auto">
          <SectionTitle
            eyebrow="Media & Informasi"
            title="Kabar Terbaru Dari Kami."
            align="left"
          />
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="-mx-6 lg:-mx-16 px-6 lg:px-16"
          >
            <Carousel items={mediaCarouselItems} />
          </motion.div>
        </div>
      </section>

    </main>
  );
}