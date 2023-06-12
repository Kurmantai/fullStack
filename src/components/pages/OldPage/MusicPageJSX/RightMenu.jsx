import React from "react";
import "../MusicPageStyles/RightMenu.scss";
import { FaCrown, FaBell, FaRegHeart, FaSun, FaCogs } from "react-icons/fa";

const RightMenu = () => {
  return (
    <div className="rightContainer">
      <div className="goPro">
        <i>
          <FaCrown className="gold" />
          <p>PREMIUM</p>
        </i>

        <i>
          <FaRegHeart />
        </i>
      </div>
      <div className="profile">
        <i>
          <FaSun />
        </i>

        <div className="profileImage">
          <img
            src="https://projects-static.raspberrypi.org/projects/save-the-shark/c0d3c39dd352f39d742f2da50cdb0f826423b187/en/images/banner.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default RightMenu;
