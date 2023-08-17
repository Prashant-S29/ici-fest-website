import React from "react";
import { useState, useEffect } from "react";

import About from "./aboutus";
import Timeline from "./timeline";

import { bg_video_desktop, bg_video_mobile, scroll_down } from "../assets";

const Mainpage = () => {

  const [isOpaque, setIsOpaque] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpaque(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>

      <div className="w-full h-full  bg-cover hidden md:flex justify-center items-center ">
        <video autoPlay muted preload="auto" src={bg_video_desktop} className="-mt-[30px] lg:-mt-[60px] xl:-mt-[220px] h-full" typeof="video/mp4" />
        <div className="absolute mt-[200px]">
          <div className={`fade-in-out ${isOpaque ? 'opaque' : 'transparent'}`}>
            <span className="font-extrabold text-[14px] ">SCROLL DOWN</span>
            <div className="flex justify-center animate-bounce"><img src={scroll_down} className="mt-[15px] w-[15px]" /></div>
          </div>
        </div>
      </div>

      <div className=" w-full h-full bg-cover flex md:hidden  justify-center items-center">
        <video autoPlay muted preload="auto" src={bg_video_mobile} className="-mt-[100px] lg:-mt-[60px] xl:-mt-[220px] h-full" typeof="video/mp4" />
        <div className="absolute mt-[150px] ">
          <div className={`fade-in-out ${isOpaque ? 'opaque' : 'transparent'}`}>
            <span className="font-extrabold text-[12px] ">SCROLL DOWN</span>
            <div className="flex justify-center animate-bounce"><img src={scroll_down} className="mt-[15px] w-[10px]" /></div>
          </div>
        </div>
      </div>
      <div className="px-[20px] xl:px-[80px]">
        <About />
        <Timeline />
      </div>
    </>
  )
}

export default Mainpage