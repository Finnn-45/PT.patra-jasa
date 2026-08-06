import Link from "next/link";

const tjslStories = [
  {
    slug: "patra-jasa-dukung-inovasi-kapal-trash-skimmer-untuk-jaga-kebersihan-pesisir-bali",
    title: "Patra Jasa Dukung Inovasi Kapal Trash Skimmer untuk Jaga Kebersihan Pesisir Bali",
    summary: "Program lingkungan yang menggabungkan teknologi dan wadah kemitraan strategis untuk menjaga ekosistem pesisir Bali.",
    date: "18 April 2026",
  },
  {
    slug: "patra-jasa-berkontribusi-pada-pemulihan-ekonomi-lokal-melalui-pelatihan-kerja",
    title: "Patra Jasa Berkontribusi Pada Pemulihan Ekonomi Lokal Melalui Pelatihan Kerja",
    summary: "Inisiatif TJSL Patra Jasa mendukung pemberdayaan komunitas setempat melalui pelatihan keterampilan.",
    date: "2 April 2026",
  },
];

export default function TJSLPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <section data-nav-theme="dark" className="relative overflow-hidden bg-patra-green-600 py-28 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.16),_transparent_40%)]" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10">
          <p className="text-sm uppercase tracking-[0.45em] text-patra-green-100/80 mb-4">TJSL</p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">Inisiatif sosial dan lingkungan untuk masyarakat yang berkelanjutan.</h1>
          <p className="mt-6 max-w-3xl text-lg text-white/90 leading-relaxed">Pelajari program TJSL Patra Jasa yang mendukung pembangunan, pelestarian lingkungan, dan kesejahteraan masyarakat lokal.</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 lg:px-10 py-20 grid gap-8">
        {tjslStories.map((story) => (
          <article key={story.title} className="rounded-3xl bg-white p-10 shadow-lg border border-slate-100">
            <p className="text-xs uppercase tracking-[0.32em] text-patra-green-500 mb-4">{story.date}</p>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">{story.title}</h2>
            <p className="text-slate-600 leading-relaxed">{story.summary}</p>
            <Link href={`/berita/tjsl/${story.slug}`} className="mt-8 inline-flex text-patra-green-500 font-semibold hover:underline">Baca selengkapnya</Link>
          </article>
        ))}
      </section>
    </main>
  );
}
