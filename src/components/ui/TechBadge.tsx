'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TechBadgeProps {
  name: string;
  variant?: 'default' | 'cyan' | 'purple';
  size?: 'sm' | 'md';
}

export function TechBadge({ name, variant = 'default', size = 'md' }: TechBadgeProps) {
  return (
    <motion.span
      className={cn(
        'inline-flex items-center rounded-full font-mono font-medium border transition-colors',
        size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-xs',
        variant === 'cyan'
          ? 'bg-[rgba(0,217,255,0.1)] border-[rgba(0,217,255,0.25)] text-cyan'
          : variant === 'purple'
          ? 'bg-[rgba(123,97,255,0.1)] border-[rgba(123,97,255,0.25)] text-[#7B61FF]'
          : 'bg-white/5 border-white/10 text-[#8892A4]'
      )}
      whileHover={{
        scale: 1.05,
        backgroundColor:
          variant === 'cyan'
            ? 'rgba(0,217,255,0.2)'
            : variant === 'purple'
            ? 'rgba(123,97,255,0.2)'
            : 'rgba(255,255,255,0.1)',
      }}
    >
      {name}
    </motion.span>
  );
}
