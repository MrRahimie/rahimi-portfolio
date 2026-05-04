import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Journey from "./sections/Journey";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

/**
 * Single-page portfolio. Each section is its own component and uses the same
 * SectionWrapper for consistent spacing + scroll animation.
 */
export default function HomePage() {
  return (
    <main className="relative overflow-hidden bg-warm-gradient dark:bg-night-gradient">
      <Navbar />
      <Hero />
      <About />
      <Journey />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
