import React from "react";
import Footer from "../../components/footer2";
import Header from "../../components/header";
import "./style.css";
import OIP from "./OIP.png";
import icon from "./Vector.png";

function ProductInfo() {
  return (
    <>
      <Header />
      <div class="main_product">
        <div class="bg_img">
             <img src={OIP} alt=""/>
        </div>
        <div class="bg2_img">
            <div class="bg_imgS">
             <img src={OIP} alt=""/>
            </div>
            <div class="bg_imgS">
             <img src={OIP} alt=""/>
            </div>
            <div class="bg_imgS">
              <img src={OIP} alt=""/>
            </div>
        </div>
        <div class="textDesc">
            <div class="description">
              <h2>MSI Computador Portátil Summit E16 FLIP A11UCT 16´´ i7-1195G7/32G...</h2>
              <p> <span>Referência</span> : 12345</p>
            </div>
            <div class="line_info"></div>
            <div class="details_product">
              <div class="price">
                <h1>310.000,00 kzs</h1>
                <span>Preço com IVA incluindo a taxa em vigor</span>
              </div>
              <div class="btn_components">
                <div class="increment">
                   <button class="increment_btn" > - </button>
                   <p>1</p>
                   <button class="increment_btn"> + </button>
                </div>
                <div class="btn_geral">
                  <button class="img_btn"><img src={icon}/></button>
                  <button class="carrinho">Adiconar ao carrinho</button>
                </div>
              </div>
            </div>
        </div>
      </div>
      <div> Produtos Relacionados </div>
      <Footer />
    </>
  );
}

export default ProductInfo;
