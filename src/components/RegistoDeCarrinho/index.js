import React, {useState, useEffect} from "react"
import "./style.css"

import CarrinhosTitles from "../../components/carrinhoTitles"
import Registo from "../../components/registo"

import CarrinhoItem from "../carrinhoItem"

function RegistoDeCarrinho(){
    var [userProducts, setUserProducts] = useState([1,2])

    useEffect(
        function getUserProdutcs(){
            const dataFecth = JSON.stringify(localStorage.getItem("allUsersProducts"));
            userProducts = dataFecth;
        },[])

    return(
        <>
            {userProducts.map(item=>(
                <CarrinhoItem key={item} />
            ))}
        </>
    )
}

export default RegistoDeCarrinho;