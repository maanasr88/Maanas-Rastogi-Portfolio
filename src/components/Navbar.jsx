import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { FiDownload } from 'react-icons/fi'
import img from '../img'
import { scrollBehavior } from '../motion'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const toggleRef = useRef(null)
  const { pathname } = useLocation()

  // Close the menu whenever the route changes (back/forward included)
  useEffect(() => { setMobileOpen(false) }, [pathname])

  // Escape closes the menu and returns focus to the toggle
  useEffect(() => {
    if (!mobileOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setMobileOpen(false)
        toggleRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [mobileOpen])

  const links = [
    { to: '/', label: 'Home' },
    { to: '/experience', label: 'Experience' },
    { to: '/team', label: 'Team Projects' },
    { to: '/projects', label: 'Personal Projects' },
    { to: '/skills', label: 'Skills' },
  ]

  return (
    <>
      <nav className="navbar" aria-label="Main">
        <div className="navbar-inner">
          <NavLink
            to="/"
            className="navbar-brand"
            onClick={() => window.scrollTo({ top: 0, behavior: scrollBehavior() })}
          >
            <span className="navbar-brand-mark">MR</span>
            MAANAS RASTOGI
          </NavLink>
          <ul className="navbar-links">
            {links.map(l => (
              <li key={l.to}>
                <NavLink to={l.to} end={l.to === '/'} className={({ isActive }) => isActive ? 'active' : ''}>
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <a
            href={img('/Resume_Maanas_Rastogi.pdf')}
            download="Resume_Maanas_Rastogi.pdf"
            className="btn btn-primary navbar-cta"
          >
            <FiDownload size={13} />
            Resume
          </a>
          <button
            ref={toggleRef}
            className="navbar-hamburger"
            onClick={() => setMobileOpen(o => !o)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
      <nav id="mobile-menu" aria-label="Mobile" className={`navbar-mobile${mobileOpen ? ' open' : ''}`}>
        {links.map(l => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.to === '/'}
            className={({ isActive }) => isActive ? 'active' : ''}
            onClick={() => setMobileOpen(false)}
          >
            {l.label}
          </NavLink>
        ))}
        <a
          href={img('/Resume_Maanas_Rastogi.pdf')}
          download="Resume_Maanas_Rastogi.pdf"
          className="navbar-mobile-resume"
          onClick={() => setMobileOpen(false)}
        >
          <FiDownload size={14} />
          Download Resume
        </a>
      </nav>
    </>
  )
}
