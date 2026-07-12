'use client';

import { motion } from 'framer-motion';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeader({ eyebrow, title, subtitle, centered = false }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-8 md:mb-16 ${centered ? 'text-center flex flex-col items-center' : ''}`}
    >
      {eyebrow && (
        <p className="text-xs font-mono font-semibold tracking-[0.3em] text-[#00D9FF] uppercase mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-white">
        {title}
      </h2>
      <div className={`mt-4 h-px w-16 bg-gradient-to-r from-[#00D9FF] to-transparent ${centered ? 'mx-auto' : ''}`} />
      {subtitle && (
        <p className={`mt-4 text-[#8892A4] max-w-xl leading-relaxed ${centered ? 'text-center' : ''}`}>{subtitle}</p>
      )}
    </motion.div>
  );
}
