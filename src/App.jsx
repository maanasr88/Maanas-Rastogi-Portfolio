import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PageTransition from './components/PageTransition'
import Home from './pages/Home'
import Experience from './pages/Experience'
import TeamProjects from './pages/TeamProjects'
import PersonalProjects from './pages/PersonalProjects'
import Skills from './pages/Skills'
import Ironlattice from './pages/projects/Ironlattice'
import QuantumComputing from './pages/projects/QuantumComputing'
import BajaRacing from './pages/projects/BajaRacing'
import Neurotech from './pages/projects/Neurotech'
import RoboticsSociety from './pages/projects/RoboticsSociety'
import VlsiRiscV from './pages/projects/VlsiRiscV'
import HelmetHud from './pages/projects/HelmetHud'
import GambleOnTheGo from './pages/projects/GambleOnTheGo'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function PT({ children }) {
  return <PageTransition>{children}</PageTransition>
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/"                            element={<PT><Home /></PT>} />
        <Route path="/experience"                  element={<PT><Experience /></PT>} />
        <Route path="/experience/ironlattice"       element={<PT><Ironlattice /></PT>} />
        <Route path="/experience/quantum-computing" element={<PT><QuantumComputing /></PT>} />
        <Route path="/team"                         element={<PT><TeamProjects /></PT>} />
        <Route path="/team/baja-racing"             element={<PT><BajaRacing /></PT>} />
        <Route path="/team/neurotech"               element={<PT><Neurotech /></PT>} />
        <Route path="/team/robotics-society"        element={<PT><RoboticsSociety /></PT>} />
        <Route path="/projects"                     element={<PT><PersonalProjects /></PT>} />
        <Route path="/projects/vlsi-risc-v"         element={<PT><VlsiRiscV /></PT>} />
        <Route path="/projects/helmet-hud"          element={<PT><HelmetHud /></PT>} />
        <Route path="/projects/gamble-on-the-go"    element={<PT><GambleOnTheGo /></PT>} />
        <Route path="/skills"                       element={<PT><Skills /></PT>} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <AnimatedRoutes />
      </main>
      <Footer />
    </>
  )
}
