import { Route, Routes } from "react-router-dom";
import Favorites from "../views/Favorites";
import Home from "../views/Home";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favoritos" element={<Favorites />} />
    </Routes>
  );
};
export default Router;
