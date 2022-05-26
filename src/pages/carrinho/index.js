import React from "react"
import "./style.css"

import CarrinhosTitles from "../../components/carrinhoTitles"
import CarrinhoRegisto from "../../components/RegistoDeCarrinho"
import CarrinhoTabela from "../../components/tabelaCalculoCarrionho"
import CarrinhoPub from "../../components/carrinhoPub"
import BtnNext from "../../components/btnNext"

import productImage from "../../assets/Frame01.png"
function Carrinho(){
    return(
        <>
            <div className="carrinho">
                <h2 className="carrinho-title">SUMÁRIO DO CARRINHO DE COMPRAS</h2>

                <div>
                    <CarrinhosTitles />
                    <CarrinhoRegisto />
                    <div className="row">
                        <CarrinhoPub />
                        <CarrinhoTabela />
                    </div>
                    <BtnNext />
                </div>
            </div>
        </>
    )
}

export default Carrinho;