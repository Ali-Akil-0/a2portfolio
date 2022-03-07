import React from "react";
import AIESECLOGO from "../../../assets/AIESEC.png";
import InfoTech from "../../../assets/InfoTech.png";

const Extra = () => {
  return (
    <div className="bg-[#1d1d1d] flex flex-col   overflow-x-hidden relative  snap-start ">
      <div className=" px-[50px] flex flex-col h-[100vh] justify-between ">
        <div>
          <h1 className="text-[73px] leading-[75px] mt-[50px] text-[#46acd1] the_title">
            Extra
          </h1>
        </div>
        <div className="grid  grid-cols-3 ml-[80px]">
          <div className="h-[300px] w-[300px] rounded-lg">
            <img
              className="rounded-lg"
              layout="fill"
              alt="AIESEC_LOGO"
              src={AIESECLOGO}
            />
          </div>
          <div className="h-[200px] w-[200px] ">
            <img
              className="rounded-lg"
              layout="fill"
              alt="InfoTech_LOGO"
              src={InfoTech}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Extra;
