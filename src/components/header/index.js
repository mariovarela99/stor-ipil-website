import React from "react";
import "./style.css";
import "https://kit.fontawesome.com/355f5085ba.js";

const Header = () => {
  return (
    <>
      <header>
        <nav class="header_info">
          <p>
            StorIPIL - All rights reserved |
            <a href="mailto:storipil@gmail.com">storipil@gmail.com</a>
          </p>
          <p>
            <p>Entregas gratuitas ao IPIL</p>
            <span class="darkmode">
              <div>
                <input type="checkbox" class="checkbox" />
                <label for="checkbox" class="label_mode">
                  <i class="fa-regular fa-moon" />
                  <i class="fa-regular fa-sun-bright" />
                  <div class="ball"></div>
                </label>
              </div>
            </span>
          </p>
        </nav>
        <nav class="header_nav">
          <a href="/">Logo</a>
          <ul class="menu">
            <li>
              <a href="/">
                <i class="fa-solid fa-house" /> Home
              </a>
            </li>
            <li>
              <a href="/">
                <i class="fa-solid fa-bag-shopping" /> Produtos
              </a>
            </li>
            <li>
              <a href="/">
                <i class="fa-solid fa-wand-magic-sparkles" /> Novos
              </a>
            </li>
            <li>
              <a href="/">
                <i class="fa-solid fa-ranking-star" /> Destaques
              </a>
            </li>
            <li>
              <a href="/">
                <i class="fa-solid fa-award" /> Promoções
              </a>
            </li>
            <li>
              <a href="/">
                <i class="fa-solid fa-tags" /> Mais vendidos
              </a>
            </li>
          </ul>
          <div class="btn-group">
            <button class="fav">Favoritos</button>
            <button class="lista">Lista de desejos</button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
