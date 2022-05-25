import React from "react"
import "./style.css"

import logoHuawei from "../../assets/logo-huawei.png"
import logoToshiba from "../../assets/logo-toshiba.png"
import logoLenovo from "../../assets/logo-lenovo.png"
import logoSony from "../../assets/logo-sony.png"
import logoMicrosoft from "../../assets/logo-microsoft.png"

function Marcas(){
    return(
        <>
            <div className="marcas">
                <h2>As nossas marcas de confiança</h2>

                <div className="marca-container">
                    <ul>
                        <li><img src={logoHuawei} alt="Huawei" /> </li>
                        <li><img src={logoToshiba} alt="Huawei" /> </li>
                        <li><img src={logoLenovo} alt="Lenovo" /> </li>
                        <li><img src={logoSony} alt="Sony" /> </li>
                        <li><img src={logoMicrosoft} alt="Microsoft" /> </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Marcas;