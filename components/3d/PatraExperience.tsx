"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useScroll } from "motion/react";
import PatraScene, { isMobileDevice, webGLAvailable, type Quality } from "./PatraScene";
import EnergyStructure from "./EnergyStructure";
import EcosystemNodes from "./EcosystemNodes";
import ParticleField from "./ParticleField";

/**
 * The complete Patra 3D identity — a fixed, full-viewport scene that reacts
 * to the page scroll (opening / nodes / ecosystem / dissolve). Degrades
 * gracefully when WebGL is unavailable, and simplifies geometry + particle
 * counts on mobile. Mounted via dynamic import so it never blocks rendering.
 */
export default function PatraExperience({
  className = "fixed inset-0 z-0",
}: {
  className?: string;
}) {
  const scrollRef = useRef({ current: 0 });
  const { scrollYProgress } = useScroll();

  const [state] = useState(() => ({
    webgl: webGLAvailable(),
    mobile: isMobileDevice(),
    reduced:
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  }));
  const quality: Quality = state.mobile ? "low" : "high";

  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => {
      scrollRef.current.current = v;
    });
    return () => unsub();
  }, [scrollYProgress]);

  // Graceful fallback when WebGL is unavailable.
  const fallback = useMemo(
    () => (
      <div
        className={className}
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle at 70% 20%, #12110f 0%, #0a0a08 45%, #08080a 100%)",
        }}
      />
    ),
    [className]
  );

  if (!state.webgl || state.reduced) return fallback;

  return (
    <PatraScene className={className} quality={quality}>
      <color attach="background" args={["#0a0a08"]} />
      <fog attach="fog" args={["#0a0a08", 10, 18]} />
      <ambientLight intensity={0.55} />
      <directionalLight position={[4, 6, 5]} intensity={1.3} />
      <pointLight position={[-6, -4, 4]} color="#7EA014" intensity={0.9} />
      <EnergyStructure scrollRef={scrollRef.current} quality={quality} />
      <EcosystemNodes scrollRef={scrollRef.current} quality={quality} />
      <ParticleField scrollRef={scrollRef.current} quality={quality} />
    </PatraScene>
  );
}