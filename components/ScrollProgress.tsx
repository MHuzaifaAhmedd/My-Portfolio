"use client";

import { motion, useSpring, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-1.5 z-50 pointer-events-none">
      <motion.div
        className="h-full bg-gradient-to-r from-primary-500 via-secondary-500 to-luxury-500 relative overflow-hidden origin-left"
        style={{ scaleX }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
        <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-primary-500 to-transparent blur-sm" />
      </motion.div>
    </div>
  );
}

