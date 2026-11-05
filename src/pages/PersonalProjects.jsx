import ProjectCard from '../components/ProjectCard'
import ScrollReveal from '../components/ScrollReveal'
import { personalProjects } from '../data/projects'

export default function PersonalProjects() {
  return (
    <div className="page-wrapper">
      <section className="projects-section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <h2><span className="section-title-accent">Personal <em className="accent-serif">Projects</em></span></h2>
              <div className="section-header-bar" />
            </div>
            <p style={{ color: 'var(--text-secondary)', marginBottom: 40, maxWidth: 600, fontSize: '0.95rem' }}>
              Self-directed builds spanning VLSI design, embedded systems, and hardware prototyping.
            </p>
          </ScrollReveal>

          <div className="project-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))' }}>
            {personalProjects.map((p, i) => (
              <ProjectCard key={p.title} {...p} tag="Personal" delay={i + 1} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
