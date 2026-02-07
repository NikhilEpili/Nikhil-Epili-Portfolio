import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { Code, Database, Cpu, Package, Wrench, Globe } from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: Code,
    skills: ["Python", "JavaScript", "TypeScript"],
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Frameworks",
    icon: Package,
    skills: ["FastAPI", "React", "Node.js"],
    color: "from-violet-500 to-violet-600",
  },
  {
    title: "AI/ML",
    icon: Cpu,
    skills: ["RAG", "Embeddings", "Gemini", "BGE", "pgvector"],
    color: "from-teal-500 to-teal-600",
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL"],
    color: "from-blue-500 to-teal-500",
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Docker", "Git", "Figma"],
    color: "from-violet-500 to-blue-500",
  },
  {
    title: "Domains",
    icon: Globe,
    skills: ["AI SaaS", "HealthTech", "IoT", "Blockchain"],
    color: "from-teal-500 to-violet-500",
  },
];

export function Skills() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section id="skills" ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="backdrop-blur-md bg-gray-900/40 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color}`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-gray-800/50 border border-gray-700 rounded-full text-sm text-gray-300 hover:bg-gray-700/50 transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
