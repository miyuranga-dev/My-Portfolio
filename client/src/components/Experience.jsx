import { motion } from 'framer-motion';
import { Briefcase, CheckCircle2, Building2, Calendar } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="relative z-10 py-28 px-6 bg-neutral-950/70 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-14">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/30 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
              <Briefcase size={24} />
            </div>
            <div>
              <span className="text-emerald-400 font-mono text-xs uppercase tracking-widest block">Work History</span>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-white">
                Professional Experience
              </h2>
            </div>
          </div>
          
          <div className="relative border-l-2 border-emerald-500/30 ml-6 md:ml-6 pb-4 pl-8 md:pl-10">
            <div className="absolute w-4 h-4 bg-emerald-500 rounded-full -left-[9px] top-1 shadow-[0_0_15px_rgba(16,185,129,0.9)]" />
            
            <div className="bg-neutral-900/80 border border-white/10 p-6 sm:p-8 rounded-2xl backdrop-blur-sm shadow-xl hover:border-emerald-500/40 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-2xl font-display font-bold text-white mb-1">QA Technician</h3>
                  <div className="flex items-center gap-2 text-neutral-300 text-sm font-medium">
                    <Building2 size={16} className="text-emerald-400" />
                    <span>Global System Solutions</span>
                    <span className="text-neutral-500">&bull;</span>
                    <span className="text-neutral-400">Kurunegala, Sri Lanka</span>
                  </div>
                </div>
                
                <span className="font-mono text-xs font-semibold text-emerald-300 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/30 self-start sm:self-auto flex items-center gap-1.5">
                  <Calendar size={12} /> Oct 2024 – Mar 2025
                </span>
              </div>
              
              <ul className="space-y-3 text-neutral-300 text-sm leading-relaxed mt-4">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span>Labeled and annotated complex product datasets to train high-accuracy AI image recognition and Machine Learning models.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span>Ensured strict data quality control and precision metrics to maximize neural model predictive performance.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                  <span>Collaborated closely with data science engineering teams to analyze edge cases and refine taxonomy standards.</span>
                </li>
              </ul>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
