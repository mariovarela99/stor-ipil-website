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

    function mostre(e){
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

        }
        
    }

    return(
        <div className="cadastro">
            <div className="cadastro-container">
                <h2>Criar Conta</h2>

                <form action="">
                    <div>
                        <input type="text" placeholder="Primeiro nome" onChange={(e)=>newUser.name = e.target.value} />
                        <input type="text" placeholder="Apelido" onChange={(e)=>newUser.surname = e.target.value} />
                    </div>
                    <div>
                        <input type="text" placeholder="NIF" onChange={(e)=>newUser.nif = e.target.value} />
                        <input type="text" placeholder="Email ou Username" onChange={(e)=>newUser.contact = e.target.value} />
                    </div>
                    <div>
                        <input type="password" placeholder="Palavra-Passe" onChange={(e)=>newUser.password = e.target.value} />
                        <input type="password" placeholder="Confirmar Palavra-Passe" onChange={(e)=>newUser.cpassword = e.target.value} />
                    </div>
                    <div className="btn-create-account">
                        <button onClick={e=>mostre(e)}>Criar Conta</button>
                    </div>
                </form>
            </div>
        </div>
    ) 
}

export default Cadastro;