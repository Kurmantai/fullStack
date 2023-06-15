import React, { useEffect } from "react";
import { useMusic } from "../../../context/MusicContextProvider";

import MusicCard from "./MusicCard";

const MusicCardMap = () => {
  const { products, getProducts } = useMusic();

  useEffect(() => {
    getProducts(); // Вызываем функцию getProducts при монтировании компонента
  }, []);

  return (
    <div>
      {products.map((item, index) => (
        <MusicCard key={index} item={item} />

      ))}
    </div>
  );
};

export default MusicCardMap;
