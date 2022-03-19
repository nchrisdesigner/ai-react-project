import React from 'react'
import { Feature } from '../../components'
import './whatGPT3.css'

function WhatGPT3() {
  return (
    <div id="wgpt3" className='gpt3__whatgpt3 section__margin'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature title="What is GPT-3" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga ullam cumque officia veniam magnam est dolorum saepe hic deleniti minima iste beatae ducimus incidunt quisquam eius, aliquam dolore aperiam tenetur." />
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h2 className='gpt3__whatgpt3-text'>
          The possibilities are beyond your imagination
        </h2>
        <p>Explore The Library</p>
      </div>

      <div className='gpt3__whatgpt3-container'>
        <Feature title="Chatbots" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque vero labore, debitis excepturi sed itaque!" />
        <Feature title="Knowledgebase" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque vero labore, debitis excepturi sed itaque!" />
        <Feature title="Education" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque vero labore, debitis excepturi sed itaque!" />
      </div>
    </div>
  )
}

export default WhatGPT3
