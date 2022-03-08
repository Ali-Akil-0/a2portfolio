import React from "react";
import Map, { Marker } from "react-map-gl";
import getCenter from "geolib/es/getCenter";

const Contact = () => {
  return (
    <div className="bg-[#1d1d1d] flex flex-col overflow-y-hidden   overflow-x-hidden relative  snap-start ">
      <div className=" flex  h-[100vh] justify-between ">
        <div className=" flex flex-[0.5] flex-col">
          <div className="] py-[40px]">
            <div>
              <h1 className="text-[73px] text-center leading-[75px] mt-[30px] text-[#46acd1] the_title">
                Contact me
              </h1>
            </div>
            <div className="px-[90px] mt-[50px]">
              <p className="text-[white] text-[17px] hover:underline font-sans">
                I’m interested in freelance opportunities – especially ambitious
                or large projects. However, if you have other request or
                question, don’t hesitate to use the form.
              </p>
            </div>
            <form className="flex  flex-col px-[90px] text-[#868080] mt-[30px] ">
              <div className="flex ">
                <input
                  type="text"
                  className="flex-[0.5] font-semibold text-[18px] placeholder-[#706d6d]  bg-[#2b2b2b] px-[17px] w-[100%] h-[60px] mt-[10px] "
                  placeholder="Name"
                />
                <input
                  placeholder="Email"
                  type="email"
                  className="flex-[0.5]  font-semibold   text-[18px] placeholder-[#706d6d]  bg-[#2b2b2b] ml-[10px] px-[17px] w-[100%] h-[60px] mt-[10px]"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="bg-[#2b2b2b]  font-semibold   text-[18px] placeholder-[#706d6d]  px-[17px] w-[100%] h-[60px] mt-[10px]"
              />
              <textarea
                placeholder="Message"
                className="bg-[#2b2b2b]  font-semibold   text-[18px] placeholder-[#706d6d]  p-[17px] mt-[10px]"
                rows="4"
                cols="50"
              ></textarea>
            </form>
            <div className="w-[100%] flex justify-end items-end mt-[20px] ">
              <button className=" border-2 items-end mr-[90px]  shadow-md shadow-[#46acd1]  border-[#46acd1] bg-transparent px-10 py-1 text-[18px] font-semibold leading-10 tracking-[4px]">
                <div className="flex items-center  justify-between px-4 w-[100px] ">
                  <p className="mr-2 font-bold text-[#46acd1]">Send </p>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className=" relative flex-[0.5]">
          <Map
            initialViewState={{
              longitude: -5.364421,
              latitude: 35.56246,
              zoom: 20,
            }}
            style={{ width: "100%", height: "100%" }}
            mapStyle="mapbox://styles/a2dev/cl0hbvkb8001814nsbxi9ts9c"
            mapboxAccessToken="pk.eyJ1IjoiYTJkZXYiLCJhIjoiY2wwYmp0amtrMHdnMDNpbGd5cXlmY3I2NiJ9.iwX0tU5YM1PIv4fw9jTz3Q"
          >
            <Marker
              latitude="35.56246"
              longitude="-5.364421"
              className="mt-[-2rem]"
              offsetTop={-20}
              offsetLeft={-7}
            >
              📍
            </Marker>
          </Map>
        </div>
      </div>
    </div>
  );
};

export default Contact;
