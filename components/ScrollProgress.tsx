"use client";

import { motion, useSpring, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  
  // Optimized spring for better performance
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 0.5,
    restDelta: 0.001,
    restSpeed: 0.001
  });

  const progressRef = useRef<HTMLDivElement>(null);

  // Ensure GPU acceleration
  useEffect(() => {
    if (progressRef.current) {
      progressRef.current.style.transform = 'translateZ(0)';
    }
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1.5 z-50 pointer-events-none">
      <motion.div
        ref={progressRef}
        className="h-full bg-gradient-to-r from-primary-500 via-secondary-500 to-luxury-500 relative overflow-hidden origin-left"
        style={{ 
          scaleX,
          transform: 'translateZ(0)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
        <div className="absolute top-0 right-0 w-8 h-full bg-gradient-to-l from-primary-500 to-transparent blur-sm" />
      </motion.div>
    </div>
  );
}

