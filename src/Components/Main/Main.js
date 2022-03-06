import React from "react";
import About from "./About/About";
import Front from "./Front";
import Education from "./Education/Education";
import Skills from "./Skills/Skills";

const Main = () => {
  return (
    <div className="bg-[#1d1d1d] snap-y snap-mandatory	 h-screen overflow-scroll">
      <Front />
      <About />
      <Education />
      <Skills />
    </div>
  );
};

export default Main;
