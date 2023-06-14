import React from "react";
import "./AddMusic.scss";
import { useModals } from "../../context/ModalsContextProvider";
import Category from "../Category/Category";

const AddMusic = () => {
  const { openModalMusicAdd, setopenModalMusicAdd } = useModals();
  return (
    <div className="addMusicContainer">
      <h3>aDD Music</h3>
      <input type="text" placeholder="IMG(URL)" />
      <input type="text" placeholder="Name of the Singer" />
      <input type="text" placeholder="Name of the Song(URL)" />
      <Category />
      <button className="add">aDD</button>
      <button className="back" onClick={() => setopenModalMusicAdd(false)}>
        Back
      </button>
    </div>
  );
};

export default AddMusic;
