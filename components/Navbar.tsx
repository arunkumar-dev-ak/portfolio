"use client";

import { useState, useEffect } from "react";
import { NAV_LINKS } from "../components/data";
import Link from "next/link"; // Keep Link import
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // Import Menu and X icons

const RESUME_URL = process.env.NEXT_PUBLIC_RESUME_URL || "#";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const currentHash = typeof window !== "undefined" ? window.location.hash : "";
  const menuVariants = {
    hidden: { opacity: 0, y: "-100%" },
    visible: {
      opacity: 1,
      y: "0%",
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: "-100%",
      transition: { duration: 0.3, ease: "easeIn" },
    },
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-4"
            : "bg-transparent py-6"
        }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link
            href="/"
            className="group relative text-2xl font-black tracking-tighter flex items-center"
            onClick={() => setIsMenuOpen(false)} // Close menu if logo is clicked
          >
            {/* Glow effect on hover */}
            <div className="absolute -inset-3 bg-gradient-to-r from-sky-500/20 to-emerald-500/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-slate-100 to-slate-300 group-hover:from-sky-400 group-hover:to-emerald-400 transition-all duration-300">
              AK
            </span>
            <span className="relative text-sky-500 group-hover:translate-x-0.5 transition-transform duration-300">
              .
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex gap-8 items-center">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-400 hover:text-sky-400 transition-colors">
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Resume Button */}
          <div className="hidden md:block">
            <a
              href={RESUME_URL}
              target="_blank"
              className="px-5 py-2 text-sm font-semibold text-slate-950 bg-sky-400 rounded-full hover:bg-sky-300 transition-transform hover:scale-105 active:scale-95">
              Resume
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            {/* Mobile Resume Icon */}
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-sky-600 hover:bg-sky-700 rounded-full text-slate-100 transition-all active:scale-95"
              aria-label="Get Resume">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 10v6m0 0-3-3m3 3 3-3M3 17V7a2 2 0 0 1 2-2h6l2 2h6a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                />
              </svg>
            </a>
            <button
              className="md:hidden text-slate-100 focus:outline-none z-[60]" // Increased z-index to ensure it's always clickable
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[70px] left-0 w-full md:hidden z-[55]">
            <div className="mx-4 rounded-2xl border border-slate-800 bg-slate-950/95 backdrop-blur-xl shadow-2xl p-6 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-base font-semibold text-slate-200 hover:text-sky-400 transition-colors py-2 border-b border-slate-800 last:border-none">
                  {link.name}
                </Link>
              ))}

              {/* Resume Button */}
              <a
                href={RESUME_URL}
                target="_blank"
                onClick={() => setIsMenuOpen(false)}
                className="mt-4 text-center px-5 py-2 text-sm font-semibold text-slate-950 bg-sky-400 rounded-lg hover:bg-sky-300 transition">
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
