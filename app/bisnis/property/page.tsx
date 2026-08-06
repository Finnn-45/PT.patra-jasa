"use client";
import Link from "next/link";
import { motion, type Variants } from "motion/react";
import { CometCard } from "@/components/ui/comet-card";
import PageHero from "@/app/components/PageHero";
import SectionTitle from "@/app/components/SectionTitle";

// ── Data ──────────────────────────────────────────────────────────────────────

const stats = [
  { value: "40+", label: "Tahun Pengalaman" },
  { value: "10+", label: "Kota Strategis" },
  { value: "50+", label: "Aset Terkelola" },
  { value: "100%", label: "Komitmen ESG" },
];

const propertyTypes = [
  {
    title: "Properti Jual",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
    ),
    desc: "Hidup penuh makna berawal dari tempat di mana Anda menghabiskan waktu untuk tinggal dan bekerja. Patra Jasa menghadirkan berbagai jenis properti yang sesuai dengan kebutuhan serta nilai yang Anda butuhkan.",
    accent: "from-patra-blue-500 to-patra-blue-700",
    features: ["Landed House", "Apartment", "Area Bisnis"],
    locations: ["Jakarta", "Cirebon", "Yogyakarta"],
  },
  {
    title: "Properti Sewa",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
    ),
    desc: "Menjadi kebutuhan urban mewakili Anda untuk investasi mobilitas serta fleksibilitas ruang tinggal. Patra Jasa menyediakan beragam properti serta fasilitas pendukung yang dapat diandalkan di berbagai kota.",
    accent: "from-patra-green-500 to-patra-blue-500",
    features: ["Office Space", "Retail", "Serviced Residence"],
    locations: ["Jakarta", "Bandung", "Surabaya"],
  },
];

const upcomingProjects = [
  {
    nama: "Proyek Pengembangan Kawasan",
    lokasi: "Jakarta dan Sekitarnya",
    desc: "Pengembangan kawasan terpadu yang mendukung pertumbuhan ekonomi lokal dan menghadirkan ruang hunian serta komersial yang modern.",
    accent: "from-patra-blue-700 to-patra-slate-900",
  },
];

// ── Animasi ──────────────────────────────────────────────────────────────────

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
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

export default function PropertyPage() {
  return (
    <main className="min-h-screen w-full bg-white font-sans">

      {/* ── Hero Banner ── */}
      <PageHero
        eyebrow="Patra Jasa · Property"
        title="Mengembangkan Nilai,"
        titleAccent="Membangun Masa Depan."
        description="Patra Jasa mengembangkan aset dan lahan secara berkelanjutan — dari hunian yang asri, ruang bisnis strategis, hingga kawasan terpadu yang memadukan fleksibilitas dan gaya hidup modern."
        variant="blue"
      />

      <section className="w-full bg-slate-50 py-24 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            eyebrow="Properti Unggulan"
            title="Solusi Properti Terintegrasi untuk Bisnis dan Hunian."
            description="Tiga aspek utama properti Patra Jasa untuk mendukung pengembangan kawasan, investasi, dan kebutuhan operasional."
            align="center"
          />

          <div className="grid gap-6 lg:grid-cols-3">
            <CometCard
              title="Hunian dan Kawasan Premium"
              subtitle="Properti Jual"
              description="Kawasan perumahan dan hunian terpadu yang mengutamakan kualitas, desain modern, dan kenyamanan penghuni."
              linkText="Lihat Properti"
              href="/products/property-1"
            />
            <CometCard
              title="Ruang Usaha dan Kantor"
              subtitle="Properti Sewa"
              description="Ruang kantor dan komersial yang strategis untuk mendukung kegiatan bisnis serta produktivitas perusahaan."
              linkText="Jelajahi Sewa"
              href="/products/property-1"
            />
            <CometCard
              title="Pengembangan Kawasan"
              subtitle="Development"
              description="Pengembangan kawasan terpadu yang selaras dengan lingkungan, infrastruktur, dan nilai investasi jangka panjang."
              linkText="Pelajari Kawasan"
              href="/products/property-1"
            />
          </div>
        </div>
      </section>

      {/* ── Stats Overview ── */}
      <section className="w-full bg-white py-12 px-6 lg:px-16 border-b border-slate-100">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-black text-patra-blue-400 mb-2">{stat.value}</div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Properti Jual & Sewa ── */}
      <section className="w-full bg-slate-50 py-20 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            eyebrow="Portofolio Kami"
            title="Dua Lini Utama Bisnis Properti."
            align="center"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {propertyTypes.map((item, idx) => (
              <motion.div
                key={idx}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 border border-slate-100"
              >
                <div className={`relative h-56 overflow-hidden rounded-3xl bg-gradient-to-br ${item.accent}`}>
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="absolute bottom-4 left-6 flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-white/15 text-white flex items-center justify-center shadow-lg backdrop-blur-sm">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-tight">{item.title}</h3>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">{item.desc}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.features.map(f => (
                      <span key={f} className="px-3 py-1.5 bg-patra-blue-50 text-patra-blue-400 text-xs font-semibold rounded-full">
                        {f}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <svg className="w-4 h-4 text-patra-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                      <span>{item.locations.join(" · ")}</span>
                    </div>
                    <Link
                      href="/products/property-1"
                      className="inline-flex items-center gap-2 text-xs font-bold text-patra-blue-400 hover:text-patra-blue-300 transition-colors"
                    >
                      Selengkapnya
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Proyek Mendatang ── */}
      <section className="w-full bg-white py-20 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            eyebrow="Proyek Mendatang"
            title="Inovasi yang Akan Datang."
            align="center"
          />

          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
            className="relative rounded-3xl overflow-hidden group shadow-lg hover:shadow-2xl transition-shadow duration-500"
          >
            <div className="relative h-[400px] md:h-[460px]">
              {upcomingProjects.map(p => (
                <div key={p.nama} className="absolute inset-0 bg-gradient-to-t from-slate-950 via-patra-blue-900 to-transparent">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.12),_transparent_30%)]" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                    <span className="inline-block px-4 py-1.5 bg-patra-green-400 text-white text-xs font-bold rounded-full uppercase tracking-wider mb-4">
                      Segera Hadir
                    </span>
                    <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-2">{p.nama}</h3>
                    <p className="text-patra-blue-100 font-semibold mb-4 flex items-center gap-2 text-sm">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                      {p.lokasi}
                    </p>
                    <p className="text-slate-200 font-light leading-relaxed max-w-2xl">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="w-full bg-patra-blue-50 py-16 px-6 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}
          >
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
              Tertarik dengan Properti Kami?
            </h2>
            <p className="text-slate-600 font-light mb-8 max-w-2xl mx-auto">
              Konsultasikan kebutuhan properti Anda bersama tim profesional Patra Jasa. Kami siap membantu Anda menemukan solusi terbaik.
            </p>
            <motion.div variants={fadeUp}>
              <Link
                href="/kontak-kami"
                className="inline-flex px-8 py-4 bg-patra-blue-400 hover:bg-patra-blue-300 text-white font-bold rounded-full transition-all duration-300 shadow-lg shadow-patra-blue-400/25 hover:-translate-y-1"
              >
                Hubungi Kami Sekarang
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Bisnis Lainnya ── */}
      <section className="w-full border-t border-slate-200 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200">
          <Link href="/bisnis/property" className="flex items-center gap-4 p-6 group hover:bg-patra-blue-50 transition">
            <div className="w-20 h-14 rounded-2xl bg-gradient-to-br from-patra-blue-500 to-patra-blue-700 flex items-center justify-center text-white text-lg font-bold">
              P
            </div>
            <div>
              <h3 className="text-[12px] font-bold text-slate-800 group-hover:text-patra-blue-400 transition">PROPERTY</h3>
              <p className="text-[11px] text-slate-500 mt-1 leading-snug">Mengelola aset agar memberikan manfaat untuk masyarakat.</p>
            </div>
          </Link>

          <Link href="/bisnis/hotels" className="flex items-center gap-4 p-6 group hover:bg-patra-blue-50 transition">
            <div className="w-20 h-14 rounded-2xl bg-gradient-to-br from-patra-green-500 to-patra-blue-500 flex items-center justify-center text-white text-lg font-bold">
              H
            </div>
            <div>
              <h3 className="text-[12px] font-bold text-slate-800 group-hover:text-patra-blue-400 transition">HOTELS & RESORTS</h3>
              <p className="text-[11px] text-slate-500 mt-1 leading-snug">Temukan berbagai produk hotel di seluruh Indonesia.</p>
            </div>
          </Link>

          <Link href="/bisnis/services" className="flex items-center gap-4 p-6 group hover:bg-patra-blue-50 transition">
            <div className="w-20 h-14 rounded-2xl bg-gradient-to-br from-patra-blue-700 to-patra-green-500 flex items-center justify-center text-white text-lg font-bold">
              S
            </div>
            <div>
              <h3 className="text-[12px] font-bold text-slate-800 group-hover:text-patra-blue-400 transition">SERVICES</h3>
              <p className="text-[11px] text-slate-500 mt-1 leading-snug">Menyediakan berbagai pelayanan untuk mendukung bisnis Anda.</p>
            </div>
          </Link>
        </div>
      </section>

    </main>
  );
}