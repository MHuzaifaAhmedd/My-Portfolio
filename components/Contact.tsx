"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SOCIAL_LINKS } from "@/lib/constants";
import { about } from "@/data/portfolio";
import { useState } from "react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

// Web3Forms Access Key - Get yours from https://web3forms.com
// For now, using a public endpoint. You can add your access key later for better features
const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE";

export default function Contact() {
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      setSubmitStatus({ type: null, message: "" });

      // Check if access key is configured
      if (!WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY === "YOUR_ACCESS_KEY_HERE") {
        setSubmitStatus({
          type: "error",
          message: "Form is not configured. Please contact me directly at " + about.email,
        });
        // Fallback: Open email client
        window.location.href = `mailto:${about.email}?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`)}`;
        return;
      }

      // Using Web3Forms API - sends email directly to your inbox
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Portfolio Contact: ${data.subject}`,
          from_name: data.name,
          from_email: data.email,
          message: `
Name: ${data.name}
Email: ${data.email}
Subject: ${data.subject}

Message:
${data.message}
          `.trim(),
          // Your email where you'll receive the form submissions
          to: about.email,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message: "Thank you for your message! I'll get back to you soon.",
        });
        reset();
        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus({ type: null, message: "" });
        }, 5000);
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (error: any) {
      console.error("Form submission error:", error);
      setSubmitStatus({
        type: "error",
        message: error.message?.includes("access_key") 
          ? "Form configuration error. Please contact me directly at " + about.email
          : "Something went wrong. Please try again or contact me directly via email.",
      });
    }
  };

  return (
    <SectionWrapper id="contact" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's work together to bring your ideas to
            life.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12"
        >
          {/* Contact Info */}
          <motion.div variants={staggerItem} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-foreground/70 mb-8">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your visions.
              </p>
            </div>

            <div className="space-y-6">
              <motion.a
                href={`mailto:${about.email}`}
                className="flex items-center gap-4 glass rounded-lg p-4 hover:bg-white/10 transition-colors group"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 rounded-full bg-primary-500/20 flex items-center justify-center group-hover:bg-primary-500/30 transition-colors">
                  <HiMail className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <p className="text-sm text-foreground/60">Email</p>
                  <p className="font-semibold">{about.email}</p>
                </div>
              </motion.a>

              <motion.a
                href="tel:+923112990870"
                className="flex items-center gap-4 glass rounded-lg p-4 hover:bg-white/10 transition-colors group"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 rounded-full bg-primary-500/20 flex items-center justify-center group-hover:bg-primary-500/30 transition-colors">
                  <HiPhone className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <p className="text-sm text-foreground/60">Phone</p>
                  <p className="font-semibold">+92 311 2990870</p>
                </div>
              </motion.a>

              <motion.div
                className="flex items-center gap-4 glass rounded-lg p-4"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 rounded-full bg-primary-500/20 flex items-center justify-center">
                  <HiLocationMarker className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <p className="text-sm text-foreground/60">Location</p>
                  <p className="font-semibold">{about.location}</p>
                </div>
              </motion.div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <motion.a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-primary-500/20 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaGithub className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-primary-500/20 transition-colors"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaLinkedin className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href={SOCIAL_LINKS.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-primary-500/20 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaTwitter className="w-6 h-6" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={staggerItem}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  {...register("name")}
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg glass border border-white/10 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all"
                  placeholder="Your Name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  {...register("email")}
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg glass border border-white/10 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all"
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  {...register("subject")}
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg glass border border-white/10 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all"
                  placeholder="Project Discussion"
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-400">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  {...register("message")}
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg glass border border-white/10 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-400">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {submitStatus.type && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg ${
                    submitStatus.type === "success"
                      ? "bg-green-500/20 border border-green-500/50 text-green-400"
                      : "bg-red-500/20 border border-red-500/50 text-red-400"
                  }`}
                >
                  <p className="text-sm font-medium">{submitStatus.message}</p>
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

