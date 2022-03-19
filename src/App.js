import Sidebar from "./Components/Sidebar/Sidebar";
import Main from "./Components/Main/Main";
import Header from "./Components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "../src/Components/Main/About/About";
import Education from "../src/Components/Main/Education/Education";
import Skills from "../src/Components/Main/Skills/Skills";
import Projects from "../src/Components/Main/Projects/Projects";
import PFA from "../src/Components/Main/Announces";
import Contact from "../src/Components/Contact/Contact";
import Front from "./Components/Main/Front";
const APP = () => {
  return (
    <BrowserRouter>
      <div>
        <div className="flex ">
          <div className="flex-[0.1] sidebarLeft ">
            <Sidebar />
          </div>

          <main className="flex-[0.9] The_main relative">
            {/* Front */}
            <Header />

            <Routes>
              <Route
                path="/"
                element={
                  <>
                    {/* <Main /> */}

                    <div className="  bg-[#1d1d1d]	">
                      <div id="Main">
                        <Front />
                      </div>
                      <div id="About">
                        <About />
                      </div>
                      <div id="Education">
                        <Education />
                      </div>
                      <div id="Skills">
                        <Skills />
                      </div>
                      <div id="Projects">
                        <Projects />
                      </div>

                      <div id="Contact">
                        <Contact />
                      </div>
                    </div>
                  </>
                }
              />
              <Route
                path="/About"
                element={
                  <>
                    <div className="bg-[#1d1d1d]	">
                      <About />
                    </div>
                  </>
                }
              />
              <Route
                path="/Education"
                element={
                  <>
                    <Education />
                  </>
                }
              />
              <Route
                path="/Skills"
                element={
                  <>
                    <Skills />
                  </>
                }
              />
              <Route
                path="/Projects"
                element={
                  <>
                    <Projects />
                  </>
                }
              />
              <Route
                path="/PFA"
                element={
                  <>
                    <div className="bg-[#1d1d1d] h-[100vh]	">
                      <PFA />
                    </div>
                  </>
                }
              />
              <Route
                path="/Contact"
                element={
                  <>
                    <Contact />
                  </>
                }
              />
            </Routes>

            {/* <FrontAnimation />  */}
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default APP;
