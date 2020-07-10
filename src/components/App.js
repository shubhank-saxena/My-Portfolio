import React from "react";
import axios from "axios";
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

class App extends React.Component {
  state = {
    projects: [],
    opensource: []
  };

  componentDidMount() {
    axios.get("https://backend.shubhank.codes/api/projects").then(res => {
      this.setState({
        projects: res.data
      });
    });
    axios.get("https://backend.shubhank.codes/api/opensource").then(res => {
      this.setState({
        opensource: res.data
      });
    });
  }

  render() {
    return (
      <>
        <Navbar />
        <main>
          <Homepage />
          <About />
          <Experience />
          <Projects data={this.state.projects} />
          <OpenSource />
          <Skills />
          <Awards />
          <Education />
          <Contact />
        </main>
      </>
    );
  }
}

export default App;
