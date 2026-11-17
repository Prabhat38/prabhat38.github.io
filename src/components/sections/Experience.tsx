'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { EXPERIENCE } from '@/lib/resume-data';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { TechBadge } from '@/components/ui/TechBadge';
import { GlassCard } from '@/components/ui/GlassCard';

gsap.registerPlugin(ScrollTrigger);

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!lineRef.current) return;
      gsap.from(lineRef.current, {
        scaleY: 0,
        transformOrigin: 'top center',
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          end: 'bottom 75%',
          scrub: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section id="experience" ref={sectionRef} className="section-padding max-w-7xl mx-auto">
      <SectionHeader
        eyebrow="Career"
        title="A decade in the making"
        subtitle="From computer science graduate to Technical Lead — and back to the classroom. Every role, every step."
      />

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-white/5">
          <div
            ref={lineRef}
            className="absolute inset-0 bg-gradient-to-b from-[#00D9FF] via-[#7B61FF] to-transparent origin-top"
          />
        </div>

        {/* Entries */}
        <div className="space-y-10">
          {EXPERIENCE.map((entry, i) => {
            const isEducation = entry.type === 'education';
            const isBreak = entry.type === 'break';

            const dotClass = isEducation
              ? entry.current
                ? 'border-[#7B61FF] bg-[#7B61FF] shadow-[0_0_12px_rgba(123,97,255,0.6)]'
                : 'border-[#7B61FF] bg-[#050A0F]'
              : isBreak
              ? 'border-white/20 bg-[#050A0F]'
              : entry.current
              ? 'border-[#00D9FF] bg-[#00D9FF] shadow-[0_0_12px_rgba(0,217,255,0.6)]'
              : 'border-[#7B61FF] bg-[#050A0F]';

            const glowColor = isEducation ? 'purple' : isBreak ? undefined : entry.current ? 'cyan' : 'purple';

            return (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-12 md:pl-20"
              >
                {/* Dot */}
                <div className={`absolute left-[12px] md:left-[26px] top-6 w-4 h-4 rounded-full border-2 ${dotClass}`} />

                <GlassCard
                  className={`p-6 md:p-7 ${isBreak ? 'opacity-70' : ''}`}
                  glowColor={glowColor}
                >
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-white font-bold text-lg">{entry.role}</h3>
                        {entry.current && (
                          <span className={`px-2 py-0.5 rounded-full text-xs font-mono border ${
                            isEducation
                              ? 'bg-[rgba(123,97,255,0.1)] border-[rgba(123,97,255,0.3)] text-[#7B61FF]'
                              : 'bg-[rgba(0,217,255,0.1)] border-[rgba(0,217,255,0.3)] text-[#00D9FF]'
                          }`}>
                            Current
                          </span>
                        )}
                        {isEducation && (
                          <span className="px-2 py-0.5 rounded-full bg-[rgba(123,97,255,0.08)] border border-[rgba(123,97,255,0.2)] text-[#7B61FF] text-xs font-mono">
                            Education
                          </span>
                        )}
                        {isBreak && (
                          <span className="px-2 py-0.5 rounded-full bg-white/[0.05] border border-white/10 text-[#8892A4] text-xs font-mono">
                            Career Break
                          </span>
                        )}
                      </div>
                      {entry.company && (
                        <p className={`font-medium text-sm mt-0.5 ${isEducation ? 'text-[#7B61FF]' : 'text-[#00D9FF]'}`}>
                          {entry.company}
                        </p>
                      )}
                    </div>
                    <span className="text-[#8892A4] text-sm font-mono shrink-0">{entry.period}</span>
                  </div>

                  {/* Metrics — work entries only */}
                  {!isEducation && !isBreak && entry.metrics.length > 0 && (
                    <div className="grid grid-cols-3 gap-1.5 sm:gap-2 mb-5">
                      {entry.metrics.map((m, mi) => (
                        <div
                          key={m.label}
                          className="rounded-xl p-2 sm:p-3 text-center border border-white/6 bg-white/[0.025]"
                        >
                          <div className="font-bold font-mono text-sm sm:text-lg md:text-2xl leading-none">
                            <span className="text-white">{m.value}</span>
                            <span
                              className="text-xs sm:text-sm md:text-base"
                              style={{ color: mi % 2 === 0 ? '#00D9FF' : '#7B61FF' }}
                            >
                              {m.suffix}
                            </span>
                          </div>
                          <div className="text-[#8892A4] text-[9px] sm:text-[10px] mt-1 leading-tight">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Bullets */}
                  {entry.bullets.length > 0 && (
                    <ul className="space-y-2 mb-5">
                      {entry.bullets.map((bullet, bi) => (
                        <li key={bi} className="flex gap-3 text-sm text-[#8892A4] leading-relaxed">
                          <span className={`mt-1 shrink-0 ${isEducation ? 'text-[#7B61FF]' : 'text-[#00D9FF]'}`}>▸</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Tags — work entries only */}
                  {!isEducation && !isBreak && entry.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {entry.tags.map((tag) => (
                        <TechBadge key={tag} name={tag} variant="default" size="sm" />
                      ))}
                    </div>
                  )}
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
