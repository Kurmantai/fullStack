import React from "react";
import { useMusic } from "../../../context/MusicContextProvider";
import Demo from "./Demo";

const PlaylistCardMap = () => {
  const { albums } = useMusic();
  return (
    <div>
      {albums.map((item) => (
        <Demo key={item.id} item={item} />
      ))}
    </div>
  );
};

export default PlaylistCardMap;
