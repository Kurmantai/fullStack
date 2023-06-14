import React, { useEffect, useRef } from "react";

import "./AudioPage.scss";
import { BsMusicNoteList, BsFillVolumeMuteFill } from "react-icons/bs";

import MusicCard from "./MusicCard/MusicCard";

import { FaDesktop } from "react-icons/fa";
import Track from "../OldPage/MusicPageImg/track.png";
import Button from "../../mainComponents/button/Button";
import PlaylistCart from "../../mainComponents/playlistCart/PlaylistCart";
import Demo from "../../mainComponents/playlistCart/demoCard/Demo";
import AudioPlayer from "../../mainComponents/AudioPlayer/AudioPlayer";
import AddModal from "../../mainComponents/Modals/AddModal";
import { useModals } from "../../context/ModalsContextProvider";
import EditModal from "../../mainComponents/Modals/EditModal";
import FavoritesBtn from "../../mainComponents/button/FavoritesBtn";
import Favorites from "../../mainComponents/Modals/Favorites";
import AddMusic from "../../mainComponents/Modals/AddMusic";
import { motion } from "framer-motion";
import { Pagination } from "@mui/material";
import Category from "../../mainComponents/Category/Category";
import NextPage from "../../mainComponents/Pagination/Pagination";

const AudioPage = () => {
  const {
    setOpenModalAdd,
    openModalAdd,
    openModalEdit,
    openModalFavorite,
    setOpenModalFavorite,
    openModalMusicAdd,
  } = useModals();

  return (
    <motion.div
      className="audioPage"
      initial={{
        opacity: 0,
        transform: "scale(0.3)",
        filter: "blur(10px)",
      }}
      animate={{
        opacity: 1,
        transform: "scale(1)",
        filter: "blur(0px)",
        transition: { duration: 0.4, ease: "easeOut" },
      }}
      exit={{
        opacity: 0,
        transform: "scale(0.3)",
        filter: "blur(10px)",
        transition: { duration: 0.1, ease: "easeIn" },
      }}
      onClick={() => setOpenModalAdd(false)}
    >
      {/* <div>
        <Navbar />
      </div> */}
      <div className="audioPageMainContainer">
        <div className="audioPageTop">
          <div className="left">
            <img src="./img/girl1.png" alt="img" />
          </div>
          <div className="middle">
            <PlaylistCart />
          </div>
          <div className="right">
            <img src="./img/girl2.png" alt="img" />
          </div>
          <div className="middleNav"></div>
        </div>
        <div className="audioPageBottom">
          <div className="left">
            <h3>Choose your playlist</h3>

            <div className="AudioPageLists">
              {openModalFavorite && (
                <div className="favoriteModal">
                  <Favorites />
                  <Favorites />
                  <Favorites />
                  <Favorites />
                  <Favorites />
                </div>
              )}
              <p>
                <i>
                  <BsMusicNoteList />
                </i>
                TOP HIT 2023
              </p>
              <p>
                <i>
                  <BsMusicNoteList />
                </i>
                DANCE
              </p>
              <p>
                <i>
                  <BsMusicNoteList />
                </i>
                RELAX
              </p>
              <p>
                <i>
                  <BsMusicNoteList />
                </i>
                HIP HOP
              </p>
              <p>
                <i>
                  <BsMusicNoteList />
                </i>
                WORK OUT
              </p>
              <div className="favorite_btn">
                <FavoritesBtn />
              </div>
            </div>
            <div className="trackList">
              <div className="top">
                <img src={Track} alt="img" />
                <p>
                  Simple name <span>Artist</span>
                </p>
              </div>
              <div className="bottom">
                <i className="i">
                  <BsFillVolumeMuteFill />
                </i>
                <input type="range" />
                <i>
                  <BsMusicNoteList />
                </i>
                <i>
                  <FaDesktop />
                </i>
              </div>
            </div>
          </div>
          <div className="middleContainer">
            {openModalMusicAdd && <AddMusic />}

            <div className="addMusic"></div>
            <div className="middle">
              <MusicCard />
              <MusicCard />
              <MusicCard />
              <MusicCard />
              <MusicCard />
              <MusicCard />
              <div className="btnDiv">
                <div></div>
                <Button />
              </div>
            </div>
            <div className="middleMusic">
              <AudioPlayer />
            </div>
          </div>
          <div className="right">
            {openModalAdd && <AddModal />}
            {openModalEdit && <EditModal />}
            <div className="topPlaylist">
              <div className="top">
                <Demo />
                <Demo />
              </div>
              {/* <div className="topRight"></div> */}
            </div>
            <div className="bottomPlaylist">
              <div className="bottom">
                <Demo />
                <Demo />
              </div>
              {/* <div className="bottomRight"></div> */}
              <div className="pagination">
                <NextPage />
              </div>
            </div>

            {/* <div
              className="overlow
            "
            ></div> */}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AudioPage;
