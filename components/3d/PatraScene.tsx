"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState, type ReactNode } from "react";
import { AdaptiveDpr } from "@react-three/drei";

export type Quality = "high" | "low";

/** Coarse input check (client-side only). */
export function isMobileDevice() {
  if (typeof window === "undefined") return false;
  return (
    window.matchMedia("(pointer: coarse)").matches ||
    window.innerWidth < 768
  );
}

/** Detect WebGL support so we can degrade gracefully. */
export function webGLAvailable() {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl2") ||
        canvas.getContext("webgl") ||
        canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

type PatraSceneProps = {
  children: ReactNode;
  className?: string;
  quality?: Quality;
  interactive?: boolean;
};

/**
 * Reusable WebGL canvas wrapper for the Patra 3D identity.
 * Performance-conscious: caps DPR, adapts DPR, disables antialiasing on low
 * quality (mobile), and never blocks the page.
 */
export default function PatraScene({
  children,
  className = "absolute inset-0",
  quality = "high",
  interactive = false,
}: PatraSceneProps) {
  const low = quality === "low";

  // Pause the render loop while the tab is hidden.
  const [ready, setReady] = useState(true);
  useEffect(() => {
    const onVis = () => setReady(document.visibilityState === "visible");
    onVis();
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  return (
    <div className={className} aria-hidden="true">
      <Canvas
        dpr={low ? ([1, 1.5] as [number, number]) : ([1, 2] as [number, number])}
        frameloop={ready ? "always" : "never"}
        camera={{ position: [0, 0, 9], fov: 45 }}
        gl={{
          antialias: !low,
          alpha: true,
          powerPreference: "high-performance",
        }}
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: interactive ? "auto" : "none",
        }}
      >
        <AdaptiveDpr pixelated={false} />
        <Suspense fallback={null}>{children}</Suspense>
      </Canvas>
    </div>
  );
}