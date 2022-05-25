import React from "react";
import "./style.css";

function Calculodocarrinho() {
  return (
    <>
      <div>
            <table class="tab_prod">
                <tr>
                    <td><b>TOTAL DE PRODUTOS</b></td><td><b>2</b></td>
                </tr>
                <tr>
                    <td><b>TOTAL</b></td><td><b>250.000,00 Kzs</b></td>
                </tr>
                <tr>
                    <td colspan="2" class="info_preco">Preço com IVA incluindo à taxa em vigor excepto livros</td>
                </tr>
            </table>
      </div>
    </>
  );
}

export default Calculodocarrinho;
