"use client";

import { memo, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { HiArrowDown, HiCode, HiDeviceMobile, HiDownload } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SOCIAL_LINKS } from "@/lib/constants";
import { about } from "@/data/portfolio";
import ParticleBackground from "./ParticleBackground";
import { useInView } from "react-intersection-observer";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function splitChars(text: string) {
  return Array.from(text).map((ch) => (ch === " " ? "\u00A0" : ch));
}

function splitSegments(text: string, noBreakGroups: string[]) {
  const groups = noBreakGroups.filter(Boolean);
  if (groups.length === 0) return [{ text, noBreak: false }];

  const out: Array<{ text: string; noBreak: boolean }> = [];
  let i = 0;
  while (i < text.length) {
    let nextIndex = -1;
    let nextGroup = "";
    for (const g of groups) {
      const idx = text.indexOf(g, i);
      if (idx !== -1 && (nextIndex === -1 || idx < nextIndex)) {
        nextIndex = idx;
        nextGroup = g;
      }
    }

    if (nextIndex === -1) {
      out.push({ text: text.slice(i), noBreak: false });
      break;
    }

    if (nextIndex > i) out.push({ text: text.slice(i, nextIndex), noBreak: false });
    out.push({ text: nextGroup, noBreak: true });
    i = nextIndex + nextGroup.length;
  }

  return out;
}

// Keep sequencing via stagger (no arbitrary delays)
const HERO_STAGGER_CONTAINER = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

function HeroGsap() {
  const shouldReduceMotion = useReducedMotion();

  const sectionRef = useRef<HTMLElement | null>(null);
  const nameRef = useRef<HTMLSpanElement | null>(null);
  const subtitle1Ref = useRef<HTMLSpanElement | null>(null);
  const subtitle2Ref = useRef<HTMLSpanElement | null>(null);

  const fullName = "Muhammad Huzaifa Ahmed";
  const subtitle1 = "Full Stack Developer";
  const subtitle2 = "Mobile App Developer";

  const nameSegments = useMemo(() => splitSegments(fullName, ["Huzaifa Ahmed"]), [fullName]);
  const subtitle1Chars = useMemo(() => splitChars(subtitle1), [subtitle1]);
  const subtitle2Chars = useMemo(() => splitChars(subtitle2), [subtitle2]);

  const { ref: heroRef, inView: heroInView } = useInView({
    rootMargin: "200px 0px",
    threshold: 0,
  });

  const [hasEnteredViewport, setHasEnteredViewport] = useState(false);

  useEffect(() => {
    if (heroInView) setHasEnteredViewport(true);
  }, [heroInView]);

  // Compose refs (intersection observer + gsap trigger element)
  const setSectionRef = (node: HTMLElement | null) => {
    sectionRef.current = node;
    heroRef(node);
  };

  useLayoutEffect(() => {
    if (shouldReduceMotion) return;
    if (!sectionRef.current) return;

    const q = gsap.utils.selector(sectionRef);
    const nameLetters = nameRef.current ? q("[data-name-letter]") : [];
    const subtitleLetters = [
      ...(subtitle1Ref.current ? q("[data-subtitle1-letter]") : []),
      ...(subtitle2Ref.current ? q("[data-subtitle2-letter]") : []),
    ];

    // Set initial states (no layout shift; only transform + opacity)
    gsap.set(nameLetters, { opacity: 0, y: 18, force3D: true });
    gsap.set(subtitleLetters, { opacity: 0, x: -10, force3D: true });

    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        once: true, // do not replay when scrolling back
      },
    });

    tl.to(nameLetters, {
      opacity: 1,
      y: 0,
      duration: 0.65,
      stagger: 0.045,
      clearProps: "transform",
    }).to(
      subtitleLetters,
      {
        opacity: 1,
        x: 0,
        duration: 0.45,
        stagger: 0.03,
        clearProps: "transform",
      },
      ">-0.05"
    );

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, [shouldReduceMotion]);

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={setSectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20"
    >
      {/* Pause expensive background effects once Hero is off-screen to keep scroll smooth */}
      {heroInView && <ParticleBackground />}

      {/* Optimized gradient orbs */}
      {heroInView && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-1/4 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] bg-gradient-to-br from-primary-500/20 via-primary-600/15 to-transparent rounded-full blur-3xl"
            style={{ willChange: "transform, opacity" }}
            animate={{
              x: [0, 80, 0],
              y: [0, 50, 0],
              scale: [1, 1.15, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] bg-gradient-to-br from-secondary-500/20 via-secondary-600/15 to-transparent rounded-full blur-3xl"
            style={{ willChange: "transform, opacity" }}
            animate={{
              x: [0, -80, 0],
              y: [0, -50, 0],
              scale: [1, 1.15, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      )}

      <motion.div
        variants={HERO_STAGGER_CONTAINER}
        initial="initial"
        animate={hasEnteredViewport ? "animate" : "initial"}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8 sm:py-12"
      >
        <motion.div variants={fadeInUp} className="mb-6 sm:mb-8 px-4">
          <span className="inline-block px-4 sm:px-6 py-2 sm:py-3 rounded-full glass-strong text-xs sm:text-sm font-medium border border-primary-500/30 tracking-wide">
            <span className="gradient-text-gold">✨</span> Welcome to my Portfolio
          </span>
        </motion.div>

        <motion.h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-light mb-6 sm:mb-8 leading-[1.1] tracking-tight px-2">
          <span className="block text-foreground/90 mb-2 font-extralight text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Hi, I&apos;m
          </span>

          {/* Name: per-character Y + opacity */}
          <span className="block font-bold gradient-text-subtle break-words">
            <span ref={nameRef} role="text" aria-label={fullName}>
              <span className="sr-only">{fullName}</span>
              {nameSegments.map((seg, segIdx) => (
                <span
                  // eslint-disable-next-line react/no-array-index-key
                  key={segIdx}
                  className={seg.noBreak ? "inline-block whitespace-nowrap" : undefined}
                >
                  {splitChars(seg.text).map((ch, i) => (
                    <span
                      // eslint-disable-next-line react/no-array-index-key
                      key={i}
                      data-name-letter
                      aria-hidden="true"
                      className="gradient-text-subtle"
                      style={{ display: "inline-block", willChange: "transform, opacity" }}
                    >
                      {ch}
                    </span>
                  ))}
                </span>
              ))}
            </span>
          </span>
        </motion.h1>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 text-foreground/90 font-light tracking-wide px-4">
          {/* Subtitle 1: per-character X + opacity */}
          <span className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full glass-strong border border-primary-500/20 text-sm sm:text-base md:text-lg lg:text-xl">
            <HiCode className="text-primary-400 text-lg sm:text-xl md:text-2xl flex-shrink-0" />
            <span
              ref={subtitle1Ref}
              className="font-medium whitespace-nowrap"
              role="text"
              aria-label={subtitle1}
            >
              <span className="sr-only">{subtitle1}</span>
              {subtitle1Chars.map((ch, i) => (
                <span
                  // eslint-disable-next-line react/no-array-index-key
                  key={i}
                  data-subtitle1-letter
                  aria-hidden="true"
                  className="gradient-text"
                  style={{ display: "inline-block", willChange: "transform, opacity" }}
                >
                  {ch}
                </span>
              ))}
            </span>
          </span>

          <span className="hidden sm:inline text-primary-500/50 text-xl">•</span>

          {/* Subtitle 2: per-character X + opacity */}
          <span className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full glass-strong border border-secondary-500/20 text-sm sm:text-base md:text-lg lg:text-xl">
            <HiDeviceMobile className="text-secondary-400 text-lg sm:text-xl md:text-2xl flex-shrink-0" />
            <span
              ref={subtitle2Ref}
              className="font-medium whitespace-nowrap"
              role="text"
              aria-label={subtitle2}
            >
              <span className="sr-only">{subtitle2}</span>
              {subtitle2Chars.map((ch, i) => (
                <span
                  // eslint-disable-next-line react/no-array-index-key
                  key={i}
                  data-subtitle2-letter
                  aria-hidden="true"
                  className="gradient-text-gold"
                  style={{ display: "inline-block", willChange: "transform, opacity" }}
                >
                  {ch}
                </span>
              ))}
            </span>
          </span>
        </div>

        <motion.p
          variants={fadeInUp}
          className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-foreground/70 max-w-4xl mx-auto mb-12 sm:mb-16 leading-relaxed font-light px-4"
        >
          I develop{" "}
          <span className="gradient-text font-medium">web and mobile applications</span> using
          <span className="text-primary-400"> React Native</span>,{" "}
          <span className="text-primary-400">Next.js</span>,
          <span className="text-primary-400"> Node.js</span>, and{" "}
          <span className="text-secondary-400">Django</span>, and love solving real-world problems
          with elegant code and AI-driven solutions.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12 sm:mb-16 px-4"
        >
          <motion.a
            href="#projects"
            className="btn-premium px-6 sm:px-8 py-3 sm:py-4 rounded-full text-white font-medium text-sm sm:text-base tracking-wide relative overflow-hidden group w-full sm:w-auto text-center"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById("projects");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              View My Work
              <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                →
              </motion.span>
            </span>
          </motion.a>
          <motion.a
            href={about.resume}
            download
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-full glass-strong border-2 border-secondary-500/30 text-foreground font-medium text-sm sm:text-base tracking-wide hover:border-secondary-500/50 transition-all group relative overflow-hidden w-full sm:w-auto text-center"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <HiDownload className="w-5 h-5" />
              Download CV
            </span>
            <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.a>
          <motion.a
            href="#contact"
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-full glass-strong border-2 border-primary-500/30 text-foreground font-medium text-sm sm:text-base tracking-wide hover:border-primary-500/50 transition-all group relative overflow-hidden w-full sm:w-auto text-center"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById("contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
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

        <motion.div variants={fadeInUp} className="flex flex-col items-center gap-4 sm:gap-6 mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-4 sm:gap-6">
            <motion.a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full glass-strong border border-primary-500/20 flex items-center justify-center hover:border-primary-500/50 hover:bg-primary-500/10 transition-all group relative overflow-hidden"
              whileHover={{ scale: 1.15, rotate: 5, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub className="w-5 h-5 sm:w-7 sm:h-7 text-primary-400 group-hover:text-primary-300 transition-colors relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
            <motion.a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full glass-strong border border-primary-500/20 flex items-center justify-center hover:border-primary-500/50 hover:bg-primary-500/10 transition-all group relative overflow-hidden"
              whileHover={{ scale: 1.15, rotate: -5, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin className="w-5 h-5 sm:w-7 sm:h-7 text-primary-400 group-hover:text-primary-300 transition-colors relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
            <motion.a
              href={SOCIAL_LINKS.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full glass-strong border border-secondary-500/20 flex items-center justify-center hover:border-secondary-500/50 hover:bg-secondary-500/10 transition-all group relative overflow-hidden"
              whileHover={{ scale: 1.15, rotate: 5, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaTwitter className="w-5 h-5 sm:w-7 sm:h-7 text-secondary-400 group-hover:text-secondary-300 transition-colors relative z-10" />
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
            <span className="text-xs sm:text-sm font-light tracking-wider uppercase">Scroll Down</span>
            <HiArrowDown className="w-5 h-5 sm:w-6 sm:h-6" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default memo(HeroGsap);


