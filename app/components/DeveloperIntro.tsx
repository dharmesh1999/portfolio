"use client";

import { motion } from "framer-motion";
import { Code, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function DeveloperIntro() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center px-4 relative"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="absolute inset-0 -z-10 opacity-20"
        animate={{
          background: [
            "radial-gradient(circle at 0% 0%, #3b82f6 0%, transparent 50%)",
            "radial-gradient(circle at 100% 100%, #3b82f6 0%, transparent 50%)",
            "radial-gradient(circle at 0% 100%, #3b82f6 0%, transparent 50%)",
            "radial-gradient(circle at 100% 0%, #3b82f6 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      />

      <motion.div
        className="text-center max-w-3xl"
        variants={itemVariants}
      >
        <motion.div
          className="mb-6 inline-block p-3 rounded-full bg-blue-100 dark:bg-blue-900"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          <Code className="w-8 h-8 text-blue-600 dark:text-blue-400" />
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6"
          variants={itemVariants}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Hi, I'm John Doe
          </span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300"
          variants={itemVariants}
        >
          I craft beautiful and functional web experiences with modern technologies.
          Passionate about creating intuitive interfaces and writing clean, efficient code.
        </motion.p>

        <motion.div
          className="flex justify-center gap-6"
          variants={itemVariants}
        >
          {[
            { href: "https://github.com", icon: <Github className="w-6 h-6" /> },
            { href: "https://linkedin.com", icon: <Linkedin className="w-6 h-6" /> },
            { href: "mailto:contact@example.com", icon: <Mail className="w-6 h-6" /> },
          ].map((social, index) => (
            <motion.div
              key={social.href}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link
                href={social.href}
                className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow"
              >
                {social.icon}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >
          <a
            href="#about"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-300"
          >
            Scroll to learn more
            <motion.div
              animate={{
                y: [0, 5, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              ↓
            </motion.div>
          </a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}