import React, { useEffect } from "react";
import { useMusic } from "../../../context/MusicContextProvider";
import Demo from "./Demo";

const PlaylistCardMap = () => {
  const { albums, getAlbums } = useMusic();

  useEffect(() => {
    getAlbums();
  }, []);
  // console.warn(albums);

  return (
    <div>
      {albums.map((item) => (
        <Demo key={item.id} item={item} />
      ))}
    </div>
  );
};

export default PlaylistCardMap;
