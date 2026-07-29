import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Menu, X, Terminal as TerminalIcon, Download, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const links = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' }
];

export default function Navbar({ onOpenTerminal }) {
  const { scrollY } = useScroll();
  const { toast } = useToast();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
      setMobileMenuOpen(false);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 50);
  });

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" }
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          scrolled || mobileMenuOpen ? 'bg-neutral-950/85 backdrop-blur-md border-b border-white/10 shadow-2xl' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="font-display font-bold text-xl tracking-tighter text-white flex items-center gap-2.5 group">
            <span className="w-9 h-9 rounded-xl bg-emerald-500 text-neutral-950 flex items-center justify-center text-lg font-black shadow-[0_0_20px_rgba(16,185,129,0.5)] group-hover:scale-105 transition-transform">
              M
            </span>
            <div className="flex flex-col">
              <span className="inline-block group-hover:text-emerald-400 transition-colors font-bold text-base leading-none">
                Miyuranga<span className="text-emerald-400">-dev</span>
              </span>
              <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest leading-tight">
                Software Engineer
              </span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-5 lg:gap-7">
            {links.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-xs lg:text-sm font-mono text-neutral-300 hover:text-emerald-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            {/* Terminal Trigger */}
            <button
              onClick={onOpenTerminal}
              className="p-2 rounded-lg bg-white/5 hover:bg-emerald-500/10 border border-white/10 hover:border-emerald-500/30 text-emerald-400 transition-all"
              title="Launch Dev Terminal"
            >
              <TerminalIcon size={16} />
            </button>

            {/* Hire Me CTA Button */}
            <a 
              href="#contact"
              className="px-4 py-2 text-xs lg:text-sm font-mono font-bold rounded-xl bg-emerald-500 hover:bg-emerald-400 text-neutral-950 transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)]"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenTerminal}
              className="p-2 rounded-lg bg-white/5 text-emerald-400 border border-white/10"
            >
              <TerminalIcon size={18} />
            </button>
            <button 
              className="text-white p-2 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} className="text-emerald-400" /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </motion.nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-20 z-30 bg-neutral-950/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl md:hidden"
          >
            <div className="flex flex-col items-center py-8 gap-5 px-6">
              {links.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-mono text-neutral-300 hover:text-emerald-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}

              <div className="w-full h-px bg-white/10 my-2" />

              <button
                onClick={() => { setMobileMenuOpen(false); onOpenTerminal(); }}
                className="w-full py-3 text-xs font-mono font-semibold rounded-xl bg-neutral-900 border border-emerald-500/30 text-emerald-300 flex items-center justify-center gap-2"
              >
                <TerminalIcon size={16} /> Open CLI Dev Terminal
              </button>

              <a 
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 text-sm font-mono font-bold rounded-xl bg-emerald-500 text-neutral-950 text-center"
              >
                Hire Me / Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
