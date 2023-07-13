import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faTwitter, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <section id='contact-footer' style={{backgroundColor:'#040458'}} >
      <div style={{height:'10vh'}}></div>
      <div style={{display:'flex',flexDirection:'column',textAlign:'center', maxWidth:'90vw'}}>
         <div className="divfooter-one-main-wrapper">
        <div className="divfooter-singl-wized">
          <div className="link-02svg">
            <img className="link-02svg-child" alt="" src="/frame-6@2x.png" />
          </div>
          <div className="divbody">
            <div className="pdsic">
              <div className="our-comprehensive-suite-of-ser-wrapper">
                <div className="our-comprehensive-suite">
                  Our comprehensive suite of services empowers you to soar above
                  the competition and leave an indelible mark on your industry    
                </div>  
              </div>
            </div>
          </div>
          <div style={{display:'flex', flexDirection:'row'}}>
    <a href="#"><FontAwesomeIcon icon={faFacebook} size='2x' style={{color:'#999999',}} /></a>
  	 				<div style={{width:'0.5rem'}}></div>
            <a href="#"><FontAwesomeIcon icon={faTwitter} size='2x'  style={{color:'#999999'}}  /></a>
  	 				<div style={{width:'0.5rem'}}></div>
  	 				<a href="#"><FontAwesomeIcon icon={faLinkedin} size='2x'  style={{color:'#999999'}}  /></a>
   </div>    
        </div>
        <div style={{width:'5vw'}}></div>
        <div style={{height:''}}></div>
        <div className="divfooter-singl-wized1">
          <div style={{display:'flex', flexDirection:'row', maxWidth:'80vw'}}>
            <div>
          <b className="subscribe">Company</b>
          <div className="list">
            <div className="item-link">Home</div>
            <div className="item-link1">About Us</div>
            <div className="item-link2">Services</div>
            <div className="item-link1">Contact</div>
          </div>
          
          </div>
          <div className="show-small"  style={{width:'40vw'}}></div>
          <div className="show-small" style={{width:'9.2rem'}}>
          <b className="subscribe">Contact Info</b>
          <div className="list1">
          <div style={{height:'10px'}}></div>
            <div  style={{color:'white'}}>info@otic.com</div>
            <div style={{color:'grey'}} >+256 706377254</div>
            <div style={{color:'grey'}}  >+256 751938178</div>
            <div style={{color:'grey'}}  >+256 751938178</div>
          </div>
        </div>
          </div>
        </div>
        <div style={{width:'5vw'}}></div>
        <div className="divfooter-singl-wized2">
          <b className="subscribe">Use Cases</b>
          <div className="list1">
            <div className="item-link1">AI in schools</div>
            <div className="item-link1">AI in Marketers</div>
            <div className="item-link1">AI in Banks</div>
            <div className="item-link1">AI in Schools</div>
          </div>
        </div>
        <div style={{width:'10vw'}}></div>
        <div className="show-contact">
          <b className="subscribe">Contact Info</b>
          <div className="list1">
          <div style={{height:'10px'}}></div>
            <div  style={{color:'white'}}>info@otic.com</div>
            <div style={{color:'grey'}} >+256 706377254</div>
            <div style={{color:'grey'}}  >+256 751938178</div>
            <div style={{color:'grey'}}  >+256 751938178</div>
          </div>
        </div>
      </div>
      </div>
    <div style={{width:'80vw',display:'flex' ,flexDirection:'row',textAlign:'center', color:'white',
  backdropFilter:'blur(20px)',marginLeft:'10vw', backgroundColor:'rgba(230, 229, 255, 0.25)'}}>
      <div style={{width:'20px'}}></div>
    <span style={{color:'orange'}}>Otic </span>2023. All Rights Reserved.
  <div style={{width:'65%'}}></div><span style={{color:'orange'}}>Teams</span>
  <div style={{width:'20px'}}></div>
  <span style={{color:'orange'}}>Privacy</span><div style={{width:'20px'}}></div><span style={{color:'orange'}}>Policy</span>
  </div>
    
      
    </section>
  )
}

export default Footer