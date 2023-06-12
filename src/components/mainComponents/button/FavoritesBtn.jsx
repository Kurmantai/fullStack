import React from "react";
import "./FavoritesBtn.scss";
import { useModals } from "../../context/ModalsContextProvider";

const FavoritesBtn = () => {
  const { openModalFavorite, setOpenModalFavorite } = useModals();
  return (
    <button
      class="favorites_button"
      type="button"
      onClick={() => setOpenModalFavorite(!openModalFavorite)}
    >
      <span class="favorites_button__line favorites_button__line--top"></span>
      <span class="favorites_button__line favorites_button__line--right"></span>
      <span class="favorites_button__line favorites_button__line--bottom"></span>
      <span class="favorites_button__line favorites_button__line--left"></span>
      Favorites
    </button>
  );
};

export default FavoritesBtn;
