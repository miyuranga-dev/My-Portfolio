import { useState } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { 
  SiJavascript, SiReact, SiAngular, 
  SiHtml5, SiCss, SiTailwindcss, SiNodedotjs, 
  SiExpress, SiMongodb, SiMysql,
  SiVercel, SiGit, SiGithub, SiPostman, SiGooglegemini, SiJsonwebtokens,
  SiClerk, SiCloudinary, SiStripe, SiVite
} from 'react-icons/si';
import { Cpu, Terminal, ShieldCheck, Database, Layers, Wrench, Sparkles, Code2, CheckCircle2 } from 'lucide-react';

const CATEGORIES = ["All", "Frontend", "Backend", "Tools & Cloud"];

const skillsData = [
  // Frontend
  { name: "React.js", category: "Frontend", level: 92, tag: "Component Architecture & Hooks", icon: SiReact, color: "from-cyan-500/20 to-blue-500/20", iconColor: "text-cyan-400", borderGlow: "group-hover:border-cyan-500/50" },
  { name: "JavaScript (ES6+)", category: "Frontend", level: 90, tag: "Core Async & Closures", icon: SiJavascript, color: "from-amber-500/20 to-yellow-500/20", iconColor: "text-amber-400", borderGlow: "group-hover:border-amber-500/50" },
  { name: "Tailwind CSS", category: "Frontend", level: 95, tag: "Utility-First Design System", icon: SiTailwindcss, color: "from-sky-500/20 to-teal-500/20", iconColor: "text-sky-400", borderGlow: "group-hover:border-sky-500/50" },
  { name: "HTML5 & CSS3", category: "Frontend", level: 95, tag: "Semantic Layouts & Grid", icon: SiHtml5, color: "from-orange-500/20 to-red-500/20", iconColor: "text-orange-400", borderGlow: "group-hover:border-orange-500/50" },
  { name: "Vite", category: "Frontend", level: 88, tag: "HMR Tooling & Bundling", icon: SiVite, color: "from-purple-500/20 to-indigo-500/20", iconColor: "text-purple-400", borderGlow: "group-hover:border-purple-500/50" },
  { name: "Framer Motion", category: "Frontend", level: 85, tag: "Fluid 3D Micro-Animations", icon: Layers, color: "from-emerald-500/20 to-teal-500/20", iconColor: "text-emerald-400", borderGlow: "group-hover:border-emerald-500/50" },
  { name: "Angular", category: "Frontend", level: 75, tag: "Enterprise Framework", icon: SiAngular, color: "from-red-500/20 to-rose-500/20", iconColor: "text-red-400", borderGlow: "group-hover:border-red-500/50" },

  // Backend
  { name: "Node.js", category: "Backend", level: 90, tag: "Async Event-Driven Runtime", icon: SiNodedotjs, color: "from-emerald-500/20 to-green-500/20", iconColor: "text-emerald-400", borderGlow: "group-hover:border-emerald-500/50" },
  { name: "Express.js", category: "Backend", level: 92, tag: "Modular REST API Engine", icon: SiExpress, color: "from-neutral-500/20 to-neutral-400/20", iconColor: "text-neutral-200", borderGlow: "group-hover:border-white/40" },
  { name: "MongoDB (Mongoose)", category: "Backend", level: 88, tag: "NoSQL Schemas & Aggregations", icon: SiMongodb, color: "from-emerald-600/20 to-teal-600/20", iconColor: "text-emerald-500", borderGlow: "group-hover:border-emerald-500/50" },
  { name: "Google Gemini AI", category: "Backend", level: 88, tag: "LLM Pipeline & Prompt Eng.", icon: SiGooglegemini, color: "from-blue-500/20 to-indigo-500/20", iconColor: "text-blue-400", borderGlow: "group-hover:border-blue-500/50" },
  { name: "RESTful APIs", category: "Backend", level: 94, tag: "JSON Payload Architecture", icon: Terminal, color: "from-cyan-500/20 to-teal-500/20", iconColor: "text-cyan-400", borderGlow: "group-hover:border-cyan-500/50" },
  { name: "JWT Auth", category: "Backend", level: 88, tag: "Stateless Security Guard", icon: SiJsonwebtokens, color: "from-rose-500/20 to-pink-500/20", iconColor: "text-rose-400", borderGlow: "group-hover:border-rose-500/50" },
  { name: "MySQL", category: "Backend", level: 80, tag: "Relational Queries & Joins", icon: SiMysql, color: "from-sky-600/20 to-blue-600/20", iconColor: "text-sky-400", borderGlow: "group-hover:border-sky-500/50" },

  // Tools & Cloud
  { name: "Git & GitHub", category: "Tools & Cloud", level: 92, tag: "Version Control & Workflows", icon: SiGithub, color: "from-neutral-500/20 to-white/10", iconColor: "text-white", borderGlow: "group-hover:border-white/50" },
  { name: "Clerk Auth", category: "Tools & Cloud", level: 85, tag: "User Auth & Identity", icon: SiClerk, color: "from-violet-500/20 to-purple-500/20", iconColor: "text-violet-400", borderGlow: "group-hover:border-violet-500/50" },
  { name: "Cloudinary", category: "Tools & Cloud", level: 85, tag: "Media Optimization CDN", icon: SiCloudinary, color: "from-blue-500/20 to-sky-500/20", iconColor: "text-blue-400", borderGlow: "group-hover:border-blue-500/50" },
  { name: "Postman", category: "Tools & Cloud", level: 88, tag: "API Testing & Automation", icon: SiPostman, color: "from-orange-500/20 to-amber-500/20", iconColor: "text-orange-400", borderGlow: "group-hover:border-orange-500/50" },
  { name: "Vercel", category: "Tools & Cloud", level: 90, tag: "Serverless Deployment", icon: SiVercel, color: "from-white/10 to-neutral-500/20", iconColor: "text-neutral-100", borderGlow: "group-hover:border-white/40" },
  { name: "Stripe", category: "Tools & Cloud", level: 82, tag: "Payment Gateways & Webhooks", icon: SiStripe, color: "from-indigo-500/20 to-purple-500/20", iconColor: "text-indigo-400", borderGlow: "group-hover:border-indigo-500/50" }
];

function Skill3DCard({ skill, index }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  const Icon = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1200 }}
      className="relative group cursor-pointer"
    >
      {/* 3D Ambient Outer Color Aura Glow */}
      <div className={`absolute -inset-1 bg-gradient-to-r ${skill.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

      {/* Main Glassmorphic 3D Card */}
      <div 
        className={`relative rounded-2xl bg-neutral-900/80 border border-white/10 p-4 sm:p-5 backdrop-blur-xl transition-all duration-500 shadow-2xl overflow-hidden flex items-center justify-between ${skill.borderGlow}`}
        style={{ transform: "translateZ(30px)" }}
      >
        <div className="flex items-center gap-3 relative z-10">
          <div className={`w-11 h-11 p-2.5 rounded-xl bg-neutral-950/90 border border-white/15 flex items-center justify-center ${skill.iconColor} group-hover:scale-110 group-hover:border-emerald-500/40 transition-all duration-300 shadow-lg shrink-0`}>
            {Icon && <Icon size={22} />}
          </div>

          <h3 className="font-display text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
            {skill.name}
          </h3>
        </div>

        <span className="font-mono text-[10px] uppercase tracking-wider font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20 backdrop-blur-md shrink-0">
          {skill.category}
        </span>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills = activeCategory === "All"
    ? skillsData
    : skillsData.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="relative z-10 py-28 px-6 border-t border-white/5 bg-neutral-950/70 overflow-hidden">
      
      {/* Background Ambient Orbs */}
      <div className="absolute top-1/3 left-0 w-[550px] h-[550px] bg-emerald-500/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[550px] h-[550px] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-emerald-400 font-mono text-xs uppercase tracking-widest block mb-2 flex items-center gap-1.5 font-semibold">
              <Sparkles size={14} /> Technical Arsenal
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-white mb-3">
              Skills & Stack
            </h2>
            <div className="h-1 bg-emerald-500 rounded-full w-24" />
          </motion.div>

          {/* Interactive Category Segment Tabs */}
          <motion.div 
            className="flex flex-wrap gap-2 bg-neutral-900/90 p-1.5 rounded-2xl border border-white/10 backdrop-blur-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-xl font-mono text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-emerald-500 text-neutral-950 font-bold shadow-[0_0_20px_rgba(16,185,129,0.4)]'
                    : 'text-neutral-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* 3D Glassmorphic Skill Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, idx) => (
              <Skill3DCard key={skill.name} skill={skill} index={idx} />
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
