"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, type ReactNode } from "react";
import { AdaptiveDpr } from "@react-three/drei";

/**
 * Reusable 3D canvas wrapper built on @react-three/fiber.
 * - Performance conscious: caps device pixel ratio and adapts DPR dynamically.
 * - Offline-safe: no external network assets are loaded by the canvas itself.
 * - `pointerEvents` is disabled by default so the scene never blocks page
 *   interaction (scroll, clicks). Enable it for interactive hero objects.
 */
type PatraSceneProps = {
  children: ReactNode;
  /** Tailwind classes for the absolutely-positioned wrapper */
  className?: string;
  cameraPosition?: [number, number, number];
  fov?: number;
  frameloop?: "always" | "demand" | "never";
  interactive?: boolean;
};

export default function PatraScene({
  children,
  className = "absolute inset-0",
  cameraPosition = [0, 0, 9],
  fov = 45,
  frameloop = "always",
  interactive = false,
}: PatraSceneProps) {
  return (
    <div className={className} aria-hidden="true">
      <Canvas
        dpr={[1, 1.75]}
        frameloop={frameloop}
        camera={{ position: cameraPosition, fov }}
        gl={{
          antialias: true,
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
