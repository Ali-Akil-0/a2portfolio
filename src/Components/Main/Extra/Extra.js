import React from "react";
import AIESECLOGO from "../../../assets/AIESEC.png";
import InfoTech from "../../../assets/InfoTech.png";
import FrontAnimation from "../FrontAnimation";
import { Fade } from "react-awesome-reveal";

const Extra = () => {
  return (
    <div className="bg-[#1d1d1d] flex flex-col overflow-y-hidden   overflow-x-hidden relative  snap-start ">
      <div className="That_extra">
        <div className=" px-[50px]  flex ExtraTitle flex-col h-[100vh] justify-between ">
          <div>
            <Fade>
              <h1 className="text-[73px] title leading-[75px] mt-[50px] text-[#46acd1] the_title">
                Extra
              </h1>
            </Fade>
          </div>

          <div className="grid mt-[20px] grid-[20px] mb-[90px] ExtraBot grid-cols-2 Extra_Grid ml-[20px]">
            <div className="flex flex-col mb-[40px]  ">
              <Fade>
                <div className="Wrap2 animations2 mb-[40px] hover:animations2">
                  <img
                    src={InfoTech}
                    alt="ProjectImage"
                    className="imageTransition   "
                  />
                </div>
              </Fade>
              <Fade>
                <h1 className="text-center ml-[100px] w-[60%] py-[20px] shadow-sm shadow-[#46acd1] text-[20px] the_title text-[white]">
                  <span className=" underline">General secretary</span>
                  <span> at </span>
                  <span className="text-[#46acd1]"> InfoTech </span>
                  club
                </h1>
              </Fade>
            </div>
            <div className="flex flex-col mt-[40px]">
              <div className="Wrap2 animations2  delay-500  ">
                <Fade>
                  <img
                    src={AIESECLOGO}
                    alt="ProjectImage"
                    className="imageTransition "
                  />
                </Fade>
              </div>
              <Fade>
                <h1 className="text-center ml-[50px] w-[75%] py-[20px] shadow-sm shadow-[#46acd1]    text-[20px]  the_title text-[white]">
                  {" "}
                  <span className="underline">MKT attraction</span>
                  <span> member at </span>
                  <span className="text-[#46acd1]"> AIESEC Tetouan</span>
                </h1>
              </Fade>
            </div>
          </div>
        </div>
      </div>

      <div className=" absolute mt-[70vh] bottomAnimations  z-[200] top-0 w-[100vw]">
        <FrontAnimation />
      </div>
    </div>
  );
};

export default Extra;
