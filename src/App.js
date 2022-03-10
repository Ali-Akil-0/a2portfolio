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
                    <Main />
                  </>
                }
              />
              <Route
                path="/About"
                element={
                  <>
                    <About />
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
                    <PFA />
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
