import React from "react";
import Plx from "react-plx";
import "./Parallax.css";
import Switch from "../switch/Switch";
import { Link } from "react-router-dom";

const Parallax = () => {
  return (
    <div>
      <Plx
        className="circle"
        parallaxData={[
          {
            start: 0,
            end: 600,
            easing: "ease-in",
            properties: [
              {
                startValue: 1,
                endValue: 2,
                property: "scale",
              },
            ],
          },
        ]}
      >
        <img src="./img/parallax.png" alt="foreground" />
      </Plx>
      <Plx
        className="cassette"
        parallaxData={[
          {
            start: 0,
            end: 800,
            properties: [
              {
                startValue: 0.1,
                endValue: 3,
                property: "scale",
              },
            ],
          },
        ]}
      >
        <img src="./img/headphone.png" alt="background" />
        <div className="switch_container">
          <Switch />
        </div>
      </Plx>
      <Plx
        className="switch"
        parallaxData={[
          {
            start: 0,
            end: 600,
            properties: [
              {
                startValue: 0.1,
                endValue: 3,
                property: "scale",
              },
            ],
          },
        ]}
      >
        ;
      </Plx>
      <Plx
        className="text"
        parallaxData={[
          {
            start: 0,
            end: 100,
            properties: [
              {
                startValue: 1,
                endValue: 0,
                property: "scale",
              },
            ],
          },
        ]}
      >
        <img src="./img/PLAY..svg" alt="Goonies" />

        <h3>
          Be the first to hear new tracks, connect directly with fellow fans and
          your favorite artists in real time, and support the future of music
          with every play, like, repost and comment
        </h3>
        <div className="app_ann">
          <img src="apple.svg" alt="" />
          <img src="android.svg" alt="" />
        </div>
      </Plx>
    </div>
  );
};

export default Parallax;
