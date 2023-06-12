import React from "react";
import "./Demo.scss";
import { useModals } from "../../../context/ModalsContextProvider";

const Demo = () => {
  const { setOpenModalAdd, setOpenModalEdit } = useModals();
  return (
    <div className="demoCartContainer">
      {/* <div className="demoCartTextsTop">
        <h4>Premium music</h4>
        <img className="demoImg" src="./img/check.png" alt="img" />
      </div> */}

      <img
        className="cartImg"
        src="https://st.europaplus.ru/mf/p/167560/singers/009/000941/singer-detail/5bda368cb6fabaceea716785fcd16b9b.jpg"
        alt="img"
      />
      <div className="demoCartTextsBottom">
        <p className="first">Star Boy</p>
        <p className="second">The Weeknd</p>
        <div className="buttons">
          <button
            class="add"
            onClick={() => {
              setOpenModalAdd(true);
            }}
          >
            A
          </button>
          <button class="delete">D</button>
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
