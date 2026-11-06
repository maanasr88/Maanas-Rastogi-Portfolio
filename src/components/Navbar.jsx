import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FiDownload } from 'react-icons/fi'
import img from '../img'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const links = [
    { to: '/', label: 'Home' },
    { to: '/experience', label: 'Experience' },
    { to: '/team', label: 'Team Projects' },
    { to: '/projects', label: 'Personal Projects' },
    { to: '/skills', label: 'Skills' },
  ]

  return (
    <>
      <nav className="navbar">
        <div className="navbar-inner">
          <NavLink
            to="/"
            className="navbar-brand"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
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
            href={img('/resume.pdf')}
            download="Resume_Maanas_Rastogi.pdf"
            className="btn btn-primary navbar-cta"
          >
            <FiDownload size={13} />
            Resume
          </a>
          <button
            className="navbar-hamburger"
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
      <div className={`navbar-mobile${mobileOpen ? ' open' : ''}`}>
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
          href={img('/resume.pdf')}
          download="Resume_Maanas_Rastogi.pdf"
          className="navbar-mobile-resume"
          onClick={() => setMobileOpen(false)}
        >
          <FiDownload size={14} />
          Download Resume
        </a>
      </div>
    </>
  )
}
