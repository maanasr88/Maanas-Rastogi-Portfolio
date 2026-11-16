import { useSearchParams } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'
import { DOMAINS, projects, projectsInDomain } from '../data/projects'

export default function Work() {
  const [params, setParams] = useSearchParams()
  const requested = params.get('domain')
  const active = DOMAINS.some(d => d.id === requested) ? requested : null
  const list = projectsInDomain(active)
  const activeLabel = DOMAINS.find(d => d.id === active)?.label

  const select = (id) => {
    setParams(id ? { domain: id } : {}, { replace: true })
  }

  return (
    <div className="page">
      <header className="wrap page-head">
        <p className="eyebrow">Work</p>
        <h1 className="page-title">Projects <span className="serif">and</span> research</h1>
        <p className="page-lede">
          Industry, research, team and personal work across silicon, boards, vehicles and
          quantum systems. Each one links to a full write-up with specs, schematics and results.
        </p>
      </header>

      <section className="wrap" aria-label="Project index" style={{ paddingBottom: 'var(--space-9)' }}>
        <div className="filter-bar" role="group" aria-label="Filter by field">
          <span className="filter-label">Filter</span>
          <button type="button" className="filter-chip" aria-pressed={!active} onClick={() => select(null)}>
            All <span className="mono">{projects.length}</span>
          </button>
          {DOMAINS.map(d => (
            <button
              key={d.id}
              type="button"
              className="filter-chip"
              aria-pressed={active === d.id}
              onClick={() => select(d.id)}
            >
              {d.label} <span className="mono">{projectsInDomain(d.id).length}</span>
            </button>
          ))}
          <span className="work-count" aria-live="polite">
            {list.length} {list.length === 1 ? 'project' : 'projects'}{activeLabel ? ` in ${activeLabel}` : ''}
          </span>
        </div>

        <div className="work-grid">
          {list.map(p => <ProjectCard key={p.id} project={p} headingLevel={2} />)}
        </div>
      </section>
    </div>
  )
}
