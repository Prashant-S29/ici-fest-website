import React from "react";

import { Link } from "react-router-dom";

import { jw, ba, cw, bob, th, workshop, cementpottery, civilwar } from "../assets";

const FestEvent = () => {
  return (
    <>
      <div className="text-center mb-[20px] md:mb-[40px] mt-[40px]"><span className="text-[26px] md:text-[30px] font-extrabold">
        FEST'<span className="text-[#ff583e]">23 </span>EVENTS</span></div>

      <div className="flex flex-wrap justify-center gap-8">

        <div className="hover:scale-105 duration-200 max-[320px]:w-[290px]">
          <div className="flex justify-center items-center ">
            <div className="-z-10 overflow-hidden"><img src={jw} className="rounded-[30px] " /></div>
            <div className="absolute" ><span className="font-extrabold text-white md:text-[32px] text-[28px] uppercase
             tracking-wide ">JOIST KWIK</span></div>
          </div>
          {/* <div className="text-center -mt-[40px] rounded-b-[40px] py-[10px] bg-black"><span className="text-white font-semibold hover:text-[#ff583e] duration-200"><Link to='/joist-kwik' >Resigter Now</Link></span></div> */}
        </div>

        <div className="hover:scale-105 duration-200 max-[320px]:w-[290px]">
          <div className="flex justify-center items-center ">
            <div className="-z-10 overflow-hidden"><img src={ba} className="rounded-[30px] " /></div>
            <div className="absolute" ><span className="font-extrabold text-white md:text-[32px] text-[28px] uppercase
            tracking-wide">Bowling Alley</span></div>
          </div>
          {/* <div className="text-center -mt-[40px] rounded-b-[40px] py-[10px] bg-black"><span className="text-white font-semibold hover:text-[#ff583e] duration-200"><Link to='/bolwing-alley' >Resigter Now</Link></span></div> */}
        </div>

        <div className="hover:scale-105 duration-200 max-[320px]:w-[290px]">
          <div className="flex justify-center items-center ">
            <div className="-z-10 overflow-hidden"><img src={bob} className="rounded-[30px] " /></div>
            <div className="absolute" ><span className="font-extrabold text-white text-[28px] md:text-[32px] uppercase
            tracking-wide">Brick-O-Brick</span></div>
          </div>
          {/* <div className="text-center -mt-[40px] rounded-b-[40px] py-[10px] bg-black"><span className="text-white font-semibold hover:text-[#ff583e] duration-200"><Link to='/brick-o-brick' >Resigter Now</Link></span></div> */}
        </div>

        <div className="hover:scale-105 duration-200 max-[320px]:w-[290px]">
          <div className="flex justify-center items-center ">
            <div className="-z-10 overflow-hidden"><img src={cementpottery} className="rounded-[30px] " /></div>
            <div className="absolute text-center" ><span className="font-extrabold text-white text-[28px] md:text-[32px] uppercase
            tracking-wide">Cement Pottery</span></div>
          </div>
          {/* <div className="text-center -mt-[40px] rounded-b-[40px] py-[10px] bg-black"><span className="text-white font-semibold hover:text-[#ff583e] duration-200"><Link to='/scanvenger-hunt' >Resigter Now</Link></span></div> */}
        </div>

        <div className="hover:scale-105 duration-200 max-[320px]:w-[290px]">
          <div className="flex justify-center items-center ">
            <div className="-z-10 overflow-hidden"><img src={cw} className="rounded-[30px] " /></div>
            <div className="absolute text-center " ><span className="font-extrabold text-white text-[28px] md:text-[32px] uppercase
            tracking-wide">Cyclothon & <br />Walkathon</span></div>
          </div>
          {/* <div className="text-center -mt-[40px] rounded-b-[40px] py-[10px] bg-black"><span className="text-white font-semibold hover:text-[#ff583e] duration-200"><Link to='/cyclothon-walkathon' >Resigter Now</Link></span></div> */}
        </div>

        <div className="hover:scale-105 duration-200 max-[320px]:w-[290px]">
          <div className="flex justify-center items-center ">
            <div className="-z-10 overflow-hidden"><img src={workshop} className="rounded-[30px] " /></div>
            <div className="absolute text-center" ><span className="font-extrabold text-white text-[28px] md:text-[32px] uppercase
            tracking-wide">WORKSHOP</span></div>
          </div>
          {/* <div className="text-center -mt-[40px] rounded-b-[40px] py-[10px] bg-black"><span className="text-white font-semibold hover:text-[#ff583e] duration-200"><Link to='/scanvenger-hunt' >Resigter Now</Link></span></div> */}
        </div>

        <div className="hover:scale-105 duration-200 max-[320px]:w-[290px]">
          <div className="flex justify-center items-center ">
            <div className="-z-10 overflow-hidden"><img src={th} className="rounded-[30px] " /></div>
            <div className="absolute text-center" ><span className="font-extrabold text-white text-[28px] md:text-[32px] uppercase
            tracking-wide">Scavenger <br />Hunt</span></div>
          </div>
          {/* <div className="text-center -mt-[40px] rounded-b-[40px] py-[10px] bg-black"><span className="text-white font-semibold hover:text-[#ff583e] duration-200"><Link to='/scanvenger-hunt' >Resigter Now</Link></span></div> */}
        </div>

        <div className="hover:scale-105 duration-200 max-[320px]:w-[290px]">
          <div className="flex justify-center items-center ">
            <div className="-z-10 overflow-hidden"><img src={civilwar} className="rounded-[30px] " /></div>
            <div className="absolute text-center" ><span className="font-extrabold text-white text-[28px] md:text-[32px] uppercase
            tracking-wide">CIVIL WAR</span></div>
          </div>
          {/* <div className="text-center -mt-[40px] rounded-b-[40px] py-[10px] bg-black"><span className="text-white font-semibold hover:text-[#ff583e] duration-200"><Link to='/scanvenger-hunt' >Resigter Now</Link></span></div> */}
        </div>

      </div>
      {/* <div className="text-center mt-[20px]"><span className="font-extrabold text-[30px]" >MORE COMING
       <span className="text-[#ff583e]"> SOON</span></span></div> */}

    </>
  )
}

export default FestEvent