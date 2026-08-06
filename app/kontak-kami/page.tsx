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

const contactCards = [
  {
    title: "Alamat Kantor Pusat",
    desc: "Jl. Jend. Gatot Subroto No. 2, Jakarta Selatan, 12950",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
    ),
    href: "https://maps.google.com/?q=Jl.+Jend.+Gatot+Subroto+No.2,+Jakarta+Selatan",
    cta: "Lihat di Peta",
  },
  {
    title: "Email",
    desc: "customer.care@patra-jasa.com",
    img: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=2070&auto=format&fit=crop",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
    ),
    href: "mailto:customer.care@patra-jasa.com",
    cta: "Kirim Email",
  },
  {
    title: "Telepon",
    desc: "021 5217 0282",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
    ),
    href: "tel:+622152170282",
    cta: "Hubungi Kami",
  },
];

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/pt-patra-jasa/" },
  { label: "Instagram", href: "https://instagram.com/patrajasaofficial" },
  { label: "Youtube", href: "https://www.youtube.com/channel/UCtQW2zM43-z7s0zSQkUn4EA" },
  { label: "Facebook", href: "https://www.facebook.com/pajas.pt/" },
];

// ── Komponen ──────────────────────────────────────────────────────────────────

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-hidden">

      {/* ── Hero Section ── */}
      <PageHero
        eyebrow="Kontak Kami"
        title="Siap membantu setiap kebutuhan"
        titleAccent="bisnis dan kolaborasi"
        description="Hubungi tim Patra Jasa untuk pertanyaan layanan, peluang kerja sama, dukungan pelanggan, atau informasi perusahaan. Kami siap melayani dengan cepat dan profesional."
        variant="blue"
      />

      {/* ── Contact Cards ── */}
      <section className="max-w-6xl mx-auto px-6 lg:px-10 py-20">
        <SectionTitle
          eyebrow="Informasi Kontak"
          title="Terhubung Dengan Tim Kami."
          align="left"
        />

        <div className="grid gap-8 md:grid-cols-3">
          {contactCards.map((card) => (
            <motion.article
              key={card.title}
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
              className="group rounded-3xl bg-white shadow-lg border border-slate-100 overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
            >
              {/* Image Header */}
              <div className="relative h-44 overflow-hidden">
                <img src={card.img} alt={card.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-patra-blue-600/90 via-patra-blue-600/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                
                {/* Icon badge */}
                <div className="absolute bottom-5 left-6 w-14 h-14 rounded-2xl bg-white text-patra-blue-400 flex items-center justify-center shadow-lg border border-patra-blue-100">
                  {card.icon}
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{card.title}</h3>
                <p className="text-slate-600 leading-relaxed font-light mb-6">{card.desc}</p>
                {card.title !== "Alamat Kantor Pusat" && (
                  <p className="text-slate-400 text-sm leading-relaxed mb-5">
                    {card.title === "Email"
                      ? "Tim customer service tersedia untuk menjawab pertanyaan umum dan membantu rute layanan Anda."
                      : "Tersedia layanan weekday untuk bantuan penawaran proyek dan layanan pelanggan."}
                  </p>
                )}
                <a
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel={card.href.startsWith("http") ? "noreferrer" : undefined}
                  className="inline-flex items-center gap-2 rounded-full bg-patra-blue-400 hover:bg-patra-blue-300 px-6 py-3 text-sm font-semibold text-white transition shadow-lg"
                >
                  {card.cta}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ── Penawaran & Sosial Media ── */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Permintaan Penawaran */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeRight}
              className="relative overflow-hidden rounded-3xl bg-patra-blue-50 border border-patra-blue-100 p-10 md:p-12"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(50,81,209,0.12),_transparent_50%)]" />
              <img
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
                alt="Dokumen Penawaran"
                className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-luminosity"
              />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-patra-blue-400 text-white flex items-center justify-center mb-6 shadow-lg shadow-patra-blue-400/30">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Permintaan Penawaran</h2>
                <p className="text-slate-600 leading-relaxed font-light mb-8 text-lg">
                  Ingin berdiskusi tentang layanan properti, hospitality, atau jasa korporat? Kirimkan permintaan Anda dan tim kami akan segera merespons.
                </p>
                <Link href="/" className="inline-flex items-center justify-center gap-3 rounded-full bg-patra-blue-400 hover:bg-patra-blue-300 px-8 py-4 text-sm font-bold text-white transition shadow-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg>
                  Kembali ke Home
                </Link>
              </div>
            </motion.div>

            {/* Social Media */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="relative overflow-hidden rounded-3xl bg-slate-900 p-10 md:p-12 text-white shadow-2xl"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(50,81,209,0.4),_transparent_55%)]" />
              <img
                src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2070&auto=format&fit=crop"
                alt="Media Sosial"
                className="absolute inset-0 w-full h-full object-cover opacity-15 mix-blend-luminosity"
              />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-patra-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
                </div>
                <h2 className="text-3xl font-bold mb-4 tracking-tight">Follow Kami</h2>
                <p className="leading-relaxed text-slate-300 font-light mb-8 text-lg">
                  Ikuti update berita, proyek, dan penghargaan terbaru Patra Jasa melalui media sosial resmi kami.
                </p>
                <div className="space-y-3">
                  {socials.map((item) => (
                    <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="group flex items-center justify-between rounded-2xl bg-white/10 hover:bg-white/15 border border-white/10 hover:border-patra-blue-300/40 px-5 py-4 text-sm font-medium text-white transition-all duration-300">
                      <span className="flex items-center gap-4">
                        <span className="w-2 h-2 rounded-full bg-patra-blue-300 group-hover:animate-pulse" />
                        {item.label}
                      </span>
                      <svg className="w-5 h-5 text-slate-400 group-hover:text-patra-blue-300 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}