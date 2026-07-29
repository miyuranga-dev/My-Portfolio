import { motion } from "framer-motion";
import { Home, ArrowLeft, AlertTriangle } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050816] px-6">

      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-emerald-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-violet-500/10 blur-[150px]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(16,185,129,.08) 1px, transparent 1px),linear-gradient(90deg,rgba(16,185,129,.08) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <motion.div
        initial={{ opacity: 0, scale: .9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: .7 }}
        className="relative max-w-xl w-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 text-center"
      >

        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
            <AlertTriangle className="w-10 h-10 text-emerald-400" />
          </div>
        </div>

        <h1 className="text-8xl md:text-9xl font-black bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
          404
        </h1>

        <h2 className="mt-6 text-3xl font-bold text-white">
          Lost in the Digital Universe
        </h2>

        <p className="mt-4 text-neutral-400 leading-7">
          The page you're looking for doesn't exist, may have been moved,
          or the URL is incorrect.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3 font-semibold text-black transition hover:bg-emerald-400"
          >
            <Home size={18} />
            Back to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 text-white transition hover:border-emerald-500 hover:text-emerald-400"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>

        </div>

      </motion.div>
    </section>
  );
}