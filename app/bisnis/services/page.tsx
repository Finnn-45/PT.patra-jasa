"use client";
import { motion, type Variants } from "motion/react";
import Link from "next/link";
import { CometCard } from "@/components/ui/comet-card";
import PageHero from "@/app/components/PageHero";
import SectionTitle from "@/app/components/SectionTitle";

// ── Data ──────────────────────────────────────────────────────────────────────

const services = [
  {
    id: "rental",
    title: "Vehicle Rental",
    desc: "Menyediakan layanan sewa kendaraan korporat dan individu dengan armada terbaru yang terawat, memastikan perjalanan bisnis maupun pribadi Anda aman dan nyaman.",
    accent: "from-patra-blue-600 to-patra-green-500",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16a2 2 0 100-4 2 2 0 000 4z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 16a2 2 0 100-4 2 2 0 000 4z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14h1.5a1.5 1.5 0 001.5-1.5v-2.5a1.5 1.5 0 00-1.5-1.5h-1a3 3 0 01-2.6-1.5l-1-2A3 3 0 0013.3 4H10.7a3 3 0 00-2.6 1.5l-1 2A3 3 0 004.5 9h-1A1.5 1.5 0 002 10.5v2.5A1.5 1.5 0 003.5 14H5" /></svg>
    ),
    features: ["Corporate Fleet", "VIP Transfer", "Maintenance Included"]
  },
  {
    id: "building",
    title: "Building Management",
    desc: "Solusi manajemen properti terpadu untuk perkantoran, apartemen, dan area komersial. Memastikan operasional aset Anda berjalan efisien dengan standar kebersihan dan keamanan tingkat tinggi.",
    accent: "from-patra-blue-700 to-patra-blue-500",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
    ),
    features: ["Facility Management", "Security Services", "Cleaning Services"]
  },
  {
    id: "convention",
    title: "MICE & Convention",
    desc: "Mengelola dan menyelenggarakan berbagai event korporat, konferensi, hingga pameran skala internasional dengan fasilitas dan kapabilitas pengorganisasian profesional.",
    accent: "from-patra-blue-500 to-patra-slate-900",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
    ),
    features: ["Event Organizing", "Conference Halls", "Catering"]
  }
];

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

// ── Komponen ──────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  return (
    <main className="min-h-screen w-full bg-slate-50 font-sans">
      
      {/* ── Hero Section ── */}
      <PageHero
        eyebrow="Services"
        title="Solusi Tepat"
        titleAccent="untuk Bisnis Anda."
        description="Mendukung ekosistem operasional Anda melalui berbagai layanan unggulan, mulai dari manajemen gedung hingga solusi transportasi."
        variant="blue"
      />

      <section className="w-full bg-slate-50 py-24 px-6 lg:px-16">
        <div className="max-w-[1440px] mx-auto">
          <SectionTitle
            eyebrow="Layanan Unggulan"
            title="Solusi yang Menjadi Pilar Bisnis Kami."
            description="Tiga layanan utama Patra Jasa yang didesain untuk mendukung operasional perusahaan dan pengalaman pelanggan."
            align="center"
          />

          <div className="grid gap-6 lg:grid-cols-3">
            <CometCard
              title="Armada dan Transportasi"
              subtitle="Vehicle Rental"
              description="Layanan sewa kendaraan korporat dengan armada terbaru dan dukungan layanan VIP untuk mobilitas bisnis yang efisien."
              linkText="Pelajari Rental"
              href="/bisnis/services"
            />
            <CometCard
              title="Manajemen Gedung"
              subtitle="Building Management"
              description="Solusi manajemen fasilitas yang memastikan gedung, kantor, dan properti selalu beroperasi optimal."
              linkText="Lihat Manajemen"
              href="/bisnis/services"
            />
            <CometCard
              title="Event & Convention"
              subtitle="MICE"
              description="Penyelenggaraan event dan konferensi profesional dengan dukungan lokasi, catering, dan logistik terbaik."
              linkText="Pelajari MICE"
              href="/bisnis/services"
            />
          </div>
        </div>
      </section>

      {/* ── Services Layout (Zig-Zag) ── */}
      <section className="w-full bg-white py-24 px-6 lg:px-16">
        <div className="max-w-[1440px] mx-auto">
          
          <SectionTitle
            eyebrow="Layanan Kami"
            title="Keahlian dan Dedikasi di Setiap Lini."
            align="center"
          />

          <div className="flex flex-col gap-24 lg:gap-32">
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Image Side */}
                <motion.div variants={fadeUp} className="w-full lg:w-1/2">
                  <div className={`relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] group bg-gradient-to-br ${service.accent}`}>
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="absolute inset-0 flex items-center justify-center px-8">
                    <h3 className="text-4xl md:text-5xl font-extrabold text-white text-center tracking-tight">
                      {service.title}
                    </h3>
                  </div>
                </div>
                </motion.div>

                {/* Content Side */}
                <motion.div variants={fadeUp} className="w-full lg:w-1/2">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-50 text-patra-green-600 mb-6 shadow-sm border border-slate-100">
                    {service.icon}
                  </div>
                  <h4 className="text-3xl font-bold text-slate-900 mb-6">{service.title}</h4>
                  <p className="text-lg text-slate-600 font-light leading-relaxed mb-8">
                    {service.desc}
                  </p>
                  
                  <ul className="space-y-4 mb-10">
                    {service.features.map(feature => (
                      <li key={feature} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-patra-green-50 text-patra-green-600 flex items-center justify-center flex-shrink-0">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/></svg>
                        </div>
                        <span className="text-slate-700 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-patra-blue-400 hover:bg-patra-green-600 text-white font-bold transition-colors duration-300">
                    Pelajari Lebih Lanjut
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                  </button>
                </motion.div>
              </motion.div>
            ))}
          </div>
          
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="w-full bg-patra-blue-50 py-24 px-6 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Tingkatkan Efisiensi Bisnis Anda.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-slate-600 text-lg max-w-2xl mx-auto mb-10 font-light">
              Konsultasikan kebutuhan manajemen properti, pengadaan kendaraan, dan penyelenggaraan acara Anda bersama tim profesional Patra Jasa.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link href="/kontak-kami" className="inline-flex px-10 py-4 bg-patra-green-500 hover:bg-patra-green-400 text-white font-bold rounded-full transition-all duration-300 shadow-lg shadow-patra-green-500/20">
                Hubungi Kami Sekarang
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}