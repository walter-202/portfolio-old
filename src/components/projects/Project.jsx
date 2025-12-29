import { Fade } from "react-awesome-reveal";
import './projects.scss'

const Project = (props) => {
  const { imgUrl, name, desc, stack, gitHubUrl, website } = props
  return (
    <Fade 
      direction="up" 
      duration={800} 
      delay={200}
      triggerOnce={true}
      fraction={0.2}
    >
      <section className="section__projects-single-projects">
        <img src={imgUrl} alt={name} loading="lazy" />
        <div className="section__projects-contents">
          <p>{name}</p>
          <p className="desc">{desc}</p>
          <div className="section__projects-stack">
            <h2>Tecnologías</h2>
            <span>{stack}</span>
          </div>
          <div className="section__projects-icon">
            <a 
              href={gitHubUrl.url} 
              target='_blank' 
              rel="noopener noreferrer"
              className="switch__color"
              aria-label={`Ver código de ${name} en GitHub`}
            >
              {gitHubUrl.icon}
            </a>
            <a 
              href={website.url} 
              target='_blank' 
              rel="noopener noreferrer"
              className="switch__color"
              aria-label={`Ver ${name} en vivo`}
            >
              {website.icon}
            </a>
          </div>
        </div>
      </section>
    </Fade>
  )
}

export default Project