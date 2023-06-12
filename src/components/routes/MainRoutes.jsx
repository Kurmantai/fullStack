import React from "react";
import GreetingPage from "../pages/GreetingPage/GreetingPage";
// import MusicPage from "../pages/MusucPage/MusicPage";
import { AnimatePresence } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import Navbar from "../mainComponents/navbar/Navbar";
import AudioPage from "../pages/AudioPage/AudioPage";

import PayPage from "../pages/PayPage/PayPage";
import AboutUs from "../pages/AboutUs/AboutUs";
import MainLayout from "../layouts/MainLayout";

const MainRoutes = () => {
  return (
    <div>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<GreetingPage />} />
          {/* <Route path="/musics" element={<MusicPage />} /> */}
          <Route element={<MainLayout />}>
            <Route path="/nav" element={<Navbar />} />
            <Route path="/music" element={<AudioPage />} />

            <Route path="/pay" element={<PayPage />} />

            <Route path="/aboutus" element={<AboutUs />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default MainRoutes;
