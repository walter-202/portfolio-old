import React, { useEffect, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import './logo.scss'

const Logo = () => {
  const bgRef = useRef(null)
  const outLineRef = useRef(null)
  const outLineRef2 = useRef(null)
  const solidLogoRef = useRef(null)
  const containerRef = useRef(null)

  useGSAP(() => {
    const timeline = gsap.timeline()
    
    setTimeout(() => {
      timeline
        .to(bgRef.current, {
          duration: 1,
          opacity: 1,
        })
        .from(outLineRef.current, {
          strokeDasharray: "100%",
          strokeDashoffset: "100%",
          duration: 4,
        })
        .from(outLineRef2.current, {
          strokeDasharray: "100%",
          strokeDashoffset: "100%",
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
        }
      )
    }, 4000)
  }, { scope: containerRef })

  return (
    <div className="logo-container switch__stroke-color" ref={containerRef}>
      <svg
        ref={solidLogoRef}
        xmlns="http://www.w3.org/2000/svg"
        className="home-logo solid-logo"
        viewBox="-127.1 -160.1 254.2 270.2"
      >
        <path 
          className="fill__color home-logo" 
          d="M -50 110 L 0 0 L 50 110 L 127 -67 H 93 L 50 30 L 0 -75 L -50 30 L -92 -67 H -127 L -50 110 " 
        />
        <path  
          d="M -51 -13 L 0 -100 L 50 -10 L 60 -50 L 0 -160 L -60 -50 L -51 -13" 
          fill="#797878"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="home-logo animate-logo-2"
        viewBox="-127.1 -160.1 254.2 270.2"
      >
        <path
          ref={outLineRef}
          className="solid-logo"
          d="M -50 110 L 0 0 L 50 110 L 127 -67 H 93 L 50 30 L 0 -75 L -50 30 L -92 -67 H -127 L -50 110" 
        />
        <path
          className="solid-logo"
          d="M -51 -13 L 0 -100 L 50 -10 L 60 -50 L 0 -160 L -60 -50 L -51 -13"
          ref={outLineRef2}
        />
      </svg>
    </div>
  )
}

export default React.memo(Logo)