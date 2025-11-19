import { lazy, Suspense } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'

// Componentes principales (no lazy loaded - necesarios de inmediato)
import { Sidebar, ThemeTemplate, CustomCursor } from './components'

// Lazy loading de páginas para mejor performance
const Home = lazy(() => import('./pages/home/Home'))
const About = lazy(() => import('./pages/about/About'))
const Contact = lazy(() => import('./pages/contact/Contact'))
const ProjectPage = lazy(() => import('./pages/project/ProjectPage'))
const ErrorPage = lazy(() => import('./pages/errorPage/ErrorPage'))
const Tutorial = lazy(() => import('./pages/tutorial/Tutorial'))

import './utils/templateColors.scss'

// Loading component optimizado
const PageLoader = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: 'var(--primary-bg)'
  }}>
    <div style={{
      width: '50px',
      height: '50px',
      border: '3px solid rgba(var(--color-tem-rgb), 0.2)',
      borderTop: '3px solid var(--color-tem)',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite'
    }} />
  </div>
)

const App = () => {
  return (
    <HashRouter>
      <CustomCursor />
      <Sidebar />
      <ThemeTemplate />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/acerca-de-mi" element={<About />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/proyectos" element={<ProjectPage />} />
          <Route path="/error" element={<Tutorial />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </HashRouter>
  )
}

export default App
