import React from "react";
import "./Button.scss";
import { useModals } from "../../context/ModalsContextProvider";

const Button = () => {
  const { openModalMusicAdd, setopenModalMusicAdd } = useModals();
  return (
    <div>
      {/* <a class="button" href="">
        <span class="button__line button__line--top"></span>
        <span class="button__line button__line--right"></span>
        <span class="button__line button__line--bottom"></span>
        <span class="button__line button__line--left"></span>
        Neon Link
      </a> */}

      <button
        class="button"
        type="button"
        onClick={() => setopenModalMusicAdd(!openModalMusicAdd)}
      >
        <span class="button__line button__line--top"></span>
        <span class="button__line button__line--right"></span>
        <span class="button__line button__line--bottom"></span>
        <span class="button__line button__line--left"></span>
        aDD Music
      </button>
    </div>
  );
};

export default Button;
