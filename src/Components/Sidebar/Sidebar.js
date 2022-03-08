import SidebarCols from "./SidebarCols";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
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
              <img
                src="https://logodix.com/logo/1961524.png"
                layout="fill"
                alt="A2Logo"
                className="shadow-md"
              />
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
              <SidebarCols title="About" />
              <SidebarCols title="Education" />
              <SidebarCols title="Skills" />
              <SidebarCols title="Projects" />
              <SidebarCols title="Contact me" contact="true" />
            </div>
            <div>
              <div className="mb-5 mt-4 flex w-[60px] items-center justify-between">
                <LinkedInIcon className=" text-[#787878]" />
                <GitHubIcon className=" text-[#787878]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
