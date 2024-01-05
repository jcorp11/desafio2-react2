import { createContext, useState, useEffect } from "react";
import axios from "axios";
export const PhotoContext = createContext();
const PhotoProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const isProduction = process.env.NODE_ENV === "production";
  const PHOTO_URL = isProduction ? "/photos.json" : "/photos.json";
  // console.log(PHOTO_URL);
  useEffect(() => {
    axios
      .get(PHOTO_URL)
      .then((response) => {
        setData(response.data.photos);
        console.log("get data");
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <PhotoContext.Provider value={{ data, setData }}>
      {children}
    </PhotoContext.Provider>
  );
};
export default PhotoProvider;
