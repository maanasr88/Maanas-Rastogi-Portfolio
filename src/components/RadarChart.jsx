import { useId, useState } from 'react'

// Six-axis radar chart for a skill area. Values are 0-100. The shape grows in on
// load (skipped with reduced motion), and hovering or focusing a point shows its value.
const SIZE = 460
const C = SIZE / 2
const R = 128
const LEVELS = [0.25, 0.5, 0.75, 1]

function point(i, n, f) {
  const a = (-90 + (360 / n) * i) * (Math.PI / 180)
  return [C + R * f * Math.cos(a), C + R * f * Math.sin(a)]
}

export default function RadarChart({ title, axes }) {
  const [active, setActive] = useState(null)
  const gid = useId().replace(/:/g, '')
  const n = axes.length
  const ring = f => axes.map((_, i) => point(i, n, f).join(',')).join(' ')
  const shape = axes.map((a, i) => point(i, n, a.value / 100).join(',')).join(' ')
  const avg = Math.round(axes.reduce((s, a) => s + a.value, 0) / n)
  const shown = active == null ? null : axes[active]

  return (
    <figure className="radar-card">
      <figcaption className="radar-head">
        <span className="radar-title">{title}</span>
        <span className="radar-readout mono" aria-live="polite">
          {shown ? <>{shown.label} <b>{shown.value}</b></> : <>avg <b>{avg}</b></>}
        </span>
      </figcaption>

      <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="radar-svg" role="img"
        aria-label={`${title}: ${axes.map(a => `${a.label} ${a.value}`).join(', ')}`}>
        <defs>
          <linearGradient id={`fill-${gid}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ff7a52" stopOpacity="0.45" />
            <stop offset="1" stopColor="#ffb347" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {LEVELS.map(f => (
          <polygon key={f} points={ring(f)} fill="none" stroke="var(--rule)" strokeWidth="1" />
        ))}
        {axes.map((_, i) => {
          const [x, y] = point(i, n, 1)
          return <line key={i} x1={C} y1={C} x2={x} y2={y} stroke="var(--rule)" strokeWidth="1" />
        })}

        <g className="radar-shape">
          <polygon points={shape} fill={`url(#fill-${gid})`} stroke="#ff7a52" strokeWidth="2" strokeLinejoin="round" />
          {axes.map((a, i) => {
            const [x, y] = point(i, n, a.value / 100)
            return (
              <circle
                key={a.label}
                cx={x}
                cy={y}
                r={active === i ? 7 : 5}
                className="radar-dot"
                tabIndex={0}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(i)}
                onBlur={() => setActive(null)}
              >
                <title>{`${a.label}: ${a.value}`}</title>
              </circle>
            )
          })}
        </g>

        {axes.map((a, i) => {
          const [x, y] = point(i, n, 1.16)
          const anchor = Math.abs(x - C) < 4 ? 'middle' : x > C ? 'start' : 'end'
          return (
            <text
              key={a.label}
              x={x}
              y={y}
              textAnchor={anchor}
              dominantBaseline="middle"
              className={`radar-label${active === i ? ' is-active' : ''}`}
            >
              {a.label}
            </text>
          )
        })}
      </svg>
    </figure>
  )
}
