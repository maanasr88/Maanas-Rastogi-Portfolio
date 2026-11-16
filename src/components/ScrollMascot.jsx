import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { useLocation } from 'react-router-dom'
import img from '../img'
import { prefersReducedMotion } from '../motion'

// A small mascot that travels along the bottom of the screen as you scroll:
// left edge at the top of the page, right edge at the bottom. It turns around when
// you scroll back up. Decorative only, so screen readers skip it.
function ScrollMascot({ className, children }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (prefersReducedMotion()) {
      el.style.transform = 'translateX(16px)'
      return
    }

    let lastY = window.scrollY
    let facing = 1
    let frame = 0
    let stop = 0

    const update = () => {
      frame = 0
      const max = document.documentElement.scrollHeight - window.innerHeight
      const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
      const travel = window.innerWidth - el.offsetWidth - 32
      if (window.scrollY > lastY + 1) facing = 1
      else if (window.scrollY < lastY - 1) facing = -1
      lastY = window.scrollY
      el.style.transform = `translateX(${16 + progress * travel}px) scaleX(${facing})`
      el.classList.add('is-moving')
      clearTimeout(stop)
      stop = setTimeout(() => el.classList.remove('is-moving'), 180)
    }

    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(frame)
      clearTimeout(stop)
    }
  }, [])

  // Portal to <body>: page transitions transform the page wrapper, which would
  // otherwise pin this "fixed" element to the page instead of the screen
  return createPortal(
    <div className={`scroll-mascot ${className}`} ref={ref} aria-hidden="true">
      {children}
    </div>,
    document.body
  )
}

// Car 185, drawn side-on and facing right. The wheels spin while it moves.
function BajaCar() {
  return (
    <svg viewBox="0 0 220 124" width="220" height="124">
      <ellipse cx="110" cy="118" rx="96" ry="4" fill="#000" opacity="0.35" />
      {/* roll cage */}
      <path d="M58 70 L76 20 L150 20 L172 62 M76 20 L96 62 M150 20 L132 62 M112 20 L112 62" fill="none" stroke="#6b707a" strokeWidth="5" strokeLinejoin="round" strokeLinecap="round" />
      {/* driver */}
      <circle cx="118" cy="40" r="11" fill="#f4f4f5" />
      <path d="M118 33 a7 7 0 0 1 9 6 h-9 z" fill="#ff7a52" />
      {/* rear firewall with the car number */}
      <path d="M58 70 L66 30 L86 30 L80 70 Z" fill="#141414" stroke="#6b707a" strokeWidth="2" />
      <text x="73" y="54" textAnchor="middle" fontFamily="Inter Tight, sans-serif" fontWeight="700" fontSize="13" fill="#ff7a1a" transform="rotate(-10 73 54)">185</text>
      {/* orange side panel */}
      <path d="M48 66 L184 62 L196 78 L176 86 L52 88 Z" fill="#f26b1d" />
      <path d="M90 70 L170 68" stroke="#b84a10" strokeWidth="2" strokeLinecap="round" />
      <text x="128" y="81" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#9c3d0c">EJH</text>
      {/* front nose and shocks */}
      <path d="M184 62 L204 70 L196 78 Z" fill="#141414" />
      <path d="M62 86 L70 66 M170 86 L162 66" stroke="#c9ced8" strokeWidth="3" strokeLinecap="round" />
      {/* wheels */}
      <g className="mascot-wheel">
        <circle cx="54" cy="96" r="22" fill="#1a1b20" stroke="#2c2f36" strokeWidth="5" strokeDasharray="4 3" />
        <circle cx="54" cy="96" r="9" fill="#2c2f36" />
        <path d="M54 82 V110 M40 96 H68" stroke="#7c7f89" strokeWidth="2.5" />
      </g>
      <g className="mascot-wheel">
        <circle cx="172" cy="96" r="22" fill="#1a1b20" stroke="#2c2f36" strokeWidth="5" strokeDasharray="4 3" />
        <circle cx="172" cy="96" r="9" fill="#2c2f36" />
        <path d="M172 82 V110 M158 96 H186" stroke="#7c7f89" strokeWidth="2.5" />
      </g>
    </svg>
  )
}

// Pick the mascot for the current section of the site
export default function Mascots() {
  const { pathname } = useLocation()
  if (pathname.startsWith('/experience/ironlattice')) {
    return (
      <ScrollMascot key={pathname} className="mascot-hank">
        <img src={img('/images/ironlattice/hank-sprite.svg')} alt="" width="217" height="96" />
      </ScrollMascot>
    )
  }
  if (pathname === '/baja' || pathname.startsWith('/team/baja-racing')) {
    return (
      <ScrollMascot key={pathname} className="mascot-car">
        <BajaCar />
      </ScrollMascot>
    )
  }
  return null
}
