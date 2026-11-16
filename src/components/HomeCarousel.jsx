import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import img from '../img'

const SLIDES = [
  { image: img('/images/baja-racing/car-course-action.jpg'), category: 'Team Projects', label: 'Longhorn Baja Racing', to: '/team/baja-racing' },
  { image: img('/images/neurotech/wheelchair-render-cover.jpg'), category: 'Team Projects', label: 'Longhorn Neurotech', to: '/team/neurotech' },
  { image: img('/images/robotics-society/robots-faceoff.jpg'), category: 'Team Projects', label: 'UT Robotics & Automation Society', to: '/team/robotics-society' },
  { image: img('/images/banerjee-lab/wafer-characterization-cover.jpg'), category: 'Industry & Research', label: 'Banerjee Lab', to: '/experience/banerjee-lab' },
  { image: img('/images/ironlattice/hank-cover.svg'), category: 'Industry & Research', label: 'Ironlattice', to: '/experience/ironlattice' },
  { image: img('/images/quantum-computing/chiplet-render-cover.jpg'), category: 'Industry & Research', label: 'Quantum Computing Research', to: '/experience/quantum-computing' },
  { image: img('/images/vlsi-risc-v/die-layout-cover.svg'), category: 'Personal Projects', label: '32-bit Custom RISC-V Processor', to: '/projects/vlsi-risc-v' },
  { image: img('/images/helmet-hud/helmet-hud-render-cover.jpg'), category: 'Personal Projects', label: 'Motorcycle Helmet HUD', to: '/projects/helmet-hud' },
  { image: img('/images/gamble-on-the-go/handheld-cover.svg'), category: 'Personal Projects', label: 'Gamble on the Go', to: '/projects/gamble-on-the-go' },
]

export default function HomeCarousel() {
  const [active, setActive] = useState(0)
  const timerRef = useRef(null)
  const n = SLIDES.length

  const goTo = (i) => setActive(((i % n) + n) % n)
  const next = () => goTo(active + 1)
  const prev = () => goTo(active - 1)

  useEffect(() => {
    timerRef.current = setInterval(() => setActive(a => (a + 1) % n), 4500)
    return () => clearInterval(timerRef.current)
  }, [n])

  const pause = () => clearInterval(timerRef.current)
  const resume = () => {
    pause()
    timerRef.current = setInterval(() => setActive(a => (a + 1) % n), 4500)
  }

  return (
    <div className="slideshow" onMouseEnter={pause} onMouseLeave={resume}>
      <div className="slideshow-track">
        {SLIDES.map((s, i) => (
          <Link
            key={s.to}
            to={s.to}
            className={`slideshow-slide${i === active ? ' active' : ''}`}
            aria-hidden={i !== active}
            tabIndex={i === active ? 0 : -1}
          >
            <div className="slideshow-blur-bg" style={{ backgroundImage: `url('${s.image}')` }} />
            <img src={s.image} alt={s.label} loading="lazy" />
            <div className="slideshow-overlay" />
            <div className="slideshow-caption">
              <span className="slideshow-caption-category">{s.category}</span>
              <span className="slideshow-caption-label">{s.label}</span>
            </div>
          </Link>
        ))}
      </div>

      <button className="slideshow-arrow slideshow-arrow-left" onClick={prev} aria-label="Previous slide">‹</button>
      <button className="slideshow-arrow slideshow-arrow-right" onClick={next} aria-label="Next slide">›</button>

      <div className="slideshow-dots">
        {SLIDES.map((s, i) => (
          <button
            key={s.to}
            className={`slideshow-dot${i === active ? ' active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
