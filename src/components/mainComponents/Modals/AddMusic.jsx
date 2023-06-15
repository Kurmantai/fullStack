// import React from "react";
// import "./AddMusic.scss";
// import { useModals } from "../../context/ModalsContextProvider";

// const AddMusic = () => {
//   const { openModalMusicAdd, setopenModalMusicAdd } = useModals();
//   return (
//     <div className="addMusicContainer">
//       <h3>aDD Music</h3>
//       <input type="text" placeholder="IMG(URL)" />
//       <input type="text" placeholder="Name of the Singer" />
//       <input type="text" placeholder="Name of the Song(URL)" />
//       <button className="add">aDD</button>
//       <button className="back" onClick={() => setopenModalMusicAdd(false)}>
//         Back
//       </button>
//     </div>
//   );
// };

// export default AddMusic;
import React, { useState } from "react";
import "./AddMusic.scss";
import { useModals } from "../../context/ModalsContextProvider";
import { useMusic } from "../../context/MusicContextProvider";

import Category from "../Category/Category";

const AddMusic = () => {
  const { openModalMusicAdd, setopenModalMusicAdd } = useModals();
  const { addMusic } = useMusic();

  const [imgUrl, setImgUrl] = useState("");
  const [singerName, setSingerName] = useState("");
  const [songUrl, setSongUrl] = useState("");

  const handleAddMusic = () => {
    //! Создать объект с данными музыки
    const music = {
      image: imgUrl,
      artist: singerName,
      music: songUrl,
    };

    //!! Очистить поля ввода
    setImgUrl("");
    setSingerName("");
    setSongUrl("");
  };

  return (
    <div className="addMusicContainer">
      <h3>Добавить музыку</h3>
      <input
        type="text"
        placeholder="URL обложки"
        value={imgUrl}
        onChange={(e) => setImgUrl(e.target.value)}
      />
      <input
        type="text"
        placeholder="Имя исполнителя"
        value={singerName}
        onChange={(e) => setSingerName(e.target.value)}
      />
      <input
        type="text"
        placeholder="URL песни"
        value={songUrl}
        onChange={(e) => setSongUrl(e.target.value)}
      />
      <button className="add" onClick={handleAddMusic}>
        Добавить
      </button>
      <button className="back" onClick={() => setopenModalMusicAdd(false)}>
        Назад
      </button>
    </div>
  );
};

export default AddMusic;
