import React from "react";
import "./AudioPlayer.css";
import {
  FaRegHeart,
  FaHeart,
  FaForward,
  FaStepForward,
  FaStepBackward,
  FaBackward,
  FaPlay,
  FaPause,
  FaShareAlt,
} from "react-icons/fa";
import { useProops } from "../../context/ProopsContextProvider";
const AudioPlayer = () => {
  const { play, isPlayPause } = useProops();

  return (
    <div>
      <div className="music-player-container">
        <div className="music-player">
          <div className="song-bar">
            <div className="song-infos">
              <div className="image-container">
                <img
                  src="https://d2y6mqrpjbqoe6.cloudfront.net/image/upload/f_auto,q_auto/media/library-400/216_636967437355378335Your_Lie_Small_hq.jpg"
                  alt=""
                />
              </div>
              <div className="song-description">
                <p className="title">
                  Watashitachi wa Sou Yatte Ikite Iku Jinshu na no
                </p>
                <p className="artist">Masaru Yokoyama</p>
              </div>
            </div>
          </div>
          <div className="progress-controller">
            <div className="control-buttons">
              <i className="fas fa-random"></i>
              <i className="fas fa-step-backward">
                <FaStepBackward />
              </i>
              <i className="play-pause fas fa-play">
                <i onClick={isPlayPause}>{play ? <FaPause /> : <FaPlay />}</i>
              </i>
              <i className="fas fa-step-forward">
                <FaStepForward />
              </i>
              <i className="fas fa-undo-alt"></i>
            </div>
            <div className="progress-container">
              <span>0:49</span>
              <div className="progress-bar">
                <div className="progress"></div>
              </div>
              <span>3:15</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
