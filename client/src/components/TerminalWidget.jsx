import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, X, Play, CornerDownLeft, Sparkles } from 'lucide-react';

const COMMANDS = {
  help: `Available Commands:
  • skills      : Output core technical stack & proficiency
  • projects    : List featured full-stack projects
  • experience  : Show work history & roles
  • education   : Display degree & certifications
  • hire        : Quick recruiter contact info & direct email
  • clear       : Clear the terminal output`,

  skills: `┌───────────────────────────────────────────────┐
│              TECHNICAL ARSENAL                │
├───────────────────────────────────────────────┤
│ Frontend  : React.js, Tailwind, HTML5, CSS3   │
│ Backend   : Node.js, Express.js, REST APIs     │
│ DB        : MongoDB, MySQL, SQL Server         │
│ AI        : Google Gemini AI API              │
│ Languages : JavaScript (ES6+), Python, C#     │
│ Tools     : Git, GitHub, Vercel, Postman      │
└───────────────────────────────────────────────┘`,

  projects: `┌────────────────────────────────────────────────────────────┐
│                    FEATURED WORKS                          │
├────────────────────────────────────────────────────────────┤
│ 1. EduMind AI               [React | Node | Gemini AI]    │
│    AI Study Assistant for YouTube summarize & quiz         │
│                                                            │
│ 2. Quick Stay               [MERN | Stripe | Auth]        │
│    Hotel booking platform with payment & owner dashboard   │
│                                                            │
│ 3. Curtain House POS        [MERN | Inventory System]     │
│    Full-stack billing, stock tracking & management         │
│                                                            │
│ 4. Juice Bar Landing        [React | GSAP ScrollTrigger]  │
│    Scroll-driven cinematic web experience                  │
└────────────────────────────────────────────────────────────┘`,

  experience: `[Oct 2024 – Mar 2025]
Role    : QA Technician
Company : Global System Solutions (Kurunegala)
Focus   : AI Image Recognition Data Labeling & Quality Assurance`,

  education: `Pearson HND in Computing & Software Engineering (2022–2024)
University of Moratuwa Full Stack Developer Certification
Pearson Diploma in Information Technology (2021)`,

  hire: `★ STATUS: OPEN TO FULL-TIME & INTERNSHIP ROLES ★
-------------------------------------------------
Name     : Prabodana Miyuranga Balasooriya
Location : Sri Lanka
Email    : miyuranga.dev@gmail.com
Phone    : +94 74 274 7144
GitHub   : github.com/miyuranga-dev
LinkedIn : linkedin.com/in/miyuranga-dev`
};

export default function TerminalWidget({ isOpen, onClose }) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'sys', text: 'Balasooriya Dev CLI v2.5 [Type "help" or click buttons below]' },
    { type: 'sys', text: 'System ready. Type "hire" for instant recruiter summary.' }
  ]);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleRunCommand = (cmd) => {
    const cleanCmd = cmd.trim().toLowerCase();
    if (!cleanCmd) return;

    if (cleanCmd === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    const output = COMMANDS[cleanCmd] || `Command not found: "${cleanCmd}". Type "help" for available commands.`;
    
    setHistory((prev) => [
      ...prev,
      { type: 'user', text: `$ ${cmd}` },
      { type: 'sys', text: output }
    ]);
    setInput('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRunCommand(input);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.25 }}
            className="w-full max-w-3xl bg-neutral-950 border border-emerald-500/30 rounded-2xl shadow-[0_0_50px_rgba(16,185,129,0.15)] overflow-hidden flex flex-col max-h-[85vh]"
          >
            {/* Terminal Header */}
            <div className="bg-neutral-900/90 px-4 py-3 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 font-mono text-xs text-neutral-400 flex items-center gap-1.5">
                  <TerminalIcon size={14} className="text-emerald-400" />
                  miyuranga-dev@portfolio:~
                </span>
              </div>
              <button
                onClick={onClose}
                className="text-neutral-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10"
              >
                <X size={18} />
              </button>
            </div>

            {/* Quick Chips */}
            <div className="px-4 py-2 bg-neutral-900/40 border-b border-white/5 flex flex-wrap gap-2 text-xs font-mono">
              <span className="text-neutral-500 flex items-center gap-1 py-1">
                <Sparkles size={12} className="text-emerald-400" /> Quick actions:
              </span>
              {['hire', 'skills', 'projects', 'experience', 'education', 'help'].map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => handleRunCommand(cmd)}
                  className="px-2.5 py-1 rounded bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/20 transition-all flex items-center gap-1"
                >
                  <Play size={10} /> {cmd}
                </button>
              ))}
            </div>

            {/* Terminal Body */}
            <div className="p-4 overflow-y-auto flex-1 font-mono text-sm space-y-3 leading-relaxed selection:bg-emerald-500/30">
              {history.map((item, idx) => (
                <div key={idx} className={item.type === 'user' ? 'text-emerald-400 font-semibold' : 'text-neutral-300 whitespace-pre-wrap'}>
                  {item.text}
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Input Form */}
            <form onSubmit={handleSubmit} className="p-3 bg-neutral-900/90 border-t border-white/10 flex items-center gap-2">
              <span className="font-mono text-emerald-400 text-sm pl-2">$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a command (e.g. 'hire', 'skills')..."
                className="flex-1 bg-transparent border-none outline-none font-mono text-sm text-white placeholder:text-neutral-600"
              />
              <button
                type="submit"
                className="px-3 py-1.5 bg-emerald-500 text-neutral-950 font-bold text-xs rounded hover:bg-emerald-400 transition-colors flex items-center gap-1 font-mono"
              >
                Run <CornerDownLeft size={12} />
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
