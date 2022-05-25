import React from "react";
import Header from "../components/header";
import Footer from "../components/footer1";
import CardProduto from "../components/cardProduto1";
import Marcas from "../components/marcas/index";


function Home() {
  return (
    <div>
      <Header />
      <CardProduto />
      <Marcas />
      <Footer />
    </div>
  );
}

export default Home;
