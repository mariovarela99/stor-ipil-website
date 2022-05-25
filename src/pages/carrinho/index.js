import React from "react"

import CarrinhosTitles from "../../components/carrinhoTitles"
import CarrinhoRegisto from "../../components/RegistoDeCarrinho"

import productImage from "../../assets/Frame01.png"
import "./style.css"
function Carrinho(){
    return(
        <>
            <div className="carrinho">
                <h2 className="carrinho-title">SUMÁRIO DO CARRINHO DE COMPRAS</h2>

                <div>
                    <CarrinhosTitles />
                    <CarrinhoRegisto />
                </div>
            </div>
        </>
    )
}

export default Carrinho;