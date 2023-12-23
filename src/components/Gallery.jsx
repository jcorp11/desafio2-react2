import React from "react";
import { PhotoContext } from "../context/PhotoContext";
import Card from "./Card";

const Gallery = ({ isFav }) => {
  const { data, setData } = React.useContext(PhotoContext);
  // console.log(data);
  const filteredData = isFav ? data?.filter((photo) => photo.liked) : data;
  return (
    <div
      className={`gallery  p-3 ${isFav ? "grid-columns-4" : "grid-columns-5"}`}
    >
      {filteredData?.map((photo) => (
        <Card key={photo.id} photo={photo} isFav={isFav} />
      ))}
    </div>
  );
};
export default Gallery;
