"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import * as THREE from "three";

/**
 * Ambient 3D "atmosphere" used as a living background across the site.
 * Renders brand-colored nebula blobs, a rotating wireframe core and floating
 * particles — everything is computed client-side (no network assets).
 *
 * Expected to be mounted inside a <Canvas> (use with <PatraScene>).
 */
type Accent = "blue" | "green";

type AtmosphereProps = {
  accent?: Accent;
  showCore?: boolean;
  intensity?: "normal" | "low";
};

const PALETTES: Record<
  Accent,
  { core: string; blob1: string; blob2: string; sparkle: string }
> = {
  blue: {
    core: "#006CB8",
    blob1: "#003C66",
    blob2: "#5EAAE3",
    sparkle: "#96C8EE",
  },
  green: {
    core: "#9BC31B",
    blob1: "#627A11",
    blob2: "#CAE459",
    sparkle: "#DCEE87",
  },
};

function AtmosphereScene({ accent = "blue", showCore = true }: { accent: Accent; showCore: boolean }) {
  const pal = PALETTES[accent];
  const core = useRef<THREE.Mesh>(null);
  const blobA = useRef<THREE.Mesh>(null);
  const blobB = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    if (core.current) {
      core.current.rotation.y += delta * 0.12;
      core.current.rotation.x += delta * 0.03;
    }
    if (blobA.current) {
      blobA.current.position.y = Math.sin(t * 0.3) * 0.45;
    }
    if (blobB.current) {
      blobB.current.position.x = Math.cos(t * 0.22) * 0.4;
    }
  });

  return (
    <>
      <ambientLight intensity={0.55} />
      <directionalLight position={[4, 6, 4]} intensity={1.3} />
      <pointLight position={[-6, -4, 4]} intensity={0.9} color={pal.sparkle} />

      {showCore && (
        <Float speed={1.2} rotationIntensity={0.4} floatIntensity={1.1}>
          <mesh ref={core}>
            <icosahedronGeometry args={[3.6, 1]} />
            <meshBasicMaterial color={pal.core} wireframe transparent opacity={0.14} />
          </mesh>
        </Float>
      )}

      <Float speed={0.9} rotationIntensity={0.4} floatIntensity={1.6}>
        <mesh ref={blobA} position={[-4.6, 1.6, -2]}>
          <sphereGeometry args={[1.9, 32, 32]} />
          <MeshDistortMaterial
            color={pal.blob1}
            roughness={0.4}
            metalness={0.1}
            distort={0.4}
            speed={2}
            transparent
            opacity={0.3}
          />
        </mesh>
      </Float>

      <Float speed={1} rotationIntensity={0.5} floatIntensity={2}>
        <mesh ref={blobB} position={[4.6, -1.6, -3]}>
          <sphereGeometry args={[2.5, 32, 32]} />
          <MeshDistortMaterial
            color={pal.blob2}
            roughness={0.4}
            metalness={0.1}
            distort={0.35}
            speed={1.5}
            transparent
            opacity={0.22}
          />
        </mesh>
      </Float>

      <Sparkles count={150} scale={15} size={2.6} speed={0.4} opacity={0.55} color={pal.sparkle} />
      <Sparkles
        count={70}
        scale={10}
        size={1.3}
        speed={0.3}
        opacity={0.4}
        color={pal.core}
        position={[0, 1, 2]}
      />
    </>
  );
}

export default function PatraAtmosphere({
  accent = "blue",
  showCore = true,
  intensity = "normal",
}: AtmosphereProps) {
  const opacity = intensity === "low" ? 0.6 : 1;
  return (
    <group scale={[opacity, opacity, opacity]}>
      <AtmosphereScene accent={accent} showCore={showCore} />
    </group>
  );
}
