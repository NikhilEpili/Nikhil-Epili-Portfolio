import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";
import { Code, Cpu, Database, Boxes, Wrench, Globe2 } from "lucide-react";

const powerCategories = [
  {
    name: "PROGRAMMING",
    icon: Code,
    color: "cyan",
    level: 95,
    skills: ["Python", "C++", "TypeScript"],
  },
  {
    name: "AI/ML CORE",
    icon: Cpu,
    color: "violet",
    level: 92,
    skills: ["RAG", "TensorFlow", "PyTorch", "NLP", "CNN"],
  },
  {
    name: "FRAMEWORKS",
    icon: Boxes,
    color: "red",
    level: 90,
    skills: ["FastAPI", "Hugging Face", "LangChain"],
  },
  {
    name: "DATABASES",
    icon: Database,
    color: "cyan",
    level: 88,
    skills: ["PostgreSQL", "MongoDB", "Redis"],
  },
  {
    name: "SYSTEMS",
    icon: Wrench,
    color: "violet",
    level: 85,
    skills: ["Docker", "Git", "CI/CD","Kubernetes"],
  },
  {
    name: "DOMAINS",
    icon: Globe2,
    color: "red",
    level: 93,
    skills: ["AI SaaS", "IoT", "Blockchain", "HealthTech"],
  },
];

const getColorClasses = (color: string) => {
  const colors = {
    cyan: {
      border: "border-cyan-500",
      bg: "bg-cyan-500",
      text: "text-cyan-400",
      shadow: "shadow-cyan-500/50",
      glow: "shadow-[0_0_20px_rgba(0,255,255,0.5)]",
    },
    violet: {
      border: "border-violet-500",
      bg: "bg-violet-500",
      text: "text-violet-400",
      shadow: "shadow-violet-500/50",
      glow: "shadow-[0_0_20px_rgba(138,43,226,0.5)]",
    },
    red: {
      border: "border-red-500",
      bg: "bg-red-500",
      text: "text-red-400",
      shadow: "shadow-red-500/50",
      glow: "shadow-[0_0_20px_rgba(255,0,80,0.5)]",
    },
  };
  return colors[color as keyof typeof colors] || colors.cyan;
};

export function PowerSystem() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="skills" ref={ref} className="relative py-32 px-6">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto mb-16"
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="h-1 w-20 bg-gradient-to-r from-transparent to-violet-500" />
          <h2 className="text-5xl md:text-6xl font-black tracking-tight">
            <span className="text-white">POWER</span>
            <span className="text-violet-400 ml-4">SYSTEM</span>
          </h2>
        </div>
        <p className="text-violet-400 font-mono text-sm">// ABILITIES.json</p>
      </motion.div>

      {/* Power Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {powerCategories.map((category, index) => {
          const Icon = category.icon;
          const colors = getColorClasses(category.color);

          return (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6, type: "spring" }}
              className="group relative"
            >
              {/* Hover Glow */}
              <div className={`absolute -inset-1 ${colors.bg} opacity-0 group-hover:opacity-20 blur-xl transition-opacity`} />

              {/* Card */}
              <div className={`relative border ${colors.border} bg-black/80 backdrop-blur-sm overflow-hidden`}>
                {/* Top Bar */}
                <div className={`border-b ${colors.border} p-3 bg-gradient-to-r from-${category.color}-500/10 to-transparent`}>
                  <div className="flex items-center gap-3">
                    <div className={`p-2 ${colors.bg} ${colors.glow}`}>
                      <Icon className="w-5 h-5 text-black" />
                    </div>
                    <span className={`font-mono text-sm ${colors.text} tracking-wider`}>
                      {category.name}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Power Level */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-mono text-gray-400">POWER_LEVEL</span>
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: index * 0.1 + 0.5 }}
                        className={`text-2xl font-black ${colors.text}`}
                      >
                        {category.level}
                      </motion.span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="relative h-2 bg-gray-800 border border-gray-700 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${category.level}%` } : {}}
                        transition={{ delay: index * 0.1 + 0.3, duration: 1, ease: "easeOut" }}
                        className={`absolute inset-y-0 left-0 ${colors.bg} ${colors.glow}`}
                      />
                      {/* Animated Scan Line */}
                      <motion.div
                        animate={{ x: ["-100%", "200%"] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: index * 0.2 }}
                        className={`absolute inset-y-0 w-20 bg-gradient-to-r from-transparent via-white to-transparent opacity-50`}
                      />
                    </div>
                  </div>

                  {/* Skills */}
                  <div>
                    <p className="text-xs font-mono text-gray-400 mb-3">SKILLS:</p>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: index * 0.1 + 0.6 + skillIndex * 0.05 }}
                          className={`px-2 py-1 border ${colors.border} bg-${category.color}-500/10 ${colors.text} text-xs font-mono`}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Accent */}
                <div className={`h-1 bg-gradient-to-r from-transparent via-${category.color}-500 to-transparent`} />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Overall Power Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="max-w-6xl mx-auto mt-12"
      >
        <div className="relative border border-cyan-500 bg-black/80 p-6 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-mono text-gray-400 mb-1">OVERALL_COMBAT_POWER</p>
              <p className="text-4xl font-black text-cyan-400">9999+</p>
            </div>
            <div className="text-right">
              <p className="text-xs font-mono text-gray-400 mb-1">STATUS</p>
              <div className="flex items-center gap-2">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-3 h-3 bg-green-500 rounded-full shadow-[0_0_10px_rgba(0,255,0,0.8)]"
                />
                <p className="text-lg font-bold text-green-400">ACTIVE</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
