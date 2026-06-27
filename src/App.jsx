import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
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
