import React from 'react'
import './features.css'
import { Feature } from '../../components'

const featuresDate = [
  {
    title: 'Improving end distrusts instantly',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est ab possimus iusto deleniti rem illo doloremque eligendi mollitia'
  },
  {
    title: 'Become the tended active',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est ab possimus iusto deleniti rem illo doloremque eligendi mollitia'
  },
  {
    title: 'Message or am nothing',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est ab possimus iusto deleniti rem illo doloremque eligendi mollitia'
  },
  {
    title: 'Really boy law county',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est ab possimus iusto deleniti rem illo doloremque eligendi mollitia'
  }
]

function Features() {
  return (
    <div id="features" className='gpt3__features section__padding'>
      <div className='gpt3__features-heading'>
        <h1>The Future is Now and You Just Need to Realize It. Step into Future Today and Make It Happen.</h1>
        <p>Request Early Access to Get Started</p>
      </div>

      <div className='gpt3__features-container'>
        {featuresDate.map((item,index) => {
          return (
            <Feature key={item.title + index} title={item.title} text={item.text} />
          )
        })}
      </div>
    </div>
  )
}

export default Features
