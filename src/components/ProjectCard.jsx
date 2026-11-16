import { Link } from 'react-router-dom'
import ScrollReveal from './ScrollReveal'
import StatusBadge from './StatusBadge'

export default function ProjectCard({ icon, image, imageStyle, tag, status, title, description, to, delay = 0 }) {
  const inner = (
    <div className="card project-card" style={{ cursor: to ? 'pointer' : 'default' }}>
      <div className="project-card-img-wrap">
        {image ? (
          <>
            <img src={image} alt={title} className="project-card-img" loading="lazy" style={imageStyle} />
            <div className="project-card-overlay">
              <div className="project-card-overlay-title">{title}</div>
              {description && <p className="project-card-overlay-desc">{description}</p>}
              {to && <span className="project-card-overlay-cta">View Project →</span>}
            </div>
          </>
        ) : (
          <div className="icon-tile">{icon}</div>
        )}
      </div>
      <div className="project-card-body">
        {(tag || status) && (
          <div className="project-card-tag-row">
            {tag && <span className="project-card-tag">{tag}</span>}
            <StatusBadge status={status} />
          </div>
        )}
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
