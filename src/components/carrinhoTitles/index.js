import React from "react"
import "./style.css"

function CarrinhoTitles(){
    return(
        <>
            <div className="carrinho-titles">
                    <ul>
                        <li className="image">Imagem</li>
                        <li className="desc">Descrição</li>
                        <li className="price">Preço Unitário</li>
                        <li className="quantity">Quantidade</li>
                        <li className="totally">Total</li>
                        <li className="delete">Delete</li>
                    </ul>
            </div>
        </>
    )
}

export default CarrinhoTitles;