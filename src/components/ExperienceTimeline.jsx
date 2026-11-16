import { Link } from 'react-router-dom'
import { CONTEXTS, experience } from '../data/projects'

// Experience as a timeline: one row per role, with a bar spanning its dates on a
// shared time axis, so overlapping roles read at a glance. Ongoing roles run to
// the "now" line. Every row links to its case study.

const toMonths = ym => {
  const [y, m] = ym.split('-').map(Number)
  return y * 12 + (m - 1)
}

export default function ExperienceTimeline() {
  const now = new Date()
  const nowM = now.getFullYear() * 12 + now.getMonth()
  const startM = Math.min(...experience.map(p => toMonths(p.start))) - 1
  const endM = nowM + 2
  const span = endM - startM
  const pct = m => ((m - startM) / span) * 100

  // A tick at each January inside the range
  const years = []
  for (let y = Math.ceil(startM / 12); y * 12 <= endM; y++) years.push(y)

  return (
    <div className="timeline">
      <div className="timeline-axis" aria-hidden="true">
        <span className="timeline-axis-spacer" />
        <div className="timeline-axis-track">
          {years.map(y => (
            <span key={y} className="timeline-year mono" style={{ left: `${pct(y * 12)}%` }}>{y}</span>
          ))}
          <span className="timeline-now mono" style={{ left: `${pct(nowM)}%` }}>Now</span>
        </div>
      </div>

      <ol className="timeline-rows" role="list">
        {experience.map(p => {
          const s = toMonths(p.start)
          const e = p.end ? toMonths(p.end) + 1 : nowM + 1
          const ongoing = !p.end
          return (
            <li key={p.id}>
              <Link to={p.to} className={`timeline-row is-${p.context}`}>
                <span className="timeline-label">
                  <span className="timeline-role">{p.role}</span>
                  <span className="timeline-org">{p.org} <span className="tag">{CONTEXTS[p.context]}</span></span>
                  <span className="timeline-when mono">{p.period}</span>
                </span>
                <span className="timeline-track">
                  {years.map(y => (
                    <span key={y} className="timeline-grid" style={{ left: `${pct(y * 12)}%` }} aria-hidden="true" />
                  ))}
                  <span className="timeline-grid is-now" style={{ left: `${pct(nowM)}%` }} aria-hidden="true" />
                  <span
                    className={`timeline-bar${ongoing ? ' is-ongoing' : ''}`}
                    style={{ left: `${pct(s)}%`, width: `${Math.max(pct(e) - pct(s), 2)}%` }}
                  >
                    <span className="timeline-period mono">{p.period}</span>
                  </span>
                </span>
              </Link>
            </li>
          )
        })}
      </ol>

      <ul className="timeline-legend mono" role="list">
        <li><span className="timeline-key is-industry" />Industry</li>
        <li><span className="timeline-key is-research" />Research</li>
        <li><span className="timeline-key is-team" />Team</li>
      </ul>
    </div>
  )
}
