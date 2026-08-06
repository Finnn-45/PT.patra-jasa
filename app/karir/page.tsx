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

const careerHighlights = [
  {
    title: "Budaya Kerja",
    desc: "Patra Jasa menjunjung nilai sinergi, profesionalisme, dan inovasi. Kami menciptakan lingkungan kerja yang mendukung talenta untuk berkembang dan berkontribusi secara nyata.",
    img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Benefit Karyawan",
    desc: "Program pelatihan dan pengembangan kompetensi, insentif dan penghargaan kinerja, serta fasilitas kesehatan dan kesejahteraan untuk setiap karyawan.",
    img: "https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Tahap Rekrutmen",
    desc: "Pengajuan lamaran, seleksi administrasi, wawancara dan assessment, hingga penawaran dan onboarding yang transparan dan profesional.",
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2070&auto=format&fit=crop",
  },
];

const roles = [
  {
    title: "Hospitality",
    label: "Front Office / Food & Beverage",
    img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
    ),
  },
  {
    title: "Property",
    label: "Project Management / Development",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-4h6v4"/></svg>
    ),
  },
  {
    title: "Services",
    label: "Facility Management / Logistics",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg>
    ),
  },
];

// ── Komponen ──────────────────────────────────────────────────────────────────

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans overflow-hidden">

      {/* ── Hero Section ── */}
      <PageHero
        eyebrow="Karir"
        title="Bergabunglah bersama tim yang"
        titleAccent="membangun masa depan"
        description="Temukan peluang karir di Patra Jasa dan dukung perkembangan bisnis properti, hospitality, serta layanan terpadu di berbagai wilayah Indonesia."
        variant="green"
      />

      {/* ── Career Highlights ── */}
      <section className="max-w-6xl mx-auto px-6 lg:px-10 py-20">
        <SectionTitle
          eyebrow="Mengapa Patra Jasa"
          title="Lingkungan Kerja yang Mendukung Pertumbuhan Anda."
          accent="green"
          align="left"
        />

        <div className="grid gap-8 md:grid-cols-3">
          {careerHighlights.map((item) => (
            <motion.article
              key={item.title}
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
              className="group rounded-3xl bg-white shadow-lg border border-slate-100 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
            >
              <div className="relative h-52 overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-patra-green-600/90 via-patra-green-600/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed font-light">{item.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ── Job Roles ── */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <SectionTitle
            eyebrow="Peluang Karir"
            title="Divisi yang Membutuhkan Talenta Terbaik."
            accent="green"
            align="left"
          />

          <div className="grid gap-8 md:grid-cols-3">
            {roles.map((role) => (
              <motion.div
                key={role.title}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
                className="group relative rounded-3xl overflow-hidden aspect-[3/4] shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                onClick={() => window.location.href = "mailto:hr@patra-jasa.com"}
              >
                <img src={role.img} alt={role.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/40 to-transparent" />

                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="w-14 h-14 rounded-2xl bg-patra-green-500/30 border border-patra-green-300/30 backdrop-blur-md text-patra-green-200 flex items-center justify-center mb-5">
                    {role.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{role.title}</h3>
                  <p className="text-white/85 text-sm mb-5 leading-relaxed">
                    Kesempatan karir untuk mendukung operasional dan pertumbuhan Patra Jasa.
                  </p>
                  <span className="inline-flex self-start rounded-full bg-patra-green-500/20 border border-patra-green-300/30 backdrop-blur-md px-4 py-2 text-xs font-semibold text-patra-green-100">
                    {role.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA / Kirim Lamaran ── */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="relative overflow-hidden rounded-3xl bg-patra-green-600 p-12 md:p-16 text-white shadow-2xl"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.15),_transparent_45%),radial-gradient(circle_at_bottom_right,_rgba(53,134,14,0.5),_transparent_45%)]" />
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
              alt="Tim Patra Jasa"
              className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-luminosity"
            />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Kirim Lamaran Anda</h2>
              <p className="max-w-3xl leading-relaxed text-patra-green-50 text-lg font-light mb-8">
                Jika Anda tertarik bergabung, silakan kirim CV dan portofolio ke email resmi kami. Kami terus membuka peluang untuk talenta terbaik di bidang hospitality, property, dan layanan korporat.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:hr@patra-jasa.com"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-bold text-slate-900 hover:bg-slate-100 transition shadow-lg"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  hr@patra-jasa.com
                </a>
                <Link
                  href="/tentang-kami"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-md px-8 py-4 text-sm font-bold text-white hover:bg-white/20 transition"
                >
                  Kenali Perusahaan Kami
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}