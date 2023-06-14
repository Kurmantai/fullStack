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
import Registration from "../pages/AuthPage/Registration";
import Login from "../pages/AuthPage/Login";
import ResetPassword from "../pages/AuthPage/ResetPassword";
import NewPassword from "../pages/AuthPage/NewPassword";

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

            <Route path="/registr" element={<Registration />} />

            <Route path="/login" element={<Login />} />

            <Route path="/reset" element={<ResetPassword />} />

            <Route path="/newpass" element={<NewPassword />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default MainRoutes;
