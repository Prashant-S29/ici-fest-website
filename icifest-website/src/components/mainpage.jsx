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
      
      <div className="px-[20px] xl:px-[60px] mt-[160px] md:mt-[60px]">
        <About />
        <Timeline />
      </div>
    </>
  )
}

export default Mainpage