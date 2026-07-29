import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Scene from '../components/Scene';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Contact from '../components/Contact';
import CustomCursor from '../components/CustomCursor';
import TerminalWidget from '../components/TerminalWidget';
import Preloader from '../components/Preloader';
import { AnimatePresence } from 'framer-motion';

export default function Home() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Allow clicking anywhere to skip preloader if user prefers
  useEffect(() => {
    const handleKeyDown = () => setLoading(false);
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="bg-neutral-950 min-h-screen text-foreground selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden">
      {/* 5-second Terminal Loading Animation */}
      <AnimatePresence>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {/* Custom Glowing Cursor */}
      <CustomCursor />

      {/* Interactive CLI Terminal Gadget Modal */}
      <TerminalWidget 
        isOpen={terminalOpen} 
        onClose={() => setTerminalOpen(false)} 
      />

      {/* Persistent Animated Particle Canvas */}
      <Scene />
      
      {/* Navigation Header */}
      <Navbar onOpenTerminal={() => setTerminalOpen(true)} />

      {/* Main Sections */}
      <main className="relative z-10">
        <Hero onOpenTerminal={() => setTerminalOpen(true)} isPreloaderLoading={loading} />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
    </div>
  );
}
