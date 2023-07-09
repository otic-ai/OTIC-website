import React from 'react'
import PercentageCounter from './increase'

const Data = () => {
  return (
    <section id='data' className='data'>
    <div className='title' >Why data & AI?</div>
    <div className='sub-title'>Organizations recognize that data & AI are catalysts for enterprise reinvention, but also know there’s work ahead to fully capitalize on data & AI’s potential.</div>
    <div style={{height:'30px'}}></div>
    <div className='card'>
        <div className='content'>
            <div className='percentag'><PercentageCounter maxCount={97} />
             </div>
           <div className='under'>  of executives said generative AI will be transformative to their company and industry.</div>
        </div>
        <div className='content'>
            <div className='percentag'><PercentageCounter maxCount={67} />
             </div>
           <div className='under'>  of organizations plan to increase their level of spending in technology and are prioritizing investments in data & AI.
           </div>
        
        </div>
        <div className='content'>
            <div className='percentag'><PercentageCounter maxCount={56} />
             </div>
           <div className='under'>  of respondents acknowledge data readiness is the top challenge to adopt AI.</div>
        </div>
        <div className='content'>
            <div className='percentag'><PercentageCounter maxCount={93} />
             </div>
           <div className='under'> of executives surveyed support some level of government regulation around AI.</div>
        </div>
        <div className='content'>
            <div className='percentag'><PercentageCounter maxCount={95} />
             </div>
           <div className='under'> of organizations are increasing their investment as a % of revenue (an increase from 89% over the last 3 months).</div>
        </div>  
        <div className='content'>
            <div className='percentag'><PercentageCounter maxCount={70} />
             </div>
           <div className='under'> organizations have specific training programs planned for 2023 to ensure workers are prepared to use generative AI tools.</div>
        </div> 
    </div>
    </section>
  )
}

export default Data