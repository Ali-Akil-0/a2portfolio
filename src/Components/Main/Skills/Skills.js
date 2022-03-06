import React from "react";
import FrontAnimation from "../FrontAnimation";
import SkillBar from "./SkillBar";
import { FaReact } from "react-icons/fa";

const Skills = () => {
  return (
    <div className="bg-[#1d1d1d] overflow-y-hidden  overflow-x-hidden relative  snap-start ">
      <div className="flex px-[50px] h-[100vh] ">
        <div className="flex-[0.5] flex flex-col">
          <div>
            <h1 className="text-[73px] leading-[75px] mt-[50px] text-[#46acd1] the_title">
              Skills & Experience
            </h1>
          </div>
          <div className="mt-[30px]">
            <p className="text-[15px] text-white hover:underline ">
              Since beginning my journey as a freelance developer nearly 10
              years ago, I’ve done remote work for agencies, consulted for
              startups, and collaborated with talented people to create web
              products for both business and consumer use.
            </p>
            <br />
            <p className="text-[15px] text-white hover:underline">
              I create successful responsive websites that are fast, easy to
              use, and built with best practices. The main area of my expertise
              is front-end development, HTML, CSS, JS, building small and medium
              web apps, custom plugins, features, animations, and coding
              interactive layouts.
            </p>
            <br />
            <p className="text-[15px] text-white hover:underline">
              I also have full-stack developer experience with popular
              open-source CMS like (WordPress, Drupal, Magento, Keystone.js and
              others) .
            </p>
          </div>
          <div>
            <p className="text-[13px] mt-[30px] tracking-[2px] text-[#46acd1]">
              Visit my LinkedIn profile for more details or just contact me.
            </p>
          </div>
        </div>
        <div className="flex-[0.5] pl-[50px] ">
          <h1 className="text-[20px] leading-[75px] mt-[20px] text-[#46acd1] the_title">
            Main Technologies
          </h1>
          <div className="flex items-center justify-center">
            <FaReact className="p-0 w-[50px]" />
            <div className="w-[500px]">
              <SkillBar
                name="React"
                percentage="w-[50%]"
                background="bg-[#61dafb]"
              />
            </div>
          </div>

          <SkillBar
            name="Nextjs"
            percentage="w-[50%]"
            background="bg-gray-600"
          />
          <SkillBar
            name="Redux"
            percentage="w-[50%]"
            background="bg-[#764abc]"
          />
          <SkillBar
            name="Tailwindcss"
            percentage="w-[50%]"
            background="bg-[#38bdf8]"
          />
          <SkillBar
            name="EXPRESS"
            percentage="w-[50%]"
            background="bg-gray-500"
          />
          <SkillBar
            name="NodeJS"
            percentage="w-[50%]"
            background="bg-[#73aa62]"
          />

          <SkillBar
            name="MongoDB"
            percentage="w-[50%]"
            background="bg-[#00ed64]"
          />
          <SkillBar
            name="Firebase"
            percentage="w-[50%]"
            background="bg-[#ffcc32]"
          />
        </div>
      </div>
      <div className=" absolute mt-[70vh]  z-[200] top-0 w-[100vw]">
        <FrontAnimation />
      </div>
    </div>
  );
};

export default Skills;
