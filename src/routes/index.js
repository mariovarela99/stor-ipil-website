import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Carrinho from "../pages/carrinho";


function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"exact element={<Home />} />
        <Route path="/carrinho" element={<Carrinho />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
