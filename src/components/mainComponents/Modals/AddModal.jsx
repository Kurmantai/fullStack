
// import React from "react";
// import "./AddModal.scss";
// import { useModals } from "../../context/ModalsContextProvider";

// const AddModal = () => {
//   const { setOpenModalAdd } = useModals();
//   return (
//     <div className="addModalContainer">
//       <h3>aDD Albom</h3>
//       <input type="text" placeholder="IMG(URL)" />
//       <input type="text" placeholder="Name of the Singer" />
//       <input type="text" placeholder="Name of the Albom" />
//       <button className="add">aDD</button>
//       <button className="back" onClick={() => setOpenModalAdd(false)}>
//         Back
//       </button>
//     </div>
//   );
// };

// export default AddModal;

import React, { useState } from "react";



import "./AddModal.scss";
import { useModals } from "../../context/ModalsContextProvider";
import { useMusic } from "../../context/MusicContextProvider";

const AddModal = () => {

  const { setOpenModalAdd } = useModals();
  const { addAlbums } = useMusic();
  const [imageUrl, setImageUrl] = useState("");
  const [singerName, setSingerName] = useState("");
  const [albumName, setAlbumName] = useState("");

  const handleAddAlbum = () => {
    //! Создаем объект альбома
    const album = {
      image: imageUrl,
      artist: singerName,
      title: albumName,
    };

    //! Вызываем функцию addAlbums из контекста
    addAlbums(album);

    //! Сбросить значения полей ввода
    setImageUrl("");
    setSingerName("");
    setAlbumName("");

    //! Закрыть модальное окно
    setOpenModalAdd(false);
  };

  return (
    <div className="addModalContainer">
      <h3>Добавить альбом</h3>
      <input
        type="text"
        placeholder="URL изображения"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <input
        type="text"
        placeholder="Имя исполнителя"
        value={singerName}
        onChange={(e) => setSingerName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Название альбома"
        value={albumName}
        onChange={(e) => setAlbumName(e.target.value)}
      />
      <button className="add" onClick={handleAddAlbum}>
        Добавить
      </button>
      <button className="back" onClick={() => setOpenModalAdd(false)}>
        Назад
      </button>
    </div>
  );
};

export default AddModal;
