import type { Project } from "../../types/project";
import { Button } from "../../components/common/Button";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <div className="card bg-base-100 shadow-sm group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* Image */}
      {project.image && (
        <figure>
          <img
            src={project.image}
            alt={project.title}
            className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </figure>
      )}

      <div className="card-body">
        
        <h3 className="card-title">{project.title}</h3>
        <p className="text-base-content/70">
          {project.description}
        </p>

        <div className="mt-4 space-y-2 text-sm text-base-content/80">
          <p><strong>Situation:</strong> {project.situation}</p>
          <p><strong>Task:</strong> {project.task}</p>
          <p><strong>Action:</strong> {project.action}</p>
          <p><strong>Result:</strong> {project.result}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="badge badge-outline">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-3">
          {project.liveUrl && (
            <Button variant="primary">
              <a href={project.liveUrl} target="_blank">
                Live
              </a>
            </Button>
          )}
          {project.repoUrl && (
            <Button variant="secondary">
              <a href={project.repoUrl} target="_blank">
                Code
              </a>
            </Button>
          )}
        </div>

      </div>
    </div>
  );
}
