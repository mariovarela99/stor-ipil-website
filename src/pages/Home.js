import React from "react";
import Header from "../components/header";
import Footer from "../components/footer1";
import CardProduto from "../components/cardProduto1";
import ListFrame from "../components/listFrame"
function Home() {
  return (
    <div>
      <Header />
      <CardProduto />
      <ListFrame quantity={4} />
      <Footer />
    </div>
  );
}

export default Home;
