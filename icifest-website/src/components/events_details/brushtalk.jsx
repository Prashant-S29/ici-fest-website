import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { bowling_img } from '../../assets';


const materialData = [
    { material: 'Drawing Table', quantity: '1' },
    { material: 'A3 Sheets', quantity: '1' },
    { material: 'Clips', quantity: '4' },
];


const BRUSHTALK = () => {
    const [activeButton, setActiveButton] = useState(0);

    const handleButtonClick = (index) => {
        setActiveButton(index);
    };

    return (
        <div>
            <br /><br /><br />

            <div className="flex justify-center">
                <div className=" mx-[10px] md:mx-[60px] lg:mx-[200px] w-full">
                    <div className="bg-[#ffb4a7] px-[20px] md:px-[40px] py-[30px] rounded-[30px] text-center" >
                        <div><span className="font-extrabold text-[38px] md:text-[50px] uppercase" >Let the brush talk</span></div>
                        <div className='text-center mb-[10px]'><span className='font-semibold text-[18px] uppercase'>Poster Making Competition</span></div>
                        <div className="flex justify-center"><div className="w-[100px] h-[4px] bg-[#ff583e]  " /></div>
                        <div className="mt-[15px] font-bold  text-[16px] md:text-[18px]">
                            <div><span>Date - 16<sup>th </sup>September 2023</span></div>
                            <div className='mt-[10px]'><span>Time - 09:00 AM to 11:00 AM</span></div>
                            <div className='mt-[10px]'><span>Venue</span></div>
                            <div><span>CAEG Lab, Ground Floor, Civil Block</span></div>
                        </div>
                        <div className="font-bold text-[22px] md:text-[28px] leading-none  mt-[10px] md:mt-0 "><span>Registration Fee - ₹50 per individual</span></div>
                        <div className='mt-[10px] font-semibold'><Link to='/registrations'><button className="bg-[#ff583e] hover:bg-white text-white hover:text-[#ff583e] duration-300 hover:ring-1 ring-[#ff583e] pt-[9px] pb-[9px] pl-[18px] pr-[18px] lg:pt-[11px] lg:pb-[11px] lg:pl-[20px] lg:pr-[20px] rounded-[8px] text-[14px] lg:text-[16px]  self-center">Register Now</button></Link></div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center mt-[30px] md:mt-[50px]">
                <div>

                    <div className="flex flex-wrap justify-center  gap-3 md:gap-5">

                        <div>
                            <button className={`${activeButton === 0 ? 'btn_active' : 'btn_deactive'} 'btn_active' : 'btn_deactive'} tracking-wide px-[35px] py-[18px] btn_active font-extrabold text-[14px] rounded-full `} onClick={() => handleButtonClick(0)}>
                                ABOUT</button>
                        </div>

                        <div>
                            <button className={`${activeButton === 1 ? 'btn_active' : 'btn_deactive'} 'btn_active' : 'btn_deactive'} tracking-wide px-[35px] py-[18px] btn_active font-extrabold text-[14px] rounded-full `} onClick={() => handleButtonClick(1)}>
                                STRUCTURE</button>
                        </div>

                        <div>
                            <button className={`${activeButton === 2 ? 'btn_active' : 'btn_deactive'} 'btn_active' : 'btn_deactive'} tracking-wide px-[35px] py-[18px] btn_active font-extrabold text-[14px] rounded-full `} onClick={() => handleButtonClick(2)}>
                                JUDGEMENT CRITERIA</button>
                        </div>
                    </div>

                    <div className="flex justify-center mt-[20px]">
                        <div className={activeButton === 0 ? 'active-div' : 'deactive-div'}>
                            <div className='text-center  mb-[50px]'>
                                <div className=' mb-[10px] underline'><span className='font-bold  text-[20px]'>EVENT DESCRIPTION</span></div>
                                <div className='mx-[20px] md:mx-[120px] xl:mx-[220px] '><span className='text-[17px] font-semibold'>In this event, all the participants have to design a poster on the provided theme. Postes will be designed on the sheet of paper and not digitally. The colors and other sketches are to be brought by participants according to their ideas.
                                </span></div>
                            </div>
                            <div className='text-center  mb-[50px]'>
                                <div className=' mb-[10px] underline'><span className='font-bold  text-[20px]'>PARTICIPATION</span></div>
                                <div><span className='font-semibold text-[17px]'>Individually</span></div>
                            </div>
                            <div className='text-center  mb-[50px]'>
                                <div className=' mb-[10px] '><span className='font-bold  text-[20px] underline  '>PROBLEM STATEMENT</span></div>
                                <div className='mx-[20px] md:mx-[120px] xl:mx-[220px] '><span className='text-[17px] font-semibold'>Create eye-catching posters on theme <b>“Engineers' Day”</b> by skillfully applying masking methods, fusing engineering ingenuity with artistic expression. These posters should aesthetically arrestingly commemorate the anniversary while capturing the genius of engineers, their ground-breaking discoveries, and their significant influence on society.<br />The colors and other sketches are to be brought by participants according to their ideas.
                                </span></div>
                            </div>
                            <div className='text-center  mb-[50px]'>
                                <div className=' mb-[10px] underline'><span className='font-bold  text-[20px]'>MATERIALS PROVIDED</span></div>
                                <div className='flex justify-center text-left'>
                                    <table className='table-auto text-[17px]'>
                                        <thead>
                                            <tr className=''>
                                                <th className='pr-[10px] md:pr-[80px]'>Materials &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
                                                <th>Quantity</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {materialData.map((item, index) => (
                                                <tr key={index}>
                                                    <td>{item.material}</td>
                                                    <td>{item.quantity}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${activeButton === 1 ? 'active-div' : 'deactive-div'} text-[18px] `}>
                        <div className='flex justify-center mt-[10px] text-[17px] text-center'>
                            <div>
                                <div><span>This is a <b>single round</b> event.</span></div>
                                <div className='mx-[10px]'><span>Participants will be have <b>2 hours</b> to design their poster and submit it for judgement.
                                </span></div>
                            </div>
                        </div>
                    </div>
                    <div className={`${activeButton === 2 ? 'active-div' : 'deactive-div'} mx-[20px]`}>
                        <div className='text-center mb-[10px]'><span className='font-bold text-[20px] underline'>JUDGING CRITERIA</span></div>
                        <div className='flex justify-center text-[17px] text-center'>
                            <div>
                                <div><span className='font-bold'>Slogans, Attractiveness and Theme specific </span></div>
                                <div className='mt-[10px] mx-[10px]'>
                                    <span>Your poster will we judged based on the Slogans, designs, and how much it is related to the theme.</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BRUSHTALK;
