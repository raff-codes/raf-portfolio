import type { Skill } from './types';
import type { IconName } from '../types/icons';

// Curated list of high-impact skills for senior software engineer
// Ordered by importance and relevance
export const skills: Array<Omit<Skill, 'icon'> & { icon: IconName }> = [
  // Core Languages
  { name: "TypeScript", icon: "typescript" },

  // Frontend Frameworks
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextdotjs" },
  { name: "React Native", icon: "react" },
  { name: "Tailwind CSS", icon: "tailwindcss" },

  // Backend & Runtime
  { name: "Node.js", icon: "nodedotjs" },
  { name: "GraphQL", icon: "graphql" },
  { name: "Apollo Federation", icon: "apollographql" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "Redis", icon: "redis" },

  // DevOps & Cloud
  { name: "Docker", icon: "docker" },
  { name: "Kubernetes", icon: "kubernetes" },
  { name: "Terraform", icon: "terraform" },
  { name: "AWS", icon: "amazonwebservices" },
  { name: "GCP", icon: "googlecloud" },

  // Observability & Testing
  { name: "Grafana", icon: "grafana" },
  { name: "Sentry", icon: "sentry" },
  { name: "Jest", icon: "jest" },
  { name: "Git", icon: "git" },
  { name: "CI/CD", icon: "githubactions" },
];
