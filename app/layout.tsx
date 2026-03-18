import type { Metadata } from "next";
import React from "react";
import "./globals.css";

const DOMAIN_URL =
  process.env.NEXT_PUBLIC_DOMAIN_URL || "http://localhost:3000";
const GITHUB_URL =
  process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/arunkumar-dev-ak";
const LINKEDIN_URL =
  process.env.NEXT_PUBLIC_LINKEDIN_URL ||
  "https://linkedin.com/in/your-linkedin";

/* ---------------- METADATA ---------------- */
export const metadata: Metadata = {
  metadataBase: new URL(DOMAIN_URL),

  title: {
    default: "Arunkumar P | Full Stack Developer",
    template: "%s | Arunkumar P",
  },

  description:
    "Arunkumar P is a Full Stack Developer specializing in React, Next.js, Node.js, NestJS, and Flutter. Building scalable web and mobile applications.",

  keywords: [
    "Arunkumar P",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "NestJS Developer",
    "Flutter Developer",
    "Mobile App Developer",
    "Web Developer India",
    "Frontend Developer",
    "Backend Developer",
    "TypeScript Developer",
  ],

  authors: [{ name: "Arunkumar P" }],
  creator: "Arunkumar P",

  /* ---------------- ROBOTS ---------------- */
  robots: {
    index: true,
    follow: true,
  },

  /* ---------------- ICONS ---------------- */
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

/* ---------------- STRUCTURED DATA ---------------- */
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Arunkumar P",
  url: DOMAIN_URL,
  image: `${DOMAIN_URL}/opengraph-image.png`,
  jobTitle: "Full Stack Developer",
  address: {
    "@type": "PostalAddress",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
  sameAs: [GITHUB_URL, LINKEDIN_URL],
  knowsAbout: [
    "React",
    "Next.js",
    "Node.js",
    "NestJS",
    "Flutter",
    "TypeScript",
    "Full Stack Development",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Arunkumar Portfolio",
  url: DOMAIN_URL,
  description: "Full Stack Developer Portfolio",
  author: {
    "@type": "Person",
    name: "Arunkumar P",
  },
};

/* ---------------- ROOT LAYOUT ---------------- */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {/* 🔥 SEO Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />

        {children}
      </body>
    </html>
  );
}
