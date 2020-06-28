import React from "react";
import Navbar from "./Navbar/Navbar";
import Homepage from "./Homepage/Homepage";
import About from "./About/About";
import Experience from "./Experience/Experience";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Awards from "./Awards/Awards";
import Education from "./Education/Education";
import Contact from "./Contact/Contact";
import OpenSource from "./OpenSource/OpenSource";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Homepage />
        <About />
        <Experience />
        <Projects />
        <OpenSource />
        <Skills />
        <Awards />
        <Education />
        <Contact />
      </main>
    </>
  );
};

export default App;
