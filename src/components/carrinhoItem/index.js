import React, {useState, useEffect} from "react"
import {FaTrash} from "react-icons/fa"
import {Link} from "react-router-dom"

import productImage01 from "../../assets/Frame01.png"

function CarrinhoItem(){
    const [allUsersProducts, setAllUsersProducts] = useState([])

  useEffect(
      function getAllUsersProducts(){
          const dataFetch = JSON.parse(localStorage.getItem("all-users-products")) || [];
          setAllUsersProducts(dataFetch);
  },[allUsersProducts])

  function DeleteProductInCart(){
    allUsersProducts.shift();
    setAllUsersProducts(allUsersProducts);
    console.log(allUsersProducts)
    localStorage.setItem("all-users-products", JSON.stringify(allUsersProducts));
  }
    return (
        <div className="carrinho-registo">
                    <div className="carrinho-registo-list">
                        <div className="product-image image"><img src={productImage01} alt="" /> </div>
                        <div className="proct-info desc">
                            <h3>Nome do produto</h3>
                            <p>Computador básico, muito foda, granda mambo, pode comprar
                                vais gostar bwe, dá para assistir lá filme em 6D ...
                            </p>
                        </div>
                        <div className="product-price price">
                            <p>250.000,00kz</p>
                        </div>
                        <div className="product-quantity quantity">
                            <div>
                                <button>-</button><span>1</span><button>+</button>
                            </div>
                        </div>
                    <div className="product-totally totally"><p>250.000,00kz</p></div>
                    <div className="product-delete delete"><Link to=""><a><FaTrash onClick={()=>DeleteProductInCart()}/> </a></Link></div>
                </div>
            </div>
    )
}

export default CarrinhoItem;