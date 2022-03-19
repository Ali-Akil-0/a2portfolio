import SidebarCols from "./SidebarCols";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import Ali from "../../assets/Ali_No_bg.png";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
const Sidebar = () => {
  return (
    <>
      <div className="fixed sidebar overflow-scroll w-[10vw] shadow-2xl">
        <div
          className="  flex h-[100vh] w-[100%] flex-col
      items-center bg-black 
      "
        >
          <div className="flex flex-col">
            <div className="md:w-100 md:h-100 relative ml-[10px] mt-[10px] mb-[10px]  h-20 w-20">
              <Link
                activeClass="active"
                to="Main"
                spy={true}
                smooth={true}
                offset={50}
                duration={1000}
              >
                <img
                  src={Ali}
                  layout="fill"
                  alt="A2Logo"
                  className="shadow-md"
                />
              </Link>
            </div>
            <div className="flex flex-col items-center ">
              <h1 className=" the_title text-[27px] font-bold tracking-wider text-white">
                Ali Akil
              </h1>
              <h3 className="font-mono text-[12px] tracking-wide text-gray-400 ">
                Web Developer
              </h3>
            </div>
          </div>
          <div className=" border-1 mt-5 flex w-[100%] flex-grow flex-col items-center border-t border-gray-500 bg-[#181818] shadow-lg">
            <div className="flex flex-1 flex-col">
              <Link
                activeClass="active"
                to="About"
                spy={true}
                smooth={true}
                offset={50}
                duration={1000}
              >
                <SidebarCols title="About" />
              </Link>
              <Link
                activeClass="active"
                to="Education"
                spy={true}
                smooth={true}
                offset={50}
                duration={1000}
              >
                <SidebarCols title="Education" />
              </Link>
              <Link
                activeClass="active"
                to="Skills"
                spy={true}
                smooth={true}
                offset={50}
                duration={1000}
              >
                <SidebarCols title="Skills" />
              </Link>
              <Link
                activeClass="active"
                to="Projects"
                spy={true}
                smooth={true}
                offset={50}
                duration={1000}
              >
                <SidebarCols title="Projects" />
              </Link>
              <Link
                activeClass="active"
                to="Contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={1000}
              >
                <SidebarCols title="Contact me" contact="true" />
              </Link>
            </div>
            <div>
              <div className="mb-5 mt-4 flex w-[60px] items-center justify-between">
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
        </div>
      </div>
    </>
  );
};

export default Sidebar;
