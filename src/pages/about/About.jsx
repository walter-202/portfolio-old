import { useState, useEffect } from 'react'
import myCV from '/src/assets/images/MyCV.pdf'
import { Fade } from "react-awesome-reveal";

// components
import { Cards, Blast, Button } from '../../components'
import './about.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
    
      <div className="section-about-wrapper section__padding section-about">
      <Fade>
        <div className="fake-big">Acerca de mí</div>
      </Fade>
        <article className="section-about-description">
          <div>
            <h2 aria-label="About and skills">
              <Blast
                letterClass={letterClass}
                arrayStr={[
                  'M',
                  'i',
                  's',
                  ' ',
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
            <Fade cascade duration={900} delay={200} up>
              <p>
                Soy un ambicioso programador FullStack que va aprendiendo mediante cursos en línea.
              </p>
              <p>
                Soy del Estado Plurinacional de Bolivia del departamento de La Paz, he sido freelacer por 3 años mientras estudiaba para el Tecnico Medio adquiriendo experiencia laboral.
              </p>
              <p>
              Técnico medio en Ingeniería Informática con 2
años de experiencia como desarrollador web de
proyectos PHP-MySQL. Durante mi trayectoria
he podido aprender y perfeccionar
conocimientos que me han ayudado a construir
un perfil específico. En la actualidad estoy
buscando un un trabajo que me ayude a seguir
ampliando mi experiencia.
              </p>
              <div style={{ marginTop: '2rem' }}>
                <a href={myCV} download="Walter_Aguilar_CV">
                  <Button size="large">
                    Descarga mi CV
                  </Button>
                </a>
              </div>
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
