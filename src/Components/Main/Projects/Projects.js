import React from "react";
import A2cars from "../../../assets/A2cars.png";
import A2exams from "../../../assets/A2exams.png";
import A2hotel from "../../../assets/A2hotel.png";
import A2messaging from "../../../assets/A2messaging.png";
import A2movies from "../../../assets/A2movies.png";
import A2moviesplus from "../../../assets/A2moviesplus.png";
import A2music from "../../../assets/A2music.png";
import A2tracker from "../../../assets/A2tracker.png";
import A2zone from "../../../assets/A2zone.png";
import FrontAnimation from "../FrontAnimation";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import a2zonevideo from "../../../videos/A2zone.gif";
import a2Flix from "../../../videos/A2Flix.gif";
import A2Fy from "../../../videos/A2Fy.gif";
import A2hotelvideo from "../../../videos/A2Hotel.gif";
import A2plus from "../../../videos/A2plus.gif";
import A2Lack from "../../../videos/A2Lack.gif";

import A2sla from "../../../videos/A2sla.gif";
import A2examsvideo from "../../../videos/A2exams.gif";

import { Fade } from "react-awesome-reveal";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

const Projects = () => {
  return (
    <div className="bg-[#1d1d1d] flex flex-col   overflow-x-hidden relative  snap-start ">
      <div className=" px-[50px] flex flex-col h-[100vh] justify-between ">
        <div className="flex flex-[0.4] projects">
          <div className="flex-[0.8]">
            <div>
              <Fade>
                <h1 className="text-[73px] title leading-[75px] mt-[50px] text-[#46acd1] the_title">
                  My Projects
                </h1>
              </Fade>
            </div>
            <div className="mt-[30px]">
              <Fade>
                <p className="text-[15px] text-white hover:underline ">
                  A small gallery of recent projects chosen by me. I work mostly
                  on my own but I have developed some interesting projects with
                  amazing people either from school or friends that are
                  passionate about web dev as well.
                </p>
              </Fade>
            </div>
          </div>
          <div className=" cursor-pointer ml-[10%] Button_left_margin  text-[#46acd1] ">
            {/* Button */}
            <button className="hover:bg-[#46acd1] text-[#46acd1]  hover:text-[#1d1d1d] hover:shadow-black   transition duration-300 ease-in-out border-2 py-[10px] px-[36px] mt-[130px] seeMore shadow-md shadow-[#46acd1]  border-[#46acd1] bg-transparent text-[18px] font-semibold leading-10 tracking-[4px]">
              <Fade>
                <a
                  href="https://github.com/Ali-Akil-0"
                  target="_blank"
                  rel="noreferrer"
                >
                  <p className="mr-2 font-bold flex items-center">
                    See more! <GitHubIcon />{" "}
                  </p>
                </a>
              </Fade>
            </button>
          </div>
        </div>
        <div className="flex-[0.6]">
          <div>
            <Fade>
              <h1 className="text-[20px] leading-[75px] mt-[20px] text-[#46acd1] the_title">
                Full stack projects
              </h1>
            </Fade>

            <div className="text-white grid gap-[25px] grid-cols-3 ProjectsGrid">
              <Fade>
                <div className="Wrap relative ">
                  <img
                    src={A2zone}
                    alt="ProjectImage"
                    className="imageTransition"
                  />

                  <img className="video" src={a2zonevideo} alt="a2zoneVideo" />
                  <div className="opacity-40">
                    <a
                      href="https://musing-noether-881b7d.netlify.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <LanguageIcon className=" absolute z-50 text-[19px] bottom-2 right-[10px] text-[#787878]" />
                    </a>
                    <a
                      href="https://github.com/Ali-Akil-0/A2Zone"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <GitHubIcon className=" absolute z-50 bottom-2 right-[50px] text-[#787878]" />
                    </a>
                    <p className=" absolute z-50 text-sm bottom-2 left-[8px] text-[#787878]">
                      full e-commerce shop
                    </p>
                  </div>
                </div>
              </Fade>
              <Fade>
                <div className="Wrap relative ">
                  <img
                    src={A2exams}
                    alt="ProjectImage"
                    className="imageTransition"
                  />
                  <img className="video" src={A2examsvideo} alt="a2zoneVideo" />
                  <div className="opacity-40">
                    <a
                      href="https://practical-torvalds-47ebb5.netlify.app"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <LanguageIcon className=" absolute z-50 text-[19px] bottom-2 right-[10px] text-[#787878]" />
                    </a>
                    <a
                      href="https://github.com/Ali-Akil-0/gestion_des_evaluations"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <GitHubIcon className=" absolute z-50 bottom-2 right-[50px] text-[#787878]" />
                    </a>
                    <p className=" absolute z-50 text-sm bottom-2 left-[8px] text-[#787878]">
                      exam management
                    </p>
                  </div>
                </div>
              </Fade>
              <Fade>
                <div className="Wrap relative">
                  <img
                    src={A2messaging}
                    alt="ProjectImage"
                    className="imageTransition"
                  />
                  <img className="video" src={A2Lack} alt="a2zoneVideo" />

                  <div className="opacity-40">
                    <a
                      href="https://a2lack.web.app"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <LanguageIcon className=" absolute z-50 text-[19px] bottom-2 right-[10px] text-[#787878]" />
                    </a>
                    <a
                      href="https://github.com/Ali-Akil-0/A2messaging"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <GitHubIcon className=" absolute z-50 bottom-2 right-[50px] text-[#787878]" />
                    </a>
                    <p className=" absolute z-50 text-sm bottom-2 left-[8px] text-[#787878]">
                      Instant messaging
                    </p>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
          <div>
            <h1 className="text-[20px] leading-[75px] mt-[20px] text-[#46acd1] the_title">
              Front-End builds
            </h1>
            <div className="text-white grid gap-[25px] grid-cols-3 ProjectsGrid">
              <Fade>
                <div className="Wrap relative ">
                  <img
                    src={A2hotel}
                    alt="ProjectImage"
                    className="imageTransition"
                  />
                  <img className="video" src={A2hotelvideo} alt="a2zoneVideo" />
                  <div className="opacity-40">
                    {/* <a href="#" target="_blank" rel="noreferrer"> */}
                    <LanguageIcon className=" absolute z-300 text-[19px] bottom-2 right-[10px] text-[#787878]" />
                    {/* </a> */}
                    <a
                      href="https://github.com/Ali-Akil-0/a2nb"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <GitHubIcon className=" absolute z-300 bottom-2 right-[50px] text-[#787878]" />
                    </a>
                    <p className=" absolute z-50 text-sm bottom-2 left-[8px] text-[#787878]">
                      House renting
                    </p>
                  </div>
                </div>
              </Fade>
              <Fade>
                <div className="Wrap relative ">
                  <img
                    src={A2movies}
                    alt="ProjectImage"
                    className="imageTransition"
                  />
                  <img className="video" src={a2Flix} alt="a2zoneVideo" />
                  <div className="opacity-40">
                    <a
                      href="https://a2flix-38bdf.web.app"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <LanguageIcon className=" absolute z-50 text-[19px] bottom-2 right-[10px] text-[#787878]" />
                    </a>
                    <a
                      href="https://github.com/Ali-Akil-0/A2movies"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <GitHubIcon className=" absolute z-50 bottom-2 right-[50px] text-[#787878]" />
                    </a>
                    <p className=" absolute z-50 text-sm bottom-2 left-[8px] text-[#787878]">
                      Movies streaming service
                    </p>
                  </div>
                </div>
              </Fade>
              <Fade>
                <div className="Wrap relative ">
                  <img
                    src={A2moviesplus}
                    alt="ProjectImage"
                    className="imageTransition"
                  />
                  <img className="video" src={A2plus} alt="a2zoneVideo" />
                  <div className="opacity-40">
                    <a
                      href="https://a2plus-2b1dc.web.app"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <LanguageIcon className=" absolute z-50 text-[19px] bottom-2 right-[10px] text-[#787878]" />
                    </a>
                    <a
                      href="https://github.com/Ali-Akil-0/A2Moviesplus"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <GitHubIcon className=" absolute z-50 bottom-2 right-[50px] text-[#787878]" />
                    </a>
                    <p className=" absolute z-50 text-sm bottom-2 left-[8px] text-[#787878]">
                      Movies streaming service
                    </p>
                  </div>
                </div>
              </Fade>
              <Fade>
                <div className="Wrap relative ">
                  <img
                    src={A2cars}
                    alt="ProjectImage"
                    className="imageTransition"
                  />
                  <img className="video" src={A2sla} alt="a2zoneVideo" />
                  <div className="opacity-40">
                    <a
                      href="https://a2sla-542ff.web.app"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <LanguageIcon className=" absolute z-50 text-[19px] bottom-2 right-[10px] text-[#787878]" />
                    </a>
                    <a
                      href="https://github.com/Ali-Akil-0/A2cars"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <GitHubIcon className=" absolute z-50 bottom-2 right-[50px] text-[#787878]" />
                    </a>
                    <p className=" absolute z-50 text-sm bottom-2 left-[8px] text-[#787878]">
                      Tesla website Clone
                    </p>
                  </div>
                </div>
              </Fade>
              <Fade>
                <div className="Wrap relative ">
                  <img
                    src={A2tracker}
                    alt="ProjectImage"
                    className="imageTransition"
                  />
                  <div className="opacity-40">
                    <a
                      href="https://a2tracker-c8b5d.web.app"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <LanguageIcon className=" absolute z-50 text-[19px] bottom-2 right-[10px] text-[#787878]" />
                    </a>
                    <a
                      href="https://github.com/Ali-Akil-0/a2tracker"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <GitHubIcon className=" absolute z-50 bottom-2 right-[50px] text-[#787878]" />
                    </a>
                    <p className=" absolute z-50 text-sm bottom-2 left-[8px] text-[#787878]">
                      Covid-10 tracker
                    </p>
                  </div>
                </div>
              </Fade>
              <Fade>
                <div className="Wrap relative ">
                  <img
                    src={A2music}
                    alt="ProjectImage"
                    className="imageTransition"
                  />
                  <img className="video" src={A2Fy} alt="a2zoneVideo" />
                  <div className="opacity-40 z-200 ">
                    <a
                      href="https://a2fy-8a533.web.app"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <LanguageIcon className=" absolute z-50 text-[19px] bottom-2 right-[10px] text-[#787878]" />
                    </a>
                    <a
                      href="https://github.com/Ali-Akil-0/A2music"
                      target="_blank"
                      rel="noreferrer"
                      className="z-200"
                    >
                      <GitHubIcon className=" absolute z-50 bottom-2 right-[50px] text-[#787878]" />
                    </a>
                    <p className=" absolute z-50 text-sm bottom-2 left-[8px] text-[#787878]">
                      music streaming service
                    </p>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
