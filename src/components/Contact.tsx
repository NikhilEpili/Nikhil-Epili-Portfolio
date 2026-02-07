import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";

export function Contact() {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    alert("Thanks for reaching out! This is a demo form.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" ref={ref} className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-center text-gray-400 mb-12 text-lg">
            Open to opportunities, collaborations, and interesting conversations
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-6"
            >
              <div className="backdrop-blur-md bg-gray-900/40 border border-gray-800 rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-white mb-6">
                  Get In Touch
                </h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Whether you're a recruiter, startup founder, or fellow builder, 
                  I'd love to hear from you. Let's discuss how we can create 
                  innovative solutions together.
                </p>

                <div className="space-y-4">
                  <a
                    href="mailto:nikhilepili@gmail.com"
                    className="flex items-center gap-4 p-4 rounded-lg bg-gray-800/50 border border-gray-700 hover:bg-gray-700/50 hover:border-gray-600 transition-all duration-300"
                  >
                    <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-teal-500">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <p className="text-white font-medium">nikhilepili@gmail.com</p>
                    </div>
                  </a>

                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-gray-800/50 border border-gray-700 hover:bg-gray-700/50 hover:border-gray-600 transition-all duration-300"
                  >
                    <div className="p-3 rounded-lg bg-gradient-to-r from-violet-500 to-blue-500">
                      <Linkedin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">LinkedIn</p>
                      <p className="text-white font-medium">linkedin.com/in/nikhilepili</p>
                    </div>
                  </a>

                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-gray-800/50 border border-gray-700 hover:bg-gray-700/50 hover:border-gray-600 transition-all duration-300"
                  >
                    <div className="p-3 rounded-lg bg-gradient-to-r from-teal-500 to-green-500">
                      <Github className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">GitHub</p>
                      <p className="text-white font-medium">github.com/nikhilepili</p>
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <form
                onSubmit={handleSubmit}
                className="backdrop-blur-md bg-gray-900/40 border border-gray-800 rounded-xl p-8"
              >
                <h3 className="text-2xl font-semibold text-white mb-6">
                  Send a Message
                </h3>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm text-gray-300 mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="bg-gray-800/50 border-gray-700 focus:border-blue-500 text-white placeholder:text-gray-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm text-gray-300 mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="bg-gray-800/50 border-gray-700 focus:border-blue-500 text-white placeholder:text-gray-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm text-gray-300 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or opportunity..."
                      required
                      rows={5}
                      className="bg-gray-800/50 border-gray-700 focus:border-blue-500 text-white placeholder:text-gray-500 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white py-6 rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
                  >
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-16 text-center"
          >
            <p className="text-gray-500">
              © 2026 Nikhil Epili. Built with Passion and love for innovation.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
