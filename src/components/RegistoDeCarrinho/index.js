import React from "react"
import "./style.css"

import CarrinhosTitles from "../../components/carrinhoTitles"
import Registo from "../../components/registo"

import productImage01 from "../../assets/Frame01.png"
import productImage02 from "../../assets/frame02.png"
import productImage03 from "../../assets/frame03.jpg"

function RegistoDeCarrinho(){
    return(
        <div className="carrinho-container">
            <Registo 
                productImage={productImage01} 
                price="340.000,00Kzs"
                desc="Descrição de todos os produtos é bastante importante para o desenvolvimento de um projecto"
                name="PC HP"
            />
            <Registo 
                productImage={productImage02} 
                price="130.000,00Kzs"
                desc="Descrição de todos os produtos é bastante importante para o desenvolvimento de um projecto"
                name="Computador core i7"
            />
            <Registo 
                productImage={productImage03} 
                price="450.000,00Kzs"
                desc="Descrição de todos os produtos é bastante importante para o desenvolvimento de um projecto"
                name="Laptop ultimate"
            />
        </div>
    )
}

export default RegistoDeCarrinho;