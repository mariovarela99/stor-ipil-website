import React from "react"
import "./style.css"

function btnNext({content}){
    return(
        <div className="btn-next">
            <button>{content} </button>
        </div>
    )
}

export default btnNext;