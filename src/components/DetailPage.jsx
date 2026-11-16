import { Link, useLocation } from 'react-router-dom'
import { PillGroup } from './PillBadge'
import StickyTOC from './StickyTOC'
import StatusBadge from './StatusBadge'
import { findProjectByPath, nextProject } from '../data/projects'

// Case-study template. Every project page renders through this, so the layout is:
// breadcrumb → title and summary → spec sheet → hero image → numbered sections with
// an on-this-page index → next project.
export default function DetailPage({ backTo, backLabel, tag, title, icon, heroImage, heroStyle, heroFit, software, roles, toc, status, children }) {
  const { pathname } = useLocation()
  const project = findProjectByPath(pathname)
  const next = nextProject(pathname)
  const hasToc = toc && toc.length > 0
  // Old pages passed CSS background settings for a darkened banner; keep only the framing
  const objectPosition = heroStyle?.backgroundPosition

  return (
    <article className="page case">
      <header className="wrap case-head" data-enter>
        <Link to={backTo} className="case-back">
          <span aria-hidden="true">←</span> {backLabel}
        </Link>
        <div className="case-title-row">
          {!heroImage && icon && <div className="case-icon" aria-hidden="true">{icon}</div>}
          <h1 className="case-title">{title}</h1>
        </div>
        {project?.summary && <p className="case-summary">{project.summary}</p>}
      </header>

      <div className="wrap">
        <dl className="spec-sheet">
          {tag && (
            <div className="spec-cell spec-wide">
              <dt>Context</dt>
              <dd>{tag}</dd>
            </div>
          )}
          {roles && roles.length > 0 && (
            <div className="spec-cell">
              <dt>Role</dt>
              <dd>{roles.join(' · ')}</dd>
            </div>
          )}
          {status && (
            <div className="spec-cell">
              <dt>Status</dt>
              <dd className="status-stack">{[].concat(status).map(st => <StatusBadge key={st} status={st} />)}</dd>
            </div>
          )}
          {software && software.length > 0 && (
            <div className="spec-cell spec-full">
              <dt>Tools &amp; methods</dt>
              <dd><PillGroup items={software} /></dd>
            </div>
          )}
        </dl>
      </div>

      {heroImage && (
        <div className="wrap">
          <div className={`case-hero${heroFit === 'contain' ? ' is-contain' : ''}`}>
            <img src={heroImage} alt="" style={objectPosition ? { objectPosition } : undefined} decoding="async" fetchpriority="high" />
          </div>
        </div>
      )}

      <div className={`wrap case-body${hasToc ? ' has-toc' : ''}`}>
        {hasToc && (
          <aside className="case-toc">
            <StickyTOC sections={toc} />
          </aside>
        )}
        <div className="case-main">{children}</div>
      </div>

      <div className="wrap">
      <footer className="case-foot">
        <Link to={backTo} className="case-foot-back">
          <span className="mono">Back</span>
          <span className="case-foot-title"><span aria-hidden="true">← </span>{backLabel}</span>
        </Link>
        {next && (
          <Link to={next.to} className="case-foot-next">
            <span className="mono">Next project</span>
            <span className="case-foot-title">{next.title}<span aria-hidden="true"> →</span></span>
          </Link>
        )}
      </footer>
      </div>
    </article>
  )
}
