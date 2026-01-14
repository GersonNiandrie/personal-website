import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projects";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-base-200">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Portfolio
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}
