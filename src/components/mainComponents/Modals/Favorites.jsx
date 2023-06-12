import React from "react";
import "./Favorite.scss";
import { FaRegHeart, FaHeart } from "react-icons/fa";
const Favorites = () => {
  return (
    <div className="favorite">
      <p># 1</p>
      <img
        src="https://storage.prompt-hunt.workers.dev/clgwzwxgl001nl909mt5rwztg_1"
        alt="img"
      />

      <p>Shakira</p>
      <p>Pa' tipos como tú</p>

      {/* <i>
        <FaRegHeart />
      </i> */}
      <i className="heart">
        <FaHeart />
      </i>
    </div>
  );
};

export default Favorites;
