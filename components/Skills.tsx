"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { fadeInUp, staggerContainer, staggerItem, hoverLift } from "@/lib/animations";
import { skills } from "@/data/portfolio";
import { useState } from "react";

const categories = [
  { id: "all", name: "All", icon: "💻" },
  { id: "frontend", name: "Frontend", icon: "🎨" },
  { id: "backend", name: "Backend", icon: "⚙️" },
  { id: "mobile", name: "Mobile", icon: "📱" },
  { id: "database", name: "Database", icon: "🗄️" },
  { id: "tools", name: "Tools", icon: "🛠️" },
];

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredSkills =
    selectedCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory);

  const getCategorySkills = (category: string) => {
    return skills.filter((skill) => skill.category === category);
  };

  return (
    <SectionWrapper id="skills" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6">
            My <span className="gradient-text text-glow">Skills</span>
          </h2>
          <p className="text-foreground/80 text-xl md:text-2xl max-w-3xl mx-auto font-light">
            Mastery of cutting-edge <span className="gradient-text font-semibold">technologies</span> and tools that power innovation
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
          {categories.map((category) => {
            const count =
              category.id === "all"
                ? skills.length
                : getCategorySkills(category.id).length;
            return (
              <motion.button
                key={category.id}
                variants={staggerItem}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-8 py-4 rounded-full glass-strong transition-all font-semibold ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-primary-500/30 to-secondary-500/30 border-2 border-primary-500/50 shadow-glow-primary"
                    : "hover:bg-white/10 border border-white/10 hover:border-primary-500/30"
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name} ({count})
              </motion.button>
            );
          })}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={staggerItem}
              {...hoverLift}
              className="card-premium glass-strong rounded-2xl p-8 text-center group cursor-pointer border border-white/10 hover:border-primary-500/30 transition-all"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                {skill.icon === "react" && "⚛️"}
                {skill.icon === "nextjs" && "▲"}
                {skill.icon === "typescript" && "📘"}
                {skill.icon === "javascript" && "📜"}
                {skill.icon === "tailwind" && "🎨"}
                {skill.icon === "html" && "🌐"}
                {skill.icon === "css" && "💅"}
                {skill.icon === "nodejs" && "🟢"}
                {skill.icon === "express" && "🚂"}
                {skill.icon === "python" && "🐍"}
                {skill.icon === "api" && "🔌"}
                {skill.icon === "graphql" && "🔷"}
                {skill.icon === "expo" && "📱"}
                {skill.icon === "ios" && "🍎"}
                {skill.icon === "android" && "🤖"}
                {skill.icon === "mongodb" && "🍃"}
                {skill.icon === "postgresql" && "🐘"}
                {skill.icon === "firebase" && "🔥"}
                {skill.icon === "redis" && "⚡"}
                {skill.icon === "git" && "📦"}
                {skill.icon === "docker" && "🐳"}
                {skill.icon === "aws" && "☁️"}
                {skill.icon === "cicd" && "🔄"}
                {!["react", "nextjs", "typescript", "javascript", "tailwind", "html", "css", "nodejs", "express", "python", "api", "graphql", "expo", "ios", "android", "mongodb", "postgresql", "firebase", "redis", "git", "docker", "aws", "cicd"].includes(skill.icon) && "💻"}
              </div>
              <h3 className="font-semibold mb-2">{skill.name}</h3>
              <div className="w-full bg-foreground/10 rounded-full h-2 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary-500 to-secondary-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.proficiency}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
              </div>
              <p className="text-xs text-foreground/60 mt-1">
                {skill.proficiency}%
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

