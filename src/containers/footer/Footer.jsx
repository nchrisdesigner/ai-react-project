import React from 'react'
import './footer.css'
import gpt3logo from '../../assets/logo.svg'

function Footer() {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h2>Do you want to step into the future before others</h2>
      </div>

      <div className='gpt3__footer-btn'>
        <p>Request Early Access</p>
      </div>

      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <img src={gpt3logo} alt="logo" />
          <p>Chesterwood K12 182 DK</p>
        </div>

        <div className='gpt3__footer-links_div'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>

        <div className='gpt3__footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>

        <div className='gpt3__footer-links_div'>
          <h4>Get in touch</h4>
          <p>Chesterwood K12 182 DK</p>
          <p>085-123567</p>
          <p>info@gpt.com</p>
        </div>

      </div>

      <div className='gpt3__footer-copyright'>
        <p>@2022 GPT-3. All rights Reserved.</p>
      </div>
    </div>

    
  )
}

export default Footer
