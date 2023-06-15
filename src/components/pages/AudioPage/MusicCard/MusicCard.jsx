import React from "react";
import { FaHeadphones, FaRegClock, FaRegHeart } from "react-icons/fa";

import "./MusicCard.scss";

const MusicCard = ({ item }) => {
  // console.log(item);
  return (
    <div className="musicCard">
      <div className="musicCardLeft">
        <p>#1</p>
        <img src={item.image} alt="img" />
        <span>{item.artist}</span>
      </div>
      <div className="musicCardMiddle">
        <span>{item.title}</span>
      </div>
      <div className="musicCardRight">
        <div className="none">
          <i>
            <FaHeadphones />
          </i>
          <p>95,490,102</p>
          <i>
            <FaRegClock />
          </i>
          <p>{item.category}</p>
        </div>
        <i className="heart">
          <FaRegHeart />
        </i>
      </div>
    </div>
  );
};

export default MusicCard;
