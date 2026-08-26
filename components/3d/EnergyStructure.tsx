"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { Quality } from "./PatraScene";

const GREEN = "#7EA014";
const BRIGHT = "#DCEE87";
const PAPER = "#f2eee4";
const ASH = "#8a8577";

function range(t: number, a: number, b: number) {
  return Math.min(1, Math.max(0, (t - a) / (b - a)));
}
function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}
const ease = (x: number) => 1 - Math.pow(1 - x, 3);

type Props = { scrollRef: { current: number }; quality: Quality };

/**
 * Abstract architectural-energy structure — the Patra 3D identity core.
 * Thin architectural rings + vertical gate frames + a revealed energy core.
 * Closed & mysterious in the hero; it opens on scroll; it dissolves at the
 * end into the particle field.
 */
export default function EnergyStructure({ scrollRef, quality }: Props) {
  const group = useRef<THREE.Group>(null);
  const coreOuter = useRef<THREE.Mesh>(null);
  const coreInner = useRef<THREE.Mesh>(null);
  const energyRing = useRef<THREE.Mesh>(null);
  const ringRefs = useRef<(THREE.Mesh | null)[]>([]);
  const barRefs = useRef<(THREE.Group | null)[]>([]);

  const low = quality === "low";

  useFrame((state, delta) => {
    const o = scrollRef.current;
    const t = state.clock.elapsedTime;
    const open = range(o, 0.08, 0.42);
    const reveal = range(o, 0.04, 0.18);
    const close = range(o, 0.84, 1);

    if (group.current) {
      group.current.rotation.y += delta * 0.05;
      group.current.scale.setScalar(lerp(0.92, 1.12, ease(open)) * lerp(1, 1.28, close));
    }

    // Architectural rings — spread open, fade at close
    ringRefs.current.forEach((m, i) => {
      if (!m) return;
      const spread = lerp(0.6, 1.08, ease(open));
      m.scale.set(spread, spread, spread);
      m.rotation.x = lerp(Math.PI / 2.7, Math.PI / 2.15, ease(open)) + t * 0.08 * (i + 1);
      m.rotation.z += delta * 0.12;
      (m.material as THREE.MeshBasicMaterial).opacity = 0.55 * (1 - close);
    });

    // Vertical gate frames — pivot outward
    barRefs.current.forEach((b, i) => {
      if (!b) return;
      const rot = lerp(0.85, 0.3, ease(open));
      b.rotation.y = rot + (i % 2 === 0 ? 0 : Math.PI);
      b.rotation.x = Math.PI / 2 - ease(open) * 0.45;
      b.position.y = lerp(0, 0.25, ease(open));
      const mesh = b.children[0] as THREE.Mesh;
      const mat = mesh.material as THREE.MeshStandardMaterial;
      mat.opacity = 0.5 * (1 - close);
    });

    // Energy core
    if (coreOuter.current) {
      const mat = coreOuter.current.material as THREE.MeshStandardMaterial;
      mat.opacity = (0.3 + 0.65 * reveal) * (1 - close);
      coreOuter.current.rotation.y += delta * 0.2;
      coreOuter.current.rotation.x = Math.sin(t * 0.4) * 0.1;
    }
    if (coreInner.current) {
      const mat = coreInner.current.material as THREE.MeshBasicMaterial;
      mat.opacity = reveal * (1 - close) * 0.95;
      coreInner.current.scale.setScalar(0.4 + Math.sin(t * 2.4) * 0.04);
    }
    if (energyRing.current) {
      const mat = energyRing.current.material as THREE.MeshBasicMaterial;
      mat.opacity = reveal * (1 - close) * 0.85;
      energyRing.current.rotation.z += delta * (low ? 0.3 : 0.55);
    }
  });

  return (
    <group ref={group}>
      {/* Architectural rings */}
      {Array.from({ length: low ? 2 : 3 }).map((_, i) => (
        <mesh
          key={`ring-${i}`}
          ref={(el) => {
            ringRefs.current[i] = el;
          }}
        >
          <torusGeometry args={[1.7 + i * 0.4, 0.012, 8, 96]} />
          <meshBasicMaterial color={ASH} transparent opacity={0.5} />
        </mesh>
      ))}

      {/* Vertical architectural gate frames */}
      {Array.from({ length: low ? 2 : 4 }).map((_, i) => (
        <group
          key={`bar-${i}`}
          ref={(el) => {
            barRefs.current[i] = el;
          }}
          rotation={[Math.PI / 2, (i * Math.PI) / (low ? 2 : 4), 0]}
        >
          <mesh>
            <boxGeometry args={[0.02, low ? 2.2 : 2.7, 0.02]} />
            <meshStandardMaterial
              color={PAPER}
              transparent
              opacity={0.5}
              metalness={0.5}
              roughness={0.4}
            />
          </mesh>
        </group>
      ))}

      {/* Dark outer shell of the core */}
      <mesh ref={coreOuter}>
        <icosahedronGeometry args={[1.35, low ? 0 : 1]} />
        <meshStandardMaterial
          color="#12110f"
          emissive={GREEN}
          emissiveIntensity={0.4}
          metalness={0.6}
          roughness={0.35}
          transparent
          opacity={0.3}
        />
      </mesh>

      {/* Bright inner energy */}
      <mesh ref={coreInner} scale={0.4}>
        <icosahedronGeometry args={[1.35, 0]} />
        <meshBasicMaterial color={BRIGHT} transparent opacity={0} />
      </mesh>

      {/* Fast energy ring */}
      <mesh ref={energyRing} rotation={[Math.PI / 2.3, 0, 0]}>
        <torusGeometry args={[1.95, 0.014, 8, 120]} />
        <meshBasicMaterial color={BRIGHT} transparent opacity={0} />
      </mesh>
    </group>
  );
}