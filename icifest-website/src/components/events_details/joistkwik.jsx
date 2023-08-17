import React, { useState } from 'react';

const ButtonInfo = [
    {
        id: 1,
        text: 'ABOUT',
        desc: 'This is about section',
        participation: "In teams with 4 members each.",
        problem: "COMING SOON",
        material: "123456789",
    },
    {
        id: 2,
        text: 'STRUCTURE',
        desc: 'This is structure section',
        participation: "In teams with 4 members each.",
        problem: "COMING SOON",
        material: "123456789",
    },
    {
        id: 3,
        text: 'JUDGEMENT CRITERIA',
        desc: 'This is judgement section',
        participation: "In teams with 4 members each.",
        problem: "COMING SOON",
        material: "123456789",
    },

];

const JK = () => {
    const [activeButton, setActiveButton] = useState(0);

    const handleButtonClick = (index) => {
        setActiveButton(index);
    };

    return (
        <div>
            <br /><br /><br />

            <div className="flex justify-center">
                <div className=" mx-[10px] md:mx-[60px] lg:mx-[200px] w-full">
                    <div className="bg-[#ff9f8e] px-[40px] py-[30px] rounded-[30px] text-center" >
                        <div><span className="font-extrabold text-[38px] md:text-[50px]" >JOIST KWIK</span></div>
                        <div className="flex justify-center"><div className="w-[100px] h-[4px] bg-[#ff583e]  " /></div>
                        <div className="mt-[15px] font-bold  text-[16px] md:text-[18px]">
                            <div><span>Date - 15<sup>th </sup>September 2023</span></div>
                            {/* <div><span>Time - 10:00 AM onwards</span></div> */}
                        </div>
                        {/* <div className="font-bold text-[22px] md:text-[28px] leading-none mt-[10px] md:mt-0 "><span>Registration Fee - ₹200 per team</span></div> */}
                    </div>
                </div>
            </div>
{/* 
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
                            <div className='text-center mb-[10px]'>
                                <div><span className='font-bold text-[20px]'>EVENT DESC</span></div>
                                <div><span>Coming Soon</span></div>
                            </div>
                            <div className='text-center mb-[10px]'>
                                <div><span className='font-bold text-[20px]'>PARTICIPATION</span></div>
                                <div><span>Coming Soon</span></div>
                            </div>
                            <div className='text-center mb-[10px]'>
                                <div><span className='font-bold text-[20px]'>PROBLEM STATEMENT</span></div>
                                <div><span>Coming Soon</span></div>
                            </div>
                            <div className='text-center mb-[10px]'>
                                <div><span className='font-bold text-[20px]'>MATERIALS PROVIDED</span></div>
                                <div><span>Coming Soon</span></div>
                            </div>
                        </div>
                    </div>
                    <div className={activeButton === 1 ? 'active-div' : 'deactive-div'}>
                        <div className='text-center mb-[10px]'><span className='font-bold text-[20px]'>ROUND 1(DAY 1)</span></div>
                        <div className='text-center mb-[10px]'><span className='font-bold text-[20px]'>ROUND 2(DAY 2)</span></div>
                    </div>
                    <div className={activeButton === 2 ? 'active-div' : 'deactive-div'}>
                        <div className='text-center mb-[10px]'><span className='font-bold text-[20px]'>JUDGING CRITERIA</span></div>
                    </div>
                </div>
            </div> */}

        </div>
    );
};

export default JK;
