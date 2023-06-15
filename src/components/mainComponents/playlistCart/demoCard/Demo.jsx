import React, { useEffect } from "react";
import "./Demo.scss";

import { useModals } from "../../../context/ModalsContextProvider";
import { useMusic } from "../../../context/MusicContextProvider";

const Demo = ({ item }) => {
  const { getAlbums } = useMusic();

  useEffect(() => {
    getAlbums();
  }, []);

  // console.log(item);
  const { setOpenModalAdd, setOpenModalEdit } = useModals();
  const { deleteAlbums } = useMusic();
  return (
    <div className="demoCartContainer">
      <div className="demoCartTextsBottom">
        <img className="cartImg" src={item.image} alt="img" />
        <p className="first">{item.title}</p>
        <p className="second">{item.artist}</p>
        <div className="buttons">
          <button
            class="add"
            onClick={() => {
              setOpenModalAdd(true);
            }}
          >
            A
          </button>
          <button onClick={() => deleteAlbums(item.id)} class="delete">
            D
          </button>
          <button
            class="edit"
            onClick={() => {
              setOpenModalEdit(true);
            }}
          >
            E
          </button>
        </div>
      </div>
    </div>
  );
};

export default Demo;
