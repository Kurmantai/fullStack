import React from "react";
import "./PlaylistCart.scss";

const PlaylistCart = () => {
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
