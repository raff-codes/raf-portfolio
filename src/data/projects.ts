import type { Project } from './types';

export const projects: Project[] = [
  {
    title: "GraphQL Query Toolkit",
    description:
      "Open-source npm package providing a tRPC-like developer experience for GraphQL — type-safe cache invalidation, multi-endpoint support, React Query integration, and CLI-driven code generation.",
    github: "https://github.com/designedhead/graphql-query-toolkit",
    tags: ["GraphQL", "TypeScript", "React Query", "GraphQL CodeGen", "package"],
  },
  {
    title: "React Focus Point",
    description:
      "Published npm package — a React component for dynamic focal point positioning on responsive images, using CSS object-fit with interactive coordinate selection.",
    github: "https://github.com/designedhead/react-focus-point",
    tags: ["React", "TypeScript", "Tailwind CSS", "package"],
  },
  {
    title: "Wedsite.ai",
    description:
      "Live SaaS product — AI-powered wedding website builder with drag-and-drop editor, custom domain provisioning, guest RSVP management, email invitations with tracking, and an AI planning assistant.",
    link: "https://wedsite.ai",
    tags: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL", "Drizzle ORM", "AI"],
  },
  {
    title: "Life in the UK",
    description:
      "Live study app for the Life in the UK citizenship test — a faithful 24-question mock exam drawn from a 408-question bank, plus a review mode that turns past mistakes into the next study session.",
    link: "https://uk.rafaelmendes.co.uk",
    tags: ["React", "TypeScript", "Hono", "Cloudflare Workers", "D1", "Clerk"],
  },
  {
    title: "poly-lexis",
    description:
      "CLI tool and TypeScript library for managing i18n translations — auto-translation via DeepL/Google Translate, missing-key validation for CI/CD pipelines, type-safe TypeScript generation, and protected-terms support.",
    github: "https://github.com/designedhead/poly-lexis",
    tags: ["TypeScript", "Node.js", "DeepL API", "Jest", "CLI"],
  },
  {
    title: "SAM - Lush",
    description:
      "Business Tool to help manage day to day in the retail stores, tracking stock, customer orders, deliveries, wastage and more.",
    link: "https://lush.com",
    tags: ["React.js", "Next.js", "Apollo", "Chakra UI", "Auth0"],
    image: "/projects/sam.png",
  },
  {
    title: "SAM - Native",
    description:
      "Native counterpart of a web application build with React Native, made with a focus on performance and speed.",
    tags: ["React Native", "Expo", "Apollo", "Tailwind"],
  },
  {
    title: "Lush AI",
    description:
      "AI Powered chatbot able to advice and answer questions on any Lush Product, built for customers and staff training.",
    link: "https://lush.com",
    tags: ["Typescript", "Bun", "Vectors", "AI"],
  },
  {
    title: "Lush Chat Order Tracking System",
    description:
      "Backend to connect front-end chatbot with Lush's internal systems to track orders and customer queries.",
    link: "https://lush.com",
    tags: ["Typescript", "Express.js", "GraphQL", "AWS"],
  },
  {
    title: "Video Template Library",
    description:
      "Built for a Video Marketing Company, to share in-house built templates across the company effectively.",
    link: "https://library.rafaelmendes.co.uk/",
    tags: [
      "Typescript",
      "Next.js",
      "TRPC",
      "Prisma",
      "NextAuth",
      "Cloudinary",
      "Chakra UI",
      "Google Drive Api",
    ],
    image: "/projects/video-library.jpg",
  },
  {
    title: "Lush.com - Redirector Edge Worker",
    description:
      "Backoffice & Cloud worker to manage redirects. Edge Redirection, Bulk upload, url validation for uniqueness, valid response, etc",
    link: "https://lush.com",
    tags: ["React.js", "Next.js", "Apollo", "Chakra UI", "Auth0"],
  },
  {
    title: "See other Projects",
    description: "See other projects I was involved with...",
    link: "https://github.com/designedhead",
    tags: [],
  },
];
