import React from "react";
import "./MainLayout.scss";
import Navbar from "../mainComponents/navbar/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="mainLayoutContainer">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
