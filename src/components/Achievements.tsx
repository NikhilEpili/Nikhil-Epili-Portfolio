import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { Trophy, Users, Briefcase, Sparkles } from "lucide-react";

const achievements = [
  {
    category: "Hackathons & Competitions",
    icon: Trophy,
    color: "from-yellow-500 to-orange-500",
    items: [
      "Multiple hackathon wins and top placements",
      "Built innovative solutions under tight deadlines",
      "Recognized for technical excellence and creativity",
    ],
  },
  {
    category: "Leadership & Community",
    icon: Users,
    color: "from-blue-500 to-violet-500",
    items: [
      "Active leader in tech communities and developer groups",
      "Mentored peers in AI/ML and full-stack development",
      "Organized technical workshops and knowledge-sharing sessions",
    ],
  },
  {
    category: "Professional Recognition",
    icon: Briefcase,
    color: "from-teal-500 to-green-500",
    items: [
      "Shortlisted for competitive internship interviews",
      "Recognition from industry leaders for innovative projects",
      "Strong academic performance in Computer Science",
    ],
  },
  {
    category: "Innovation Highlights",
    icon: Sparkles,
    color: "from-violet-500 to-pink-500",
    items: [
      "Developed cutting-edge AI solutions for real-world problems",
      "Published research contributions in healthcare technology",
      "Created open-source tools benefiting the developer community",
    ],
  },
];

export function Achievements() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section id="achievements" ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
            Achievements & Impact
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">
            Recognition and milestones in my journey as a builder and innovator
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={achievement.category}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="backdrop-blur-md bg-gray-900/40 border border-gray-800 rounded-xl p-8 hover:border-gray-700 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-r ${achievement.color}`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {achievement.category}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {achievement.items.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{
                          delay: 0.2 + index * 0.1 + itemIndex * 0.05,
                          duration: 0.4,
                        }}
                        className="flex items-start gap-3 text-gray-300"
                      >
                        <span className="text-blue-400 mt-1">▹</span>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
