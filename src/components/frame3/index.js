import React from "react"
import "./style.css"

import btnHand from "../../assets/hand.png"

function Frame({image}){
    return(
        <>
            <div className="frame">
                <div className="frame-image">
                    <img src={image} alt="Frame" />
                </div>
                <div className="frame-horizontal-line"></div>
                <h3>Asus Portátil Gaming TUF Gaming F15 TUF506LH-HN218 15.6´´ i5-1030...</h3>
                <p>283995 Kz</p>
                <div className="btn-buy">
                    <img src={btnHand} alt="Comprar" />
                </div>
            </div>
        </>
    )
}

export default Frame;