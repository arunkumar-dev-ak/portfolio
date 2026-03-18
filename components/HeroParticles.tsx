"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { MotionValue, useTransform } from "framer-motion";

interface HeroParticlesProps {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

function Particles({ mouseX, mouseY }: HeroParticlesProps) {
  const pointsRef = useRef<THREE.Points>(null);

  const [particles] = useState(() => {
    const count = 2000;
    const positions = new Float32Array(count * 3);
    const radius = 4.5;

    for (let i = 0; i < count; i++) {
      // Distribute points evenly in a sphere
      const r = radius * Math.cbrt(Math.random());
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi) - 1; // Offset to center more in view
    }

    return positions;
  });

  const rotX = useTransform(mouseY, [-500, 500], [0.1, -0.1]);
  const rotY = useTransform(mouseX, [-500, 500], [0.1, -0.1]);

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x =
        rotX.get() + Math.sin(clock.getElapsedTime() * 0.1) * 0.1;
      pointsRef.current.rotation.y =
        rotY.get() + Math.cos(clock.getElapsedTime() * 0.1) * 0.1;
    }
  });

  return (
    <Points
      ref={pointsRef}
      positions={particles}
      stride={3}
      frustumCulled={false}>
      <PointMaterial
        transparent
        color="#60a5fa"
        size={0.02}
        sizeAttenuation
        depthWrite={false}
        opacity={0.8}
      />
    </Points>
  );
}

export default function HeroParticles({ mouseX, mouseY }: HeroParticlesProps) {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <Particles mouseX={mouseX} mouseY={mouseY} />
      </Canvas>
    </div>
  );
}
