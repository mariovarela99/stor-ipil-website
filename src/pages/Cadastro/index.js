import React from "react";
import "./style.css";

const Cadastro = () => {
  return( <>
        <div className="main_cadastro">
            <div class="cadastro_container">
                <h2>Cadastro</h2>
                <div class="sections_cadastro">
                    <div class="sections_inputs">
                        <input type="text" placeholder="Primeiro nome"></input>
                        <input type="text" placeholder="Apelido"></input>
                    </div>
                    <div class="sections_inputs">
                        <input type="text" placeholder="Email or Usarname"></input>
                        <input type="text" placeholder="NIF"></input>
                    </div>
                    <div class="sections_inputs">
                        <input type="password" placeholder="Palavra-passe"></input>
                        <input type="password" placeholder="Confirmar palavra-passe"></input>
                    </div>
                   
                </div>
                <button>Criar conta</button>
            </div>
        </div>
  </>);
};

export default Cadastro;