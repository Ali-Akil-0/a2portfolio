import React from "react";
const SkillBar = ({ name, percentage, background }) => {
  return (
    <div>
      <div className="mt-[7px]">
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span
                className={`text-[14px] the_title font-semibold inline-block px-2 uppercase text-white`}
              >
                {name}
              </span>
            </div>
            <div className="text-right"></div>
          </div>
          <div class="overflow-hidden h-[3px] mb-2 text-xs flex rounded bg-pink-200">
            <div
              className={`shadow-none ${percentage} flex flex-col text-center whitespace-nowrap text-white justify-center ${background}`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillBar;
