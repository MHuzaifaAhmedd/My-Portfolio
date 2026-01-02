"use client";

import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { fadeInUp, staggerContainer, staggerItem, hoverLift } from "@/lib/animations";
import { projects } from "@/data/portfolio";
import { useState } from "react";
import { HiExternalLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

const categories = ["all", "web", "mobile", "fullstack"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <SectionWrapper id="projects" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6">
            My <span className="gradient-text text-glow">Projects</span>
          </h2>
          <p className="text-foreground/80 text-xl md:text-2xl max-w-3xl mx-auto font-light">
            A curated collection of <span className="gradient-text font-semibold">world-class projects</span> showcasing innovation and expertise
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              variants={staggerItem}
              onClick={() => setSelectedCategory(category)}
              className={`px-8 py-4 rounded-full glass-strong transition-all capitalize font-semibold ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-primary-500/30 to-secondary-500/30 border-2 border-primary-500/50 shadow-glow-primary"
                  : "hover:bg-white/10 border border-white/10 hover:border-primary-500/30"
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {category === "all" ? "All Projects" : category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={staggerItem}
                {...hoverLift}
                className="card-premium glass-strong rounded-3xl overflow-hidden group cursor-pointer border border-white/10 hover:border-primary-500/30 transition-all"
                onClick={() => setSelectedProject(project.id)}
              >
                {/* Project Image */}
                <div className="relative h-56 bg-gradient-to-br from-primary-500/30 via-secondary-500/20 to-luxury-500/20 overflow-hidden group/image">
                  <div className="absolute inset-0 flex items-center justify-center text-8xl opacity-60 group-hover/image:opacity-100 transition-opacity">
                    {project.category === "mobile" && "📱"}
                    {project.category === "web" && "🌐"}
                    {project.category === "fullstack" && "🚀"}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-primary-500/20"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <HiExternalLink className="w-6 h-6" />
                      </motion.a>
                    )}
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-primary-500/20"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <FaGithub className="w-6 h-6" />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <span className="px-3 py-1 rounded-full text-xs glass capitalize">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-foreground/70 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded text-xs bg-primary-500/10 text-primary-400"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 rounded text-xs bg-foreground/10 text-foreground/60">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="glass rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              >
                {(() => {
                  const project = projects.find((p) => p.id === selectedProject);
                  if (!project) return null;
                  return (
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-4">
                        <h2 className="text-3xl font-bold">{project.title}</h2>
                        <button
                          onClick={() => setSelectedProject(null)}
                          className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10"
                        >
                          ✕
                        </button>
                      </div>
                      <div className="h-64 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-xl mb-6 flex items-center justify-center text-8xl">
                        {project.category === "mobile" && "📱"}
                        {project.category === "web" && "🌐"}
                        {project.category === "fullstack" && "🚀"}
                      </div>
                      <p className="text-foreground/80 mb-6 leading-relaxed">
                        {project.longDescription}
                      </p>
                      <div className="mb-6">
                        <h3 className="font-semibold mb-3">Technologies</h3>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 rounded-full text-sm bg-primary-500/10 text-primary-400"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-4">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold hover:shadow-lg transition-all flex items-center gap-2"
                          >
                            <HiExternalLink />
                            Live Demo
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 rounded-full glass border border-white/20 font-semibold hover:bg-white/10 transition-all flex items-center gap-2"
                          >
                            <FaGithub />
                            View Code
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
}

