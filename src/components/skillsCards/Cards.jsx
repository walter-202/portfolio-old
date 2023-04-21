import React from 'react'
import { Reveal, Zoom } from "react-awesome-reveal";
import { skillSet } from '../../data/data'
import './cards.scss'

const Cards = () => {
  return (
    <div className="about-description-skills">
      {skillSet.map((item, index) => (
        <Reveal delay={300} key={index + item}>
          <div className="skill-container">
          <Zoom duration={1000} delay={1000}>{item.icon}</Zoom>
            <span className="skill__name">{item.spanText}</span>
          </div>
        </Reveal>
      ))}
    </div>
  )
}

export default Cards
