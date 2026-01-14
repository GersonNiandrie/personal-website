export default function About() {
  return (
    <section id="about" className="py-24 bg-base-200">
      <div className="container mx-auto px-6 max-w-5xl">
        
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Bio */}
          <div className="md:col-span-2">
            <p className="text-base-content/80 leading-relaxed">
              I’m a front-end focused developer who enjoys turning complex
              problems into simple, intuitive interfaces. I care about clean
              structure, readable code, and building products that feel good
              to use—not just ones that “work”.
            </p>

            <p className="mt-4 text-base-content/80 leading-relaxed">
              I’m comfortable working across the stack when needed, but my
              strength lies in crafting responsive UIs, maintaining design
              consistency, and collaborating closely with designers or
              stakeholders to ship practical solutions.
            </p>
          </div>

          {/* Highlights */}
          <div className="space-y-6">
            
            <div>
              <h3 className="font-semibold mb-2">Core Skills</h3>
              <ul className="list-disc list-inside text-base-content/80 space-y-1">
                <li>React & TypeScript</li>
                <li>Responsive UI Development</li>
                <li>Component-Based Architecture</li>
                <li>State & Data Management</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Key Values</h3>
              <ul className="list-disc list-inside text-base-content/80 space-y-1">
                <li>Clarity over cleverness</li>
                <li>Maintainable code</li>
                <li>User-first thinking</li>
                <li>Continuous improvement</li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
