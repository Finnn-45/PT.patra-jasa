"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "@/components/system/Container";

gsap.registerPlugin(ScrollTrigger);

/* Verified portfolio from the repository — no invented properties. */
const projects = [
  { name: "Hunian Premium Terpadu", location: "Kawasan Strategis Indonesia", category: "Hunian · Properti Jual", description: "Pengembangan hunian modern yang mengutamakan kualitas hidup, aksesibilitas, dan kenyamanan untuk keluarga serta profesional.", facilities: ["Clubhouse", "Kolam Renang", "Area Jogging", "CCTV 24 Jam"], img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=75&w=1600&auto=format&fit=crop" },
  { name: "Kawasan Komersial Modern", location: "Kota Besar di Indonesia", category: "Komersial · Properti Jual", description: "Properti komersial dengan desain modern dan infrastruktur yang mendukung kegiatan bisnis sehari-hari.", facilities: ["Gerbang Keamanan", "Taman Bermain", "Jogging Track", "Masjid"], img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=75&w=1600&auto=format&fit=crop" },
  { name: "Pengembangan Lahan Berkelanjutan", location: "Wilayah Potensial", category: "Pengembangan · Lahan", description: "Pengembangan kawasan terpadu yang mengedepankan keberlanjutan, kenyamanan lingkungan, dan nilai investasi jangka panjang.", facilities: ["Pos Keamanan", "Taman Hijau", "Area Olahraga", "Balai Warga"], img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=75&w=1600&auto=format&fit=crop" },
  { name: "Ruang Kantor Korporat", location: "Jakarta Selatan", category: "Office Space · Properti Sewa", description: "Gedung perkantoran dengan fasilitas lengkap, infrastruktur modern, dan keamanan yang mendukung operasional bisnis.", facilities: ["Lift Cepat", "Genset Backup", "Central AC", "Parkir Basement"], img: "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=75&w=1600&auto=format&fit=crop" },
  { name: "Pusat Konvensi & Event", location: "Jakarta Barat", category: "Convention · Properti Sewa", description: "Ruang konvensi fleksibel untuk pertemuan bisnis, konferensi, dan event korporat dengan dukungan layanan profesional.", facilities: ["Ballroom 500 pax", "Auditorium 1.000 pax", "WiFi Highspeed", "Catering"], img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=75&w=1600&auto=format&fit=crop" },
  { name: "Jaringan Hotels & Resorts", location: "3+ Provinsi di Indonesia", category: "Hospitality", description: "Jaringan hotel dan resort Patra Jasa — 9 properti dengan standar layanan korporat dan kualitas bintang lima.", facilities: ["Hotel Bisnis", "Hotel Resort", "Convention & MICE"], img: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=75&w=1600&auto=format&fit=crop" },
];

/**
 * Editorial property & hospitality portfolio. Desktop: vertical scroll drives
 * a pinned horizontal track, each project a large full-bleed visual with clip
 * reveal + typography movement. Mobile / reduced-motion: clean vertical list.
 */
export default function PropertyShowcase() {
  const pinRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    mm.add(
      "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
      () => {
        const track = trackRef.current;
        if (!track || !pinRef.current) return;
        const slides = Array.from(track.children);

        const getAmount = () =>
          Math.max(0, track.scrollWidth - window.innerWidth);

        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: pinRef.current,
            pin: true,
            start: "top top",
            end: () => `+=${getAmount()}`,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        tl.to(track, { x: () => -getAmount(), duration: 1 });

        const step = 1 / (slides.length + 1);
        slides.forEach((slide, i) => {
          const at = 0.05 + i * step;
          const clip = slide.querySelector(".project-clip");
          const title = slide.querySelector(".project-title");
          const meta = slide.querySelector(".project-meta");
          if (clip)
            tl.fromTo(clip, { clipPath: "inset(0 0 100% 0)" }, { clipPath: "inset(0 0 0% 0)", duration: 0.35, ease: "power2.out" }, at);
          if (title)
            tl.fromTo(title, { y: 70, opacity: 0 }, { y: 0, opacity: 1, duration: 0.3, ease: "power2.out" }, at + 0.03);
          if (meta)
            tl.fromTo(meta, { y: 26, opacity: 0 }, { y: 0, opacity: 1, duration: 0.3, ease: "power2.out" }, at + 0.05);
        });
      }
    );
    return () => mm.revert();
  }, []);

  return (
    <section
      className="section-pad relative overflow-hidden text-paper"
      style={{
        background:
          "radial-gradient(circle at 60% 30%, #14130f 0%, #0c0c08 45%, #08080a 100%)",
      }}
    >
      <Container className="mb-12 md:mb-16">
        <p className="t-eyebrow mb-5 text-patragreen-300">Portfolio</p>
        <h2 className="t-section max-w-3xl">
          Property &amp; Hospitality, sebagai&nbsp;Proyek.
        </h2>
        <p className="t-lead mt-6 max-w-2xl text-ash">
          Setiap aset dihadirkan sebagai karya — hunian, kawasan komersial,
          perkantoran, hingga jaringan hotel di seluruh Indonesia.
        </p>
      </Container>

      <div ref={pinRef} className="relative">
        <div
          ref={trackRef}
          className="flex flex-col gap-8 md:flex-row md:gap-0 motion-reduce:flex-col motion-reduce:gap-8"
        >
          {projects.map((p, i) => (
            <article
              key={p.name}
              className="group relative h-[74vh] w-full shrink-0 overflow-hidden border-r border-ash/10 md:h-[80vh] md:w-[68vw] lg:w-[58vw] motion-reduce:w-full"
            >
              {/* Image — dominates; subtle zoom on hover */}
              <div className="project-clip absolute inset-0 will-change-transform">
                <div className="media-frame h-full w-full">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.05]"
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-transparent" />

              {/* Editorial index */}
              <span className="t-eyebrow absolute right-6 top-6 text-ash md:right-8">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Text — supports the image */}
              <div className="absolute inset-x-0 bottom-0 p-8 md:p-12">
                <div className="project-meta mb-4 flex flex-wrap items-center gap-3">
                  <span className="t-eyebrow text-patragreen-300">{p.category}</span>
                  <span className="h-px w-8 bg-paper/30" aria-hidden />
                  <span className="t-eyebrow text-ash">{p.location}</span>
                </div>
                <h3 className="project-title text-3xl font-bold uppercase leading-tight tracking-tight text-paper md:text-5xl">
                  {p.name}
                </h3>
                <p className="mt-4 max-w-xl font-light leading-relaxed text-paper/80">
                  {p.description}
                </p>
                {/* Additional information appears on hover */}
                <div className="mt-5 max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100">
                  <p className="t-caption text-patragreen-300">
                    Fasilitas — {p.facilities.join(" · ")}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Container className="mt-10 md:mt-14">
        <p className="t-caption text-ash">
          Gulir untuk menjelajahi setiap proyek — di layar kecil, sajian berubah
          menjadi alur vertikal.
        </p>
      </Container>
    </section>
  );
}