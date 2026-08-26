"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { Quality } from "./PatraScene";

const GREEN = "#7EA014";
const BRIGHT = "#DCEE87";

function range(t: number, a: number, b: number) {
  return Math.min(1, Math.max(0, (t - a) / (b - a)));
}

type Props = { scrollRef: { current: number }; quality: Quality };

/**
 * Connected ecosystem nodes. A field of points plus a web of connection lines
 * that forms during the business phase, fully matures as an ecosystem during
 * the Pertamina phase, and dissolves into the particle field at the close.
 */
export default function EcosystemNodes({ scrollRef, quality }: Props) {
  const group = useRef<THREE.Group>(null);
  const nodeMat = useRef<THREE.PointsMaterial>(null);
  const lineMat = useRef<THREE.LineBasicMaterial>(null);
  const low = quality === "low";

  const { positions, segments } = useMemo(
    () => buildNodes(low ? 70 : 160, low ? 90 : 260),
    [low]
  );

  useFrame((state, delta) => {
    const o = scrollRef.current;
    const t = state.clock.elapsedTime;
    const appear = range(o, 0.36, 0.6);
    const eco = range(o, 0.66, 0.9);
    const dissolve = range(o, 0.9, 1);

    if (group.current) {
      group.current.rotation.y += delta * 0.04;
      group.current.rotation.z = Math.sin(t * 0.06) * 0.08;
      const s = 1 + dissolve * 1.5;
      group.current.scale.set(s, s, s);
    }
    if (nodeMat.current) {
      nodeMat.current.opacity = appear * (1 - dissolve);
      nodeMat.current.size = (low ? 0.11 : 0.075) * (1 + eco * 0.6);
    }
    if (lineMat.current) {
      lineMat.current.opacity = eco * (1 - dissolve);
    }
  });

  return (
    <group ref={group}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          ref={nodeMat}
          size={0.075}
          color={GREEN}
          transparent
          opacity={0}
          sizeAttenuation
          depthWrite={false}
        />
      </points>

      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[segments, 3]} />
        </bufferGeometry>
        <lineBasicMaterial
          ref={lineMat}
          color={BRIGHT}
          transparent
          opacity={0}
          depthWrite={false}
        />
      </lineSegments>
    </group>
  );
}

/** Build node positions + connection segments around the structure. */
function buildNodes(nodeCount: number, segmentCount: number) {
  const positions = new Float32Array(nodeCount * 3);
  const pts: [number, number, number][] = [];
  for (let i = 0; i < nodeCount; i++) {
    const r = 2.8 + Math.random() * 2.6;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const x = r * Math.sin(phi) * Math.cos(theta);
    const y = r * Math.sin(phi) * Math.sin(theta) * 0.8;
    const z = r * Math.cos(phi);
    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;
    pts.push([x, y, z]);
  }

  const segments = new Float32Array(segmentCount * 6);
  for (let i = 0; i < segmentCount; i++) {
    const a = Math.floor(Math.random() * nodeCount);
    let b = Math.floor(Math.random() * nodeCount);
    if (b === a) b = (b + 1) % nodeCount;
    const p1 = pts[a];
    const p2 = pts[b];
    segments[i * 6] = p1[0];
    segments[i * 6 + 1] = p1[1];
    segments[i * 6 + 2] = p1[2];
    segments[i * 6 + 3] = p2[0];
    segments[i * 6 + 4] = p2[1];
    segments[i * 6 + 5] = p2[2];
  }
  return { positions, segments };
}