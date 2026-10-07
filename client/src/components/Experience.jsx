import { motion } from "framer-motion";
import {
  Briefcase,
  CheckCircle2,
  Building2,
  Calendar,
  Code2,
  Laptop,
} from "lucide-react";

const experiences = [
  {
    role: "Software Engineer Intern",
    company: "Klyanz Technologies",
    location: "Sri Lanka",
    period: "May 2026 – Present",
    type: "Current Role",
    icon: Code2,
    points: [
      "Contributing to the development of modern web applications using contemporary software engineering practices.",
      "Building responsive user interfaces and implementing application features across the development lifecycle.",
      "Collaborating with the development team to troubleshoot issues, improve functionality, and deliver reliable software.",
    ],
  },
  {
    role: "Freelance Full-Stack Developer",
    company: "Self-Employed",
    location: "Remote",
    period: "Mar 2022 – Present",
    type: "Freelance",
    icon: Laptop,
    points: [
      "Designing and developing responsive, full-stack websites and web applications for business requirements.",
      "Building custom solutions with modern frontend technologies, backend APIs, and database integrations.",
      "Developing business-focused projects, including hotel websites, booking experiences, and management systems.",
    ],
  },
  {
    role: "QA Technician",
    company: "Global System Solutions",
    location: "Kurunegala, Sri Lanka",
    period: "Oct 2024 – Mar 2025",
    type: "Previous Role",
    icon: CheckCircle2,
    points: [
      "Labeled and annotated complex product datasets to support AI image recognition and machine learning models.",
      "Maintained data quality standards and accuracy through detailed validation and quality control.",
      "Collaborated with data science teams to analyze edge cases and refine data annotation standards.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative z-10 px-6 border-t border-white/5 bg-neutral-950/70 py-28"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Heading */}
          <div className="flex items-center gap-4 mb-14">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
              <Briefcase size={24} />
            </div>

            <div>
              <span className="block font-mono text-xs tracking-widest uppercase text-emerald-400">
                Work History
              </span>

              <h2 className="text-4xl font-bold tracking-tight text-white font-display md:text-5xl">
                Professional Experience
              </h2>
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="relative pb-4 ml-3 border-l-2 border-emerald-500/30 pl-7 sm:ml-6 sm:pl-10">
            {experiences.map((experience, index) => {
              const Icon = experience.icon;
              const isCurrent = index === 0;

              return (
                <motion.div
                  key={experience.role}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15,
                  }}
                  className={`relative ${
                    index !== experiences.length - 1 ? "mb-10" : ""
                  }`}
                >
                  {/* Timeline Dot */}
                  <div
                    className={`absolute -left-[36px] top-1 flex h-4 w-4 items-center justify-center rounded-full sm:-left-[49px] ${
                      isCurrent
                        ? "bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.9)]"
                        : "border-2 border-emerald-500/60 bg-neutral-950"
                    }`}
                  />

                  {/* Experience Card */}
                  <div
                    className={`rounded-2xl border p-6 shadow-xl backdrop-blur-sm transition-colors duration-300 sm:p-8 ${
                      isCurrent
                        ? "border-emerald-500/30 bg-neutral-900/90 hover:border-emerald-500/60"
                        : "border-white/10 bg-neutral-900/70 hover:border-emerald-500/30"
                    }`}
                  >
                    {/* Role and Date */}
                    <div className="flex flex-col justify-between gap-4 mb-5 sm:flex-row sm:items-start">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <h3 className="text-xl font-bold text-white font-display sm:text-2xl">
                            {experience.role}
                          </h3>

                          {isCurrent && (
                            <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-emerald-300">
                              Current
                            </span>
                          )}
                        </div>

                        <div className="flex flex-wrap items-center text-sm font-medium gap-x-2 gap-y-1 text-neutral-300">
                          <Building2
                            size={16}
                            className="shrink-0 text-emerald-400"
                          />
                          <span>{experience.company}</span>

                          <span className="text-neutral-600">•</span>

                          <span className="text-neutral-400">
                            {experience.location}
                          </span>
                        </div>
                      </div>

                      <span className="flex shrink-0 items-center gap-1.5 self-start rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1.5 font-mono text-xs font-semibold text-emerald-300">
                        <Calendar size={12} />
                        {experience.period}
                      </span>
                    </div>

                    {/* Responsibilities */}
                    <ul className="mt-5 space-y-3 text-sm leading-relaxed text-neutral-300">
                      {experience.points.map((point, pointIndex) => (
                        <li
                          key={pointIndex}
                          className="flex items-start gap-2.5"
                        >
                          <CheckCircle2
                            size={16}
                            className="mt-0.5 shrink-0 text-emerald-400"
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}