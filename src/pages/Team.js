import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faTwitter, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Team = () => {
  return (
    <section id='teams' style={{position:'relative'}}>
       <div className='team'>Meet the Team</div>
       <div className='team-card'>
        <div className='content'>   
      <div style={{maxWidth:'85%',fontSize:'0.825rem',fontWeight:'400', marginLeft:'1.5rem' }}>
        <img style={{marginLeft:'10%'}} src='divblogentrythumb@2x.png' ></img>
        <div style={{height:'20px'}}></div>
       <div style={{fontSize:'0.95rem', fontWeight:'500'}}>Nesta Katende</div>
       <div style={{height:'10px'}}></div>
       Our esteemed CEO, a visionary leader with a proven track record of driving success. With extensive industry expertise and a strategic mindset, they spearhead our organization towards excellence.
       <div style={{height:'1.0rem'}}></div>
       <div class="social-links" style={{display:'flex', flexDirection:'row'}}>
       <div style={{width:'1.5rem'}}></div>
  	 				<a href="#"><FontAwesomeIcon icon={faFacebook} style={{color:'#999999',}} /></a>
  	 				<div style={{width:'0.5rem'}}></div>
            <a href="#"><FontAwesomeIcon icon={faTwitter}  style={{color:'#999999'}}  /></a>
  	 				<div style={{width:'0.5rem'}}></div>
  	 				<a href="#"><FontAwesomeIcon icon={faLinkedin}  style={{color:'#999999'}}  /></a>
  	 			</div>
           <div style={{height:'0.5rem'}}></div>
      </div>  
        </div>   
        <div className='content'>   
      <div style={{maxWidth:'85%',fontSize:'0.825rem',fontWeight:'400', marginLeft:'1.5rem' }}>
        <img style={{marginLeft:'10%'}} src='divblogentrythumb@2x.png' ></img>
        <div style={{height:'20px'}}></div>
       <div style={{fontSize:'0.95rem', fontWeight:'500'}}>Nesta Katende</div>
       <div style={{height:'10px'}}></div>
       Our esteemed CEO, a visionary leader with a proven track record of driving success. With extensive industry expertise and a strategic mindset, they spearhead our organization towards excellence.
       <div style={{height:'1.0rem'}}></div>
       <div class="social-links" style={{display:'flex', flexDirection:'row'}}>
       <div style={{width:'1.5rem'}}></div>
  	 				<a href="#"><FontAwesomeIcon icon={faFacebook} style={{color:'#999999',}} /></a>
  	 				<div style={{width:'0.5rem'}}></div>
            <a href="#"><FontAwesomeIcon icon={faTwitter}  style={{color:'#999999'}}  /></a>
  	 				<div style={{width:'0.5rem'}}></div>
  	 				<a href="#"><FontAwesomeIcon icon={faLinkedin}  style={{color:'#999999'}}  /></a>
  	 			</div>
           <div style={{height:'0.5rem'}}></div>
      </div>  
        </div>  
      
        
       </div>
    </section>
  )
}

export default Team