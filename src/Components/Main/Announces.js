import React from "react";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
// date-fns
// or @mui/lab/Adapter{Dayjs,Luxon,Moment} or any valid date-io adapter
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";

const Announces = () => {
  return (
    <div className="pr-10 z-[10] ">
      <div className="bg-black shadow-md shadow-[#46acd1] rounded-[4px] border-[1px] border-white flex flex-col items-center">
        <img
          className="flex shadow-2xl mb-[-20px]"
          alt="loading..."
          src="https://media1.giphy.com/media/6LT7nbZXv4orPnjufH/giphy.gif?cid=ecf05e47xfqay1wtxd4hacf9fi9o2po9724j5xa8rn2jlbec&rid=giphy.gif&ct=g"
        />
        <p className="text-[60px] the_title text-red-500 shadow-2xl border-t-indigo-0  w-100 ">
          PFA!!
        </p>

        <div>
          <div className=" p-2 rounded-md shadow-2xl ">
            <p className="text-white font-bold">
              I am always on the look for <br /> a
              <span className="text-red-500 "> PFA</span> internship opportunity
            </p>
            <div class="relative mt-5 mb-2">
              <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                datepicker
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Select date"
                value="01/07/2022"
                disabled="disabled"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announces;
