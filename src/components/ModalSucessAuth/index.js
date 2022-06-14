import React from "react"
import {Link} from "react-router-dom"
import "./style.css"

import ImgModalSuccess from "../../assets/img-modal-success.svg"
function ModalSuccessAuth(){
    return(
        <div className="modal-success-auth">
            <div className="modal-success-auth-container">
                <img src={ImgModalSuccess} alt="Successfull" />
                <h2>Sucesso!</h2>
                <p>Seja Bem-Vindo à StorIPIL</p>
                <p>A sua conta foi criada com sucesso</p>
                <Link to="/">Ok</Link>
            </div>
        </div>
    )
}

export default ModalSuccessAuth