import React, { useRef } from "react";
import Map, { Marker } from "react-map-gl";
import emailjs from "emailjs-com";
import { Fade } from "react-awesome-reveal";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_frkbuul",
        "template_d0qftks",
        form.current,
        "user_W2SEM0j2uJIDKJQPvvSPT"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="bg-[#1d1d1d] flex flex-col overflow-y-hidden   overflow-x-hidden relative  snap-start ">
      <div className=" flex ExpandContact h-[100vh] justify-between ContactPage ">
        <div className=" flex flex-[0.5] flex-col contactForm">
          <div className="] py-[30px] contact">
            <div>
              <Fade>
                <h1 className="text-[73px]  title text-center leading-[75px] mt-[5px] text-[#46acd1] the_title">
                  Contact me
                </h1>
              </Fade>
            </div>
            <div className="px-[90px]  mt-[40px]">
              <Fade>
                <p className="text-[white] text-[17px] hover:underline font-sans">
                  I’m interested in freelance opportunities – especially
                  ambitious or large projects. However, if you have other
                  request or question, don’t hesitate to use the form.
                </p>
              </Fade>
            </div>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex text-[17px]  flex-col px-[90px] text-[#c9bfbf] mt-[20px] "
            >
              <div className="flex ">
                <input
                  type="text"
                  className="flex-[0.5] font-semibold text-[18px] placeholder-[#706d6d]  bg-[#2b2b2b] px-[17px] w-[100%] h-[60px] mt-[10px] "
                  placeholder="Name"
                  name="from_name"
                />
                <input
                  placeholder="Email"
                  type="email"
                  className="flex-[0.5]  font-semibold   text-[18px] placeholder-[#706d6d]  bg-[#2b2b2b] ml-[10px] px-[17px] w-[100%] h-[60px] mt-[10px]"
                  name="from_email"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="bg-[#2b2b2b]  font-semibold   text-[18px] placeholder-[#706d6d]  px-[17px] w-[100%] h-[60px] mt-[10px]"
                name="Subject"
              />
              <textarea
                placeholder="Message"
                className="bg-[#2b2b2b]  font-semibold   text-[18px] placeholder-[#706d6d]  p-[17px] mt-[10px]"
                rows="4"
                cols="50"
                name="message"
              ></textarea>

              <div className="w-[100%] flex justify-end items-end mt-[20px] ">
                <button
                  type="submit"
                  className="hover:bg-[#46acd1] text-[#46acd1]  hover:text-[#1d1d1d] hover:shadow-black   transition duration-300 ease-in-out border-2 items-end shadow-md shadow-[#46acd1]  border-[#46acd1] bg-transparent px-10 py-1 text-[18px] font-semibold leading-10 tracking-[4px]"
                >
                  <Fade>
                    <div className="flex items-center  justify-between px-4 w-[100px] ">
                      <p className="mr-2 font-bold   ">Send </p>
                    </div>
                  </Fade>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className=" relative flex-[0.5] Map pointer-events-none ">
          <Map
            initialViewState={{
              longitude: -5.364421,
              latitude: 35.56246,
              zoom: 14,
            }}
            style={{ width: "100%", height: "100%" }}
            mapStyle="mapbox://styles/a2dev/cl0hbvkb8001814nsbxi9ts9c"
            mapboxAccessToken="pk.eyJ1IjoiYTJkZXYiLCJhIjoiY2wwYmp0amtrMHdnMDNpbGd5cXlmY3I2NiJ9.iwX0tU5YM1PIv4fw9jTz3Q"
          >
            <div className="marker">
              <Marker
                latitude="35.58477"
                longitude="-5.353091"
                offsetTop={-20}
                offsetLeft={-7}
              >
                <p className="animations3 marker ">📍</p>
              </Marker>
            </div>
          </Map>
        </div>
        <div className=" relative hidden Map pointer-events-none ">
          <Map
            initialViewState={{
              longitude: -5.364421,
              latitude: 35.56246,
              zoom: 10,
            }}
            style={{ width: "100%", height: "100%" }}
            mapStyle="mapbox://styles/a2dev/cl0hbvkb8001814nsbxi9ts9c"
            mapboxAccessToken="pk.eyJ1IjoiYTJkZXYiLCJhIjoiY2wwYmp0amtrMHdnMDNpbGd5cXlmY3I2NiJ9.iwX0tU5YM1PIv4fw9jTz3Q"
          ></Map>
        </div>
      </div>
    </div>
  );
};

export default Contact;
