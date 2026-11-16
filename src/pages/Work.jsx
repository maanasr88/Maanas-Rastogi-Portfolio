import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'
import { scrollBehavior } from '../motion'

// Same split as the original site: experience, team projects, personal projects
const GROUPS = [
  {
    id: 'experience',
    label: 'Experience',
    title: <>Industry <span className="serif">and</span> research</>,
    lede: 'Internships and university research, from ferroelectric memory to quantum error correction.',
    match: p => p.context === 'industry' || p.context === 'research',
  },
  {
    id: 'team',
    label: 'Team projects',
    title: <>Built <span className="serif">with</span> a team</>,
    lede: 'Competition vehicles and robots, where I led or owned the electrical side.',
    match: p => p.context === 'team',
  },
  {
    id: 'personal',
    label: 'Personal projects',
    title: <>Built <span className="serif">on my own</span></>,
    lede: 'Solo builds, from a custom processor to a handheld game.',
    match: p => p.context === 'personal',
  },
]

export default function Work() {
  const byStart = (a, b) => (b.start || '').localeCompare(a.start || '')
  const groups = GROUPS.map(g => ({ ...g, items: projects.filter(g.match).sort(byStart) }))

  const jump = (e, id) => {
    // HashRouter owns the URL hash, so scroll manually
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: scrollBehavior() })
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
        <nav className="work-tabs" aria-label="Work sections">
          {groups.map(g => (
            <a key={g.id} href={`#${g.id}`} className="filter-chip" onClick={e => jump(e, g.id)}>
              {g.label} <span className="mono">{g.items.length}</span>
            </a>
          ))}
        </nav>
      </header>

      {groups.map(g => (
        <section key={g.id} id={g.id} className="wrap work-group" aria-labelledby={`${g.id}-title`}>
          <div className="section-head">
            <div>
              <p className="eyebrow">{g.label}</p>
              <h2 id={`${g.id}-title`} className="section-title">{g.title}</h2>
              <p className="section-lede">{g.lede}</p>
            </div>
          </div>
          <div className="work-grid">
            {g.items.map(p => <ProjectCard key={p.id} project={p} headingLevel={3} />)}
          </div>
        </section>
      ))}
    </div>
  )
}
