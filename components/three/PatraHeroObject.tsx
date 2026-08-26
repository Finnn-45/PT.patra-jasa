"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

/**
 * Interactive centerpiece for hero scenes: a floating, slowly deforming
 * metallic gem wrapped in an orbiting ring. Supports drag-rotation via
 * OrbitControls (auto-rotates when idle).
 *
 * Expected to be mounted inside a <Canvas> and inside a <PatraScene
 * interactive> so pointer events reach OrbitControls.
 */
type Accent = "blue" | "green";

type HeroObjectProps = {
  accent?: Accent;
  /** Place the object off-centre so it does not collide with hero text. */
  position?: [number, number, number];
  interactive?: boolean;
};

export default function PatraHeroObject({
  accent = "blue",
  position = [3.2, 0.2, 0],
  interactive = true,
}: HeroObjectProps) {
  const gem = useRef<THREE.Mesh>(null);
  const inner = useRef<THREE.Mesh>(null);
  const ring = useRef<THREE.Mesh>(null);
  const particles = useRef<THREE.Points>(null);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    if (gem.current) gem.current.rotation.y += delta * 0.5;
    if (inner.current) inner.current.rotation.z += delta * 0.3;
    if (ring.current) {
      ring.current.rotation.z += delta * 0.8;
      ring.current.rotation.x = Math.PI / 2.2 + Math.sin(t * 0.4) * 0.1;
    }
    if (particles.current) {
      particles.current.rotation.y += delta * 0.15;
    }
  });

  const gemColor = accent === "green" ? "#9BC31B" : "#2C8CD2";
  const glowColor = accent === "green" ? "#CAE459" : "#5EAAE3";

  return (
    <group position={position}>
      <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.8}>
        <group>
          <mesh ref={gem}>
            <icosahedronGeometry args={[1.55, 1]} />
            <MeshDistortMaterial
              color={gemColor}
              roughness={0.25}
              metalness={0.85}
              distort={0.35}
              speed={2}
            />
          </mesh>
          <mesh ref={inner} scale={0.5}>
            <icosahedronGeometry args={[1.55, 0]} />
            <meshStandardMaterial
              color="#ffffff"
              emissive={glowColor}
              emissiveIntensity={0.9}
              metalness={0.6}
              roughness={0.2}
            />
          </mesh>
        </group>
      </Float>

      <mesh ref={ring}>
        <torusGeometry args={[2.55, 0.02, 16, 140]} />
        <meshBasicMaterial color={glowColor} transparent opacity={0.55} />
      </mesh>

      <points ref={particles}>
        <bufferGeometry>
          {/* hand-sized particle halo around the gem */}
          <bufferAttribute
            attach="attributes-position"
            args={[haloPositions(), 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.06}
          color={glowColor}
          transparent
          opacity={0.8}
          sizeAttenuation
        />
      </points>

      {interactive && (
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.8}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={(2 * Math.PI) / 3}
        />
      )}
    </group>
  );
}

/** Generate random points on a sphere shell for the halo. */
function haloPositions(): Float32Array {
  const NUM = 260;
  const positions = new Float32Array(NUM * 3);
  for (let i = 0; i < NUM; i++) {
    const r = 2.15 + (Math.random() - 0.5) * 0.5;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }
  return positions;
}
