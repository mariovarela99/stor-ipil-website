import React, {useState, useEffect} from "react"
import { Link } from "react-router-dom";
import { DownHeader, HeaderTag, MainHeader, SubHeader } from "./style";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  
  const [allUsersProducts, setAllUsersProducts] = useState([])

  useEffect(
      function getAllUsersProducts(){
          const dataFetch = JSON.parse(localStorage.getItem("all-users-products")) || [];
          setAllUsersProducts(dataFetch);
  },[allUsersProducts])
  return (
    <>
      <HeaderTag>
        <SubHeader className="subHeader">
          <div>
            <p>StorIpil - All Rights Reserved</p> <span className="line"></span>
            <a href="mailto:storipil@info.com">storipil@info.com</a>
          </div>
          <div>
            <p>Entregas Gratuitas ao IPIl</p> <span className="line"></span>
            <p>
              <a href="tel:+244951045990"> +244 951 045 990 </a>
              ou
              <a href="tel:+244940245416"> +244 940 245 416 </a>
            </p>
          </div>
        </SubHeader>

        <MainHeader className="mainHeader">
          <picture>
            <img src="./" alt="Logo" />
          </picture>
          <nav>
            <ul>
              <li>
                <Link to="/"> Home </Link>
              </li>
              <li>
                <Link to="/all-products"> Produtos </Link>
              </li>
              <li>
                <Link to="/"> Novos </Link>
              </li>
              <li>
                <Link to="/"> Destaques </Link>
              </li>
              <li>
                <Link to="/"> Promoções </Link>
              </li>
              <li>
                <Link to="/"> Mais vendidos </Link>
              </li>
            </ul>
          </nav>
          <div>
            <button type="button"><Link to="/login">Login</Link></button>
            <button type="button"><Link to="/cadastro">Cadastrar</Link></button>
          </div>
        </MainHeader>

        <DownHeader>
          <select>
            <option value="null"> Categorias </option>
          </select>
          <input type="search" placeholder="Procurar..." />
          <div>
            <Link to="/carrinho">
              <span>Carrinho</span>
              <FaShoppingCart fontSize={18} color="#ffffff" />
              <span> {allUsersProducts.length} </span> Item(s)
            </Link>
          </div>
        </DownHeader>
      </HeaderTag>
    </>
  );
};

export default Header;
