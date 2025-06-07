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
        <div className="header-content">
          <main className="intro-page">
            <h1 aria-label="Soy Walter Aguilar desarrollador web Full Stack">
              <span className={letterClass}>Y</span>
              <span className={`${letterClass} _12`}>o</span>
              <span className={`${letterClass} _13`}>  </span>
              <span className={`${letterClass} _14`}>s</span>
              <span className={`${letterClass} _15`}>o</span>
              <span className={`${letterClass} _16`}>y</span> {''}
              <br />
              <Blast
                letterClass={letterClass}
                arrayStr={nameArray}
                indexLetter={17}
              />
              <br />
              <Blast
                letterClass={letterClass}
                arrayStr={jobArray}
                indexLetter={30}
              />
            </h1>

            <p className="text-desc">WEB DEVELOPER /  DISEÑADOR UI/UX</p>
            <Link to="/contacto" className="contact-button">
              <div>
                <span className="bg switch__bg"></span>
                <span className="base switch__border-color"></span>
                <span className="text">Contáctame</span>
              </div>
            </Link>
            <div className="scroll__wrapper switch__color">
              <MdArrowDropDown className="scroll__down switch__color" />
            </div>
          </main>
        </div>
        <Logo />
      </section>
    </>
  )
}

export default Header