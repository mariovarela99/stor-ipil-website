import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Login = () => {
  return (
    <>
      <div class="main">
        <div class="container_form">
          <h2>Login</h2>
          <input type="text" id="name" placeholder="Email or Username"></input>
          <input type="number" id="password" placeholder="Password"></input>
          <button>Iniciar Sessão</button>
          <Link to="/" class="forgetlink">
            Esqueceu-se da Password?
          </Link>
          <div class="line_login"></div>
          <div class="accountlink">
            <span>Não tem uma conta?</span>
            <Link to="/">Crie uma conta</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
