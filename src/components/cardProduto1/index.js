import React,{useState, useEffect} from "react";
import { MdOutlineFavorite } from "react-icons/md";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { CardItemContainer } from "./style";
import cardImage from "../../assets/images/card-image-item.png";

const CardProduto = () => {
  const [allUsersProducts, setAllUsersProducts] = useState([])

  useEffect(
      function getAllUsersProducts(){
          const dataFetch = JSON.parse(localStorage.getItem("all-users-products")) || [];
          setAllUsersProducts(dataFetch);
  },[allUsersProducts])

  function AddProductInCart(){
    allUsersProducts.push("produto");
    setAllUsersProducts(allUsersProducts);
    console.log(allUsersProducts)
    localStorage.setItem("all-users-products", JSON.stringify(allUsersProducts));
  }

  return (
    <CardItemContainer>
      <picture>
        <button className="angleLeft" type="button">
          <FaAngleLeft size={18} />
        </button>
        <img src={cardImage} alt="" />
        <button className="angleRight" type="button">
          <FaAngleRight size={18} />
        </button>
      </picture>

      <strong>250.000 / Unidade</strong>
      <p>Computador Portátil RAM: 4G SSD 1TB</p>

      <span>
        Computador muito foda que veio da tuga com muito amor e carinho para os
        angolanos burros.
      </span>

      <div>
        <button className="addCart" type="button"  onClick={()=>AddProductInCart()}>
          Adicionar ao Carrinho
        </button>
        <button className="addFavorites" type="button">
          <MdOutlineFavorite size={24} />
        </button>
      </div>
    </CardItemContainer>
  );
};

export default CardProduto;
