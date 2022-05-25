import React from "react";
import Header from "../components/header";
import Footer from "../components/footer1";
import CardProduto from "../components/cardProduto1";
import Frame from "../components/frame3"
function Home() {
  return (
    <div>
      <Header />
      <CardProduto />
      <Frame />
      <Footer />
    </div>
  );
}

export default Home;
