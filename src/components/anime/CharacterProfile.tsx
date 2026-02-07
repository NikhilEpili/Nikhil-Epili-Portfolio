import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";
import { Terminal, Zap, Target, Heart } from "lucide-react";

export function CharacterProfile() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const stats = [
    { label: "ROLE", value: "AI/ML & Full-Stack Engineer", icon: Terminal },
    { label: "SPECIALIZATION", value: "HealthTech × AI × Blockchain", icon: Zap },
    { label: "MOTIVATION", value: "Real-world impact through innovation", icon: Target },
    { label: "PHILOSOPHY", value: "Ethical AI for humanity", icon: Heart },
  ];

  return (
    <section id="profile" ref={ref} className="relative py-32 px-6">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto mb-12"
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="h-1 w-20 bg-gradient-to-r from-transparent to-cyan-500" />
          <h2 className="text-5xl md:text-6xl font-black tracking-tight">
            <span className="text-white">CHARACTER</span>
            <span className="text-cyan-400 ml-4">PROFILE</span>
          </h2>
        </div>
        <p className="text-cyan-400 font-mono text-sm">// IDENTITY_DATA.json</p>
      </motion.div>

      {/* Profile Card */}
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="relative"
        >
          {/* Holographic Border Effect */}
          <div className="absolute -inset-[2px] bg-gradient-to-r from-cyan-500 via-violet-500 to-red-500 opacity-50 blur-sm" />
          
          <div className="relative bg-black/90 border border-cyan-500/50 backdrop-blur-xl">
            {/* Header Bar */}
            <div className="border-b border-cyan-500/30 p-4 bg-gradient-to-r from-cyan-500/10 to-transparent">
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_10px_rgba(255,0,0,0.8)]" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(255,255,0,0.8)]" />
                  <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(0,255,0,0.8)]" />
                </div>
                <span className="font-mono text-sm text-cyan-400">PROFILE_ACTIVE.exe</span>
              </div>
            </div>

            {/* Content Grid */}
            <div className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column - Stats */}
                <div className="space-y-6">
                  {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                        className="group relative"
                      >
                        {/* Glow Effect on Hover */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-violet-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity" />
                        
                        <div className="relative border border-cyan-500/30 p-4 bg-cyan-500/5 group-hover:border-cyan-400 transition-colors">
                          <div className="flex items-center gap-3 mb-2">
                            <Icon className="w-5 h-5 text-cyan-400" />
                            <span className="font-mono text-xs text-cyan-400 tracking-wider">
                              {stat.label}
                            </span>
                          </div>
                          <p className="text-white text-lg font-semibold ml-8">
                            {stat.value}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Right Column - Bio */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="space-y-6"
                >
                  <div className="border-l-4 border-violet-500 pl-6 py-2">
                    <h3 className="text-2xl font-bold text-white mb-4">ABOUT</h3>
                    <div className="space-y-4 text-gray-300 leading-relaxed">
                      <p>
                        Computer Science engineer passionate about{" "}
                        <span className="text-cyan-400 font-semibold">
                          building technology that transcends limits
                        </span>
                        . Operating at the intersection of AI/ML, HealthTech, and Full-Stack development.
                      </p>
                      <p>
                        From <span className="text-violet-400">AI-powered healthcare platforms</span> to{" "}
                        <span className="text-red-400">deepfake detection systems</span>, I architect solutions
                        that push the boundaries of what's possible.
                      </p>
                      <p>
                        Thriving in <span className="text-cyan-400">hackathons</span> and competitive environments,
                        where rapid innovation meets world-changing impact.
                      </p>
                    </div>
                  </div>

                  {/* Focus Areas Tags */}
                  <div className="space-y-3">
                    <p className="text-sm font-mono text-cyan-400">FOCUS_AREAS:</p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "AI for Healthcare",
                        "RAG Systems",
                        "Misinformation Detection",
                        "Human-Computer Interaction",
                        "IoT + Blockchain",
                      ].map((area, index) => (
                        <motion.span
                          key={area}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: 0.8 + index * 0.1 }}
                          className="px-3 py-1 border border-violet-500/50 bg-violet-500/10 text-violet-300 text-sm font-mono hover:border-violet-400 hover:bg-violet-500/20 transition-colors cursor-default"
                        >
                          {area}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Footer Bar with Scan Line */}
            <div className="border-t border-cyan-500/30 p-3 bg-gradient-to-r from-transparent to-cyan-500/10">
              <motion.div
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="h-[2px] w-32 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
