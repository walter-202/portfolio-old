import React from 'react'

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
} from 'react-icons/si'

import { GrGithub, GrTwitter } from 'react-icons/gr'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3, DiMongodb } from 'react-icons/di'
import { IoLogoJavascript } from 'react-icons/io'
import { FaNodeJs,FaPhotoVideo} from 'react-icons/fa'

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
    url: '/tutorial',
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
    spanText: 'JAVASCRIPT',
  },
  {
    icon: <SiSass className="skills-icon switch__color" />,
    spanText: 'SASS',
  },

  {
    icon: <BsBootstrapFill className="skills-icon switch__color" />,
    spanText: 'BOOTSTRAP',
  },

  {
    icon: <SiJquery className="skills-icon switch__color" />,
    spanText: 'JQUERY',
  },
  {
    icon: <FaPhotoVideo className="skills-icon switch__color" />,
    spanText: 'Photoshop & Animations',
  },
  {
    icon: <SiFlutter className="skills-icon switch__color" />,
    spanText: 'FLUTTER',
  },
  {
    icon: <RiReactjsLine className="skills-icon switch__color" />,
    spanText: 'REACT JS',
  },

  {
    icon: <FaNodeJs className="skills-icon switch__color" />,
    spanText: 'NODE',
  },

  {
    icon: <DiMongodb className="skills-icon switch__color" />,
    spanText: 'MONGO DB',
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
]

export { sideBarMenu, socialIcons, skillSet }
