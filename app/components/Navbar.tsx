"use client";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import {
  Navbar as AceternityNavbar,
  NavBody,
  MobileNav,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
  useNavbarContext,
} from "@/components/ui/resizable-navbar";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

const bisnisItems = [
  { label: "Property", link: "/bisnis/property" },
  { label: "Hotels & Resorts", link: "/bisnis/hotels" },
  { label: "Services", link: "/bisnis/services" },
];

const beritaItems = [
  { label: "Media & Informasi", link: "/berita/media-informasi" },
  { label: "TJSL", link: "/berita/tjsl" },
];

const navItems = [
  { name: "Tentang Kami", link: "/tentang-kami" },
  { name: "Bisnis", link: "/products", hasDropdown: true, dropdownItems: bisnisItems },
  { name: "Berita", link: "/berita", hasDropdown: true, dropdownItems: beritaItems },
  { name: "Karir", link: "/karir" },
  { name: "Pengadaan", link: "/pengadaan" },
  { name: "Kontak Kami", link: "/kontak-kami" },
  { name: "Danantara Indonesia", link: "https://danantara.id" },
];

// Custom Animated NavItems that supports dropdowns
const CustomNavItems = ({ items }: { items: typeof navItems }) => {
  const { visible, isDark } = useNavbarContext();
  const useLightText = !visible && isDark;
  const [hovered, setHovered] = useState<number | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);

  return (
    <motion.div
      onMouseLeave={() => {
        setHovered(null);
        setDropdownOpen(null);
      }}
      className={cn(
        "absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-[13.5px] font-medium transition duration-200 lg:flex",
        useLightText ? "text-white/90 hover:text-white" : "text-zinc-600 hover:text-zinc-800"
      )}
    >
      {items.map((item, idx) => (
        <div
          key={`link-${idx}`}
          className="relative px-3 py-2 cursor-pointer"
          onMouseEnter={() => {
            setHovered(idx);
            if (item.hasDropdown) setDropdownOpen(idx);
            else setDropdownOpen(null);
          }}
        >
          {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className={cn(
                "absolute inset-0 h-full w-full rounded-full",
                useLightText ? "bg-white/10" : "bg-slate-100"
              )}
            />
          )}
          
          <Link href={item.link} className={cn(
            "relative z-20 flex items-center gap-1 transition",
            useLightText ? "text-white/90 hover:text-white" : "text-slate-700 hover:text-patra-blue-400"
          )}>
            {item.name}
            {item.hasDropdown && <ChevronDown className="w-3.5 h-3.5 opacity-70" />}
          </Link>

          {/* Dropdown Menu */}
          <AnimatePresence>
            {item.hasDropdown && dropdownOpen === idx && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute top-[120%] left-1/2 -translate-x-1/2 w-48 bg-white border border-slate-200 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] overflow-hidden z-50 p-2"
              >
                <div className="flex flex-col">
                  {item.dropdownItems?.map((subItem) => (
                    <Link
                      key={subItem.label}
                      href={subItem.link}
                      className="px-4 py-2.5 text-[13px] text-slate-700 hover:bg-slate-50 hover:text-patra-blue-400 rounded-lg transition-colors"
                      onClick={() => setDropdownOpen(null)}
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </motion.div>
  );
};

export default function Navbar() {
  const { visible, isDark } = useNavbarContext();
  const useLightText = !visible && isDark;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [language, setLanguage] = useState<"EN" | "ID">("ID");

  return (
    <div className="relative w-full">
      <AceternityNavbar className="pt-2 md:pt-4">
        {/* Desktop Navigation */}
        <NavBody className="rounded-full !min-w-[90%] max-w-[1440px] px-6">
          <Link href="/" className="z-20 relative mr-4 flex items-center px-2 py-1">
            <img 
              src="/logo.svg" 
              alt="Patra Jasa" 
              className="h-4 lg:h-6 w-auto object-contain"
            />
          </Link>
          
          <CustomNavItems items={navItems} />
          
          <div className="relative z-20 flex items-center gap-2">
            {/* Search */}
            <div className="flex items-center">
              {searchOpen ? (
                <div className="flex items-center border border-slate-300 rounded-full overflow-hidden bg-white pl-3 shadow-inner">
                  <input
                    type="text"
                    autoFocus
                    placeholder="Pencarian..."
                    className="py-1.5 text-sm outline-none w-[140px] bg-transparent"
                  />
                  <button
                    className="p-2 bg-patra-blue-400 text-white rounded-r-full hover:bg-patra-blue-400 transition"
                    onClick={() => setSearchOpen(false)}
                  >
                    <Search className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setSearchOpen(true)}
                  className={cn(
                    "flex items-center justify-center p-2 rounded-full transition",
                    useLightText
                      ? "text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm"
                      : "text-patra-blue-400 hover:text-patra-blue-500"
                  )}
                  aria-label="Pencarian"
                >
                  <Search className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Language Buttons */}
            <div className={cn(
              "flex items-center rounded-full p-1 border transition",
              useLightText
                ? "bg-white/10 border-white/20 backdrop-blur-sm"
                : "border-slate-200 bg-white/90"
            )}>
              <button
                onClick={() => setLanguage("EN")}
                className={cn(
                  "px-2.5 py-1 text-xs font-semibold rounded-full transition",
                  language === "EN"
                    ? "bg-patra-blue-500 text-white shadow-sm"
                    : useLightText
                    ? "text-white/80 hover:bg-white/10 hover:text-white"
                    : "text-slate-600 hover:text-patra-blue-500"
                )}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("ID")}
                className={cn(
                  "px-2.5 py-1 text-xs font-semibold rounded-full transition",
                  language === "ID"
                    ? "bg-patra-blue-500 text-white shadow-sm"
                    : useLightText
                    ? "text-white/80 hover:bg-white/10 hover:text-white"
                    : "text-slate-600 hover:text-patra-blue-500"
                )}
              >
                ID
              </button>
            </div>

          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav className="pt-0">
          <MobileNavHeader className="rounded-full px-4 py-2 mt-2">
            <Link href="/" className="relative z-20 flex items-center">
              <img 

                src="/logo.svg" 
                alt="Patra Jasa" 
                className="h-5 w-auto object-contain"
              />
            </Link>
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
            className="rounded-3xl border border-slate-100 shadow-xl overflow-hidden mt-4 pb-6"
          >
            <div className="w-full flex flex-col space-y-1">
              {navItems.map((item, idx) => (
                <div key={`mobile-link-${idx}`} className="w-full">
                  <Link
                    href={item.link}
                    onClick={() => !item.hasDropdown && setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between py-3 px-2 text-slate-700 font-medium border-b border-slate-50"
                  >
                    <span>{item.name}</span>
                    {item.hasDropdown && <ChevronDown className="w-4 h-4 opacity-50" />}
                  </Link>
                  {item.hasDropdown && (
                    <div className="flex flex-col ml-4 border-l-2 border-slate-100 pl-3 mt-1 space-y-2 py-2">
                      {item.dropdownItems?.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.link}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="text-sm text-slate-600 py-1"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="flex w-full flex-col gap-3 mt-6 pt-4 border-t border-slate-100">
              <div className="flex items-center border border-slate-300 rounded-full overflow-hidden bg-slate-50 p-1">
                <input
                  type="text"
                  placeholder="Pencarian..."
                  className="flex-1 px-4 py-2 text-sm outline-none bg-transparent"
                />
                <button className="p-2 text-patra-blue-400 rounded-full">
                  <Search className="w-4 h-4" />
                </button>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 py-2.5 text-sm font-semibold text-patra-blue-400 border border-slate-200 rounded-full hover:text-patra-blue-500 transition">
                  EN
                </button>
                <button className="flex-1 py-2.5 text-sm font-semibold text-patra-blue-400 border border-slate-200 rounded-full hover:text-patra-blue-500 transition">
                  ID
                </button>
              </div>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </AceternityNavbar>
    </div>
  );
}
