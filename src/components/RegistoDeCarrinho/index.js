import React from "react"
import "./style.css"

import CarrinhosTitles from "../../components/carrinhoTitles"

import productImage01 from "../../assets/Frame01.png"
import productImage02 from "../../assets/frame02.png"
import productImage03 from "../../assets/frame03.jpg"

function RegistoDeCarrinho(){
    return(
        <>
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
                    <div className="product-delete delete">delete</div>
                </div>
            </div>
            <div className="carrinho-registo">
                    <div className="carrinho-registo-list">
                        <div className="product-image image"><img src={productImage02} alt="" /> </div>
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
                    <div className="product-delete delete">delete</div>
                </div>
            </div>
            <div className="carrinho-registo">
                    <div className="carrinho-registo-list">
                        <div className="product-image image"><img src={productImage03} alt="" /> </div>
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
                    <div className="product-delete delete">delete</div>
                </div>
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
                    <div className="product-delete delete">delete</div>
                </div>
            </div>
            <div className="carrinho-registo">
                    <div className="carrinho-registo-list">
                        <div className="product-image image"><img src={productImage02} alt="" /> </div>
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
                    <div className="product-delete delete">delete</div>
                </div>
            </div>
            <div className="carrinho-registo">
                    <div className="carrinho-registo-list">
                        <div className="product-image image"><img src={productImage03} alt="" /> </div>
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
                    <div className="product-delete delete">delete</div>
                </div>
            </div>
        </>
    )
}

export default RegistoDeCarrinho;