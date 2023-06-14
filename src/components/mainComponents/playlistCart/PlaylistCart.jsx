import React from "react";
import "./PlaylistCart.scss";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import Raiting from "./Raiting/Raiting";
import { useProops } from "../../context/ProopsContextProvider";

const PlaylistCart = () => {
  const { isLike, isLikeChange } = useProops();

  return (
    <div className="playlistCartContainer">
      <div className="playlistCartTextsTop">
        <h4>Premium music</h4>
        <img className="playlistImg" src="./img/check.png" alt="img" />
      </div>

      <img
        className="cartImg"
        src="https://st.europaplus.ru/mf/p/167560/singers/009/000941/singer-detail/5bda368cb6fabaceea716785fcd16b9b.jpg"
        alt="img"
      />
      <div className="star_raiting" style={{ cursor: "pointer" }}>
        <i onClick={isLikeChange}>{isLike ? <FaHeart /> : <FaRegHeart />}</i>

        <Raiting />
      </div>
      <div className="playlistCartTextsBottom">
        <p className="first">Star Boy</p>
        <p className="second">The Weeknd</p>
        {/* <div className="buttons">
          <button class="add">aDD</button>
          <button class="delete">Delete</button>
          <button class="edit">Edit</button>
        </div> */}
      </div>
    </div>
  );
};

export default PlaylistCart;
