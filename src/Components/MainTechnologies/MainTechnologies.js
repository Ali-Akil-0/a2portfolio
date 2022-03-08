import React from "react";
import SkillBar from "../Main/Skills/SkillBar";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiFirebase } from "react-icons/si";

const MainTechnologies = () => {
  return (
    <div>
      <h1 className="text-[20px] w-[200px] leading-[75px] mt-[20px] text-[#46acd1] the_title">
        Main Technologies
      </h1>
      <div className="flex items-center justify-center">
        <FaReact className="p-0 w-[50px] text-[#46acd1]" />
        <div className="w-[85%]">
          <SkillBar
            name="React"
            percentage="w-[85%]"
            background="bg-[#61dafb]"
          />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <SiNextdotjs className="p-0 w-[50px] text-[white]" />
        <div className="w-[85%]">
          <SkillBar
            name="Next.js"
            percentage="w-[55%]"
            background="bg-gray-600"
          />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <SiRedux className="p-0 w-[50px] text-[#764abc]" />
        <div className="w-[85%]">
          <SkillBar
            name="Redux"
            percentage="w-[49%]"
            background="bg-[#764abc]"
          />
        </div>
      </div>

      <div className="flex items-center justify-center">
        <SiTailwindcss className="p-0 w-[50px] text-[#38bdf8]" />
        <div className="w-[85%]">
          <SkillBar
            name="Tailwind CSS"
            percentage="w-[59%]"
            background="bg-[#38bdf8]"
          />
        </div>
      </div>

      <div className="flex items-center justify-center">
        <SiExpress className="p-0 w-[50px] text-[white]" />
        <div className="w-[85%]">
          <SkillBar
            name="Express.js"
            percentage="w-[56%]"
            background="bg-gray-500"
          />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <FaNodeJs className="p-0 w-[50px] text-[#73aa62]" />
        <div className="w-[85%]">
          <SkillBar
            name="Node.js"
            percentage="w-[54%]"
            background="bg-[#73aa62]"
          />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <SiMongodb className="p-0 w-[50px] text-[#00ed64]" />
        <div className="w-[85%]">
          <SkillBar
            name="MongoDB"
            percentage="w-[65%]"
            background="bg-[#00ed64]"
          />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <SiFirebase className="p-0 w-[50px] text-[#ffcc32]" />
        <div className="w-[85%]">
          <SkillBar
            name="Firebase"
            percentage="w-[48%]"
            background="bg-[#ffcc32]"
          />
        </div>
      </div>
    </div>
  );
};

export default MainTechnologies;
