"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import * as THREE from "three";
import type { Quality } from "./PatraScene";

const GREEN = "#DCEE87";
const ASH = "#8a8577";

/** clamp + remap helper */
function range(t: number, a: number, b: number) {
  return Math.min(1, Math.max(0, (t - a) / (b - a)));
}

type Props = { scrollRef: { current: number }; quality: Quality };

/**
 * Ambient dust + closing dissolve particles. The field brightens and swells
 * when the structure dissolves at the end of the page.
 */
export default function ParticleField({ scrollRef, quality }: Props) {
  const ambient = useRef<THREE.Points>(null);
  const burst = useRef<THREE.Points>(null);
  const burstMat = useRef<THREE.PointsMaterial>(null);
  const low = quality === "low";

  useFrame((state) => {
    const o = scrollRef.current;
    const t = state.clock.elapsedTime;
    const dissolve = range(o, 0.86, 1);

    if (ambient.current) {
      ambient.current.rotation.y = t * 0.02;
      ambient.current.rotation.x = Math.sin(t * 0.05) * 0.1;
    }
    if (burst.current) {
      const s = 1 + dissolve * 3.2;
      burst.current.scale.set(s, s, s);
    }
    if (burstMat.current) {
      burstMat.current.opacity = dissolve * 0.9;
      burstMat.current.size = 0.12 + dissolve * 0.35;
    }
  });

  return (
    <>
      <Sparkles
        count={low ? 90 : 220}
        scale={17}
        size={low ? 2.2 : 2.8}
        speed={0.3}
        opacity={0.4}
        color={ASH}
      />
      <Sparkles
        count={low ? 40 : 110}
        scale={12}
        size={1.4}
        speed={0.2}
        opacity={0.35}
        color={GREEN}
        position={[0, 0.5, 0]}
      />

      {/* Dissolve burst — invisible until the closing phase */}
      <points ref={burst}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[burstPositions(low ? 260 : 700), 3]} />
        </bufferGeometry>
        <pointsMaterial
          ref={burstMat}
          size={0.12}
          color={GREEN}
          transparent
          opacity={0}
          sizeAttenuation
          depthWrite={false}
        />
      </points>
    </>
  );
}

/** Random points on a sphere shell for the dissolve cloud. */
function burstPositions(count: number): Float32Array {
  const arr = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const r = 4.5 + Math.random() * 3.5;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    arr[i * 3 + 2] = r * Math.cos(phi);
  }
  return arr;
}
