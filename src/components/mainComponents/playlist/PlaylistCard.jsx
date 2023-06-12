import React, { useState } from "react";
import axios from "axios";
import "./PlaylistCard.scss";

const API = "http://localhost:8000/posts";

const PlaylistCard = ({ onCardHover, onCardLeave }) => {
  // const [items, setItems] = useState([]);

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get(API);
  //     setItems(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useState(() => {
  //   fetchData();
  // }, []);

  return (
    <div className="cardX">
      <div className="Card"></div>
    </div>
  );
};

export default PlaylistCard;
