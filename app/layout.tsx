import type { Metadata } from "next";
import React from "react";
import "./globals.css";

const DOMAIN_URL =
  process.env.NEXT_PUBLIC_DOMAIN_URL || "https://arunkumar-dev.in";

const GITHUB_URL =
  process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/arunkumar-dev-ak";

const LINKEDIN_URL =
  process.env.NEXT_PUBLIC_LINKEDIN_URL ||
  "https://linkedin.com/in/arunkumar-dev";

const GOOGLE_VERIFICATION = process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || "";

/* ---------------- METADATA ---------------- */
export const metadata: Metadata = {
  metadataBase: new URL(DOMAIN_URL),

  title: {
    default: "Arunkumar P | Full Stack Developer (React, Next.js, Node.js)",
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
    "Web Developer India",
    "TypeScript Developer",
  ],

  authors: [{ name: "Arunkumar P" }],
  creator: "Arunkumar P",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: DOMAIN_URL,
  },

  openGraph: {
    title: "Arunkumar P | Full Stack Developer",
    description:
      "React, Next.js, Node.js, NestJS, Flutter Developer building scalable apps.",
    url: DOMAIN_URL,
    siteName: "Arunkumar Portfolio",
    images: [
      {
        url: `${DOMAIN_URL}/opengraph-image.png`,
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Arunkumar P | Full Stack Developer",
    description:
      "React, Next.js, Node.js, NestJS, Flutter Developer building scalable apps.",
    images: [`${DOMAIN_URL}/opengraph-image.png`],
  },

  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },

  verification: {
    google: GOOGLE_VERIFICATION,
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
  description:
    "Full Stack Developer with experience in React, Next.js, Node.js, NestJS, and Flutter.",
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
  ],
  worksFor: {
    "@type": "Organization",
    name: "Freelance / Open to Work",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Arunkumar Portfolio",
  url: DOMAIN_URL,
  description: "Portfolio of Arunkumar P",
};

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Arunkumar Portfolio",
  url: DOMAIN_URL,
  description:
    "Portfolio of Arunkumar P, Full Stack Developer specializing in modern web technologies.",
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
        {/* 🔥 Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
        />

        {children}
      </body>
    </html>
  );
}
