// import React from 'react'
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Noise, ChromaticAberration, DepthOfField, Bloom, EffectComposer, } from '@react-three/postprocessing';

import CanvasLoader from "../Loader";

const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf');
  // const computer = useGLTF('./working_space/scene.gltf');
  // const computer = useGLTF('./dorm_room/scene.gltf');

  return (
    <mesh>
      <hemisphereLight intensity={0.001} groundColor="black"/>
      <pointLight intensity={0.5} position={[0, 3, 0]} />
      <primitive 
      object={computer.scene} 
      scale={0.9} 
      position={[0, -.25, -1.5]}
      rotation={[-0.01, 0 , -0.01]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }} // Move the camera diagonally upward
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2} // Limit vertical angle to maintain the isometric look
          minPolarAngle={Math.PI / 2} // Prevent looking too high/low
          target={[0, 4.2, 0]} // Center the view on the room
        />
        <Computers />
        <EffectComposer>
          <Bloom 
            intensity={5}
            luminanceThreshold={0} 
            luminanceSmoothing={0.9}
          />
          <DepthOfField
            focusDistance={1} // Distance to focus point
            focalLength={0.2} // Depth of field intensity
            bokehScale={2} // Bokeh effect size
          />
          <ChromaticAberration
            offset={[0.002, 0.005]} // Color separation offset
          />
        </EffectComposer>
      </Suspense>
    </Canvas>

  )
}

export default ComputersCanvas