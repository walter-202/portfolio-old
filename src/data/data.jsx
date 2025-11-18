// react icons
import { FiGrid, FiLinkedin, FiFigma } from 'react-icons/fi'
import { VscProject } from 'react-icons/vsc'
import {
  BsBootstrapFill,
  BsPersonLinesFill
} from 'react-icons/bs'
import { RiContactsLine, RiReactjsLine } from 'react-icons/ri'
import {
  SiFuturelearn,
  SiSass,
  SiJquery,
  SiMysql,
  SiPhp,
  SiPhpmyadmin,
  SiFlutter,
  SiLaravel,
  SiTailwindcss,
  SiLivewire,
  SiAlpinedotjs,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiApple,
} from 'react-icons/si'

import { GrGithub, GrTwitter } from 'react-icons/gr'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3, DiMongodb } from 'react-icons/di'
import { IoLogoJavascript } from 'react-icons/io'
import { FaAndroid, FaNodeJs } from 'react-icons/fa'

// sidebar menu list and icons
const sideBarMenu = [
  {
    text: 'Inicio',
    icon: <FiGrid className="link-icon" />,
    url: '/',
  },
  {
    text: 'Habilidades',
    icon: <BsPersonLinesFill className="link-icon" />,
    url: '/acerca-de-mi',
  },
  {
    text: 'Proyectos',
    icon: <VscProject className="link-icon" />,
    url: '/proyectos',
  },
  {
    text: 'Contáctame',
    icon: <RiContactsLine className="link-icon" />,
    url: '/contacto',
  },
  {
    text: 'Error Diseño',
    icon: <SiFuturelearn className="link-icon" />,
    url: '/error',
  },
]
// social media icons and url
const socialIcons = [
  {
    icon: <GrGithub className="icon switch__color" />,
    url: 'https://github.com/walter-202',
  },
  {
    icon: <GrTwitter className="icon switch__color" />,
    url: 'https://twitter.com/WalterA30548404',
  },
  
  {
    icon: <FiLinkedin className="icon switch__color" />,
    url: 'https://www.linkedin.com/in/walter-aguilar23',
  },
]
// programming lanuages (spanText), icons and url
const skillSet = [
  {
    icon: <AiFillHtml5 className="skills-icon switch__color" />,
    spanText: 'HTML',
  },
  {
    icon: <DiCss3 className="skills-icon switch__color" />,
    spanText: 'CSS',
  },
  {
    icon: <IoLogoJavascript className="skills-icon switch__color" />,
    spanText: 'JavaScript',
  },
  {
    icon: <SiSass className="skills-icon switch__color" />,
    spanText: 'SASS',
  },

  {
    icon: <BsBootstrapFill className="skills-icon switch__color" />,
    spanText: 'Boostrap',
  },

  {
    icon: <SiJquery className="skills-icon switch__color" />,
    spanText: 'JQuery',
  },
  {
    icon: <SiFlutter className="skills-icon switch__color" />,
    spanText: 'Flutter',
  },
  {
    icon: <RiReactjsLine className="skills-icon switch__color" />,
    spanText: 'React JS',
  },

  {
    icon: <FaNodeJs className="skills-icon switch__color" />,
    spanText: 'Node',
  },

  {
    icon: <DiMongodb className="skills-icon switch__color" />,
    spanText: 'Mongo DB',
  },
  {
    icon: <SiMysql className="skills-icon switch__color" />,
    spanText: 'MySQL',
  },
  {
    icon: <SiPhp className="skills-icon switch__color" />,
    spanText: 'PHP',
  },
  {
    icon: <FiFigma className="skills-icon switch__color" />,
    spanText: 'Figma',
  },
  {
    icon: <SiPhpmyadmin className="skills-icon switch__color" />,
    spanText: 'PhpMyAdmin',
  },
  {
    icon: <SiLaravel className="skills-icon switch__color" />,
    spanText: 'Laravel',
  },
  {
    icon: <SiTailwindcss className="skills-icon switch__color" />,
    spanText: 'Tailwind',
  },
  {
    icon: <SiLivewire className="skills-icon switch__color" />,
    spanText: 'Livewire',
  },
  {
    icon: <SiAlpinedotjs className="skills-icon switch__color" />,
    spanText: 'Alpine',
  },
  {
    icon: <SiAdobephotoshop className="skills-icon switch__color" />,
    spanText: 'Photoshop',
  },
  {
    icon: <SiAdobeillustrator className="skills-icon switch__color" />,
    spanText: 'Illustrator',
  },
  {
    icon: <FaAndroid className="skills-icon switch__color" />,
    spanText: 'Android Apps',
  },
  {
    icon: <SiApple className="skills-icon switch__color" />,
    spanText: 'Apple Apps',
  },
]

export { sideBarMenu, socialIcons, skillSet }
