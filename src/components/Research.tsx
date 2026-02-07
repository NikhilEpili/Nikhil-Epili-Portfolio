import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { BookOpen, HeartPulse, Brain, Shield } from "lucide-react";

const researchAreas = [
  {
    title: "Cardiology Research",
    description:
      "Investigating post-COVID cardiac complications through data-driven analysis. Contributing to understanding long-term cardiovascular effects and recovery patterns.",
    icon: HeartPulse,
    color: "from-red-500 to-pink-500",
  },
  {
    title: "Human-Computer Interaction",
    description:
      "Exploring multimodal systems that enhance user experience through intuitive interfaces. Bridging the gap between complex AI systems and accessible user interactions.",
    icon: Brain,
    color: "from-violet-500 to-purple-500",
  },
  {
    title: "Data-Driven Decision Making",
    description:
      "Applying rigorous statistical methods and machine learning to extract actionable insights from complex datasets across healthcare and technology domains.",
    icon: BookOpen,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Ethical AI Development",
    description:
      "Committed to responsible AI practices that prioritize transparency, fairness, and privacy. Building systems that benefit society while minimizing potential harms.",
    icon: Shield,
    color: "from-teal-500 to-green-500",
  },
];

export function Research() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section id="research" ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
            Research & Innovation
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg max-w-3xl mx-auto">
            Pushing the boundaries of what's possible through rigorous research and innovative thinking
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {researchAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className="backdrop-blur-md bg-gray-900/40 border border-gray-800 rounded-xl p-8 hover:border-gray-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
                >
                  <div
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${area.color} mb-4`}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    {area.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {area.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
