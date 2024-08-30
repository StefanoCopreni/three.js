import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Model() {
  const { scene } = useGLTF('/ball/scene.gltf');
  return <primitive object={scene} scale={0.5} />;
}

export default function App() {
  return (
    <Canvas camera={{ near: 0.1, far: 1000 }}>
      <ambientLight />
      <OrbitControls minDistance={2} maxDistance={10} />
      <Model />
    </Canvas>
  );
}
