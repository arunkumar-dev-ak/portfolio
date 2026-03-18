"use client";

import { SKILLS } from "./data";
import Section from "./Section";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaCode } from "react-icons/fa";
import { SiDocker } from "react-icons/si";
import { IconType } from "react-icons"; // Import IconType
import { useState, useRef, useEffect } from "react"; // Import useEffect

type Category = keyof typeof colorMap;
type SkillCardColors = {
  cardHoverShadow: string;
  floatingIconClasses: string;
  mainIconClasses: string;
  skillTagHoverClasses: string;
  spotlightBgTint: string;
  animatedBorderGradient: string;
};
type SkillCardProps = {
  category: string;
  skills: string[];
  Icon: IconType;
  colors: SkillCardColors;
  index: number;
};

/* ---------------- ICON MAP ---------------- */
const iconMap: { [key: string]: IconType } = {
  languages: FaCode,
  frontend: FaReact,
  backend: FaNodeJs,
  database: FaDatabase,
  devops: SiDocker,
};

/* ---------------- COLOR MAP ---------------- */
const colorMap = {
  languages: {
    cardHoverShadow: "hover:shadow-lg hover:shadow-violet-500/10",
    floatingIconClasses: "bg-violet-500/10 text-violet-500",
    mainIconClasses: "text-violet-500",
    skillTagHoverClasses: "hover:bg-violet-500/10 hover:text-violet-300",
    spotlightBgTint: "rgba(139,92,246,0.15)", // Increased opacity
    animatedBorderGradient:
      "conic-gradient(from 0deg at 50% 50%, transparent 0%, rgba(139,92,246,0.3) 10%, transparent 25%, rgba(167,139,250,0.25) 40%, transparent 60%, transparent 100%)", // Increased opacity
  },
  frontend: {
    cardHoverShadow: "hover:shadow-lg hover:shadow-cyan-500/10",
    floatingIconClasses: "bg-cyan-500/10 text-cyan-500",
    mainIconClasses: "text-cyan-500",
    skillTagHoverClasses: "hover:bg-cyan-500/10 hover:text-cyan-300",
    spotlightBgTint: "rgba(6,182,212,0.15)", // Increased opacity
    animatedBorderGradient:
      "conic-gradient(from 0deg at 50% 50%, transparent 0%, rgba(6,182,212,0.3) 10%, transparent 25%, rgba(103,232,249,0.25) 40%, transparent 60%, transparent 100%)", // Increased opacity
  },
  backend: {
    cardHoverShadow: "hover:shadow-lg hover:shadow-emerald-500/10",
    floatingIconClasses: "bg-emerald-500/10 text-emerald-500",
    mainIconClasses: "text-emerald-500",
    skillTagHoverClasses: "hover:bg-emerald-500/10 hover:text-emerald-300",
    spotlightBgTint: "rgba(16,185,129,0.15)", // Increased opacity
    animatedBorderGradient:
      "conic-gradient(from 0deg at 50% 50%, transparent 0%, rgba(16,185,129,0.3) 10%, transparent 25%, rgba(110,231,183,0.25) 40%, transparent 60%, transparent 100%)", // Increased opacity
  },
  database: {
    cardHoverShadow: "hover:shadow-lg hover:shadow-blue-500/10",
    floatingIconClasses: "bg-blue-500/10 text-blue-500",
    mainIconClasses: "text-blue-500",
    skillTagHoverClasses: "hover:bg-blue-500/10 hover:text-blue-300",
    spotlightBgTint: "rgba(59,130,246,0.15)", // Increased opacity
    animatedBorderGradient:
      "conic-gradient(from 0deg at 50% 50%, transparent 0%, rgba(59,130,246,0.3) 10%, transparent 25%, rgba(147,197,253,0.25) 40%, transparent 60%, transparent 100%)", // Increased opacity
  },
  devops: {
    cardHoverShadow: "hover:shadow-lg hover:shadow-amber-500/10",
    floatingIconClasses: "bg-amber-500/10 text-amber-500",
    mainIconClasses: "text-amber-500",
    skillTagHoverClasses: "hover:bg-amber-500/10 hover:text-amber-300",
    spotlightBgTint: "rgba(245,158,11,0.15)", // Increased opacity
    animatedBorderGradient:
      "conic-gradient(from 0deg at 50% 50%, transparent 0%, rgba(245,158,11,0.3) 10%, transparent 25%, rgba(252,211,77,0.25) 40%, transparent 60%, transparent 100%)", // Increased opacity
  },
};

/* ---------------- CARD ---------------- */
const SkillCard = ({
  category,
  skills,
  Icon,
  colors,
  index,
}: SkillCardProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false); // Add isTouchDevice state

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const { left, top } = cardRef.current.getBoundingClientRect();
      setMousePosition({ x: e.clientX - left, y: e.clientY - top });
    }
  };

  // Detect touch devices for mobile animation
  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkTouch = () => {
        setIsTouchDevice(window.matchMedia("(hover: none)").matches);
      };
      checkTouch();
      window.addEventListener("resize", checkTouch); // Re-check on resize
      return () => window.removeEventListener("resize", checkTouch);
    }
  }, []);

  return (
    <div className="relative group">
      <motion.div
        ref={cardRef}
        className={`relative rounded-xl overflow-hidden border border-neutral-800
        transition-all duration-300 hover:scale-[1.02] ${colors.cardHoverShadow}`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        {/* 🔥 FIXED GRADIENT */}
        <motion.div
          className="absolute inset-[-1000%] rounded-xl z-0"
          animate={{ rotate: 360 }} // Always rotate
          transition={{
            repeat: Infinity, // Always repeat
            duration: 12,
            ease: "linear",
          }}
          style={{
            background: colors.animatedBorderGradient,
            opacity: isHovered || isTouchDevice ? 0.2 : 0.4, // Darker on hover, subtle when not
            filter: "blur(14px)",
            transition: "opacity 0.4s ease",
          }}
        />

        {/* CONTENT */}
        <div
          className="relative z-10 h-full w-full rounded-[calc(0.75rem-1px)] p-6 bg-neutral-900/70 backdrop-blur-md overflow-hidden" // Moved overflow-hidden here
          style={{
            // Apply spotlight on hover or touch
            background:
              isHovered || isTouchDevice
                ? `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, ${colors.spotlightBgTint}, transparent 80%), rgba(23,23,23,0.6)`
                : "rgba(23,23,23,0.5)",
          }}>
          <div className="flex items-center gap-4">
            <div
              className={`rounded-full bg-neutral-800 p-3 ${colors.mainIconClasses}`}>
              <Icon className="h-6 w-6" />
            </div>

            <h3 className="text-2xl font-bold text-white capitalize">
              {category}
            </h3>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {skills.map((skill: string) => (
              <motion.div
                key={skill}
                className={`rounded-full bg-neutral-800 px-3 py-1 text-sm text-neutral-300 ${colors.skillTagHoverClasses}`}
                whileHover={{ scale: 1.05 }}>
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* FLOATING ICON */}
      <div
        className={`absolute -top-3 -right-3 hidden h-10 w-10 items-center justify-center rounded-full group-hover:flex ${colors.floatingIconClasses}`}>
        <Icon className="h-6 w-6" />
      </div>
    </div>
  );
};

/* ---------------- MAIN ---------------- */
export default function Skills() {
  return (
    <Section id="skills" className="py-10 lg:py-20">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(SKILLS).map(([category, skills], index) => {
          const typedCategory = category as Category;

          const Icon = iconMap[typedCategory] || FaCode;
          const colors = colorMap[typedCategory] || {
            cardHoverShadow: "hover:shadow-lg hover:shadow-neutral-500/10",
            floatingIconClasses: "bg-neutral-500/10 text-neutral-400",
            mainIconClasses: "text-neutral-400",
            skillTagHoverClasses:
              "hover:bg-neutral-500/10 hover:text-neutral-300",
            spotlightBgTint: "rgba(163, 163, 163, 0.1)", // neutral-400/10
            animatedBorderGradient:
              "conic-gradient(from 0deg at 50% 50%, transparent 0%, rgb(163 163 163) 5%, transparent 15%, rgb(212 212 212) 25%, transparent 35%, transparent 100%)",
          }; // Fallback to neutral if category not in colorMap

          return (
            <SkillCard
              key={category}
              category={category}
              skills={skills}
              Icon={Icon}
              colors={colors}
              index={index}
            />
          );
        })}
      </div>
    </Section>
  );
}
