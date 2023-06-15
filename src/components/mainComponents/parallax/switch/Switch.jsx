import React from "react";
import "./Switch.scss";
import { Link } from "react-router-dom";
import { useProops } from "../../../context/ProopsContextProvider";

const Switch = () => {
  const { handleClick } = useProops();
  return (
    // <div classNameName="switch">
    //   <input type="checkbox" />
    //   <label classNameName="label"></label>
    // </div>
    // <div id="toggleWrapper">
    //   <div>
    //     <input id="toggleOff" type="radio" name="toggle" value="Off" checked />
    //     <input id="toggleOn" type="radio" name="toggle" value="On" />
    //     <div id="light"></div>
    //   </div>
    // </div>

    <div className="switch">
      {/* <Link to="/musics"> */}
      <input type="checkbox" name="toggle" onClick={handleClick} />
      {/* </Link> */}
      <label for="toggle">
        <i className="bulb">
          <span className="bulb-center"></span>
          <span className="filament-1"></span>
          <span className="filament-2"></span>
          <span className="reflections">
            <span></span>
          </span>
          <span className="sparks">
            <i className="spark1"></i>
            <i className="spark2"></i>
            <i className="spark3"></i>
            <i className="spark4"></i>
            <i className="spark5"></i>
            <i className="spark6"></i>
            <i className="spark7"></i>
            <i className="spark8"></i>
          </span>
        </i>
      </label>
    </div>
  );
};

export default Switch;
