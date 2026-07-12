'use client';

import { motion } from 'framer-motion';

const STATS = [
  { value: '₹100M+', label: 'annual revenue enabled', color: '#00D9FF' },
  { value: '10K',    label: 'events per second',       color: '#7B61FF' },
  { value: '50M+',   label: 'mandates per year',       color: '#00D9FF' },
  { value: '3M+',    label: 'daily active users',      color: '#7B61FF' },
];

export function ImpactStrip() {
  return (
    <div className="w-full border-y border-white/6 bg-[#030810] relative overflow-hidden">
      {/* Subtle horizontal glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-16 bg-[rgba(0,217,255,0.04)] blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-7">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-y-6 gap-x-4 md:divide-x md:divide-white/6">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              className="flex flex-col items-center text-center md:px-6"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
            >
              <span
                className="text-2xl md:text-3xl font-bold font-mono tracking-tight"
                style={{ color: s.color }}
              >
                {s.value}
              </span>
              <span className="text-[11px] text-[#8892A4] mt-1.5 leading-tight uppercase tracking-wider">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
