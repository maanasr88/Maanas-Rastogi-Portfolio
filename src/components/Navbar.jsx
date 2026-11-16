import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiDownload, FiMail } from 'react-icons/fi'
import img from '../img'
import { goToContact } from '../contact'

const LINKS = [
  { to: '/work', label: 'Work', match: ['/work', '/experience', '/team', '/projects'], exclude: ['/team/baja-racing'] },
  { to: '/baja', label: 'Baja', match: ['/baja', '/team/baja-racing'] },
  { to: '/about', label: 'About', match: ['/about'] },
  { to: '/skills', label: 'Skills', match: ['/skills'] },
]

const RESUME = img('/Resume_Maanas_Rastogi.pdf')

function isActive(pathname, link) {
  const hit = m => pathname === m || pathname.startsWith(m + '/')
  return link.match.some(hit) && !(link.exclude || []).some(hit)
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const toggleRef = useRef(null)
  const { pathname } = useLocation()

  // Close the menu on any route change (back/forward included)
  useEffect(() => { setOpen(false) }, [pathname])

  // Escape closes the menu and returns focus to the toggle; the page behind doesn't scroll
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [open])

  // The name always lands at the top of the homepage, even when already on it
  const toTop = (e) => {
    if (pathname !== '/') return
    e.preventDefault()
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
  }

  // Close the mobile menu first so the page can scroll, then jump to the footer
  const contact = (e) => {
    e.preventDefault()
    setOpen(false)
    setTimeout(() => goToContact(), 30)
  }

  return (
    <>
      <header className="nav">
        <div className="wrap nav-inner">
          <Link to="/" className="nav-brand" aria-label="Maanas Rastogi, home" onClick={toTop}>
            <span className="nav-brand-mark" aria-hidden="true">MR</span>
            <span className="nav-brand-name">Maanas Rastogi</span>
            <span className="nav-brand-meta">ECE · UT Austin</span>
          </Link>

          <nav aria-label="Main">
            <ul className="nav-links">
              {LINKS.map(l => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="nav-link"
                    aria-current={isActive(pathname, l) ? 'page' : undefined}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="nav-actions">
            <a href={RESUME} download="Resume_Maanas_Rastogi.pdf" className="btn btn-outline btn-sm">
              <FiDownload size={14} aria-hidden="true" />
              Resume
            </a>
            <a href="#contact" className="btn btn-accent btn-sm" onClick={contact}>
              <FiMail size={14} aria-hidden="true" />
              Contact
            </a>
            <button
              ref={toggleRef}
              type="button"
              className="nav-toggle"
              onClick={() => setOpen(o => !o)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="nav-menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      <nav id="nav-menu" aria-label="Mobile" className={`nav-menu${open ? ' open' : ''}`} hidden={!open}>
        <Link to="/" className="nav-menu-link" aria-current={pathname === '/' ? 'page' : undefined} onClick={toTop}>
          Home <span className="mono">00</span>
        </Link>
        {LINKS.map((l, i) => (
          <Link
            key={l.to}
            to={l.to}
            className="nav-menu-link"
            aria-current={isActive(pathname, l) ? 'page' : undefined}
          >
            {l.label} <span className="mono">0{i + 1}</span>
          </Link>
        ))}
        <a href="#contact" className="btn btn-accent" onClick={contact}>
          <FiMail size={14} aria-hidden="true" />
          Contact me
        </a>
        <a href={RESUME} download="Resume_Maanas_Rastogi.pdf" className="btn btn-outline nav-menu-resume">
          <FiDownload size={14} aria-hidden="true" />
          Download resume
        </a>
      </nav>
    </>
  )
}
