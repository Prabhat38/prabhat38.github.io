'use client';

import dynamic from 'next/dynamic';
import { useReducedMotion } from 'framer-motion';
import { useMediaQuery } from '@/hooks/useMediaQuery';

const ParticleScene = dynamic(
  () => import('./ParticleScene').then((m) => ({ default: m.ParticleScene })),
  { ssr: false }
);

const GRADIENT_FALLBACK =
  'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,217,255,0.08) 0%, transparent 70%)';

export function CanvasWrapper() {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="absolute inset-0 z-0">
      {isDesktop && !prefersReducedMotion ? (
        <ParticleScene />
      ) : (
        <div className="w-full h-full" style={{ background: GRADIENT_FALLBACK }} />
      )}
    </div>
  );
}
