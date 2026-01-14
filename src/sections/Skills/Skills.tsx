const frontEndSkills = [
  "React",
  "TypeScript",
  "JavaScript (ES6+)",
  "Tailwind CSS",
  "HTML5",
  "CSS3",
];

const backEndSkills = [
  "Node.js",
  "Express",
  "REST APIs",
  "Basic SQL",
];

const devOpsSkills = [
  "Git & GitHub",
  "Vite",
  "npm",
  "Basic CI/CD",
];

function SkillCard({
  title,
  skills,
}: {
  title: string;
  skills: string[];
}) {
  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="card-body">
        <h3 className="card-title">{title}</h3>

        <div className="flex flex-wrap gap-2 mt-4">
          {skills.map((skill) => (
            <span key={skill} className="badge badge-outline">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-base-100">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SkillCard title="Front-End" skills={frontEndSkills} />
          <SkillCard title="Back-End" skills={backEndSkills} />
          <SkillCard title="DevOps & Tools" skills={devOpsSkills} />
        </div>

      </div>
    </section>
  );
}
