import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { bg_video_desktop, bg_video_mobile } from "./assets";

import Navbar from "./components/navbar";
import Mainpage from "./components/mainpage";
import FestEvent from "./components/events";
import Footer from "./components/footer";
import Accommodation from "./components/accommodation"
import TempReg from "./components/temp_regis";
import AboutTeam from "./components/aboutteam";

import JK from "./components/events_details/joistkwik";
import BA from "./components/events_details/bowlingalley";
import BOB from "./components/events_details/brickobrick";
import SH from "./components/events_details/scavenger";
import TOOGLE from "./components/events_details/toogle";
import TOWER from "./components/events_details/towercraft";
import QUAKE from "./components/events_details/quakeproof";
import MIXANDMOULD from "./components/events_details/mixandmould";
import ARTOFPERSUASION from "./components/events_details/artofpersuasion";
import INNOSTRUCT from "./components/events_details/innostruct";
import CRACKTHECAD from "./components/events_details/crackthecad";
import MUDADVENTURE from "./components/events_details/mudadventure";
import BRUSHTALK from "./components/events_details/brushtalk";
import WORKSHOP from "./components/events_details/cementworkshop";
import WALKATHON from "./components/events_details/walkathon";

const App = () => {
  const [showVideo, setShowVideo] = useState(true);
  const handleVideoEnd = () => {
    setShowVideo(false);
  };

  return (
    <>
      {showVideo ? (
        <>
          <video
            playsInline
            autoPlay
            muted
            onEnded={handleVideoEnd}
            className="-mt-[130px] w-full h-full hidden md:block"
          >
            <source src={bg_video_desktop} type="video/mp4" />
          </video>

          <video
            playsInline
            autoPlay
            muted
            onEnded={handleVideoEnd}
            className="mt-[8%] w-full h-full block md:hidden"
          >
            <source src={bg_video_mobile} type="video/mp4" />
          </video>
        </>
      ) : (
        <BrowserRouter>
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Mainpage />} />
              <Route path="/events" element={<FestEvent />} />
              <Route path="/accommodation" element={<Accommodation />} />
              <Route path="/registrations" element={<TempReg />} />
              <Route path="/aboutteam" element={<AboutTeam />} />
              <Route path="/joist-kwik" element={<JK />} />
              <Route path="/bolwing-alley" element={<BA />} />
              <Route path="/brick-o-brick" element={<BOB />} />
              <Route path="/scanvenger-hunt" element={<SH />} />
              <Route path="/toogle" element={<TOOGLE />} />
              <Route path="/tower-craft" element={<TOWER />} />
              <Route path="/quakeproof" element={<QUAKE />} />
              <Route path="/mix-and-mould" element={<MIXANDMOULD />} />
              <Route path="/art-of-persuasion" element={<ARTOFPERSUASION />} />
              <Route path="/innostruct" element={<INNOSTRUCT />} />
              <Route path="/crack-the-cad" element={<CRACKTHECAD />} />
              <Route path="/the-mud-adventure" element={<MUDADVENTURE />} />
              <Route path="/let-the-brush-talk" element={<BRUSHTALK />} />
              {/* <Route path="/cement-workshop" element={<WORKSHOP />} /> */}
              {/* <Route path="/cyclothon-walkathon" element={<WALKATHON />} /> */}

            </Routes>
            <Footer />
          </>
        </BrowserRouter>
      )}
    </>
  );
};

export default App;
