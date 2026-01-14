import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills";
import Portfolio from "./sections/Portfolio/Portfolio";
import ExperienceTimeline from "./components/ExperienceTimeline";
import Testimonials from "./sections/Testimonials/Testimonials";
import Contact from "./sections/Contact/Contact";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <ExperienceTimeline />
      <Testimonials />
      <Contact />
    </>
  );
}

export default App;

