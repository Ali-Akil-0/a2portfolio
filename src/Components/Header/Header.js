import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const [show, setshow] = useState(false);
  return (
    <div className=" The_Nav absolute top-0 z-10 p-[10px] right-0">
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
            <li>Testing1</li>
            <li>Testing2</li>
            <li>Testing3</li>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
