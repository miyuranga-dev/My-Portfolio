import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Sparkles, Code2 } from 'lucide-react';

const BOOT_LOGS = [
  "Initializing Prabodana Miyuranga portfolio environment...",
  "Loading React 18 & Framer Motion animation engines...",
  "Configuring MERN stack & REST API services...",
  "Establishing Google Gemini AI integration pipeline...",
  "Building UI canvas & interactive 3D scene...",
  "Portfolio environment initialized successfully. Welcome! [100%]"
];

export default function Preloader({ onComplete }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Step progression timer
    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < BOOT_LOGS.length - 1) {
          return prev + 1;
        }
        clearInterval(stepInterval);
        return prev;
      });
    }, 550);

    // Smooth progress bar counter (0 to 100 over ~3.5 seconds)
    const startTime = Date.now();
    const duration = 3300;

    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(pct);

      if (pct >= 100) {
        clearInterval(progressInterval);
        setTimeout(() => {
          onComplete();
        }, 400);
      }
    }, 40);

    return () => {
      clearInterval(stepInterval);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-50 bg-neutral-950 flex flex-col items-center justify-center p-6 text-white font-mono selection:bg-emerald-500/30 overflow-hidden"
    >
      {/* Background ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.12)_0%,transparent_70%)] pointer-events-none" />

      <div className="w-full max-w-xl bg-neutral-900/90 border border-emerald-500/30 rounded-2xl p-6 sm:p-8 shadow-[0_0_60px_rgba(16,185,129,0.2)] backdrop-blur-xl relative z-10">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-xs text-neutral-400 flex items-center gap-1.5 font-semibold">
              <Terminal size={14} className="text-emerald-400 animate-pulse" />
              boot@miyuranga-dev:~# init
            </span>
          </div>
          <span className="text-xs text-emerald-400 font-bold">{progress}%</span>
        </div>

        {/* Console Log Messages */}
        <div className="space-y-2.5 min-h-[140px] text-xs sm:text-sm text-neutral-300">
          {BOOT_LOGS.slice(0, currentStep + 1).map((log, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-start gap-2"
            >
              <span className="text-emerald-400 shrink-0 font-bold">&gt;</span>
              <span className={idx === currentStep ? "text-emerald-300 font-medium" : "text-neutral-400"}>
                {log}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Progress Bar Track */}
        <div className="mt-8 pt-4 border-t border-white/10">
          <div className="w-full h-2 rounded-full bg-neutral-950 border border-white/10 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-emerald-600 via-emerald-400 to-cyan-400 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between items-center mt-3 text-[11px] text-neutral-500">
            <span>STATUS: RUNNING</span>
            <span className="text-emerald-400 font-medium">PRESS ANYKEY TO SKIP</span>
          </div>
        </div>

      </div>
    </motion.div>
  );
}
