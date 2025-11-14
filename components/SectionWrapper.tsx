"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeInUp } from "@/lib/animations";
import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function SectionWrapper({
  children,
  className = "",
  id,
}: SectionWrapperProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
    rootMargin: "0px 0px -100px 0px",
  });

  return (
    <section
      ref={ref}
      id={id}
      className={className}
    >
      <motion.div
        initial="initial"
        animate={inView ? "animate" : "initial"}
        variants={fadeInUp}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </section>
  );
}

