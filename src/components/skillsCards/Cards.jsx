import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { skillSet } from '../../data/data'
import './cards.scss'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const Cards = () => {
  const containerRef = useRef(null)
  const cardsRef = useRef([])

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Set initial state
      gsap.set(cardsRef.current, {
        opacity: 0,
        y: 50,
        scale: 0.8,
        rotationY: -15
      })

      // Create staggered entrance animation
      gsap.to(cardsRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        rotationY: 0,
        duration: 0.8,
        stagger: {
          amount: 1.2,
          from: "start",
          ease: "power2.out"
        },
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })

      // Add hover animations for each card
      cardsRef.current.forEach((card) => {
        if (!card) return

        const icon = card.querySelector('.skills-icon')
        const text = card.querySelector('.skill__name')

        // Create hover timeline
        const hoverTl = gsap.timeline({ paused: true })
        
        hoverTl
          .to(card, {
            y: -12,
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out"
          })
          .to(icon, {
            scale: 1.2,
            rotationY: 360,
            duration: 0.5,
            ease: "back.out(1.7)"
          }, 0)
          .to(text, {
            y: -3,
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out"
          }, 0.1)

        // Add event listeners
        card.addEventListener('mouseenter', () => hoverTl.play())
        card.addEventListener('mouseleave', () => hoverTl.reverse())

        // Add click animation
        card.addEventListener('click', () => {
          gsap.to(card, {
            scale: 0.95,
            duration: 0.1,
            yoyo: true,
            repeat: 1,
            ease: "power2.inOut"
          })
        })
      })

      // Floating animation for icons
      cardsRef.current.forEach((card, index) => {
        if (!card) return
        
        const icon = card.querySelector('.skills-icon')
        if (icon) {
          gsap.to(icon, {
            y: -5,
            duration: 2 + (index * 0.1),
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: index * 0.2
          })
        }
      })

    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className="about-description-skills" ref={containerRef}>
      {skillSet.map((item, index) => (
        <div 
          key={index + item.spanText}
          className="skill-container"
          ref={el => cardsRef.current[index] = el}
        >
          <div className="skills-icon switch__color">
            {item.icon}
          </div>
          <span className="skill__name">{item.spanText}</span>
        </div>
      ))}
    </div>
  )
}

export default Cards