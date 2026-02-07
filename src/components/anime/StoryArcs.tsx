import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";
import { ExternalLink, Github, Play } from "lucide-react";

const projects = [
  {
    title: "AEROGUARD",
    arc: "ARC 01",
    subtitle: "The Air Guardian Protocol",
    description:
      "A revolutionary AI + IoT + Blockchain HealthTech platform. Real-time air pollution monitoring fused with predictive analytics, delivering personalized health insights to protect respiratory wellness in an increasingly polluted world.",
    techStack: ["AI/ML", "IoT", "Blockchain", "HealthTech", "Python"],
    color: "cyan",
    status: "COMPLETED",
  },
  {
    title: "Cognexia",
    arc: "ARC 02",
    subtitle: "Knowledge Nexus System",
    description:
      "A CLI-Based Cross-Platform Local Knowledge Base System Using NLP and Intent-Aware Inference over Heterogeneous Local Data",
    techStack: ["RAG", "Python", "CLI", "PostgreSQL", "pgvector"],
    color: "violet",
    status: "ACTIVE",
  },
  {
    title: "TRUESIGHT AI",
    arc: "ARC 03",
    subtitle: "The Truth Seeker",
    description:
      "Multimodal AI platform engineered to combat digital deception. Employing state-of-the-art computer vision and NLP to detect deepfakes and misinformation, safeguarding truth in the age of synthetic media.",
    techStack: ["AI/ML", "Computer Vision", "NLP", "Python", "React"],
    color: "red",
    status: "COMPLETED",
  },
  {
    title: "CROWDFUND",
    arc: "ARC 04",
    subtitle: "Impact Revolution",
    description:
      "Social-impact crowdfunding platform built for change-makers. Secure payment integration via Razorpay, empowering communities to fund projects that matter. Built with Python for reliability and scale.",
    techStack: ["Python", "Razorpay", "Full-Stack", "PostgreSQL"],
    color: "cyan",
    status: "COMPLETED",
  },
];

const getColorClasses = (color: string) => {
  const colors = {
    cyan: {
      border: "border-cyan-500",
      bg: "bg-cyan-500",
      text: "text-cyan-400",
      gradient: "from-cyan-500 to-blue-600",
      glow: "shadow-[0_0_30px_rgba(0,255,255,0.3)]",
    },
    violet: {
      border: "border-violet-500",
      bg: "bg-violet-500",
      text: "text-violet-400",
      gradient: "from-violet-500 to-purple-600",
      glow: "shadow-[0_0_30px_rgba(138,43,226,0.3)]",
    },
    red: {
      border: "border-red-500",
      bg: "bg-red-500",
      text: "text-red-400",
      gradient: "from-red-500 to-pink-600",
      glow: "shadow-[0_0_30px_rgba(255,0,80,0.3)]",
    },
  };
  return colors[color as keyof typeof colors] || colors.cyan;
};

export function StoryArcs() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section id="projects" ref={ref} className="relative py-32 px-6">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto mb-16"
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="h-1 w-20 bg-gradient-to-r from-transparent to-red-500" />
          <h2 className="text-5xl md:text-6xl font-black tracking-tight">
            <span className="text-white">STORY</span>
            <span className="text-red-400 ml-4">ARCS</span>
          </h2>
        </div>
        <p className="text-red-400 font-mono text-sm">// MISSIONS_COMPLETED</p>
      </motion.div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto space-y-8">
        {projects.map((project, index) => {
          const colors = getColorClasses(project.color);
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: isEven ? -100 : 100 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.8, type: "spring" }}
              className="group relative"
            >
              {/* Outer Glow */}
              <div className={`absolute -inset-2 bg-gradient-to-r ${colors.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500`} />

              {/* Main Card */}
              <div className={`relative border-2 ${colors.border} bg-black/90 backdrop-blur-xl overflow-hidden`}>
                {/* Top Strip */}
                <div className={`h-2 bg-gradient-to-r ${colors.gradient}`} />

                {/* Content */}
                <div className="p-8 md:p-10">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Left - Arc Info */}
                    <div className="lg:col-span-4 space-y-4">
                      {/* Arc Number */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: index * 0.2 + 0.2 }}
                      >
                        <div className={`inline-block border-2 ${colors.border} px-4 py-2 ${colors.glow}`}>
                          <span className={`font-mono text-sm ${colors.text} tracking-widest`}>
                            {project.arc}
                          </span>
                        </div>
                      </motion.div>

                      {/* Title */}
                      <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: index * 0.2 + 0.3 }}
                        className="text-4xl md:text-5xl font-black text-white tracking-tight"
                      >
                        {project.title}
                      </motion.h3>

                      {/* Subtitle */}
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: index * 0.2 + 0.4 }}
                        className={`text-xl ${colors.text} font-semibold italic`}
                      >
                        {project.subtitle}
                      </motion.p>

                      {/* Status Badge */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: index * 0.2 + 0.5 }}
                        className="flex items-center gap-2"
                      >
                        <div className={`w-2 h-2 ${colors.bg} rounded-full ${colors.glow} animate-pulse`} />
                        <span className="font-mono text-sm text-gray-400">
                          STATUS: <span className={colors.text}>{project.status}</span>
                        </span>
                      </motion.div>
                    </div>

                    {/* Right - Details */}
                    <div className="lg:col-span-8 space-y-6">
                      {/* Description */}
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: index * 0.2 + 0.4 }}
                        className="text-gray-300 text-lg leading-relaxed"
                      >
                        {project.description}
                      </motion.p>

                      {/* Tech Stack */}
                      <div>
                        <p className="text-xs font-mono text-gray-500 mb-3">TECH_STACK:</p>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={isInView ? { opacity: 1 } : {}}
                          transition={{ delay: index * 0.2 + 0.5 }}
                          className="flex flex-wrap gap-2"
                        >
                          {project.techStack.map((tech, techIndex) => (
                            <motion.span
                              key={tech}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={isInView ? { opacity: 1, scale: 1 } : {}}
                              transition={{ delay: index * 0.2 + 0.6 + techIndex * 0.05 }}
                              className={`px-3 py-1 border ${colors.border} bg-gradient-to-r ${colors.gradient} bg-opacity-20 ${colors.text} text-sm font-mono`}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </motion.div>
                      </div>

                      {/* Action Buttons */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: index * 0.2 + 0.7 }}
                        className="flex flex-wrap gap-3 pt-4"
                      >
                        <button className={`group/btn flex items-center gap-2 px-6 py-3 border-2 ${colors.border} bg-gradient-to-r ${colors.gradient} bg-opacity-20 hover:bg-opacity-30 ${colors.text} hover:text-white font-mono transition-all`}>
                          <Github className="w-4 h-4" />
                          <span>VIEW_CODE</span>
                        </button>
                        <button className={`group/btn flex items-center gap-2 px-6 py-3 border-2 ${colors.border} hover:${colors.bg} ${colors.text} hover:text-black font-mono transition-all`}>
                          <Play className="w-4 h-4" />
                          <span>DEMO</span>
                        </button>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Bottom Strip */}
                <div className={`h-1 bg-gradient-to-r ${colors.gradient}`} />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
