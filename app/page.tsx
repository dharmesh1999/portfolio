"use client";

import ThemeToggle from './components/ThemeToggle';
import DeveloperIntro from './components/DeveloperIntro';
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Code2, Cpu, Database, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const technologies = [
    { icon: <Code2 className="w-8 h-8" />, name: "Frontend Development", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
    { icon: <Database className="w-8 h-8" />, name: "Backend Development", skills: ["Node.js", "Express", "PostgreSQL", "MongoDB"] },
    { icon: <Cpu className="w-8 h-8" />, name: "Other Skills", skills: ["Git", "Docker", "AWS", "CI/CD"] }
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      link: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management tool with real-time updates",
      image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=800&q=80",
      link: "#"
    },
    {
      title: "AI Content Generator",
      description: "An AI-powered platform for generating marketing content",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad095?w=800&q=80",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen">
      <ThemeToggle />
      
      {/* Developer Introduction */}
      <DeveloperIntro />

      {/* Technologies Section */}
      <motion.section 
        className="py-20 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Technologies & Skills
            <motion.div 
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-600"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
            />
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div 
                key={tech.name}
                className={`p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg transform transition-all duration-300 ${
                  hoveredTech === tech.name ? 'scale-105' : ''
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                onHoverStart={() => setHoveredTech(tech.name)}
                onHoverEnd={() => setHoveredTech(null)}
              >
                <motion.div 
                  className="flex items-center gap-4 mb-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-blue-600">{tech.icon}</div>
                  <h3 className="text-xl font-semibold">{tech.name}</h3>
                </motion.div>
                <ul className="space-y-2">
                  {tech.skills.map((skill, skillIndex) => (
                    <motion.li
                      key={skill}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: skillIndex * 0.1 }}
                      className="text-gray-600 dark:text-gray-300"
                    >
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        className="py-20 px-4 bg-gray-50 dark:bg-gray-900"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold text-center mb-16 relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Featured Projects
            <motion.div 
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-600"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
            />
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div 
                key={project.title}
                className="group relative overflow-hidden rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                onHoverStart={() => setHoveredProject(project.title)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                <motion.div
                  className="relative h-64"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-white text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-white/90 mb-4">{project.description}</p>
                    <Link 
                      href={project.link}
                      className="inline-flex items-center text-white hover:text-blue-400 transition-colors"
                    >
                      View Project
                      <motion.span
                        className="ml-2"
                        animate={{ x: hoveredProject === project.title ? 5 : 0 }}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.span>
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        className="py-20 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl font-bold mb-8 relative inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Get in Touch
            <motion.div 
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-600"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
            />
          </motion.h2>
          
          <motion.p 
            className="text-gray-600 dark:text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </motion.p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href="mailto:contact@example.com"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              <Mail className="w-5 h-5" />
              Send me an email
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}