import React from "react";
import "./style.css";
import OIP from "./OIP.png";
import icon from "./delete_regular.png";

const itemCarrinho = () => {
  return (<>
  <div class="main_item">
    <div>
        <img src={OIP}/>
    </div>
    <div class="bg_desc">
        <div class="descriptions">
            <h2>Computador Portátil HP - RAM 4GB - 1 TB de SSD</h2>
            <p>Computador básico, muito foda, granda mambo, pode comprar
            vais gostar bwe, dá para assistir lá filme em 6D ...</p>
        </div>
        <div class="prices">
            <h3>250.000, 00 Kzs</h3>
        </div>
    </div>
    <div class="increment_btn">
        <button class="increment_btn" > - </button>
        <p>1</p>
        <button class="increment_btn"> + </button>
    </div>
    <div class="prices">
        <h3>250.000, 00 Kzs</h3>
        <img src={icon}/>
    </div>
  </div>
  </>);
};

export default itemCarrinho;