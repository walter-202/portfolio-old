import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdArrowDropDown } from 'react-icons/md'

import Blast from '../BlastAnimation/Blast'
import Logo from '../logoAnimation/Logo'
import './header.scss'

const nameArray = ['a', 'l', 't', 'e', 'r', ' ','A','g','u','i','l','a','r']
const jobArray = [
  'w',
  'e',
  'b',
  ' ',
  'd',
  'e',
  'v',
  'e',
  'l',
  'o',
  'p',
  'e',
  'r',
  '.',
]

const Header = () => {
  const [letterClass, setLetterClass] = useState('text-animate')


  React.useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <section className="section-1 header__container section__padding">
        <main className="intro-page">
          <h1 arial-label="Soy Walter Aguilar desarrollador web Full Stack">
            <span className={letterClass}>Y</span>
            <span className={`${letterClass} _12`}>o</span>
            <span className={`${letterClass} _13`}>  </span>
            <span className={`${letterClass} _14`}>s</span>
            <span className={`${letterClass} _15`}>o</span>
            <span className={`${letterClass} _16`}>y</span> {''}
<br />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="home-logo"
              viewBox="-127.1 -160.1 264.2 270.2"
            >
              <path className="lower-logo-color fill__color home-logo animate-logo-1" d="M -50 110 L 0 0 L 50 110 L 127 -67 H 93 L 50 30 L 0 -75 L -50 30 L -92 -67 H -127 L -50 110 " />

              <path d="M -50 -10 L 0 -100 L 50 -10 L 60 -50 L 0 -160 L -60 -50" fill="#797878" className="animate-logo-2" />
            </svg>

            <Blast
              letterClass={letterClass}
              arrayStr={nameArray}
              indexLetter={17}
            />
            <br />
            <Blast
              letterClass={letterClass}
              arrayStr={jobArray}
              indexLetter={22}
            />
          </h1>

          <p className="text-desc">WEB DEVELOPER /  DISEÑADOR UI/UX</p>
          <Link to="/contacto" className="contact-button">
            <div>
              <span className="bg switch__bg"></span>
              <span className="base switch__border-color"></span>
              <span className="text">Contactame</span>
            </div>
          </Link>
          <Logo />
          <div className="scroll__wrapper switch__color">
            <MdArrowDropDown className="scroll__down switch__color" />
          </div>
        </main>
      </section>
    </>
  )
}

export default Header
