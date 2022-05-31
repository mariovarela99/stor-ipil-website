import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import ProductInfo from "../pages/Product";
import Home from "../pages/Home";
import Carrinho from "../pages/carrinho";
import ProductDetails from "../pages/productDetails";


function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/carrinho" element={<Cart />} />
        <Route path="/product" element={<ProductInfo />} />
        <Route path="*" element={<h1> Page Not Found </h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
