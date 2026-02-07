import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "AEROGUARD",
    description:
      "AI + IoT + Blockchain HealthTech platform delivering personalized air-pollution health insights. Real-time monitoring with predictive analytics for respiratory health management.",
    techStack: ["AI/ML", "IoT", "Blockchain", "HealthTech", "Python"],
    gradient: "from-blue-500 to-teal-500",
    icon: "🌍",
  },
  {
    title: "KBIS",
    description:
      "Knowledge-Based Information System leveraging RAG (Retrieval-Augmented Generation) architecture. FastAPI backend with React frontend for intelligent document retrieval and Q&A.",
    techStack: ["RAG", "FastAPI", "React", "PostgreSQL", "pgvector"],
    gradient: "from-violet-500 to-blue-500",
    icon: "🧠",
  },
  {
    title: "TrueSight AI",
    description:
      "Advanced deepfake and misinformation detection platform using multimodal AI. Combats digital deception with state-of-the-art computer vision and NLP techniques.",
    techStack: ["AI/ML", "Computer Vision", "NLP", "Python", "React"],
    gradient: "from-teal-500 to-violet-500",
    icon: "🔍",
  },
  {
    title: "Crowdfunding Platform",
    description:
      "Social-impact crowdfunding platform with integrated payment processing. Built with Python backend and Razorpay API for secure transactions and campaign management.",
    techStack: ["Python", "Razorpay API", "Full-Stack", "PostgreSQL"],
    gradient: "from-blue-500 to-violet-500",
    icon: "💰",
  },
];

export function Projects() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="projects" ref={ref} className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-teal-400 to-violet-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">
            Innovative solutions at the intersection of AI, healthcare, and social impact
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="group backdrop-blur-md bg-gray-900/40 border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:transform hover:-translate-y-1"
              >
                {/* Project Icon & Title */}
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`p-4 rounded-xl bg-gradient-to-r ${project.gradient} text-4xl flex items-center justify-center w-16 h-16 flex-shrink-0`}
                  >
                    {project.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${project.gradient} bg-opacity-20 border border-gray-700 text-gray-200`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-700 hover:border-gray-600 bg-gray-800/50 hover:bg-gray-700/50 text-white transition-all duration-300"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-700 hover:border-gray-600 bg-gray-800/50 hover:bg-gray-700/50 text-white transition-all duration-300"
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
