import React from "react"
import "./style.css"

import CarrinhosTitles from "../../components/carrinhoTitles"

import CarrinhoItem from "../carrinhoItem"

function RegistoDeCarrinho(){
    return(
        <>
            <CarrinhoItem />
            <CarrinhoItem />
            <CarrinhoItem />
        </>
    )
}

export default RegistoDeCarrinho;