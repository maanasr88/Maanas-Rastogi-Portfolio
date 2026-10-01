import { useEffect, useRef, useState } from 'react'
import ScrollReveal from '../components/ScrollReveal'

// ─── Skill Category Data ────────────────────────────────────────────────────────

const skillCategories = [
  {
    label: 'VLSI & Digital Design',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="6" width="12" height="12" rx="1.5" />
        <rect x="9.5" y="9.5" width="5" height="5" rx="0.5" />
        <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
      </svg>
    ),
    skills: ['Verilog', 'RISC-V Architecture', 'FPGA Synthesis', 'Vivado', 'OpenROAD', 'Timing Closure', 'Physical Design'],
  },
  {
    label: 'Circuit & PCB Design',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8" cy="8" r="1.4" />
        <circle cx="16" cy="8" r="1.4" />
        <circle cx="8" cy="16" r="1.4" />
        <path d="M9.4 8H14a2 2 0 0 1 2 2v4.6M8 9.4V16h4.6" />
      </svg>
    ),
    skills: ['Altium Designer', 'PCB Layout', 'Power Distribution', 'Analog Circuit Design', 'Soldering', 'Circuit Theory'],
  },
  {
    label: 'Simulation & Modeling',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    skills: ['COMSOL', 'QuantumATK', 'Synopsys TCAD', 'SPICE Modeling', 'Monte Carlo Simulation', 'Device Physics'],
  },
  {
    label: 'Quantum Computing',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="12" rx="9" ry="3.6" />
        <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)" />
      </svg>
    ),
    skills: ['Stim', 'Sinter', 'PyMatching', 'Surface-Code QEC', 'Stabilizer Circuits', 'Fault-Tolerance Analysis'],
  },
  {
    label: 'Programming',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    skills: ['Python', 'Java', 'C/C++', 'Assembly', 'Verilog', 'Git'],
  },
  {
    label: 'Leadership',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    skills: ['Team Management (10+)', 'Technical Workshops', 'Design Reviews', 'Cross-functional Collaboration', 'Communication', 'Adaptability'],
  },
]

const tools = [
  { name: 'Verilog' },
  { name: 'Vivado' },
  { name: 'OpenROAD' },
  { name: 'Altium Designer' },
  { name: 'COMSOL' },
  { name: 'QuantumATK' },
  { name: 'Synopsys TCAD' },
  { name: 'Stim' },
  { name: 'PyMatching' },
  { name: 'Python' },
  { name: 'C/C++' },
  { name: 'Git' },
]

// ─── Radar / Spider Chart ───────────────────────────────────────────────────────

const ANGLES = [-90, -30, 30, 90, 150, 210]

const radarCharts = [
  {
    title: 'VLSI & Hardware',
    axes: [
      { label: 'Verilog',        pct: 82, angle: ANGLES[0] },
      { label: 'RISC-V Design',  pct: 75, angle: ANGLES[1] },
      { label: 'OpenROAD',       pct: 65, angle: ANGLES[2] },
      { label: 'Vivado / FPGA',  pct: 78, angle: ANGLES[3] },
      { label: 'PCB Design',     pct: 85, angle: ANGLES[4] },
      { label: 'Timing Closure', pct: 68, angle: ANGLES[5] },
    ],
  },
  {
    title: 'Embedded & Programming',
    axes: [
      { label: 'Python',        pct: 85, angle: ANGLES[0] },
      { label: 'C/C++',         pct: 80, angle: ANGLES[1] },
      { label: 'Assembly',      pct: 65, angle: ANGLES[2] },
      { label: 'Java',          pct: 72, angle: ANGLES[3] },
      { label: 'Microcontrollers', pct: 83, angle: ANGLES[4] },
      { label: 'Sensor Interfacing', pct: 78, angle: ANGLES[5] },
    ],
  },
  {
    title: 'Simulation & Research',
    axes: [
      { label: 'COMSOL',          pct: 70, angle: ANGLES[0] },
      { label: 'QuantumATK',      pct: 65, angle: ANGLES[1] },
      { label: 'Synopsys TCAD',   pct: 68, angle: ANGLES[2] },
      { label: 'Stim / PyMatching', pct: 75, angle: ANGLES[3] },
      { label: 'Monte Carlo',     pct: 80, angle: ANGLES[4] },
      { label: 'SPICE',           pct: 72, angle: ANGLES[5] },
    ],
  },
]

const CX = 220, CY = 220, MAX_R = 155
const toRad = deg => (deg * Math.PI) / 180

function pt(angleDeg, fraction) {
  return {
    x: CX + MAX_R * fraction * Math.cos(toRad(angleDeg)),
    y: CY + MAX_R * fraction * Math.sin(toRad(angleDeg)),
  }
}

function axesToPts(axes, scale = 1) {
  return axes.map(a => {
    const p = pt(a.angle, (a.pct / 100) * scale)
    return `${p.x.toFixed(2)},${p.y.toFixed(2)}`
  }).join(' ')
}

function gridPts(axes, level) {
  return axes.map(a => {
    const p = pt(a.angle, level)
    return `${p.x.toFixed(2)},${p.y.toFixed(2)}`
  }).join(' ')
}

const GRID_LEVELS = [0.25, 0.5, 0.75, 1.0]
const LABEL_SCALE = 1.22

function labelAnchor(angle) {
  if (Math.abs(angle) === 90) return 'middle'
  if (angle > -75 && angle < 75) return 'start'
  return 'end'
}
function labelBaseline(angle) {
  if (angle === -90) return 'auto'
  if (angle === 90) return 'hanging'
  return 'middle'
}

function RadarChartSlideshow() {
  const polygonRef   = useRef(null)
  const containerRef = useRef(null)
  const didAnimate   = useRef(false)
  const animating    = useRef(false)

  const [activeChart, setActiveChart] = useState(0)
  const [labelVisible, setLabelVisible] = useState(true)
  const [hovered, setHovered] = useState(null)

  const currentAxes = radarCharts[activeChart].axes

  useEffect(() => {
    if (polygonRef.current) {
      polygonRef.current.setAttribute('points', Array(6).fill(`${CX},${CY}`).join(' '))
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !didAnimate.current) {
        didAnimate.current = true
        const start = performance.now()
        const tick = (now) => {
          const t    = Math.min((now - start) / 800, 1)
          const ease = 1 - Math.pow(1 - t, 3)
          if (polygonRef.current) {
            polygonRef.current.setAttribute('points', axesToPts(radarCharts[0].axes, ease))
          }
          if (t < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      }
    }, { threshold: 0.25 })

    observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  const goTo = (newIdx) => {
    if (animating.current || newIdx === activeChart) return
    animating.current = true
    setHovered(null)
    setLabelVisible(false)

    const fromAxes = radarCharts[activeChart].axes
    const toAxes   = radarCharts[newIdx].axes

    setTimeout(() => {
      setActiveChart(newIdx)

      const start = performance.now()
      const dur   = 550

      const tick = (now) => {
        const t = Math.min((now - start) / dur, 1)
        const e = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2

        const pts = fromAxes.map((fa, i) => {
          const ta    = toAxes[i]
          const interp = fa.pct + (ta.pct - fa.pct) * e
          const p     = pt(fa.angle, interp / 100)
          return `${p.x.toFixed(2)},${p.y.toFixed(2)}`
        }).join(' ')

        if (polygonRef.current) polygonRef.current.setAttribute('points', pts)

        if (t < 1) {
          requestAnimationFrame(tick)
        } else {
          setLabelVisible(true)
          animating.current = false
        }
      }

      requestAnimationFrame(tick)
    }, 180)
  }

  const n = radarCharts.length

  return (
    <div ref={containerRef} className="radar-wrap">
      <div className="radar-nav-row">
        <button className="radar-nav-arrow" onClick={() => goTo((activeChart - 1 + n) % n)} aria-label="Previous chart">‹</button>
        <span className={`radar-chart-title${labelVisible ? '' : ' fading'}`}>
          {radarCharts[activeChart].title}
        </span>
        <button className="radar-nav-arrow" onClick={() => goTo((activeChart + 1) % n)} aria-label="Next chart">›</button>
      </div>

      <svg viewBox="-60 -20 560 480" className="radar-svg" aria-hidden="true">
        {GRID_LEVELS.map(level => (
          <polygon key={level} className="radar-grid-ring" points={gridPts(currentAxes, level)} />
        ))}

        {currentAxes.map(a => {
          const end = pt(a.angle, 1)
          return (
            <line key={a.label} className="radar-axis-line"
              x1={CX} y1={CY} x2={end.x.toFixed(2)} y2={end.y.toFixed(2)} />
          )
        })}

        <polygon ref={polygonRef} className="radar-fill-poly"
          points={Array(6).fill(`${CX},${CY}`).join(' ')} />

        <g className={labelVisible ? '' : 'radar-group-fading'}>
          {currentAxes.map((a, i) => {
            const p = pt(a.angle, a.pct / 100)
            return (
              <circle key={a.label}
                className={`radar-dot${hovered === i ? ' radar-dot-active' : ''}`}
                cx={p.x.toFixed(2)} cy={p.y.toFixed(2)}
                r={hovered === i ? 7 : 5}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)} />
            )
          })}
        </g>

        <g className={labelVisible ? '' : 'radar-group-fading'}>
          {currentAxes.map(a => {
            const lp = pt(a.angle, LABEL_SCALE)
            return (
              <text key={a.label} className="radar-label"
                x={lp.x.toFixed(2)} y={lp.y.toFixed(2)}
                textAnchor={labelAnchor(a.angle)}
                dominantBaseline={labelBaseline(a.angle)}>
                {a.label}
              </text>
            )
          })}
        </g>

        {hovered !== null && (() => {
          const a  = currentAxes[hovered]
          const p  = pt(a.angle, a.pct / 100)
          const tx = p.x, ty = p.y - 22
          return (
            <g pointerEvents="none">
              <rect x={tx - 54} y={ty - 14} width={108} height={22} rx={5} className="radar-tooltip-bg" />
              <text x={tx} y={ty - 3} textAnchor="middle" className="radar-tooltip-text">
                {a.label}: {a.pct}%
              </text>
            </g>
          )
        })()}
      </svg>

      <div className="radar-nav-dots">
        {radarCharts.map((c, i) => (
          <button key={i} className={`radar-nav-dot${i === activeChart ? ' active' : ''}`}
            onClick={() => goTo(i)} aria-label={c.title} />
        ))}
      </div>

      <div className={`radar-legend${labelVisible ? '' : ' radar-legend-fading'}`}>
        {currentAxes.map((a, i) => (
          <div key={a.label}
            className={`radar-legend-item${hovered === i ? ' active' : ''}`}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}>
            <span className="radar-legend-dot" />
            <span className="radar-legend-label">{a.label}</span>
            <span className="radar-legend-pct">{a.pct}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── Skill Card ────────────────────────────────────────────────────────────────

function SkillCard({ label, icon, skills }) {
  const handlePillClick = (e) => {
    const el = e.currentTarget
    el.classList.remove('pill-pulse')
    void el.offsetWidth
    el.classList.add('pill-pulse')
    el.addEventListener('animationend', () => el.classList.remove('pill-pulse'), { once: true })
  }

  return (
    <div className="skills-cat-card-v2">
      <div className="skills-cat-header-v2">
        <span className="skills-cat-icon-v2">{icon}</span>
        <span className="skills-cat-label-v2">{label}</span>
      </div>
      <div className="pill-group skills-pill-group">
        {skills.map(s => (
          <span key={s} className="skill-pill" onClick={handlePillClick}>{s}</span>
        ))}
      </div>
    </div>
  )
}

// ─── Typewriter Hook ───────────────────────────────────────────────────────────

function useTypewriter(text, speed = 18) {
  const ref       = useRef(null)
  const triggered = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.textContent = ''

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !triggered.current) {
        triggered.current = true
        let i = 0
        const interval = setInterval(() => {
          if (i < text.length) { el.textContent += text[i]; i++ }
          else clearInterval(interval)
        }, speed)
      }
    }, { threshold: 0.5 })

    observer.observe(el)
    return () => observer.disconnect()
  }, [text, speed])

  return ref
}

// ─── Page ──────────────────────────────────────────────────────────────────────

const SUBTITLE = "A snapshot of the tools, software, and methods I've built proficiency in across coursework, research, and hands-on engineering projects."

export default function Skills() {
  const subtitleRef = useTypewriter(SUBTITLE)

  return (
    <div className="page-wrapper">
      <section className="projects-section">
        <div className="container">

          <ScrollReveal>
            <div className="skills-header-block">
              <h2 className="skills-heading"><span className="section-title-accent">Skills</span></h2>
              <div className="skills-underline-bar" />
              <p ref={subtitleRef} className="skills-subtitle-tw" aria-label={SUBTITLE}>&nbsp;</p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="card radar-card">
              <div className="skills-highlights-label">Core Proficiencies</div>
              <RadarChartSlideshow />
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="skills-marquee-section">
              <div className="skills-marquee-label">Tools I Use</div>
              <div className="marquee-outer">
                <div className="marquee-track">
                  {[...tools, ...tools].map((t, i) => (
                    <div key={i} className="marquee-badge">
                      <span className="marquee-badge-dot" />
                      <span className="marquee-badge-name">{t.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div className="skills-grid">
            {skillCategories.map((cat, i) => (
              <ScrollReveal key={cat.label} delay={(i % 3) + 1}>
                <SkillCard {...cat} />
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>
    </div>
  )
}
