import React, { useState } from 'react';
import { Link } from 'react-router-dom';



const materialData = [
    { material: 'Plaster of Paris', quantity: '2 kg' },
    { material: 'Cloth', quantity: '1' },
    { material: 'Bucket (mould)', quantity: '1' },
    { material: 'Polythene', quantity: '2' },
    { material: 'Mixing Container', quantity: '1' },
    { material: 'Gloves', quantity: '1' },
    { material: 'Colours (Red, Green, Blue)', quantity: '40g each' },
    { material: 'Paintbrush', quantity: '1' },
    { material: 'Disposable glass', quantity: '3' },

];


const MIXANDMOULD = () => {
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
                        <div><span className="font-extrabold text-[38px] md:text-[50px] uppercase" >MIX & MOULD</span></div>
                        <div className="flex justify-center"><div className="w-[100px] h-[4px] bg-[#ff583e]  " /></div>
                        <div className="mt-[15px] font-bold  text-[16px] md:text-[18px]">
                            <div><span>Date</span></div>
                            <div><span>Round 1 - 15<sup>th </sup>September 2023</span></div>
                            <div><span>Round 2 - 16<sup>th </sup>September 2023</span></div>
                            <div className='mt-[10px]'><span>Time</span></div>
                            <div><span>Round 1 - 02:30 pm to 03:30 pm</span></div>
                            <div><span>Round 2 - 09:00 am to 11:00 am</span></div>
                            <div className='mt-[10px]'><span>Venue</span></div>
                            <div><span>Tech zone in football ground</span></div>
                        </div>
                        <div className="font-bold text-[22px] md:text-[28px] leading-none  mt-[10px] md:mt-0 "><span>Registration Fee - ₹200 per team</span></div>
                        <div className='mt-[10px]'><span className='font-semibold text-[18px]'>All the teams must have 4 members each.</span></div>
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
                                <div className='mx-[20px] md:mx-[120px] xl:mx-[220px] '><span className='text-[17px] font-semibold'>The 'Mix and Mould'
                                    competition challenges you to step into this realm and create craftsmanship that
                                    resonates with the heart of plaster of Paris. Your task is to mould a cloth into a pot by mixing it with POP and also decorate it according to the theme which will be provided on spot.</span></div>
                            </div>
                            <div className='text-center  mb-[50px]'>
                                <div className=' mb-[10px] underline'><span className='font-bold  text-[20px]'>PARTICIPATION</span></div>
                                <div><span className='font-semibold text-[17px]'>In teams. Must have 4 members each.</span></div>
                            </div>
                            <div className='text-center  mb-[50px]'>
                                <div className=' mb-[10px] '><span className='font-bold  text-[20px] underline  '>PROBLEM STATEMENT</span></div>
                                <div className='mx-[20px] md:mx-[120px] xl:mx-[220px] '><span className='text-[17px] font-semibold'>Your task is to mould a cloth into a pot by mixing it with POP and also decorate it according to the theme.
                                </span></div>
                            </div>
                            <div className='text-center  mb-[50px]'>
                                <div className=' mb-[10px] underline'><span className='font-bold  text-[20px]'>MATERIALS PROVIDED</span></div>
                                <div className='flex justify-center text-left'>
                                    <table className='table-auto text-[17px] text-center'>
                                        <tbody>
                                            {materialData.map((item, index) => (
                                                <tr key={index}>
                                                    <td>{item.material}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${activeButton === 1 ? 'active-div' : 'deactive-div'} text-[18px] `}>
                        <div className='text-center'><span className='font-bold  text-[18px] '>
                            The event will be conducted in <span> 2 rounds</span></span></div>
                        <div className='flex justify-center mt-[10px] text-left md:text-center mx-[10px]'>
                            <div>
                                <div><span className='font-bold'>Casting the POT</span></div>
                                <div><span>Team will be given <b>40 minutes </b>to caste their pots with the help of provided materials.</span></div>

                                <div className='mt-[10px]'><span className='font-bold'>Decorating the POT</span></div>
                                <div><span>Team will be given <b>1 hr and 30 minutes </b>to decorate their pots according to the theme provided by the coordinators.</span></div>
                            </div>
                        </div>
                    </div>
                    <div className={`${activeButton === 2 ? 'active-div' : 'deactive-div'} mx-[20px]`}>
                        <div className='text-center mb-[10px]'><span className='font-bold text-[20px] underline'>JUDGING CRITERIA</span></div>
                        <div className='flex justify-center text-[17px] text-center'>
                            <div>
                                <div className='mt-[10px]'><span><b>Shape and Decoration</b></span></div>
                                <div><span>Judges will judge your models based on its shape and decoration.</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MIXANDMOULD;
