import TestimonialCard from "../../components/TestimonialCard";
import { testimonials } from "../../data/testimonials";
export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-base-200">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Testimonials
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>

      </div>
    </section>
  );
}
