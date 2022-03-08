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

const Projects = () => {
  return (
    <div className="bg-[#1d1d1d] flex flex-col   overflow-x-hidden relative  snap-start ">
      <div className=" px-[50px] flex flex-col h-[100vh] justify-between ">
        <div className="flex flex-[0.4] projects">
          <div className="flex-[0.8]">
            <div>
              <h1 className="text-[73px] title leading-[75px] mt-[50px] text-[#46acd1] the_title">
                My Projects
              </h1>
            </div>
            <div className="mt-[30px]">
              <p className="text-[15px] text-white hover:underline ">
                A small gallery of recent projects chosen by me. I've done them
                all together with amazing people from companies around the
                globe. It's only a drop in the ocean compared to the entire
                list. Interested to see some more? Visit my projects page
              </p>
            </div>
          </div>
          <div className=" cursor-pointer ml-[10%] Button_left_margin  text-[#46acd1] ">
            {/* Button */}
            <button className="hover:bg-[#46acd1] text-[#46acd1]  hover:text-[#1d1d1d] hover:shadow-black   transition duration-300 ease-in-out border-2 py-[10px] px-[36px] mt-[130px] seeMore shadow-md shadow-[#46acd1]  border-[#46acd1] bg-transparent text-[18px] font-semibold leading-10 tracking-[4px]">
              <p className="mr-2 font-bold flex items-center">
                See more! <GitHubIcon />{" "}
              </p>
            </button>
          </div>
        </div>
        <div className="flex-[0.6]">
          <div>
            <h1 className="text-[20px] leading-[75px] mt-[20px] text-[#46acd1] the_title">
              Full stack projects
            </h1>
            <div className="text-white grid gap-[25px] grid-cols-3 ProjectsGrid">
              <div className="Wrap ">
                <img
                  src={A2zone}
                  alt="ProjectImage"
                  className="imageTransition"
                />
              </div>
              <div className="Wrap ">
                <img
                  src={A2exams}
                  alt="ProjectImage"
                  className="imageTransition"
                />
              </div>
              <div className="Wrap ">
                <img
                  src={A2messaging}
                  alt="ProjectImage"
                  className="imageTransition"
                />
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-[20px] leading-[75px] mt-[20px] text-[#46acd1] the_title">
              Front-End builds
            </h1>
            <div className="text-white grid gap-[25px] grid-cols-3 ProjectsGrid">
              <div className="Wrap ">
                <img
                  src={A2hotel}
                  alt="ProjectImage"
                  className="imageTransition"
                />
              </div>
              <div className="Wrap ">
                <img
                  src={A2movies}
                  alt="ProjectImage"
                  className="imageTransition"
                />
              </div>
              <div className="Wrap ">
                <img
                  src={A2moviesplus}
                  alt="ProjectImage"
                  className="imageTransition"
                />
              </div>
              <div className="Wrap ">
                <img
                  src={A2cars}
                  alt="ProjectImage"
                  className="imageTransition"
                />
              </div>
              <div className="Wrap ">
                <img
                  src={A2tracker}
                  alt="ProjectImage"
                  className="imageTransition"
                />
              </div>
              <div className="Wrap ">
                <img
                  src={A2music}
                  alt="ProjectImage"
                  className="imageTransition"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
