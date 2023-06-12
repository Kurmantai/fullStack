import React, { createContext, useContext } from "react";

const proopsContext = createContext();
export const useProops = () => useContext(proopsContext);

const ProopsContextProvider = ({ children }) => {
  return <proopsContext.Provider>{children}</proopsContext.Provider>;
};

export default ProopsContextProvider;
