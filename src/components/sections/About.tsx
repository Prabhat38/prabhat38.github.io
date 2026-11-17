'use client';

import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ABOUT } from '@/lib/resume-data';
import { PROFILE_PHOTO } from '@/lib/profile-photo';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { MetricCard } from '@/components/ui/MetricCard';

function ProfilePhoto() {
  const [imgLoaded, setImgLoaded] = useState(false);
  const imgRef = useCallback((el: HTMLImageElement | null) => {
    if (el?.complete) setImgLoaded(true);
  }, []);

  return (
    <div className="flex justify-center md:justify-start mb-8">
      <div className="relative">
        {/* Ambient glow */}
        <div className="absolute -inset-4 rounded-full bg-[rgba(0,217,255,0.06)] blur-2xl pointer-events-none" />

        {/* Slowly rotating dashed ring */}
        <motion.div
          className="absolute -inset-2 rounded-full border border-dashed border-[rgba(0,217,255,0.25)]"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
        />

        {/* Solid inner ring */}
        <div
          className="relative w-40 h-40 md:w-48 md:h-48 rounded-full border-2 border-[rgba(0,217,255,0.45)]"
          style={{ boxShadow: '0 0 24px rgba(0,217,255,0.15), inset 0 0 24px rgba(0,217,255,0.04)' }}
        >
          {/* Dark background + initials fallback */}
          <div className="w-full h-full rounded-full overflow-hidden bg-[#06101E] flex items-center justify-center">
            <span className="text-4xl md:text-5xl font-bold font-mono text-[#00D9FF] select-none tracking-tight">
              PK
            </span>

            {/* Photo embedded as base64 — no HTTP request, no file to scrape */}
            {PROFILE_PHOTO && (
              <img
                src={PROFILE_PHOTO}
                alt="Prabhat Kumar"
                ref={imgRef}
                className={`absolute inset-0 w-full h-full object-cover object-center rounded-full transition-opacity duration-500 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setImgLoaded(true)}
              />
            )}
          </div>
        </div>

        {/* Cyan dot accent bottom-right */}
        <div className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-[#00D9FF] border-2 border-[#050A0F] shadow-[0_0_8px_rgba(0,217,255,0.7)]" />
      </div>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="section-padding max-w-7xl mx-auto">
      <SectionHeader
        eyebrow="About Me"
        title="Engineer at scale"
        subtitle="I build backend infrastructure, ship it to production, and stay accountable for it — not just until launch, but for the years that follow."
      />

      <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
        {/* Left: Photo + Bio */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <ProfilePhoto />

          <div className="space-y-4 text-[#8892A4] leading-relaxed">
            <p className="text-lg text-white/90">
              {ABOUT.summary}
            </p>
            <p>
              The work is concrete: a catalog API at 5,000 RPS with zero unplanned downtime over three years of my
              ownership; a Percolator-based fee engine at P99 under 10ms that enables ₹100M+ in annual revenue;
              an SMS parsing pipeline at 10K msg/s where I recommended shutting down the initial approach at 10%
              accuracy and rebuilt it with a custom NER model that reached 80%.
            </p>
            <p>
              I design for the failure case first — tiered fallbacks, circuit breakers, retry queues, dead-letter
              handling — because in payment infrastructure, graceful degradation is the baseline expectation, not a
              nice-to-have. I set up the observability stack before go-live on every service I own: dashboards,
              alerts, and runbooks that explain the why, not just the what.
            </p>
            <p>
              Currently based in{' '}
              <span className="text-[#00D9FF]">Erfurt, Germany</span> — pursuing a Masters in Software Engineering at Fachhochschule Erfurt. Open to backend engineering roles,
              technical collaborations, and conversations about distributed systems.
            </p>
          </div>

        </motion.div>

        {/* Right: Metrics grid */}
        <div className="grid grid-cols-2 gap-4">
          {ABOUT.metrics.map((metric, i) => (
            <MetricCard
              key={metric.label}
              value={metric.value}
              suffix={metric.suffix}
              label={metric.label}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
