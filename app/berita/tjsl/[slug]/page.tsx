import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: { slug: string };
}

const stories = [
  {
    slug: "patra-jasa-dukung-inovasi-kapal-trash-skimmer-untuk-jaga-kebersihan-pesisir-bali",
    title: "Patra Jasa Dukung Inovasi Kapal Trash Skimmer untuk Jaga Kebersihan Pesisir Bali",
    date: "18 April 2026",
    content: "Program TJSL Patra Jasa mendukung kebersihan pesisir Bali melalui teknologi trash skimmer dan edukasi masyarakat pada pelestarian laut.",
  },
  {
    slug: "patra-jasa-berkontribusi-pada-pemulihan-ekonomi-lokal-melalui-pelatihan-kerja",
    title: "Patra Jasa Berkontribusi Pada Pemulihan Ekonomi Lokal Melalui Pelatihan Kerja",
    date: "2 April 2026",
    content: "Inisiatif TJSL yang memberdayakan masyarakat lokal melalui program pelatihan keterampilan, mendukung ketahanan ekonomi masyarakat.",
  },
];

export default function StoryPage({ params }: PageProps) {
  const story = stories.find((item) => item.slug === params.slug);
  if (!story) return notFound();

  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <section data-nav-theme="dark" className="relative overflow-hidden bg-patra-green-600 py-28 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.18),_transparent_40%)]" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10">
          <p className="text-sm uppercase tracking-[0.45em] text-patra-green-100/80 mb-4">TJSL</p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">{story.title}</h1>
          <p className="mt-6 text-lg text-white/90 leading-relaxed">{story.date}</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 lg:px-10 py-20">
        <div className="rounded-3xl bg-white p-10 shadow-lg border border-slate-100 space-y-8">
          <p className="text-slate-600 leading-relaxed">{story.content}</p>
          <div>
            <Link href="/berita/tjsl" className="text-patra-green-500 font-semibold hover:underline">Kembali ke TJSL</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
