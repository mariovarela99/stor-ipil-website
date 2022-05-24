import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import ProductInfo from "../pages/Product";

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carrinho" element={<Cart />} />
        <Route path="/product" element={<ProductInfo />} />
        <Route path="*" element={<h1> Page Not Found </h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
