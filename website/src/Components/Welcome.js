import React from 'react'
import FadeTransition from './fade'

const Welcome = () => {
  return (
    <main>
        <div className='home' >
          <FadeTransition>
       <div className='flex'><div className='top'>hggfgfgfg</div>
       <div className='welcome'>Unlocking the Potential of Intelligent Technology</div>

    <div className='welcomebelow'>Ignite your business with unparrelled AI-powered Transformation and Data-Driven Excellence</div>
  <div className='welcomeButtonsection'>
   <button className='welcomeButton'>Get Started</button>
   </div>
       </div>  
       </FadeTransition>   
   <div style={{width: '100px'}}></div>
   <img className='welcome-image' src='https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRhdGElMjBzY2llbmNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60' ></img>
   </div>
   <div className='tagline' style={{position: 'relative'}}><div className='tagline-text '>
         
         <div className='flex'><div className='top'>hggfgfgfg</div>
         <FadeTransition>
       <div className='welcome'>Unlocking the Potential of Intelligent Technology</div>

    <div className='welcomebelow'>Ignite your business with unparrelled AI-powered Transformation and Data-Driven Excellence</div>
  <div className='welcomeButtonsection'>
   <button className='welcomeButton'>Get Started</button>
   </div>
   </FadeTransition>
       </div> 
          </div>   
     <img  src='https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRhdGElMjBzY2llbmNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'></img>
     </div> 
   </main>
  )
}

export default Welcome