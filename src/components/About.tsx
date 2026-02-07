import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";

export function About() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section id="about" ref={ref} className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="backdrop-blur-md bg-gray-900/30 border border-gray-800 rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                I'm a <span className="text-white font-semibold">Computer Science engineer</span> with a passion for building 
                technology that creates <span className="text-blue-400">real-world impact</span>. My journey spans across 
                <span className="text-violet-400"> AI/ML development</span>, <span className="text-teal-400">Full-Stack engineering</span>, 
                and <span className="text-blue-400">research-driven innovation</span>.
              </p>

              <p>
                I thrive in <span className="text-white font-semibold">hackathons</span> and competitive environments, 
                where rapid prototyping meets creative problem-solving. From building AI-powered healthcare platforms to 
                developing scalable systems, I'm driven by the challenge of transforming complex ideas into elegant solutions.
              </p>

              <p>
                My work focuses on cutting-edge domains including:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                {[
                  { title: "AI for Healthcare", icon: "🏥", color: "from-blue-500 to-blue-600" },
                  { title: "Misinformation Detection", icon: "🔍", color: "from-violet-500 to-violet-600" },
                  { title: "RAG Systems & Embeddings", icon: "🧠", color: "from-teal-500 to-teal-600" },
                  { title: "Human-Computer Interaction", icon: "💡", color: "from-blue-500 to-teal-500" },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                    className={`bg-gradient-to-r ${item.color} bg-opacity-10 border border-gray-700 rounded-xl p-4 flex items-center gap-4`}
                  >
                    <span className="text-3xl">{item.icon}</span>
                    <span className="text-white font-semibold">{item.title}</span>
                  </motion.div>
                ))}
              </div>

              <p className="mt-8">
                Whether it's contributing to <span className="text-white font-semibold">research in cardiology</span>, 
                building <span className="text-teal-400">blockchain-integrated platforms</span>, or architecting 
                <span className="text-violet-400"> multimodal AI systems</span>, I approach every project with a commitment 
                to ethical development and data-driven decision making.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
