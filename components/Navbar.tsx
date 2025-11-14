"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";
import { HiMenu, HiX } from "react-icons/hi";
import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    let ticking = false;
    let lastScrollY = 0;
    let lastIsScrolled = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          
          // Only update scrolled state if it changed
          const newIsScrolled = currentScrollY > 20;
          if (newIsScrolled !== lastIsScrolled) {
            setIsScrolled(newIsScrolled);
            lastIsScrolled = newIsScrolled;
          }

          // Throttle active section updates - only check every 100px scroll
          if (Math.abs(currentScrollY - lastScrollY) > 100 || currentScrollY < 100) {
            const sections = NAV_LINKS.map((link) => link.href.substring(1));
            const scrollPosition = currentScrollY + 200;

            for (const section of sections.reverse()) {
              const element = document.getElementById(section);
              if (element && element.offsetTop <= scrollPosition) {
                setActiveSection((prev) => prev !== section ? section : prev);
                break;
              }
            }
            lastScrollY = currentScrollY;
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "glass backdrop-blur-md shadow-lg"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#home");
              }}
              className="text-3xl font-extrabold relative group"
              style={{ 
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
                textRendering: 'optimizeLegibility',
                isolation: 'isolate',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                backgroundSize: '200% 200%',
                filter: 'none',
                textShadow: 'none',
                animation: 'gradient-shift 8s ease infinite'
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10" style={{ filter: 'none', willChange: 'auto', textShadow: 'none' }}>HA</span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {NAV_LINKS.map((link) => {
                const sectionId = link.href.substring(1);
                const isActive = activeSection === sectionId;
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? "text-primary-400"
                        : "text-foreground/70 hover:text-foreground"
                    }`}
                    whileHover={{ y: -2 }}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500"
                        layoutId="activeSection"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </motion.a>
                );
              })}
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              <ThemeToggle />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg glass hover:bg-white/10 transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <HiX className="w-6 h-6" />
                ) : (
                  <HiMenu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden glass backdrop-blur-md border-t border-white/10"
            >
              <div className="px-4 py-4 space-y-2">
                {NAV_LINKS.map((link) => {
                  const sectionId = link.href.substring(1);
                  const isActive = activeSection === sectionId;
                  return (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                      className={`block px-4 py-3 rounded-lg transition-colors ${
                        isActive
                          ? "bg-primary-500/20 text-primary-400"
                          : "text-foreground/70 hover:bg-white/5 hover:text-foreground"
                      }`}
                      whileTap={{ scale: 0.95 }}
                    >
                      {link.name}
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}

