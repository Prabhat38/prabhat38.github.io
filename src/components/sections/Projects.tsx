'use client';

import { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Network, Layers } from 'lucide-react';
import { PROJECTS } from '@/lib/resume-data';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { TechBadge } from '@/components/ui/TechBadge';
import { ArchModal } from '@/components/ui/ArchModal';
import { ContribModal } from '@/components/ui/ContribModal';
import type { Project } from '@/types';

const CATEGORY_LABEL: Record<string, string> = {
  backend: 'Backend',
  realtime: 'Real-time',
  messaging: 'Messaging',
  infra: 'Infrastructure',
  search: 'Search',
  ml: 'ML Pipeline',
  notification: 'Notifications',
};

const SPRING = { stiffness: 200, damping: 22, mass: 0.6 };

type HoverZone = 'left' | 'right' | null;

function ProjectCard({
  project,
  index,
  onViewArch,
  onViewContrib,
}: {
  project: Project;
  index: number;
  onViewArch: (project: Project) => void;
  onViewContrib: (project: Project) => void;
}) {
  const isCyan = project.accentColor === 'cyan';
  const accent = isCyan ? '#00D9FF' : '#7B61FF';
  const accentBg = isCyan ? 'rgba(0,217,255,0.12)' : 'rgba(123,97,255,0.12)';
  const accentBorder = isCyan ? 'rgba(0,217,255,0.2)' : 'rgba(123,97,255,0.2)';

  const cardRef = useRef<HTMLDivElement>(null);
  const rotX = useMotionValue(0);
  const rotY = useMotionValue(0);
  const springX = useSpring(rotX, SPRING);
  const springY = useSpring(rotY, SPRING);
  const [hoverZone, setHoverZone] = useState<HoverZone>(null);

  const hasContrib = !!project.contributions?.length;
  const hasArch = !!project.archDiagramPath;

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = cardRef.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    rotX.set(-y * 11);
    rotY.set(x * 13);
    setHoverZone((e.clientX - left) / width < 0.5 ? 'left' : 'right');
  }

  function handleMouseLeave() {
    rotX.set(0);
    rotY.set(0);
    setHoverZone(null);
  }

  function handleClick(e: React.MouseEvent<HTMLDivElement>) {
    if ((e.target as Element).closest('button')) return;
    if (hoverZone === 'left' && hasContrib) onViewContrib(project);
    else if (hoverZone === 'right' && hasArch) onViewArch(project);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className=""
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        style={{
          rotateX: springX,
          rotateY: springY,
          transformPerspective: 900,
          cursor: (hoverZone === 'left' && hasContrib) || (hoverZone === 'right' && hasArch) ? 'pointer' : 'default',
        }}
        className="group relative h-full rounded-2xl border border-white/8 bg-[#0A1220] overflow-hidden"
        whileHover={{ borderColor: accentBorder }}
        transition={{ duration: 0.2 }}
      >
        {/* Top accent line */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px] opacity-60 group-hover:opacity-100 transition-opacity"
          style={{ background: `linear-gradient(to right, transparent, ${accent}, transparent)` }}
        />

        {/* Subtle vertical split hint — visible on hover */}
        <div
          className="absolute top-0 bottom-0 left-1/2 w-px pointer-events-none"
          style={{
            background: `linear-gradient(to bottom, transparent, ${accent}28, transparent)`,
            opacity: hoverZone !== null ? 1 : 0,
            transition: 'opacity 0.2s ease',
          }}
        />

        {/* Corner glow — shifts toward hovered zone */}
        <div
          className="absolute top-0 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-10 pointer-events-none"
          style={{
            background: accent,
            left: hoverZone === 'left' ? '-2rem' : 'calc(100% - 8rem)',
            transition: 'left 0.25s ease, opacity 0.5s ease',
          }}
        />

        <div className="p-6 md:p-7 flex flex-col h-full">
          {/* Top row: category badge only */}
          <div className="flex items-center mb-4">
            <span
              className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-mono font-medium border"
              style={{ color: accent, background: `${accent}14`, borderColor: accentBorder }}
            >
              {CATEGORY_LABEL[project.category] ?? project.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-white font-bold text-lg md:text-xl mb-2 leading-snug">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-[#8892A4] text-sm leading-relaxed mb-5 flex-1">
            {project.description}
          </p>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-3 mb-5 p-3 rounded-xl border border-white/5 bg-white/[0.02]">
            {project.metrics.map((m) => (
              <div key={m.label} className="text-center">
                <div className="font-bold font-mono text-base md:text-lg leading-none mb-1">
                  <span className="text-white">{m.value}</span>
                  <span style={{ color: accent }} className="text-sm">{m.suffix}</span>
                </div>
                <div className="text-[#8892A4] text-[10px] leading-tight">{m.label}</div>
              </div>
            ))}
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <TechBadge key={tech} name={tech} variant={isCyan ? 'cyan' : 'purple'} size="sm" />
            ))}
          </div>

          {/* Bottom action bar — Contributions | Architecture */}
          {(hasContrib || hasArch) && (
            <div
              className="flex -mx-6 md:-mx-7 -mb-6 md:-mb-7 mt-5 border-t overflow-hidden rounded-b-2xl"
              style={{ borderColor: 'rgba(255,255,255,0.05)' }}
            >
              {hasContrib && (
                <button
                  className="flex-1 flex items-center justify-center gap-1.5 py-3 text-xs font-medium transition-all duration-200 cursor-pointer"
                  style={{
                    color: hoverZone === 'left' ? accent : '#8892A4',
                    background: hoverZone === 'left' ? accentBg : 'transparent',
                  }}
                  onClick={() => onViewContrib(project)}
                >
                  <Layers size={11} />
                  Contributions
                </button>
              )}
              {hasContrib && hasArch && (
                <div className="w-px flex-shrink-0" style={{ background: 'rgba(255,255,255,0.05)' }} />
              )}
              {hasArch && (
                <button
                  className="flex-1 flex items-center justify-center gap-1.5 py-3 text-xs font-medium transition-all duration-200 cursor-pointer"
                  style={{
                    color: hoverZone === 'right' ? accent : '#8892A4',
                    background: hoverZone === 'right' ? accentBg : 'transparent',
                  }}
                  onClick={() => onViewArch(project)}
                >
                  <Network size={11} />
                  Architecture
                </button>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  const [activeArch, setActiveArch] = useState<Project | null>(null);
  const [activeContrib, setActiveContrib] = useState<Project | null>(null);

  return (
    <section id="projects" className="section-padding max-w-full">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Work"
          title="Systems I've built"
          subtitle="Production systems handling hundreds of millions of transactions. Each card shows what I contributed and how it's architected."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onViewArch={setActiveArch}
              onViewContrib={setActiveContrib}
            />
          ))}
        </div>
      </div>

      <ArchModal
        isOpen={!!activeArch}
        onClose={() => setActiveArch(null)}
        title={activeArch?.title ?? ''}
        src={activeArch?.archDiagramPath ?? ''}
      />

      <ContribModal
        isOpen={!!activeContrib}
        onClose={() => setActiveContrib(null)}
        title={activeContrib?.title ?? ''}
        accentColor={activeContrib?.accentColor ?? 'cyan'}
        contributions={activeContrib?.contributions ?? []}
      />
    </section>
  );
}
