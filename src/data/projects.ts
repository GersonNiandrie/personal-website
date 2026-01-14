import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "coffee-pos",
    title: "Coffee POS System",
    description: "A lightweight point-of-sale system for small cafés.",

    situation:
      "A small café needed a fast and simple POS system to reduce order errors.",
    task:
      "Design and implement an intuitive interface for order management.",
    action:
      "Built a React + TypeScript app with reusable components and local state management.",
    result:
      "Reduced order processing time and improved staff workflow.",

    technologies: ["React", "TypeScript", "Tailwind", "Vite"],
    // image: "coffee-pos.jpg",
    // liveUrl: "https://example.com",
    // repoUrl: "https://github.com/yourname/coffee-pos",
  },
];
