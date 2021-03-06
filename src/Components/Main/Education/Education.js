import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import LaptopIcon from "@mui/icons-material/Laptop";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import FrontAnimation from "../FrontAnimation";
import { Fade } from "react-awesome-reveal";

const Education = () => {
  return (
    <div className="bg-[#1d1d1d] overflow-y-hidden overflow-x-hidden relative Education snap-start h-[100vh]">
      <div className="flex flex-col  justify-center items-center">
        <Fade>
          <h1 className="text-[73px] education_title title mt-[60px] text-[#46acd1] the_title">
            Education
          </h1>
        </Fade>
        <div className="cards mt-[30px] opacity-90 ">
          <div className="bg-[#a86215] rounded-full h-[55px] mr-[15px]">
            <SchoolIcon className=" text-2xl mt-[15px] mx-[15px]" />
          </div>
          <div>
            <Fade>
              <div>
                <h2 className="CardTitle text-[17px] leading-6">
                  International Baccalaureate in Physical Sciences
                </h2>
                <h4 className="CardSchool text-[15px]">
                  Lalla Amina High School, Meknes
                </h4>
                <p className="text-[13px] CardPeriod">July 2018</p>
              </div>
            </Fade>
          </div>
        </div>
        <div className="bg-[#bde6f0]  mr-[30%] cards opacity-95 ">
          <div className="bg-[#155b6a] rounded-full  h-[55px] mr-[15px]">
            <LocalLibraryIcon className="text-2xl mt-[15px] mx-[15px]" />
          </div>
          <div>
            <Fade>
              <div>
                <h2 className="CardTitle text-[17px] leading-6">
                  Preparatory cycle
                </h2>
                <h4 className="CardSchool text-[15px]">
                  National School of Applied Sciences, Tetouan
                </h4>
                <p className="text-[13px] CardPeriod">
                  Septembre 2018 - July 2020
                </p>
              </div>
            </Fade>
          </div>
        </div>
        <div className="cards z-[102]">
          <div className="bg-[#a86215] rounded-full  h-[55px] mr-[15px]">
            <LaptopIcon className="text-2xl mt-[15px] mx-[15px]" />
          </div>
          <div className="">
            <Fade>
              <div>
                <h2 className="CardTitle text-[17px] leading-6">
                  Engineering Cycle: Computer Science
                </h2>
                <h4 className="CardSchool text-[15px]">
                  National School of Applied Sciences, Tetouan
                </h4>
                <p className="text-[13px] CardPeriod">Septembre 2020 to date</p>
              </div>
            </Fade>
          </div>
        </div>
      </div>
      <div className=" absolute mt-[70vh] EducationAnimation  z-[100] top-0 w-[100vw]">
        <FrontAnimation />
      </div>
    </div>
  );
};

export default Education;
