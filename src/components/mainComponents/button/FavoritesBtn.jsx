import React from "react";
import "./FavoritesBtn.scss";
import { useModals } from "../../context/ModalsContextProvider";

const FavoritesBtn = () => {
  const { openModalFavorite, setOpenModalFavorite } = useModals();
  return (
    <button
      className="favorites_button"
      type="button"
      onClick={() => setOpenModalFavorite(!openModalFavorite)}
    >
      <span className="favorites_button__line favorites_button__line--top"></span>
      <span className="favorites_button__line favorites_button__line--right"></span>
      <span className="favorites_button__line favorites_button__line--bottom"></span>
      <span className="favorites_button__line favorites_button__line--left"></span>
      Favorites
    </button>
  );
};

export default FavoritesBtn;
