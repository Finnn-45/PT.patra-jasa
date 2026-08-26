"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  MeshDistortMaterial,
  Sparkles,
} from "@react-three/drei";
import * as THREE from "three";

/* ── Patra Jasa corporate palette ─────────────────────────────────────────── */
const RED = "#ED1B2F";
const GREEN = "#B7D731";
const BLUE = "#006CB8";
const NAVY = "#003C66";
const LIGHTBLUE = "#5EAAE3";
const GOLD = "#EACE6C";
const WHITE = "#ffffff";

/* ── small math helpers ────────────────────────────────────────────────────── */
function clamp01(t: number) {
  return Math.min(1, Math.max(0, t));
}
function range(t: number, a: number, b: number) {
  return clamp01((t - a) / (b - a));
}
function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

/**
 * The scroll-driven 3D world. Rendered fixed behind the single-page content,
 * it transforms across the page's scroll offset so the whole site feels like
 * one continuous, smooth 3D experience. The raw page scroll progress (0..1)
 * lives in `scrollRef`; a per-frame damp gets applied here for buttery ease.
 */
type SceneContentProps = { scrollRef: { current: number } };

function SceneContent({ scrollRef }: SceneContentProps) {
  const display = useRef(0);

  const core = useRef<THREE.Group>(null);
  const gem = useRef<THREE.Mesh>(null);
  const inner = useRef<THREE.Mesh>(null);
  const ring = useRef<THREE.Mesh>(null);
  const pillars = useRef<THREE.Group>(null);
  const globe = useRef<THREE.Mesh>(null);
  const globeInner = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    // Smoothly ease toward the live scroll target for a fluid feel.
    const target = scrollRef.current;
    display.current += (target - display.current) * Math.min(1, delta * 4);
    const o = display.current;
    const t = state.clock.elapsedTime;

    // ─ Central corporate gem: drifts left & recedes as we scroll ─
    if (core.current) {
      core.current.position.set(
        lerp(0, -4.2, range(o, 0, 0.34)),
        0.1 + Math.sin(t * 0.6) * 0.25,
        lerp(0, -2.5, range(o, 0.05, 0.4))
      );
      core.current.rotation.y += delta * 0.4;
    }
    if (ring.current) {
      ring.current.rotation.z += delta * 0.6;
      const s = lerp(1, 0.35, range(o, 0.32, 0.62));
      ring.current.scale.set(s, s, s);
    }
    if (gem.current) {
      gem.current.rotation.z += delta * 0.15;
    }

    // ─ Three business pillars roll out mid-scroll ─
    if (pillars.current) {
      const p = range(o, 0.42, 0.74);
      pillars.current.position.z = lerp(8, -2.4, p);
      pillars.current.rotation.y = lerp(0, 0.5, p);
      pillars.current.position.x = lerp(0, 0.6, p);
    }

    // ─ Wireframe globe (corporate / world reach) ─
    if (globe.current) {
      globe.current.rotation.y += delta * 0.12;
      globe.current.rotation.x += delta * 0.03;
      globe.current.position.set(
        lerp(4.6, 0, range(o, 0.7, 1)),
        lerp(2.2, -0.6, range(o, 0.7, 1)),
        lerp(-2, -1, range(o, 0.7, 1))
      );
    }
    if (globeInner.current) {
      const s = lerp(0.9, 0.5, range(o, 0.7, 1));
      globeInner.current.scale.set(s, s, s);
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 8, 6]} intensity={1.5} />
      <pointLight position={[-6, -3, 4]} intensity={1} color={LIGHTBLUE} />
      <pointLight position={[6, 3, -4]} intensity={0.8} color={GOLD} />

      {/* ── Central corporate gem ── */}
      <group ref={core}>
        <Float speed={1.5} rotationIntensity={0.4} floatIntensity={1.2}>
          <mesh ref={gem}>
            <icosahedronGeometry args={[1.6, 1]} />
            <MeshDistortMaterial
              color={RED}
              roughness={0.2}
              metalness={0.9}
              distort={0.35}
              speed={2}
            />
          </mesh>
          <mesh ref={inner} scale={0.45}>
            <icosahedronGeometry args={[1.6, 0]} />
            <meshStandardMaterial
              color={WHITE}
              emissive={GREEN}
              emissiveIntensity={1.3}
              metalness={0.6}
              roughness={0.15}
            />
          </mesh>
          <mesh ref={ring} rotation={[Math.PI / 2.2, 0, 0]}>
            <torusGeometry args={[2.5, 0.02, 16, 180]} />
            <meshBasicMaterial color={GOLD} transparent opacity={0.7} />
          </mesh>
        </Float>
      </group>

      {/* ── Business pillars: Property, Hotels, Services ── */}
      <group ref={pillars} position={[0, 0, 8]}>
        {/* Property → building block */}
        <group position={[-3.2, 0.2, 0]}>
          <Float speed={1.1} rotationIntensity={0.3} floatIntensity={0.6}>
            <mesh>
              <boxGeometry args={[1.1, 1.6, 1.1]} />
              <meshStandardMaterial color={NAVY} roughness={0.25} metalness={0.7} />
            </mesh>
            <mesh position={[0, 1.05, 0]}>
              <coneGeometry args={[0.55, 0.5, 4]} />
              <meshStandardMaterial color={GOLD} roughness={0.3} metalness={0.85} />
            </mesh>
          </Float>
        </group>

        {/* Hotels → tower */}
        <group position={[0, 0.3, 0]}>
          <Float speed={1.3} rotationIntensity={0.3} floatIntensity={0.8}>
            <mesh>
              <cylinderGeometry args={[0.6, 0.8, 1.7, 24]} />
              <meshStandardMaterial color={RED} roughness={0.25} metalness={0.75} />
            </mesh>
            <mesh position={[0, 1.15, 0]}>
              <torusGeometry args={[0.55, 0.06, 12, 36]} />
              <meshStandardMaterial color={WHITE} roughness={0.3} metalness={0.8} />
            </mesh>
          </Float>
        </group>

        {/* Services → cog / cone */}
        <group position={[3.2, 0.1, 0]}>
          <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.7}>
            <mesh>
              <coneGeometry args={[0.95, 1.7, 6]} />
              <meshStandardMaterial color={GREEN} roughness={0.25} metalness={0.75} />
            </mesh>
          </Float>
        </group>
      </group>

      {/* ── Wireframe globe ── */}
      <group position={[4.6, 2.2, -2]}>
        <mesh ref={globe}>
          <icosahedronGeometry args={[2.4, 2]} />
          <meshBasicMaterial color={LIGHTBLUE} wireframe transparent opacity={0.28} />
        </mesh>
        <mesh ref={globeInner}>
          <icosahedronGeometry args={[2.4, 1]} />
          <meshBasicMaterial color={NAVY} wireframe transparent opacity={0.16} />
        </mesh>
      </group>

      {/* ── Ambient particles ── */}
      <Sparkles count={180} scale={16} size={2.8} speed={0.35} opacity={0.5} color={LIGHTBLUE} />
      <Sparkles count={90} scale={12} size={1.4} speed={0.25} opacity={0.4} color={GOLD} position={[0, 1, 2]} />
    </>
  );
}

/**
 * Fixed full-screen 3D canvas. ScrollControls listens to the window scroll of
 * the overlaid single-page content and drives SceneContent accordingly.
 */
export default function Corporate3DScene({ scrollRef }: { scrollRef: { current: number } }) {
  return (
    <Canvas
      dpr={[1, 1.75]}
      frameloop="always"
      camera={{ position: [0, 0, 10], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ position: "absolute", inset: 0 }}
    >
      <SceneContent scrollRef={scrollRef} />
    </Canvas>
  );
}
