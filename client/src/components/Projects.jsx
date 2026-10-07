
"use client";

import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiVite,
  SiVercel,
  SiGreensock,
  SiJsonwebtokens,
  SiGooglegemini,
  SiGithub,
  SiYoutube,
  SiCloudinary,
  SiClerk,
  SiReactrouter,
  SiNextdotjs,
  SiMysql,
  SiPrisma,
} from "react-icons/si";

import {
  ArrowUpRight,
  ChevronDown,
  Code2,
  ExternalLink,
  Mail,
  Sparkles,
} from "lucide-react";

import { useState } from "react";

/* =========================================================
   TECHNOLOGY ICON MAP
========================================================= */

const techIconMap = {
  "React.js": SiReact,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  MongoDB: SiMongodb,
  "Tailwind CSS": SiTailwindcss,
  Tailwind: SiTailwindcss,
  Stripe: SiVercel,
  Vite: SiVite,
  Vercel: SiVercel,
  GSAP: SiGreensock,
  JWT: SiJsonwebtokens,
  "Gemini AI": SiGooglegemini,
  "Clerk Auth": SiClerk,
  Cloudinary: SiCloudinary,
  Nodemailer: Mail,
  "React Router": SiReactrouter,
  "Next.js": SiNextdotjs,
  MySQL: SiMysql,
  Prisma: SiPrisma,
  JavaScript: Code2,
};

/* =========================================================
   PROJECT CATEGORIES
========================================================= */

const CATEGORIES = [
  "All",
  "Full-Stack",
  "AI Applications",
  "Frontend & Motion",
];

/* =========================================================
   PROJECT DATA
========================================================= */

const projects = [
  {
    title: "Hotel Kashyapa",
    category: "Full-Stack",
    year: "2026",

    description:
      "A premium full-stack hotel platform designed to modernize Hotel Kashyapa's digital presence with direct booking, accommodation, restaurant and menu experiences, events, day-out packages, and centralized administration.",

    problem:
      "The existing hotel website provided limited digital functionality and relied heavily on traditional inquiry-based booking, making it difficult for guests to explore rooms, packages, dining, and services online.",

    solution:
      "Designed and developed a complete hotel platform with a luxury-focused frontend, direct booking workflow, accommodation presentation, restaurant and menu management, events, experiences, and centralized administrative controls.",

    architecture:
      "Next.js App Router application connected to MySQL through Prisma ORM, with structured hotel content, booking workflows, reusable UI components, and responsive frontend architecture.",

    tech: [
      "Next.js",
      "Tailwind CSS",
      "MySQL",
      "Prisma",
      "JavaScript",
    ],

    image: "/kashyapa.png",

    accent: "gold",

    featured: true,

    links: [
      {
        type: "Live Preview",
        url: "https://hotel-kashyapa-omega.vercel.app/",
        icon: ExternalLink,
      },
      {
        type: "GitHub",
        url: "#",
        icon: SiGithub,
      },
    ],
  },

  {
    title: "Avora Grand Hotel",
    category: "Full-Stack",
    year: "2026",

    description:
      "A luxury banquet and events website created for Avora Grand, focused on weddings, functions, and premium event experiences through immersive visual storytelling and modern inquiry workflows.",

    problem:
      "Traditional banquet websites often fail to communicate the atmosphere, scale, and premium character of their venues, making it difficult for potential clients to visualize their event.",

    solution:
      "Built a cinematic, conversion-focused experience featuring premium hall presentations, event-focused content, interactive planning elements, guest and event-date inputs, and direct inquiry workflows.",

    architecture:
      "Next.js App Router application using reusable content-driven components, optimized image and video presentation, responsive UI architecture, and animated interactions.",

    tech: [
      "Next.js",
      "Tailwind CSS",
      "JavaScript",
      "Vercel",
    ],

    image: "/avoragrand.png",

    accent: "gold",

    featured: true,

    links: [
      {
        type: "Live Preview",
        url: "https://www.avoragrand.com/",
        icon: ExternalLink,
      },
      {
        type: "GitHub",
        url: "#",
        icon: SiGithub,
      },
    ],
  },

  {
    title: "VelPOS — Supermarket POS",
    category: "Full-Stack",
    year: "2026",

    description:
      "A full-featured supermarket POS and inventory management system built to streamline retail billing, stock management, product operations, and business reporting.",

    problem:
      "Supermarkets managing large product catalogs need fast checkout, accurate stock tracking, reliable billing, and clear reporting without relying on manual records.",

    solution:
      "Developed a centralized POS platform with barcode-based billing, product and inventory management, sales processing, stock control, user roles, and operational reporting.",

    architecture:
      "A modular full-stack retail platform with a responsive POS interface, RESTful backend services, persistent product and sales data, role-based access control, and structured inventory workflows.",

    tech: [
      "React.js",
      "Tailwind CSS",
      "React Router",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
    ],

    image: "/velpos.png",

    accent: "cyan",

    links: [
      {
        type: "Live Preview",
        url: "#",
        icon: ExternalLink,
      },
      {
        type: "GitHub",
        url: "#",
        icon: SiGithub,
      },
    ],
  },
  {
    title: "EduMind AI",
    category: "AI Applications",
    year: "2026",

    description:
      "An AI-powered study assistant that transforms YouTube videos into structured summaries, flashcards, quizzes, and an interactive AI learning experience.",

    problem:
      "Students struggle to extract actionable study material from long educational YouTube videos, wasting hours on passive viewing without retention.",

    solution:
      "Engineered an AI processing pipeline using Google Gemini API to generate structured summaries, interactive flashcards, and self-assessment quizzes from video transcripts.",

    architecture:
      "Express/Node API proxy with Gemini streaming output, React frontend with state-synced video timestamps, and JWT-secured MongoDB persistence.",

    tech: [
      "React.js",
      "Tailwind CSS",
      "React Router",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Gemini AI",
      "JWT",
    ],

    image: "/edumind.png",

    accent: "emerald",

    links: [
      {
        type: "YouTube Demo",
        url: "https://youtube.com",
        icon: SiYoutube,
      },
      {
        type: "GitHub",
        url: "https://github.com/miyuranga-dev",
        icon: SiGithub,
      },
    ],
  },

  {
    title: "Quick Stay Platform",
    category: "Full-Stack",
    year: "2025–2026",

    description:
      "A comprehensive multi-vendor hotel booking platform for guests and property owners, combining reservations, authentication, payments, availability, and property management.",

    problem:
      "Boutique hotel owners lack affordable digital tools to manage room availability and bookings, leading to double-bookings and manual errors.",

    solution:
      "Delivered a scalable full-stack platform with availability tracking, Stripe checkout workflows, authentication, and an intuitive property management experience.",

    architecture:
      "React frontend paired with RESTful Node/Express services, Stripe integration, MongoDB persistence, Cloudinary media handling, and role-aware authentication.",

    tech: [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "React Router",
      "Clerk Auth",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Cloudinary",
      "Nodemailer",
    ],

    image: "/quickstay.png",

    accent: "blue",

    links: [
      {
        type: "GitHub",
        url: "https://github.com/miyuranga-dev",
        icon: SiGithub,
      },
    ],
  },

  {
    title: "Curtain House POS System",
    category: "Full-Stack",
    year: "2025",

    description:
      "A production-ready POS and inventory management system for a retail business, handling sales, stock tracking, invoices, expenses, reporting, and employee access levels.",

    problem:
      "A retail curtain vendor was tracking orders across paper logs and disconnected spreadsheets, causing stock discrepancies and delayed billing.",

    solution:
      "Built a centralized POS platform featuring barcode item lookup, real-time stock deduction, automated revenue reports, and role-based access management.",

    architecture:
      "State-driven React interface with Express REST services, MongoDB persistence, optimized catalog lookup, and JWT-based role management.",

    tech: [
      "React.js",
      "React Router",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
    ],

    image: "/curtainhouse.png",

    accent: "violet",

    links: [
      {
        type: "GitHub",
        url: "https://github.com/miyuranga-dev",
        icon: SiGithub,
      },
    ],
  },

  {
    title: "Juice Bar Cinematic",
    category: "Frontend & Motion",
    year: "2026",

    description:
      "A visually immersive scroll-driven landing page combining cinematic transitions, layered parallax, pinned animations, and interactive visual storytelling.",

    problem:
      "Standard static marketing sites often fail to communicate the energy and personality of modern lifestyle brands.",

    solution:
      "Crafted a cinematic web experience with custom scroll pinning, smooth motion, layered visual transitions, and responsive interaction design.",

    architecture:
      "Optimized Vite build with GSAP ScrollTrigger timeline management, lazy-loaded visual assets, and responsive CSS architecture.",

    tech: [
      "React.js",
      "Tailwind CSS",
      "GSAP",
      "Vite",
      "Vercel",
    ],

    image: "/juicebar.png",

    accent: "amber",

    links: [
      {
        type: "Live Preview",
        url: "https://vercel.com",
        icon: SiVercel,
      },
      {
        type: "GitHub",
        url: "https://github.com/miyuranga-dev",
        icon: SiGithub,
      },
    ],
  },

  
];

/* =========================================================
   ACCENT CONFIG
========================================================= */

const accentStyles = {
  emerald: {
    text: "text-emerald-400",
    softText: "text-emerald-300",
    border: "border-emerald-500/20",
    hoverBorder: "hover:border-emerald-400/40",
    bg: "bg-emerald-500/10",
    line: "bg-emerald-400",
    glow: "rgba(16,185,129,0.18)",
  },

  blue: {
    text: "text-blue-400",
    softText: "text-blue-300",
    border: "border-blue-500/20",
    hoverBorder: "hover:border-blue-400/40",
    bg: "bg-blue-500/10",
    line: "bg-blue-400",
    glow: "rgba(59,130,246,0.18)",
  },

  violet: {
    text: "text-violet-400",
    softText: "text-violet-300",
    border: "border-violet-500/20",
    hoverBorder: "hover:border-violet-400/40",
    bg: "bg-violet-500/10",
    line: "bg-violet-400",
    glow: "rgba(139,92,246,0.18)",
  },

  amber: {
    text: "text-amber-400",
    softText: "text-amber-300",
    border: "border-amber-500/20",
    hoverBorder: "hover:border-amber-400/40",
    bg: "bg-amber-500/10",
    line: "bg-amber-400",
    glow: "rgba(245,158,11,0.18)",
  },

  gold: {
    text: "text-yellow-400",
    softText: "text-yellow-300",
    border: "border-yellow-500/20",
    hoverBorder: "hover:border-yellow-400/40",
    bg: "bg-yellow-500/10",
    line: "bg-yellow-400",
    glow: "rgba(234,179,8,0.18)",
  },

  cyan: {
    text: "text-cyan-400",
    softText: "text-cyan-300",
    border: "border-cyan-500/20",
    hoverBorder: "hover:border-cyan-400/40",
    bg: "bg-cyan-500/10",
    line: "bg-cyan-400",
    glow: "rgba(6,182,212,0.18)",
  },
};

/* =========================================================
   IMAGE FALLBACK
========================================================= */

function ProjectGraphicFallback({ title, accent }) {
  const style = accentStyles[accent] || accentStyles.emerald;

  return (
    <div className="relative flex items-center justify-center w-full h-full min-h-[300px] overflow-hidden bg-neutral-950">
      <div
        className={`absolute inset-0 ${style.bg}`}
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative z-10 text-center">
        <div
          className={`w-16 h-16 mx-auto mb-5 rounded-2xl border ${style.border} ${style.bg} flex items-center justify-center`}
        >
          <Code2 size={28} className={style.text} />
        </div>

        <h4 className="px-6 text-2xl font-semibold text-white">
          {title}
        </h4>

        <p
          className={`mt-2 text-xs tracking-[0.25em] uppercase ${style.text}`}
        >
          Software Project
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   MAGNETIC ARROW
========================================================= */

function MagneticArrow({ accent }) {
  const style = accentStyles[accent] || accentStyles.emerald;

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 300,
    damping: 20,
  });

  const springY = useSpring(y, {
    stiffness: 300,
    damping: 20,
  });

  function handleMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();

    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.12);
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.12);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      style={{
        x: springX,
        y: springY,
      }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`flex items-center justify-center w-12 h-12 transition-all duration-300 border rounded-full ${style.border} ${style.bg}`}
    >
      <ArrowUpRight
        size={20}
        className={`transition-transform duration-300 ${style.text}`}
      />
    </motion.div>
  );
}

/* =========================================================
   PROJECT CARD
========================================================= */

function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const style = accentStyles[project.accent] || accentStyles.emerald;

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 60,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-100px",
      }}
      transition={{
        duration: 0.75,
        delay: Math.min(index * 0.08, 0.4),
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group"
    >
      {/* =================================================
          MAIN PROJECT VISUAL
      ================================================= */}

      <div
        className={`relative overflow-hidden rounded-[2rem] border bg-neutral-900/50 ${style.border} ${style.hoverBorder} transition-all duration-700`}
      >
        {/* Ambient glow */}

        <div
          className="absolute z-0 transition-opacity duration-700 rounded-full pointer-events-none w-96 h-96 -right-40 -top-40 opacity-10 group-hover:opacity-20 blur-3xl"
          style={{
            background: style.glow,
          }}
        />

        {/* Image */}

        <div className="relative z-10 overflow-hidden aspect-[16/8.5] bg-neutral-950">
          {!imgError ? (
            <img
              src={project.image}
              alt={`${project.title} project preview`}
              onError={() => setImgError(true)}
              loading={index < 2 ? "eager" : "lazy"}
              className="object-cover w-full h-full transition-transform duration-[1.2s] ease-out group-hover:scale-[1.035]"
            />
          ) : (
            <ProjectGraphicFallback
              title={project.title}
              accent={project.accent}
            />
          )}

          {/* Image overlay */}

          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-60" />

          <div className="absolute inset-0 transition-opacity duration-700 opacity-0 bg-black/10 group-hover:opacity-100" />

          {/* Number */}

          <div className="absolute z-20 top-5 left-5 sm:top-7 sm:left-7">
            <div className="flex items-center justify-center w-10 h-10 text-xs font-medium border rounded-full bg-black/50 border-white/20 backdrop-blur-md text-white/80">
              {String(index + 1).padStart(2, "0")}
            </div>
          </div>

          {/* Category */}

          <div className="absolute z-20 top-5 right-5 sm:top-7 sm:right-7">
            <div
              className={`flex items-center gap-2 px-4 py-2 text-[10px] sm:text-xs font-medium tracking-wider uppercase rounded-full border ${style.border} ${style.bg} backdrop-blur-md ${style.softText}`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${style.line}`}
              />

              {project.category}
            </div>
          </div>

          {/* Featured */}

          {project.featured && (
            <div className="absolute z-20 bottom-5 left-5 sm:bottom-7 sm:left-7">
              <div className="flex items-center gap-2 px-3 py-2 text-[10px] tracking-widest uppercase border rounded-full bg-black/50 border-yellow-400/20 text-yellow-300 backdrop-blur-md">
                <Sparkles size={12} />
                Featured Case Study
              </div>
            </div>
          )}
        </div>
      </div>

      {/* =================================================
          PROJECT INFORMATION
      ================================================= */}

      <div className="grid grid-cols-1 gap-8 px-1 pt-7 md:grid-cols-[1fr_auto] md:gap-12 md:pt-8">
        <div>
          {/* Title row */}

          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <h3 className="text-3xl font-semibold tracking-tight text-white transition-colors duration-300 sm:text-4xl lg:text-[2.65rem] group-hover:text-white">
              {project.title}
            </h3>

            <span
              className={`font-mono text-xs tracking-widest ${style.text}`}
            >
              {project.year}
            </span>
          </div>

          {/* Description */}

          <p className="max-w-3xl mt-4 text-sm leading-7 sm:text-base text-neutral-400">
            {project.description}
          </p>

          {/* Tech stack */}

          <div className="flex flex-wrap gap-2 mt-6">
            {project.tech.slice(0, 6).map((tech, techIndex) => {
              const Icon = techIconMap[tech];

              return (
                <span
                  key={`${tech}-${techIndex}`}
                  className="inline-flex items-center gap-2 px-3 py-1.5 text-[11px] font-medium text-neutral-300 border rounded-full bg-white/[0.025] border-white/[0.08] transition-all duration-300 group-hover:border-white/[0.13]"
                >
                  {Icon && (
                    <Icon
                      size={13}
                      className="text-neutral-500"
                    />
                  )}

                  {tech}
                </span>
              );
            })}

            {project.tech.length > 6 && (
              <span className="px-3 py-1.5 text-[11px] font-medium text-neutral-500">
                +{project.tech.length - 6} more
              </span>
            )}
          </div>

          {/* Expandable case study */}

          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                initial={{
                  opacity: 0,
                  height: 0,
                  marginTop: 0,
                }}
                animate={{
                  opacity: 1,
                  height: "auto",
                  marginTop: 28,
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                  marginTop: 0,
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="overflow-hidden"
              >
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="p-5 border rounded-2xl bg-white/[0.025] border-white/[0.07]">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-neutral-500">
                      Challenge
                    </span>

                    <p className="mt-3 text-sm leading-6 text-neutral-400">
                      {project.problem}
                    </p>
                  </div>

                  <div className="p-5 border rounded-2xl bg-white/[0.025] border-white/[0.07]">
                    <span
                      className={`text-[10px] tracking-[0.2em] uppercase ${style.text}`}
                    >
                      Solution
                    </span>

                    <p className="mt-3 text-sm leading-6 text-neutral-400">
                      {project.solution}
                    </p>
                  </div>

                  <div className="p-5 border rounded-2xl bg-white/[0.025] border-white/[0.07] md:col-span-2">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-neutral-500">
                      Architecture
                    </span>

                    <p className="mt-3 text-sm leading-6 text-neutral-400">
                      {project.architecture}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* =================================================
            ACTIONS
        ================================================= */}

        <div className="flex flex-col items-start gap-3 md:items-end">
          {/* Project links */}

          <div className="flex flex-wrap gap-2 md:justify-end">
            {project.links.map((link, linkIndex) => {
              const LinkIcon = link.icon;

              return (
                <a
                  key={`${link.type}-${linkIndex}`}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => {
                    if (link.url === "#") {
                      e.preventDefault();
                    }
                  }}
                  className={`group/link inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-white border rounded-full bg-white/[0.04] border-white/[0.1] hover:bg-white/[0.08] ${style.hoverBorder} transition-all duration-300`}
                >
                  <LinkIcon
                    size={14}
                    className="transition-colors text-neutral-500 group-hover/link:text-white"
                  />

                  {link.type}

                  <ArrowUpRight
                    size={13}
                    className="transition-transform duration-300 text-neutral-600 group-hover/link:text-white group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                  />
                </a>
              );
            })}
          </div>

          {/* Case study toggle */}

          <button
            type="button"
            onClick={() => setExpanded((value) => !value)}
            className={`inline-flex items-center gap-2 px-1 py-2 text-xs font-medium transition-colors ${style.text} hover:text-white`}
          >
            {expanded ? "Hide case study" : "View case study"}

            <ChevronDown
              size={14}
              className={`transition-transform duration-300 ${
                expanded ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Divider */}

      <div className="relative h-px mt-12 overflow-hidden bg-white/[0.07] sm:mt-16">
        <motion.div
          initial={{
            scaleX: 0,
          }}
          whileInView={{
            scaleX: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
          className={`absolute inset-y-0 left-0 origin-left w-1/4 ${style.line} opacity-50`}
        />
      </div>
    </motion.article>
  );
}

/* =========================================================
   PROJECTS SECTION
========================================================= */

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  return (
    <section
      id="projects"
      className="relative z-10 px-5 py-28 overflow-hidden border-t sm:px-6 sm:py-36 bg-neutral-950 border-white/[0.06]"
    >
      {/* =================================================
          BACKGROUND
      ================================================= */}

      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="absolute w-[600px] h-[600px] rounded-full -left-96 top-1/3 bg-emerald-500/[0.025] blur-[140px]" />

        <div className="absolute w-[500px] h-[500px] rounded-full -right-96 bottom-0 bg-blue-500/[0.02] blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* =================================================
            HEADER
        ================================================= */}

        <div className="max-w-4xl mb-16 sm:mb-20">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              margin: "-100px",
            }}
            transition={{
              duration: 0.7,
            }}
          >
            {/* Eyebrow */}

            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-emerald-400" />

              <span className="font-mono text-[10px] sm:text-xs tracking-[0.28em] uppercase text-emerald-400">
                Selected Work
              </span>
            </div>

            {/* Heading */}

            <h2 className="max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-7xl">
              Software built to{" "}
              <span className="text-neutral-500">
                solve real problems.
              </span>
            </h2>

            <p className="max-w-2xl mt-6 text-sm leading-7 sm:text-base text-neutral-400">
              A selection of full-stack platforms, AI applications,
              business systems, and immersive digital experiences
              engineered with a focus on usability, performance, and
              polished interfaces.
            </p>
          </motion.div>
        </div>

        {/* =================================================
            FILTERS
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
            delay: 0.15,
          }}
          className="flex flex-wrap items-center gap-2 mb-14 sm:mb-20"
        >
          {CATEGORIES.map((category) => {
            const active = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`relative px-4 py-2.5 rounded-full text-[11px] sm:text-xs font-medium transition-all duration-300 ${
                  active
                    ? "bg-white text-neutral-950"
                    : "border border-white/[0.08] text-neutral-500 hover:text-white hover:border-white/[0.18] bg-white/[0.02]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </motion.div>

        {/* =================================================
            PROJECTS
        ================================================= */}

        <div className="space-y-16 sm:space-y-24">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* =================================================
            EMPTY STATE
        ================================================= */}

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            className="py-20 text-center border rounded-3xl border-white/[0.08] bg-white/[0.02]"
          >
            <p className="text-sm text-neutral-500">
              No projects found in this category.
            </p>
          </motion.div>
        )}

        {/* =================================================
            FOOTER STATEMENT
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-50px",
          }}
          transition={{
            duration: 0.7,
          }}
          className="flex flex-col items-start justify-between gap-6 pt-12 mt-20 border-t sm:mt-28 sm:pt-16 md:flex-row md:items-center border-white/[0.07]"
        >
          <div>
            <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-neutral-600">
              07 projects · 2025—2026
            </p>

            <p className="mt-2 text-sm text-neutral-500">
              More experiments and client work are continuously being
              developed.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-3 text-sm font-medium text-white transition-colors group hover:text-emerald-400"
          >
            Start a project

            <span className="flex items-center justify-center w-9 h-9 transition-transform border rounded-full border-white/10 bg-white/[0.03] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:border-emerald-400/30">
              <ArrowUpRight size={15} />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

