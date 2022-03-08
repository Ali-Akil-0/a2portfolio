import React from "react";
import AIESECLOGO from "../../../assets/AIESEC.png";
import InfoTech from "../../../assets/InfoTech.png";
import FrontAnimation from "../FrontAnimation";

const Extra = () => {
  return (
    <div className="bg-[#1d1d1d] flex flex-col overflow-y-hidden   overflow-x-hidden relative  snap-start ">
      <div className=" px-[50px] flex flex-col h-[100vh] justify-between ">
        <div>
          <h1 className="text-[73px] leading-[75px] mt-[50px] text-[#46acd1] the_title">
            Extra
          </h1>
        </div>

        <div className="grid grid-[20px] mb-[150px] grid-cols-2 ml-[20px]">
          <div className="flex flex-col mb-[40px]  ">
            <div className="Wrap2 mb-[40px] motion-safe:animate-bounce    ">
              <img
                src={InfoTech}
                alt="ProjectImage"
                className="imageTransition   "
              />
            </div>
            <h1 className="text-center ml-[100px] w-[60%] py-[20px] shadow-sm shadow-[#46acd1] text-[20px] the_title text-[white]">
              <span className=" underline">General secretary</span>
              <span> at </span>
              <span className="text-[#46acd1]"> InfoTech </span>
              club
            </h1>
          </div>
          <div className="flex flex-col mt-[40px]">
            <div className="Wrap2 animate-bounce animation-delay-1000  ">
              <img
                src={AIESECLOGO}
                alt="ProjectImage"
                className="imageTransition "
              />
            </div>
            <h1 className="text-center ml-[50px] w-[75%] py-[20px] shadow-sm shadow-[#46acd1]    text-[20px]  the_title text-[white]">
              {" "}
              <span className="underline">MKT attraction</span>
              <span> member at </span>
              <span className="text-[#46acd1]"> AIESEC Tetouan</span>
            </h1>
          </div>
        </div>
      </div>
      <div className=" absolute mt-[70vh]  z-[200] top-0 w-[100vw]">
        <FrontAnimation />
      </div>
    </div>
  );
};

export default Extra;
