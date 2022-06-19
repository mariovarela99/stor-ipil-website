import React, {useState, useEffect} from "react"

import "./style.css"

function TabelaCalculoCarrinho(){

    const [allUsersProducts, setAllUsersProducts] = useState([])

    useEffect(
        function getAllUsersProducts(){
            const dataFetch = JSON.parse(localStorage.getItem("all-users-products")) || [];
            setAllUsersProducts(dataFetch);
    },[allUsersProducts])

    return(
        <>
            <div className="carrinho-tabela-calculo">
                <table>
                    <tr>
                        <td className="carrinho-tabela-line-right">Total de Produtos</td>
                        <td>{allUsersProducts.length}</td>
                    </tr>
                    <tr>
                        <td className="carrinho-tabela-line-right">Total de valor</td>
                        <td>{250*allUsersProducts.length},000,00Kz</td>
                    </tr>
                </table>
                <p>Preço com IVA incluído à taxa em vigor excepto livros</p>
            </div>
        </>
    )
}

export default TabelaCalculoCarrinho