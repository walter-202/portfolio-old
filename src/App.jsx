import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'

// pages
import {
  Home,
  About,
  Contact,
  ProjectPage,
  ErrorPage,
  Tutorial,
} from './pages'

// components
import { Sidebar, ThemeTemplate } from './components'

import './utils/templateColors.scss'

const App = () => {
  return (
    <HashRouter >
      <Sidebar />
      <ThemeTemplate />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/acerca-de-mi" element={<About />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/proyectos" element={<ProjectPage />} />
        <Route path="/error" element={<Tutorial />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </HashRouter>
  )
}

export default App
