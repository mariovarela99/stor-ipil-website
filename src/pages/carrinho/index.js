import React from "react"

import CarrinhosTitles from "../../components/carrinhoTitles"

import productImage from "../../assets/Frame01.png"

function Carrinho(){
    return(
        <>
            <div className="carrinho">
                <h2>SUMÁRIO DO CARRINHO DE COMPRAS</h2>

                <ul>
                    <CarrinhosTitles />
                    <ul>
                        <li>
                            <div className="product-image image"><img src="" alt="" /> </div>
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
                            <div className="product-delete delete"></div>
                        </li>
                    </ul>
                </ul>
            </div>
        </>
    )
}

export default Carrinho;