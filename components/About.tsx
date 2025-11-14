"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import { about } from "@/data/portfolio";
import { HiLocationMarker, HiMail } from "react-icons/hi";

export default function About() {
  return (
    <SectionWrapper id="about" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Image Section */}
          <motion.div variants={staggerItem} className="relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl blur-2xl opacity-50"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="relative w-full h-full rounded-2xl glass overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center">
                  <div className="text-6xl">👨‍💻</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div variants={staggerItem}>
            <motion.h2
              variants={fadeInUp}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8"
            >
              About <span className="gradient-text text-glow">Me</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-2xl md:text-3xl gradient-text mb-6 font-bold"
            >
              {about.title}
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-foreground/90 mb-6 leading-relaxed font-light"
            >
              {about.bio}
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="text-base md:text-lg text-foreground/80 mb-10 leading-relaxed font-light"
            >
              {about.longBio}
            </motion.p>

            {/* Info Cards */}
            <motion.div
              variants={staggerContainer}
              className="grid sm:grid-cols-2 gap-4"
            >
              <motion.div
                variants={staggerItem}
                className="glass-strong rounded-xl p-6 flex items-center gap-4 border border-white/10 hover:border-primary-500/30 transition-all group"
              >
                <HiLocationMarker className="w-6 h-6 text-primary-400" />
                <div>
                  <p className="text-sm text-foreground/60">Location</p>
                  <p className="font-semibold">{about.location}</p>
                </div>
              </motion.div>
              <motion.div
                variants={staggerItem}
                className="glass-strong rounded-xl p-6 flex items-center gap-4 border border-white/10 hover:border-primary-500/30 transition-all group"
              >
                <HiMail className="w-6 h-6 text-primary-400" />
                <div>
                  <p className="text-sm text-foreground/60">Email</p>
                  <p className="font-semibold">{about.email}</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

