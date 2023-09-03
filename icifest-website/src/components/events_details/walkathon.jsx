import React, { useState } from 'react';
import { Link } from 'react-router-dom';



const materialData = [
    { material: 'Not Specified Properly', quantity: '-' },
    

];


const WALKATHON = () => {
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
                        <div><span className="font-extrabold text-[38px] md:text-[50px] uppercase" >
                        Cyclothon & Walkathon</span></div>
                        <div className="flex justify-center"><div className="w-[100px] h-[4px] bg-[#ff583e]  " /></div>
                        <div className="mt-[15px] font-bold  text-[16px] md:text-[18px]">
                            <div><span>Date - 17<sup>th </sup>September 2023</span></div>
                            <div className='mt-[10px]'><span>Time - 07:00 am to 09:00 am</span></div>
                            <div className='mt-[10px]'><span>Venue - </span></div>
                        </div>
                        <div className="font-bold text-[22px] md:text-[28px] leading-none  mt-[10px] md:mt-0 "><span>Registration Fee - ₹150 per team</span></div>
                        <div className='mt-[10px]'><span className='font-semibold text-[18px]'>All the teams must have 3 memebers each.</span></div>
                        <div className='mt-[10px] font-semibold'><button className="bg-[#ff583e] hover:bg-white text-white hover:text-[#ff583e] duration-300 hover:ring-1 ring-[#ff583e] pt-[9px] pb-[9px] pl-[18px] pr-[18px] lg:pt-[11px] lg:pb-[11px] lg:pl-[20px] lg:pr-[20px] rounded-[8px] text-[14px] lg:text-[16px]  self-center"><Link to='/registrations'>Register Now</Link></button></div>
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
                                <div className='mx-[20px] md:mx-[120px] xl:mx-[220px] '><span className='text-[17px] font-semibold'>Your task is to design mud architectures with modern engineering concepts. </span></div>
                            </div>
                            <div className='text-center  mb-[50px]'>
                                <div className=' mb-[10px] underline'><span className='font-bold  text-[20px]'>PARTICIPATION</span></div>
                                <div><span className='font-semibold text-[17px]'>In teams. Must have 3 members each.</span></div>
                            </div>
                            <div className='text-center  mb-[50px]'>
                                <div className=' mb-[10px] '><span className='font-bold  text-[20px] underline  '>PROBLEM STATEMENT</span></div>
                                <div className='mx-[20px] md:mx-[120px] xl:mx-[220px] '><span className='text-[17px] font-semibold'>Devise innovative techniques and designs for crafting intricate structures. Explore sustainable methods that harness the natural properties of mud to construct durable, eco-friendly, and aesthetically pleasing creations. Your challenge is to reimagine traditional mud architecture, integrating modern engineering principles to ensure stability, functionality, and artistic appeal in your mud-built marvels.
                                </span></div>
                            </div>
                            <div className='text-center  mb-[50px]'>
                                <div className=' mb-[10px] underline'><span className='font-bold  text-[20px]'>MATERIALS PROVIDED</span></div>
                                <div className='flex justify-center text-left'>
                                    <table className='table-auto text-[17px]'>
                                        <thead>
                                            <tr className=''>
                                                <th className='pr-[80px]'>Materials &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>
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
                        <div className='flex justify-center mt-[10px] text-center'>
                            <div>
                                <span>Every Team will be provided with <b>1 hour</b> of time. They have to complete their task in the given time only.</span>
                            </div>
                        </div>
                    </div>
                    <div className={`${activeButton === 2 ? 'active-div' : 'deactive-div'} mx-[20px]`}>
                        <div className='text-center mb-[10px]'><span className='font-bold text-[20px] underline'>JUDGING CRITERIA</span></div>
                        <div className='flex justify-center text-[17px] text-center'>
                            <div>
                                <div className='mt-[10px]'><span><b>Height of the structure and Stability</b></span></div>
                                <div><span>Judges will judge your models based on it's Height and Stability.</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default WALKATHON;
