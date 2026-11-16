import { Link } from 'react-router-dom'
import { CONTEXTS, experience } from '../data/projects'

// Dated roles, newest first, each linking to its case study.
export default function ExperienceList() {
  return (
    <ol className="exp-list" role="list">
      {experience.map(p => (
        <li key={p.id}>
          <Link to={p.to} className="exp-row">
            <span className="exp-period mono">{p.period}</span>
            <span className="exp-role">{p.role}</span>
            <span className="exp-org">{p.org}</span>
            <span className="exp-type"><span className="tag">{CONTEXTS[p.context]}</span></span>
            <span className="exp-arrow" aria-hidden="true">→</span>
          </Link>
        </li>
      ))}
    </ol>
  )
}
