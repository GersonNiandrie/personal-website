import { experiences } from "../data/experience";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12">Experience</h2>

        <ul className="timeline timeline-snap-icon timeline-vertical">
          {experiences.map((exp, index) => (
            <li key={exp.id}>
              {index !== 0 && <hr />}
              
              <div className="timeline-middle">
                <span className="badge badge-primary"></span>
              </div>

              <div
                className={`timeline-${
                  index % 2 === 0 ? "start" : "end"
                } md:text-${index % 2 === 0 ? "right" : "left"}`}
              >
                <div className="card bg-base-200 shadow-md">
                  <div className="card-body">
                    <h3 className="text-xl font-semibold">
                      {exp.role}
                    </h3>
                    <p className="font-medium text-primary">
                      {exp.company}
                    </p>
                    <p className="text-sm opacity-70 mb-2">
                      {exp.startDate} — {exp.endDate}
                    </p>

                    <ul className="list-disc list-inside space-y-1">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <hr />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
