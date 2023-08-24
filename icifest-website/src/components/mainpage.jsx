import React from "react";
import { useState, useEffect } from "react";

import About from "./aboutus";
import Timeline from "./timeline";

import { bg_image1, scroll_down } from "../assets";
import { bg_image } from "../assets";




const Mainpage = () => {

  const [isOpaque, setIsOpaque] = useState(false);

  // const cld = new Cloudinary({cloud: {cloudName: 'ddnovmrg4'}});

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsOpaque(true);
  //   }, 5000);

  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <>
      <div className="flex justify-between items-end ">
        <img src={bg_image} className="w-full h-[80vh] hidden md:block " />
        <img src={bg_image1} className="w-full block md:hidden " />
      </div>
      <div className="-mt-[80px] hidden md:block">
        <div className="text-center"><span className="font-semibold text-[16px]" >Scroll Down</span></div>
        <div className="animate-bounce mt-[10px] flex justify-center "><img src={scroll_down} className="w-[20px]" /></div>
      </div>
      <div className="px-[20px] xl:px-[80px] mt-[160px] md:mt-[80px]">
        <About />
        <Timeline />
      </div>
    </>
  )
}

export default Mainpage