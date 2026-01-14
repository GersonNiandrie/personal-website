import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaCloud,
} from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiVite, SiPostman, SiDbeaver } from "react-icons/si";

export const skills = {
  frontend: [
    { name: "React", icon: FaReact },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "HTML5", icon: FaHtml5 },
    { name: "CSS3", icon: FaCss3Alt },
    { name: "Vite", icon: SiVite },
  ],
  backend: [
    { name: "Node.js", icon: FaNodeJs },
    { name: "REST APIs", icon: FaCloud },
    { name: "Postman", icon: SiPostman },
    
  ],
  tools: [
    { name: "Git", icon: FaGitAlt },
    { name: "Dbeaver", icon: SiDbeaver },
  ],
};
