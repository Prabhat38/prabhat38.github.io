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
            I&apos;m open to interesting conversations about distributed systems, backend architecture,
            or potential collaborations. Best reached via email.
          </p>
          <p className="text-[#8892A4] leading-relaxed">
            Currently based in <span className="text-[#00D9FF]">Noida, India</span> and open
            to remote roles, consulting, and technical discussions.
          </p>
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
