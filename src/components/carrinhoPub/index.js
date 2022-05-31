import React from "react"
import "./style.css"

import pub01 from "../../assets/pub01.png"

function CarrinhoPub(){
    return(
        <div className="carrinho-pub">
            <img src={pub01} alt="Publicidade" />
        </div>
    )
}

export default CarrinhoPub;