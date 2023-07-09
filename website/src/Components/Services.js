import React from 'react'

const Services = () => {
  return (
    <section id='services' >
    <div className='services'>
        <div style={{height: '20px'}}></div>
        <div className='services-header'>Services</div>
        <div style={{ height: '50px'}}></div>
        <div className='services-card'>
            <div className='services-card-content' >
              <img src='robots.png'></img>
              
              <div className='services-card-content-title'>AI Strategy and Roadmap Development</div>
          <div style={{height:'20px'}}></div>
           <div className='services-card-content-div'>
           Unleash your organization's full potential with our visionary AI strategies, custom-tailored to your unique goals and aspirations. </div>
            <div style={{height: '50px'}}></div>
            <div className='services-card-content-discover'>Discover More  </div>
            </div>
            <div className='services-card-content' >
              <img src='robots.png'></img>
             
              <div className='services-card-content-title'>Responsible AI Consulting</div>
          <div style={{height:'20px'}}></div>
           <div className='services-card-content-div'>
           Our consultants help organizations develop AI governance frameworks, implement ethical guidelines, and address issues of bias, fairness, and privacy. 
            </div>
            <div style={{height: '50px'}}></div>
            <div className='services-card-content-discover'>Discover More  </div>
            </div>
            <div className='services-card-content' >
              <img src='robots.png'></img>
             
              <div className='services-card-content-title'>Advanced Analytics and Predictive Modeling</div>
          <div style={{height:'20px'}}></div>
           <div className='services-card-content-div'>
           Our team of data scientists embarks on an exhilarating expedition through your data, unearthing invaluable insights that become the bedrock of your decision-making process. 
           </div>
            <div style={{height: '50px'}}></div>
            <div className='services-card-content-discover'>Discover More  </div>
            </div>
        </div>
        
        
    </div>
    </section>
  )
}

export default Services