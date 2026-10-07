import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  SiGithub,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiGooglegemini,
  SiTailwindcss,
  SiNextdotjs
} from "react-icons/si";
import { FaLinkedin, FaEnvelope, FaCheck } from "react-icons/fa";
import {
  ChevronDown,
  Download,
  Terminal as TerminalIcon,
  Sparkles,
  Copy,
  Calendar,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Hero({ onOpenTerminal, isPreloaderLoading }) {
  const name = "Prabodana Miyuranga";
  const { toast } = useToast();

  const roles = [
    "Full-Stack Developer",
    "Building Scalable Web Applications",
    "AI Integration Specialist",
    "MERN Stack Engineer",
    "Creating Digital Solutions For Businesses",
    "ERP System Developer",
    "Modern UI/UX Developer",
    "Software Engineering Undergraduate",
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (isPreloaderLoading) return;

    const role = roles[currentRoleIndex];
    let typingSpeed = isDeleting ? 30 : 80;

    if (!isDeleting && displayedText === role) {
      typingSpeed = 2200;
    } else if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      typingSpeed = 400;
    }

    const timeout = setTimeout(() => {
      setDisplayedText((prev) => {
        if (isDeleting) {
          return role.substring(0, prev.length - 1);
        } else {
          return role.substring(0, prev.length + 1);
        }
      });

      if (!isDeleting && displayedText === role) {
        setIsDeleting(true);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentRoleIndex, roles, isPreloaderLoading]);

  return (
    <section className="relative z-10 flex min-h-[100dvh] flex-col items-center justify-center px-6 pt-24 pb-12 text-center overflow-hidden">
      {/* 3D Grid Floor */}
      <div
        className="absolute inset-x-0 bottom-0 h-[65vh] z-[-1] pointer-events-none opacity-30"
        style={{
          backgroundImage: `linear-gradient(rgba(16,185,129,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.08) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          transform: "perspective(500px) rotateX(60deg)",
          transformOrigin: "bottom center",
          animation: "grid-move 3s linear infinite",
        }}
      />

      {/* Ambient Floating Glow Orbs */}
      <div
        className="absolute top-[12%] left-[10%] w-[450px] h-[450px] bg-emerald-500/10 rounded-full blur-[120px] animate-float pointer-events-none"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="absolute top-[25%] right-[10%] w-[350px] h-[350px] bg-emerald-400/10 rounded-full blur-[100px] animate-float pointer-events-none"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-[20%] left-[20%] w-[250px] h-[250px] bg-cyan-500/10 rounded-full blur-[80px] animate-float pointer-events-none"
        style={{ animationDelay: "4s" }}
      />

      {/* Recruiter Live Status Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={
          isPreloaderLoading ? { opacity: 0, y: -20 } : { opacity: 1, y: 0 }
        }
        transition={{ duration: 0.6 }}
        className="mb-6 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.2)]"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-emerald-400" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
        </span>
        <span className="font-mono text-xs font-semibold tracking-wide uppercase md:text-sm text-emerald-300">
          Available
        </span>
      </motion.div>

      {/* Name Title */}
      <div className="max-w-5xl mb-4 overflow-hidden">
        <motion.h1 className="text-4xl font-extrabold leading-none tracking-tight font-display sm:text-6xl md:text-7xl lg:text-8xl">
          {name.split(" ").map((word, idx) => (
            <span
              key={idx}
              className="inline-block mr-[0.22em] bg-gradient-to-b from-white via-neutral-100 to-neutral-400 bg-clip-text text-transparent"
            >
              {word.split("").map((char, charIdx) => (
                <motion.span
                  key={charIdx}
                  className="inline-block"
                  initial={{ opacity: 0, y: 40, rotateX: -90 }}
                  animate={
                    isPreloaderLoading
                      ? { opacity: 0, y: 40, rotateX: -90 }
                      : { opacity: 1, y: 0, rotateX: 0 }
                  }
                  transition={{
                    duration: 0.7,
                    delay: 0.08 * idx + 0.02 * charIdx,
                    ease: [0.2, 0.65, 0.3, 0.9],
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.h1>
      </div>

      {/* Typing Role Banner */}
      <div className="flex items-center justify-center h-10 mb-6">
        <span className="font-mono text-xl sm:text-2xl md:text-3xl text-emerald-400 font-semibold drop-shadow-[0_0_12px_rgba(16,185,129,0.4)]">
          {displayedText}
          <span className="animate-pulse text-emerald-300">|</span>
        </span>
      </div>

      {/* Subtitle Bio */}
      <motion.p
        className="max-w-2xl mb-8 font-sans text-base leading-relaxed text-neutral-300 sm:text-lg md:text-xl"
        initial={{ opacity: 0 }}
        animate={isPreloaderLoading ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Software Engineering undergraduate passionate about building scalable
        full-stack applications, AI-powered solutions, and efficient software
        architectures. I focus on writing clean, maintainable code while
        developing products that deliver meaningful user experiences and solve
        practical challenges.
      </motion.p>

      {/* Tech Stack Strip */}
      <motion.div
        className="flex flex-wrap items-center justify-center gap-3 mb-10 font-mono text-xs text-neutral-400"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
      >
        <span className="text-neutral-500 uppercase tracking-widest text-[11px] font-semibold mr-1">
          Stack:
        </span>
        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-emerald-300">
          <SiReact className="text-emerald-400" /> React.js
        </span>
        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-emerald-300">
           <SiNextdotjs className="text-white" /> Next.js
        </span>
        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-emerald-300">
          <SiNodedotjs className="text-emerald-500" /> Node.js
        </span>
        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-emerald-300">
          <SiMongodb className="text-emerald-400" /> MongoDB
        </span>
        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-emerald-300">
          <SiGooglegemini className="text-cyan-400" /> Gemini AI
        </span>
        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-emerald-300">
          <SiTailwindcss className="text-sky-400" /> Tailwind
        </span>
      </motion.div>

      {/* Recruiter Action Buttons */}
      <motion.div
        className="flex flex-wrap items-center justify-center gap-4 mb-12"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.7 }}
      >
        {/* Contact / Hire button */}
        <a
          href="#contact"
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 text-neutral-950 font-bold hover:bg-emerald-400 transition-all shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:shadow-[0_0_35px_rgba(16,185,129,0.6)] font-sans text-sm md:text-base"
        >
          <Calendar size={18} />
          <span>Contact Me</span>
        </a>

        {/* Download Resume Button */}
        <a
          href="/cv/Prabodana-Miyuranga-CV.pdf"
          download="Prabodana-Miyuranga-CV.pdf"
          className="flex items-center gap-2 px-5 py-3 font-sans text-sm font-medium transition-all border rounded-xl border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/10"
        >
          <Download size={18} />
          <span>Download CV</span>
        </a>

        {/* CLI Terminal Launcher Button */}
        <button
          onClick={onOpenTerminal}
          className="flex items-center gap-2 px-4 py-3 font-mono text-xs transition-all border rounded-xl bg-neutral-900 border-emerald-500/30 text-emerald-300 hover:border-emerald-400 group"
        >
          <TerminalIcon
            size={16}
            className="transition-transform text-emerald-400 group-hover:rotate-12"
          />
          <span>Launch CLI Dev Mode</span>
        </button>
      </motion.div>

      {/* Social Links */}
      <motion.div
        className="flex items-center gap-6 text-neutral-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.1 }}
      >
        <a
          href="https://github.com/miyuranga-dev"
          target="_blank"
          rel="noreferrer"
          className="p-2 transition-colors rounded-full hover:text-emerald-400 hover:bg-white/5"
          title="GitHub Profile"
        >
          <SiGithub size={24} />
          <span className="sr-only">GitHub</span>
        </a>
        <a
          href="https://linkedin.com/in/miyuranga-dev"
          target="_blank"
          rel="noreferrer"
          className="p-2 transition-colors rounded-full hover:text-emerald-400 hover:bg-white/5"
          title="LinkedIn Profile"
        >
          <FaLinkedin size={24} />
          <span className="sr-only">LinkedIn</span>
        </a>
        <a
          href="mailto:miyuranga.dev@gmail.com"
          className="p-2 transition-colors rounded-full hover:text-emerald-400 hover:bg-white/5"
          title="Direct Email"
        >
          <FaEnvelope size={24} />
          <span className="sr-only">Email</span>
        </a>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute -translate-x-1/2 bottom-6 left-1/2 text-neutral-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 1 }}
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center font-mono text-xs transition-colors text-neutral-400 hover:text-emerald-400"
        >
          <span className="mb-1">EXPLORE</span>
          <ChevronDown size={20} className="text-emerald-500/70" />
        </motion.a>
      </motion.div>
    </section>
  );
}
