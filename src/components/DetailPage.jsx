import { Link } from 'react-router-dom'
import { PillGroup } from './PillBadge'

export default function DetailPage({ backTo, backLabel, tag, title, icon, software, roles, children }) {
  return (
    <div className="project-detail">
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

      <div className="container project-detail-body">
        <div className="detail-layout">
          <div>
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
