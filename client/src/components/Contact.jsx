import { motion } from "framer-motion";
import { useState } from "react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { CheckCircle, Send, MessageSquare, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    subject: "Freelance / Contract Project",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setErrorMessage("");

  try {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/contact`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const result = await response.json();

    if (result.success) {
      setIsSubmitted(true);

      toast({
        title: "Message sent successfully! 🎉",
        description: "Thank you! I will contact you soon.",
      });

      setFormData({
        name: "",
        email: "",
        mobile: "",
        subject: "Freelance / Contract Project",
        message: "",
      });

    } else {
      throw new Error(result.message || "Failed to send message.");
    }

  } catch (error) {
    console.error("Contact form error:", error);

    toast({
      title: "Message failed ❌",
      description:
        "Unable to send message. Please try again later.",
      variant: "destructive",
    });

  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <section
      id="contact"
      className="relative z-10 py-28 px-6 border-t border-white/5 overflow-hidden bg-neutral-950/80"
    >
      {/* Radial ambient background glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <div className="flex items-center gap-2 mb-3">
              {/* Online Status Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-semibold">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Online</span>
              </div>
            </div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
              Let's build something{" "}
              <span className="text-emerald-400">extraordinary.</span>
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 mb-8 leading-relaxed">
              Have a project, role, or technical challenge? Send a direct
              message below and it will land straight in my inbox.
            </p>

            {/* Direct Email Link */}
            <div className="space-y-4 mb-8">
              <a
                href="mailto:miyuranga.dev@gmail.com"
                className="flex items-center gap-4 text-neutral-200 hover:text-emerald-400 transition-all p-4 rounded-2xl bg-neutral-900 border border-white/10 hover:border-emerald-500/40 group shadow-lg"
              >
                <div className="w-11 h-11 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/20 shrink-0 border border-emerald-500/20">
                  <FaEnvelope size={20} />
                </div>
                <div className="font-mono text-sm overflow-hidden">
                  <span className="text-[11px] text-neutral-400 block uppercase tracking-wider font-semibold">
                    Direct Email
                  </span>
                  <span className="text-white font-medium group-hover:text-emerald-300 transition-colors truncate block">
                    miyuranga.dev@gmail.com
                  </span>
                </div>
              </a>

              <a
                href="tel:+94742747144"
                className="flex items-center gap-4 text-neutral-300 hover:text-emerald-400 transition-all p-4 rounded-2xl bg-neutral-900/60 border border-white/10 hover:border-emerald-500/30 group"
              >
                <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-emerald-500/40 text-emerald-400 shrink-0">
                  <FaPhone size={18} />
                </div>
                <div className="font-mono text-sm">
                  <span className="text-[11px] text-neutral-400 block uppercase tracking-wider font-semibold">
                    Phone / WhatsApp
                  </span>
                  <span className="text-white font-medium">
                    +94 74 274 7144
                  </span>
                </div>
              </a>
            </div>

            {/* Social Buttons */}
            <div className="flex items-center gap-3 mb-8">
              <a
                href="https://github.com/miyuranga-dev"
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-white/10 hover:border-emerald-500/30 text-white font-mono text-xs flex items-center justify-center gap-2 transition-all"
              >
                <SiGithub size={18} className="text-emerald-400" />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/miyuranga-dev"
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-white/10 hover:border-emerald-500/30 text-white font-mono text-xs flex items-center justify-center gap-2 transition-all"
              >
                <FaLinkedin size={18} className="text-emerald-400" />
                <span>LinkedIn</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 bg-neutral-900/60 border border-white/10 p-6 sm:p-8 rounded-3xl relative backdrop-blur-sm shadow-2xl"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-16"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mb-6">
                  <CheckCircle className="text-emerald-400 w-8 h-8" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-2">
                  Message Sent Directly!
                </h3>
                <p className="text-neutral-300 text-sm max-w-md mb-6">
                  Thank you! Your message has been sent directly to{" "}
                  <strong className="text-emerald-400">
                    miyuranga.dev@gmail.com
                  </strong>
                  . I'll get back to you shortly.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: "",
                      mobile: "",
                      email: "",
                      subject: "Freelance / Contract Project",
                      message: "",
                    });
                  }}
                  className="px-6 py-2.5 rounded-xl bg-emerald-500 text-neutral-950 font-mono font-bold text-xs hover:bg-emerald-400 transition-colors"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center gap-2 mb-2 text-emerald-400 font-mono text-xs uppercase tracking-wider">
                  <MessageSquare size={14} /> Send a direct message
                </div>

                {errorMessage && (
                  <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-mono flex items-center gap-2">
                    <AlertCircle size={16} /> {errorMessage}
                  </div>
                )}

                {/* Subject Selector */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-neutral-400 mb-1.5">
                    Inquiry Purpose
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full bg-neutral-950 border border-white/10 focus:border-emerald-500/60 rounded-xl px-4 py-3 text-sm text-white outline-none transition-colors font-sans"
                  >
                    <option value="Freelance / Contract Project">
                      Freelance / Contract Project
                    </option>
                    <option value="Full-time / Internship Hiring">
                      Full-time / Internship Hiring
                    </option>
                    <option value="General Inquiry">
                      General Inquiry
                    </option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-neutral-400 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-neutral-950 border border-white/10 focus:border-emerald-500/60 rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-600 outline-none transition-colors"
                      placeholder="Jane Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-neutral-400 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-neutral-950 border border-white/10 focus:border-emerald-500/60 rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-600 outline-none transition-colors"
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-neutral-400 mb-1.5">
                    Phone / WhatsApp (Optional)
                  </label>
                  <input
                    type="tel"
                    value={formData.mobile}
                    onChange={(e) =>
                      setFormData({ ...formData, mobile: e.target.value })
                    }
                    className="w-full bg-neutral-950 border border-white/10 focus:border-emerald-500/60 rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-600 outline-none transition-colors"
                    placeholder="0710000000"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-neutral-400 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-neutral-950 border border-white/10 focus:border-emerald-500/60 rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-600 outline-none transition-colors resize-none"
                    placeholder="Tell me about the role or project requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full relative overflow-hidden group bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] font-sans text-sm disabled:opacity-50"
                >
                  <span className="relative flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5 text-neutral-950"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending Directly...
                      </>
                    ) : (
                      <>
                        <Send size={16} /> Let's Connect
                      </>
                    )}
                  </span>
                </button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Footer info */}
        <div className="mt-24 text-center pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-neutral-500 gap-4">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="text-white font-medium">Miyuranga-Dev</span>. All
            rights reserved.
          </p>

          <p className="flex items-center gap-1">
            Designed & Developed by{" "}
            <span className="text-emerald-400 font-semibold">
              Prabodana Miyuranga
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
