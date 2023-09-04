import React from "react";

import { img11, img12, img13, img14, img15, img16, img17, img18, img19, img20} from "../assets";
import Highlight from "./highlights";

import Counter from "./counter";

import { Link } from "react-router-dom";


const About = () => {

  const support_image = [
    {
      image: img13,
      w: "150px",
      h: "150px",
      w_mob:"120px",
      h_mob:"100px"
    },
    {
      image: img14,
      w: "150px",
      h: "150px",
      w_mob:"120px",
      h_mob:"100px"
    },
    {
      image: img15,
      w: "150px",
      h: "150px",
      w_mob:"100px",
      h_mob:"100px"
    },
    {
      image: img16,
      w: "120px",
      h: "120px",
      w_mob:"90px",
      h_mob:"90px"
    }
    ,
    {
      image: img18,
      w: "150px",
      h: "150px",
      w_mob:"100px",
      h_mob:"100px"
    },
    {
      image: img19,
      w: "150px",
      h: "150px",
      w_mob:"100px",
      h_mob:"100px"
    },
    {
      image: img20,
      w: "150px",
      h: "150px",
      w_mob:"120px",
      h_mob:"120px"
    }
  ]

  return (
    <>
      <div className="block xl:flex justify-left gap-[150px] -mt-[150px] md:mt-0">
        <div>
          <div>
            <div><span className="text-[30px] md:text-[36px] font-extrabold"><span className="text-[#ff583e]">ICI</span> FEST</span></div>
          </div>
          <div>
            <span className=" text-[14px] md:text-[18px]">ICI fest aims at aspiring the young brains to showcase their skills and compete with others by participating in various technical events and workshop. Register today to make yourself stand out among all odds.</span>
          </div>
          <div>
            <div className="mt-[10px]"><span className="font-bold text-[16px] md:text-[18px]">Dates for FEST'23</span></div>
            <div className="text-[14px] md:text-[16px]"><span>15<sup>th </sup>to 17<sup>th </sup>September 2023</span></div>
            <div className="mt-[10px]"><span className="font-bold text-[16px] md:text-[18px]">Venue</span></div>
            <div className="text-[14px] md:text-[16px]"><span>SKIT Campus, Ram Nagariya Rd, Jagatpura, Jaipur</span></div>
            <div className="flex mt-[20px] gap-3 md:gap-5">
              <div className="flex justify-center items-center bg-[#ff583e] text-white  hover:bg-white hover:text-[#ff583e] duration-300 hover:ring-1 ring-[#ff583e] px-[15px] md:px-[20px] py-[8px] md:py-[10px] text-[13px] md:text-[14px] rounded-[8px] w-fit font-semibold" ><button type="button" className="">
                <Link to='/registrations'>Register Now</Link>
              </button></div>
              <div className="flex justify-center items-center bg-white text-black px-[15px] md:px-[20px] py-[6px] md:py-[8px] text-[13px] md:text-[14px] rounded-[8px] w-fit font-bold border border-black" >
              <button type="button" className="w-full"><Link to="/events">Browse all events</Link></button></div>
            </div>
          </div>
        </div>
        <div className="max-[320px]:mt-[20px] mt-[50px] xl:mt-0 ">
          <div>
            <span className="text-[30px] md:text-[36px] font-extrabold">Highlights'<span className="text-[#ff583e]">22</span></span>
          </div>
          <Highlight />
          <div className=" mt-[22px] flex justify-center items-center bg-[#ff583e] text-white hover:bg-white hover:text-[#ff583e] duration-300 hover:ring-1 ring-[#ff583e] px-[15px] md:px-[22px] py-[6px] md:py-[10px] text-[13px] md:text-[14px] rounded-[8px] w-fit font-semibold" ><button type="button" className=""><a href="https://drive.google.com/drive/folders/1y3hMlWEWZzpL_iN8EpH9gIPhBKFBIDQ4?usp=sharing" target="blank">View All</a></button></div>
        </div>
      </div>

      <Counter/>

      <div className="block gap-[150px] lg:gap-[250px]">
        <div className="flex justify-center mt-[50px]" ><span className="text-[30px] md:text-[36px] font-extrabold">Prior Sponsors<span className="text-[#ff583e]">.</span></span></div>

        <div className="block md:flex justify-center gap-[150px] mt-[10px] md:mt-[50px]">
          <div className="">
            <div className=" flex justify-center"><span className="font-bold text-[16px] md:text-[18px]" >Title Sponsor</span></div>
            <div className="mt-0 md:mt-[10px] flex justify-center"><img src={img11} className="w-[200px] md:w-[280px] mt-[10px]" /></div>
          </div>

          <div className="mt-[25px] md:mt-0">
            <div className=" flex justify-center"><span className="font-bold text-[16px] md:text-[18px]" >Associate Sponsors</span></div>
            <div className="flex flex-wrap md:flex-nowrap  gap-2 md:gap-7 justify-center items-center">
              <div className="mt-[10px] flex justify-center"><img src={img12} className="w-[200px] h-[50px] md:w-[250px] md:h-[70px]" /></div>
              <div className="mt-0 md:mt-[10px] flex justify-center"><img src={img17} className="w-[260px] h-[80px] md:w-[300px] md:h-[90px]" /></div>
            </div>
          </div>
        </div>
      </div>

      <div className=" max-[320px]:mt-[10px] mt-[50px]">
        <div className=" flex justify-center mb-[20px] md:mb-[10px] "><span className="font-bold text-[16px] md:text-[18px]" >Supporters</span></div>


        <div className="hidden md:flex  flex-wrap gap-7 justify-center items-center">
          {support_image.map((img_info, index) => (
            <div className="flex justify-center"><img key={index} src={img_info.image} width={img_info.w} height={img_info.h} alt={index} className="mt-[10px] md:mt-0" /></div>
          ))}
        </div>
        <div className="flex md:hidden  flex-wrap gap-7 justify-center items-center">
          {support_image.map((img_info, index) => (
            <div className="flex justify-center"><img key={index} src={img_info.image} width={img_info.w_mob} height={img_info.h_mob} alt={index} className="mt-[10px] md:mt-0" /></div>
          ))}
        </div>


      </div>

    </>
  )
}

export default About