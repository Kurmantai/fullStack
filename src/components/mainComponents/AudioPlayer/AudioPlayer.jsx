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
      <div class="music-player-container">
        <div class="music-player">
          <div class="song-bar">
            <div class="song-infos">
              <div class="image-container">
                <img
                  src="https://d2y6mqrpjbqoe6.cloudfront.net/image/upload/f_auto,q_auto/media/library-400/216_636967437355378335Your_Lie_Small_hq.jpg"
                  alt=""
                />
              </div>
              <div class="song-description">
                <p class="title">
                  Watashitachi wa Sou Yatte Ikite Iku Jinshu na no
                </p>
                <p class="artist">Masaru Yokoyama</p>
              </div>
            </div>
          </div>
          <div class="progress-controller">
            <div class="control-buttons">
              <i class="fas fa-random"></i>
              <i class="fas fa-step-backward">
                <FaStepBackward />
              </i>
              <i class="play-pause fas fa-play">
                <i onClick={isPlayPause}>{play ? <FaPause /> : <FaPlay />}</i>
              </i>
              <i class="fas fa-step-forward">
                <FaStepForward />
              </i>
              <i class="fas fa-undo-alt"></i>
            </div>
            <div class="progress-container">
              <span>0:49</span>
              <div class="progress-bar">
                <div class="progress"></div>
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
