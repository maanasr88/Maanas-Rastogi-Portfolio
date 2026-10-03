import { Link } from 'react-router-dom'
import { PillGroup } from './PillBadge'

export default function DetailPage({ backTo, backLabel, tag, title, icon, heroImage, heroStyle, software, roles, children }) {
  return (
    <div className="project-detail">
      {heroImage ? (
        <div className="cinematic-header">
          <div className="cinematic-header-bg" style={{ backgroundImage: `url('${heroImage}')`, ...heroStyle }} />
          <div className="cinematic-header-vignette" />
          <div className="cinematic-header-overlay" />
          <div className="container cinematic-header-content">
            <Link to={backTo} className="project-detail-back">← {backLabel}</Link>
            <div className="cinematic-header-meta">
              {tag && <span className="cinematic-header-tag">{tag}</span>}
            </div>
            <h1 className="cinematic-header-title">{title}</h1>
          </div>
        </div>
      ) : (
        <div className="container" style={{ paddingTop: 'calc(var(--nav-height) + 40px)', paddingBottom: 0 }}>
          <Link to={backTo} className="project-detail-back">← {backLabel}</Link>

          {icon && (
            <div className="detail-icon-banner">
              {icon}
              <div>
                {tag && <div className="project-detail-tag">{tag}</div>}
                <h1 className="project-detail-title" style={{ marginBottom: 0 }}>{title}</h1>
              </div>
            </div>
          )}

          {!icon && (
            <div className="project-detail-header">
              {tag && <div className="project-detail-tag">{tag}</div>}
              <h1 className="project-detail-title">{title}</h1>
            </div>
          )}
        </div>
      )}

      <div className="container project-detail-body">
        <div className="detail-layout">
          <div className="detail-main">
            {children}
          </div>
          <aside className="detail-sidebar">
            {software && software.length > 0 && (
              <div className="sidebar-card">
                <h4>Software &amp; Skills</h4>
                <PillGroup items={software} />
              </div>
            )}
            {roles && roles.length > 0 && (
              <div className="sidebar-card">
                <h4>Roles</h4>
                <PillGroup items={roles} />
              </div>
            )}
            <Link to={backTo} className="btn btn-outline" style={{ textAlign: 'center', justifyContent: 'center' }}>
              ← Back to {backLabel}
            </Link>
          </aside>
        </div>
      </div>
    </div>
  )
}
