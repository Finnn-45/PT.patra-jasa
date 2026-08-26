"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, Menu, X, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { useI18n } from "@/components/i18n/LanguageProvider";

const navLinks = [
  { key: "nav.tentang", href: "/tentang-kami" },
  {
    key: "nav.bisnis",
    href: "#",
    children: [
      { key: "nav.property", href: "/products/property-1" },
      { key: "nav.hotels", href: "/products/hotels-resorts" },
      { key: "nav.services", href: "/products/services" },
    ],
  },
  {
    key: "nav.berita",
    href: "#",
    children: [
      { key: "nav.media", href: "/berita/media-informasi" },
      { key: "nav.tjsl", href: "/berita/tjsl" },
    ],
  },
  { key: "nav.karir", href: "/karir" },
  { key: "nav.pengadaan", href: "/pengadaan" },
  { key: "nav.kontak", href: "/kontak-kami" },
  { key: "nav.danantara", href: "https://www.danantaraindonesia.co.id/", external: true },
];

export default function SiteNav({ className }: { className?: string }) {
  const { t, lang, setLang } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const getY = () => window.scrollY ?? document.documentElement?.scrollTop ?? 0;
    const onScroll = () => setScrolled(getY() > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setOpen(false); setSearchOpen(false); }
    };
    document.body.style.overflow = open ? "hidden" : "";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    if (searchOpen) searchRef.current?.focus();
  }, [searchOpen]);

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setActiveDropdown(label);
  };
  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => setActiveDropdown(null), 180);
  };

  return (
    <>
      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 flex flex-col bg-ink px-6 pb-10 pt-24 md:hidden overflow-y-auto"
          >
            <nav className="flex flex-col">
              {navLinks.map((l, i) => (
                <motion.div
                  key={l.key}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.06 * i + 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="border-b border-paper/10"
                >
                  {l.children ? (
                    <div>
                      <button
                        onClick={() => setMobileExpanded(mobileExpanded === l.key ? null : l.key)}
                        className="flex w-full items-center justify-between py-4 text-xl font-bold uppercase tracking-tight text-paper"
                      >
                        {t(l.key)}
                        <ChevronDown className={cn("h-5 w-5 text-ash transition-transform", mobileExpanded === l.key && "rotate-180")} />
                      </button>
                      <AnimatePresence>
                        {mobileExpanded === l.key && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden pb-3"
                          >
                            {l.children.map((c) => (
                              <Link key={c.key} href={c.href} onClick={() => setOpen(false)}
                                className="block py-2.5 pl-4 text-base text-ash hover:text-patragreen-300 transition-colors">
                                {t(c.key)}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link href={l.href} onClick={() => setOpen(false)}
                      {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="flex items-center justify-between py-4 text-xl font-bold uppercase tracking-tight text-paper hover:text-patragreen-300 transition-colors"
                    >
                      {t(l.key)}
                    </Link>
                  )}
                </motion.div>
              ))}
            </nav>

            {/* Language switcher (mobile) */}
            <div className="mt-8 flex items-center gap-3">
              <button
                onClick={() => setLang("id")}
                className={cn(
                  "t-caption rounded-full border px-4 py-1.5 transition-colors",
                  lang === "id" ? "border-patragreen-500 text-patragreen-300" : "border-ash/30 text-ash"
                )}
              >
                ID — Indonesia
              </button>
              <button
                onClick={() => setLang("en")}
                className={cn(
                  "t-caption rounded-full border px-4 py-1.5 transition-colors",
                  lang === "en" ? "border-patragreen-500 text-patragreen-300" : "border-ash/30 text-ash"
                )}
              >
                EN — English
              </button>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="t-caption mt-6 text-ash"
            >
              {t("nav.mobileHighlights")}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      <header className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        "bg-white",
        scrolled ? "shadow-md shadow-black/[0.08]" : "border-b border-black/5",
        className
      )}>
        {/* Brand accent strip */}
        <div
          aria-hidden
          className="h-[3px] w-full bg-gradient-to-r from-patragreen-500 via-patra-blue-500 to-patra-blue-700"
        />
        <div className="container-site flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" onClick={() => setOpen(false)} className="shrink-0 flex items-center gap-2.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://www.patra-jasa.com/wp-content/themes/patra-jasa/images/logo.svg"
              alt="Patra Jasa"
              width={160}
              height={18}
              className="h-7 w-auto"
            />
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-0.5 md:flex" role="navigation" aria-label="Menu utama">
            {navLinks.map((l) =>
              l.children ? (
                <div key={l.key} className="relative"
                  onMouseEnter={() => handleMouseEnter(l.key)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="interactive-line flex items-center gap-1 px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-paper/80 hover:text-paper transition-colors">
                    {t(l.key)}
                    <ChevronDown className={cn("h-3 w-3 transition-transform duration-200", activeDropdown === l.key && "rotate-180")} />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === l.key && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 4, scale: 0.97 }}
                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute left-0 top-full mt-2 min-w-[210px] rounded-xl border border-black/5 bg-coal shadow-xl shadow-black/10 py-2"
                        onMouseEnter={() => handleMouseEnter(l.key)}
                        onMouseLeave={handleMouseLeave}
                      >
                        {l.children.map((c) => (
                          <Link key={c.key} href={c.href}
                            className="block px-4 py-2.5 text-[0.72rem] font-semibold tracking-wide text-ash hover:text-patragreen-700 hover:bg-patragreen-50 transition-colors"
                          >
                            {t(c.key)}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link key={l.key} href={l.href}
                  {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={cn(
                    "interactive-line px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-paper/80 hover:text-paper transition-colors",
                    l.key === "nav.danantara" && "text-patragreen-300 hover:text-patragreen-200"
                  )}
                >
                  {t(l.key)}
                </Link>
              )
            )}
          </nav>

          {/* Right side: search + language + mobile toggle */}
          <div className="flex items-center gap-3">
            {/* Search */}
            <div className="relative hidden md:flex items-center">
              <AnimatePresence>
                {searchOpen && (
                  <motion.input
                    ref={searchRef}
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 180, opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    type="search"
                    placeholder={t("nav.cari")}
                    className="bg-white/8 border border-ash/20 rounded-full px-4 py-1.5 text-xs text-paper placeholder:text-ash/60 outline-none focus:border-patragreen-400 transition-colors mr-2"
                  />
                )}
              </AnimatePresence>
              <button
                onClick={() => setSearchOpen((s) => !s)}
                className="grid h-8 w-8 place-items-center rounded-full border border-ash/20 text-ash hover:text-paper hover:border-ash/40 transition-colors"
                aria-label={t("nav.cari")}
              >
                <Search className="h-3.5 w-3.5" />
              </button>
            </div>

            {/* Language switcher */}
            <div className="hidden md:flex items-center gap-0 rounded-full border border-ash/20 overflow-hidden text-[0.6rem] font-bold tracking-widest">
              <button
                onClick={() => setLang("id")}
                className={cn(
                  "px-2.5 py-1 transition-colors cursor-pointer",
                  lang === "id" ? "bg-patragreen-600 text-white" : "text-ash hover:text-paper hover:bg-white/10"
                )}
              >
                ID
              </button>
              <button
                onClick={() => setLang("en")}
                
                className={cn(
                  "px-2.5 py-1 transition-colors cursor-pointer",
                  lang === "en" ? "bg-patragreen-600 text-white" : "text-ash hover:text-paper hover:bg-white/10"
                )}
              >
                EN
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              aria-label={open ? t("nav.tutupMenu") : t("nav.bukaMenu")}
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
              className="grid h-9 w-9 place-items-center rounded-full border border-paper/20 text-paper md:hidden"
            >
              <AnimatePresence mode="wait">
                {open
                  ? <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}><X className="h-4.5 w-4.5" /></motion.span>
                  : <motion.span key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}><Menu className="h-4.5 w-4.5" /></motion.span>
                }
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
