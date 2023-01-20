import React from 'react'
import myCV from '../../assets/images/MyCV.pdf'
import Reveal from 'react-reveal/Reveal'
import Fade from 'react-reveal/Fade'

// components
import { Cards, Blast } from '../../components'
import './about.scss'

const About = () => {
  const [letterClass, setLetterClass] = React.useState('text-animate')
  React.useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
    
      <div className="section-about-wrapper section__padding section-about">
      <Reveal>
        <div className="fake-big">Acerca de mí</div>
      </Reveal>
        <article className="section-about-description">
          <div>
            <h2 arial-aria-label="About and skills">
              <Blast
                letterClass={letterClass}
                arrayStr={[
                  'M',
                  'i',
                  's',
                  '',
                  'H',
                  'a',
                  'b',
                  'i',
                  'l',
                  'i',
                  'd',
                  'a',
                  'd',
                  'e',
                  's',
                ]}
                indexLetter={15}
              />
            </h2>
            <Fade bottom>
              <p>
                Soy un ambicioso programador FullStack que va aprendiendo mediante cursos en línea
              </p>
            </Fade>
            <Fade bottom>
              <p>
                Soy del Estado Plurinacional de Bolivia del departamento de La Paz, he sido freelacer por 3 años mientras estudiaba para el Tecnico Medio adquiriendo experiencia laboral 
              </p>
            </Fade>
            <Fade bottom>
              <p>
              Técnico medio en Ingeniería Informática con 2
años de experiencia como desarrollador web de
proyectos PHP-MySQL. Durante mi trayectoria
he podido aprender y perfeccionar
conocimientos que me han ayudado a construir
un perfil específico. En la actualidad estoy
buscando un un trabajo que me ayude a seguir
ampliando mi experiencia
              </p>
            </Fade>
            <Fade left>
              <a
                style={{ marginTop: '2rem' }}
                href={myCV}
                download
                className="contact-button submit-button"
              >
                <div>
                  <span className="bg switch__bg"></span>
                  <span className="base switch__border-color"></span>
                  <span className="text">Descarga mi CV</span>
                </div>
              </a>
            </Fade>
          </div>
        </article>
        {/* programming language cards */}
        <Cards />
      </div>
    </>
  )
}

export default About
