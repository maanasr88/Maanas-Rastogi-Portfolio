import { Link } from 'react-router-dom'
import StatusBadge from './StatusBadge'
import { projects } from '../data/projects'

// One tile family for every project listing: the photo fills the tile, the text sits
// on a dark fade at the bottom, and a part designator (U1, U2...) marks the corner.
// size: 'lg' adds the summary, 'md' shows metrics, 'sm' is title only.
export default function ProjectCard({ project, size = 'md', headingLevel = 3, className = '' }) {
  const { to, code, title, org, role, status, image, imagePosition, screen, summary, metrics = [] } = project
  const Heading = `h${headingLevel}`
  const designator = `U${projects.indexOf(project) + 1}`

  const trackGlow = e => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
  }

  return (
    <Link to={to} className={`tile tile-${size}${screen ? ' is-screen' : ''} ${className}`.trim()} onPointerMove={trackGlow}>
      <div className="tile-media">
        <img
          src={image}
          alt=""
          loading="lazy"
          decoding="async"
          style={imagePosition ? { objectPosition: imagePosition } : undefined}
        />
      </div>
      <span className="tile-des mono">{designator} · {code}</span>
      {status && <span className="tile-status"><StatusBadge status={status} /></span>}

      <div className="tile-body">
        <p className="tile-org mono">{org} · {role}</p>
        <Heading className="tile-title">{title}</Heading>
        {size === 'lg' && <p className="tile-summary">{summary}</p>}
        {size !== 'sm' && metrics.length > 0 && (
          <dl className="tile-metrics">
            {metrics.slice(0, 3).map(m => (
              <div key={m.label}>
                <dt>{m.label}</dt>
                <dd>{m.value}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </Link>
  )
}
