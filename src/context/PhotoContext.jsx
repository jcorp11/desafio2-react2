import { createContext, useState, useEffect } from "react";
import axios from "axios";
export const PhotoContext = createContext();
const PhotoProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const PHOTO_URL = "/photos.json";

  useEffect(() => {
    // Make a GET request using Axios
    axios
      .get(PHOTO_URL)
      .then((response) => {
        // Handle the JSON data from the response
        setData(response.data.photos);
        console.log("get data");
      })
      .catch((error) => {
        // Handle errors
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
