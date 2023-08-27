import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { bg_video_desktop, bg_video_mobile } from "./assets";

import Navbar from "./components/navbar";
import Mainpage from "./components/mainpage";
// import Team from "./teams";
import FestEvent from "./components/events";
import Footer from "./components/footer";
import Accommodation from "./components/accommodation"
import TempReg from "./components/temp_regis";
import AboutTeam from "./components/about_team";
// import Gallery from "./components/gallery";

// import JK from "./components/events_details/joistkwik";
// import BA from "./components/events_details/bowlingalley";
// import BOB from "./components/events_details/brickobrick";
// import CW from "./components/events_details/cyclothon";
// import SH from "./components/events_details/scavenger";

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
              {/* <Route path="/gallery" element={<Gallery />} /> */}
              {/* <Route path="/joist-kwik" element={<JK />} />
                <Route path="/bolwing-alley" element={<BA />} />
                <Route path="/brick-o-brick" element={<BOB />} />
                <Route path="/cyclothon-walkathon" element={<CW />} />
                <Route path="/scanvenger-hunt" element={<SH />} /> */}
            </Routes>
            <Footer />
          </>
        </BrowserRouter>
      )}
    </>
  );
};

export default App;
