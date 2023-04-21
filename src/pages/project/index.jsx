import { GrGithub } from 'react-icons/gr'
import { TbWorld } from 'react-icons/tb'

import {
  radio,
  vos
} from '../../assets/images'

// projects data
export const projects = [
  {
    id: 1,
    name: 'Radio Impacto',
    desc:
      'Una landing page para una radio online que es afiliada al Diario.net ',
    stack: 'HTML CSS JAVASCRIPT',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/walter-202/radioImpacto',
    },
    website: {
      icon: <TbWorld />,
      url: 'https://walter-202.github.io/radioImpacto',
    },
    imgUrl: radio,
  },
  {
    id: 2,
    name: 'Vos Work Website',
    desc: 'Website destinado a la gestion de cupos de oficinas para coworking',
    stack: 'HTML CSS JavaScript PHP MySql AJAX Jquery',
    gitHubUrl: {
      icon: <GrGithub />,
      url: 'https://github.com/walter-202/voswork-bol',
    },
    website: {
      icon: <TbWorld />,
      url: 'http://voswork.great-site.net/',
    },
    imgUrl: vos,
  },
]
