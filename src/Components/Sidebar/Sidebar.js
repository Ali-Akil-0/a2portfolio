import SidebarCols from "./SidebarCols";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
const Sidebar = () => {
  return (
    <>
      <div className="fixed sidebar w-[10vw] shadow-2xl">
        <div
          className="  flex h-[100vh] w-[100%] flex-col
      items-center bg-black 
      "
        >
          <div className="flex flex-col">
            <div className="md:w-100 md:h-100 relative mb-[-10px]  h-40 w-40">
              <Link to="/">
                <img
                  src="https://logodix.com/logo/1961524.png"
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
              <Link to="/About">
                <SidebarCols title="About" />
              </Link>
              <Link to="/Education">
                <SidebarCols title="Education" />
              </Link>
              <Link to="/Skills">
                <SidebarCols title="Skills" />
              </Link>
              <Link to="/Projects">
                <SidebarCols title="Projects" />
              </Link>
              <Link to="/Contact">
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
