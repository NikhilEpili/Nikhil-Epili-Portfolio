import { motion } from "motion/react";
import { useInView } from "../hooks/useInView";
import { Mail, Linkedin, Github, Send, Terminal } from "lucide-react";
import { useState } from "react";

export function FinalScene() {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      alert("MESSAGE_RECEIVED: Connection established. This is a demo form.");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      href: "mailto:nikhilepili@gmail.com",
      label: "nikhilepili@gmail.com",
      color: "from-cyan-500 to-blue-500",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com",
      label: "linkedin.com/in/nikhilepili",
      color: "from-blue-500 to-violet-500",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com",
      label: "github.com/nikhilepili",
      color: "from-violet-500 to-purple-500",
    },
  ];

  return (
    <section id="contact" ref={ref} className="relative py-32 px-6 min-h-screen flex items-center">
      {/* Dramatic Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/20 rounded-full blur-[150px]"
        />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-500 to-red-500">
                FINAL SCENE
              </span>
            </h2>
            <p className="text-2xl md:text-3xl text-gray-300 mb-4">
              The adventure continues...
            </p>
            <p className="text-lg text-gray-400 font-mono">
              {'>'} INITIATE_CONNECTION.exe
            </p>
          </motion.div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-6"
          >
            {/* Intro Text */}
            <div className="border-l-4 border-cyan-500 pl-6 py-4 bg-cyan-500/5">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Build Something Epic?
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Whether you're a <span className="text-cyan-400">recruiter</span>,{" "}
                <span className="text-violet-400">startup founder</span>, or{" "}
                <span className="text-red-400">fellow builder</span>, let's connect.
                Open to opportunities, collaborations, and conversations about the future of tech.
              </p>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                    className="group block relative"
                  >
                    {/* Glow on Hover */}
                    <div className={`absolute -inset-2 bg-gradient-to-r ${link.color} opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500`} />
                    
                    {/* Card */}
                    <div className="relative border-2 border-gray-800 bg-black/80 backdrop-blur-xl p-5 group-hover:border-cyan-500 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 bg-gradient-to-r ${link.color} rounded-lg`}>
                          <Icon className="w-6 h-6 text-black" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400 font-mono">{link.name}</p>
                          <p className="text-white font-semibold">{link.label}</p>
                        </div>
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Terminal Style Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1, duration: 0.8 }}
              className="border border-green-500/30 bg-black/90 p-6 font-mono text-sm"
            >
              <div className="flex items-center gap-2 mb-3 text-green-400">
                <Terminal className="w-4 h-4" />
                <span>STATUS</span>
              </div>
              <div className="space-y-1 text-gray-400">
                <p>{'>'} LOCATION: Mumbai / India</p>
                <p>{'>'} AVAILABILITY: <span className="text-green-400">OPEN</span></p>
                <p>{'>'} RESPONSE_TIME: <span className="text-cyan-400">{'<24h'}</span></p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="relative">
              {/* Form Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 via-violet-500 to-red-500 opacity-20 blur-xl" />
              
              {/* Form Container */}
              <div className="relative border-2 border-cyan-500/50 bg-black/90 backdrop-blur-xl p-8">
                {/* Form Header */}
                <div className="border-b border-cyan-500/30 pb-4 mb-6">
                  <h3 className="text-2xl font-black text-white font-mono">
                    {'>'} SEND_MESSAGE()
                  </h3>
                </div>

                <div className="space-y-6">
                  {/* Name Input */}
                  <div>
                    <label className="block text-sm font-mono text-cyan-400 mb-2">
                      NAME:
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black border-2 border-gray-800 focus:border-cyan-500 text-white font-mono transition-colors outline-none"
                      placeholder="Enter your name..."
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-sm font-mono text-cyan-400 mb-2">
                      EMAIL:
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black border-2 border-gray-800 focus:border-cyan-500 text-white font-mono transition-colors outline-none"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Message Input */}
                  <div>
                    <label className="block text-sm font-mono text-cyan-400 mb-2">
                      MESSAGE:
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-black border-2 border-gray-800 focus:border-cyan-500 text-white font-mono transition-colors outline-none resize-none"
                      placeholder="Tell me about your project or opportunity..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full py-4 font-bold text-lg font-mono overflow-hidden disabled:opacity-50"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-violet-600 transition-transform group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          >
                            ⚡
                          </motion.div>
                          TRANSMITTING...
                        </>
                      ) : (
                        <>
                          SEND_MESSAGE
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </span>
                  </button>
                </div>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Closing Text - Anime Ending Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-center mt-16 space-y-6"
        >
          <div className="inline-block border-l-4 border-cyan-500 bg-black/80 px-8 py-4">
            <p className="text-xl md:text-2xl text-gray-300 italic">
              "The future is not something we enter. The future is something we create."
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-gray-500 font-mono text-sm">
              © 2026 Nikhil Epili • Built with Passion and Love for Innovation.
            </p>
            <motion.p
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-cyan-400 font-mono text-xs"
            >
              {'>'} SYSTEM_STATUS: ONLINE
            </motion.p>
          </div>

          {/* Final Accent Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 1.5, duration: 1 }}
            className="h-1 max-w-md mx-auto bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
