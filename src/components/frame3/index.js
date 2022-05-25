import React from "react"
import "./style.css"

import frame01 from "../../assets/Frame01.png"
import btnHand from "../../assets/hand.png"

function Frame(){
    return(
        <>
            <div className="frame">
                <div className="frame-image">
                    <img src={frame01} alt="Frame" />
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