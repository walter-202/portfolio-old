import { Link } from 'react-router-dom'
import feelingblue from '../../assets/images/undraw_page_not_found_re_e9o6.svg'
import { Fade } from "react-awesome-reveal";
import { Button } from '../../components'

import './errorpage.scss'

const ErrorPage = () => {
  return (
    <div className="section__errorpage section__padding">
      <div className="section__errorpage-content">
        <Fade bottom>
          <h2>Página no encontrada</h2>
        </Fade>
        <Fade left>
          <div className="error404">
            <h2> 404</h2>
          </div>
        </Fade>
        <Fade bottom>
          <Link to="/">
            <Button size="large">
              Ir a Inicio
            </Button>
          </Link>
        </Fade>
      </div>
      <Fade right>
        <img className="errorPageSvg" src={feelingblue} alt="feeling blue" />
      </Fade>
    </div>
  )
}

export default ErrorPage
