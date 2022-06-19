import React, {useEffect, useState} from "react"
import {Link} from "react-router-dom"
import "./style.css"

import ImgModalSuccess from "../../assets/img-modal-success.svg"
function ModalSuccessAuth(){

    const [allUsersProducts, setAllUsersProducts] = useState([])

    useEffect(
        function getAllUsersProducts(){
            const dataFetch = JSON.parse(localStorage.getItem("all-users-products")) || [];
            setAllUsersProducts(dataFetch);
    },[allUsersProducts])

    return(
        <div className="modal-success-auth modal-success-buy">
            <div className="modal-success-auth-container">
                <img src={ImgModalSuccess} alt="Successfull" />
                <h2>Sucesso!</h2>
                <p>A Sua compra foi feita com sucesso</p>
                <p>Foram comprados {allUsersProducts.length} produtos</p>
                <p>Valor total {allUsersProducts.length * 250},000,00Kz </p>
                <Link to="/">Ok</Link>
            </div>
        </div>
    )
}

export default ModalSuccessAuth