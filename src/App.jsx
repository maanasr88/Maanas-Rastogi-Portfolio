import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { AnimatePresence, MotionConfig } from 'framer-motion'
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
import BanerjeeLab from './pages/projects/BanerjeeLab'
import BajaRacing from './pages/projects/BajaRacing'
import FuelLevelIndicator from './pages/projects/baja/FuelLevelIndicator'
import RpmSensor from './pages/projects/baja/RpmSensor'
import EngineTemperatureSensing from './pages/projects/baja/EngineTemperatureSensing'
import ImuGps from './pages/projects/baja/ImuGps'
import DriverInputTelemetry from './pages/projects/baja/DriverInputTelemetry'
import SuspensionPositionSensor from './pages/projects/baja/SuspensionPositionSensor'
import TelemetryLink from './pages/projects/baja/TelemetryLink'
import NfcTracker from './pages/projects/baja/NfcTracker'
import Neurotech from './pages/projects/Neurotech'
import RoboticsSociety from './pages/projects/RoboticsSociety'
import VlsiRiscV from './pages/projects/VlsiRiscV'
import HelmetHud from './pages/projects/HelmetHud'
import GambleOnTheGo from './pages/projects/GambleOnTheGo'

const SITE_TITLE = 'Maanas Rastogi — Electrical & Computer Engineering Portfolio'

// One table drives both the routes and the browser-tab title for each page.
const ROUTES = [
  { path: '/',                                          element: <Home />,                     title: null },
  { path: '/experience',                                element: <Experience />,               title: 'Industry & Research Experience' },
  { path: '/experience/ironlattice',                    element: <Ironlattice />,              title: 'Gator Memory FeFET Validation · Ironlattice' },
  { path: '/experience/quantum-computing',              element: <QuantumComputing />,         title: 'Surface-Code Simulation for Modular Quantum Processors' },
  { path: '/experience/banerjee-lab',                   element: <BanerjeeLab />,              title: 'Thin Film Growth & FeFET Characterization · Banerjee Lab' },
  { path: '/team',                                      element: <TeamProjects />,             title: 'Team Projects' },
  { path: '/team/baja-racing',                          element: <BajaRacing />,               title: 'Longhorn Baja Racing · Electronics Lead' },
  { path: '/team/baja-racing/fuel-level-indicator',      element: <FuelLevelIndicator />,       title: 'Fuel Level Indicator · Baja Sensor Suite' },
  { path: '/team/baja-racing/rpm-sensor',                element: <RpmSensor />,                title: 'RPM Sensor · Baja Sensor Suite' },
  { path: '/team/baja-racing/engine-temperature-sensing', element: <EngineTemperatureSensing />, title: 'Engine Temperature Sensing · Baja Sensor Suite' },
  { path: '/team/baja-racing/imu-gps',                   element: <ImuGps />,                   title: 'IMU / GPS Vehicle Tracking · Baja Sensor Suite' },
  { path: '/team/baja-racing/driver-input-telemetry',    element: <DriverInputTelemetry />,     title: 'Driver Input Telemetry · Baja Sensor Suite' },
  { path: '/team/baja-racing/suspension-position-sensor', element: <SuspensionPositionSensor />, title: 'Suspension Position Sensor · Baja Sensor Suite' },
  { path: '/team/baja-racing/telemetry-link',            element: <TelemetryLink />,            title: 'Wireless Telemetry Link · Baja Sensor Suite' },
  { path: '/team/baja-racing/nfc-tracker',               element: <NfcTracker />,               title: 'NFC Tracker · Baja Sensor Suite' },
  { path: '/team/neurotech',                            element: <Neurotech />,                title: 'Longhorn Neurotech · Electric Wheelchair' },
  { path: '/team/robotics-society',                     element: <RoboticsSociety />,          title: 'UT Robotics & Automation Society · Power Electronics' },
  { path: '/projects',                                  element: <PersonalProjects />,         title: 'Personal Projects' },
  { path: '/projects/vlsi-risc-v',                      element: <VlsiRiscV />,                title: '32-bit Custom RISC-V Processor' },
  { path: '/projects/helmet-hud',                       element: <HelmetHud />,                title: 'Motorcycle Helmet HUD' },
  { path: '/projects/gamble-on-the-go',                 element: <GambleOnTheGo />,            title: 'Gamble on the Go' },
  { path: '/skills',                                    element: <Skills />,                   title: 'Skills' },
]

const TITLES = Object.fromEntries(ROUTES.map(r => [r.path, r.title]))

function RouteEffects() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    const title = TITLES[pathname]
    document.title = title ? `${title} | Maanas Rastogi` : SITE_TITLE
  }, [pathname])
  return null
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {ROUTES.map(r => (
          <Route key={r.path} path={r.path} element={<PageTransition>{r.element}</PageTransition>} />
        ))}
      </Routes>
    </AnimatePresence>
  )
}

// HashRouter owns the URL hash, so the skip link moves focus instead of using #main.
function skipToContent(e) {
  e.preventDefault()
  const main = document.getElementById('main-content')
  main?.focus()
  main?.scrollIntoView()
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a href="#main-content" className="skip-link" onClick={skipToContent}>Skip to content</a>
      <RouteEffects />
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <AnimatedRoutes />
      </main>
      <Footer />
    </MotionConfig>
  )
}
