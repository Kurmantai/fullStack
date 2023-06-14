import React, { useEffect, useRef } from "react";
import "./AddModal.scss";
import { useModals } from "../../context/ModalsContextProvider";

const AddModal = () => {
  const { openModalAdd, setOpenModalAdd } = useModals();

  return (
    <div className="addModalContainer">
      <h3>aDD Albom</h3>
      <input type="text" placeholder="IMG(URL)" />
      <input type="text" placeholder="Name of the Singer" />
      <input type="text" placeholder="Name of the Albom" />
      <button className="add">aDD</button>
      <button className="back" onClick={() => setOpenModalAdd(false)}>
        Back
      </button>
    </div>
  );
};

export default AddModal;
