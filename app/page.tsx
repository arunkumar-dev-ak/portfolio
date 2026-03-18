import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import AWSKnowledge from "../components/AWSKnowledge";
import Contact from "../components/Contact";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="relative bg-slate-950 min-h-screen selection:bg-sky-500/30">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <AWSKnowledge />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
