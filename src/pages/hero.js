import React from 'react'

const Hero = () => {
  return (
    <section id='home' style={{height:'80vh'}}>
        <div className="div" style={{backgroundImage:'frame-34@2x.png'}}>
      <div style={{marginLeft:'10vw'}} >
        <div className="unlocking-thel" style={{fontSize:'2.1rem',marginleft:'10vw', margintop:'30vh'}}>
          <div style={{height:'30vh'}}></div>
          Unlocking the Potential of Intelligent Technology
          <div>
            <div style={{height:'20px'}}></div>
              Ignite Your Business with Unparalleled AI-Powered Transformation and
          Data - Driven Excellence</div>
          <a href='#services'><div className="get-started" style={{backgroundColor:'orange', width:'172px',
        borderRadius:'4px', top:'20px', gap:'10px', height:'42px',textAlign:'center'}}>Get started
   
        </div></a>   
        </div>
      </div>
      
    
      <div className="divrating-area">
        <div className="divrating">
          <div className="starsvg">
            <img className="starsvg-icon" alt="" src="/starsvg.svg" />
          </div>
          <div className="starsvg">
            <img className="starsvg-icon" alt="" src="/starsvg.svg" />
          </div>
          <div className="starsvg">
            <img className="starsvg-icon" alt="" src="/starsvg.svg" />
          </div>
          <div className="starsvg">
            <img className="starsvg-icon" alt="" src="/starsvg.svg" />
          </div>
          <div className="starsvg">
            <img className="starsvg-icon" alt="" src="/starsvg.svg" />
          </div>
        </div>
        <b className="based-on-10000">Based on 10,000+ reviews on</b>
      </div>
      <div className="horixontal-logo-1" />
      <div className="child" />
     

      </div>
    
    </section>
  )
}

export default Hero