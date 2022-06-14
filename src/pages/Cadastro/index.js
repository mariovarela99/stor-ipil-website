import React, {useState} from "react"
import "./style.css"

function Cadastro(){

    const [newUser, setNewUser] = useState({
        name:"",
        surname:"",
        contact:"",
        nif:"",
        password:"",
        cpassword:"",
    })
    const [allUsers, setAllUsers] = useState([]);

    function AddUser(e){
        e.preventDefault();

        if(newUser.name.length < 3 || newUser.surname.length < 3)
        {
            window.alert("O nome e o apelido deve conter mais de 3 caracteres!")
        }else if(newUser.nif.length < 6 || newUser.nif.length > 6)
        {
            window.alert("O NIF deve conter 6 caracteres!")
        }
        else if(newUser.cpassword !== newUser.password){
            window.alert("As palavra-passes devem ser iguais!")
        }
        else if(newUser.password.length < 6 || newUser.cpassword.length < 6)
        {
            window.alert("A sua palavra passe deve conter no mínimo 6 caracteres!")
        }else{
            let decision;
            allUsers.forEach(element => {
                if(element.contact === newUser.contact){
                    decision = false;
                }else{
                    decision = true;
                }

            });
            if(decision){
                allUsers.push({
                    name:newUser.name,
                    surname:newUser.surname,
                    contact:newUser.contact,
                    nif:newUser.nif,
                    password:newUser.password,
                    cpassword:newUser.cpassword,
                });
                setAllUsers(allUsers);
                localStorage.setItem("stor_ipil_users", allUsers);
                console.log(allUsers);
                window.alert("A sua conta foi criada com sucesso, obrigado.")
            }else{
                window.alert("Usuário existente, entre na sua conta!")
            }
        }
    }

    return(
        <div className="cadastro">
            <div className="cadastro-container">
                <h2>Criar Conta</h2>

                <form action="">
                    <div>
                        <input type="text" placeholder="Primeiro nome" onChange={(e)=>newUser.name = e.target.value} required/>
                        <input type="text" placeholder="Apelido" onChange={(e)=>newUser.surname = e.target.value} required/>
                    </div>
                    <div>
                        <input type="text" placeholder="NIF" onChange={(e)=>newUser.nif = e.target.value} required/>
                        <input type="email" placeholder="Email" onChange={(e)=>newUser.contact = e.target.value} required/>
                    </div>
                    <div>
                        <input type="password" placeholder="Palavra-Passe" onChange={(e)=>newUser.password = e.target.value} required/>
                        <input type="password" placeholder="Confirmar Palavra-Passe" onChange={(e)=>newUser.cpassword = e.target.value} required/>
                    </div>
                    <div className="btn-create-account">
                        <button onClick={e=>AddUser(e)}>Criar Conta</button>
                    </div>
                </form>
            </div>
        </div>
    ) 
}

export default Cadastro;