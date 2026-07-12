'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Plus } from 'lucide-react';
import { CERTIFICATIONS } from '@/lib/resume-data';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function Certifications() {
  const isEmpty = CERTIFICATIONS.length === 0;

  return (
    <section id="certifications" className="section-padding bg-[#0D1521]/40 max-w-full">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="Credentials"
          title="Certifications"
          subtitle="Actively expanding into AI/ML — pursuing certifications to complement 7 years of production backend engineering."
        />

        {isEmpty ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl border border-dashed border-white/10 bg-white/[0.015] p-10 md:p-16 flex flex-col items-center justify-center text-center overflow-hidden"
          >
            {/* Background grid pattern */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(0,217,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,217,255,1) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />

            {/* Glow center */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-64 h-64 rounded-full bg-[rgba(0,217,255,0.04)] blur-3xl" />
            </div>

            <div className="relative">
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-[rgba(0,217,255,0.06)] border border-[rgba(0,217,255,0.15)] flex items-center justify-center mx-auto mb-5">
                <ShieldCheck className="text-[#00D9FF]" size={28} strokeWidth={1.5} />
              </div>

              <h3 className="text-white font-bold text-xl mb-2 text-center">In progress</h3>
              <p className="text-[#8892A4] text-sm max-w-sm leading-relaxed mb-8 text-center mx-auto">
                Currently pursuing AI/ML certifications to bridge deep backend expertise with
                modern machine learning engineering. Credentials will be added as earned.
              </p>

              {/* Placeholder cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto">
                {['AWS AI Practitioner', 'DeepLearning.AI ML Specialisation', 'Google ML Engineer'].map(
                  (name, i) => (
                    <motion.div
                      key={name}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      className="flex flex-col items-center gap-2 p-4 rounded-xl border border-white/5 bg-white/[0.02]"
                    >
                      <div className="w-8 h-8 rounded-lg border border-white/8 bg-white/[0.03] flex items-center justify-center">
                        <Plus size={14} className="text-[#8892A4]" />
                      </div>
                      <span className="text-[#8892A4] text-xs text-center leading-tight">{name}</span>
                    </motion.div>
                  )
                )}
              </div>
            </div>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CERTIFICATIONS.map((cert, i) => (
              <motion.a
                key={cert.id}
                href={cert.credentialUrl ?? '#'}
                target={cert.credentialUrl ? '_blank' : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group relative p-6 rounded-2xl border border-white/8 bg-[#0A1220] hover:border-[rgba(0,217,255,0.25)] transition-all duration-200 overflow-hidden"
                whileHover={{ y: -3 }}
              >
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00D9FF]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <ShieldCheck className="text-[#00D9FF] mb-3" size={22} strokeWidth={1.5} />
                <h3 className="text-white font-semibold text-base mb-1">{cert.title}</h3>
                <p className="text-[#8892A4] text-sm">{cert.issuer}</p>
                {cert.date && (
                  <p className="text-[#8892A4]/60 text-xs mt-2 font-mono">{cert.date}</p>
                )}
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
