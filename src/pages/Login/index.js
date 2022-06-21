import React, {useState, useEffect} from "react";
import "./style.css";

import ModalLoginAuth from "../../components/ModalLoginAuth"

const Login = () => {
  const [user, setUser] = useState({contact:"", password:""})
  var [allUsers, setAllUsers] = useState([]);

  useEffect(
    function getAllUsers(){
      const dataFecth = JSON.parse(localStorage.getItem("stor-ipil-users")) || [];
      allUsers = dataFecth;
      console.log(allUsers);
    }, [])

  function hundleEnter(e){
    e.preventDefault();

    if(user.contact.trim().length < 1)
        {
            window.alert("O campo de Email deve ser preenchido")
        }else if(user.password.trim().length < 6)
        {
            window.alert("A sua password deve conter no mínimo 6 caracteres!")
        }else{
          let decision = false;
      
          allUsers.forEach(item => {
            if(item.contact === user.contact && item.password === user.password)
              decision = true;
          });
      
          if(decision){
            localStorage.setItem("userIdLogin", JSON.stringify(user.contact))
            document.querySelector(".modal-success-auth").style.display = "flex";
          }
          else  
           alert("Conta não encontrada");
          }
        }

  return (
    <>
      <ModalLoginAuth />
      <div className="main">
        <div className="container_form">
          <h1>Login</h1>
          <input type="email" id="email" placeholder="Email or Username" onChange={(e)=>user.contact = e.target.value}></input>
          <input type="password" id="password" placeholder="Password"  onChange={(e)=>user.password = e.target.value}></input>
          <button  onClick={(e)=>hundleEnter(e)}>Iniciar Sessão</button>
          <a href="/">Esqueceu-se da Password?</a>
          <span>Não tem uma conta?</span>
          <a href="/">Clique Aqui</a>
        </div>
      </div>
    </>
  );
};

export default Login;
