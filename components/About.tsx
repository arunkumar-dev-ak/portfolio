"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import { EDUCATION, CERTIFICATIONS } from "./data";
import {
  GraduationCap,
  Award,
  Cloud,
  Orbit,
  FileJson,
  Database,
  Coffee,
  Globe,
  ExternalLink,
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function About() {
  const iconMap = {
    Cloud: <Cloud className="w-4 h-4 text-sky-400" />,
    MERN: <Orbit className="w-4 h-4 text-emerald-400" />,
    JS: <FileJson className="w-4 h-4 text-yellow-400" />,
    DB: <Database className="w-4 h-4 text-red-400" />,
    Java: <Coffee className="w-4 h-4 text-orange-400" />,
    Web: <Globe className="w-4 h-4 text-blue-400" />,
  };

  return (
    <Section id="about">
      <motion.div
        className="grid md:grid-cols-2 gap-12 md:gap-20 items-start"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}>
        <motion.div variants={itemVariants}>
          <h2 className="text-3xl font-bold text-slate-100 mb-8">About Me</h2>
          <div className="space-y-6">
            <p className="text-lg text-slate-300 pl-4 border-l-2 border-sky-500/50 hover:text-slate-100 transition-colors duration-300 leading-relaxed relative group">
              I am a{" "}
              <span className="font-semibold text-sky-400">
                Full Stack Developer
              </span>{" "}
              with over{" "}
              <span className="font-semibold text-emerald-400">
                2 years of experience
              </span>{" "}
              building{" "}
              <span className="font-semibold text-sky-400">
                scalable, high-performance applications
              </span>
              . I work across the entire development lifecycle — from crafting
              intuitive{" "}
              <span className="font-semibold text-indigo-400">frontend</span>{" "}
              interfaces to designing robust{" "}
              <span className="font-semibold text-indigo-400">backend</span>{" "}
              systems, managing{" "}
              <span className="font-semibold text-indigo-400">databases</span>,
              and deploying solutions on{" "}
              <span className="font-semibold text-indigo-400">cloud</span>{" "}
              platforms (AWS). I also develop cross-platform mobile applications
              using{" "}
              <span className="font-semibold text-indigo-400">Flutter</span>,
              enabling seamless user experiences across devices.
            </p>
            <p className="text-slate-400 leading-relaxed">
              My core expertise lies in modern technologies such as{" "}
              <span className="font-semibold text-indigo-400">React</span>,{" "}
              <span className="font-semibold text-indigo-400">Next.js</span>,{" "}
              <span className="font-semibold text-indigo-400">TypeScript</span>,{" "}
              <span className="font-semibold text-indigo-400">Node.js</span>,
              and <span className="font-semibold text-indigo-400">NestJS</span>.
              I focus on building clean, maintainable, and scalable systems with
              strong attention to performance, security, and user experience. I
              enjoy solving real-world problems by designing efficient
              architectures and delivering reliable software solutions.
            </p>
            <p className="text-slate-400 leading-relaxed">
              I actively leverage{" "}
              <span className="font-semibold text-purple-400">
                AI-assisted development
              </span>{" "}
              to enhance productivity, optimize workflows, and build smarter
              solutions. I am passionate about continuously learning, adapting
              to new technologies, and delivering impactful digital experiences
              that create real value.
            </p>
          </div>
        </motion.div>

        <motion.div className="space-y-10" variants={itemVariants}>
          {/* Education */}
          <div>
            <h3 className="flex items-center gap-3 text-xl font-semibold text-slate-100 mb-4">
              <GraduationCap className="w-6 h-6 text-sky-400" /> Education
            </h3>
            {EDUCATION.map((edu, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                <h4 className="font-medium text-slate-200">{edu.degree}</h4>
                <p className="text-sm text-slate-400 mt-1">{edu.school}</p>
                <div className="flex justify-between mt-2 text-xs text-slate-500">
                  <span>{edu.year}</span>
                  <span className="font-mono text-sky-400">{edu.grade}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h3 className="flex items-center gap-3 text-xl font-semibold text-slate-100 mb-6">
              <Award className="w-6 h-6 text-emerald-400" /> Certifications
            </h3>
            <motion.div
              className="flex flex-col gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}>
              {CERTIFICATIONS.map((cert, idx) => (
                <motion.a
                  key={idx}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-2 rounded-lg bg-slate-900/50 border border-slate-800 transition-all duration-300 hover:bg-slate-800/70 hover:border-sky-500/50"
                  variants={itemVariants}>
                  <div className="flex-shrink-0">
                    {iconMap[cert.category as keyof typeof iconMap] || (
                      <Award className="w-3 h-3 text-slate-400" />
                    )}
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-sm text-slate-200 group-hover:text-sky-400 transition-colors duration-300">
                      {cert.title}
                    </h4>
                  </div>
                  <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink className="w-4 h-4 text-slate-400" />
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
}
