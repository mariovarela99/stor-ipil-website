import React from "react"
import "./style.css"

function TabelaCalculoCarrinho(){
    return(
        <>
            <div className="carrinho-tabela-calculo">
                <table>
                    <tr>
                        <td className="carrinho-tabela-line-right">Total de Produtos</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td className="carrinho-tabela-line-right">Total de valor</td>
                        <td>350.000,00Kz</td>
                    </tr>
                </table>
                <p>Preço com IVA incluído à taxa em vigor excepto livros</p>
            </div>
        </>
    )
}

export default TabelaCalculoCarrinho