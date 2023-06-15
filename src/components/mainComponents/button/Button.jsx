import React from "react";
import "./Button.scss";
import { useModals } from "../../context/ModalsContextProvider";

const Button = () => {
  const { openModalMusicAdd, setopenModalMusicAdd } = useModals();
  return (
    <div>
      {/* <a className="button" href="">
        <span className="button__line button__line--top"></span>
        <span className="button__line button__line--right"></span>
        <span className="button__line button__line--bottom"></span>
        <span className="button__line button__line--left"></span>
        Neon Link
      </a> */}

      <button
        className="button"
        type="button"
        onClick={() => setopenModalMusicAdd(!openModalMusicAdd)}
      >
        <span className="button__line button__line--top"></span>
        <span className="button__line button__line--right"></span>
        <span className="button__line button__line--bottom"></span>
        <span className="button__line button__line--left"></span>
        aDD Music
      </button>
    </div>
  );
};

export default Button;
