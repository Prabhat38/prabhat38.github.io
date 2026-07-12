'use client';

import { useEffect, useRef } from 'react';
import { useMotionValue, useTransform, animate, motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

interface AnimatedCounterProps {
  end: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({
  end,
  prefix = '',
  suffix = '',
  duration = 1.8,
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      animate(count, end, {
        duration,
        ease: [0.16, 1, 0.3, 1],
      });
    }
  }, [isInView, count, end, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}
