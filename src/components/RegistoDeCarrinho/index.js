import React, {useState, useEffect} from "react"
import "./style.css"

import CarrinhosTitles from "../../components/carrinhoTitles"
import Registo from "../../components/registo"

import CarrinhoItem from "../carrinhoItem"

function RegistoDeCarrinho(){
        const [allUsersProducts, setAllUsersProducts] = useState([])

        useEffect(
            function getAllUsers(){
                const dataFetch = JSON.parse(localStorage.getItem("all-users-products")) || [];
                setAllUsersProducts(dataFetch);
        },[allUsersProducts])
    return(
        <>
            {
                allUsersProducts.map(item=>(
                    <CarrinhoItem key={item} />
                ))
            }
        </>
    )
}

export default RegistoDeCarrinho;