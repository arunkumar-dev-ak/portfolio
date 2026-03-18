"use client";

import { HERO_CONTENT } from "../components/data";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import React from "react";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    clientX,
    clientY,
    currentTarget,
  }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left - width / 2);
    mouseY.set(clientY - top - height / 2);
  }

  const backgroundX = useTransform(mouseX, [-500, 500], [-50, 50]);
  const backgroundY = useTransform(mouseY, [-500, 500], [-50, 50]);

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <motion.div
        style={{ x: backgroundX, y: backgroundY }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-sky-500/20 rounded-full blur-[120px] -z-10"
      />

      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.div className="inline-block mb-4 px-3 py-1 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-400 text-sm font-medium">
          Available for new opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-slate-100 tracking-tight mb-6">
          Hi, I&apos;m {HERO_CONTENT.name} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400">
            Building scalable web platforms and modern digital experiences.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
          {HERO_CONTENT.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#projects"
            className="px-8 py-3.5 rounded-full bg-slate-100 text-slate-950 font-semibold hover:bg-white transition-all flex items-center gap-2">
            View Projects <ArrowRight className="w-4 h-4" />
          </a>
          <div className="flex gap-4">
            <a
              href="https://github.com/arunkumar-dev-ak"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-full border border-slate-800 bg-slate-900/50 text-slate-400 hover:text-white hover:border-slate-600 transition-all">
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/arun-kumar-199170252"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-full border border-slate-800 bg-slate-900/50 text-slate-400 hover:text-white hover:border-slate-600 transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
