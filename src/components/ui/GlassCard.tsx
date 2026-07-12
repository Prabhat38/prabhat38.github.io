'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'cyan' | 'purple' | 'none';
  hover?: boolean;
  onClick?: () => void;
}

export function GlassCard({
  children,
  className,
  glowColor = 'none',
  hover = false,
  onClick,
}: GlassCardProps) {
  const glowStyle =
    glowColor === 'cyan'
      ? 'hover:border-[rgba(0,217,255,0.3)] hover:shadow-[0_0_30px_rgba(0,217,255,0.1)]'
      : glowColor === 'purple'
      ? 'hover:border-[rgba(123,97,255,0.3)] hover:shadow-[0_0_30px_rgba(123,97,255,0.1)]'
      : '';

  return (
    <motion.div
      className={cn(
        'glass rounded-2xl transition-all duration-300',
        glowStyle,
        hover && 'cursor-pointer',
        className
      )}
      whileHover={hover ? { y: -4 } : undefined}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
