import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { 
  SiReact, SiNodedotjs, SiExpress, SiMongodb, SiTailwindcss, 
  SiStripe, SiVite, SiVercel, SiGreensock, SiJsonwebtokens, SiGooglegemini,
  SiGithub, SiYoutube, SiCloudinary, SiClerk, SiReactrouter
} from 'react-icons/si';
import { ChevronDown, ExternalLink, Sparkles, Layers, Cpu, Code2, Mail } from 'lucide-react';
import { useState } from 'react';

const techIconMap = {
  "React.js": SiReact,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  "MongoDB": SiMongodb,
  "Tailwind CSS": SiTailwindcss,
  "Tailwind": SiTailwindcss,
  "Stripe": SiStripe,
  "Vite": SiVite,
  "Vercel": SiVercel,
  "GSAP": SiGreensock,
  "JWT": SiJsonwebtokens,
  "Gemini AI": SiGooglegemini,
  "Clerk Auth": SiClerk,
  "Cloudinary": SiCloudinary,
  "Nodemailer": Mail,
  "React Router": SiReactrouter
};

const CATEGORIES = ["All", "Full-Stack MERN", "AI Applications", "Frontend & Motion"];

const projects = [
  {
    title: "EduMind AI",
    category: "AI Applications",
    year: "2026",
    description: "An AI-powered study assistant that transforms YouTube videos into structured summaries, flashcards, quizzes, and features an interactive AI chatbot.",
    problem: "Students struggle to extract actionable study material from long educational YouTube videos, wasting hours on passive viewing without retention.",
    solution: "Engineered an AI processing pipeline using Google Gemini API to auto-generate structured summaries, interactive flashcards, and self-assessment quizzes from video transcripts.",
    architecture: "Express/Node API proxy with Gemini 1.5 Flash streaming output, React frontend with state-synced video timestamps, and JWT-secured MongoDB persistence.",
    tech: ["React.js", "Tailwind CSS", "React Router", "Node.js", "Express.js", "MongoDB", "Gemini AI", "JWT"],
    image: "/edumind.png",
    accentColor: "from-emerald-500/20 to-cyan-500/20",
    links: [
      { type: "YouTube Demo", url: "https://youtube.com", icon: SiYoutube },
      { type: "GitHub Repository", url: "https://github.com/miyuranga-dev", icon: SiGithub }
    ]
  },
  {
    title: "Quick Stay Platform",
    category: "Full-Stack MERN",
    year: "2025–2026",
    description: "Comprehensive multi-vendor hotel booking platform for guests and property owners. Includes full auth, reservation scheduling, Stripe payments, and an owner management dashboard.",
    problem: "Boutique hotel owners lack affordable digital tools to manage room availability and bookings, leading to double-bookings and manual errors.",
    solution: "Delivered a scalable full-stack platform with real-time availability tracking, Stripe checkout workflows, and an intuitive admin dashboard consolidating operations.",
    architecture: "React frontend paired with RESTful Node/Express microservices, Stripe Webhooks integration for asynchronous payment validation, and MongoDB aggregation pipelines.",
    tech: ["React.js", "Vite", "Tailwind CSS", "React Router", "Clerk Auth", "Node.js", "Express.js", "MongoDB", "Cloudinary", "Nodemailer"],
    image: "/quickstay.png",
    accentColor: "from-blue-500/20 to-emerald-500/20",
    links: [
      { type: "GitHub Repository", url: "https://github.com/miyuranga-dev", icon: SiGithub }
    ]
  },
  {
    title: "Curtain House POS System",
    category: "Full-Stack MERN",
    year: "2025",
    description: "Production-ready POS & inventory management system for a retail business. Handles sales, stock tracking, custom invoice printing, expenses, and employee access levels.",
    problem: "A retail curtain vendor was tracking orders across paper logs and disconnected spreadsheets, causing stock discrepancies and delayed billing.",
    solution: "Built a centralized POS platform featuring barcode item lookup, real-time stock deduction on checkout, automated revenue reports, and user role management.",
    architecture: "State-driven React dashboard with persistent cache, Express REST API backend, indexing optimization for high-speed catalog lookup, and JWT role-based guard.",
    tech: ["React.js", "React Router", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    image: "/curtainhouse.png",
    accentColor: "from-violet-500/20 to-emerald-500/20",
    links: [
      { type: "GitHub Repository", url: "https://github.com/miyuranga-dev", icon: SiGithub }
    ]
  },
  {
    title: "Juice Bar Cinematic Landing",
    category: "Frontend & Motion",
    year: "2026",
    description: "A visually stunning scroll-driven landing page with GSAP ScrollTrigger, 3D parallax layers, pinned canvas animations, and scroll-synced video transitions.",
    problem: "Standard static marketing sites fail to convey high-energy lifestyle brand identity, resulting in low visitor engagement and high bounce rates.",
    solution: "Crafted a cinematic web experience with custom scroll pinning, smooth inertia momentum, and interactive visual story arcs that keep users immersed.",
    architecture: "Optimized Vite build with GSAP ScrollTrigger timeline management, lazy-loaded video textures, and zero-layout-shift responsive CSS tokens.",
    tech: ["React.js", "Tailwind CSS", "GSAP", "Vite", "Vercel"],
    image: "/juicebar.png",
    accentColor: "from-amber-500/20 to-emerald-500/20",
    links: [
      { type: "Live Preview", url: "https://vercel.com", icon: SiVercel },
      { type: "GitHub Repository", url: "https://github.com/miyuranga-dev", icon: SiGithub }
    ]
  }
];

// Fallback graphic for project cards if local image is missing
function ProjectGraphicFallback({ title, accentColor }) {
  return (
    <div className={`w-full h-full min-h-[260px] bg-gradient-to-br ${accentColor} bg-neutral-900 flex flex-col items-center justify-center p-6 relative overflow-hidden group-hover:scale-105 transition-transform duration-700`}>
      <div className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none" />
      <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center mb-4 shadow-xl">
        <Code2 size={32} className="text-emerald-400" />
      </div>
      <h4 className="font-display font-bold text-white text-xl text-center">{title}</h4>
      <span className="text-xs font-mono text-emerald-400/80 mt-1 uppercase tracking-widest">Interactive Showcase</span>
    </div>
  );
}

function TiltCard({ children, index, accentColor }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-6, 6]);
  
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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative w-full group"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1200 }}
    >
      {/* 3D Ambient Glow Aura Ring */}
      <div className={`absolute -inset-1 bg-gradient-to-r ${accentColor || "from-emerald-500/20 to-cyan-500/20"} rounded-3xl blur-2xl opacity-30 group-hover:opacity-70 transition duration-700 pointer-events-none`} />

      {/* 3D Glassmorphic Container Card */}
      <div 
        className="w-full flex flex-col lg:flex-row bg-neutral-900/80 border border-white/10 rounded-3xl overflow-hidden hover:border-emerald-500/40 transition-all shadow-2xl backdrop-blur-xl relative z-10"
        style={{ transform: "translateZ(30px)" }}
      >
        {/* Subtle 3D Perspective Grid Accent */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(16,185,129,0.15) 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />
        {children}
      </div>
    </motion.div>
  );
}

function ProjectCard({ project, index }) {
  const [activeTab, setActiveTab] = useState("solution"); // "challenge" | "solution" | "architecture"
  const [imgError, setImgError] = useState(false);

  return (
    <TiltCard index={index} accentColor={project.accentColor}>
      {/* Media / Image Column */}
      <div className="lg:w-[44%] relative overflow-hidden border-b lg:border-b-0 lg:border-r border-white/10 bg-neutral-950 flex items-center justify-center min-h-[280px]">
        {!imgError ? (
          <img 
            src={project.image} 
            alt={project.title} 
            onError={() => setImgError(true)}
            className="w-full h-full object-cover min-h-[280px] aspect-video lg:aspect-auto transform group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        ) : (
          <ProjectGraphicFallback title={project.title} accentColor={project.accentColor} />
        )}
        
        {/* Category Pill Tag Overlay */}
        <div className="absolute top-4 left-4 z-20">
          <span className="px-3.5 py-1.5 rounded-full bg-black/75 border border-emerald-500/40 text-emerald-300 text-xs font-mono backdrop-blur-md shadow-lg flex items-center gap-1.5">
            <Sparkles size={12} className="text-emerald-400" />
            {project.category}
          </span>
        </div>
      </div>

      {/* Content Column */}
      <div className="lg:w-[56%] p-6 sm:p-8 relative z-20 flex flex-col justify-between">
        <div>
          {/* Header & External Links */}
          <div className="flex flex-wrap justify-between items-start mb-4 gap-3">
            <div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                {project.title}
              </h3>
              <span className="font-mono text-xs text-emerald-400/80 font-semibold">{project.year}</span>
            </div>
            
            <div className="flex gap-2.5">
              {project.links.map((link, lidx) => (
                <a 
                  key={lidx} 
                  href={link.url} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="px-3 py-2 rounded-xl bg-white/5 hover:bg-emerald-500 hover:text-neutral-950 text-neutral-200 border border-white/10 hover:border-emerald-500 transition-all flex items-center gap-2 text-xs font-mono font-bold shadow-md"
                  title={link.type}
                >
                  <link.icon size={16} />
                  <span>{link.type}</span>
                </a>
              ))}
            </div>
          </div>

          <p className="text-neutral-300 text-sm sm:text-base mb-6 leading-relaxed">
            {project.description}
          </p>

          {/* Premium UI/UX Engineering Details Segment Control Tabs */}
          <div className="mb-6 rounded-2xl border border-white/10 bg-neutral-950/60 p-1.5 backdrop-blur-md">
            <div className="grid grid-cols-3 gap-1 mb-3">
              <button
                onClick={() => setActiveTab("challenge")}
                className={`py-1.5 px-2 rounded-xl font-mono text-[11px] font-semibold transition-all flex items-center justify-center gap-1.5 ${
                  activeTab === "challenge"
                    ? "bg-rose-500/20 text-rose-300 border border-rose-500/40 shadow-sm"
                    : "text-neutral-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <span>Challenge</span>
              </button>
              <button
                onClick={() => setActiveTab("solution")}
                className={`py-1.5 px-2 rounded-xl font-mono text-[11px] font-semibold transition-all flex items-center justify-center gap-1.5 ${
                  activeTab === "solution"
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm"
                    : "text-neutral-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <span>Solution</span>
              </button>
              <button
                onClick={() => setActiveTab("architecture")}
                className={`py-1.5 px-2 rounded-xl font-mono text-[11px] font-semibold transition-all flex items-center justify-center gap-1.5 ${
                  activeTab === "architecture"
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm"
                    : "text-neutral-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <span>Architecture</span>
              </button>
            </div>

            <div className="p-3 bg-neutral-900/60 rounded-xl border border-white/5 min-h-[70px] flex items-center">
              <AnimatePresence mode="wait">
                {activeTab === "challenge" && (
                  <motion.p
                    key="challenge"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="text-xs text-neutral-300 leading-relaxed font-sans"
                  >
                    <strong className="text-rose-400 font-mono font-semibold">Problem: </strong>
                    {project.problem}
                  </motion.p>
                )}
                {activeTab === "solution" && (
                  <motion.p
                    key="solution"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="text-xs text-neutral-200 leading-relaxed font-sans"
                  >
                    <strong className="text-emerald-400 font-mono font-semibold">Solution: </strong>
                    {project.solution}
                  </motion.p>
                )}
                {activeTab === "architecture" && (
                  <motion.p
                    key="architecture"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="text-xs text-neutral-300 leading-relaxed font-mono"
                  >
                    <strong className="text-cyan-400 font-semibold">System Arch: </strong>
                    {project.architecture}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Tech Stack Icons Strip */}
        <div className="flex flex-wrap gap-2 pt-3 border-t border-white/10">
          {project.tech.map((t, tidx) => {
            const Icon = techIconMap[t];
            return (
              <span 
                key={tidx} 
                className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/[0.04] text-xs font-mono text-emerald-200/90 border border-white/10 group-hover:border-emerald-500/30 transition-colors"
              >
                {Icon && <Icon size={14} className="text-emerald-400" />}
                {t}
              </span>
            );
          })}
        </div>
      </div>
    </TiltCard>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="relative z-10 py-28 px-6 bg-neutral-950/70 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-widest mb-2">
              <Sparkles size={14} /> Production Portfolio
            </div>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-white mb-3">
              Featured Software Works
            </h2>
            <div className="h-1 bg-emerald-500 rounded-full w-24" />
          </motion.div>

          {/* Filter Category Tabs */}
          <motion.div 
            className="flex flex-wrap gap-2 bg-neutral-900/80 p-1.5 rounded-xl border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg font-mono text-xs transition-all ${
                  activeCategory === cat
                    ? 'bg-emerald-500 text-neutral-950 font-bold shadow-[0_0_15px_rgba(16,185,129,0.4)]'
                    : 'text-neutral-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Project Cards List */}
        <div className="space-y-12">
          {filteredProjects.map((project, idx) => (
            <ProjectCard key={project.title} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
