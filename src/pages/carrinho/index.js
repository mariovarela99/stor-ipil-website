import React from "react"
import "./style.css"

import CarrinhosTitles from "../../components/carrinhoTitles"
import CarrinhoRegisto from "../../components/RegistoDeCarrinho"
import CarrinhoTabela from "../../components/tabelaCalculoCarrionho"

import productImage from "../../assets/Frame01.png"
function Carrinho(){
    return(
        <>
            <div className="carrinho">
                <h2 className="carrinho-title">SUMÁRIO DO CARRINHO DE COMPRAS</h2>

                <div>
                    <CarrinhosTitles />
                    <CarrinhoRegisto />
                    <CarrinhoTabela />
                </div>
            </div>
        </>
    )
}

export default Carrinho;