import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Favorites from "../components/Favorites";
import VerContactos from "../components/VerContactos";
import AddItem from "../components/AddItem";
import MyProvider from "../context/Context";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <MyProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/add" element={<AddItem />} />
          <Route path="/contactos" element={<VerContactos />} />
        </Routes>
      </MyProvider>
    </BrowserRouter>
  );
};

export default AppRouter;
