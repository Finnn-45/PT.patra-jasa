"use client";

import { useEffect, useRef } from "react";
import { useScroll } from "motion/react";
import Corporate3DScene from "./Corporate3DScene";
import CorporatePage from "./CorporatePage";

/**
 * The single-page 3D corporate experience.
 *
 * The 3D world is rendered in a fixed full-screen layer. A live scroll
 * progress value (0..1) is fed into the scene so the 3D objects glide and
 * transform as the user scrolls the page — one continuous, smooth experience.
 * The HTML content sits above it using translucent/glass surfaces so the 3D
 * stays visible everywhere.
 */
export default function CorporateExperience() {
  const scrollRef = useRef({ current: 0 });
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const update = (v: number) => {
      scrollRef.current.current = v;
    };
    const unsub = scrollYProgress.on("change", update);
    return () => unsub();
  }, [scrollYProgress]);

  return (
    <div className="relative min-h-screen text-white">
      {/* Fixed full-viewport 3D world behind the content */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_70%_20%,#003C66_0%,#006CB8_45%,#0f1530_100%)]">
        <Corporate3DScene scrollRef={scrollRef.current} />
      </div>

      {/* Overlaid single-page content (glass surfaces, 3D shows through) */}
      <main className="relative z-10">
        <CorporatePage />
      </main>
    </div>
  );
}