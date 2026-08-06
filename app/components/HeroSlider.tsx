"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";

type Slide = {
  badge: string;
  title: string;
  titleAccent: string;
  description: string;
  cta: string;
  ctaLink: string;
  background: string;
};

const slides: Slide[] = [
  {
    background: "linear-gradient(135deg, rgba(8,83,156,0.95), rgba(20,184,166,0.9))",
    badge: "Membangun Masa Depan",
    title: "Dedikasi untuk",
    titleAccent: "Keunggulan.",
    description:
      "Patra Jasa menghadirkan inovasi dan kualitas terbaik melalui pilar bisnis Property, Hotels & Resorts, dan Services.",
    cta: "Jelajahi Bisnis Kami",
    ctaLink: "#pilar",
  },
  {
    background: "linear-gradient(135deg, rgba(3,105,161,0.95), rgba(59,130,246,0.88))",
    badge: "Hotels & Resorts",
    title: "Keramahtamahan",
    titleAccent: "Berkelas.",
    description:
      "Menawarkan pengalaman menginap yang profesional dan konsisten dengan nilai korporat Patra Jasa.",
    cta: "Jelajahi Hotels",
    ctaLink: "/bisnis/hotels",
  },
  {
    background: "linear-gradient(135deg, rgba(17,24,39,0.95), rgba(96,165,250,0.88))",
    badge: "Property",
    title: "Kawasan",
    titleAccent: "Terpadu.",
    description:
      "Mengembangkan hunian dan properti komersial yang mendukung gaya hidup modern dan berkelanjutan.",
    cta: "Jelajahi Property",
    ctaLink: "/products/property-1",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback((idx: number, dir: number = 1) => {
    setDirection(dir);
    setCurrent((idx + slides.length) % slides.length);
  }, []);

  const next = useCallback(() => goTo(current + 1, 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1, -1), [current, goTo]);

  useEffect(() => {
    const id = setInterval(() => {
      setDirection(1);
      setCurrent((c) => (c + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const slide = slides[current];

  return (
    <section data-nav-theme="dark" className="relative w-full h-[100vh] min-h-[600px] overflow-hidden bg-slate-900">
      {/* Background images crossfade */}
      <AnimatePresence>
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
          style={{ background: slide.background }}
        />
      </AnimatePresence>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full max-w-[1440px] mx-auto px-6 lg:px-16 pt-[72px]">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? 40 : -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -40 : 40 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-4xl"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md mb-8">
              <span className="w-2 h-2 rounded-full bg-patra-blue-400 animate-pulse" />
              <span className="text-white text-xs font-medium tracking-widest uppercase">
                {slide.badge}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 drop-shadow-xl">
              {slide.title} <br />
              <span className="text-patra-blue-400">{slide.titleAccent}</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-2xl text-white/80 max-w-2xl font-light leading-relaxed mb-10">
              {slide.description}
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={slide.ctaLink}
                className="px-8 py-4 bg-patra-blue-400 hover:bg-patra-blue-300 text-white font-bold rounded-full transition-all duration-300 shadow-[0_0_40px_-10px_rgba(0,114,198,0.5)] hover:shadow-[0_0_60px_-10px_rgba(0,114,198,0.8)] hover:-translate-y-1 text-center"
              >
                {slide.cta}
              </a>
              <a
                href="/tentang-kami"
                className="px-8 py-4 bg-transparent border border-white/30 hover:bg-white/10 text-white font-bold rounded-full transition-all duration-300 flex items-center justify-center gap-3"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Tonton Video
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation arrows */}
      <button
        aria-label="Previous slide"
        onClick={prev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all"
      >
        <svg
          className="w-5 h-5 md:w-6 md:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        aria-label="Next slide"
        onClick={next}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all"
      >
        <svg
          className="w-5 h-5 md:w-6 md:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i, i > current ? 1 : -1)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? "w-8 bg-white" : "w-2 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-8 right-8 z-20 text-white/60 text-sm font-medium">
        {current + 1} / {slides.length}
      </div>
    </section>
  );
}