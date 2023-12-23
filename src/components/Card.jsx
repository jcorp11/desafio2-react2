import React from "react";
import IconHeart from "./IconHeart";

const Card = ({ photo, isFav }) => {
  return (
    <div
      className="photo"
      style={{ backgroundImage: `url(${photo.src.original})` }}
    >
      {!isFav && (
        <>
          <IconHeart filled={photo.liked} id={photo.id} />
          <p>{photo.alt}</p>
        </>
      )}
    </div>
  );
};

export default Card;
