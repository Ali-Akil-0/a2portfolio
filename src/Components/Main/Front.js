import Announces from "./Announces";
import FrontAnimation from "./FrontAnimation";
import DownloadIcon from "@mui/icons-material/Download";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PhotoOfTheWeek from "../../assets/PhotoOfTheWeek.png";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import { Zoom } from "react-awesome-reveal";
import { Fade } from "react-awesome-reveal";
import CV_EN from "../../assets/Ali_Akil_PFA_En.pdf";
import CV_FR from "../../assets/Ali_Akil_PFA_Fr.pdf";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

// import { Fade bottom } from "react-awesome-reveal";

const download = (e) => {
  e.preventDefault();
  window.open(CV_EN);
  window.open(CV_FR);
};
const Front = () => {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@700&display=swap"
        rel="stylesheet"
      />
      <div className="relative front overflow-x-hidden snap-start h-[100%] bg-[#1d1d1d] overflow-hidden">
        <div className="absolute overflow-x-hidden z-[0] h-[200px] w-[200px] opacity-20">
          <img src={PhotoOfTheWeek} alt="PhotoOfTheWeek" />
        </div>

        <div className="ml-[38px] ">
          <p className="absolute animate-bounce  text-gray-600 opacity-50   justify-center mt-[85vh]  ml-[84vw]  text-md  z-[19] ">
            <div className="flex bouncing_down flex-col max-w-[50px] items-center justify-between">
              <span className="  pr-[2px] pl-[20px] pb-[10px] transform -rotate-90">
                down
              </span>
              <span className=" pl-[6px] pb-[8px]  transform -rotate-90">
                {" "}
                scroll{" "}
              </span>
              <ArrowDownwardIcon />
            </div>
          </p>
          <p className="absolute animate-bounce  text-gray-600 opacity-50 mt-[90vh]  ml-[-90px]  text-lg  z-[150] ">
            <div className="flex flex-col items-center">
              <span className=" pr-[2px]  pl-[30px]  transform -rotate-90">
                <ArrowBackIcon />
                scroll down{" "}
              </span>
            </div>
          </p>
        </div>

        <div className=" relative p-10">
          <div className="flex justify-between mb-[-30px]">
            <div className="mt-[40px] pt-10  pl-10 flex-0.6">
              <div className="the_title  special_title   transition duration-200 ease-in-out font-[Work] text-[80px] leading-[70px] text-white">
                {/* Title */}
                <h1 className="mb-4 tracking-wide">
                  <Zoom bottom>
                    <div>
                      <span className=" transition hover:border-b hover:border-[#08fdd8]  bg-transparent hover:shadow-[#08fdd8] hover:text-[#08fdd8] ease-in-out delay-150 hover:-translate-y-1 hover:text-[95px] duration-200 ">
                        H
                      </span>
                      <span className="letter_hover">i</span>
                      <span>,</span>
                    </div>
                  </Zoom>
                  {/* </Fade> */}
                </h1>
                <h1 className="mb-4 tracking-wide">
                  {/* <Fade bottom> */}
                  <Zoom bottom>
                    <div>
                      <span className="letter_hover">I'</span>
                      {/* </Fade> */}
                      {/* <Fade bottom> */}
                      <span className="letter_hover">m</span> {/* </Fade> */}
                      {/* <Fade bottom> */}
                      <span className="letter_hover">A</span>
                      {/* </Fade> */}
                      {/* <Fade bottom> */}
                      <span className="letter_hover">l</span>
                      {/* </Fade> */}
                      {/* <Fade bottom> */}
                      <span className="letter_hover">i</span>
                    </div>
                  </Zoom>
                </h1>
                <h1 className="mb-4 tracking-wide">
                  {/* <Fade bottom> */}
                  <Zoom bottom>
                    <div>
                      <span className="letter_hover">A</span>
                      {/* </Fade> */}
                      <span> </span>
                      {/* <Fade bottom> */}
                      <span className="letter_hover">W</span>
                      <span className="letter_hover">e</span>
                      <span className="letter_hover">b</span>
                      <span> </span>
                      {/* </Fade> */}
                      {/* <Fade bottom> */}
                      <span className="letter_hover">D</span>
                      <span className="letter_hover">e</span>
                      <span className="letter_hover">v</span>
                      <span className="letter_hover">e</span>
                      <span className="letter_hover">l</span>
                      <span className="letter_hover">o</span>
                      <span className="letter_hover">p</span>
                      <span className="letter_hover">e</span>
                      <span className="letter_hover">r</span>
                    </div>
                  </Zoom>
                  {/* </Fade> */}
                </h1>
              </div>
              <Fade>
                <div className="mt-[30px] opacity-80  font-['sans-serif'] text-[20px] tracking-[1px] text-[#6e6e6e]">
                  {/* Paragraph */}
                  MERN Stack enthusiast
                </div>
              </Fade>
            </div>
            <div className="flex-0.4 announcing announcing">
              <Announces />
            </div>
          </div>

          <div className=" p-2 cursor-pointer pl-10 z-1 CV  text-[#46acd1] mb-[-140px] ">
            {/* Button */}
            <Fade>
              <button className="hover:bg-[#46acd1] transition duration-300 ease-in-out hover:text-[#1d1d1d] hover:shadow-transparent border-2 shadow-md shadow-[#46acd1]  border-[#46acd1] bg-transparent px-10 py-1 text-[18px] font-semibold leading-10 tracking-[4px]">
                <a href="#" onClick={download}>
                  <div className="w-[100%] h-[100%]">
                    <div className="flex items-center  justify-between px-4 w-[100px] ">
                      <p className="mr-2 font-bold">CV</p>
                      <DownloadIcon />
                    </div>
                  </div>
                </a>{" "}
              </button>
            </Fade>
          </div>

          {/* <div>test</div> */}
        </div>
        <div className="frontAnimation">
          <FrontAnimation />
        </div>
      </div>
    </>
  );
};

export default Front;
