import React from "react";
import Video from "../assets/intro/intro_video_03.mp4";
import Button from "../component/button/button";

const Intro = ({ section }) => {
  return (
    <div id={section}>
      <div className=" h-[60vh] xl:h-[70vh] 2xl:h-[80vh] w-full hidden sm:flex">
        <div className="z-[99] w-[50vw] xl:w-[35vw] ml-[5vw] 2xl:ml-[12vw] mt-[20vh] text-[white]">
          <p className="text-[40px] lg:text-[50px] xl:text-2xl 2xl:text-3xl font-bold 2xl:font-black pb-[40px]">Elite Cleaning Services LLC</p>
          <p className="text-[18px]">Gutter Cleaning Service</p>
          <p className="text-[18px]">Opening at 8:00 AM</p>
          <a className="flex justify-center bg-[#0E3152] px-8 py-2 w-fit mt-[40px] cursor-pointer transition-all hover:shadow-xl" target="_blank" href="https://clienthub.getjobber.com/booking/f7f25b81-804e-4866-8bb8-a6b497538a22">
            <p className="text-[white] text-base">
              Make Appointment
            </p>
          </a>
        </div>
        <img
          src="/static/images/intro/banner.png"
          className="absolute z-[90] h-[60vh] xl:h-[70vh] 2xl:h-[80vh] object-cover"
        />
        <div className="z-[10] h-[60vh] xl:h-[70vh] 2xl:h-[80vh] absolute right-0">
          <video loop autoPlay muted playsInline className=" h-[60vh] xl:h-[70vh] 2xl:h-[80vh]">
            <source src={Video} type="video/mp4" id="myVideo" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="h-[90vh] w-full block sm:hidden">
        <div className="z-[99] mt-[100px] text-[white] absolute px-[5vw]">
          <p className="text-[40px] font-bold 2xl:font-black pb-[20px]">Elite Cleaning Services LLC</p>
          <p className="text-[18px]">Gutter Cleaning Service</p>
          <p className="text-[18px]">Opening at 8:00 AM</p>
          <a className="flex justify-center bg-[#0E3152] px-8 py-2 w-fit mt-[20px]" target="_blank" href="https://clienthub.getjobber.com/booking/f7f25b81-804e-4866-8bb8-a6b497538a22">
            <p className="text-[white] text-base">
              Make Appointment
            </p>
          </a>
        </div>
        <img
          src="/static/images/intro/mobile_banner.png"
          className="absolute z-[90] w-[100vw] object-contain"
        />
        <div className="z-[10] absolute top-[55vw]">
          <video loop autoPlay muted playsInline className="h-[70vh] object-cover">
            <source src={Video} type="video/mp4" id="myVideo" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Intro;
