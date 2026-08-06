import Link from "next/link";

const articles = [
  {
    slug: "patra-jasa-tanam-1-000-bibit-mangrove-perkuat-ketahanan-pesisir",
    title: "Patra Jasa Tanam 1.000 Bibit Mangrove, Perkuat Ketahanan Pesisir",
    summary: "Inisiatif restorasi pesisir sebagai bagian dari komitmen kami terhadap pelestarian lingkungan dan ketahanan wilayah.",
    date: "7 Juli 2026",
  },
  {
    slug: "patra-jasa-raih-dua-penghargaan-apq-awards-2026",
    title: "Patra Jasa Raih Dua Penghargaan pada APQ Awards 2026",
    summary: "Pengakuan untuk inovasi layanan dan kinerja operasional yang unggul.",
    date: "15 Juni 2026",
  },
  {
    slug: "patra-jasa-giz-percepat-transisi-energi",
    title: "Patra Jasa – GIZ Percepat Transisi Energi",
    summary: "Sinergi bersama GIZ untuk memperkuat pengembangan green building dan ekonomi rendah karbon.",
    date: "7 Mei 2026",
  },
];

export default function MediaInformasiPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <section data-nav-theme="dark" className="relative overflow-hidden bg-patra-blue-500 py-28 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.16),_transparent_40%)]" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10">
          <p className="text-sm uppercase tracking-[0.45em] text-patra-blue-100/80 mb-4">Media & Informasi</p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">Berita terbaru dan insight resmi Patra Jasa.</h1>
          <p className="mt-6 max-w-3xl text-lg text-white/90 leading-relaxed">Ikuti berita terbaru seputar kegiatan bisnis, kemitraan, dan inovasi perusahaan.</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid gap-8">
          {articles.map((item) => (
            <article key={item.title} className="rounded-3xl bg-white p-10 shadow-lg border border-slate-100">
              <p className="text-xs uppercase tracking-[0.32em] text-patra-blue-400 mb-4">{item.date}</p>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h2>
              <p className="text-slate-600 leading-relaxed">{item.summary}</p>
              <Link href={`/berita/media-informasi/${item.slug}`} className="mt-8 inline-flex text-patra-blue-500 font-semibold hover:underline">Baca selengkapnya</Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
