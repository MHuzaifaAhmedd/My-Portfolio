"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { fadeInUp, staggerContainer, staggerItem, hoverLift } from "@/lib/animations";
import { experience } from "@/data/portfolio";
import { HiCalendar, HiLocationMarker } from "react-icons/hi";

export default function Experience() {
  return (
    <SectionWrapper id="experience" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            My professional journey and career milestones
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-secondary-500 transform md:-translate-x-1/2" />

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={staggerItem}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10">
                  <motion.div
                    className="w-4 h-4 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 border-4 border-background"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                  />
                </div>

                {/* Content Card */}
                <motion.div
                  {...hoverLift}
                  className={`glass rounded-2xl p-6 md:p-8 w-full md:w-5/12 ml-16 md:ml-0 ${
                    index % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{exp.position}</h3>
                      <p className="text-primary-400 font-semibold text-lg">
                        {exp.company}
                      </p>
                    </div>
                    {exp.current && (
                      <span className="px-3 py-1 rounded-full text-xs bg-primary-500/20 text-primary-400 font-semibold">
                        Current
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-foreground/70">
                    <div className="flex items-center gap-2">
                      <HiCalendar className="w-4 h-4" />
                      {exp.duration}
                    </div>
                    <div className="flex items-center gap-2">
                      <HiLocationMarker className="w-4 h-4" />
                      {exp.location}
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-foreground/80">
                        <span className="text-primary-400 mt-1">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-xs bg-primary-500/10 text-primary-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}

