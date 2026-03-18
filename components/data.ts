export const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const HERO_CONTENT = {
  name: "Arunkumar P",
  title: "Full Stack Developer",
  taglines: [
    "Building Scalable Web Platforms",
    "Architecting Robust Backend Systems",
    "Crafting Seamless Flutter Experiences",
    "Engineering Cloud-Ready Solutions",
  ],
  location: "Coimbatore, India",
  description:
    "2+ years of experience building scalable web and mobile applications using React, NextJs, Node, NestJs and Flutter, with hands-on experience in AWS, DevOps practices, and AI-driven solutions.",
  resumeLink:
    "https://drive.google.com/file/d/1xp1qSo6fc5DThHtHPDPRL6e5C-9Vp26u/view?usp=sharing",
};

export const HERO_TECHS = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "NestJS",
  "Flutter",
  "PostgreSQL",
  "Docker",
  "AWS",
];

export const EXPERIENCE = [
  {
    id: 1,
    role: "Junior Software Engineer – Full Stack",
    company: "Humble Tree Cloud Pvt Ltd",
    period: "Jul 2024 – Present",
    description: [
      "Delivered 5+ full-stack projects including ERP systems, e-commerce platforms, and mobile applications.",
      "Built scalable applications using React, Next.js, NestJS, Node.js, and Flutter.",
      "Implemented REST APIs, role-based access control systems, and real-time features.",
      "Designed scalable architectures for enterprise-level applications.",
    ],
  },
  {
    id: 2,
    role: "Software Engineer Intern",
    company: "Humble Tree Cloud Pvt Ltd",
    period: "Apr 2024 – Jul 2024",
    description: [
      "Contributed to production React and Next.js applications.",
      "Implemented authentication strategies using NextAuth.",
      "Improved application scalability and performance.",
    ],
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "MyEventJar",
    category: "Networking Platform",
    tech: ["Next.js", "NestJS", "Flutter"],
    status: "Ongoing",
    image: "eventjar.png",

    description:
      "Building a networking and event management platform that enables professionals to host events, schedule 1:1 meetings, and manage leads with automated follow-ups and real-time collaboration.",

    highlights: [
      "Contact lifecycle system (New → 24h → 7d → 30d → Qualified Lead)",
      "Shared contacts between attendees",
      "Automated invitations via Email & WhatsApp integration",
      "1:1 meeting scheduling with reminders",
      "Event discovery, registration & ticket management",
      "Backend modules: Auth, Contacts, Caching",
      "Flutter app for iOS & Android",
    ],

    links: {
      playstore:
        "https://play.google.com/store/apps/details?id=com.myeventjar.eventjar_app&hl=en_IN",
      appstore: "https://apps.apple.com/us/app/myeventjar/id6755136085",
    },
  },

  {
    id: 2,
    title: "Fabsol ERP",
    category: "Enterprise ERP",
    tech: ["NestJS", "Next.js", "Redis"],
    status: "Live",
    image: "fab.png",

    description:
      "Customizable enterprise ERP system with real-time dashboards, work order management, and role-based workflows.",

    highlights: [
      "Multi-role system (Admin, Planner, Production, Foreman)",
      "Project → Work Order → Resource hierarchy",
      "Real-time dashboards using WebSockets",
      "Employee & resource management system",
      "Mobile app for field workforce (Foreman)",
      "Delivered for UAE-based enterprise client",
    ],

    links: {
      website: "https://lef-fabsol.com/",
    },
  },

  {
    id: 3,
    title: "Erowayz",
    category: "E-Commerce / Services",
    tech: ["Next.js", "NestJS", "Redis"],
    status: "Completed",
    image: "ero-wayz.png",

    description:
      "Multi-vendor platform supporting food ordering, shop offers, and location-based services with a customizable backend.",

    highlights: [
      "Multi-vendor system (Food, Shops, Services)",
      "Street food ordering with dine-in & takeaway",
      "Location-based puncture service (2W & 4W)",
      "Dynamic product/service configuration",
      "Order lifecycle management",
      "Admin panel for vendor & service control",
    ],

    links: {},
  },

  {
    id: 4,
    title: "Wheel ERP",
    category: "Mobile ERP",
    tech: ["Flutter", "Dart"],
    status: "Completed",
    image: "wheel-erp.png",

    description:
      "Mobile ERP solution with offline-first capabilities, employee tracking, and task management.",

    highlights: [
      "Offline lead capture with auto-sync when online",
      "Clock-in / Clock-out attendance system",
      "Lead & deal tracking with follow-ups",
      "Task workflow management system",
      "Voice note recording linked to leads",
      "Role-based access (Admin & Employee)",
    ],

    links: {
      playstore:
        "https://play.google.com/store/apps/details?id=net.humbletree.wheel_erp&hl=en_IN",
      appstore: "https://apps.apple.com/us/app/wheel-erp/id6739245745",
    },
  },

  {
    id: 5,
    title: "MyBotify",
    category: "Automation",
    tech: ["Flutter", "WhatsApp API"],
    status: "Completed",
    image: "my-botify.png",

    description:
      "WhatsApp automation platform for running large-scale marketing campaigns with real-time chat and scheduling.",

    highlights: [
      "Bulk messaging campaigns with scheduling",
      "WhatsApp Business API integration",
      "Real-time chat using WebSockets",
      "Push notifications for message updates",
      "Multi-agent chat handling",
      "Contact & campaign management system",
    ],

    links: {
      playstore:
        "https://play.google.com/store/apps/details?id=com.mybotify.whatsapp&hl=en_IN",
    },
  },
];

export const SKILLS = {
  languages: ["JavaScript", "TypeScript", "Java", "Dart"],
  frontend: [
    "React",
    "Next.js",
    "TailwindCSS",
    "Redux",
    "Zustand",
    "TanStack Query",
    "HTML/CSS",
  ],
  backend: ["Node.js", "NestJS", "Express.js", "GraphQL", "REST APIs"],
  database: ["PostgreSQL", "MongoDB", "MySQL", "Prisma ORM"],
  others: [
    "Docker",
    "Git",
    "GitHub Actions *",
    "CI/CD Pipelines",
    "Firebase",
    "Figma",
  ],
};

export const AWS_SERVICES = [
  { name: "EC2", category: "Compute" },
  { name: "Lambda", category: "Compute" },
  { name: "S3", category: "Storage" },
  { name: "CloudFront", category: "Delivery" },
  { name: "RDS", category: "Database" },
  { name: "DynamoDB", category: "Database" },
  { name: "Cognito", category: "Auth" },
  { name: "API Gateway", category: "Network" },
  { name: "VPC", category: "Network" },
  { name: "SNS/SQS", category: "Messaging" },
];

export const EDUCATION = [
  {
    degree: "B.E. Computer Science and Engineering",
    school: "Sri Ramakrishna Engineering College",
    year: "2020 – 2024",
    grade: "CGPA: 8.5",
  },
];

export const CERTIFICATIONS = [
  {
    title: "AWS Cloud Badge",
    category: "Cloud",
    link: "https://www.credly.com/badges/b7c34eb5-59b3-42c8-a4de-e6fb805809de/linked_in_profile",
  },
  {
    title: "MERN Stack Development",
    category: "MERN",
    link: "https://drive.google.com/file/d/1ePPd1wW2onQTFah5i73-W7wQseMS9ak0/view",
  },
  {
    title: "JavaScript & Data Structures",
    category: "JS",
    link: "https://drive.google.com/file/d/1g_yhGD1B5R8drrLlM3xq1QFrzutGl07I/view",
  },
  {
    title: "Relational Database Systems",
    category: "DB",
    link: "https://drive.google.com/file/d/12bynQLtsOlTv-FhPjoI5IbmmQ3KgJr0i/view",
  },
  {
    title: "Core Java Programming",
    category: "Java",
    link: "https://drive.google.com/file/d/1uGgIZmQjlscOv5bdV0sxbAu0KcEhfr_P/view",
  },
  {
    title: "Responsive Web Design",
    category: "Web",
    link: "https://drive.google.com/file/d/1EOpy3TUOdV2RSJFdKZLdsZ7f6M3kti0U/view",
  },
];

export const CONTACT = {
  email: "arunkumar.ak.dev@gmail.com",
  phone: "+91 6369913564",
  linkedin: "https://linkedin.com/in/arun-kumar-199170252",
  github: "https://github.com/arunkumar-dev-ak",
};
