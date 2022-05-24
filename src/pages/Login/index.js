import React from "react";
import "./style.css";

const Login = () => {
  return( <>
  <div class="main">
      <div class="container_form">
          <h2>Login</h2>
          <input type="text" id="name" placeholder="Email or Username"></input>
          <input type="number" id="password" placeholder="Password"></input>
          <button>Iniciar Sessão</button>
          <a href="" class="forgetlink">Esqueceu-se da Password?</a>
          <div class="line"></div>
          <div class="accountlink">
          <span>Não tem uma conta?</span>
           <a href="" >Crie uma conta</a>
          </div>
      </div>
  </div>
  </>);
};

export default Login;
