import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Header = () => {
  const [show, setshow] = useState(false);
  return (
    <div className=" The_Nav absolute top-0 z-20 p-[10px] right-0">
      <IconButton>
        <div onClick={() => setshow(true)} className=" text-[white]  ">
          <MenuIcon />
        </div>
      </IconButton>
      {show && (
        <>
          <div className="Nav ">
            <div className="closeWrapper">
              <div className=" closeWrapper">
                <IconButton>
                  <div onClick={() => setshow(false)}>
                    <CloseIcon />
                  </div>
                </IconButton>
              </div>
            </div>
            <li>About</li>
            <li>Education</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>PFA</li>
            <li>Contact me</li>
            <div className="mb-5 ml-[50px] mt-[190px] flex w-[60px] items-center justify-between">
              <LinkedInIcon className=" text-[#787878]" />
              <GitHubIcon className=" text-[#787878]" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
