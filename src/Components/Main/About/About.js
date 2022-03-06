import React from "react";
import TagCloud from "TagCloud";
import FrontAnimation from "../FrontAnimation";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
const About = () => {
  const myTags = [
    "JavaScript",
    "CSS",
    "HTML",
    "C",
    "React",
    "Java",
    "git",
    "Express",
    "Node.js",
    "REDUX",
    "NextJS",
    "MySQL",
    "jQuery",
    "MongoDB",
    "Firestore",
  ];

  const tagCloud = TagCloud(".content", myTags, {
    // radius in px
    radius: 250,

    // animation speed
    // slow, normal, fast
    maxSpeed: "fast",
    initSpeed: "fast",

    // 0 = top
    // 90 = left
    // 135 = right-bottom
    direction: 135,

    // interact with cursor move on mouse out
    keep: true,
  });

  //To change the color of text randomly
  var colors = ["#34A853", "#FBBC05", "#4285F4", "#7FBC00", "FFBA01", "01A6F0"];

  return (
    <div className="flex snap-start flex-col overflow-hidden relative">
      <div className="bg-[#1d1d1d] flex  h-[100vh] overflow-y-hidden  ">
        <div className="flex-[0.5] h-[300px]">
          <span class="content  text-[white]"></span>
          <script src="https://cdn.jsdelivr.net/npm/TagCloud@2.2.0/dist/TagCloud.min.js">
            {" "}
          </script>
        </div>
        <div className="flex-[0.5] mt-[60px] ml-[20px] pr-[30px] the_description">
          <h1 className="text-[73px] text-[#46acd1] the_title">About me </h1>
          <p className="text-[13px] text-white hover:underline ">
            Hello! My name is Ali and I enjoy creating things that live on the
            internet. My interest in web development started back in 2012 when I
            decided to try editing custom Tumblr themes — turns out hacking
            together a custom reblog button taught me a lot about HTML & CSS!
          </p>
          <br />
          <p className="text-[13px] text-white hover:underline">
            Fast-forward to today, and I’ve had the privilege of working at an
            advertising agency, a start-up, a huge corporation, and a
            student-led design studio. My main focus these days is building
            accessible, inclusive products and digital experiences at
            Upstatement for a variety of clients.
          </p>
          <br />
          <p className="text-[13px] text-white hover:underline">
            In building JavaScript applications, I'm equipped with just the
            right tools, and can absolutely function independently of them to
            deliver fast, resilient solutions optimized for scale — performance
            and scalabilty are priorities on my radar.
          </p>
          <br />
          <p className="text-[13px] text-white hover:underline">
            Here are a few technologies I’ve been working with recently:
            <div className="grid mt-2 grid-cols-2 ">
              <p>
                <ArrowRightIcon className="text-sm text-[#46acd1]" /> JavaScript
                (ES6+)
              </p>
              <p>
                <ArrowRightIcon className="text-sm text-[#46acd1]  " /> React
              </p>
              <p>
                <ArrowRightIcon className="text-sm text-[#46acd1]   " /> Node.js
              </p>
              <p>
                <ArrowRightIcon className="text-sm text-[#46acd1]  " />{" "}
                WordPress
              </p>
            </div>
          </p>
          <br />
          <p className="text-[13px] tracking-[3px] text-[#46acd1]">
            Let's make something special
          </p>
        </div>
      </div>
      <div className=" absolute mt-[70vh]  z-[200] top-0 w-[100vw]">
        <FrontAnimation />
      </div>
    </div>
  );
};

export default About;
