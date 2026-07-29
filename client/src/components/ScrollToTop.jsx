import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-8 right-8 z-50 p-3.5 rounded-2xl bg-neutral-900/90 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-500 hover:text-neutral-950 shadow-[0_0_20px_rgba(16,185,129,0.25)] backdrop-blur-md transition-all group"
        >
          <ArrowUp className="w-5 h-5 transition-transform group-hover:-translate-y-1" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
