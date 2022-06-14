import React, {useState, useEffect} from "react";
import "./style.css";

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

    let decision = false;

    allUsers.forEach(item => {
      if(item.contact === user.contact && item.password === user.password)
        decision = true;
    });

    if(decision)
      alert("Sessão iniciada com sucesso")
    else  
     alert("Conta não encontrada");
  }

  return (
    <>
      <div className="main">
        <div className="container_form">
          <h1>Login</h1>
          <input type="text" id="name" placeholder="Email or Username" onChange={(e)=>user.contact = e.target.value}></input>
          <input type="number" id="password" placeholder="Password"  onChange={(e)=>user.password = e.target.value}></input>
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
