import React, { useEffect, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import './logo.scss'

const Logo = () => {
  const containerRef = useRef(null)
  const solidLogoRef = useRef(null)
  const outlinePathRef = useRef(null)
  const outlinePathRef2 = useRef(null)

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Initial setup
      gsap.set([outlinePathRef.current, outlinePathRef2.current], {
        strokeDasharray: path => path.getLength(),
        strokeDashoffset: path => path.getLength(),
        opacity: 1
      })
      
      gsap.set(solidLogoRef.current, { opacity: 0 })

      // Main animation timeline
      const tl = gsap.timeline({
        defaults: { ease: "power2.inOut" }
      })

      tl.to([outlinePathRef.current, outlinePathRef2.current], {
        strokeDashoffset: 0,
        duration: 2.5,
        stagger: 0.3
      })
      .to(solidLogoRef.current, {
        opacity: 1,
        duration: 1,
        ease: "power1.inOut"
      }, "-=0.5")

      // Hover animation setup
      const hoverTl = gsap.timeline({ paused: true })
      hoverTl
        .to(solidLogoRef.current, {
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out"
        })
        .to([outlinePathRef.current, outlinePathRef2.current], {
          stroke: "var(--hover-color)",
          duration: 0.3
        }, 0)

      // Add hover interactivity
      containerRef.current.addEventListener("mouseenter", () => hoverTl.play())
      containerRef.current.addEventListener("mouseleave", () => hoverTl.reverse())

    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className="logo-container" ref={containerRef}>
      <svg
        ref={solidLogoRef}
        xmlns="http://www.w3.org/2000/svg"
        className="home-logo solid-logo"
        viewBox="-127.1 -160.1 254.2 270.2"
      >
        <path 
          className="fill__color home-logo" 
          d="M -50 110 L 0 0 L 50 110 L 127 -67 H 93 L 50 30 L 0 -75 L -50 30 L -92 -67 H -127 L -50 110"
        />
        <path  
          d="M -51 -13 L 0 -100 L 50 -10 L 60 -50 L 0 -160 L -60 -50 L -51 -13" 
          fill="#797878"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="home-logo outline-logo"
        viewBox="-127.1 -160.1 254.2 270.2"
      >
        <path
          ref={outlinePathRef}
          className="logo-path"
          fill="none"
          stroke="var(--color-tem)"
          strokeWidth="1"
          d="M -50 110 L 0 0 L 50 110 L 127 -67 H 93 L 50 30 L 0 -75 L -50 30 L -92 -67 H -127 L -50 110"
        />
        <path
          ref={outlinePathRef2}
          className="logo-path"
          fill="none"
          stroke="var(--color-tem)"
          strokeWidth="1"
          d="M -51 -13 L 0 -100 L 50 -10 L 60 -50 L 0 -160 L -60 -50 L -51 -13"
        />
      </svg>
    </div>
  )
}

export default React.memo(Logo)