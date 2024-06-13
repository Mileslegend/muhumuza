import React from 'react'
import './Hero.css'
import { Link } from 'react-scroll'
import me from '../../assets/me.png'
import Achievement from '../../commons/Achievement'

const Hero = () => {
  return (
    <section id='hero'>
      <div className="wrapper info-container">
        <div className="column">
          <h3 className='sub-title'>
            Hi, I'm <span className="primary">Muhumuza Miles</span>
          </h3>
          <h1 className="heading-1">
            A <span className="gradient-text">Fullstack</span>Web Developer
          </h1>
          <p className="muted"> 
            who combines technical expertise with a creative flair to build captivating online experiences. With a mastery of coding languages and a passion for innovation, I transform ideas into beautifully functional websites.
          </p>
          <div className="flex-center buttons-wrapper">
            <Link 
            to='services' 
            smooth={true}
            className='btn primary'
            >
              Learn More
            </Link>
            <Link 
            to='contact' 
            smooth={true}
            className='btn'
            >
              Get Started
            </Link>
          </div>
        </div>
        <div className="column hero-image">
          <img src={me} alt="me" />
        </div>
      </div>
      <div className="achievement-cluster">
        <div className="wrapper">
          <Achievement />
        </div>
      </div>
    </section>
  )
}

export default Hero