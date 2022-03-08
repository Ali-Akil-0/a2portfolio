import React from "react";
import FrontAnimation from "../FrontAnimation";
import MainTechnologies from "../../MainTechnologies/MainTechnologies";

const Skills = () => {
  return (
    <div className="bg-[#1d1d1d]  overflow-y-hidden  overflow-x-hidden relative  snap-start ">
      <div className="my_Skills flex flex-col ">
        <div className="flex px-[50px] h-[100vh]  ">
          <div className="flex-[0.5] w-[100%] flex flex-col skills_desc">
            <div>
              <h1 className="text-[73px] about title leading-[75px] mt-[50px] text-[#46acd1] the_title">
                Skills & Experience
              </h1>
            </div>
            <div className="mt-[30px] skills the_description">
              <p className="text-[15px] text-white hover:underline ">
                Since beginning my journey as a freelance developer nearly 10
                years ago, I’ve done remote work for agencies, consulted for
                startups, and collaborated with talented people to create web
                products for both business and consumer use.
              </p>
              <br />
              <p className="text-[15px] text-white hover:underline">
                I create successful responsive websites that are fast, easy to
                use, and built with best practices. The main area of my
                expertise is front-end development, HTML, CSS, JS, building
                small and medium web apps, custom plugins, features, animations,
                and coding interactive layouts.
              </p>
              <br />
              <p className="text-[15px] text-white hover:underline">
                I also have full-stack developer experience with popular
                open-source CMS like (WordPress, Drupal, Magento, Keystone.js
                and others) .
              </p>
            </div>
            <div>
              <p className="text-[13px] mt-[30px] tracking-[2px] text-[#46acd1]">
                Visit my LinkedIn profile for more details or just contact me.
              </p>
            </div>
          </div>
          <div className="flex-[0.5] mainTechnologies pl-[50px] ">
            <MainTechnologies />
          </div>
        </div>
        <div className="newMain">
          <div className="pl-[50px]   mb-[14%] ">
            <MainTechnologies />
          </div>
        </div>
        <div className=" absolute mt-[70vh] sky_animation  z-[200] top-0 w-[100vw]">
          <FrontAnimation />
        </div>
      </div>
    </div>
  );
};

export default Skills;
