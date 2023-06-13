import React, { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

const proopsContext = createContext();
export const useProops = () => useContext(proopsContext);

const ProopsContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    setTimeout(() => {
      navigate("/music");
    }, 800);
  };

  let values = {
    handleClick,
  };
  return (
    <proopsContext.Provider value={values}>{children}</proopsContext.Provider>
  );
};

export default ProopsContextProvider;
