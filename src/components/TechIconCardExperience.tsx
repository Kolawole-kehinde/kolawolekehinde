"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, Float, useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import * as THREE from "three";

type TechModel = {
  modelPath: string;
  name: string;
  scale: [number, number, number];
  rotation: [number, number, number];
};

const TechIconCardExperience = ({ model }: { model: TechModel }) => {
  const gltf = useGLTF(model.modelPath);

  useEffect(() => {
    if (model.name === "Interactive Developer") {
      gltf.scene.traverse((child) => {
        if (child instanceof THREE.Mesh && child.name === "Object_5") {
          child.material = new THREE.MeshStandardMaterial({ color: "#ffffff" });
        }
      });
    }
  }, [gltf, model.name]);

  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ antialias: false, powerPreference: "high-performance" }}
      camera={{ position: [0, 0, 4], fov: 45 }}
    >
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Environment preset="city" />
      <Float speed={3} rotationIntensity={0.4} floatIntensity={0.6}>
        <group scale={model.scale} rotation={model.rotation}>
          <primitive object={gltf.scene} />
        </group>
      </Float>
    </Canvas>
  );
};

export default TechIconCardExperience;
