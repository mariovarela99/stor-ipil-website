import React from "react"

import "./style.css"
import ModalSuccessBuy from "../ModalSuccessBuy"

function btnNext({content}){
    function ShowAll(){
        document.querySelector(".modal-success-buy").style.display ="flex"
    }
    return(
        <div className="btn-next">
            <button onClick={()=>ShowAll()}>{content} </button>
        </div>
    )
}

export default btnNext;