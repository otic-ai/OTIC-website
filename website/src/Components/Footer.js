import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faTwitter, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

  return (
	<section id='contact'>
    <div className="contactus">
    <footer class="footer">
  	 <div class="container">
  	 	<div class="row">
  	 		<div class="footer-col">
  	 			<h4>company</h4>
  	 				<li style={{color: 'white'}}>Please <strong><a a href="mailto:info@oticanalytics.com" style={{color: "orange", fontSize: "20px"}} >Email </a></strong>us to find out more.</li>
  	 			
  	 			
  	 		</div>
  	 		
  	 	
  	 		<div class="footer-col">
  	 			<h4>follow us</h4>
  	 			<div class="social-links">
				   
  	 				<a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
  	 				<a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
  	 				<a href="#"><FontAwesomeIcon icon={faWhatsapp} /></a>
  	 				<a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
    </div>
	</section>
  );
}

export default Footer