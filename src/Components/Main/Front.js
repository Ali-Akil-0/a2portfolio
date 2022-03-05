import Announces from "./Announces";
import FrontAnimation from "./FrontAnimation";
import DownloadIcon from "@mui/icons-material/Download";
const Front = () => {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@700&display=swap"
        rel="stylesheet"
      />
      <div className="h-[100%] bg-[#1d1d1d] shadow-xl overflow-hidden">
        <div className="p-10">
          <div className="flex justify-between mb-[-30px]">
            <div className="mt-[40px] pt-10  pl-10 flex-0.6">
              <div className="the_title transition duration-300 ease-in-out font-[Work] text-[80px] leading-[70px] text-white">
                {/* Title */}
                <h1 className="mb-4 tracking-wide">
                  <span className=" transition hover:border-b hover:border-[#08fdd8]  bg-transparent hover:shadow-[#08fdd8] hover:text-[#08fdd8] ease-in-out delay-150 hover:-translate-y-1 hover:text-[95px] duration-400 ">
                    H
                  </span>
                  <span className="letter_hover">i</span>,
                </h1>
                <h1 className="mb-4 tracking-wide">
                  <span className="letter_hover">I</span>'
                  <span className="letter_hover">m</span>{" "}
                  <span className="letter_hover">A</span>
                  <span className="letter_hover">2</span>
                </h1>
                <h1 className="mb-4 tracking-wide">
                  <span className="letter_hover">W</span>
                  <span className="letter_hover">e</span>
                  <span className="letter_hover">b</span>
                  <span> </span>
                  <span className="letter_hover">D</span>
                  <span className="letter_hover">e</span>
                  <span className="letter_hover">v</span>
                  <span className="letter_hover">e</span>
                  <span className="letter_hover">l</span>
                  <span className="letter_hover">o</span>
                  <span className="letter_hover">p</span>
                  <span className="letter_hover">e</span>
                  <span className="letter_hover">r</span>
                </h1>
              </div>
              <div className="mt-[30px] opacity-80  font-['sans-serif'] text-[20px] tracking-[1px] text-[#6e6e6e]">
                {/* Paragraph */}
                MERN Stack enthusiast
              </div>
            </div>
            <div className="flex-0.4">
              <Announces />
            </div>
          </div>

          <div className=" p-2 pl-10  text-[#46acd1] mb-[-105px] ">
            {/* Button */}
            <button className=" border border-[#46acd1] bg-transparent px-10 py-1 text-[18px] font-semibold leading-10 tracking-[4px]">
              <div className="flex items-center justify-between ">
                <p className="mr-2 font-bold">CV</p>
                <DownloadIcon />
              </div>
            </button>
          </div>
          <FrontAnimation />
          {/* <div>test</div> */}
        </div>
      </div>
    </>
  );
};

export default Front;
