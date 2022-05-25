import React from "react";
import "./style.css";

const Login = () => {
  return (
    <>
      <div class="main">
        <div class="container_form">
          <h1>Login</h1>
          <input type="text" id="name" placeholder="Email or Username"></input>
          <input type="number" id="password" placeholder="Password"></input>
          <button>Iniciar Sessão</button>
          <a href="/">Esqueceu-se da Password?</a>
          <span>Não tem uma conta?</span>
          <a href="/">Clique Aqui</a>
        </div>
      </div>
    </>
  );
};

export default Login;
