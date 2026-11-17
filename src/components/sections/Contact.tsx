'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Globe, Code2 } from 'lucide-react';
import { CONTACT } from '@/lib/resume-data';
import { SectionHeader } from '@/components/ui/SectionHeader';
import type { ContactLink } from '@/types';

const ICONS = {
  email: Mail,
  linkedin: Globe,
  github: Code2,
} as const;

function useDecodedLinks(): ContactLink[] {
  const [links, setLinks] = useState<ContactLink[]>([]);

  useEffect(() => {
    setLinks(
      CONTACT.map((l) => ({
        ...l,
        href: l.encoded ? atob(l.href) : l.href,
        label: l.encodedLabel ? atob(l.label) : l.label,
      }))
    );
  }, []);

  return links;
}

export function Contact() {
  const links = useDecodedLinks();

  return (
    <section id="contact" className="section-padding max-w-7xl mx-auto">
      <SectionHeader
        eyebrow="Contact"
        title="Let&apos;s connect"
      />

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left: intro */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#8892A4] leading-relaxed mb-6">
            I&apos;m open to conversations about distributed systems, backend architecture, and
            payments infrastructure. Best reached by email.
          </p>
          <p className="text-[#8892A4] leading-relaxed mb-6">
            Based in <span className="text-[#00D9FF]">Erfurt, Thüringen, Germany</span>, studying full-time for
            an M.Sc. in Software Engineering at Fachhochschule Erfurt.
          </p>
          <div className="rounded-xl border border-[rgba(0,217,255,0.2)] bg-[rgba(0,217,255,0.04)] p-5">
            <p className="text-xs font-mono text-[#00D9FF] tracking-widest uppercase mb-3">
              What I&apos;m looking for
            </p>
            <ul className="space-y-2 text-[#8892A4] text-sm leading-relaxed">
              <li className="flex gap-2">
                <span className="text-[#00D9FF] shrink-0">▸</span>
                <span>
                  <span className="text-white">Working student roles and internships</span> —
                  available now, remote anywhere in Germany or on-site around Erfurt
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#00D9FF] shrink-0">▸</span>
                <span>
                  <span className="text-white">Master&apos;s thesis projects</span> with a company —
                  ideally in distributed systems or payments
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#00D9FF] shrink-0">▸</span>
                <span>
                  <span className="text-white">Full-time backend engineering</span> in Germany or the
                  EU once I graduate
                </span>
              </li>
            </ul>
            <p className="text-[#8892A4]/70 text-xs mt-4 leading-relaxed">
              Seven years of production backend experience. Available up to 20 hours per week during
              the semester and full-time during semester breaks. I work in English and am learning German.
            </p>
          </div>
        </motion.div>

        {/* Right: links — rendered only after client-side decode */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4"
        >
          {links.map((link, i) => {
            const Icon = ICONS[link.type];
            return (
              <motion.a
                key={link.type}
                href={link.href}
                target={link.type !== 'email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-xl border border-white/8 bg-white/[0.02] hover:border-[rgba(0,217,255,0.3)] hover:bg-[rgba(0,217,255,0.04)] transition-all duration-200"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 4 }}
              >
                <div className="w-10 h-10 rounded-lg bg-[rgba(0,217,255,0.08)] border border-[rgba(0,217,255,0.15)] flex items-center justify-center text-[#00D9FF] group-hover:shadow-[0_0_12px_rgba(0,217,255,0.3)] transition-shadow">
                  <Icon size={18} />
                </div>
                <div>
                  <div className="text-xs font-mono text-[#8892A4] capitalize mb-0.5">{link.type}</div>
                  <div className="text-white text-sm font-medium">{link.label}</div>
                </div>
                <div className="ml-auto text-[#8892A4] group-hover:text-[#00D9FF] transition-colors">
                  →
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </div>

      {/* Back to top */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-20 pt-8 border-t border-white/5 flex justify-center"
      >
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-[#8892A4]/60 hover:text-[#00D9FF] text-xs font-mono tracking-widest transition-colors flex items-center gap-2"
          whileHover={{ y: -2 }}
        >
          ↑ Back to top
        </motion.button>
      </motion.div>
    </section>
  );
}
