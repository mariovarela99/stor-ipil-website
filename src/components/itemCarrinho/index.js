import React from "react";
import "./style.css";
import OIP from "./OIP.png";
import icon from "./delete_regular.png";

const ItemCarrinho = () => {
  return (
    <>
      <div class="main_item">
        <div class="img_container">
          <img src={OIP} />
        </div>
        <div class="bg_desc">
          <div class="descriptions">
            <h3>Computador Portátil HP - RAM 4GB - 1 TB de SSD</h3>
            <p>
              Computador básico, muito foda, granda mambo, pode comprar <br />
              vais gostar bwe, dá para assistir lá filme em 6D ...
            </p>
          </div>
          <h3>250.000, 00 Kzs</h3>
          <div class="increment_btns">
            <button class="increment_btn"> - </button>
            <p>1</p>
            <button class="increment_btn"> + </button>
          </div>
          <div class="prices">
            <h3>250.000, 00 Kzs</h3>
            <button class="btn_delet">
              <img src={icon} alt="Icon" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemCarrinho;
