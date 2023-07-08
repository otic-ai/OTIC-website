import React from 'react'

const Mission = () => {
  return (
    <div className='mission'>
        <img src="mission.png"></img>
        <div className='mission-column'>
          <div style={{height:'20px'}}></div>
            <div className='mission-aboutUs'>About Us</div>
            <div style={{height: '20px'}}></div>
            <div className='mission-header'>Mission is to bring AI to every business</div>
            <div style={{height: '20px'}}></div>
            <div className='mission-mission' >Our mission is to empower organizations with the tools and expertise to transform responsibly through AI and data-driven decision-making. We are committed to delivering innovative solutions that drive positive change, optimize operations, and create long-term value for our clients.</div>
        <div style={{height: '4vh'}}></div>
        <button className='mission-button'>
            About Us
        </button>
        </div>
       
    </div>
  )
}

export default Mission