'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';
import { CanvasWrapper } from '@/components/canvas/CanvasWrapper';

const NAME = 'Prabhat Kumar';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04, delayChildren: 0.3 },
  },
};

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

const letterVariants = {
  hidden: { opacity: 0, y: 60, rotateX: -40 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.55, ease: EASE },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: EASE },
  }),
};

const STATS = [
  { value: '5,000', unit: 'RPS served' },
  { value: '1,300+', unit: 'merchants served' },
  { value: '€1M+', unit: 'in annual fees' },
  { value: '6–25ms', unit: 'P99 latency' },
];

export function Hero() {
  const [statIdx, setStatIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setStatIdx((i) => (i + 1) % STATS.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  const handleScroll = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const stat = STATS[statIdx];

  return (
    <section className="relative w-full h-[100dvh] flex items-center justify-center overflow-hidden bg-[#050A0F]">
      {/* Radial glow */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(0,217,255,0.05) 0%, transparent 70%)',
        }}
      />

      {/* 3D Particle Network */}
      <CanvasWrapper />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Eyebrow: availability, then location as a separate statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6 flex flex-col items-center gap-2"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[rgba(0,217,255,0.25)] bg-[rgba(0,217,255,0.06)] text-[#00D9FF] text-xs font-mono font-medium tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D9FF] animate-pulse" />
            Open to Werkstudent roles
          </span>
          <span className="text-[#8892A4] text-xs font-mono tracking-wide">
            Currently located in Erfurt, Thüringen, Germany
          </span>
        </motion.div>

        {/* Name with letter animation */}
        <motion.h1
          className="text-5xl sm:text-7xl md:text-8xl font-bold text-white leading-[0.95] tracking-tight perspective-[800px]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          aria-label={NAME}
        >
          {NAME.split('').map((char, i) => (
            <motion.span
              key={i}
              variants={letterVariants}
              className="inline-block"
              style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
            >
              {char === ' ' ? ' ' : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          custom={0.8}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-4 text-lg md:text-xl text-[#8892A4] font-medium"
        >
          Ex-Technical Lead at Paytm · MSc Software Engineering
        </motion.p>

        {/* Typewriter stat line */}
        <motion.div
          custom={0.95}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-3 flex items-center justify-center gap-x-2 flex-wrap"
        >
          <span className="text-sm md:text-base text-[#8892A4]/70">Building distributed systems —</span>
          <div className="relative inline-flex items-center h-6 min-w-[180px] justify-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={statIdx}
                className="absolute inset-0 flex items-center justify-center text-[#00D9FF] font-mono font-bold text-sm md:text-base whitespace-nowrap"
                initial={{ y: 18, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -18, opacity: 0 }}
                transition={{ duration: 0.32, ease: EASE }}
              >
                {stat.value}&nbsp;{stat.unit}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          custom={1.1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <motion.button
            onClick={handleScroll}
            className="px-8 py-3 rounded-xl bg-[#00D9FF] text-[#050A0F] font-semibold text-sm hover:bg-[#00C8EE] transition-colors"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            View My Work
          </motion.button>
          <motion.a
            href="/resume-prabhat-kumar.pdf"
            download
            className="hidden px-8 py-3 rounded-xl border border-[rgba(0,217,255,0.35)] text-[#00D9FF] font-semibold text-sm hover:bg-[rgba(0,217,255,0.08)] transition-colors flex items-center gap-2"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Download size={14} />
            Resume
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={handleScroll}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[#8892A4]/60 hover:text-[#8892A4] transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <span className="text-xs font-mono tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
}
