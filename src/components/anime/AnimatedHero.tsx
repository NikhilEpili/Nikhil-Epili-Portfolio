import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export function AnimatedHero() {
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setTextVisible(true), 500);
  }, []);

  const scrollToNext = () => {
    document.getElementById("profile")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Animated Corner Brackets */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-10 left-10 w-20 h-20 border-t-2 border-l-2 border-cyan-500 shadow-[0_0_15px_rgba(0,255,255,0.5)]" />
        <div className="absolute top-10 right-10 w-20 h-20 border-t-2 border-r-2 border-violet-500 shadow-[0_0_15px_rgba(138,43,226,0.5)]" />
        <div className="absolute bottom-10 left-10 w-20 h-20 border-b-2 border-l-2 border-red-500 shadow-[0_0_15px_rgba(255,0,128,0.5)]" />
        <div className="absolute bottom-10 right-10 w-20 h-20 border-b-2 border-r-2 border-cyan-500 shadow-[0_0_15px_rgba(0,255,255,0.5)]" />
      </motion.div>

      {/* Main Content */}
      <div className="max-w-6xl w-full">
        {/* System Boot Text */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 font-mono text-cyan-400 text-sm"
        >
          <span className="inline-block">{'>'} SYSTEM INITIALIZING...</span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="block mt-1"
          >
            {'>'} LOADING PROFILE_NIKHIL_EPILI.exe
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="block mt-1 text-green-400"
          >
            {'>'} ✓ READY
          </motion.span>
        </motion.div>

        {/* Name with Glitch Effect */}
        <div className="relative mb-8">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 0.8, type: "spring" }}
            className="text-7xl md:text-9xl font-black tracking-tighter relative z-10"
          >
            <span className="inline-block bg-gradient-to-r from-cyan-400 via-violet-500 to-red-500 bg-clip-text text-transparent animate-pulse">
              NIKHIL
            </span>
            <br />
            <span className="inline-block bg-gradient-to-r from-red-500 via-violet-500 to-cyan-400 bg-clip-text text-transparent">
              EPILI
            </span>
          </motion.h1>

          {/* Glitch Layers */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.3, 0, 0.5, 0] }}
            transition={{ delay: 2, duration: 0.8, repeat: Infinity, repeatDelay: 5 }}
            className="absolute top-0 left-0 text-7xl md:text-9xl font-black tracking-tighter text-cyan-500 z-0"
            style={{ transform: "translate(2px, 2px)" }}
          >
            NIKHIL
            <br />
            EPILI
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.3, 0, 0.5, 0] }}
            transition={{ delay: 2.1, duration: 0.8, repeat: Infinity, repeatDelay: 5 }}
            className="absolute top-0 left-0 text-7xl md:text-9xl font-black tracking-tighter text-red-500 z-0"
            style={{ transform: "translate(-2px, -2px)" }}
          >
            NIKHIL
            <br />
            EPILI
          </motion.h1>
        </div>

        {/* Tagline - Anime Subtitle Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.8 }}
          className="relative mb-12"
        >
          <div className="inline-block bg-black/80 border-l-4 border-cyan-500 px-6 py-4 backdrop-blur-sm">
            <p className="text-2xl md:text-4xl font-bold text-white tracking-wide">
              Building Intelligent Systems
              <span className="block text-cyan-400 mt-1">Beyond Reality</span>
            </p>
          </div>
        </motion.div>

        {/* Role Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.8, duration: 0.6 }}
          className="flex flex-wrap gap-4 mb-12"
        >
          {["AI/ML ENGINEER", "COMPETITIVE CODER", "HACKATHON BUILDER"].map((tag, index) => (
            <motion.div
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.8 + index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-violet-500 blur-sm group-hover:blur-md transition-all" />
              <div className="relative bg-black border border-cyan-500 px-4 py-2 font-mono text-sm tracking-wider text-cyan-400 group-hover:text-white transition-colors">
                {tag}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.2, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="group relative px-8 py-4 font-bold text-lg overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-violet-600 transition-transform group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
            <span className="relative z-10 flex items-center gap-2">
              VIEW MISSIONS
              <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
            </span>
          </button>

          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="group relative px-8 py-4 font-bold text-lg overflow-hidden border-2 border-cyan-500 hover:border-violet-500 transition-colors"
          >
            <div className="absolute inset-0 bg-cyan-500/10 group-hover:bg-violet-500/20 transition-colors" />
            <span className="relative z-10 text-cyan-400 group-hover:text-violet-400 transition-colors">
              INITIATE CONTACT
            </span>
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 3.5, duration: 2, repeat: Infinity }}
        onClick={scrollToNext}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
      >
        <span className="text-sm font-mono">SCROLL</span>
        <ChevronDown className="w-6 h-6" />
      </motion.button>
    </section>
  );
}
