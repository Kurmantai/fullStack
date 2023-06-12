import React from "react";
import { FaHeadphones, FaRegClock, FaRegHeart, FaHeart } from "react-icons/fa";
import "./MusicCard.scss";
const MusicCard = () => {
  return (
    <div className="musicCard">
      <div className="musicCardLeft">
        <p># 1</p>
        <img
          src="https://st.europaplus.ru/mf/p/167560/singers/009/000941/singer-detail/5bda368cb6fabaceea716785fcd16b9b.jpg"
          alt="img"
        />
        <span>Weeeknd</span>
      </div>
      <div className="musicCardMiddle">
        <span>Blinding lights</span>
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
          <p>03.04</p>
        </div>
        <i className="heart">
          <FaRegHeart />
        </i>
        {/* <i className="heart">
          <FaHeart />
        </i> */}
      </div>
    </div>
  );
};

export default MusicCard;
