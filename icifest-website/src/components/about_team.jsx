import React from "react";


import { img103, img102, img104, scroll_down, team1, team2, team3, team4, tech3, tech2 } from "../assets";

const AboutTeam = () => {

    // const [isHovered, setIsHovered] = useState(false);

    // const handleHover = () => {
    //     setIsHovered(!isHovered);
    // };

    return (
        <>


            <div className="flex justify-start items-center ">
                <div className=" w-full  overflow-hidden bg-cover bg-center" >
                    <img src={img102} className="w-full hidden md:block" />
                    <img src={img104} className=" w-full h-[82vh] block md:hidden " />
                </div>
                <div className="absolute w-full text-center" >
                    <div>
                        <span className=" font-extrabold text-[30px] sm:text-[50px] lg:text-[80px] text-white" >ABOUT SKIT</span>
                    </div>
                    <div className="flex justify-center" ><div className="w-[150px] sm:w-[250px] h-[5px] bg-[#ff583e] " /></div>
                    <div className=" max-[320px]:mx-[20px] mx-[40px] lg:mx-[80px]  xl:mx-[210px]  bg-[#fff6]  max-[320px]:p-[10px] p-[20px] lg:p-[30px] rounded-[20px] 
                     backdrop-blur-[5px] mt-[20px] max:-[320px]:leading-[18px] leading-normal ">
                        <span className="text-black font-bold  max-[320px]:text-[12px]  text-[14px] sm:text-[12px] lg:text-[16px] xl:text-[18px] ">Swami Keshvanand Institute of Technology, Management & Gramothan (SKIT), inspired from the learnings of Swami Keshvanand, was established in the year 2000 by Technocrats and Managers Society for Advanced Learning and Gramothan. Today the institute is recognized as one of the centres of academic excellence in Northern India. Located in the Pink City Jaipur, which is a blend of traditional history and modern outlook, SKIT is putting in efforts for making industry ready engineers and managers through effective Industry-Institute Interface.</span>
                    </div>
                    <div className="flex justify-center mt-[15px] animate-bounce  md:hidden"><img src={scroll_down} className="w-[20px] " /></div>

                </div>
            </div>
            <div>
                <div className="text-center mt-[30px]"><span className="font-semibold uppercase text-[14px]" >
                    Meet The Team</span></div>
                <div className="text-center font-extrabold text-[36px] "><span>Working
                    <span className="text-[#ff583e]"> Team</span></span></div>
                <div className="flex flex-wrap justify-center  md:gap-8  lg:justify-center xl:justify-evenly  mt-[30px] ">
                    <div className=" overflow-hidden team-photo  rounded-[20px]">
                        <div className="w-[250px] h-[300px] bg-[#c7c7c7] z-10 overflow-hidden ">
                            <img src={team3} className=" w-full   " />
                        </div>
                        <div className="p-[10px] text-center">
                            <div><span className="font-semibold " >Kunal Sharma</span></div>
                            <div><span className="text-[14px]" >4<sup>th </sup>year CE</span></div>
                        </div>
                    </div>
                    <div className="mt-[25px] md:mt-0 overflow-hidden team-photo  rounded-[20px]">
                        <div className="w-[250px] h-[300px] overflow-hidden bg-[#c7c7c7] z-10  ">
                            <img src={team4} className=" w-full   " />
                        </div>
                        <div className="p-[10px] text-center ">
                            <div><span className="font-semibold " >Vishal Bansiwal</span></div>
                            <div><span className="text-[14px]" >4<sup>th </sup>year CE</span></div>
                        </div>
                    </div>
                    <div className="mt-[25px] md:mt-0 overflow-hidden team-photo   rounded-[20px]">
                        <div className="w-[250px] h-[300px] overflow-hidden bg-[#c7c7c7] z-10  ">
                            <img src={team2} className=" w-full   " />
                        </div>
                        <div className="p-[10px] text-center">
                            <div><span className="font-semibold " >Rohit Lamba</span></div>
                            <div><span className="text-[14px]" >4<sup>th </sup>year CE</span></div>
                        </div>
                    </div>
                    <div className="mt-[25px] md:mt-0 overflow-hidden team-photo  rounded-[20px]">
                        <div className="w-[250px] h-[300px] overflow-hidden bg-[#c7c7c7] z-10  ">
                            <img src={team1} className=" w-full   " />
                        </div>
                        <div className="p-[10px] text-center">
                            <div><span className="font-semibold " >Kritika Meena</span></div>
                            <div><span className="text-[14px]" >4<sup>th </sup>year CE</span></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-[70px]">
                <div className="text-center font-extrabold text-[36px] "><span>Technical
                    <span className="text-[#ff583e]"> Team</span></span></div>
                <div className="flex flex-wrap sm:gap-0 md:gap-8 lg:gap-0 justify-center lg:justify-evenly mt-[40px] ">
                    <div className=" overflow-hidden team-photo  rounded-[20px]">
                        <div className="w-[250px] h-[300px] bg-[#c7c7c7] z-10 overflow-hidden ">
                            <img src={team3} className=" w-full   " />
                        </div>
                        <div className="p-[10px] text-center">
                            <div><span className="font-semibold " >Kunal Sharma</span></div>
                            <div><span className="text-[14px]" >4<sup>th </sup>year CE</span></div>
                        </div>
                    </div>
                    <div className="mt-[25px] md:mt-0 overflow-hidden team-photo   rounded-[20px]">
                        <div className="w-[250px] h-[300px] overflow-hidden bg-[#c7c7c7] z-10 ">
                            <img src={tech2} className=" w-full   " />
                        </div>
                        <div className="p-[10px] text-center">
                            <div><span className="font-semibold " >Kanishk Bhardwaj</span></div>
                            <div><span className="text-[14px]" >3<sup>rd </sup>year CE</span></div>
                        </div>
                    </div>
                    <div className="mt-[25px] md:mt-0 overflow-hidden team-photo  rounded-[20px]">
                        <div className="w-[250px] h-[300px] overflow-hidden bg-[#c7c7c7] z-10  ">
                            <img src={tech3} className=" w-full   " />
                        </div>
                        <div className="p-[10px] text-center">
                            <div><span className="font-semibold " >Prashant Singh</span></div>
                            <div><span className="text-[14px]" >2<sup>nd </sup>year IOT</span></div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default AboutTeam