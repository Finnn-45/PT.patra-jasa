"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  images?: string[];
  height?: string;
};

export default function HeroCarousel({
  images = ["/patra-1.jpg", "/patra-2.jpg", "/patra-3.jpg"],
  height = "h-80",
}: Props) {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const startX = useRef<number | null>(null);
  const deltaX = useRef<number>(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    function onTouchStart(e: TouchEvent) {
      startX.current = e.touches[0].clientX;
      deltaX.current = 0;
    }

    function onTouchMove(e: TouchEvent) {
      if (startX.current == null) return;
      deltaX.current = e.touches[0].clientX - startX.current;
    }

    function onTouchEnd() {
      if (Math.abs(deltaX.current) > 50) {
        if (deltaX.current < 0) next();
        else prev();
      }
      startX.current = null;
      deltaX.current = 0;
    }

    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: true });
    el.addEventListener("touchend", onTouchEnd);

    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), 6000);
    return () => clearInterval(id);
  }, [images.length]);

  function prev() {
    setIndex((i) => (i - 1 + images.length) % images.length);
  }

  function next() {
    setIndex((i) => (i + 1) % images.length);
  }

  return (
    <div className={`relative w-full ${height} max-w-full`} ref={containerRef}>
      <div className="absolute inset-0 flex items-center justify-between px-4">
        <button
          aria-label="prev"
          onClick={prev}
          className="rounded-full bg-white/70 p-2 text-slate-800 shadow hover:bg-white"
        >
          ‹
        </button>
        <button
          aria-label="next"
          onClick={next}
          className="rounded-full bg-white/70 p-2 text-slate-800 shadow hover:bg-white"
        >
          ›
        </button>
      </div>

      <div className="h-full w-full overflow-hidden">
        <div
          className="flex h-full w-full transition-transform duration-500"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((src, i) => (
            <div key={i} className="relative w-full flex-shrink-0">
              <div className="group h-full w-full overflow-hidden">
                <img
                  src={src}
                  alt={`slide-${i}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute left-4 bottom-4 rounded-md bg-black/40 px-3 py-1 text-sm text-white backdrop-blur-sm">
                  {i + 1} / {images.length}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute left-1/2 bottom-3 flex -translate-x-1/2 gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-8 rounded-full transition-colors ${
              i === index ? "bg-white" : "bg-white/40"
            }`}
            aria-label={`go-to-${i}`}
          />
        ))}
      </div>
    </div>
  );
}
