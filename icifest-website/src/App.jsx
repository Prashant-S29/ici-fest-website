import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { loader } from "./assets";

import Navbar from "./components/navbar";
import Mainpage from "./components/mainpage";
// import Team from "./teams";
import FestEvent from "./components/events";
import Footer from "./components/footer";
import Accommodation from "./components/accommodation"
import TempReg from "./components/temp_regis";
import AboutTeam from "./components/about_team";

// import JK from "./components/events_details/joistkwik";
// import BA from "./components/events_details/bowlingalley";
// import BOB from "./components/events_details/brickobrick";
// import CW from "./components/events_details/cyclothon";
// import SH from "./components/events_details/scavenger";

const tip_list = ["You can avail accommodations for the FEST in Accommodation section.", "Found a bug? Please report.", "Issues in registration? let us know.", "FEST'23 is launching soon. Excited?", "Participate, Compete, Win"]

const TipDisplay = ({ tips }) => {
  const [randomTip, setRandomTip] = useState('');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * tips.length);
    setRandomTip(tips[randomIndex]);
  }, [tips]);

  return <span>{randomTip}</span>;
};

const PageLoader = () => {


  return (
    <>
      <div className=" h-[100vh] flex justify-center items-center">
        <div className="">
          <div className="ml-[10px] w-[100px] h-[60px] flex justify-center animate-bounce"><img src={loader} alt="Loading" /></div>
          <div className="text-center mt-[10px] ml-[13px]"><span className="font-semibold">Loading....</span></div>
        </div>
        <div className="absolute  bottom-[20px] leading-tight text-center text-[12px] md:text-[16px] "><span className="font-semibold mr-[10px]" >Tip:-</span><span><TipDisplay tips={tip_list} /></span></div>
        <div className="absolute  bottom-[60px] md:bottom-[50px]"><span>SKIT Welcomes you to the ICI FEST</span></div>
      </div>
    </>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <BrowserRouter>
        {!isLoading ? (
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Mainpage />} />
              <Route path="/events" element={<FestEvent />} />
              <Route path="/accommodation" element={<Accommodation />} />
              <Route path="/registrations" element={<TempReg />} />
              <Route path="/aboutteam" element={<AboutTeam />} />
              {/* <Route path="/teams" element={<Team />} /> */}
              {/* <Route path="/joist-kwik" element={<JK />} />
              <Route path="/bolwing-alley" element={<BA />} />
              <Route path="/brick-o-brick" element={<BOB />} />
              <Route path="/cyclothon-walkathon" element={<CW />} />
              <Route path="/scanvenger-hunt" element={<SH />} /> */}
            </Routes>
            <Footer />
          </>
        ) : (<PageLoader />)}

      </BrowserRouter>
    </>
  );
};

export default App;
