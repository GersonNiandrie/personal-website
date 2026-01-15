import { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just simulate submission
    console.log({ name, email, message });
    setSubmitted(true);

    // reset form
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="py-24 bg-base-100">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Contact Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div className="space-y-6">
            <p className="text-base-content/80">
              I’m always open to discussing new projects, creative ideas, or opportunities.
            </p>
            
            <div>
              <h3 className="font-semibold mb-1">Email</h3>
              <p className="text-primary">gersonniandrie.business@gmail.com</p>
            </div>

            <div>
              <h3 className="font-semibold mb-1">Socials</h3>
              <div className="flex justify-center gap-6 mt-6">
                <a
                  href="https://www.linkedin.com/in/gerson-ambesa-06ba86274/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-3xl text-base-content/70 hover:text-primary transition"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://github.com/GersonNiandrie"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-3xl text-base-content/70 hover:text-primary transition"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {submitted && (
              <div className="alert alert-success shadow-lg">
                <div>Message sent successfully!</div>
              </div>
            )}

            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input input-bordered w-full"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered w-full"
              required
            />
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="textarea textarea-bordered w-full"
              rows={6}
              required
            />

            <button type="submit" className="btn btn-primary w-full">
              Send Message
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}
