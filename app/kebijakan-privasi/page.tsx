export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <section data-nav-theme="dark" className="relative overflow-hidden bg-patra-blue-500 py-28 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.16),_transparent_40%)]" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10">
          <p className="text-sm uppercase tracking-[0.45em] text-patra-blue-100/80 mb-4">Kebijakan Privasi</p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">Perlindungan Data dan Privasi Pengunjung.</h1>
          <p className="mt-6 max-w-3xl text-lg text-white/90 leading-relaxed">Kami berkomitmen melindungi informasi pribadi pengunjung dan mematuhi kebijakan privasi yang transparan.</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 lg:px-10 py-20">
        <div className="rounded-3xl bg-white p-10 shadow-lg border border-slate-100">
          <p className="text-slate-600 leading-relaxed">Informasi yang kami kumpulkan digunakan untuk meningkatkan pengalaman pengguna dan memberikan layanan terbaik. Kami tidak membagikan data pribadi kepada pihak ketiga tanpa izin Anda.</p>
        </div>
      </section>
    </main>
  );
}
