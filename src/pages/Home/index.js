import React from "react";
import Header from "../../components/header";
import CardProduto from "../../components/cardProduto1";
import Banner from "../../components/banner";
import { CardsContainer } from "./style";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import ItemCarrinho from "../../components/itemCarrinho";

function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <CardsContainer>
        <h2>Em Destaque</h2>
        <div>
          <button type="button">
            <FaAngleLeft size={24} />
          </button>
          <ul>
            <CardProduto />
            <CardProduto />
            <CardProduto />
            <CardProduto />
          </ul>
          <button type="button">
            <FaAngleRight size={24} />
          </button>
        </div>
      </CardsContainer>
      {/* <Footer /> */}
      <ItemCarrinho />
    </div>
  );
}

export default Home;
