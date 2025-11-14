"use client";

import { motion } from "framer-motion";
import { fadeInUp, slideInLeft, slideInRight, staggerContainer } from "@/lib/animations";
import { HiArrowDown, HiCode, HiDeviceMobile } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SOCIAL_LINKS } from "@/lib/constants";
import ParticleBackground from "./ParticleBackground";

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20"
    >
      <ParticleBackground />
      
      {/* Ultra Premium Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-primary-500/30 via-primary-600/20 to-transparent rounded-full blur-3xl"
          style={{ willChange: "transform, opacity" }}
          animate={{
            x: [0, 100, 0],
            y: [0, 60, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-secondary-500/30 via-secondary-600/20 to-transparent rounded-full blur-3xl"
          style={{ willChange: "transform, opacity" }}
          animate={{
            x: [0, -100, 0],
            y: [0, -60, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-gradient-to-br from-luxury-500/20 via-secondary-500/15 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
          style={{ willChange: "transform, opacity" }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.3, 0.2],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div variants={fadeInUp} className="mb-8">
          <motion.span
            className="inline-block px-6 py-3 rounded-full glass-strong text-sm font-medium mb-8 border border-primary-500/30 tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="gradient-text-gold">✨</span> Welcome to my Portfolio
          </motion.span>
        </motion.div>

        <motion.h1
          variants={slideInLeft}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light mb-8 leading-[1.1] tracking-tight"
        >
          <span className="block text-foreground/90 mb-2 font-extralight">Hi, I'm</span>
          <span className="block font-bold gradient-text text-glow">Muhammad Huzaifa Ahmed</span>
        </motion.h1>

        <motion.div
          variants={slideInRight}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-10 text-foreground/90 font-light tracking-wide"
        >
          <span className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-strong border border-primary-500/20 mr-4">
            <HiCode className="text-primary-400 text-2xl" />
            <span className="gradient-text font-medium">Full Stack Developer</span>
          </span>
          <span className="mx-2 text-primary-500/50">•</span>
          <span className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-strong border border-secondary-500/20">
            <HiDeviceMobile className="text-secondary-400 text-2xl" />
            <span className="gradient-text-gold font-medium">Mobile App Developer</span>
          </span>
        </motion.div>

        <motion.p
          variants={fadeInUp}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/70 max-w-4xl mx-auto mb-16 leading-relaxed font-light"
        >
          I develop <span className="gradient-text font-medium">web and mobile applications</span> using 
          <span className="text-primary-400"> React Native</span>, <span className="text-primary-400">Next.js</span>, 
          <span className="text-primary-400"> Node.js</span>, and <span className="text-secondary-400">Django</span>, 
          and love solving real-world problems with elegant code and AI-driven solutions.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="flex flex-wrap items-center justify-center gap-6 mb-16"
        >
          <motion.a
            href="#projects"
            className="btn-premium px-8 py-4 rounded-full text-white font-medium text-base tracking-wide relative overflow-hidden group"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById("projects");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              View My Work
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
          </motion.a>
          <motion.a
            href="#contact"
            className="px-8 py-4 rounded-full glass-strong border-2 border-primary-500/30 text-foreground font-medium text-base tracking-wide hover:border-primary-500/50 transition-all group relative overflow-hidden"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById("contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Get In Touch
              <motion.span
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ✨
              </motion.span>
            </span>
            <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.a>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col items-center gap-6 mb-16"
        >
          <div className="flex items-center justify-center gap-6">
            <motion.a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full glass-strong border border-primary-500/20 flex items-center justify-center hover:border-primary-500/50 hover:bg-primary-500/10 transition-all group relative overflow-hidden"
              whileHover={{ scale: 1.15, rotate: 5, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub className="w-7 h-7 text-primary-400 group-hover:text-primary-300 transition-colors relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
            <motion.a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full glass-strong border border-primary-500/20 flex items-center justify-center hover:border-primary-500/50 hover:bg-primary-500/10 transition-all group relative overflow-hidden"
              whileHover={{ scale: 1.15, rotate: -5, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin className="w-7 h-7 text-primary-400 group-hover:text-primary-300 transition-colors relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
            <motion.a
              href={SOCIAL_LINKS.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full glass-strong border border-secondary-500/20 flex items-center justify-center hover:border-secondary-500/50 hover:bg-secondary-500/10 transition-all group relative overflow-hidden"
              whileHover={{ scale: 1.15, rotate: 5, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaTwitter className="w-7 h-7 text-secondary-400 group-hover:text-secondary-300 transition-colors relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-br from-secondary-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          </div>
          
          <motion.button
            onClick={scrollToAbout}
            className="flex flex-col items-center gap-2 text-foreground/60 hover:text-foreground transition-colors"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            whileHover={{ scale: 1.1 }}
          >
            <span className="text-sm font-light tracking-wider uppercase">Scroll Down</span>
            <HiArrowDown className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}

