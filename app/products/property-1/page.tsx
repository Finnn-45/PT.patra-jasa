  "use client";
import Link from "next/link";
import { motion, type Variants } from "motion/react";
import { CometCard } from "@/components/ui/comet-card";

// ── Data ──────────────────────────────────────────────────────────────────────

const propertiJual = [
  {
    id: 1,
    nama: "Hunian Premium Terpadu",
    lokasi: "Kawasan Strategis Indonesia",
    deskripsi:
      "Pengembangan hunian modern yang mengutamakan kualitas hidup, aksesibilitas, dan kenyamanan untuk keluarga serta profesional.",
    tipe: ["36/72", "54/120", "120/200"],
    fasilitas: ["Clubhouse", "Kolam Renang", "Area Jogging", "CCTV 24 Jam"],
    accent: "from-patra-blue-500 to-patra-green-500",
  },
  {
    id: 2,
    nama: "Kawasan Komersial Modern",
    lokasi: "Kota Besar di Indonesia",
    deskripsi:
      "Properti komersial dengan desain modern dan infrastruktur yang mendukung kegiatan bisnis sehari-hari.",
    tipe: ["54/100", "72/150", "100/200"],
    fasilitas: ["Gerbang Keamanan", "Taman Bermain", "Jogging Track", "Masjid"],
    accent: "from-patra-blue-700 to-patra-blue-500",
  },
  {
    id: 3,
    nama: "Pengembangan Lahan Berkelanjutan",
    lokasi: "Wilayah Potensial",
    deskripsi:
      "Pengembangan kawasan terpadu yang mengedepankan keberlanjutan, kenyamanan lingkungan, dan nilai investasi jangka panjang.",
    tipe: ["36/60", "45/90", "72/120"],
    fasilitas: ["Pos Keamanan", "Taman Hijau", "Area Olahraga", "Balai Warga"],
    accent: "from-patra-green-500 to-patra-blue-700",
  },
];

const propertiSewa = [
  {
    id: 1,
    nama: "Ruang Kantor Korporat",
    lokasi: "Jakarta Selatan",
    deskripsi:
      "Gedung perkantoran dengan fasilitas lengkap, infrastruktur modern, dan keamanan yang mendukung operasional bisnis.",
    luas: ["200 m²", "500 m²", "1.000 m²", "1 Lantai Penuh"],
    fasilitas: [
      "Lift Berkecepatan Tinggi",
      "Genset Backup",
      "Central AC",
      "Parkir Basement",
    ],
    accent: "from-patra-blue-600 to-patra-blue-800",
  },
  {
    id: 2,
    nama: "Pusat Konvensi & Event",
    lokasi: "Jakarta Barat",
    deskripsi:
      "Ruang konvensi fleksibel untuk pertemuan bisnis, konferensi, dan event korporat dengan dukungan layanan profesional.",
    luas: ["Meeting Room (30 pax)", "Ballroom (500 pax)", "Auditorium (1.000 pax)"],
    fasilitas: [
      "Audio Visual Lengkap",
      "WiFi Highspeed",
      "Catering Service",
      "Valet Parking",
    ],
    accent: "from-patra-blue-500 to-patra-slate-700",
  },
];

const proyekMendatang = [
  {
    id: 1,
    nama: "Pengembangan Infrastruktur",
    lokasi: "Wilayah Strategis",
    deskripsi:
      "Pengembangan kawasan terpadu yang mendukung pertumbuhan ekonomi dan menyediakan ruang hunian serta komersial berkualitas.",
    statusTarget: "Kuartal 2, 2025",
    konsep: "Kawasan Mixed-use Berkelanjutan",
    accent: "from-patra-green-500 to-patra-blue-700",
    highlight: true,
  },
  {
    id: 2,
    nama: "Kawasan Mixed-use",
    lokasi: "Pusat Kota",
    deskripsi:
      "Proyek pengembangan yang mengintegrasikan hunian, kawasan bisnis, dan fasilitas publik dalam satu ekosistem yang modern.",
    statusTarget: "Kuartal 4, 2025",
    konsep: "High-Rise Urban Living",
    accent: "from-patra-blue-700 to-patra-slate-900",
    highlight: false,
  },
];

// ── Animasi ──────────────────────────────────────────────────────────────────

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
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
    <main className="min-h-screen w-full bg-slate-50 pt-[72px] lg:pt-[88px] font-sans">

      {/* ── Hero Banner ── */}
      <section data-nav-theme="dark" className="relative w-full h-[60vh] min-h-[400px] overflow-hidden bg-gradient-to-br from-patra-blue-700 to-patra-blue-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.16),_transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(255,255,255,0.08),_transparent_30%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/70 to-slate-900/30" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col items-center"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-2 mb-4 text-sm font-semibold tracking-widest text-patra-green-300 uppercase">
              <span className="w-8 h-[2px] bg-patra-green-300" />
              Bisnis
              <span className="w-8 h-[2px] bg-patra-green-300" />
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight drop-shadow-xl mb-6">
              Property
            </motion.h1>
            <motion.p variants={fadeUp} className="text-base md:text-xl text-slate-200 max-w-2xl leading-relaxed font-light">
              Menghadirkan nilai kehidupan melalui ruang yang inspiratif, merangkai masa depan perumahan dan komersial dengan standar emas Patra Jasa.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Intro Section ── */}
      <section className="relative w-full py-16 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.p
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            className="text-lg md:text-2xl text-slate-600 font-light leading-relaxed max-w-4xl mx-auto"
          >
            Patra Jasa mengembangkan aset dan lahan secara <span className="font-semibold text-patra-green-700">berkelanjutan</span>. Mulai dari hunian yang asri, ruang bisnis strategis, hingga kawasan terpadu yang memadukan <span className="font-semibold text-patra-blue-400">fleksibilitas</span> dan gaya hidup modern.
          </motion.p>
        </div>
      </section>

      <section className="w-full bg-slate-50 py-24 px-6 lg:px-16">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <p className="text-sm uppercase tracking-[0.35em] text-patra-blue-400 mb-3">Property Highlights</p>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900">Solusi Properti yang Menjawab Semua Kebutuhan.</h2>
          <p className="mt-4 text-slate-600 text-base md:text-lg max-w-3xl mx-auto">Sorotan tiga fokus properti Patra Jasa: hunian, sewa kantor, dan proyek kawasan yang kuat.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <CometCard
            title="Hunian Premium"
            subtitle="For Sale"
            description="Rumah dan kawasan hunian modern yang dirancang untuk kenyamanan keluarga dan nilai investasi tinggi."
            linkText="Lihat Properti"
            href="/products/property-1"
          />
          <CometCard
            title="Ruang Kantor"
            subtitle="For Lease"
            description="Office tower dan gedung komersial yang mendukung kebutuhan bisnis dengan lokasi strategis."
            linkText="Telusuri Sewa"
            href="/products/property-1"
          />
          <CometCard
            title="Pengembangan Kawasan"
            subtitle="Development"
            description="Proyek kawasan terpadu yang memperkuat ekosistem hunian, komersial, dan fasilitas publik."
            linkText="Pelajari Proyek"
            href="/products/property-1"
          />
        </div>
      </section>

      {/* ── Properti Jual ── */}
      <section className="w-full bg-slate-50 py-24 overflow-hidden relative">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="mb-16 md:mb-24 flex flex-col items-center text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
              Properti <span className="text-patra-green-600">Jual</span>
            </h2>
            <div className="w-20 h-1 bg-patra-green-500 rounded-full mb-6" />
            <p className="text-base text-slate-600 max-w-2xl leading-relaxed">
              Hidup penuh makna berawal dari tempat di mana Anda menghabiskan waktu untuk tinggal dan bekerja. Jelajahi portofolio perumahan premium kami yang tersebar di kota-kota strategis.
            </p>
          </motion.div>

          <div className="space-y-24 md:space-y-32">
            {propertiJual.map((item, i) => (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                key={item.id}
                className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 lg:gap-20 items-center group`}
              >
                {/* Image */}
                <motion.div variants={fadeUp} className="w-full lg:w-1/2 flex-shrink-0 relative">
                  <div className="absolute inset-0 bg-patra-green-600/10 rounded-2xl transform translate-x-4 translate-y-4 -z-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500" />
                  <div className="overflow-hidden rounded-2xl shadow-xl bg-gradient-to-br from-patra-blue-500 to-patra-green-500">
                    <div className="relative h-[300px] md:h-[450px] flex items-center justify-center p-8">
                      <div className="text-white text-center">
                        <p className="text-sm uppercase tracking-[0.3em] text-white/80 mb-4">Properti</p>
                        <h3 className="text-3xl md:text-4xl font-extrabold">{item.nama}</h3>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Text */}
                <motion.div variants={fadeRight} className="w-full lg:w-1/2 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-patra-green-50 text-patra-green-700 text-xs font-bold uppercase tracking-wider mb-4 border border-patra-green-100">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                    {item.lokasi}
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">{item.nama}</h3>
                  <p className="text-base text-slate-600 leading-relaxed mb-8">
                    {item.deskripsi}
                  </p>

                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div>
                      <p className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-3">Tipe Unit</p>
                      <div className="flex flex-wrap gap-2">
                        {item.tipe.map((t) => (
                          <span key={t} className="px-3 py-1.5 text-xs font-semibold bg-white text-slate-700 rounded-lg border border-slate-200 shadow-sm">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-3">Fasilitas Utama</p>
                      <div className="flex flex-col gap-2">
                        {item.fasilitas.slice(0, 3).map((f) => (
                          <span key={f} className="flex items-center gap-2 text-sm text-slate-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-patra-green-500" />
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-end pt-6 border-t border-slate-200">
                    <button className="px-6 py-3 bg-patra-blue-400 hover:bg-patra-green-600 text-white text-sm font-bold rounded-xl transition-colors duration-300 shadow-lg hover:shadow-patra-green-500/25">
                      Lihat Detail
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Properti Sewa ── */}
      <section className="w-full bg-white py-24 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -z-10 rounded-l-[100px]" />

        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="mb-16 md:mb-24 flex flex-col items-center text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
              Properti <span className="text-patra-blue-400">Sewa</span>
            </h2>
            <div className="w-20 h-1 bg-patra-blue-300 rounded-full mb-6" />
            <p className="text-base text-slate-600 max-w-2xl leading-relaxed">
              Menjawab kebutuhan urban untuk investasi mobilitas serta fleksibilitas ruang bisnis. Solusi andal untuk produktivitas Anda.
            </p>
          </motion.div>

          <div className="space-y-24 md:space-y-32">
            {propertiSewa.map((item, i) => (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                key={item.id}
                className={`flex flex-col ${i % 2 !== 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 lg:gap-20 items-center group`}
              >
                {/* Image */}
                <motion.div variants={fadeUp} className="w-full lg:w-1/2 flex-shrink-0 relative">
                  <div className="absolute inset-0 bg-patra-blue-400/10 rounded-2xl transform translate-x-4 translate-y-4 -z-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500" />
                  <div className="overflow-hidden rounded-2xl shadow-xl bg-gradient-to-br from-patra-blue-700 to-patra-slate-900">
                    <div className="relative h-[300px] md:h-[450px] flex items-center justify-center p-8">
                      <div className="text-white text-center">
                        <p className="text-sm uppercase tracking-[0.3em] text-white/80 mb-4">Sewa</p>
                        <h3 className="text-3xl md:text-4xl font-extrabold">{item.nama}</h3>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Text */}
                <motion.div variants={fadeRight} className="w-full lg:w-1/2 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-patra-blue-50 text-patra-blue-600 text-xs font-bold uppercase tracking-wider mb-4 border border-patra-blue-200">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                    {item.lokasi}
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">{item.nama}</h3>
                  <p className="text-base text-slate-600 leading-relaxed mb-8">
                    {item.deskripsi}
                  </p>

                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div>
                      <p className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-3">Ruang / Kapasitas</p>
                      <div className="flex flex-wrap gap-2">
                        {item.luas.map((l) => (
                          <span key={l} className="px-3 py-1.5 text-xs font-semibold bg-slate-50 text-slate-700 rounded-lg border border-slate-200 shadow-sm">
                            {l}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-3">Fasilitas</p>
                      <div className="flex flex-col gap-2">
                        {item.fasilitas.slice(0, 3).map((f) => (
                          <span key={f} className="flex items-center gap-2 text-sm text-slate-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-patra-blue-300" />
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-end pt-6 border-t border-slate-200">
                    <button className="px-6 py-3 bg-patra-blue-400 hover:bg-patra-blue-300 text-white text-sm font-bold rounded-xl transition-colors duration-300 shadow-lg hover:shadow-patra-blue-300/25">
                      Lihat Detail
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Proyek Mendatang ── */}
      <section className="w-full bg-patra-blue-50 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(0,114,198,0.1),_transparent_40%),radial-gradient(circle_at_bottom_left,_rgba(172,196,42,0.1),_transparent_40%)]" />

        <div className="max-w-[1440px] mx-auto px-6 lg:px-10 relative z-10">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="mb-16 md:mb-20 flex flex-col items-center text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
              Proyek Mendatang
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-patra-green-500 to-patra-blue-300 rounded-full mb-6" />
            <p className="text-base text-slate-600 max-w-2xl leading-relaxed">
              Membangun masa depan melalui pengembangan inovatif yang menjanjikan nilai investasi dan standar hidup kelas dunia.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {proyekMendatang.map((item, i) => (
              <motion.div
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                key={item.id}
                className={`relative rounded-3xl overflow-hidden group shadow-2xl ${item.highlight ? 'lg:col-span-2 h-[500px]' : 'h-[400px]'}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.accent}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/70 to-transparent" />

                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-xs font-bold bg-white/20 backdrop-blur-md text-white px-3 py-1.5 rounded-full uppercase tracking-wider border border-white/20">
                      Target: {item.statusTarget}
                    </span>
                    <span className="text-xs font-bold bg-patra-green-500 text-white px-3 py-1.5 rounded-full uppercase tracking-wider">
                      Segera Hadir
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-2">{item.nama}</h3>
                  <p className="text-patra-green-300 font-semibold mb-4 flex items-center gap-2 text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                    {item.lokasi}
                  </p>

                  <p className={`text-slate-200 font-light leading-relaxed mb-6 ${item.highlight ? 'max-w-3xl text-lg' : 'line-clamp-3 text-sm'}`}>
                    {item.deskripsi}
                  </p>

                  <div className="flex items-center text-slate-300 italic text-sm mb-6">
                    "{item.konsep}"
                  </div>

                  <div>
                    <button className="px-6 py-3 bg-white hover:bg-slate-200 text-slate-900 text-sm font-bold rounded-xl transition-colors duration-300 inline-flex items-center gap-2">
                      Dapatkan Info Terbaru
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}