import React from 'react'
import './possibility.css'
import possibilityImage from '../../assets/possibility.png'

function Possibility() {
  return (
    <div className='gpt3__possibility section__padding' id="possibility">
      <div className='gpt3__possibility-image'>
        <img src={possibilityImage} alt="possibility" />
      </div>

      <div className='gpt3__possibility-content'>
        <h4>Request Early Access to Get Started</h4>
        <h2>The possibilities are beyond your imagination</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus deleniti animi illum soluta nam, nisi earum incidunt quaerat laudantium corrupti voluptatibus optio explicabo consequatur voluptates maiores delectus minima.</p>
        <h4>Explore The Library</h4>
      </div>
    </div>
  )
}

export default Possibility
