import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

import Favorites from "./views/Favorites";
import Home from "./views/Home";

import PhotoProvider from "./context/PhotoContext";

const App = () => {
  return (
    <div>
      <PhotoProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favorites />} />
        </Routes>
      </PhotoProvider>
    </div>
  );
};
export default App;
