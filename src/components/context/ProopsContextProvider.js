import React, { createContext, useContext, useState } from "react";
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

  const [isLike, setIsLike] = useState(false);

  function isLikeChange() {
    setIsLike(!isLike);
  }

  const [play, setPlay] = useState(false);

  function isPlayPause() {
    setPlay(!play);
  }

  let values = {
    isLike,
    play,
    handleClick,

    isLikeChange,
    setPlay,
    isPlayPause,
  };
  return (
    <proopsContext.Provider value={values}>{children}</proopsContext.Provider>
  );
};

export default ProopsContextProvider;
