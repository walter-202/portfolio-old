import { Fade } from "react-awesome-reveal";
import './tutorial.scss'
import svgUnderConst from '../../assets/images/undraw_under_construction_-46-pa.svg'

const Tutorial = () => {
  return (
    <section className="section__tutorial section__padding">
      <div className="section__tutorial-wrapper">
        <Fade bottom>
          <img src={svgUnderConst} alt="under construction" />
          <div className="section__tutorial-heading">
            <h2>Página en construcción</h2>
          </div>
        </Fade>
      </div>
    </section>
  )
}

export default Tutorial
