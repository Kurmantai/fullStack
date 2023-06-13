import React from "react";
import "./Switch.scss";
import { Link } from "react-router-dom";
import { useProops } from "../../../context/ProopsContextProvider";

const Switch = () => {
  const { handleClick } = useProops();
  return (
    // <div className="switch">
    //   <input type="checkbox" />
    //   <label className="label"></label>
    // </div>
    // <div id="toggleWrapper">
    //   <div>
    //     <input id="toggleOff" type="radio" name="toggle" value="Off" checked />
    //     <input id="toggleOn" type="radio" name="toggle" value="On" />
    //     <div id="light"></div>
    //   </div>
    // </div>

    <div class="switch">
      {/* <Link to="/musics"> */}
      <input type="checkbox" name="toggle" onClick={handleClick} />
      {/* </Link> */}
      <label for="toggle">
        <i class="bulb">
          <span class="bulb-center"></span>
          <span class="filament-1"></span>
          <span class="filament-2"></span>
          <span class="reflections">
            <span></span>
          </span>
          <span class="sparks">
            <i class="spark1"></i>
            <i class="spark2"></i>
            <i class="spark3"></i>
            <i class="spark4"></i>
            <i class="spark5"></i>
            <i class="spark6"></i>
            <i class="spark7"></i>
            <i class="spark8"></i>
          </span>
        </i>
      </label>
    </div>
  );
};

export default Switch;
