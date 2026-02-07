import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";
import { BookOpen, HeartPulse, Brain, Shield, Sparkles } from "lucide-react";

const loreEntries = [
  {
    title: "THE CARDIOLOGY CHRONICLES",
    icon: HeartPulse,
    content:
      "Deep within the data streams, investigating post-COVID cardiac complications. Through rigorous analysis and pattern recognition, contributing to humanity's understanding of long-term cardiovascular effects and recovery pathways.",
    color: "from-red-500 to-pink-600",
    tag: "RESEARCH",
  },
  {
    title: "HUMAN-MACHINE SYMPHONY",
    icon: Brain,
    content:
      "Exploring the boundaries where human cognition meets artificial intelligence. Architecting multimodal systems that bridge the gap between complex AI and intuitive interaction, creating experiences that feel natural yet transcendent.",
    color: "from-violet-500 to-purple-600",
    tag: "HCI",
  },
  {
    title: "THE DATA PROPHECY",
    icon: BookOpen,
    content:
      "Wielding statistical methods and machine learning as tools of foresight. Extracting actionable wisdom from chaotic datasets across healthcare and technology, transforming noise into narrative, data into destiny.",
    color: "from-cyan-500 to-blue-600",
    tag: "DATA SCIENCE",
  },
  {
    title: "GUARDIAN PROTOCOL",
    icon: Shield,
    content:
      "Bound by the oath of ethical AI development. Building systems that prioritize transparency, fairness, and privacy. Every algorithm written with humanity's future in mind, ensuring technology serves rather than controls.",
    color: "from-green-500 to-teal-600",
    tag: "ETHICS",
  },
];

export function LoreSection() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section id="research" ref={ref} className="relative py-32 px-6">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-64 h-64 border border-violet-500/20 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 border border-cyan-500/20 rounded-full"
        />
      </div>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto mb-16 relative z-10"
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="h-1 w-20 bg-gradient-to-r from-transparent to-violet-500" />
          <h2 className="text-5xl md:text-6xl font-black tracking-tight">
            <span className="text-white">RESEARCH</span>
            <span className="text-violet-400 ml-4">LORE</span>
          </h2>
        </div>
        <p className="text-violet-400 font-mono text-sm">// WORLD_BUILDING.json</p>
      </motion.div>

      {/* Lore Grid */}
      <div className="max-w-6xl mx-auto relative z-10 space-y-8">
        {loreEntries.map((entry, index) => {
          const Icon = entry.icon;
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={entry.title}
              initial={{ opacity: 0, y: 50, rotateX: isEven ? -10 : 10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.8, type: "spring" }}
              className="group relative"
            >
              {/* Card Background with Parallax Effect */}
              <motion.div
                initial={{ scale: 0.95 }}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative border border-gray-800 bg-gradient-to-br from-black via-gray-900 to-black backdrop-blur-xl overflow-hidden"
              >
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 1px)`,
                      backgroundSize: "40px 40px",
                    }}
                  />
                </div>

                {/* Top Accent Bar */}
                <motion.div
                  className={`h-1 bg-gradient-to-r ${entry.color}`}
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ delay: index * 0.2 + 0.3, duration: 0.8 }}
                  style={{ transformOrigin: isEven ? "left" : "right" }}
                />

                {/* Content */}
                <div className="relative p-8 md:p-12">
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    {/* Icon */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: index * 0.2 + 0.4, type: "spring" }}
                      className="relative"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${entry.color} blur-2xl opacity-50`} />
                      <div className={`relative p-6 bg-gradient-to-r ${entry.color} rounded-lg`}>
                        <Icon className="w-12 h-12 text-black" />
                      </div>
                    </motion.div>

                    {/* Text Content */}
                    <div className="flex-1">
                      {/* Tag */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.2 + 0.5 }}
                        className="mb-3"
                      >
                        <span className="px-3 py-1 border border-gray-700 bg-gray-800/50 text-gray-400 text-xs font-mono">
                          {entry.tag}
                        </span>
                      </motion.div>

                      {/* Title */}
                      <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: index * 0.2 + 0.6 }}
                        className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight"
                      >
                        {entry.title}
                      </motion.h3>

                      {/* Description */}
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: index * 0.2 + 0.7 }}
                        className="text-gray-300 text-lg leading-relaxed"
                      >
                        {entry.content}
                      </motion.p>
                    </div>
                  </div>
                </div>

                {/* Bottom Accent Bar */}
                <motion.div
                  className={`h-1 bg-gradient-to-r ${entry.color}`}
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ delay: index * 0.2 + 0.8, duration: 0.8 }}
                  style={{ transformOrigin: isEven ? "right" : "left" }}
                />
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Closing Statement */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1, duration: 0.8 }}
        className="max-w-6xl mx-auto mt-16 text-center relative z-10"
      >
        <div className="border-t border-b border-gray-800 py-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-6 h-6 text-violet-400" />
            <p className="text-2xl font-bold text-white">
              Innovation Driven by
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-400 to-red-400">
                {" "}Purpose & Ethics{" "}
              </span>
            </p>
            <Sparkles className="w-6 h-6 text-cyan-400" />
          </div>
          <p className="text-gray-400 font-mono text-sm">
            // Building the future, one ethical decision at a time
          </p>
        </div>
      </motion.div>
    </section>
  );
}
