import React from 'react'
import './logo.scss'
import { DrawSVGPlugin } from 'gsap-trial/DrawSVGPlugin'
import gsap from 'gsap'

const Logo = () => {
  const bgRef = React.useRef()
  const outLineRef = React.useRef()
  const outLineRef2 = React.useRef()
  const solidLogoRef = React.useRef()

  React.useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)
    setTimeout(() => {
      gsap
        .timeline()
        .to(bgRef.current, {
          duration: 1,
          opacity: 1,
        })
        .from(outLineRef.current, {
          drawSVG: 0,
          duration: 4,
        })
        .from(outLineRef2.current, {
          drawSVG: 0,
          duration: 4,
        })
      gsap.fromTo(
        solidLogoRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 0.5,
          delay: 4,
          duration: 8,
        },
      )
    }, 4000)
  }, [])

  return (
    <div className="logo-container switch__stroke-color" ref={bgRef}>
      <svg
        ref={solidLogoRef}
        xmlns="http://www.w3.org/2000/svg"
        className="home-logo solid-logo"
        viewBox="-127.1 -160.1 254.2 270.2"
      >
        
              <path className="fill__color home-logo" d="M -50 110 L 0 0 L 50 110 L 127 -67 H 93 L 50 30 L 0 -75 L -50 30 L -92 -67 H -127 L -50 110 " />
              <path  d="M -51 -13 L 0 -100 L 50 -10 L 60 -50 L 0 -160 L -60 -50 L -51 -13" fill="#797878"/>
            
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="home-logo animate-logo-2"
        viewBox="-127.1 -160.1 254.2 270.2"
      >
        <path
          ref={outLineRef}
          className="solid-logo"
          d="M -50 110 L 0 0 L 50 110 L 127 -67 H 93 L 50 30 L 0 -75 L -50 30 L -92 -67 H -127 L -50 110  " />
        <path
          className="solid-logo"
          d="M -51 -13 L 0 -100 L 50 -10 L 60 -50 L 0 -160 L -60 -50 L -51 -13"
          ref={outLineRef2}
        />
      </svg>
    </div>
  )
}

export default Logo
