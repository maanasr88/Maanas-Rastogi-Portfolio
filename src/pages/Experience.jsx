import ProjectCard from '../components/ProjectCard'
import ScrollReveal from '../components/ScrollReveal'
import { experienceProjects } from '../data/projects'

export default function Experience() {
  return (
    <div className="page-wrapper">
      <section className="projects-section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <h2><span className="section-title-accent">Industry &amp; Research <em className="accent-serif">Experience</em></span></h2>
              <div className="section-header-bar" />
            </div>
            <p style={{ color: 'var(--text-secondary)', marginBottom: 40, maxWidth: 600, fontSize: '0.95rem' }}>
              Professional and research work in device validation, simulation, and quantum error correction.
            </p>
          </ScrollReveal>

          <div className="project-grid">
            {experienceProjects.map((p, i) => (
              <ProjectCard key={p.title} {...p} tag="Experience" delay={(i % 3) + 1} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
