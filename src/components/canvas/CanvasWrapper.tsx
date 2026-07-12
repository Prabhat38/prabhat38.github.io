'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';

const ParticleNetwork = dynamic(
  () => import('./ParticleNetwork').then((m) => ({ default: m.ParticleNetwork })),
  { ssr: false }
);

export function CanvasWrapper() {
  return (
    <div className="absolute inset-0 z-0">
      {/* Mobile fallback */}
      <div
        className="md:hidden w-full h-full"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,217,255,0.08) 0%, transparent 70%)',
        }}
      />
      {/* 3D canvas for tablet/desktop */}
      <div className="hidden md:block w-full h-full">
        <Canvas
          camera={{ position: [0, 0, 10], fov: 60 }}
          dpr={[1, 1.5]}
          gl={{
            antialias: false,
            alpha: true,
            powerPreference: 'default',
          }}
          style={{ background: 'transparent' }}
        >
          <Suspense fallback={null}>
            <ParticleNetwork />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}
