import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import "./Raiting.scss";

const Rating = () => {
  const [rating, setRating] = useState(0);

  const handleClick = (selectedRating) => {
    setRating(selectedRating === rating ? 0 : selectedRating);
  };

  return (
    <div className="rating" style={{ cursor: "pointer" }}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`star ${star <= rating ? "filled" : ""}`}
          onClick={() => handleClick(star)}
        >
          {star <= rating ? <AiFillStar /> : <AiOutlineStar />}
        </span>
      ))}
    </div>
  );
};

export default Rating;
