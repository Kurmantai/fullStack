import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

import { BsXLg } from "react-icons/bs";

import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="header">
      <div className="navbar">
        <div className="logo">
          <Link to="/">
            <img src="./img/PLAY..svg" alt="img" />
          </Link>
        </div>
        <ul className={`links ${isOpen ? "open" : ""}`}>
          <li>
            <Link to="/music">
              <a href="#">Music</a>
            </Link>
          </li>
          <li>
            <Link to="/aboutus">
              <a href="#">About</a>
            </Link>
          </li>
          <li>
            <Link to="/auth">
              <a href="#">Registration</a>
            </Link>
          </li>
          <li>
            <Link to="/pay">
              <a href="#">Subsctipon</a>|{" "}
            </Link>
          </li>
        </ul>
        <input type="search" placeholder="search..." />
        <div className="toggle_btn" onClick={toggleDropdown}>
          {isOpen ? (
            <i>
              <BsXLg />
            </i>
          ) : (
            <i>
              <FaBars />
            </i>
          )}
        </div>
      </div>
      <div className={`dropdown_menu ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a href="#">Music</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Registration</a>
          </li>
          <li>
            <a href="#">Subsctipon</a>
          </li>
          <li>
            <input type="search" placeholder="search..." />
          </li>
        </ul>
      </div>
      {/* <AudioPlayer /> */}
    </div>
  );
};

export default Navbar;
