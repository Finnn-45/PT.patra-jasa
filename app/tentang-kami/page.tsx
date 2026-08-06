"use client";
import { motion, useScroll, useTransform, type Variants } from "motion/react";
import { useRef } from "react";
import Link from "next/link";
import { CountUpNumber } from "@/app/components/CountUpNumber";
import SectionTitle from "@/app/components/SectionTitle";

// ── Animasi ──────────────────────────────────────────────────────────────────

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

// ── Data ──────────────────────────────────────────────────────────────────────

const values = [
  { letter: "A", title: "Amanah", desc: "Memegang teguh kepercayaan yang diberikan." },
  { letter: "K", title: "Kompeten", desc: "Terus belajar dan mengembangkan kapabilitas." },
  { letter: "H", title: "Harmonis", desc: "Saling peduli dan menghargai perbedaan." },
  { letter: "L", title: "Loyal", desc: "Berdedikasi dan mengutamakan kepentingan Bangsa dan Negara." },
  { letter: "A", title: "Adaptif", desc: "Terus berinovasi dan antusias dalam menggerakkan ataupun menghadapi perubahan." },
  { letter: "K", title: "Kolaboratif", desc: "Membangun kerja sama yang sinergis." },
];

const timeline = [
  { year: "1975", title: "Awal Mula Beroperasi", desc: "Beroperasi pertama kali di industri perhotelan dengan meresmikan Patra Jasa Bali.", img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop" },
  { year: "1990", title: "Ekspansi Nasional", desc: "Membuka berbagai properti hotel di Semarang, Cirebon, dan kawasan strategis lainnya.", img: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=2070&auto=format&fit=crop" },
  { year: "2014", title: "Transformasi Bisnis", desc: "Melakukan transformasi dari perusahaan hospitality menjadi pengembang properti dan layanan.", img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2070&auto=format&fit=crop" },
  { year: "2020", title: "Inovasi Multi-Sektor", desc: "Memperkuat lini bisnis Services dan Property, menghadirkan apartemen dan kawasan terpadu.", img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop" },
  { year: "Kini", title: "Pertumbuhan Berkelanjutan", desc: "Menjadi ujung tombak inovasi BUMN, berkomitmen pada ESG dan pelayanan standar internasional.", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" }
];

const management = [
  { name: "John Doe", title: "Direktur Utama", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" },
  { name: "Jane Smith", title: "Direktur Keuangan & SDM", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" },
  { name: "Robert Johnson", title: "Direktur Operasi & Properti", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop" }
];

// ── Komponen ──────────────────────────────────────────────────────────────────

export default function TentangKamiPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <main className="min-h-screen w-full bg-slate-50 font-sans overflow-hidden" ref={containerRef}>
      
      {/* ── Hero Parallax Section ── */}
      <section data-nav-theme="dark" className="relative w-full h-[70vh] min-h-[500px] overflow-hidden bg-gradient-to-br from-patra-blue-700 to-patra-blue-950 pt-[88px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.14),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.08),_transparent_35%)]" />
        <img src="/about-illustration.svg" alt="Ilustrasi Patra Jasa" className="absolute inset-0 w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-slate-950/10 to-transparent" />

        <motion.div 
          style={{ opacity }}
          className="relative z-10 flex flex-col justify-end h-full max-w-[1440px] mx-auto px-6 lg:px-16 pb-24"
        >
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-3xl">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-patra-blue-300/30 bg-patra-blue-300/10 backdrop-blur-md mb-6">
              <span className="w-2 h-2 rounded-full bg-patra-blue-400" />
              <span className="text-patra-blue-400 text-xs font-bold tracking-widest uppercase">Company Profile</span>
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6 drop-shadow-sm">
              Inovasi untuk <br />
              <span className="text-patra-blue-400">Negeri.</span>
            </motion.h1>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Intro Section ── */}
      <section data-nav-theme="light" className="w-full bg-slate-50 py-16 px-6 lg:px-16 relative z-20 -mt-10">
        <div className="max-w-[1440px] mx-auto">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="bg-white rounded-3xl p-8 md:p-16 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100/50"
          >
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
              <motion.div variants={fadeRight} className="lg:w-1/2">
                <div className="relative rounded-3xl overflow-hidden shadow-[0_30px_80px_-40px_rgba(2,30,88,0.4)] group">
                  <img
                    src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop"
                    alt="Kantor Patra Jasa"
                    className="w-full h-[400px] lg:h-[520px] object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-patra-blue-500/80 via-transparent to-transparent opacity-70" />
                  
                  {/* Badge overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 p-5 text-white">
                      <p className="text-xs font-bold uppercase tracking-[0.3em] text-patra-blue-100 mb-1">Sejak 1975</p>
                      <p className="text-lg font-bold leading-snug">Terpercaya Selama 5 Dekade di Industri Properti & Hospitality</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-4">
                  Tumbuh Bersama, Membangun Bangsa.
                </h2>
                <div className="w-20 h-1.5 bg-gradient-to-r from-patra-blue-300 to-patra-blue-400 rounded-full mb-8" />
                
                <p className="text-lg text-slate-600 font-light leading-relaxed mb-6">
                  <strong className="font-semibold text-patra-blue-400">PT Patra Jasa</strong> merupakan perusahaan yang bergerak melalui 3 pilar bisnis, yaitu <span className="font-medium text-slate-800">Property & Development</span>, <span className="font-medium text-slate-800">Hotels & Resorts</span> dan <span className="font-medium text-slate-800">Services</span>. Beroperasi pertama kali di industri perhotelan sejak tahun 1975, PT Patra Jasa melebarkan sayap merambah bisnis properti dan multijasa.
                </p>
                <p className="text-lg text-slate-600 font-light leading-relaxed">
                  Sebagai anak perusahaan BUMN terbesar di Indonesia, <strong className="font-semibold text-patra-blue-400">PT Pertamina (Persero)</strong>, kredibilitas dan pengalaman PT Patra Jasa dalam memberikan pelayanan terbaik tidak diragukan lagi. Kami berkomitmen untuk terus menghadirkan karya yang berdampak positif bagi masyarakat.
                </p>

                {/* Mini stats */}
                <div className="grid grid-cols-2 gap-4 mt-10">
                  <div className="rounded-2xl bg-patra-blue-50 border border-patra-blue-100 p-6 text-center">
                    <div className="text-3xl font-black text-patra-blue-400 mb-1">3</div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-600">Pilar Bisnis</p>
                  </div>
                  <div className="rounded-2xl bg-patra-blue-50 border border-patra-blue-100 p-6 text-center">
                    <div className="text-3xl font-black text-patra-blue-400 mb-1">9+</div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-600">Hotel & Properti</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Visi & Misi ── */}
      <section className="w-full bg-patra-blue-50 py-24 px-6 lg:px-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(0,114,198,0.1),_transparent_40%),radial-gradient(circle_at_bottom_left,_rgba(0,114,198,0.1),_transparent_40%)]" />
        
        <div className="max-w-[1440px] mx-auto relative z-10">
          {/* Visi Misi Hero Image */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            className="relative rounded-3xl overflow-hidden h-[320px] md:h-[420px] mb-16 shadow-2xl group"
          >
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop"
              alt="Kolaborasi Tim Patra Jasa"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-patra-blue-950/80 via-patra-blue-900/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-patra-blue-900/50 to-transparent" />
            <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 right-8 max-w-2xl">
              <p className="text-patra-blue-100 text-sm font-bold uppercase tracking-[0.3em] mb-3">Komitmen Kami</p>
              <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                Membangun sinergi untuk hasil yang berkelanjutan.
              </h3>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Visi */}
            <motion.div variants={fadeUp} className="bg-white backdrop-blur-xl border border-patra-blue-200 rounded-3xl hover:bg-patra-blue-50 transition-colors overflow-hidden">
              <div className="relative h-48 mb-8 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                  alt="Visi Patra Jasa"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-patra-blue-600/70 to-transparent" />
              </div>
              <motion.div className="px-10 pb-10">
              <div className="w-16 h-16 rounded-2xl bg-patra-blue-100 text-patra-blue-400 flex items-center justify-center mb-8 border border-patra-blue-200">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">Visi</h3>
              <p className="text-xl font-light text-slate-600 leading-relaxed">
                Menjadi perusahaan pengembang properti dan penyedia layanan hospitality terkemuka di Indonesia yang menciptakan nilai tambah berkelanjutan.
              </p>
              </motion.div>
            </motion.div>

            {/* Misi */}
            <motion.div variants={fadeUp} className="bg-white backdrop-blur-xl border border-patra-blue-200 rounded-3xl hover:bg-patra-blue-50 transition-colors overflow-hidden">
              <div className="relative h-48 mb-8 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?q=80&w=2070&auto=format&fit=crop"
                  alt="Misi Patra Jasa"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-patra-blue-600/70 to-transparent" />
              </div>
              <motion.div className="px-10 pb-10">
              <div className="w-16 h-16 rounded-2xl bg-patra-blue-100 text-patra-blue-400 flex items-center justify-center mb-8 border border-patra-blue-200">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">Misi</h3>
              <ul className="space-y-4 text-slate-600 font-light leading-relaxed">
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2.5 rounded-full bg-patra-blue-400 flex-shrink-0" />
                  <p>Menghadirkan produk properti yang inovatif dan berorientasi pada kepuasan pelanggan.</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2.5 rounded-full bg-patra-blue-400 flex-shrink-0" />
                  <p>Memberikan layanan keramahtamahan bertaraf internasional yang memadukan budaya lokal.</p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 mt-2.5 rounded-full bg-patra-blue-400 flex-shrink-0" />
                  <p>Mengoptimalkan sinergi operasional demi memberikan keuntungan terbaik bagi stakeholders.</p>
                </li>
              </ul>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Tata Nilai AKHLAK */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
            className="mt-32"
          >
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold text-patra-blue-400 tracking-widest uppercase mb-3">Tata Nilai BUMN</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">AKHLAK</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((v, i) => (
                <motion.div 
                  key={i} variants={fadeUp} 
                  className="bg-white p-8 rounded-3xl border border-patra-blue-200 hover:border-patra-blue-300 transition-colors group"
                >
                  <div className="text-5xl font-black text-patra-blue-100 group-hover:text-patra-blue-200 transition-colors absolute right-8 top-8 opacity-40 pointer-events-none">
                    {v.letter}
                  </div>
                  <h4 className="text-xl font-bold text-patra-blue-400 mb-4">{v.title}</h4>
                  <p className="text-slate-600 font-light leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Timeline Sejarah ── */}
      <section className="w-full bg-white py-24 px-6 lg:px-16">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-16">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="lg:w-1/3 lg:sticky lg:top-32 h-fit"
          >
            <h2 className="text-sm font-bold text-patra-blue-400 tracking-widest uppercase mb-3">Jejak Langkah</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">Perjalanan Menuju Puncak.</h3>
            <p className="text-slate-600 font-light leading-relaxed">Dari langkah pertama di industri hospitality, hingga transformasi menjadi raksasa di sektor properti dan jasa.</p>
          </motion.div>
          
          <div className="lg:w-2/3">
            <div className="relative border-l-2 border-slate-100 pl-8 md:pl-12 py-4 space-y-16">
              {timeline.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
                  className="relative"
                >
                  {/* Dot */}
                  <div className="absolute w-6 h-6 rounded-full bg-patra-blue-100 border-4 border-patra-blue-300 -left-[45px] md:-left-[61px] top-1 shadow-sm" />

                  <div className="group relative rounded-3xl overflow-hidden mb-6 shadow-lg hover:shadow-2xl transition-shadow duration-500">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-60 md:h-72 object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-patra-blue-950/80 via-patra-blue-900/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                      <div className="text-4xl md:text-5xl font-black text-white mb-2">{item.year}</div>
                    </div>
                  </div>

                  <h4 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h4>
                  <p className="text-slate-600 font-light leading-relaxed text-lg max-w-xl">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Manajemen ── */}
      <section className="w-full bg-slate-50 py-24 px-6 lg:px-16">
        <div className="max-w-[1440px] mx-auto">
          <SectionTitle
            eyebrow="Leadership"
            title="Jajaran Manajemen."
            align="center"
          />

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {management.map((person, idx) => (
              <motion.div variants={fadeUp} key={idx} className="group cursor-pointer">
                <div className="relative rounded-3xl overflow-hidden aspect-[4/5] mb-6 shadow-md group-hover:shadow-xl transition-all duration-500">
                  <img 
                    src={person.img} 
                    alt={person.name}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="text-center">
                  <h4 className="text-xl font-bold text-slate-900 mb-1">{person.name}</h4>
                  <p className="text-patra-blue-400 font-medium text-sm">{person.title}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="w-full bg-patra-blue-50 pt-16 pb-8 border-t border-patra-blue-200">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          
          <div className="lg:col-span-2">
            <img src="/logo.svg" alt="Patra Jasa" className="h-10 mb-6 brightness-0 invert" />
            <p className="text-slate-600 text-sm leading-relaxed mb-6 max-w-sm">
              PT Patra Jasa merupakan anak perusahaan PT Pertamina (Persero) yang bergerak melalui 3 pilar bisnis: Property, Hotels & Resorts, dan Services.
            </p>
            <div className="flex gap-3">
              {['LinkedIn', 'Instagram', 'YouTube', 'Facebook'].map((s) => (
                <a key={s} href="#" className="w-10 h-10 rounded-full bg-white border border-patra-blue-200 hover:bg-patra-blue-400 hover:text-white hover:border-patra-blue-400 flex items-center justify-center text-slate-600 transition-all shadow-sm">
                  <span className="text-xs font-bold">{s[0]}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 text-sm uppercase tracking-wider">Bisnis</h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li><Link href="/products/property-1" className="hover:text-patra-blue-400 transition">Property</Link></li>
              <li><Link href="/bisnis/hotels" className="hover:text-patra-blue-400 transition">Hotels & Resorts</Link></li>
              <li><Link href="/bisnis/services" className="hover:text-patra-blue-400 transition">Services</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 text-sm uppercase tracking-wider">Tentang</h4>
            <ul className="space-y-4 text-sm text-slate-600">
              <li><Link href="/tentang-kami" className="hover:text-patra-blue-400 transition">Profil Perusahaan</Link></li>
              <li><Link href="#" className="hover:text-patra-blue-400 transition">Tata Kelola</Link></li>
              <li><Link href="#" className="hover:text-patra-blue-400 transition">Laporan Tahunan</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 text-sm uppercase tracking-wider">Kontak</h4>
            <div className="space-y-4 text-sm text-slate-600">
              <p className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-patra-blue-300/20 text-patra-blue-400 flex items-center justify-center flex-shrink-0 border border-patra-blue-300/30">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </span>
                customercare@patra-jasa.com
              </p>
              <p className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-patra-blue-300/20 text-patra-blue-400 flex items-center justify-center flex-shrink-0 border border-patra-blue-300/30">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </span>
                021 5270 282
              </p>
            </div>
          </div>

        </div>
        
        <div className="max-w-[1440px] mx-auto mt-16 pt-8 border-t border-patra-blue-200 px-6 lg:px-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-600 font-medium">© 2026 PT Patra Jasa. All Rights Reserved.</p>
          <div className="flex gap-6 text-sm text-slate-600 font-medium">
            <Link href="#" className="hover:text-patra-blue-400 transition">Privacy Policy</Link>
            <Link href="#" className="hover:text-patra-blue-400 transition">Terms of Service</Link>
          </div>
        </div>
      </footer>

    </main>
  );
}