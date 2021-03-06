import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Ali from "../../assets/Ali_No_bg.png";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

const Header = () => {
  const [show, setshow] = useState(false);

  return (
    <div className=" The_Nav sticky testing_header right-0 h-0 first-line: z-[300] ">
      <div className="border-1  border-[blue]">
        <IconButton>
          <div
            onClick={() => setshow(true)}
            className=" bg-[#49b8e1] opacity-40 p-1 rounded-md border text-[white]  "
          >
            <MenuIcon />
          </div>
        </IconButton>
      </div>

      {show && (
        <>
          <div className="Nav overflow-scroll ">
            <div className="closeWrapper">
              <div className=" closeWrapper">
                <IconButton>
                  <div onClick={() => setshow(false)}>
                    <CloseIcon />
                  </div>
                </IconButton>
              </div>
            </div>
            <div className="md:w-100 md:h-100 relative ml-[40px] mt-[10px] mb-[8px]  h-20 w-20">
              <Link to="/" spy={true} smooth={true} offset={50} duration={500}>
                <img
                  src={Ali}
                  layout="fill"
                  alt="A2Logo"
                  className="shadow-md"
                />
              </Link>
            </div>
            <div className="flex flex-col items-center ">
              <h1 className=" the_title text-[27px] font-bold tracking-wider text-black">
                Ali Akil
              </h1>
              <h3 className="font-mono text-[12px] tracking-wide text-gray-400 ">
                Web Developer
              </h3>
            </div>
            <div className="flex  flex-col justify-between">
              <div>
                <Link
                  to="/About"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <li>About</li>
                </Link>
                <Link
                  to="/Education"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <li>Education</li>
                </Link>
                <Link
                  to="/Skills"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  <li>Skills</li>
                </Link>
                <Link to="/Projects">
                  <li>Projects</li>
                </Link>
                <Link to="/PFA">
                  <li>PFA</li>
                </Link>
                <Link to="/Contact">
                  <li>Contact me</li>
                </Link>
              </div>

              <div className="mb-5 ml-[50px] mt-[190px] flex w-[60px] items-center justify-between">
                <a
                  href="https://www.linkedin.com/in/akilali-/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedInIcon className=" text-[#787878]" />
                </a>
                <a
                  href="https://github.com/Ali-Akil-0"
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitHubIcon className=" text-[#787878]" />
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
