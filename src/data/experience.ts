import type { ExperienceItem } from './types';

export const experience: ExperienceItem[] = [
  {
    id: 0,
    role: "Senior Full Stack Engineer",
    company: "LUSH Digital",
    period: "2023 - Present",
    description:
      "Led a team of 5 engineers while designing and optimising high-traffic systems handling 1200+ req/s with 99.9%+ uptime.",
    responsibilities: [
      "Provided technical direction, ran 1-on-1s, and conducted performance reviews while staying hands-on with architecture and code.",
      "Designed and optimised high-traffic systems with advanced caching, load balancing, and multi-region deployments (AWS ECS, GCP GKE).",
      "Architected GraphQL supergraphs with Apollo Federation and event-driven backends (Pub/Sub, BullMQ), enabling modular API design across multiple teams.",
      "Delivered £250k+ in annual cost savings through infrastructure optimisation, runtime benchmarking (Node.js, Bun, Hono), and resource-tuned Kubernetes clusters.",
      "Built end-to-end observability with Sentry, Grafana/Prometheus, and GCP Monitoring; established CI/CD pipelines enabling a weekly release cadence.",
      "Managed PostgreSQL databases with Drizzle ORM — schema design, query optimisation, indexing strategies, and zero-downtime migrations.",
    ],
  },
  {
    id: 1,
    role: "Full Stack Developer",
    company: "LUSH Digital",
    period: "2022 - 2023",
    description:
      "Built and shipped web applications using Next.js, React 18, and TypeScript serving global markets with full internationalisation support.",
    responsibilities: [
      "Developed internal shop management tools that streamlined day-to-day retail operations across multiple regions.",
      "Created Edge workers for Lush.com URL routing, improving site performance and SEO.",
      "Designed PostgreSQL schemas with performance-focused indexing; established Jest/RTL testing patterns adopted across the frontend team.",
      "Mentored junior developers on React best practices and component composition patterns.",
    ],
  },
  {
    id: 2,
    role: "Technical Product & Engineering Manager",
    company: "Selected Group",
    period: "2019 - 2022",
    description:
      "Led up to 15 engineers across an 11-product portfolio — introduced code sprints, code reviews, and shape-up methodologies that accelerated delivery.",
    responsibilities: [
      "Took over a stagnant consumer app, rebuilt the engineering team, and shipped resident-facing tools that increased user activity by 420%.",
      "Architected a cross-platform integration that drove a 285% increase in B2B sales.",
      "Built and trained a UI/UX design function from scratch, directly improving sprint velocity and product quality.",
      "Ran customer discovery interviews and translated pain points into prioritised engineering roadmaps.",
    ],
  },
  {
    id: 3,
    role: "Technical Business Development Manager",
    company: "Diliviri.com",
    period: "2018 - 2019",
    description:
      "Led a team of engineers building fleet dispatching software for food & retail companies; signed 25+ businesses at launch.",
    responsibilities: [
      "Redirected the company from physical logistics to a pure-software product, improving driver efficiency by 45%.",
    ],
  },
];
