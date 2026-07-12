'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import type { ContributionSection } from '@/types';

interface ContribModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  accentColor: 'cyan' | 'purple';
  contributions: ContributionSection[];
}

export function ContribModal({ isOpen, onClose, title, accentColor, contributions }: ContribModalProps) {
  const accent = accentColor === 'cyan' ? '#00D9FF' : '#7B61FF';

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-[#02020f]/95 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal content */}
          <motion.div
            className="relative z-10 flex flex-col w-full h-full"
            initial={{ scale: 0.97, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.97, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Header bar */}
            <div className="flex items-center justify-between px-5 md:px-8 h-14 border-b border-white/8 bg-[#050A0F]/80 backdrop-blur-md flex-shrink-0">
              <div className="flex items-center gap-3">
                <div
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ background: accent }}
                />
                <span className="text-white font-semibold text-sm md:text-base">{title}</span>
                <span className="hidden sm:inline text-[#8892A4] text-xs font-mono">· Contributions</span>
              </div>
              <motion.button
                onClick={onClose}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 text-[#8892A4] hover:text-white hover:border-white/20 transition-colors text-sm"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                aria-label="Close contributions"
              >
                <X size={15} />
                <span className="hidden sm:inline">Close</span>
                <span className="sm:hidden text-xs font-mono">ESC</span>
              </motion.button>
            </div>

            {/* Scrollable content — data-lenis-prevent stops Lenis from swallowing wheel events */}
            <div className="flex-1 overflow-y-auto bg-[#050A0F]" data-lenis-prevent>
              <div className="max-w-3xl mx-auto px-5 md:px-8 py-8 md:py-10">
                {contributions.map((section, si) => (
                  <motion.div
                    key={section.heading}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: si * 0.07, ease: [0.16, 1, 0.3, 1] }}
                    className="mb-8 last:mb-0"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className="text-xs font-mono font-semibold uppercase tracking-widest"
                        style={{ color: accent }}
                      >
                        {section.heading}
                      </span>
                      <div
                        className="flex-1 h-px opacity-20"
                        style={{ background: accent }}
                      />
                    </div>
                    <ul className="space-y-3">
                      {section.points.map((point, pi) => (
                        <motion.li
                          key={pi}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: si * 0.07 + pi * 0.04 }}
                          className="flex gap-3 text-[#C8D0E0] text-sm leading-relaxed"
                        >
                          <span
                            className="mt-1 flex-shrink-0 text-xs"
                            style={{ color: accent }}
                          >
                            →
                          </span>
                          {point}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              {/* Bottom gradient fade */}
              <div
                className="sticky bottom-0 h-8 pointer-events-none"
                style={{ background: 'linear-gradient(to top, #050A0F, transparent)' }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
