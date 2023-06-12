import React, { useEffect } from "react";
import "../MusicPageStyles/MainContainer.scss";

import { FaUsers } from "react-icons/fa";

import Banner from "./Banner";
import AudioList from "./AudioList";
import Navbar from "../../../mainComponents/navbar/Navbar";

const MainContainer = () => {
  useEffect(() => {
    const allLi = document.querySelector(".menuList").querySelectorAll("li");

    function changeMenuActive() {
      allLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    allLi.forEach((n) => n.addEventListener("click", changeMenuActive));
  }, []);
  return (
    <div className="mainContainer">
      <Navbar />
      <Banner />

      <div className="menuList">
        <ul>
          {/* <li>
            <a href="#">Songs</a>
          </li>
          <li>
            <a href="#">Text</a>
          </li>
          <li>
            <a href="#">Fans</a>
          </li>
          <li>
            <a href="#">About</a>
          </li> */}
          <p>ENJOY LISTENING TO THE ALBUM</p>
        </ul>
        <p>
          <i>
            <FaUsers />
          </i>
          12.3M
          <span>Followers</span>
        </p>
      </div>
      <AudioList />
    </div>
  );
};

export default MainContainer;
