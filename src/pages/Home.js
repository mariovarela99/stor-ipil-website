import React from "react";
import Header from "../components/header";
import Footer from "../components/footer1";
import Footer2 from "../components/footer2";
import CardProduto from "../components/cardProduto1";

function Home() {
  return (
    <div>
      <Header />
      <CardProduto />
      <Footer />
      <Footer2 />
    </div>
  );
}

export default Home;
