import React from "react"


import logoHuawei from "../../assets/logo-huawei.png"

function Marcas(){
    return(
        <>
            <div className="marcas">
                <h2>As nossas marcas de confiança</h2>

                <div className="container-marca">
                    <ul>
                        <li><img src={logoHuawei} alt="logoHuawei" /> </li>
                        <li><img src={logoHuawei} alt="logoHuawei" /> </li>
                        <li><img src={logoHuawei} alt="logoHuawei" /> </li>
                        <li><img src={logoHuawei} alt="logoHuawei" /> </li>
                        <li><img src={logoHuawei} alt="logoHuawei" /> </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Marcas;