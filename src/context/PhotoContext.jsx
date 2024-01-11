import { createContext, useState, useEffect } from "react";
import { getPhotos } from "../utils/pexels";

export const PhotoContext = createContext();

const PhotoProvider = ({ children }) => {
  const [data, setData] = useState(null);
  console.log(process.env.NODE_ENV);
  const PHOTO_URL = "/photos.json";

  useEffect(() => {
    const getPhotosWrapper = async () => {
      const res = await getPhotos();
      setData(res);
    };
    getPhotosWrapper();
  }, []);

  return (
    <PhotoContext.Provider value={{ data, setData }}>
      {children}
    </PhotoContext.Provider>
  );
};
export default PhotoProvider;
