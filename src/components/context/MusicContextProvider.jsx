import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import {
  API_CATEGORIES,
  API_AUDIO_FILE,
  API_PLAYLIST,
  API_ALBUMS,
} from "./const";

export const musicContext = createContext();

export const useMusic = () => useContext(musicContext); // kastom huk

const INIT_STATE = {
  // sozdaem interfase so vsemi productami
  products: [],
  oneProduct: {},
  category: [],
  albums: [],
  playlist: [],
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    case "GET_ONE_PRODUCT":
      return { ...state, totalPage: action.payload };
    case "GET_CATEGORY":
      return { ...state, category: action.payload };
    case "GET_ALBUMS":
      return { ...state, albums: action.payload };
    case "GET_PLAY_LIST":
      return { ...state, playlist: action.payload };
    default:
      return state;
  }
}

function getAuth() {
  const token = JSON.parse(localStorage.getItem("token"));
  const Authorization = `Bearer ${token.access}`;
  const confing = {
    headers: {
      Authorization,
    },
  };
  return confing;
}
console.log(getAuth);

const MusicContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const navigate = useNavigate();

  const getProducts = async () => {
    try {
      const confing = getAuth();
      const res = await axios(`${API_AUDIO_FILE}/`, confing);
      dispatch({
        type: "GET_PRODUCTS",
        payload: res.data.results,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // ? get zapros na Albom

  async function getAlbums() {
    try {
      const confing = getAuth();
      const res = await axios.get(`${API_ALBUMS}`, confing);
      dispatch({
        type: "GET_ALBUMS",
        payload: res.data.results,
      });
    } catch (error) {
      console.log(error);
    }
  }

  //? get zapros na playlist

  async function getPlaylist() {
    try {
      const confing = getAuth();
      const res = await axios.get(`${API_PLAYLIST}`, confing);
      dispatch({
        type: "GET_PLAY_LIST",
        payload: res.data.results,
      });
    } catch (error) {
      console.log(error);
    }
  }

  //? zapros na dabovlenie muzycs

  async function addMusic(music) {
    try {
      const confing = getAuth();
      const res = await axios.post(`${API_AUDIO_FILE}/`, music, confing);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  //? zapros na  dobovlenie alboma

  async function addAlbums(albums) {
    try {
      const confing = getAuth();
      const res = await axios.post(`${API_ALBUMS}/`, albums, confing);
      getAlbums();
    } catch (error) {
      console.log(error);
    }
  }

  //? zapros na udalenie albums

  async function deleteAlbums(id) {
    try {
      const confing = getAuth();
      const res = await axios.delete(`${API_ALBUMS}/${id}/`, confing);
      getAlbums();
    } catch (error) {
      console.log(error);
    }
  }

  async function getCategories() {
    try {
      const res = await axios(`${API_CATEGORIES}/list/`);
      dispatch({
        type: "GET_CATEGORY",
        payload: res.data.results,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteProduct(id) {
    try {
      const confing = getAuth();
      const res = await axios.delete(`${API_AUDIO_FILE}/${id}/`, confing);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  }

  async function toggleLike(id) {
    try {
      const confing = getAuth();
      const res = await axios(`${API_AUDIO_FILE}/${id}/toggle_like/`, confing);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  }

  async function getOneProduct(id) {
    try {
      const res = await axios(`${API_PLAYLIST}/${id}/`);
      dispatch({
        type: "GET_ONE_PRODUCT",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function editProduct(product, id) {
    try {
      const confing = getAuth();
      const res = await axios.patch(`${API_PLAYLIST}/${id}/`, product, confing);
      getProducts();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  let values = {
    products: state.products,
    category: state.category,
    oneProduct: state.oneProduct,
    albums: state.albums,
    playlist: state.playlist,
    addMusic,
    getAlbums,
    getPlaylist,
    getProducts,
    getCategories,
    deleteProduct,
    toggleLike,
    getOneProduct,
    editProduct,
    addAlbums,
    deleteAlbums,
  };

  return (
    <musicContext.Provider value={values}>{children}</musicContext.Provider>
  );
};

export default MusicContextProvider;
