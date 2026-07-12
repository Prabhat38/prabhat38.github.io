'use client';

import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { GlassCard } from './GlassCard';

interface MetricCardProps {
  label: string;
  value: string;   // e.g. "7", "10K", "₹100M", "3M"
  suffix?: string; // e.g. "+", " msg/s", "+"
  index?: number;
}

// Parse a display string like "₹100M" into { prefix, end, unit }
function parseValue(raw: string) {
  const prefix = raw.match(/^[₹$€£]*/)?.[0] ?? '';
  const rest = raw.slice(prefix.length);
  const unit = rest.match(/[A-Za-z]+$/)?.[0] ?? '';
  const num = parseFloat(rest) || 0;
  return { prefix, num, unit };
}

function CountUp({
  raw,
  suffix,
  color,
}: {
  raw: string;
  suffix: string;
  color: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v * 10) / 10);
  const hasRun = useRef(false);

  const { prefix, num, unit } = parseValue(raw);

  useEffect(() => {
    if (inView && !hasRun.current) {
      hasRun.current = true;
      animate(count, num, { duration: 1.8, ease: [0.16, 1, 0.3, 1] });
    }
  }, [inView, count, num]);

  return (
    <span ref={ref} className="font-bold font-mono tracking-tight" style={{ color: 'white' }}>
      {prefix}
      <motion.span>
        {rounded}
      </motion.span>
      <span style={{ color }}>{unit}{suffix}</span>
    </span>
  );
}

export function MetricCard({ label, value, suffix = '', index = 0 }: MetricCardProps) {
  const color = index % 2 === 0 ? '#00D9FF' : '#7B61FF';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.55, ease: [0.33, 1, 0.68, 1] }}
    >
      <GlassCard className="p-6 relative overflow-hidden" glowColor={index % 2 === 0 ? 'cyan' : 'purple'}>
        {/* Top accent */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px]"
          style={{
            background: `linear-gradient(to right, transparent, ${color}, transparent)`,
          }}
        />
        {/* Corner glow */}
        <div
          className="absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl opacity-10 pointer-events-none"
          style={{ background: color }}
        />

        <div className="text-4xl md:text-5xl leading-none mb-2">
          <CountUp raw={value} suffix={suffix} color={color} />
        </div>
        <div className="text-sm text-[#8892A4] font-medium">{label}</div>
      </GlassCard>
    </motion.div>
  );
}
