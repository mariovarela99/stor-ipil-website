import React from "react"
import {Link} from "react-router-dom"

import "./style.css"

import Header from "../../components/header"
import CardProduto from "../../components/cardProduto1"

function AllProducts(){
    return(
        <>
            <Header />
            <div className="all-products">
                <h2>Todos os produtos</h2>
                <ul>
                    <li>
                        <Link to="/product-details">
                            <CardProduto />
                        </Link>
                    </li>
                    <li>
                        <Link to="/product-details">
                            <CardProduto />
                        </Link>
                    </li>
                    <li>
                        <Link to="/product-details">
                            <CardProduto />
                        </Link>
                    </li>
                    <li>
                        <Link to="/product-details">
                            <CardProduto />
                        </Link>
                    </li>
                    <li>
                        <Link to="/product-details">
                            <CardProduto />
                        </Link>
                    </li>
                    <li>
                        <Link to="/product-details">
                            <CardProduto />
                        </Link>
                    </li>
                    <li>
                        <Link to="/product-details">
                            <CardProduto />
                        </Link>
                    </li>
                    <li>
                        <Link to="/product-details">
                            <CardProduto />
                        </Link>
                    </li>
                </ul>
            </div>
        </>
        
    )
}

export default AllProducts;