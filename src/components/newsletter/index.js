import React from "react";
import "./style.css";

import Btn from "../btnNext"

const NewsLetter = () => {
  return (
    <div className="newsletter">
      <h2>Seja o primeiro a receber</h2>
      <p>Receba ofertas exclusivas e novidades que irão alegrar o seu dia!</p>
      <div>
        <input type="email" placeholder="Digite o seu email" />
        <Btn  />
      </div>
    </div>
  );
};

export default NewsLetter;
