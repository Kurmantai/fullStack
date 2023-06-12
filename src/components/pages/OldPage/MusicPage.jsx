import React from "react";
import LeftMenu from "./MusicPageJSX/LeftMenu";
import MainContainer from "./MusicPageJSX/MainContainer";
import RightMenu from "./MusicPageJSX/RightMenu";
import "./MusicPage.scss";

const MusicPage = () => {
  return (
    <div className="musicPageContainer">
      <LeftMenu />
      <MainContainer />
      <RightMenu />

      <div className="background"></div>
    </div>
  );
};

export default MusicPage;
