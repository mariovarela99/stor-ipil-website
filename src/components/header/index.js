import React from "react";
import "./style.css";
import "https://kit.fontawesome.com/355f5085ba.js";

const Header = () => {
  return (<>
    <header>
      <nav class="header_info">
        <p>StorIPIL - All rights reserved | <a>storipil@gmail.com</a></p>
          <p class="entregas">
            <p>
              Entregas gratuitas ao IPIL | +244 951 045 990 ou +244 940 245 416 |
            </p>
            <span>
            <div class="darkmode">
              <label for="checkbox" class="label_mode">
              <i class="fa-regular fa-moon"></i>
              <i class="fa-regular fa-sun"></i>
              <div class="bola"></div>
              </label>
            </div>
          </span>
          </p>
      </nav>
      <nav class="header_nav">
      <a href="">Logo</a>
      <ul class="menu topnav">
        <li>
          <a href=""><i class="fa-solid fa-house"></i> Home</a>
        </li>
        <li>
          <a href=""><i class="fa-solid fa-bag-shopping"></i> Produtos</a>
        </li>
        <li>
          <a href=""><i class="fa-solid fa-wand-magic-sparkles"></i> Novos</a>
        </li>
        <li>
          <a href=""><i class="fa-solid fa-ranking-star"></i> Destaques</a>
        </li>
        <li>
          <a href=""><i class="fa-solid fa-award"></i> Promoções</a>
        </li>
        <li>
          <a href=""><i class="fa-solid fa-tags"></i> Mais vendidos</a>
        </li>
      </ul>
      <div class="btn-group">
        <button class="fav">Favoritos</button>
        <button class="lista">Lista de desejos</button>
      </div>
      </nav>
    </header>
  </>);
};

export default Header;
