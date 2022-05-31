import React from "react"

function Registo({productImage, name, price, desc}){
    return (
        <div className="carrinho-registo">
                    <div className="carrinho-registo-list">
                        <div className="product-image image"><img src={productImage} alt="" /> </div>
                        <div className="proct-info desc">
                            <h3>{name}</h3>
                            <p>{desc} </p>
                        </div>
                        <div className="product-price price">
                            <p>{price} </p>
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
    )
}

export default Registo;