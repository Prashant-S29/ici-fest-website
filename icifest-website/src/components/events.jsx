import React from "react";

import { Link } from "react-router-dom";

import { jw, ba, cw, bob, th, workshop, cementpottery, ctc, tower_1, quake_img, pot_img, essay_img, inno_img, mud_img, brush_img } from "../assets";

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
          <div className="text-center -mt-[40px] rounded-b-[40px] py-[10px] bg-black"><span className="text-white font-semibold hover:text-[#ff583e] duration-200"><Link to='/joist-kwik' >Register Now</Link></span></div>
        </div>

        <div className="hover:scale-105 duration-200 max-[320px]:w-[290px]">
          <div className="flex justify-center items-center ">
            <div className="-z-10 overflow-hidden"><img src={ba} className="rounded-[30px] " /></div>
            <div className="absolute" ><span className="font-extrabold text-white md:text-[32px] text-[28px] uppercase
            tracking-wide">Bowling Alley</span></div>
          </div>
          <div className="text-center -mt-[40px] rounded-b-[40px] py-[10px] bg-black"><span className="text-white font-semibold hover:text-[#ff583e] duration-200"><Link to='/bolwing-alley' >Register Now</Link></span></div>
        </div>

        <div className="hover:scale-105 duration-200 max-[320px]:w-[290px]">
          <div className="flex justify-center items-center ">
            <div className="-z-10 overflow-hidden"><img src={bob} className="rounded-[30px] " /></div>
            <div className="absolute" ><span className="font-extrabold text-white text-[28px] md:text-[32px] uppercase
            tracking-wide">Brick-O-Brick</span></div>
          </div>
          <div className="text-center -mt-[40px] rounded-b-[40px] py-[10px] bg-black"><span className="text-white font-semibold hover:text-[#ff583e] duration-200"><Link to='/brick-o-brick' >Register Now</Link></span></div>
        </div>

        <div className="hover:scale-105 duration-200 max-[320px]:w-[290px]">
          <div className="flex justify-center items-center ">
            <div className="-z-10 overflow-hidden"><img src={cementpottery} className="rounded-[30px] " /></div>
            <div className="absolute text-center" ><span className="font-extrabold text-white text-[28px] md:text-[32px] uppercase
            tracking-wide">Toogle</span></div>
          </div>
          <div className="text-center -mt-[40px] rounded-b-[40px] py-[10px] bg-black"><span className="text-white font-semibold hover:text-[#ff583e] duration-200"><Link to='/toogle' >Register Now</Link></span></div>
        </div>

        <div className="hover:scale-105 duration-200 max-[320px]:w-[290px]">
          <div className="flex justify-center items-center ">
            <div className="-z-10 overflow-hidden"><img src={cw} className="rounded-[30px] " /></div>
            <div className="absolute text-center " ><span className="font-extrabold text-white text-[28px] md:text-[32px] uppercase
            tracking-wide">Cyclothon & <br />Walkathon</span></div>
          </div>
          <div className="text-center -mt-[40px] rounded-b-[40px] py-[10px] bg-black"><span className="text-white font-semibold hover:text-[#ff583e] duration-200"><Link to='/cyclothon-walkathon' >Register Now</Link></span></div>
        </div>

        <div className="hover:scale-105 duration-200 max-[320px]:w-[290px]">
          <div className="flex justify-center items-center ">
            <div className="-z-10 overflow-hidden"><img src={workshop} className="rounded-[30px] " /></div>
            <div className="absolute text-center" ><span className="font-extrabold text-white text-[28px] md:text-[32px] uppercase
            tracking-wide">Workshop</span></div>
          </div>
          <div className="text-center -mt-[40px] rounded-b-[40px] py-[10px] bg-black"><span className="text-white font-semibold hover:text-[#ff583e] duration-200"><Link to='/cement-workshop' >Register Now</Link></span></div>
        </div>

        <div className="hover:scale-105 duration-200 max-[320px]:w-[290px]">
          <div className="flex justify-center items-center ">
            <div className="-z-10 overflow-hidden"><img src={th} className="rounded-[30px] " /></div>
            <div className="absolute text-center" ><span className="font-extrabold text-white text-[28px] md:text-[32px] uppercase
            tracking-wide">Scavenger <br />Hunt</span></div>
          </div>
          <div className="text-center -mt-[40px] rounded-b-[40px] py-[10px] bg-black"><span className="text-white font-semibold hover:text-[#ff583e] duration-200"><Link to='/scanvenger-hunt' >Register Now</Link></span></div>
        </div>

        <div className="hover:scale-105 duration-200 max-[320px]:w-[290px]">
          <div className="flex justify-center items-center ">
            <div className="-z-10 overflow-hidden"><img src={tower_1} className="rounded-[30px] " /></div>
            <div className="absolute text-center" ><span className="font-extrabold text-white text-[28px] md:text-[32px] uppercase
            tracking-wide">Tower Craft</span></div>
          </div>
          <div className="text-center -mt-[40px] rounded-b-[40px] py-[10px] bg-black"><span className="text-white font-semibold hover:text-[#ff583e] duration-200"><Link to='/tower-craft ' >Register Now</Link></span></div>
        </div>

        <div className="hover:scale-105 duration-200 max-[320px]:w-[290px]">
          <div className="flex justify-center items-center ">
            <div className="-z-10 overflow-hidden"><img src={quake_img} className="rounded-[30px] " /></div>
            <div className="absolute text-center" ><span className="font-extrabold text-white text-[28px] md:text-[32px] uppercase
            tracking-wide">Quake Proof</span></div>
          </div>
          <div className="text-center -mt-[40px] rounded-b-[40px] py-[10px] bg-black"><span className="text-white font-semibold hover:text-[#ff583e] duration-200"><Link to='/quakeproof ' >Register Now</Link></span></div>
        </div>

        <div className="hover:scale-105 duration-200 max-[320px]:w-[290px]">
          <div className="flex justify-center items-center ">
            <div className="-z-10 overflow-hidden"><img src={pot_img} className="rounded-[30px] " /></div>
            <div className="absolute text-center" ><span className="font-extrabold text-white text-[28px] md:text-[32px] uppercase
            tracking-wide">Mix and Mould</span></div>
          </div>
          <div className="text-center -mt-[40px] rounded-b-[40px] py-[10px] bg-black"><span className="text-white font-semibold hover:text-[#ff583e] duration-200"><Link to='/mix-and-mould ' >Register Now</Link></span></div>
        </div>

        <div className="hover:scale-105 duration-200 max-[320px]:w-[290px]">
          <div className="flex justify-center items-center ">
            <div className="-z-10 overflow-hidden"><img src={essay_img} className="rounded-[30px] " /></div>
            <div className="absolute text-center" ><span className="font-extrabold text-white text-[28px] md:text-[32px] uppercase
            tracking-wide">Art of <br/>Persuasion</span></div>
          </div>
          <div className="text-center -mt-[40px] rounded-b-[40px] py-[10px] bg-black"><span className="text-white font-semibold hover:text-[#ff583e] duration-200"><Link to='/art-of-persuasion ' >Register Now</Link></span></div>
        </div>
        
        <div className="hover:scale-105 duration-200 max-[320px]:w-[290px]">
          <div className="flex justify-center items-center ">
            <div className="-z-10 overflow-hidden"><img src={inno_img} className="rounded-[30px] " /></div>
            <div className="absolute text-center" ><span className="font-extrabold text-white text-[28px] md:text-[32px] uppercase
            tracking-wide">Innostruct</span></div>
          </div>
          <div className="text-center -mt-[40px] rounded-b-[40px] py-[10px] bg-black"><span className="text-white font-semibold hover:text-[#ff583e] duration-200"><Link to='/innostruct ' >Register Now</Link></span></div>
        </div>

        <div className="hover:scale-105 duration-200 max-[320px]:w-[290px]">
          <div className="flex justify-center items-center ">
            <div className="-z-10 overflow-hidden"><img src={ctc} className="rounded-[30px] " /></div>
            <div className="absolute text-center" ><span className="font-extrabold text-white text-[28px] md:text-[32px] uppercase
            tracking-wide">Crack the Cad</span></div>
          </div>
          <div className="text-center -mt-[40px] rounded-b-[40px] py-[10px] bg-black"><span className="text-white font-semibold hover:text-[#ff583e] duration-200"><Link to='/crack-the-cad ' >Register Now</Link></span></div>
        </div>

        <div className="hover:scale-105 duration-200 max-[320px]:w-[290px]">
          <div className="flex justify-center items-center ">
            <div className="-z-10 overflow-hidden"><img src={mud_img} className="rounded-[30px] " /></div>
            <div className="absolute text-center" ><span className="font-extrabold text-white text-[28px] md:text-[32px] uppercase
            tracking-wide">The Mudventure</span></div>
          </div>
          <div className="text-center -mt-[40px] rounded-b-[40px] py-[10px] bg-black"><span className="text-white font-semibold hover:text-[#ff583e] duration-200"><Link to='/the-mud-adventure ' >Register Now</Link></span></div>
        </div>

        <div className="hover:scale-105 duration-200 max-[320px]:w-[290px]">
          <div className="flex justify-center items-center ">
            <div className="-z-10 overflow-hidden"><img src={brush_img} className="rounded-[30px] " /></div>
            <div className="absolute text-center" ><span className="font-extrabold text-white text-[28px] md:text-[32px] uppercase
            tracking-wide">Let the brush <br/>talk</span></div>
          </div>
          <div className="text-center -mt-[40px] rounded-b-[40px] py-[10px] bg-black"><span className="text-white font-semibold hover:text-[#ff583e] duration-200"><Link to='/let-the-brush-talk ' >Register Now</Link></span></div>
        </div>

      </div>
      {/* <div className="text-center mt-[20px]"><span className="font-extrabold text-[30px]" >MORE COMING
       <span className="text-[#ff583e]"> SOON</span></span></div> */}

    </>
  )
}

export default FestEvent