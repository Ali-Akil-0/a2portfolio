import React from "react";
import FrontAnimation from "../FrontAnimation";
import SkillBar from "./SkillBar";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiFirebase } from "react-icons/si";

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
            <FaReact className="p-0 w-[50px] text-[#46acd1]" />
            <div className="w-[500px]">
              <SkillBar
                name="React"
                percentage="w-[70%]"
                background="bg-[#61dafb]"
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <SiNextdotjs className="p-0 w-[50px] text-[white]" />
            <div className="w-[500px]">
              <SkillBar
                name="Next.js"
                percentage="w-[55%]"
                background="bg-gray-600"
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <SiRedux className="p-0 w-[50px] text-[#764abc]" />
            <div className="w-[500px]">
              <SkillBar
                name="Redux"
                percentage="w-[49%]"
                background="bg-[#764abc]"
              />
            </div>
          </div>

          <div className="flex items-center justify-center">
            <SiTailwindcss className="p-0 w-[50px] text-[#38bdf8]" />
            <div className="w-[500px]">
              <SkillBar
                name="Tailwind CSS"
                percentage="w-[59%]"
                background="bg-[#38bdf8]"
              />
            </div>
          </div>

          <div className="flex items-center justify-center">
            <SiExpress className="p-0 w-[50px] text-[white]" />
            <div className="w-[500px]">
              <SkillBar
                name="Express.js"
                percentage="w-[56%]"
                background="bg-gray-500"
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <FaNodeJs className="p-0 w-[50px] text-[#73aa62]" />
            <div className="w-[500px]">
              <SkillBar
                name="Node.js"
                percentage="w-[54%]"
                background="bg-[#73aa62]"
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <SiMongodb className="p-0 w-[50px] text-[#00ed64]" />
            <div className="w-[500px]">
              <SkillBar
                name="MongoDB"
                percentage="w-[65%]"
                background="bg-[#00ed64]"
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <SiFirebase className="p-0 w-[50px] text-[#ffcc32]" />
            <div className="w-[500px]">
              <SkillBar
                name="Firebase"
                percentage="w-[48%]"
                background="bg-[#ffcc32]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" absolute mt-[70vh]  z-[200] top-0 w-[100vw]">
        <FrontAnimation />
      </div>
    </div>
  );
};

export default Skills;
