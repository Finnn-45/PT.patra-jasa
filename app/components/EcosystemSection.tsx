"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Container from "@/components/system/Container";

gsap.registerPlugin(ScrollTrigger);

/**
 * Ecosystem storytelling centerpiece. A tall, sticky visualization that tells
 * a story as you scroll: Pertamina appears → Patra Jasa emerges → business
 * nodes appear → connections draw → the ecosystem becomes complete.
 * Visually distinct; respects prefers-reduced-motion.
 */
export default function EcosystemSection() {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const ctx = gsap.context(() => {
      if (reduced) return;
      const q = gsap.utils.selector(root);
      const el = root.current as Element;
      const beat = (start: string, end: string) => ({
        trigger: el,
        start,
        end,
        scrub: 0.7,
      });

      // Step 1 — Pertamina appears
      gsap.fromTo(
        q(".eco-pertamina"),
        { opacity: 0, scale: 0.6, y: -14 },
        { opacity: 1, scale: 1, y: 0, ease: "power2.out", scrollTrigger: beat("top top", "top+=35%") }
      );
      gsap.fromTo(
        q(".halo-pertamina"),
        { opacity: 0, scale: 0.4 },
        { opacity: 0.85, scale: 1, ease: "power2.out", scrollTrigger: beat("top top", "top+=30%") }
      );

      // Step 2 — trunk draws, Patra Jasa emerges
      drawLines(q(".line-trunk"), "top+=15%", "top+=42%");
      gsap.fromTo(
        q(".eco-patra"),
        { opacity: 0, scale: 0.5, y: 24 },
        { opacity: 1, scale: 1, y: 0, ease: "power3.out", scrollTrigger: beat("top+=25%", "top+=52%") }
      );
      gsap.fromTo(
        q(".patra-glow"),
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, ease: "power2.out", scrollTrigger: beat("top+=28%", "top+=56%") }
      );

      // Step 3 — business nodes appear
      gsap.fromTo(
        q(".eco-node"),
        { opacity: 0, scale: 0.4 },
        { opacity: 1, scale: 1, stagger: 0.08, ease: "power2.out", scrollTrigger: beat("top+=38%", "top+=64%") }
      );

      // Step 4 — connections draw; particles energize
      drawLines(q(".line-branch"), "top+=48%", "top+=72%");
      gsap.fromTo(
        q(".eco-particle"),
        { opacity: 0, scale: 0.2 },
        { opacity: 0.9, scale: 1, stagger: 0.12, ease: "power2.out", scrollTrigger: beat("top+=56%", "top+=78%") }
      );

      // Step 5 — ecosystem complete
      gsap.fromTo(
        q(".eco-complete"),
        { opacity: 0 },
        { opacity: 0.85, scrollTrigger: beat("top+=72%", "bottom bottom") }
      );
    }, root);
    return () => ctx.revert();
  }, []);

  /** Draw every given line by animating its stroke dash offset to 0. */
  function drawLines(lines: Element[], start: string, end: string) {
    lines.forEach((ln) => {
      const el = ln as SVGGeometryElement;
      const len = el.getTotalLength();
      gsap.set(el, { strokeDasharray: len, strokeDashoffset: len });
      gsap.to(el, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: { trigger: root.current as Element, start, end, scrub: 0.7 },
      });
    });
  }

  return (
    <section
      ref={root}
      className="section-pad relative h-[360vh] overflow-hidden text-paper"
      style={{
        background:
          "radial-gradient(circle at 50% 40%, #14130f 0%, #0c0c08 45%, #08080a 100%)",
      }}
    >
      <div className="sticky top-0 flex h-screen flex-col justify-center py-24 md:py-28">
        <Container className="text-center">
          <p className="t-eyebrow mb-5 text-patragreen-300">Ekosistem</p>
          <h2 className="t-display">Part of a&nbsp;Larger&nbsp;Ecosystem.</h2>
          <p className="t-lead mx-auto mt-7 max-w-2xl text-ash">
            Sebagai anak perusahaan PT Pertamina (Persero), Patra Jasa hadir
            sebagai mitra terpercaya dalam pengembangan aset, pengelolaan hotel
            premium, dan layanan solusi bisnis yang profesional.
          </p>
        </Container>

        {/* Ecosystem visualization */}
        <div className="mx-auto mt-8 w-full max-w-3xl px-6">
          <svg
            viewBox="0 0 800 620"
            className="h-auto w-full"
            role="img"
            aria-label="Ekosistem: Pertamina terhubung ke Patra Jasa, bercabang ke Hospitality, Property dan Services"
          >
            {/* Connection lines */}
            <line className="line-draw line-trunk" x1="400" y1="114" x2="400" y2="222" stroke="#8a8577" strokeWidth="1.5" />
            <line className="line-draw line-branch" x1="400" y1="316" x2="170" y2="478" stroke="#7EA014" strokeWidth="1.2" />
            <line className="line-draw line-branch" x1="400" y1="316" x2="400" y2="478" stroke="#7EA014" strokeWidth="1.2" />
            <line className="line-draw line-branch" x1="400" y1="316" x2="630" y2="478" stroke="#7EA014" strokeWidth="1.2" />

            {/* Energy particles along branches */}
            <circle className="eco-particle" cx="285" cy="397" r="4" fill="#DCEE87" />
            <circle className="eco-particle" cx="400" cy="402" r="4" fill="#DCEE87" />
            <circle className="eco-particle" cx="515" cy="397" r="4" fill="#DCEE87" />

            {/* Pertamina */}
            <circle className="halo-pertamina" cx="400" cy="80" r="48" fill="none" stroke="#DCEE87" strokeWidth="1" />
            <g className="eco-pertamina">
              <circle cx="400" cy="80" r="34" fill="#12110f" stroke="#f2eee4" strokeWidth="1.2" />
              <text x="400" y="88" textAnchor="middle" fill="#f2eee4" fontSize="13" fontWeight="700" letterSpacing="1">PERTAMINA</text>
              <text x="400" y="138" textAnchor="middle" fill="#8a8577" fontSize="11">Ekosistem Energi Nasional</text>
            </g>

            {/* Patra Jasa (emergent) */}
            <g className="eco-patra">
              <circle className="patra-glow" cx="400" cy="270" r="64" fill="#39470C" />
              <circle cx="400" cy="270" r="46" fill="#627A11" stroke="#DCEE87" strokeWidth="1.5" />
              <text x="400" y="278" textAnchor="middle" fill="#fbf8f1" fontSize="12" fontWeight="700" letterSpacing="0.5">PATRA JASA</text>
              <text x="400" y="352" textAnchor="middle" fill="#8a8577" fontSize="11">Hospitality · Property · Services</text>
            </g>

            {/* Business nodes */}
            <g className="eco-node">
              <circle cx="170" cy="500" r="26" fill="#12110f" stroke="#7EA014" strokeWidth="1.2" />
              <text x="170" y="547" textAnchor="middle" fill="#f2eee4" fontSize="11" fontWeight="600" letterSpacing="0.5">HOTELS &amp; RESORTS</text>
            </g>
            <g className="eco-node">
              <circle cx="400" cy="500" r="26" fill="#12110f" stroke="#7EA014" strokeWidth="1.2" />
              <text x="400" y="547" textAnchor="middle" fill="#f2eee4" fontSize="11" fontWeight="600" letterSpacing="0.5">PROPERTY</text>
            </g>
            <g className="eco-node">
              <circle cx="630" cy="500" r="26" fill="#12110f" stroke="#7EA014" strokeWidth="1.2" />
              <text x="630" y="547" textAnchor="middle" fill="#f2eee4" fontSize="11" fontWeight="600" letterSpacing="0.5">SERVICES</text>
            </g>

            {/* Complete caption */}
            <text className="eco-complete" x="400" y="610" textAnchor="middle" fill="#DCEE87" fontSize="12" fontWeight="600" letterSpacing="3">
              CONNECTED · INTEGRATED · ECOSYSTEM
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
}