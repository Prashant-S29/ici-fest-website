import React from "react";

import Marquee from 'react-double-marquee';

const Timeline = () => {

  return (
    <>
      <div
        style={{
          width: '100%',
          whiteSpace: 'nowrap',
        }}
        className="mt-[30px] md:mt-[50px] text-[20px] lg:text-[40px] font-black"
      >
        <Marquee 
          speed='0.08'
          direction="left"
        >

          <span>&nbsp; &nbsp;Timelines for FEST'<span className="text-[#ff583e]">23&nbsp;</span>are coming soon.&nbsp; &nbsp;</span>
          <span>&nbsp; &nbsp;Timelines for FEST'<span className="text-[#ff583e]">23&nbsp;</span>are coming soon.&nbsp; &nbsp;</span>
          <span>&nbsp; &nbsp;Timelines for FEST'<span className="text-[#ff583e]">23&nbsp;</span>are coming soon.&nbsp; &nbsp;</span>
          <span>&nbsp; &nbsp;Timelines for FEST'<span className="text-[#ff583e]">23&nbsp;</span>are coming soon.&nbsp; &nbsp;</span>
          <span>&nbsp; &nbsp;Timelines for FEST'<span className="text-[#ff583e]">23&nbsp;</span>are coming soon.&nbsp; &nbsp;</span>
          <span>&nbsp; &nbsp;Timelines for FEST'<span className="text-[#ff583e]">23&nbsp;</span>are coming soon.&nbsp; &nbsp;</span>
          <span>&nbsp; &nbsp;Timelines for FEST'<span className="text-[#ff583e]">23&nbsp;</span>are coming soon.&nbsp; &nbsp;</span>
        </Marquee>
      </div>
    </>
  )
}

export default Timeline