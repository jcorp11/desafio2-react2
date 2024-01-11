import axios from "axios";

const API_key = "563492ad6f917000010000014cc889b457304b39a6b7b049eaf6f1b9";
const PHOTO_URL = "https://api.pexels.com/v1/search?query=nature&per_page=20";
const JSON_URL = "/photos.json";
const headers = {
  Authorization: API_key,
};

const APIcall = async (url, headers) => {
  const response = await axios.get(url, {
    headers: headers || null,
  });
  return response.data.photos;
};

export const getPhotos = async () => {
  try {
    const res = await APIcall(PHOTO_URL, headers);
    return res;
  } catch (error) {
    console.error("Error fetching data 1:", error);
    const res = await APIcall(JSON_URL);
    return res;
  }
};
