import React from "react";
import { useState, useEffect } from "react";
import LazyLoad from 'react-lazy-load';

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
        <LazyLoad height={window.outerHeight} offsetVertical={window.outerWidth}>
          <div className={`h-${window.outerHeight} w-${window.outerWidth}`}>

            <video autoPlay muted preload="metadata" src={bg_video_desktop} className="{-mt-[30px] lg:-mt-[60px] xl:-mt-[220px] h-full}" typeof="video/mp4" />
          </div>
        </LazyLoad>
        <div className="absolute mt-[200px]">
          <div className={`fade-in-out ${isOpaque ? 'opaque' : 'transparent'}`}>
            <span className="font-extrabold text-[14px] ">SCROLL DOWN</span>
            <div className="flex justify-center animate-bounce"><img src={scroll_down} className="mt-[15px] w-[15px]" /></div>
          </div>
        </div>
      </div>

      <div className=" w-full h-full bg-cover flex md:hidden  justify-center items-center">
        <LazyLoad height={window.outerHeight} offsetVertical={window.outerWidth}>
          <div className={`h-${window.outerHeight} w-${window.outerWidth}`}>

            <video autoPlay muted preload="metadata" src={bg_video_mobile} className="{-mt-[30px] lg:-mt-[60px] xl:-mt-[220px] h-full}" typeof="video/mp4" />
          </div>
        </LazyLoad>
        <div className="absolute mt-[150px] ">
          <div className={`fade-in-out ${isOpaque ? 'opaque' : 'transparent'}`}>
            <span className="font-extrabold text-[12px] ">SCROLL DOWN</span>
            <div className="flex justify-center animate-bounce"><img src={scroll_down} className="mt-[15px] w-[10px]" /></div>
          </div>
        </div>
      </div>
      <div className="px-[20px] xl:px-[80px] -mt-[180px]">
        <About />
        <Timeline />
      </div>
    </>
  )
}

export default Mainpage