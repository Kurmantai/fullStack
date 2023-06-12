import React, { useState } from "react";
import "../MusicPageStyles/LeftMenu.scss";
import { FaSpotify, FaEllipsisH, FaBars } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import Menu from "./Menu";
import { MenuList } from "./MenuList";

import MenuPlayList from "./MenuPlayList";
import TrackList from "./TrackList";
const LeftMenu = () => {
  const [openNav, setOpenNav] = useState(false);

  const toggleNav = () => {
    setOpenNav(!openNav);
  };
  return (
    <div className="leftMenu">
      {/* <div className="logoContainer">
        <i>
          <FaSpotify />
        </i>
        <h2>Spotify</h2>
        <i>
          <FaEllipsisH />
        </i>
      </div> */}
      <div className="searchBox">
        <input type="text" placeholder="search..." />
        <i className="searchIcon">
          <BiSearchAlt />
        </i>
      </div>
      <Menu title={"Menu"} menuObject={MenuList} />
      <MenuPlayList />
      <TrackList />
    </div>
  );
};

export default LeftMenu;
