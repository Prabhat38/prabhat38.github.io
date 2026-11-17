'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { SKILLS } from '@/lib/resume-data';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { TechBadge } from '@/components/ui/TechBadge';
import { CATEGORY_META } from '@/components/ui/SkillSphere';

const SkillSphere = dynamic(
  () => import('@/components/ui/SkillSphere').then((m) => ({ default: m.SkillSphere })),
  { ssr: false, loading: () => <div style={{ height: 420 }} /> }
);

const ICON_MAP: Record<string, string> = {
  backend:      '⟨/⟩',
  messaging:    '↔',
  databases:    '◫',
  testing:      '✓',
  observability:'◎',
  cloud:        '☁',
  ai:           '✦',
  product:      '◈',
  languages:    '⬡',
};

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-[#0D1521]/40 max-w-full">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Tech Stack"
          title="Tools of the trade"
          subtitle="Seven years of building production systems leaves you with strong opinions about which tools belong in which situation."
        />

        {/* ── 3D Sphere — desktop (md+) ── */}
        <div className="hidden md:block">
          <SkillSphere />

          {/* Category legend */}
          <div className="flex flex-wrap justify-center gap-4 mt-2 mb-2">
            {CATEGORY_META.map((cat) => (
              <div key={cat.id} className="flex items-center gap-1.5">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ background: cat.color, boxShadow: `0 0 6px ${cat.color}88` }}
                />
                <span className="text-[11px] text-[#8892A4] font-mono">{cat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Category grid — all viewports; the sphere above is decorative ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-2 md:mt-8">
          {SKILLS.map((category, i) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.07, ease: [0.33, 1, 0.68, 1] }}
              className="glass rounded-2xl p-6 border border-white/8 hover:border-[rgba(0,217,255,0.2)] transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-[rgba(0,217,255,0.08)] border border-[rgba(0,217,255,0.15)] flex items-center justify-center text-[#00D9FF] font-mono text-sm">
                  {ICON_MAP[category.id] ?? '●'}
                </div>
                <h3 className="font-semibold text-white text-sm">{category.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <TechBadge key={skill} name={skill} variant="default" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
