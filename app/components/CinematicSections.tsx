"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "@/components/system/Container";
import PatraLink from "@/components/system/PatraLink";

gsap.registerPlugin(ScrollTrigger);

/* Verified figures from the repository (do not invent). */
const metrics = [
  { value: 22, unit: "", label: "Proyek Strategis", final: "22" },
  { value: 9, unit: "", label: "Hotel & Resorts", final: "09" },
  { value: 850, unit: "+", label: "Karyawan", final: "850+" },
  { value: 9, unit: "", label: "Proyek Mendatang", final: "09" },
];

/**
 * Scroll rhythm: STATIC → MOTION → STATIC → IMAGE → TYPOGRAPHY → MOTION.
 * 01 Statement (motion), 02 visual transition (scale/clip/parallax),
 * 03 editorial intro (typography + image), 04 metrics (scroll-driven count).
 * Respects `prefers-reduced-motion`.
 */
export default function CinematicSections() {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(root);
      if (prefersReduced) return;

      // 01 — Statement lines reveal as they enter the viewport
      gsap.fromTo(
        q("#statement .s-line-inner"),
        { yPercent: 115 },
        {
          yPercent: 0,
          duration: 1.1,
          ease: "power4.out",
          stagger: 0.16,
          scrollTrigger: {
            trigger: "#statement",
            start: "top 72%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // 02 — Visual transition: cinematic reveal (scale + clip) scrubbed to scroll
      gsap.fromTo(
        q("#transition .t-shape"),
        {
          scale: 1.22,
          clipPath: "inset(28% 22% 28% 22% round 0px)",
        },
        {
          scale: 1,
          clipPath: "inset(0% 0% 0% 0% round 0px)",
          ease: "none",
          scrollTrigger: {
            trigger: "#transition",
            start: "top top",
            end: "bottom bottom",
            scrub: 0.6,
          },
        }
      );

      // 04 — Metrics: giant numbers counted by scroll position
      gsap.utils.toArray<HTMLElement>("#metrics .m-value").forEach((el) => {
        const target = Number(el.getAttribute("data-target") || 0);
        const unit = el.getAttribute("data-unit") || "";
        const prefix = el.getAttribute("data-prefix") || "";
        const obj = { v: 0 };
        gsap.to(obj, {
          v: target,
          ease: "none",
          onUpdate() {
            el.textContent = `${prefix}${Math.round(obj.v)}${
              unit ? " " + unit : ""
            }`;
          },
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            end: "bottom 45%",
            scrub: 0.4,
          },
        });
      });
    }, root);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div ref={root}>
      {/* ── SECTION 01 — Statement (MOTION) ── */}
      <section id="statement" className="section-pad text-paper">
        <Container>
          <p className="t-eyebrow mb-10 text-patragreen-300">01 — Statement</p>
          <h2 className="text-paper">
            <span className="block overflow-hidden pb-[0.08em]">
              <span className="block t-display s-line-inner">
                Patra Jasa Is More
              </span>
            </span>
            <span className="block overflow-hidden pb-[0.08em]">
              <span className="block t-display s-line-inner">
                Than a Company.
              </span>
            </span>
            <span className="block overflow-hidden pb-[0.08em]">
              <span className="block t-display s-line-inner text-patragreen-300">
                It Is an Ecosystem
              </span>
            </span>
            <span className="block overflow-hidden pb-[0.08em]">
              <span className="block t-display s-line-inner text-patragreen-300">
                of Experiences.
              </span>
            </span>
          </h2>
        </Container>
      </section>

      {/* ── SECTION 02 — Visual transition (STATIC / IMAGE) ── */}
      <section id="transition" className="relative h-[180vh] bg-ink md:h-[200vh]">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <div className="t-shape absolute inset-0 will-change-transform">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2070&auto=format&fit=crop"
              alt="Patra Jasa business ecosystem visual"
              className="h-full w-full object-cover"
              style={{ filter: "grayscale(35%) contrast(1.05)" }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-ink/60" />
          <Container className="absolute inset-x-0 bottom-0 pb-10">
            <p className="t-eyebrow text-patragreen-300">02 — The Ecosystem</p>
            <p className="t-section mt-4 max-w-3xl text-paper">
              From one company, a landscape of hospitality, property and
              services.
            </p>
          </Container>
        </div>
      </section>

      {/* ── SECTION 03 — Editorial intro (TYPOGRAPHY + IMAGE) ── */}
      <section id="editorial" className="section-pad text-paper">
        <Container className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="t-eyebrow mb-6 text-patragreen-300">
              03 — Introduction
            </p>
            <h3 className="t-section">
              Membangun Nilai Korporat dengan Pilar Bisnis yang Terintegrasi.
            </h3>
            <div className="divider-hair mb-8 mt-10" aria-hidden />
            <p className="t-lead max-w-xl text-ash">
              Sebagai anak perusahaan PT Pertamina (Persero), Patra Jasa hadir
              sebagai mitra terpercaya dalam pengembangan aset, pengelolaan
              hotel premium, dan layanan solusi bisnis yang profesional.
            </p>
            <div className="mt-8">
              <PatraLink href="/tentang-kami">Pelajari Tentang Kami</PatraLink>
            </div>
          </div>
          <div className="media-frame aspect-[4/5] w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1400&auto=format&fit=crop"
              alt="Architectural corporate property"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </Container>
      </section>

      {/* ── SECTION 04 — Metrics (giant numbers, scroll-driven) ── */}
      <section id="metrics" className="section-pad text-paper">
        <Container>
          <p className="t-eyebrow mb-12 text-patragreen-300">04 — Metrics</p>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((m) => (
              <div key={m.label} className="border-t border-ash/20 pt-6">
                <div className="t-metric text-paper">
                  <span
                    className="m-value"
                    data-target={m.value}
                    data-unit={m.unit}
                    data-prefix=""
                  >
                    {m.final}
                  </span>
                </div>
                <p className="t-caption mt-3 text-ash">{m.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}