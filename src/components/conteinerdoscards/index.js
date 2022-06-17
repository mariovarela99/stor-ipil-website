import React,{useState} from "react";
import "./style.css";

import CardItem from "../cardProduto1"
import FrameItem from "../frame3"
import { CardItemContainer } from "../cardProduto1/style";

import frame01 from "../../assets/Frame01.png"
import frame02 from "../../assets/frame02.png"
import frame03 from "../../assets/frame03.jpg"

const Conteiner = () => {
  const [listframes, setListFrames] = useState([frame01, frame02, frame03]);

  return (
    <div className="container-dos-cards">
      <h2>Selecionamos para si</h2>
      <div className="container-row">
        <div className="container-pub pro01">
          <a href="/">Saber mais</a>
        </div>
        <ul className="container-list-card">
          <CardItem/>
          <CardItem/>
          <CardItem/>
        </ul>
      </div>
      <div className="container-row">
        <div className="container-pub pro02">
          <a href="/produc-details">Saber mais</a>
        </div>
        <div>
          <h2>Os mais vendidos</h2>
           <ul className="container-list-card">
            {
              listframes.map(item =>(
                <a href="/product-details" key={item}>
                  <li className="frame-item"><FrameItem image={item} /> </li>
                </a>
              ))
            }
        </ul>
        </div>
      </div>
    </div>
    );
};

export default Conteiner;
