import React from "react";
import About from "./About/About";
import Front from "./Front";
import Education from "./Education/Education";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Extra from "./Extra/Extra";

const Main = () => {
  return (
    <div className="bg-[#1d1d1d] snap-y snap-mandatory	 h-screen overflow-scroll">
      <Front />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Extra />
    </div>
  );
};

export default Main;
