import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";
import { Trophy, Swords, Users, Briefcase, Star, Award } from "lucide-react";

const achievements = [
  {
    year: "2024-2026",
    title: "HACKATHON WARRIOR",
    icon: Trophy,
    color: "from-yellow-500 to-orange-500",
    events: [
      "Multiple hackathon victories across India",
      "Built 4+ production-ready platforms in 48-hour sprints",
      "Recognized for innovation in AI/ML and HealthTech",
    ],
  },
  {
    year: "2023-2025",
    title: "COMMUNITY LEADER",
    icon: Users,
    color: "from-cyan-500 to-blue-500",
    events: [
      "Led developer communities and tech groups",
      "Mentored 50+ students in AI/ML and web development",
      "Organized technical workshops and knowledge sessions",
    ],
  },
  {
    year: "2024",
    title: "INDUSTRY RECOGNITION",
    icon: Briefcase,
    color: "from-violet-500 to-purple-500",
    events: [
      "Shortlisted for top-tier internship programs",
      "Recognition from industry leaders for innovative work",
      "Strong academic excellence in Computer Science",
    ],
  },
  {
    year: "2023-2026",
    title: "RESEARCH CONTRIBUTOR",
    icon: Star,
    color: "from-red-500 to-pink-500",
    events: [
      "Published research in healthcare technology",
      "Contributed to cardiology post-COVID studies",
      "Developed open-source AI tools for community",
    ],
  },
];

export function BattleHistory() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="achievements" ref={ref} className="relative py-32 px-6">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto mb-16"
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="h-1 w-20 bg-gradient-to-r from-transparent to-yellow-500" />
          <h2 className="text-5xl md:text-6xl font-black tracking-tight">
            <span className="text-white">BATTLE</span>
            <span className="text-yellow-400 ml-4">HISTORY</span>
          </h2>
        </div>
        <p className="text-yellow-400 font-mono text-sm">// ACHIEVEMENTS.log</p>
      </motion.div>

      {/* Timeline */}
      <div className="max-w-5xl mx-auto relative">
        {/* Central Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-violet-500 to-red-500 transform md:-translate-x-1/2" />

        {/* Timeline Items */}
        <div className="space-y-16">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.8, type: "spring" }}
                className={`relative flex items-center ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col gap-8`}
              >
                {/* Content Card */}
                <div className={`w-full md:w-[calc(50%-4rem)] ${isLeft ? "md:text-right" : "md:text-left"}`}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="group relative"
                  >
                    {/* Glow Effect */}
                    <div className={`absolute -inset-2 bg-gradient-to-r ${achievement.color} opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500`} />

                    {/* Card */}
                    <div className="relative border-2 border-gray-800 bg-black/90 backdrop-blur-xl p-6 md:p-8">
                      {/* Year Tag */}
                      <div className={`inline-block mb-4 px-3 py-1 border border-gray-700 bg-gray-800/50 text-gray-400 text-xs font-mono`}>
                        {achievement.year}
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl md:text-3xl font-black text-white mb-4 tracking-tight">
                        {achievement.title}
                      </h3>

                      {/* Events */}
                      <ul className="space-y-2">
                        {achievement.events.map((event, eventIndex) => (
                          <motion.li
                            key={eventIndex}
                            initial={{ opacity: 0, y: 10 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.2 + 0.3 + eventIndex * 0.1 }}
                            className={`flex items-start gap-3 text-gray-300 ${
                              isLeft ? "md:flex-row-reverse md:text-right" : ""
                            }`}
                          >
                            <span className="text-cyan-400 mt-1">▹</span>
                            <span>{event}</span>
                          </motion.li>
                        ))}
                      </ul>

                      {/* Bottom Accent */}
                      <div className={`mt-6 h-1 bg-gradient-to-r ${achievement.color}`} />
                    </div>
                  </motion.div>
                </div>

                {/* Center Icon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.2 + 0.2, type: "spring" }}
                  className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 z-10"
                >
                  <div className="relative">
                    {/* Pulsing Glow */}
                    <motion.div
                      animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className={`absolute inset-0 bg-gradient-to-r ${achievement.color} blur-xl`}
                    />
                    
                    {/* Icon Container */}
                    <div className={`relative p-4 bg-gradient-to-r ${achievement.color} rounded-full border-4 border-black`}>
                      <Icon className="w-8 h-8 text-black" />
                    </div>
                  </div>
                </motion.div>

                {/* Spacer for alignment */}
                <div className="hidden md:block w-[calc(50%-4rem)]" />
              </motion.div>
            );
          })}
        </div>

        {/* End Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 1, duration: 0.8, type: "spring" }}
          className="relative mt-16 flex justify-center"
        >
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-violet-500 to-red-500 blur-xl opacity-50"
            />
            <div className="relative p-6 bg-black border-4 border-yellow-500 rounded-full">
              <Award className="w-12 h-12 text-yellow-400" />
            </div>
          </div>
        </motion.div>

        {/* Legend Earned */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-center mt-8"
        >
          <p className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
            LEGEND STATUS: UNLOCKED
          </p>
          <p className="text-gray-400 font-mono text-sm mt-2">
            // The journey continues...
          </p>
        </motion.div>
      </div>
    </section>
  );
}
