import React from "react";
import { useState, useEffect } from "react";
import LazyLoad from 'react-lazy-load';

import About from "./aboutus";
import Timeline from "./timeline";

import {Cloudinary} from "@cloudinary/url-gen";

import { bg_video_desktop, bg_video_mobile, scroll_down } from "../assets";
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
      <div>
        <img src={bg_image} className="w-full h-[80vh]"/>
      </div>
      <div className="px-[20px] xl:px-[80px]">
        <About />
        <Timeline />
      </div>
    </>
  )
}

export default Mainpage