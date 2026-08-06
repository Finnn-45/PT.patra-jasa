import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: { slug: string };
}

const posts = [
  {
    slug: "patra-jasa-tanam-1-000-bibit-mangrove-perkuat-ketahanan-pesisir",
    title: "Patra Jasa Tanam 1.000 Bibit Mangrove, Perkuat Ketahanan Pesisir",
    date: "7 Juli 2026",
    content: "Patra Jasa memperkuat komitmen lingkungan melalui penanaman mangrove untuk menjaga ekosistem pesisir dan mendukung ketahanan wilayah.",
  },
  {
    slug: "patra-jasa-raih-dua-penghargaan-apq-awards-2026",
    title: "Patra Jasa Raih Dua Penghargaan pada APQ Awards 2026",
    date: "15 Juni 2026",
    content: "Penghargaan ini mengakui kinerja operasional dan inovasi layanan Patra Jasa dalam sektor property dan hospitality.",
  },
];

export default function ArticlePage({ params }: PageProps) {
  const post = posts.find((item) => item.slug === params.slug);
  if (!post) return notFound();

  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <section data-nav-theme="dark" className="relative overflow-hidden bg-patra-blue-500 py-28 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.18),_transparent_40%)]" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10">
          <p className="text-sm uppercase tracking-[0.45em] text-patra-blue-100/80 mb-4">Berita</p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">{post.title}</h1>
          <p className="mt-6 text-lg text-white/90 leading-relaxed">{post.date}</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 lg:px-10 py-20">
        <div className="rounded-3xl bg-white p-10 shadow-lg border border-slate-100 space-y-8">
          <p className="text-slate-600 leading-relaxed">{post.content}</p>
          <div>
            <Link href="/berita/media-informasi" className="text-patra-blue-500 font-semibold hover:underline">Kembali ke Media & Informasi</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
