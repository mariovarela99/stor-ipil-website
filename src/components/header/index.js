import React from "react";
import "./style.css";
import "https://kit.fontawesome.com/355f5085ba.js";

const Header = () => {
  return (<>
    <header>
      <nav class="header_info">
        <p>StorIPIL - All rights reserved | <a>storipil@gmail.com</a></p>
        <p>
          <p>
            Entregas gratuitas ao IPIL
          </p>
          <span class="darkmode">
            <div>
              <input type="checkbox" class="checkbox"/>
              <label for="checkbox" class="label_mode">
              <i class="fa-regular fa-moon"></i>
              <i class="fa-regular fa-sun-bright"></i>
              <div class="ball"></div>
              </label>
            </div>
          </span>
        </p>
      </nav>
      <nav class="header_nav">
      <a href="">Logo</a>
      <ul class="menu">
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
