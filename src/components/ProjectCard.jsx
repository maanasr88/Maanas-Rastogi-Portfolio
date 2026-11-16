import { Link } from 'react-router-dom'
import StatusBadge from './StatusBadge'
import { CONTEXTS } from '../data/projects'

// One card family for every project listing. `size="lg"` is the featured variant.
export default function ProjectCard({ project, size = 'md', headingLevel = 3 }) {
  const { to, code, title, org, role, context, status, image, imagePosition, screen, summary, metrics = [] } = project
  const Heading = `h${headingLevel}`

  return (
    <Link to={to} className={`pcard pcard-${size}`}>
      <div className={`pcard-media${screen ? ' is-screen' : ''}`}>
        <img
          src={image}
          alt=""
          loading="lazy"
          decoding="async"
          style={imagePosition ? { objectPosition: imagePosition } : undefined}
        />
        <span className="pcard-code mono">{code}</span>
      </div>

      <div className="pcard-body">
        <div className="pcard-meta">
          <span className="mono">{CONTEXTS[context]}</span>
          <StatusBadge status={status} />
        </div>
        <Heading className="pcard-title">{title}</Heading>
        <p className="pcard-org">{role} · {org}</p>
        {size === 'lg' && <p className="pcard-summary">{summary}</p>}

        {metrics.length > 0 && (
          <dl className="pcard-metrics">
            {metrics.slice(0, 3).map(m => (
              <div key={m.label}>
                <dt>{m.label}</dt>
                <dd>{m.value}</dd>
              </div>
            ))}
          </dl>
        )}

        <span className="pcard-cta" aria-hidden="true">Read case study <span className="arrow">→</span></span>
      </div>
    </Link>
  )
}
