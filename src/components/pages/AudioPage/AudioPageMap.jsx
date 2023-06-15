import React, { useEffect } from "react";
import { useMusic } from "../../context/MusicContextProvider";
import AudioPage from "./AudioPage";

const AudioPageMap = () => {
  const { playlist, getPlaylist } = useMusic();

  useEffect(() => {
    getPlaylist();
  }, []);
  console.log("emir");
  return (
    <div>
      {playlist.map((item) => (
        <AudioPage key={index} item={item} />
      ))}

    </div>
  );
};

export default AudioPageMap;
