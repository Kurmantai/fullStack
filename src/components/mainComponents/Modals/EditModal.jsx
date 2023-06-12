import React from "react";
import "./EditModal.scss";
import { useModals } from "../../context/ModalsContextProvider";

const EditModal = () => {
  const { setOpenModalEdit } = useModals();
  return (
    <div className="editModalContainer">
      <h3>Edit Albom</h3>
      <input type="text" placeholder="IMG(URL)" />
      <input type="text" placeholder="Name of the Singer" />
      <input type="text" placeholder="Name of the Albom" />
      <button className="edit">Edit</button>
      <button className="back" onClick={() => setOpenModalEdit(false)}>
        Back
      </button>
    </div>
  );
};

export default EditModal;
