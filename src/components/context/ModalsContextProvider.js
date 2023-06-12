import React, { createContext, useContext, useState } from "react";

const modalsContext = createContext();

export const useModals = () => useContext(modalsContext);

const ModalsContextProvider = ({ children }) => {
  const [openModalAdd, setOpenModalAdd] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  const [openModalFavorite, setOpenModalFavorite] = useState(false);
  const [openModalMusicAdd, setopenModalMusicAdd] = useState(false);
  // const toggleModalAdd = () => {
  //   setAddOpen(!addOpen);
  // };

  let values = {
    openModalAdd,
    openModalEdit,
    openModalFavorite,
    openModalMusicAdd,
    setOpenModalAdd,
    setOpenModalEdit,
    setOpenModalFavorite,
    setopenModalMusicAdd,
  };

  return (
    <modalsContext.Provider value={values}>{children}</modalsContext.Provider>
  );
};

export default ModalsContextProvider;
