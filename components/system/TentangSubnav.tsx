"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useI18n } from "@/components/i18n/LanguageProvider";

const items = [
  { key: "tentang.nav0", href: "/tentang-kami" },
  { key: "tentang.nav1", href: "/tentang-kami/visi-misi-tata-nilai" },
  { key: "tentang.nav2", href: "/tentang-kami/manajemen" },
  { key: "tentang.nav3", href: "/tentang-kami/tata-kelola-perusahaan" },
  { key: "tentang.nav4", href: "/tentang-kami/laporan-tahunan" },
  { key: "tentang.nav5", href: "/tentang-kami/penghargaan" },
  { key: "tentang.nav6", href: "/tentang-kami/anak-perusahaan" },
];

/**
 * Sticky sub-navigation for the "Tentang Kami" section.
 * Rendered on the overview page and every sub-page, with the
 * active tab highlighted based on the current route.
 */
export default function TentangSubnav() {
  const { t } = useI18n();
  const pathname = usePathname();

  return (
    <nav
      className="sticky top-16 z-40 border-b border-ash/15 bg-white shadow-sm"
      aria-label="Sub navigasi Tentang Kami"
    >
      <div className="container-site overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex gap-0 whitespace-nowrap">
          {items.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.key}
                href={l.href}
                className={`border-b-2 px-4 py-4 text-xs font-bold uppercase tracking-wider transition-all ${
                  active
                    ? "border-patragreen-600 text-patragreen-700 bg-patragreen-50/50"
                    : "border-transparent text-ash hover:border-patragreen-500 hover:text-paper"
                }`}
              >
                {t(l.key)}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
