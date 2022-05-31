import React, {useState} from "react"
import "./style.css"
import Frame from "../frame3"

import frame01 from "../../assets/Frame01.png"
import frame02 from "../../assets/frame02.png"
import frame03 from "../../assets/frame03.jpg"
import frame04 from "../../assets/frame04.jpg"

import btnAvancar from "../../assets/btn-avançar.png"
function ListFrame({quantity}){
    const [listframes, setListFrames] = useState([frame01, frame02, frame03, frame04]);
    return(
        <div className="list-frame">
            <button className="btn-avancar">
                <img src={btnAvancar} alt="Avançar" />
            </button>
            <ul>
                {
                    listframes.map(item =>(
                        <a href="">
                            <li><Frame image={item} /> </li>
                        </a>
                    ))
                }
            </ul>
            <button className="btn-voltar">
                <img src={btnAvancar} alt="Avançar" />
            </button>
        </div>
    )
}

export default ListFrame;