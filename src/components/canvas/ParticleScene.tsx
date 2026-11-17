'use client';

import { Canvas } from '@react-three/fiber';
import { ParticleNetwork } from './ParticleNetwork';

export function ParticleScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 60 }}
      dpr={[1, 1.5]}
      gl={{ antialias: false, alpha: true, powerPreference: 'default' }}
      style={{ background: 'transparent' }}
    >
      <ParticleNetwork />
    </Canvas>
  );
}
