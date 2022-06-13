import React from "react"
import "./style.css"

function Cadastro(){
    return(
        <div className="cadastro">
            <div className="cadastro-container">
                <h2>Criar Conta</h2>

                <form action="">
                    <div>
                        <input type="text" placeHolder="Primeiro nome" />
                        <input type="text" placeHolder="Apelido" />
                    </div>
                    <div>
                        <input type="text" placeHolder="Email ou Username" />
                        <input type="text" placeHolder="NIF" />
                    </div>
                    <div>
                        <input type="password" placeHolder="Palavra-Passe" />
                        <input type="password" placeHolder="Confirmar Palavra-Passe" />
                    </div>
                    <div className="btn-create-account">
                        <button>Criar Conta</button>
                    </div>
                </form>
            </div>
        </div>
    ) 
}

export default Cadastro;