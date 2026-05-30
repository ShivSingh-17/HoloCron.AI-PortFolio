"use client";

import { Canvas } from "@react-three/fiber";
import { Stars, Sparkles } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function RotatingSphere() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.05;
      
      // Slight reaction to mouse
      const targetX = (state.pointer.x * Math.PI) / 10;
      const targetY = (state.pointer.y * Math.PI) / 10;
      meshRef.current.rotation.y += (targetX - meshRef.current.rotation.y) * 0.1;
      meshRef.current.rotation.x += (targetY - meshRef.current.rotation.x) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[2, 1]} />
      <meshBasicMaterial color="#007BFF" wireframe transparent opacity={0.15} />
    </mesh>
  );
}

export default function Background3D() {
  return (
    <div className="fixed inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <color attach="background" args={["#050505"]} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <Sparkles count={100} scale={10} size={2} speed={0.4} opacity={0.2} color="#D2042D" />
        <RotatingSphere />
      </Canvas>
    </div>
  );
}
