import type { Testimonial } from "../types/testimonials";

type Props = {
  testimonial: Testimonial;
};

export default function TestimonialCard({ testimonial }: Props) {
  return (
    <div className="card bg-base-100 shadow-md p-6 transition-opacity duration-500">
      <p className="text-base-content/80 italic">"{testimonial.message}"</p>

      <div className="mt-4 flex items-center gap-4">
        {testimonial.photo && (
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src={testimonial.photo} alt={testimonial.name} />
            </div>
          </div>
        )}
        <div>
          <p className="font-semibold">{testimonial.name}</p>
          {testimonial.role && testimonial.company && (
            <p className="text-sm opacity-70">
              {testimonial.role} @ {testimonial.company}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
