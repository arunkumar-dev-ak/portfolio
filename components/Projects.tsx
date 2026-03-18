"use client";

import Image from "next/image";
import { Folder } from "lucide-react";
import Section from "./Section";
import { PROJECTS } from "./data";
import { ProjectType } from "@/types/project-type";

/* ---------------- PROJECT CARD ---------------- */
const ProjectCard = ({ project }: { project: ProjectType }) => {
  const isOngoing = project.status.toLowerCase() === "ongoing";

  return (
    <div className="group flex flex-col md:flex-row items-start gap-12 p-10 rounded-3xl border border-neutral-800/50 bg-neutral-900/20 backdrop-blur-md transition-all duration-300 hover:bg-neutral-900/40 hover:border-neutral-700">
      {/* LEFT CONTENT */}
      <div className="flex-1 space-y-6">
        {/* TOP ROW */}
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-sky-500/10 text-sky-400 rounded-xl">
            <Folder size={22} />
          </div>

          {/* STATUS */}
          <span
            className={`text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full border ${
              isOngoing
                ? "bg-green-500/10 text-green-400 border-green-500/30"
                : "bg-neutral-800 text-neutral-400 border-neutral-700"
            }`}>
            {project.status}
          </span>
        </div>

        {/* TITLE + DESCRIPTION */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-3 tracking-tight">
            {project.title}
          </h3>

          <p className="text-neutral-400 text-base leading-relaxed max-w-md">
            {project.description}
          </p>
        </div>

        {/* HIGHLIGHTS */}
        <ul className="space-y-2 text-sm text-neutral-400">
          {project.highlights.map((point) => (
            <li key={point} className="flex items-start gap-2">
              <span className="text-sky-400 mt-[2px]">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>

        {/* TECH STACK */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs font-medium bg-neutral-800/40 px-4 py-2 rounded-lg border border-neutral-700/50 text-neutral-300 hover:border-sky-500/50 transition-colors">
              {t}
            </span>
          ))}
        </div>

        {/* 🔥 LINKS (NEW) */}
        <div className="flex gap-3 pt-4 flex-wrap">
          {project.links?.playstore && (
            <a
              href={project.links.playstore}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs px-4 py-2 rounded-lg bg-green-500/10 text-green-400 border border-green-500/30 hover:bg-green-500/20 transition">
              Play Store
            </a>
          )}

          {project.links?.appstore && (
            <a
              href={project.links.appstore}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs px-4 py-2 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/30 hover:bg-blue-500/20 transition">
              App Store
            </a>
          )}

          {project.links?.website && (
            <a
              href={project.links.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs px-4 py-2 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/30 hover:bg-purple-500/20 transition">
              Live Site
            </a>
          )}
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="relative w-full h-full md:w-[50%] aspect-[16/11] flex items-center justify-center overflow-hidden rounded-2xl">
        <Image
          src={`/projects/${project.image}`}
          alt={project.title}
          fill
          className="object-contain transition-transform duration-500 group-hover:scale-105"
          priority
        />
      </div>
    </div>
  );
};

/* ---------------- MAIN COMPONENT ---------------- */
export default function Projects() {
  return (
    <Section id="projects" className="py-32 bg-neutral-950">
      <div className="w-full md:max-w-7xl mx-auto md:px-8">
        {/* HEADER */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-white tracking-tighter">
            Selected Work
          </h2>
          <div className="h-1 w-20 bg-sky-500 mt-4 rounded-full" />
        </div>

        {/* PROJECT LIST */}
        <div className="flex flex-col gap-32 w-full ">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </Section>
  );
}
