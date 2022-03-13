import React from "react";
import TagCloud from "TagCloud";

const AboutSkills = () => {
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

  return (
    <div className="h-[80vh] overflow-y-hidden">
      <span class="content  text-[#46acd1]"></span>
      <script src="https://cdn.jsdelivr.net/npm/TagCloud@2.2.0/dist/TagCloud.min.js">
        {" "}
      </script>
    </div>
  );
};

export default AboutSkills;
