import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <>
      <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="footer-coluna">
              <h4> Usefull Liinks</h4>
              <ul>
                <li>
                  <a href="/">HomePage</a>
                </li>
                <li>
                  <a href="/"> Produtos</a>
                </li>
                <li>
                  <a href="/">Carrinho</a>
                </li>
                <li>
                  <a href="/">AboutUS</a>
                </li>
                <li>
                  <a href="/">ContactUS</a>
                </li>
                <li>
                  <a href="/">Login</a>
                </li>
              </ul>
            </div>
            <div class="footer-coluna">
              <h4>Métodos de Pagamento</h4>
              <ul>
                <li>
                  <a href="/">Pagamentos por Referência</a>
                </li>
                <li>
                  <a href="/">BAI Directo</a>
                </li>
                <li>
                  <a href="/">Multicaixa Express</a>
                </li>
                <li>
                  <a href="/">PayPal</a>
                </li>
                <li>
                  <a href="/">Visa</a>
                </li>
              </ul>
            </div>
            <div class="footer-coluna">
              <h4>Siga-Nos</h4>
              <div class="social-links">
                <p>storipil@gmail.com</p> <br></br>
                
                <p>Stor Ipil</p> <br></br>

                <p>@Storipil</p><br></br>
                
                <p>Storipil.Official</p><br></br>

              </div>
			  <br></br>
            </div>
            <div class="footer_final">
              <p>
                <a href="/">@StoriPil -All rights reserved.</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
