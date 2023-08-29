import React from "react";

import { Link } from "react-router-dom";
import { img102, img104, team1, team2, team3, team4, tech1, tech3, tech2, one, two, three, four } from "../assets";


const AboutTeam = () => {
    return (
        <>
            <div className="flex justify-center items-center">

                <div className="-z-50 ">
                    <div className="w-full  h-full overflow-hidden hidden md:block">
                        <div className="w-[150px] aspect-square absolute -bottom-[180%] about_box -z-50 bg-[#ff583e4f]" />
                        <div className="w-[80px] aspect-square absolute -bottom-[150%] about_box -z-50 bg-[#ff583e4f] hidden xl:block left-[1300px]" />
                        <div className="w-[100px] box1 aspect-square absolute -bottom-[250%] about_box -z-50 bg-[#ff583e4f]
                    left-[500px] " />
                        <div className="w-[250px] box1  aspect-square absolute -bottom-[300%] about_box -z-50 bg-[#ff583e4f]
                    left-[1000px] hidden xl:block" />
                        <div className="w-[60px]   aspect-square absolute -bottom-[300%] about_box -z-50 bg-[#ff583e4f]
                    left-[800px] hidden lg:block" />
                        <div className="w-[30px] box2   aspect-square absolute -bottom-[10%] about_box -z-50 bg-[#ff583e4f]
                    left-[500px]" />
                        <div className="w-[150px] aspect-square absolute -bottom-[300%] about_box -z-50 box3 bg-[#ff583e4f]" />
                        <div className="w-[80px] aspect-square absolute -bottom-[200%] about_box -z-50 box3 bg-[#ff583e4f] hidden xl:block left-[1300px]" />
                        <div className="w-[100px]  aspect-square absolute -bottom-[300%] about_box -z-50 box3 bg-[#ff583e4f]
                    left-[500px] " />
                        <div className="w-[250px]   aspect-square absolute -bottom-[200%] about_box -z-50 box3 bg-[#ff583e4f] left-[250px] hidden xl:block" />
                        <div className="w-[80px]    aspect-square absolute -bottom-[250%] about_box -z-50 box3 bg-[#ff583e4f] left-[800px] hidden lg:block" />
                        <div className="w-[30px] box2   aspect-square absolute -bottom-[300%] about_box -z-50 box3 bg-[#ff583e4f]
                    left-[500px]" />
                    </div>

                    <div className="w-full -z-10 h-full overflow-hidden block md:hidden">
                        <div className="w-[40px] aspect-square absolute -bottom-[400%] about_box bg-[#ff583e4f]" />
                        <div className="w-[80px] aspect-square absolute -bottom-[300%] about_box bg-[#ff583e4f]  left-[65%]" />
                        <div className="w-[60px]  box3 aspect-square absolute -bottom-[600%] about_box bg-[#ff583e4f]
                    left-[50%] " />
                        <div className="w-[80px]   aspect-square absolute -bottom-[100%] about_box bg-[#ff583e4f]
                    left-[40%] " />
                        <div className="w-[40px]  box3 aspect-square absolute -bottom-[500%] about_box bg-[#ff583e4f]
                    left-[10%] " />
                        <div className="w-[40px]   aspect-square absolute -bottom-[450%] about_box bg-[#ff583e4f]
                    left-[60%] " />
                        <div className="w-[20px]  aspect-square absolute -bottom-[500%] about_box bg-[#ff583e4f]
                    left-[30%] " />
                        <div className="w-[20px] box3 aspect-square absolute -bottom-[600%] about_box bg-[#ff583e4f]
                    left-[10%] " />
                        <div className="w-[40px]  aspect-square absolute -bottom-[200%] about_box bg-[#ff583e4f]
                    left-[20%] " />
                        <div className="w-[20px]  aspect-square absolute -bottom-[10%] about_box bg-[#ff583e4f]
                    left-[60%] " />
                    </div>
                </div>

                <div className="mt-[50px] md:mt-0">

                    <div className="h-[75vh] flex justify-center items-center">
                        <div>

                            <div className="text-center">
                                <span className=" font-extrabold text-[40px] sm:text-[50px] lg:text-[80px] " >
                                    ICI<span className="text-[#ff583e]"> FEST</span></span>
                            </div>
                            <div className="flex justify-center mb-[20px]">
                                <div className="w-[150px] sm:w-[200px] h-[5px] bg-[#ff583e] rounded-full" />
                            </div>
                            <div className=" text-center text-[14px] md:text-[16px] lg:text-[18px] font-semibold mx-[20px]  md:mx-[40px] lg:mx-[80px] max-[320px]:leading-[20px]   ">
                                <div>
                                    <span>The ICI Fest has a special mission: to inspire young minds to show off their skills and go up against others by joining different technical, non technical events and workshops. Don't wait - rigister today to make yourself really stand out, even when faced with challenges. This Fest is all about energetic and excited people coming together.

                                        When you register, you're taking a step towards an awesome chance. You'll get to be part of cool events and workshops that are all about technology. Plus, you can test your abilities and see how you do compared to others.

                                        Imagine being in a place where everyone is enthusiastic and ready to share their ideas. That's what this Fest is about - lots of people who are excited and full of energy.

                                        So why not be a part of it? Join now and get ready to shine bright among the rest.</span>
                                </div>
                                <div className="flex justify-center gap-[20px] mt-[20px] items-center">
                                    <div ><button className="bg-[#ff583e] hover:bg-white text-white hover:text-[#ff583e] duration-300 hover:ring-1 ring-[#ff583e] px-[18px] py-[9px] lg:pt-[11px] lg:pb-[11px] lg:pl-[20px] lg:pr-[20px] rounded-[8px] text-[12px] lg:text-[14px]  self-center">
                                        <Link to='/registrations'>Register Now</Link></button></div>
                                    <div><button className="bg-[#fff] ring-1 ring-black px-[19px] py-[8px] md:py-[9px]  
                        lg:py-[10px] lg:px-[18px] rounded-[8px] text-[12px] lg:text-[14px]  self-center">
                                        <Link to="/events">Browse all events</Link></button></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-[50px] md:mt-0">
                        <div className=" w-full text-center  ">
                            <div>
                                <span className=" font-extrabold text-[40px] sm:text-[50px] lg:text-[80px] ">
                                    ABOUT <span className="text-[#ff583e]">SKIT</span></span>
                            </div>
                            <div className="flex justify-center" ><div className="w-[150px] sm:w-[250px] h-[5px] bg-[#ff583e] rounded-full " /></div>
                            <div className=" max-[320px]:mx-[20px] mx-[40px] lg:mx-[80px]  xl:mx-[210px]
                               max-[320px]:p-[10px] p-[20px] lg:p-[30px] rounded-[20px] 
                       max:-[320px]:leading-[18px] leading-normal ">
                                <span className="text-black font-semibold  max-[320px]:text-[12px]  text-[14px] sm:text-[12px] lg:text-[16px] xl:text-[18px] ">Swami Keshvanand Institute of Technology, Management & Gramothan (SKIT), inspired from the learnings of Swami Keshvanand, was established in the year 2000 by Technocrats and Managers Society for Advanced Learning and Gramothan. Today the as one of the centres of academic excellence in Northern India. Located in the Pink City Jaipur, which is a blend of traditional history and modern outlook, SKIT is putting in efforts for making industry ready engineers and managers through effective Industry-Institute Interface.</span>
                            </div>

                        </div>
                    </div>

                    <div className="  ">
                        <div>
                            <div className="text-center mt-[20px]" ><span className="font-extrabold text-[40px] sm:text-[50px] lg:text-[80px]">JAIPUR</span></div>
                            <div className="flex justify-center " ><div className="h-[6px] w-[120px] rounded-full bg-[#ff583e]" /></div>
                            <div className="text-center mx-[20px] md:mx-[120px] mt-[30px]">
                                <span className="font-semibold  text-[14px] sm:text-[12px] lg:text-[16px] xl:text-[18px]">The Pink City, Jaipur is considered as the first "planned" city in
                                    the Common Era. Renowned globally for its coloured gems, the capital
                                    city of Rajasthan combines the allure of its ancient history of
                                    marvellous forts, magnificent temples and gorgeous palaces with all
                                    the advantages of a metropolis. Jaipur is a popular tourist
                                    destination in India and forms a part of the west Golden Triangle
                                    tourist circuit along with Delhi and Agra.</span>
                            </div>
                            <div className="flex flex-wrap justify-center xl:justify-evenly mt-[50px] gap-[10px] xl:gap-0">
                                <div>
                                    <div className="overflow-hidden rounded-[20px]"><img src={one} className="w-[280px] rounded-[20px] hover:scale-105 duration-[200ms]" /></div>
                                    <div className="text-center mt-[5px]"><span className="font-semibold">PATRIKA GATE</span></div>
                                </div>
                                <div>
                                    <div className="overflow-hidden rounded-[20px]"><img src={two} className="w-[280px] rounded-[20px] hover:scale-105 duration-[200ms]" /></div>
                                    <div className="text-center mt-[5px]"><span className="font-semibold">JAL MAHAL</span></div>
                                </div>
                                <div>
                                    <div className="overflow-hidden rounded-[20px]"><img src={three} className="w-[280px] rounded-[20px] hover:scale-105 duration-[200ms]" /></div>
                                    <div className="text-center mt-[5px]"><span className="font-semibold">HAWA MAHAL</span></div>
                                </div>
                                <div>
                                    <div className="overflow-hidden rounded-[20px]"><img src={four} className="w-[280px] rounded-[20px] hover:scale-105 duration-[200ms]" /></div>
                                    <div className="text-center mt-[5px]"><span className="font-semibold">JANTAR MANTAR</span></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <div className="text-center mt-[30px]"><span className="font-semibold uppercase text-[14px]" >
                            Meet The Team</span></div>
                        <div className="text-center font-extrabold text-[36px] "><span>Working
                            <span className="text-[#ff583e]"> Team</span></span></div>
                        <div className="flex flex-wrap justify-center  md:gap-8  lg:justify-center xl:justify-evenly  mt-[30px] ">
                            <div className=" overflow-hidden team-photo  rounded-[20px] ">
                                <div className="w-[250px] h-[300px] bg-[#c7c7c7]  overflow-hidden ">
                                    <img src={team3} className=" w-full   " />
                                </div>
                                <div className="p-[10px]  text-center">
                                    <div><span className="font-semibold " >Kunal Sharma</span></div>
                                    <div><span className="text-[14px]" >4<sup>th </sup>year CE</span></div>
                                </div>
                            </div>
                            <div className="mt-[25px] md:mt-0 overflow-hidden team-photo  rounded-[20px]">
                                <div className="w-[250px] h-[300px] overflow-hidden bg-[#c7c7c7]   ">
                                    <img src={team4} className=" w-full   " />
                                </div>
                                <div className="p-[10px]  text-center ">
                                    <div><span className="font-semibold " >Vishal Bansiwal</span></div>
                                    <div><span className="text-[14px]" >4<sup>th </sup>year CE</span></div>
                                </div>
                            </div>
                            <div className="mt-[25px] md:mt-0 overflow-hidden team-photo   rounded-[20px]">
                                <div className="w-[250px] h-[300px] overflow-hidden bg-[#c7c7c7]   ">
                                    <img src={team2} className=" w-full   " />
                                </div>
                                <div className="p-[10px]  text-center ">
                                    <div><span className="font-semibold " >Rohit Lamba</span></div>
                                    <div><span className="text-[14px]" >4<sup>th </sup>year CE</span></div>
                                </div>
                            </div>
                            <div className="mt-[25px] md:mt-0 overflow-hidden team-photo  rounded-[20px]">
                                <div className="w-[250px] h-[300px] overflow-hidden bg-[#c7c7c7]   ">
                                    <img src={team1} className=" w-full   " />
                                </div>
                                <div className="p-[10px]  text-center">
                                    <div><span className="font-semibold " >Kritika Meena</span></div>
                                    <div><span className="text-[14px]" >4<sup>th </sup>year CE</span></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="mt-[70px] ">
                            <div className="text-center font-extrabold text-[36px] "><span>Technical
                                <span className="text-[#ff583e]"> Team</span></span></div>
                            <div className="flex flex-wrap sm:gap-0 md:gap-8 lg:gap-0 justify-center lg:justify-evenly mt-[40px] ">
                                <div className=" overflow-hidden team-photo  rounded-[20px]">
                                    <div className="w-[250px] h-[300px] bg-[#c7c7c7]  overflow-hidden ">
                                        <img src={tech1} className=" w-full   " />
                                    </div>
                                    <div className="p-[10px]  text-center">
                                        <div><span className="font-semibold " >Hardik Sharma</span></div>
                                        <div><span className="text-[14px]" >4<sup>th </sup>year CE</span></div>
                                    </div>
                                </div>
                                <div className="mt-[25px] md:mt-0 overflow-hidden team-photo   rounded-[20px]">
                                    <div className="w-[250px] h-[300px] overflow-hidden bg-[#c7c7c7]  ">
                                        <img src={tech2} className=" w-full   " />
                                    </div>
                                    <div className="p-[10px]  text-center">
                                        <div><span className="font-semibold " >Kanishk Bhardwaj</span></div>
                                        <div><span className="text-[14px]" >3<sup>rd </sup>year CE</span></div>
                                    </div>
                                </div>
                                <div className="mt-[25px] md:mt-0 overflow-hidden team-photo  rounded-[20px]">
                                    <div className="w-[250px] h-[300px] overflow-hidden bg-[#c7c7c7]   ">
                                        <img src={tech3} className=" w-full   " />
                                    </div>
                                    <div className="p-[10px]  text-center">
                                        <div><span className="font-semibold " >Prashant Singh</span></div>
                                        <div><span className="text-[14px]" >2<sup>nd </sup>year IOT</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* <div className="h-[500vh]" /> */}
        </>
    )
}

export default AboutTeam