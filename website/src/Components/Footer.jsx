import React from "react"
import { blog } from "../../../dummydata"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <span>Far far away, behind the word mountains</span>
          </div>
          <div className='right row'>
            <input type='text' placeholder='Enter email address' />
            <i className='fa fa-paper-plane'></i>
          </div>
        </div>
      </section>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>OTIC</h1>
            
            

            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
          </div>
          <div className='box link'>
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Blog</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className='box link'>
            <h3>Company</h3>
            <ul>
              <li>Contact Us</li>
              <li>Pricing</li>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div>
          
          <div className='box last'>
            <h3>Have any Questions?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                +256 756 7222263
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                info@otic.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        
      </div>
    </>
  )
}

export default Footer
