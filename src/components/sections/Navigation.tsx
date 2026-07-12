'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { NAV_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrollY = useScrollProgress();
  const isScrolled = scrollY > 50;

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    history.pushState(null, '', href);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'backdrop-blur-md bg-[#050A0F]/80 border-b border-white/5'
          : 'bg-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#"
          className="flex items-center gap-2"
          whileHover={{ scale: 1.03 }}
        >
          <div className="w-8 h-8 rounded-lg bg-[rgba(0,217,255,0.1)] border border-[rgba(0,217,255,0.25)] flex items-center justify-center">
            <span className="text-[#00D9FF] font-bold font-mono text-sm">PK</span>
          </div>
          <span className="hidden sm:block text-white font-semibold text-sm">
            Prabhat Kumar
          </span>
        </motion.a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <motion.button
                onClick={() => handleNavClick(link.href)}
                className="text-[#8892A4] text-sm hover:text-white transition-colors font-medium"
                whileHover={{ color: '#00D9FF' }}
              >
                {link.label}
              </motion.button>
            </li>
          ))}
        </ul>

        {/* Resume button */}
        <div className="hidden items-center">
          <motion.a
            href="/resume-prabhat-kumar.pdf"
            download
            className="px-4 py-1.5 rounded-lg border border-[rgba(0,217,255,0.4)] text-[#00D9FF] text-sm font-medium hover:bg-[rgba(0,217,255,0.08)] transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Resume
          </motion.a>
        </div>

        {/* Mobile hamburger */}
        <motion.button
          className="md:hidden text-[#8892A4] hover:text-white"
          onClick={() => setMobileOpen((v) => !v)}
          whileTap={{ scale: 0.9 }}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </motion.button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden border-t border-white/5 bg-[#050A0F]/95 backdrop-blur-md"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <ul className="px-6 py-4 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-[#8892A4] text-base hover:text-white transition-colors w-full text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li className="hidden">
                <a
                  href="/resume-prabhat-kumar.pdf"
                  download
                  className="text-[#00D9FF] text-base"
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
