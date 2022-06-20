import React from "react";
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter} from "react-icons/fa"

import "./style.css";


const Footer = () => { 
  return (<> 
  <footer class="footer">
  	 <div class="container"> 
  	 	<div class="row">
  	 		<div class="footer-col">
  	 			<h4>company</h4>
  	 			<ul>
  	 				<li><a href="#">about us</a></li>
  	 				<li><a href="#">our services</a></li>
  	 				<li><a href="#">privacy policy</a></li>
  	 				<li><a href="#">affiliate program</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>get help</h4>
  	 			<ul>
  	 				<li><a href="#">FAQ</a></li>
  	 				<li><a href="#">shipping</a></li>
  	 				<li><a href="#">returns</a></li>
  	 				<li><a href="#">order status</a></li>
  	 				<li><a href="#">payment options</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>online shop</h4>
  	 			<ul>
  	 				<li><a href="#">watch</a></li>
  	 				<li><a href="#">bag</a></li>
  	 				<li><a href="#">shoes</a></li>
  	 				<li><a href="#">dress</a></li>
  	 			</ul>
  	 		</div> 
  	 		<div class="footer-col"> 
  	 			<h4>follow us</h4>
  	 			<div class="social-links">
					<div>
  	 					<a href="#"><i><FaFacebook/></i>
						<p>Facebook</p>
						</a>
					</div>
					<div>
	  	 				<a href="#"><i><FaInstagram/></i>
						<p>Instagram</p>
						</a>
					</div>
					<div>
	  	 				<a href="#"><i><FaYoutube/></i>
						<p>YouTube</p>
						</a>
					</div>
					<div>
	  	 				<a href="#"><i><FaTwitter/></i>
						<p>Twitter</p>
						</a>
					</div>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
  </>)
};

export default Footer;
