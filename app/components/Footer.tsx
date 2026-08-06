import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-patra-blue-50 pt-16 pb-8 border-t border-patra-blue-200">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
        <div className="lg:col-span-2">
          <img src="/logo.svg" alt="Patra Jasa" className="h-10 mb-6" />
          <p className="text-slate-600 text-sm leading-relaxed mb-6 max-w-sm">
            PT Patra Jasa merupakan anak perusahaan PT Pertamina (Persero) yang bergerak melalui 3 pilar bisnis: Property, Hotels & Resorts, dan Services.
          </p>
          <div className="flex gap-3">
            {[
              { label: 'LinkedIn', href: 'https://www.linkedin.com/company/pt-patra-jasa/' },
              { label: 'Instagram', href: 'https://instagram.com/patrajasaofficial' },
              { label: 'YouTube', href: 'https://www.youtube.com/channel/UCtQW2zM43-z7s0zSQkUn4EA' },
              { label: 'Facebook', href: 'https://www.facebook.com/pajas.pt/' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white border border-patra-blue-200 hover:bg-patra-blue-400 hover:text-white hover:border-patra-blue-400 flex items-center justify-center text-slate-600 transition-all shadow-sm"
              >
                <span className="text-xs font-bold">{item.label[0]}</span>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 mb-6 text-sm uppercase tracking-wider">Bisnis</h4>
          <ul className="space-y-4 text-sm text-slate-600">
            <li><Link href="/bisnis/property" className="hover:text-patra-blue-400 transition">Property</Link></li>
            <li><Link href="/bisnis/hotels" className="hover:text-patra-blue-400 transition">Hotels & Resorts</Link></li>
            <li><Link href="/bisnis/services" className="hover:text-patra-blue-400 transition">Services</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 mb-6 text-sm uppercase tracking-wider">Tentang</h4>
          <ul className="space-y-4 text-sm text-slate-600">
            <li><Link href="/tentang-kami" className="hover:text-patra-blue-400 transition">Profil Perusahaan</Link></li>
            <li><Link href="/tentang-kami/visi-misi-tata-nilai" className="hover:text-patra-blue-400 transition">Visi Misi Tata Nilai</Link></li>
            <li><Link href="/tentang-kami/laporan-tahunan" className="hover:text-patra-blue-400 transition">Laporan Tahunan</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 mb-6 text-sm uppercase tracking-wider">Kontak</h4>
          <div className="space-y-4 text-sm text-slate-600">
            <p className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-patra-blue-300/20 text-patra-blue-400 flex items-center justify-center flex-shrink-0 border border-patra-blue-300/30">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </span>
              customercare@patra-jasa.com
            </p>
            <p className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-patra-blue-300/20 text-patra-blue-400 flex items-center justify-center flex-shrink-0 border border-patra-blue-300/30">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              </span>
              021 5270 282
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto mt-16 pt-8 border-t border-patra-blue-200 px-6 lg:px-10 flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-slate-600">
        <p>Copyright © 2024 Patra Jasa. All Rights Reserved</p>
        <Link href="/kebijakan-privasi" className="hover:text-patra-blue-400 transition">Privacy Policy</Link>
      </div>
    </footer>
  );
}
