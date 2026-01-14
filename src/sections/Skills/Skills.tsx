import { skills } from "../../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-base-200">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="card bg-base-100 shadow-sm">
              <div className="card-body">
                <h3 className="card-title capitalize">
                  {category.replace("_", " ")}
                </h3>

                <ul className="grid grid-cols-2 gap-4 mt-4">
                  {items.map(({ name, icon: Icon }) => (
                    <li
                      key={name}
                      className="flex items-center gap-3 text-sm hover:text-primary transition"
                    >
                      <Icon className="text-xl text-primary group-hover:scale-110 transition" />
                      <span>{name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
