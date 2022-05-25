import React from "react";
import "./style.css";

const Footer2 = () => {
  return (
    <footer>
      <div class="contentor">
        <div class="logo">
          <img src="Logo.png" alt="logo"/>
         
        </div>
         <div class="divisao1">
            <hr/>
          </div> 
        <div class="contactos">
          <div class="contactos2">
            <h2>Contacte-nos</h2>
              <table>
              <tr>
                <td>storipil@gmail.com</td>
                <td class="mail"><img src="Mail.png" alt=" "/></td>
              </tr>
              <tr>
                <td>storipil.official</td>
                <td class="Linkedin"><img src="./Linkedin.png" alt=" "/></td>
              </tr>
              <tr>
                <td>Store Ipil</td>
                <td class="Facebook"> <img src="Facebook.png" alt=" "/></td>
              </tr>  
              <tr>
                <td>@storipil</td>
                <td class="Instagram"><img src="Instagram.png" alt=" "/></td>
              </tr>
            </table>
          </div>
          
        </div>
        <div class="divisao2">
            <hr/>
          </div>
        <div class="novidades">
          <h2>News-letter</h2>
          <input type="email" placeholder="Digite o teu email" name="newsletter" class="email"/><br/> <br/>
          <input type="button" value="SUBSCREVER" name="subscrever" class="botao"/>
          <p>Vai receber emails sobre promoções, artigos e mudanças<br/>
             nas políticas de privacidade e preços baixos, fique a par <br/>
             de todas as novidades da StorIpil.
          </p>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer2;
