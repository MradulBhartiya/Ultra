"use client";

import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, ContactShadows, useGLTF } from "@react-three/drei";
import * as THREE from "three";

type MuscleId = string;

type MuscleAnatomyProps = {
  activeMuscles: MuscleId[];
};

/* ------------ MODEL ------------ */

function AnatomyModel({ activeMuscles }: { activeMuscles: string[] }) {
  const { scene } = useGLTF("/models/human.glb") as unknown as {
    scene: THREE.Group;
  };

  useEffect(() => {
    // optional debug
    scene.traverse((node: any) => {
      if (node.isMesh) {
        // console.log(node.name);
      }
    });
  }, [scene]);

  useEffect(() => {
    scene.scale.set(0.005, 0.005, 0.005);
    scene.position.set(0, -0.1, 0);
  }, [scene]);

  useEffect(() => {
    scene.traverse((node: any) => {
      if (node.isMesh) {
        node.castShadow = true;
        node.receiveShadow = true;

        const mat = node.material as THREE.MeshStandardMaterial | undefined;
        if (mat) {
          // remove texture so flat color applies
          // @ts-ignore
          if (mat.map) mat.map = null;

          mat.color = new THREE.Color("#ffffff");
          mat.emissive = new THREE.Color("#000000");
          mat.roughness = 0.5;
          mat.metalness = 0;
        }
      }
    });

    // highlight selected muscles
    activeMuscles.forEach((name) => {
      const muscle = scene.getObjectByName(name);
      if (muscle && (muscle as any).material) {
        const mat = (muscle as any).material as THREE.MeshStandardMaterial;
        mat.color.set("#ff3333");
        mat.emissive.set("#551111");
        mat.roughness = 0.4;
      }
    });
  }, [activeMuscles, scene]);

  return <primitive object={scene} />;
}

/* ------------ MAIN COMPONENT ------------ */

export default function MuscleAnatomy({ activeMuscles }: MuscleAnatomyProps) {
  return (
    <div className="w-full h-full">
      <Canvas
        className="w-full h-full"
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 1.4, 2.6], fov: 35 }}
        onCreated={({ gl }) => {
          // Enable shadow map (keep default map type to avoid export issues)
          gl.shadowMap.enabled = true;

          // If you want to set encoding and your three version exports it:
          // import { sRGBEncoding } from 'three'
          // gl.outputEncoding = sRGBEncoding;
          //
          // But many three versions changed the constant name — so leave it out
          // unless you confirm your installed three supports it.
        }}
      >
        <color attach="background" args={["#e9eaec"]} />

        <ambientLight intensity={0.7} />

        <directionalLight
          castShadow
          position={[6, 8, 5]}
          intensity={1.4}
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-left={-5}
          shadow-camera-right={5}
          shadow-camera-top={5}
          shadow-camera-bottom={-5}
          shadow-camera-near={0.5}
          shadow-camera-far={20}
        />

        <directionalLight position={[-4, 4, 2]} intensity={0.5} />
        <directionalLight position={[0, 4, -4]} intensity={0.4} />

        <Suspense fallback={null}>
          <AnatomyModel activeMuscles={activeMuscles} />
        </Suspense>

        <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.9, 0]}>
          <planeGeometry args={[20, 20]} />
          <meshStandardMaterial color="#e8e9eb" />
        </mesh>

        <ContactShadows position={[0, -0.9, 0]} opacity={0.4} width={12} height={12} blur={2.5} far={6} smooth />

        <OrbitControls
          enablePan={false}
          enableZoom
          enableRotate
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2 + 0.15}
          minDistance={2.2}
          maxDistance={3.6}
        />
      </Canvas>
    </div>
  );
}