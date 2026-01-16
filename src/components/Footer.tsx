import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer footer-center bg-base-200 text-base-content p-10">
      <div>
        <p className="font-semibold text-lg">Gerson Ambesa</p>
        <p className="text-sm opacity-70">
          © {year} — All rights reserved
        </p>
      </div>

      <nav className="flex gap-6">
        <a href="#about" className="link link-hover">About</a>
        <a href="#skills" className="link link-hover">Skills</a>
        <a href="#portfolio" className="link link-hover">Portfolio</a>
      </nav>

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
                <a
                  href="https://www.youtube.com/@GeeHaGames"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="text-3xl text-base-content/70 hover:text-primary transition"
                >
                  <FaYoutube />
                </a>
            </div>
        </div>
    </footer>
  );
}
