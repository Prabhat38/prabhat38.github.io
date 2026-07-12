'use client';

import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ArchModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  src: string;
}

export function ArchModal({ isOpen, onClose, title, src }: ArchModalProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  function handleIframeLoad() {
    try {
      // Fire a resize event so Three.js recalculates camera aspect with final dimensions
      iframeRef.current?.contentWindow?.dispatchEvent(new Event('resize'));
    } catch {
      // cross-origin guard (no-op for same-origin files)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-[#02020f]/95 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal content */}
          <motion.div
            className="relative z-10 flex flex-col w-full h-full"
            initial={{ scale: 0.97, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.97, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Header bar */}
            <div className="flex items-center justify-between px-5 md:px-8 h-14 border-b border-white/8 bg-[#050A0F]/80 backdrop-blur-md flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#00D9FF] animate-pulse" />
                <span className="text-white font-semibold text-sm md:text-base">{title}</span>
                <span className="hidden sm:inline text-[#8892A4] text-xs font-mono">· Architecture Diagram</span>
              </div>
              <motion.button
                onClick={onClose}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 text-[#8892A4] hover:text-white hover:border-white/20 transition-colors text-sm"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                aria-label="Close architecture diagram"
              >
                <X size={15} />
                <span className="hidden sm:inline">Close</span>
                <span className="sm:hidden text-xs font-mono">ESC</span>
              </motion.button>
            </div>

            {/* Iframe — height capped to ~100vh-130px so the Three.js camera aspect ratio
                matches what a standalone browser window shows (browser chrome ≈ 130px).
                Without this, the extra height causes a narrower horizontal FOV = "zoomed in". */}
            <div className="flex-1 overflow-hidden bg-[#02020f] flex items-center">
              <iframe
                ref={iframeRef}
                key={src}
                src={src}
                className="w-full border-0"
                style={{ height: 'calc(100vh - 130px)' }}
                title={`${title} Architecture Diagram`}
                onLoad={handleIframeLoad}
                allowFullScreen
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
