import { Link } from 'react-router-dom'
import ScrollReveal from './ScrollReveal'

export default function ProjectCard({ icon, tag, title, description, to, delay = 0 }) {
  const inner = (
    <div className="card project-card" style={{ cursor: to ? 'pointer' : 'default' }}>
      <div className="project-card-img-wrap">
        <div className="icon-tile">{icon}</div>
      </div>
      <div className="project-card-body">
        {tag && <div className="project-card-tag">{tag}</div>}
        <h3 className="project-card-title">{title}</h3>
        {description && <p className="project-card-desc">{description}</p>}
        {to && (
          <div className="project-card-footer">
            <span className="project-card-link">View Project →</span>
          </div>
        )}
      </div>
    </div>
  )

  return (
    <ScrollReveal delay={delay}>
      {to ? <Link to={to} style={{ display: 'block', height: '100%', textDecoration: 'none', color: 'inherit' }}>{inner}</Link> : inner}
    </ScrollReveal>
  )
}
