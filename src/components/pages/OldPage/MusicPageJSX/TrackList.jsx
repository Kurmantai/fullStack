import React from "react";
import { BsFillVolumeMuteFill, BsMusicNoteList } from "react-icons/bs";
import { FaDesktop } from "react-icons/fa";
import Track from "../MusicPageImg/track.png";

const TrackList = () => {
  return (
    <div className="trackList">
      <div className="top">
        <img src={Track} alt="img" />
        <p>
          Simple name <span>Artist</span>
        </p>
      </div>
      <div className="bottom">
        <i>
          <BsFillVolumeMuteFill />
        </i>
        <input type="range" />
        <i>
          <BsMusicNoteList />
        </i>
        <i>
          <FaDesktop />
        </i>
      </div>
    </div>
  );
};

export default TrackList;
