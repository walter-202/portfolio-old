import React, { useReducer } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { sideBarMenu, socialIcons } from '../../data/data'

import { BsXLg, BsListNested, BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { reducer } from '../../hooks/useReducer'
import './sidebar.scss'

const defaultOptions = {
  showAside1: false,
  openCloseNav1: false,
  isCollapsed: false,
}

const Sidebar = React.memo(() => {
  // dispatch reducer functionality
  const [state, dispatch] = useReducer(reducer, defaultOptions)

  const toggleCollapse = () => {
    dispatch({ type: 'TOGGLE_COLLAPSE' })
  }

  return (
    <>
      <BsListNested
        onClick={() => dispatch({ type: 'OPEN_NAVBAR' })}
        className="menu-icon switch__color"
        aria-label="Abrir menú de navegación"
      />
      <aside
        className={`aside ${state.openCloseNav1 ? 'open-sidebar' : ''} ${
          state.showAside1 ? 'show-asideBar' : ''
        } ${state.isCollapsed ? 'collapsed' : ''}`}
        aria-label="Navegación principal"
        role="navigation"
      >
        {/* Desktop collapse toggle button */}
        <button
          className="collapse-toggle switch__color"
          onClick={toggleCollapse}
          aria-label={state.isCollapsed ? 'Expandir barra lateral' : 'Colapsar barra lateral'}
          aria-expanded={!state.isCollapsed}
          tabIndex={0}
        >
          {state.isCollapsed ? <BsChevronRight /> : <BsChevronLeft />}
        </button>

        <div className="aside-wrapper">
          <BsXLg
            onClick={() => dispatch({ type: 'CLOSE_NAVBAR' })}
            className="close-btn switch__color"
            aria-label="Cerrar menú de navegación"
          />
          <Link
            className="logo-section"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              lineHeight: '4',
            }}
            to="/"
            aria-label="Ir al inicio - Walter Aguilar"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-127.1 -160.1 254.2 270.2"
              className="sidebar__logo"
              aria-hidden="true"
            >
              <path className="fill__color" d="M -50 110 L 0 0 L 50 110 L 127 -67 H 93 L 50 30 L 0 -75 L -50 30 L -92 -67 H -127 L -50 110 " />
              <path fill="gray" d="M -50 -10 L 0 -100 L 50 -10 L 60 -50 L 0 -160 L -60 -50" />
            </svg>
            <span className={`sidebar__name switch__color ${state.isCollapsed ? 'collapsed' : ''}`}>
              Walter Aguilar
            </span>
          </Link>
          <nav className="side-navigation" role="menubar">
            <ul className="side-link" role="none">
            {sideBarMenu.map((link, index) => {
              const { text, icon, url } = link
              return (
                <li key={index} role="none">
                  <NavLink
                    onClick={() => dispatch({ type: 'CLOSE_NAVBAR' })}
                    className={({ isActive }) => {
                      return isActive ? 'nav__links active-links' : 'nav__links'
                    }}
                    to={url}
                    role="menuitem"
                    aria-label={text}
                    tabIndex={0}
                  >
                    <span className="nav__icon">{icon}</span>
                    <span className={`nav__text ${state.isCollapsed ? 'collapsed' : ''}`}>
                      {text}
                    </span>
                  </NavLink>
                </li>
              )
            })}
          </ul>
          </nav>
          <div className="social-icon" role="group" aria-label="Enlaces de redes sociales">
            {socialIcons.map((icons, index) => {
              const { icon, url } = icons
              return (
                <a 
                  href={url} 
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Seguir en ${url.includes('github') ? 'GitHub' : url.includes('twitter') ? 'Twitter' : 'LinkedIn'}`}
                  tabIndex={0}
                >
                  {icon}
                </a>
              )
            })}
          </div>
        </div>
      </aside>
    </>
  )
})

export default Sidebar
