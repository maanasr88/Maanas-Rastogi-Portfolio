import ProjectCard from '../components/ProjectCard'
import ScrollReveal from '../components/ScrollReveal'
import { teamProjects } from '../data/projects'

export default function TeamProjects() {
  return (
    <div className="page-wrapper">
      <section className="projects-section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <h2><span className="section-title-accent">Team <em className="accent-serif">Projects</em></span></h2>
              <div className="section-header-bar" />
            </div>
            <p style={{ color: 'var(--text-secondary)', marginBottom: 40, maxWidth: 600, fontSize: '0.95rem' }}>
              Collaborative engineering work across student organizations: Longhorn Baja Racing, Longhorn
              Neurotech, and the UT Austin Robotics &amp; Automation Society.
            </p>
          </ScrollReveal>

          <div className="project-grid">
            {teamProjects.map((p, i) => (
              <ProjectCard key={p.title} {...p} tag="Team" delay={(i % 3) + 1} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
