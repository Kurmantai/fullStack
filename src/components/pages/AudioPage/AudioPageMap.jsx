import React from "react";
import { useMusic } from "../../context/MusicContextProvider";
import AudioPage from "./AudioPage";

const AudioPageMap = () => {
  const { playlist } = useMusic();
  return (
    <div>
      {playlist.map((item) => {
        <AudioPage key={item.id} item={item} />;
      })}
    </div>
  );
};

export default AudioPageMap;
