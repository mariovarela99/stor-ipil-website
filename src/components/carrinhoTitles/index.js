import React from "react"
import "./style.css"

function CarrinhoTitles(){
    return(
        <>
            <div className="carrinho-titles">
                    <div>
                        <div className="image">Imagem</div>
                        <div className="desc">Descrição</div>
                        <div className="price">Preço Unitário</div>
                        <div className="quantity">Quantidade</div>
                        <div className="totally">Total</div>
                        <div className="delete">Delete</div>
                    </div>
            </div>
        </>
    )
}

export default CarrinhoTitles;