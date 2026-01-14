import profileImg from "../../assets/images/profile.jpg";

export default function Hero() {

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center bg-base-100">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT: Text Content */}
          <div className="max-w-xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Hi, I’m{" "}
              <span className="text-primary block">
                Gerson Niandrie Ambesa
              </span>
            </h1>

            <h2 className="mt-4 text-lg sm:text-xl text-base-content/70">
              Full-Stack Web Developer
            </h2>

            <p className="mt-6 text-base leading-relaxed text-base-content/80">
              I design and build clean, responsive web interfaces with
              modern technologies, focusing on usability, clarity,
              and performance.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              {/* Portfolio Button */}
              <button
                className="btn btn-primary btn-lg"
                onClick={() => scrollToSection("portfolio")}
              >
                View My Work
              </button>

              {/* Contact Button */}
              <button
                className="btn btn-outline btn-lg"
                onClick={() => scrollToSection("contact")}
              >
                Contact Me
              </button>
            </div>
          </div>

          {/* RIGHT: Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-60 sm:w-72 lg:w-80 aspect-square rounded-full overflow-hidden ring ring-primary ring-offset-base-100 ring-offset-4">
                <img
                  src={profileImg}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
