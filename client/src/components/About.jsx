import { motion, useMotionValue, useTransform, useInView, animate } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Award, Globe, CheckCircle2, UserCheck, Sparkles, Terminal } from 'lucide-react';

const stats = [
  {
    label: "Projects Completed",
    value: 50,
    suffix: "+"
  },
  {
    label: "Real Client Projects",
    value: 10,
    suffix: "+"
  },
  {
    label: "Years of Experience",
    value: 6,
    suffix: "+"
  },
  {
    label: "AI Integrations",
    value: 5,
    suffix: "+"
  },
];

function AnimatedCounter({ value, suffix }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate(current) {
          setCount(Math.floor(current));
        },
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const coreStrengths = [
  "Production-ready MERN stack web development",
  "AI feature integration (LLMs, Video Summarization, Quizzes)",
  "Clean code architecture & modular REST APIs",
  "High-performance responsive UI design & animations"
];

function ProfileCard() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-8, 8]);

  function onMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  }

  function onMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000 }}
      className="relative w-full max-w-sm mx-auto mb-8 lg:max-w-none group"
    >
      {/* Background Glowing Aura Ring */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-500 via-cyan-500 to-emerald-400 rounded-3xl blur-xl opacity-40 group-hover:opacity-80 transition duration-700 animate-pulse-glow" />

      {/* Image Container Card */}
      <div 
        className="relative p-2 overflow-hidden border shadow-2xl rounded-3xl bg-neutral-900/90 border-white/15 backdrop-blur-md"
        style={{ transform: "translateZ(30px)" }}
      >
        <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-neutral-950 border border-white/10">
          <img 
            src="/me.png" 
            alt="Prabodana Miyuranga Balasooriya" 
            className="object-cover object-top w-full h-full transition-all duration-700 ease-out filter grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105"
          />

          {/* Shimmer gradient overlay */}
          <div className="absolute inset-0 transition-opacity duration-500 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80 group-hover:opacity-40" />
          
          {/* Top Pill Tag */}
          <div className="absolute z-10 top-3 left-3">
            <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-emerald-500/40 text-emerald-300 text-[11px] font-mono flex items-center gap-1.5">
              <Sparkles size={12} className="text-emerald-400" /> Software Engineer
            </span>
          </div>

          {/* Floating Glassmorphic Status Badge */}
          <motion.div 
            className="absolute flex items-center justify-between p-3 border bottom-3 left-3 right-3 rounded-xl bg-neutral-950/80 border-white/15 backdrop-blur-md"
            animate={{ y: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-emerald-400" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="font-mono text-xs font-medium text-white">Prabodana Miyuranga</span>
            </div>
            <span className="font-mono text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
              MERN Stack
            </span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative z-10 px-6 border-t py-28 border-white/5 bg-neutral-950/60">
      <div className="grid items-start max-w-6xl grid-cols-1 gap-12 mx-auto lg:grid-cols-12">
        
        {/* Left Column: Image Card */}
        <div className="flex flex-col items-center lg:col-span-5">
          <ProfileCard />
        </div>
        
        {/* Right Column: Bio & Strengths */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <span className="block mb-2 font-mono text-xs tracking-widest uppercase text-emerald-400">Engineering Background</span>
              <h2 className="mb-4 text-4xl font-bold tracking-tight text-white font-display md:text-5xl lg:text-6xl">
                About Me
              </h2>
              <div className="w-16 h-1 mb-6 rounded-full bg-emerald-500" />
            </div>

            <div className="space-y-5 font-sans text-base leading-relaxed sm:text-lg text-neutral-300">
              <p>
                I am a passionate <strong className="font-semibold text-white">Software Engineering Undergraduate</strong> with a Pearson Higher National Diploma in Computing. I specialize in crafting modern, high-performance web applications using the <strong className="font-semibold text-emerald-400">MERN Stack (MongoDB, Express, React, Node.js)</strong> alongside cutting-edge AI integrations.
              </p>
              <p>
                Whether building real-world inventory POS applications for local retail, hotel reservation engines with payment integrations, or video-summarizing AI platforms, my objective remains constant: deliver code that is clean, secure, and resilient.
              </p>
            </div>

            {/* Core Competencies Grid */}
            <div className="space-y-3">
              <h4 className="font-mono text-xs font-semibold tracking-widest uppercase text-emerald-400">Core Strengths</h4>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {coreStrengths.map((strength, sidx) => (
                  <div key={sidx} className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/5 text-sm text-neutral-200">
                    <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                    <span>{strength}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* KPI Stat Cards */}
            <div className="grid grid-cols-2 gap-4 pt-2 sm:grid-cols-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="relative p-5 overflow-hidden transition-colors border rounded-2xl bg-neutral-900/60 border-white/10 group hover:border-emerald-500/40">
                  <div className="absolute top-0 left-0 w-full h-1 transition-colors bg-emerald-500/20 group-hover:bg-emerald-500" />
                  <div className="mb-1 text-2xl font-bold text-white transition-colors sm:text-3xl font-display group-hover:text-emerald-400">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Education Qualification & Spoken Languages */}
            <div className="grid grid-cols-1 gap-4 pt-4 border-t sm:grid-cols-2 border-white/10">
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-neutral-900/40 border border-white/5 hover:border-emerald-500/30 transition-all group">
                <div className="flex items-center justify-center w-10 h-10 transition-transform border rounded-xl bg-emerald-500/10 text-emerald-400 border-emerald-500/20 shrink-0 group-hover:scale-105">
                  <Award size={20} />
                </div>
                <div>
                  <h4 className="text-[11px] text-emerald-400 font-mono uppercase tracking-widest font-semibold mb-0.5">Highest Qualification</h4>
                  <p className="text-sm font-medium leading-snug text-white">Higher National Diploma (HND) in Computing</p>
                  <p className="text-xs text-neutral-400 font-mono mt-0.5">Pearson • Software Engineering</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-neutral-900/40 border border-white/5 hover:border-emerald-500/30 transition-all group">
                <div className="flex items-center justify-center w-10 h-10 transition-transform border rounded-xl bg-emerald-500/10 text-emerald-400 border-emerald-500/20 shrink-0 group-hover:scale-105">
                  <Globe size={20} />
                </div>
                <div>
                  <h4 className="text-[11px] text-emerald-400 font-mono uppercase tracking-widest font-semibold mb-1">Spoken Languages</h4>
                  <ul className="text-xs text-neutral-200 font-mono space-y-0.5">
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                      <span>Sinhala <span className="text-neutral-400">(Native)</span></span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                      <span>English <span className="text-neutral-400">(Intermediate)</span></span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
