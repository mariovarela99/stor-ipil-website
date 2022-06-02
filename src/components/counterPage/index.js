import React from "react"
import "./style.css"

import {FaArrowLeft,FaArrowRight} from "react-icons/fa"

function CounterPage(){
    return(
        <div className="counter-page">
            <div>Página <span>{"1"}</span> de <span>{"10"}</span> </div>
            <div className="counter-item">
                <span><FaArrowLeft/> </span>
                <p className="active">{"1"}</p>
                <p>{"2"}</p>
                <span><FaArrowRight/> </span>
            </div>
        </div>
    )
}

export default CounterPage;