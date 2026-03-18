"use client";

import { HERO_CONTENT, CONTACT } from "./data";
import { motion, useMotionValue, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import { ArrowRight, Github, Linkedin, Mouse, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SiGoogleplay, SiAppstore, SiGooglechrome } from "react-icons/si";
import {
  SiDocker,
  SiFlutter,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTypescript,
  SiLeetcode,
} from "react-icons/si";
import { FaAws, FaJava } from "react-icons/fa";

const techIcons: { [key: string]: React.ReactNode } = {
  React: <SiReact />,
  "Next.js": <SiNextdotjs />,
  TypeScript: <SiTypescript />,
  "Node.js": <SiNodedotjs />,
  NestJS: <SiNestjs />,
  Flutter: <SiFlutter />,
  PostgreSQL: <SiPostgresql />,
  Docker: <SiDocker />,
  AWS: <FaAws />,
  Java: <FaJava />,
};

const HeroParticles = dynamic(() => import("./HeroParticles"), {
  ssr: false,
});

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const techs = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "NestJS",
    "Flutter",
    "PostgreSQL",
    "Docker",
    "AWS",
    "Java",
  ];

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent) {
    if (!currentTarget) return;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left - width / 2);
    mouseY.set(clientY - top - height / 2);
  }

  const backgroundX = useTransform(mouseX, [-500, 500], [-20, 20]);
  const backgroundY = useTransform(mouseY, [-500, 500], [-20, 20]);

  const [typedTagline, setTypedTagline] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const i = loopNum % HERO_CONTENT.taglines.length;
    const fullText = HERO_CONTENT.taglines[i];

    const handleTyping = () => {
      setTypedTagline(
        isDeleting
          ? fullText.substring(0, typedTagline.length - 1)
          : fullText.substring(0, typedTagline.length + 1),
      );

      setTypingSpeed(isDeleting ? 30 : 100);

      if (!isDeleting && typedTagline === fullText) {
        setTypingSpeed(2000);
        setIsDeleting(true);
      } else if (isDeleting && typedTagline === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(100);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedTagline, isDeleting, loopNum, typingSpeed]);

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative z-0 min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden px-6">
      {/* Background Elements */}
      <motion.div
        style={{ x: backgroundX, y: backgroundY }}
        className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.15),transparent_70%)]"
      />
      <HeroParticles mouseX={mouseX} mouseY={mouseY} />

      {/* Cursor Spotlight */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          left: "50%",
          top: "50%",
        }}
        className="absolute w-64 h-64 rounded-full bg-sky-400/10 blur-3xl -z-5 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20 mb-16">
          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-6 md:mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for new opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                backgroundPosition: ["0% 50%", "200% 50%"],
              }}
              transition={{
                opacity: { delay: 0.1, duration: 0.5 },
                y: { delay: 0.1, duration: 0.5 },
                backgroundPosition: {
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #f8fafc, #38bdf8, #f8fafc)",
                backgroundSize: "200% auto",
              }}
              className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text tracking-tight mb-3">
              {HERO_CONTENT.name}
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400 mb-4">
              {HERO_CONTENT.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-lg text-sky-200/80 h-7 mb-6 flex justify-center md:justify-start">
              {typedTagline}
              <span className="animate-blink text-sky-300 ml-0.5">|</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-base md:text-lg text-slate-400 max-w-xl mx-auto md:mx-0 mb-8">
              {HERO_CONTENT.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col items-center md:items-start gap-8">
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center w-full">
                <Link
                  href="#projects"
                  className="px-8 py-3 rounded-full bg-sky-500 text-slate-950 font-semibold hover:bg-sky-400 hover:shadow-lg hover:shadow-sky-500/20 transition-all flex items-center gap-2 w-full sm:w-auto justify-center">
                  View Projects <ArrowRight className="w-4 h-4" />
                </Link>

                {/* Animated Developer Contact Capsule */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-500/30 to-emerald-500/30 rounded-full opacity-50 blur-sm group-hover:opacity-100 transition duration-500" />
                  <div className="relative flex items-center gap-2 p-1.5 rounded-full bg-slate-950/90 border border-slate-800 backdrop-blur-xl">
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="p-2.5 rounded-full text-slate-400 hover:text-sky-400 hover:bg-sky-500/10 transition-colors"
                      aria-label="Email Me">
                      <Mail className="w-5 h-5" />
                    </a>

                    <Link
                      href="#contact"
                      className="px-5 py-2 rounded-full bg-gradient-to-r from-sky-500/10 to-emerald-500/10 border border-sky-500/20 text-sky-400 text-sm font-semibold hover:bg-sky-500 hover:text-slate-950 transition-all duration-300 hover:shadow-[0_0_20px_rgba(14,165,233,0.3)]">
                      Get In Touch
                    </Link>

                    <a
                      href={CONTACT.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-full text-slate-400 hover:text-sky-400 hover:bg-sky-500/10 transition-colors"
                      aria-label="LinkedIn">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </motion.div>
              </div>

              <div className="flex gap-4 justify-center md:justify-start flex-wrap">
                {[
                  {
                    name: "GitHub",
                    href: "https://github.com/arunkumar-dev-ak",
                    icon: <Github className="w-4 h-4" />,
                    base: "text-white border-white/20 shadow-[0_0_12px_rgba(255,255,255,0.15)]",
                    hover:
                      "hover:shadow-[0_0_25px_rgba(255,255,255,0.35)] hover:border-white/50",
                    glow: "rgba(255,255,255,0.15)",
                  },
                  {
                    name: "LeetCode",
                    href: "https://leetcode.com/u/7U2klEEG2D/",
                    icon: <SiLeetcode className="w-4 h-4 text-amber-400" />,
                    base: "text-amber-400 border-amber-500/30 shadow-[0_0_12px_rgba(251,191,36,0.2)]",
                    hover:
                      "hover:shadow-[0_0_25px_rgba(251,191,36,0.45)] hover:border-amber-500/60",
                    glow: "rgba(251,191,36,0.2)",
                  },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className={`relative group flex items-center gap-2 px-4 py-2 rounded-full border 
        bg-neutral-900/60 backdrop-blur-md 
        text-sm font-medium transition-all duration-300 
        ${social.base} ${social.hover}`}>
                    {/* ICON */}
                    {social.icon}

                    {/* TEXT */}
                    <span>{social.name}</span>

                    {/* 🔥 ALWAYS-ON SOFT GLOW */}
                    <div
                      className="absolute inset-0 rounded-full opacity-100 blur-xl"
                      style={{
                        background: `radial-gradient(circle, ${social.glow}, transparent 70%)`,
                      }}
                    />

                    {/* 🔥 HOVER INTENSITY LAYER */}
                    <div
                      className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition duration-300 blur-xl"
                      style={{
                        background: `radial-gradient(circle, ${social.glow}, transparent 60%)`,
                      }}
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="hidden md:flex flex-1 justify-center md:justify-end relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 bg-gradient-to-tr from-sky-500/10 to-emerald-500/20 blur-[60px] rounded-full"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 0.65, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              whileHover={{ scale: 1.04 }}
              className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 group z-10">
              <div
                className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 transition-all duration-500 group-hover:from-sky-500 group-hover:to-emerald-500"
                style={{
                  clipPath:
                    "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                }}
              />
              <div
                className="absolute inset-1 bg-slate-950"
                style={{
                  clipPath:
                    "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                }}>
                <Image
                  src="/arun_dev_image.png"
                  alt={HERO_CONTENT.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-slate-950/10 mix-blend-overlay" />
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          variants={{
            visible: {
              transition: { staggerChildren: 0.1, delayChildren: 0.6 },
            },
          }}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-5 gap-3 md:gap-6 max-w-4xl mx-auto px-2 md:px-0">
          {techs.map((tech, index) => (
            <motion.div
              key={tech}
              className="group relative flex justify-center"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2,
                }}>
                <div className="relative flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-slate-900/40 border border-slate-800/60 backdrop-blur-md shadow-lg transition-all duration-300 hover:scale-110 group-hover:-translate-y-2 group-hover:shadow-[0_0_25px_rgba(14,165,233,0.2)] group-hover:border-sky-500/30 group-hover:bg-slate-800/60">
                  <div className="text-xl md:text-3xl text-slate-400 group-hover:text-sky-400 transition-colors duration-300">
                    {techIcons[tech]}
                  </div>
                </div>
              </motion.div>
              <div className="pointer-events-none absolute -translate-x-1/2 bottom-[calc(100%+12px)] left-1/2 whitespace-nowrap rounded-lg bg-slate-900/90 px-3 py-1.5 text-xs font-medium text-sky-200 opacity-0 backdrop-blur-sm border border-slate-700 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-1">
                {tech}
                <div className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-slate-900/90" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a
          href="#about"
          className="flex items-center gap-2 text-slate-500 hover:text-sky-400 transition-colors">
          <Mouse className="w-5 h-5" />
          <span className="text-sm font-medium">Scroll to explore</span>
        </a>
      </motion.div>
    </section>
  );
}
