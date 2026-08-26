"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { MapPin, Phone, Mail } from "lucide-react";
import { useI18n } from "@/components/i18n/LanguageProvider";
import { cn } from "@/lib/utils";

const footerGroups = [
  {
    key: "footer.about",
    links: [
      { key: "footer.l.tentang0", href: "/tentang-kami" },
      { key: "footer.l.tentang1", href: "/tentang-kami/visi-misi-tata-nilai" },
      { key: "footer.l.tentang2", href: "/tentang-kami/manajemen" },
      { key: "footer.l.tentang3", href: "/tentang-kami/tata-kelola-perusahaan" },
      { key: "footer.l.tentang4", href: "/tentang-kami/anak-perusahaan" },
      { key: "footer.l.tentang5", href: "/tentang-kami/penghargaan" },
    ],
  },
  {
    key: "footer.bisnis",
    links: [
      { key: "nav.property", href: "/products/property-1" },
      { key: "nav.hotels", href: "/products/hotels-resorts" },
      { key: "nav.services", href: "/products/services" },
    ],
  },
  {
    key: "footer.berita",
    links: [
      { key: "nav.media", href: "/berita/media-informasi" },
      { key: "nav.tjsl", href: "/berita/tjsl" },
    ],
  },
  {
    key: "footer.lainnya",
    links: [
      { key: "nav.karir", href: "/karir" },
      { key: "nav.pengadaan", href: "/pengadaan" },
      { key: "nav.kontak", href: "/kontak-kami" },
      { key: "footer.l.lainnya3", href: "/kebijakan-privasi" },
      { key: "footer.l.lainnya4", href: "https://www.danantaraindonesia.co.id/", external: true },
    ],
  },
];

type IconProps = { className?: string };

function InstagramIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2.6" y="2.6" width="18.8" height="18.8" rx="5.2" />
      <circle cx="16.3" cy="6.9" r="1.05" />
      <circle cx="12" cy="12" r="3.9" />
    </svg>
  );
}

function YouTubeIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="2.2" width="20" height="13.6" rx="3.8" />
      <path d="M8.6 9.4L12.6 12.4L8.6 15.4Z" fill="currentColor" />
    </svg>
  );
}

function LinkedInIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" aria-hidden>
      <rect x="2.5" y="2.5" width="19" height="19" rx="4.2" />
      <text x="12" y="15.6" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="currentColor">in</text>
    </svg>
  );
}

function FacebookIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="9.5" />
      <text x="12" y="15.2" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="currentColor">f</text>
    </svg>
  );
}

const socials = [
  { icon: InstagramIcon, href: "https://www.instagram.com/patrajasa/", label: "Instagram" },
  { icon: YouTubeIcon, href: "https://www.youtube.com/@patrajasa", label: "YouTube" },
  { icon: LinkedInIcon, href: "https://www.linkedin.com/company/pt-patra-jasa/", label: "LinkedIn" },
  { icon: FacebookIcon, href: "https://www.facebook.com/PatraJasaOfficial/", label: "Facebook" },
];

export default function Footer() {
  const { t, lang, setLang } = useI18n();
  return (
    <footer className="relative bg-[#0e2239] text-white" role="contentinfo">
      <div className="h-[3px] w-full bg-gradient-to-r from-patragreen-500 via-patra-blue-500 to-patra-blue-700" aria-hidden />

      <div className="container-site py-16">
        <div className="grid gap-12 lg:grid-cols-[1.8fr_1fr_1fr_1fr_1fr]">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://www.patra-jasa.com/wp-content/themes/patra-jasa/images/logo.svg"
              alt="PT Patra Jasa"
              width={180}
              height={22}
              className="mb-6 h-8 w-auto brightness-0 invert"
            />
            <p className="max-w-xs text-sm leading-relaxed text-[#9db1c3]">
              {t("footer.desc")}
            </p>

            <div className="mt-8 space-y-3">
              <div className="flex items-start gap-3 text-xs text-[#c3cfd9]">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-patragreen-400" /> {t("home.contact.address")}
              </div>
              <div className="flex items-center gap-3 text-xs text-[#c3cfd9]">
                <Phone className="h-3.5 w-3.5 shrink-0 text-patragreen-400" /> {t("home.contact.phone")}
              </div>
              <div className="flex items-center gap-3 text-xs text-[#c3cfd9]">
                <Mail className="h-3.5 w-3.5 shrink-0 text-patragreen-400" /> {t("home.contact.mail")}
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2.5">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ scale: 1.12, y: -2 }}
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-[#c3cfd9] hover:border-patragreen-500 hover:text-patragreen-300 transition-colors"
                >
                  <s.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </div>{footerGroups.map((col) => (
            <div key={col.key}>
              <p className="mb-5 text-[0.65rem] font-bold uppercase tracking-[0.24em] text-patragreen-300">
                {t(col.key)}
              </p>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.key}>
                    <Link
                      href={l.href}
                      {...("external" in l && l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="interactive-line text-sm text-[#cfd8e2] hover:text-white transition-colors"
                    >
                      {t(l.key)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-[#7f8ba0]">{t("footer.copyright", { year: new Date().getFullYear() })}</p>
          <div className="flex flex-wrap items-center justify-end gap-6">
            <span className="text-xs text-[#7f8ba0]">{t("footer.subsidiary")}</span>
            <div className="flex gap-2 text-[0.6rem] font-bold uppercase tracking-widest">
              <button
                onClick={() => setLang("id")}
                className={cn(
                  "rounded px-2 py-1 transition-colors cursor-pointer",
                  lang === "id" ? "bg-patragreen-700/40 text-patragreen-300" : "text-[#7f8ba0] hover:text-white"
                )}
              >
                ID
              </button>
              <button
                onClick={() => setLang("en")}
                className={cn(
                  "rounded px-2 py-1 transition-colors cursor-pointer",
                  lang === "en" ? "bg-patragreen-700/40 text-patragreen-300" : "text-[#7f8ba0] hover:text-white"
                )}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}