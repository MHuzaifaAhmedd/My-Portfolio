"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { SOCIAL_LINKS } from "@/lib/constants";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiArrowUp } from "react-icons/hi";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="text-center md:text-left">
            <p className="text-foreground/70">
              © {new Date().getFullYear()} Huzaifa Ahmed. All rights reserved.
            </p>
            <p className="text-sm text-foreground/50 mt-1">
              Built with Next.js, Tailwind CSS, and Framer Motion
            </p>
          </div>

          <div className="flex items-center gap-6">
            <motion.a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary-500/20 transition-colors"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </motion.a>
            <motion.a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary-500/20 transition-colors"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              href={SOCIAL_LINKS.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary-500/20 transition-colors"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Twitter"
            >
              <FaTwitter className="w-5 h-5" />
            </motion.a>

            <motion.button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary-500/20 transition-colors"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Scroll to top"
            >
              <HiArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

