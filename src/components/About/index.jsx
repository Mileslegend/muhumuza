import React from 'react'
import './About.css'
import { whyChooseMe } from '../../sources'

const About = () => {
  return (
    <section id='about' >
      <div className="wrapper">
        <div className="section">
          <h1 className="heading-1">
            <span className="gradient-text">About Me</span>
          </h1>
          <h4 className="sub-title muted">
          Armed with top-notch skills in UI/UX design, content creation, and full-stack development, I possesses the remarkable ability to create immersive digital journeys that leave a lasting impact. Whether it's crafting visually stunning interfaces, architecting seamless user experiences, or seamlessly blending front-end and back-end magic, My multidimensional skill set ensures the delivery of extraordinary online solutions that captivate and inspire.
          </h4>
        </div>
        <div className="group">
          {whyChooseMe.map((list, index)=> (
            <div className="flex-center group-item" key={index}>
              <div className="flex-center icon-wrapper">
                {list.icon}
              </div>
              <h4 className="title">{list.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About