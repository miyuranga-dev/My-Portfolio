import { motion, useMotionValue, useTransform } from "framer-motion";
import { GraduationCap, Award, BookOpen, CheckCircle2, Calendar, Sparkles } from "lucide-react";

const educationData = [
  {
    type: "Higher National Diploma (HND)",
    title: "HND in Computing & Software Engineering",
    institution: "Pearson • Esoft Metro Campus, Kandy",
    year: "2022 - 2024",
    icon: GraduationCap,
    description:
      "Comprehensive software engineering curriculum covering Object-Oriented Programming (OOP), Data Structures & Algorithms, Full-Stack Web Development, Database Management Systems, and Agile software delivery.",
    highlights: [
      "Full-Stack Web Development",
      "Software Architecture & Design",
      "Database Systems (SQL & NoSQL)",
      "REST API Development",
      "Object-Oriented Programming",
      "Data Structures & Algorithms",
      "Web Application Security",
      "Agile Software Development",
    ],
    accentColor: "from-emerald-500/20 to-teal-500/20",
    badgeClass: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
  },
  {
    type: "Professional Certification",
    title: "Full Stack Developer Certification",
    institution: "University of Moratuwa (DP Education)",
    year: "2026",
    icon: Award,
    description:
      "Completed intensive full-stack development training focused on building dynamic, high-performance web applications using Angular, JavaScript, Python, Node.js, SQL databases, and RESTful API architecture.",
    highlights: [
      "Angular Framework",
      "Python Logic",
      "Modern JavaScript ES6+",
      "SQLite / SQL",
      "Node.js Runtime",
      "RESTful APIs",
    ],
    accentColor: "from-cyan-500/20 to-blue-500/20",
    badgeClass: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
  },
  {
    type: "Professional Certification",
    title: "React Developer Certification",
    institution: "University of Moratuwa (DP Education)",
    year: "2025",
    icon: Award,
    description:
      "Mastered modern React development practices, component-driven UI architecture, custom Hooks state management, client-side routing, Context API, and REST integration.",
    highlights: [
      "JSX & Functional Components",
      "React Hooks & Custom State",
      "Context API Architecture",
      "Routing & Dynamic Views",
      "API Integration & Async Data",
      "Form Handling & Validation",
    ],
    accentColor: "from-blue-500/20 to-indigo-500/20",
    badgeClass: "bg-blue-500/10 text-blue-300 border-blue-500/30",
  },
  {
    type: "Professional Certification",
    title: "Legacy Responsive Web Design V8",
    institution: "FreeCodeCamp",
    year: "2026",
    icon: BookOpen,
    description:
      "Learned the core fundamentals of HTML5, modern CSS3 layout techniques (Flexbox & Grid), accessible UX principles, and responsive web design patterns.",
    highlights: ["HTML5 Semantics", "CSS3 Flexbox & Grid", "Responsive Design Patterns", "Web Accessibility (a11y)"],
    accentColor: "from-violet-500/20 to-purple-500/20",
    badgeClass: "bg-violet-500/10 text-violet-300 border-violet-500/30",
  },
  {
    type: "Diploma",
    title: "Diploma in Information Technology",
    institution: "Pearson • Esoft Metro Campus, Kandy",
    year: "2021",
    icon: GraduationCap,
    description:
      "Foundational diploma covering computer networks, programming fundamentals, operating system concepts, and core IT logic.",
    highlights: ["Programming Fundamentals", "Networking Essentials", "Operating Systems"],
    accentColor: "from-emerald-500/10 to-teal-500/10",
    badgeClass: "bg-emerald-500/10 text-emerald-200 border-emerald-500/20",
  },
];

function EduTimelineCard({ item, index }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-5, 5]);

  const IconComponent = item.icon || GraduationCap;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative pl-8 md:pl-12 group"
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1200,
      }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
        mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
      }}
      onMouseLeave={() => {
        mouseX.set(0);
        mouseY.set(0);
      }}
    >
      {/* Timeline Node Dot / Icon */}
      <div className="absolute left-0 top-1.5 -translate-x-1/2 w-10 h-10 rounded-2xl bg-neutral-950 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.3)] z-20 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-neutral-950 transition-all duration-300">
        <IconComponent size={20} />
      </div>

      {/* 3D Ambient Glow Ring */}
      <div className={`absolute -inset-1 bg-gradient-to-r ${item.accentColor} rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none`} />

      {/* Main Glassmorphic Timeline Card */}
      <div
        className="relative p-6 sm:p-8 rounded-3xl bg-neutral-900/80 border border-white/10 group-hover:border-emerald-500/40 transition-all duration-500 backdrop-blur-xl shadow-2xl overflow-hidden z-10"
        style={{ transform: "translateZ(25px)" }}
      >
        {/* Header Pill & Year Badge */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <span
            className={`px-3.5 py-1 text-xs font-mono font-semibold rounded-full border backdrop-blur-md ${item.badgeClass}`}
          >
            {item.type}
          </span>

          <div className="flex items-center gap-1.5 font-mono text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-3.5 py-1 rounded-full border border-emerald-500/20">
            <Calendar size={13} />
            <span>{item.year}</span>
          </div>
        </div>

        {/* Title & Institution */}
        <div className="mb-4">
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-white group-hover:text-emerald-300 transition-colors leading-tight">
            {item.title}
          </h3>
          <p className="text-emerald-400 text-sm font-mono mt-1 flex items-center gap-1.5 font-medium">
            <span>{item.institution}</span>
          </p>
        </div>

        {/* Description */}
        <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Education() {
  return (
    <section
      id="education"
      className="relative z-10 py-28 px-6 border-t border-white/5 bg-neutral-950/70 overflow-hidden"
    >
      {/* Background Glow Lights */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 text-emerald-400 font-mono text-xs uppercase tracking-widest mb-2 font-semibold">
            <Sparkles size={14} /> Academic & Professional Journey
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-white mb-3">
            Education & Certifications
          </h2>
          <div className="h-1 bg-emerald-500 rounded-full w-24" />
        </motion.div>

        {/* 3D Vertical Timeline Spine & Cards */}
        <div className="relative border-l-2 border-white/10 space-y-12 ml-4 md:ml-6">
          {educationData.map((item, idx) => (
            <EduTimelineCard key={idx} item={item} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
