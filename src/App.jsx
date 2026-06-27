import Navbar from "./components/Navbar/NavBar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
// import { projects } from "./data/projects";
import Experience from "./components/Experience";
import Journey from "./components/Journey";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        {/* <Projects /> */}
        <Experience />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
