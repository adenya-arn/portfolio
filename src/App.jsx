import Navbar from "./components/Navbar/NavBar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import ProjectArchive from "./components/ProjectArchive/ProjectArchive";
import Experience from "./components/Experience/Experience";
import Journey from "./components/Journey/Journey";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ProjectArchive />
        <Experience />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
