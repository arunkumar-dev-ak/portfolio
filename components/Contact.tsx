"use client";

import Section from "./Section";
import { CONTACT } from "./data";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

/* ---------------- CONTACT ---------------- */
export default function Contact() {
  return (
    <Section id="contact" className="mb-20">
      <div className="bg-gradient-to-br from-sky-900/10 to-slate-900/40 rounded-3xl p-8 md:p-12 border border-sky-500/10 text-center backdrop-blur-md">
        {/* HEADER */}
        <h2 className="text-3xl font-bold text-slate-100 mb-6">
          Let’s Build Something Meaningful
        </h2>

        <p className="text-slate-400 mb-10 max-w-xl mx-auto leading-relaxed">
          I specialize in building scalable web and mobile applications using
          modern technologies like Next.js, NestJS, and Flutter. Currently
          working on real-world products, I’m open to opportunities where I can
          contribute to impactful and high-quality software.
        </p>

        {/* CONTACT BUTTONS */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
          {/* EMAIL */}
          <a
            href={`mailto:${CONTACT.email}`}
            className="flex items-center justify-center gap-3 px-6 py-3 rounded-xl 
            bg-slate-950 border border-slate-800 
            hover:border-sky-500/50 
            hover:shadow-[0_0_20px_rgba(56,189,248,0.25)] 
            transition-all duration-300 group">
            <Mail className="w-5 h-5 text-sky-400 group-hover:scale-110 transition-transform" />
            <span className="text-slate-300">{CONTACT.email}</span>
          </a>

          {/* PHONE */}
          <a
            href={`tel:${CONTACT.phone}`}
            className="flex items-center justify-center gap-3 px-6 py-3 rounded-xl 
            bg-slate-950 border border-slate-800 
            hover:border-emerald-500/50 
            hover:shadow-[0_0_20px_rgba(16,185,129,0.25)] 
            transition-all duration-300 group">
            <Phone className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
            <span className="text-slate-300">{CONTACT.phone}</span>
          </a>
        </div>

        {/* SOCIAL LINKS */}
        <div className="flex gap-4 justify-center flex-wrap">
          {/* GITHUB */}
          <a
            href={CONTACT.github}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group flex items-center gap-2 px-4 py-2 rounded-full border 
            border-white/20 text-white text-sm font-medium 
            bg-neutral-900/60 backdrop-blur-md 
            shadow-[0_0_12px_rgba(255,255,255,0.15)] 
            hover:shadow-[0_0_25px_rgba(255,255,255,0.35)] 
            hover:border-white/50 transition-all duration-300">
            <Github className="w-4 h-4" />
            GitHub
            {/* Glow */}
            <div className="absolute inset-0 rounded-full blur-xl opacity-70 bg-[radial-gradient(circle,rgba(255,255,255,0.15),transparent_70%)]" />
          </a>

          {/* LINKEDIN */}
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group flex items-center gap-2 px-4 py-2 rounded-full border 
            border-blue-500/30 text-blue-400 text-sm font-medium 
            bg-neutral-900/60 backdrop-blur-md 
            shadow-[0_0_12px_rgba(59,130,246,0.2)] 
            hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] 
            hover:border-blue-500/60 transition-all duration-300">
            <Linkedin className="w-4 h-4" />
            LinkedIn
            {/* Glow */}
            <div className="absolute inset-0 rounded-full blur-xl opacity-70 bg-[radial-gradient(circle,rgba(59,130,246,0.2),transparent_70%)]" />
          </a>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="text-center text-slate-600 text-sm mt-20">
        <p>© {new Date().getFullYear()} Arunkumar P</p>
      </footer>
    </Section>
  );
}
