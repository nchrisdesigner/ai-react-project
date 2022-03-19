import React from 'react'
import './header.css'
import ai from '../../assets/ai.png'

function Header() {
  return (
    <div className='gpt3__header section__padding' id="home">
      {/* Info - Title-Text-Buttons */}
      <div className='gpt3__header-content'>
        <h1>Let's Build Something amazing with GPT-3 OpenAI</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque dolore a quis deleniti, quo laboriosam in exercitationem ullam dolorem voluptate vero labore unde eum doloremque?</p>
        <div className='gpt3__header-content__input'>
          <input type="email" placeholder='Your Email Address' />
          <button type="button">Get Started</button>
        </div>
      </div>

      {/* Image */}
      <div className='gpt3__header-image'>
        <img src={ai} alt="ai" />
      </div>
    </div>
  )
}

export default Header
