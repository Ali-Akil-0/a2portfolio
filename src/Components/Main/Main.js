import React from "react";
import About from "./About/About";
import Front from "./Front";
import Announces from "./Announces";
import Education from "./Education/Education";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Extra from "./Extra/Extra";
import Contact from "../Contact/Contact";
import PFA from "../PFA/PFA";

const Main = () => {
  return (
    <div className="bg-[#1d1d1d] snap-y snap-mandatory main flex-1	 h-screen overflow-scroll">
      <Front />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Extra />
      <div className="PFA">
        <PFA />
      </div>
      <Contact />
    </div>
  );
};

export default Main;
