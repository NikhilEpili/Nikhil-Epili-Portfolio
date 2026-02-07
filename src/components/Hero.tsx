import { motion } from "motion/react";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          {/* Name */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-violet-400 to-teal-400 bg-clip-text text-transparent">
              Nikhil Epili
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-2xl md:text-3xl text-gray-300 max-w-3xl mx-auto"
          >
            Building Intelligent Systems at the Intersection of AI, HealthTech & Web
          </motion.p>

          {/* Intro */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Computer Science engineer passionate about crafting innovative solutions that solve real-world problems. 
            From AI-powered healthcare platforms to scalable full-stack applications, I bridge cutting-edge research with practical impact.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
          >
            <Button
              onClick={() => scrollToSection("projects")}
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-violet-600 hover:from-blue-600 hover:to-violet-700 text-white px-8 py-6 rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
            >
              View Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              variant="outline"
              className="border-2 border-gray-700 hover:border-gray-600 bg-gray-900/50 backdrop-blur-sm hover:bg-gray-800/50 text-white px-8 py-6 rounded-xl transition-all duration-300"
            >
              Contact Me
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex gap-6 justify-center mt-12"
          >
            <a
              href="mailto:nikhil@example.com"
              className="p-3 rounded-full bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/50 transition-colors duration-300 border border-gray-700 hover:border-gray-600"
              aria-label="Email"
            >
              <Mail className="h-6 w-6 text-gray-300" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/50 transition-colors duration-300 border border-gray-700 hover:border-gray-600"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6 text-gray-300" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800/50 backdrop-blur-sm hover:bg-gray-700/50 transition-colors duration-300 border border-gray-700 hover:border-gray-600"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6 text-gray-300" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
