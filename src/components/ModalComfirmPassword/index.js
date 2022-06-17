import ReaModalSuccessAutht,{useState, useEffect} from "react"
import {Link} from "react-router-dom"
import "./style.css"

import ImgModalSuccess from "../../assets/img-modal-success.svg"
import ModalSuccess from "../ModalSucessAuth"

function ModalSuccessAuth(){
    const [userEmail, setUserEmail] = useState("")
    const [allUsers, setAllUsers] = useState([]);
    const [user, setUser] = useState(
        {
            password:"",
        }
    )
    useEffect(
        function getAllUsers(){
            const dataFetch = JSON.parse(localStorage.getItem("stor-ipil-users")) || [{contact:""}];
            setAllUsers(dataFetch);
    },[])
    useEffect(
        function getUserEmail(){
            const dataFetch = JSON.stringify(localStorage.getItem("userIdLogin"));
            setUserEmail(dataFetch)
        }
    ,[])

    function ComfirmAccount(){
            let decision = false;
            
            allUsers.forEach(element => {
                if(element.password === user.password)
                    decision = true;
            });
            if(decision)
            {
                alert("Usuário existente")
            }else{
                alert("Usuário não encontrado");
            }
    }
    return(
        <div className="modal-success-auth modal-comfirm-auth">
            <div className="modal-success-auth-container">
                <img src={ImgModalSuccess} alt="Successfull" />
                <h2>Comfirmar conta</h2>
                <input type="text" value={userEmail} />
                <input type="password" placeholder="Digite a sua palavra-passe" onChange={(e)=>user.password = e.target.value} required/>
                <div className="Link-me" onClick={()=>ComfirmAccount()}>Comfirmar</div>
            </div>
        </div>
    )
}

export default ModalSuccessAuth