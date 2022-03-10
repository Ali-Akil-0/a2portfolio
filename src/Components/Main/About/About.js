import React from "react";
import TagCloud from "TagCloud";
import FrontAnimation from "../FrontAnimation";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import AboutSkills from "../../AboutSkills/AboutSkills";
import { Fade } from "react-awesome-reveal";

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
      <div className="about_me ">
        <div className="bg-[#1d1d1d] flex  h-[100vh]  overflow-y-hidden  ">
          <div className="flex-[0.5] h-[300px] aboutSkills">
            <AboutSkills />
          </div>
          <div className="flex-[0.5] about_me mt-[60px] about ml-[20px] pr-[30px] the_description">
            <Fade>
              <h1 className="text-[73px] text-[#46acd1] the_title title">
                About me{" "}
              </h1>
            </Fade>
            <Fade>
              <p className="text-[13px] text-white hover:underline ">
                Hello! My name is Ali and I enjoy creating things that live on
                the internet. My interest in web development started back in
                2012 when I decided to try editing custom Tumblr themes — turns
                out hacking together a custom reblog button taught me a lot
                about HTML & CSS!
              </p>
            </Fade>

            <br />
            <Fade>
              <p className="text-[13px] text-white hover:underline">
                Fast-forward to today, and I’ve had the privilege of working at
                an advertising agency, a start-up, a huge corporation, and a
                student-led design studio. My main focus these days is building
                accessible, inclusive products and digital experiences at
                Upstatement for a variety of clients.
              </p>
            </Fade>

            <br />
            <Fade>
              <p className="text-[13px] text-white hover:underline">
                In building JavaScript applications, I'm equipped with just the
                right tools, and can absolutely function independently of them
                to deliver fast, resilient solutions optimized for scale —
                performance and scalabilty are priorities on my radar.
              </p>
            </Fade>

            <br />

            <p className="text-[13px] text-white hover:underline">
              <Fade>
                <p>
                  Here are a few technologies I’ve been working with recently:
                </p>
              </Fade>
              <div className="grid mt-2 grid-cols-2 ">
                <Fade>
                  <p>
                    <ArrowRightIcon className="text-sm text-[#46acd1]" />{" "}
                    JavaScript (ES6+)
                  </p>
                </Fade>
                <Fade>
                  <p>
                    <ArrowRightIcon className="text-sm text-[#46acd1]  " />{" "}
                    React
                  </p>
                </Fade>
                <Fade>
                  <p>
                    <ArrowRightIcon className="text-sm text-[#46acd1]   " />{" "}
                    Node.js
                  </p>
                </Fade>
                <Fade>
                  <p>
                    <ArrowRightIcon className="text-sm text-[#46acd1]  " />{" "}
                    WordPress
                  </p>
                </Fade>
              </div>
            </p>
            <br />
            <Fade>
              <p className="text-[13px] tracking-[3px] text-[#46acd1]">
                Let's make something special
              </p>
            </Fade>
          </div>
        </div>
      </div>

      <div className="mt-[-19%] mb-[20px] hidden bottom_skills">
        <AboutSkills />
      </div>

      <div className=" absolute sky_animation  z-[200] top-0 w-[100vw]">
        <FrontAnimation />
      </div>
    </div>
  );
};

export default About;
