import { useState, useEffect } from "react";
import { testimonials } from "../../data/testimonials";
import TestimonialCard from "../../components/TestimonialCard";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("left");

  const prev = () => {
  setDirection("right");
  setCurrentIndex((prev) =>
    prev === 0 ? testimonials.length - 1 : prev - 1
  );
  };

  const next = () => {
  setDirection("left");
  setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-base-200">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Testimonials
        </h2>

        <div className="relative overflow-hidden max-w-xl mx-auto">
          <div
            key={currentIndex}
            className={`transition-all duration-500 ease-in-out ${
              direction === "left" ? "animate-slide-left" : "animate-slide-right"
            }`}
          >
            <TestimonialCard testimonial={testimonials[currentIndex]} />
          </div>
        </div>


        <div className="flex justify-center gap-4 mt-8">
          <button onClick={prev} className="btn btn-outline btn-sm">
            ❮ Prev
          </button>
          <button onClick={next} className="btn btn-outline btn-sm">
            Next ❯
          </button>
        </div>
      </div>
    </section>
  );
}
