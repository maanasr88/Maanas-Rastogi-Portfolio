import ProjectCard from '../components/ProjectCard'
import ScrollReveal from '../components/ScrollReveal'
import { IconChip, IconQuantum } from '../components/Icons'
import img from '../img'

const projects = [
  {
    icon: <IconChip />,
    image: img('/images/ironlattice/gate-stack-cover.svg'),
    title: 'Gator Memory™ FeFET Device Validation',
    description: 'Ironlattice: simulation pipelines modeling 1-FeFET superlattice device physics and array-level SPICE behavior for a 40 nm node roadmap.',
    to: '/experience/ironlattice',
  },
  {
    icon: <IconQuantum />,
    image: img('/images/quantum-computing/chip-lattice-cover.svg'),
    title: 'Surface-Code Simulation for Modular Quantum Processors',
    description: 'UT Austin: 100,000+ Monte Carlo simulations quantifying logical error scaling across chiplet-based quantum processors.',
    to: '/experience/quantum-computing',
  },
]

export default function Experience() {
  return (
    <div className="page-wrapper">
      <section className="projects-section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <h2><span className="section-title-accent">Industry &amp; Research Experience</span></h2>
              <div className="section-header-bar" />
            </div>
            <p style={{ color: 'var(--text-secondary)', marginBottom: 40, maxWidth: 600, fontSize: '0.95rem' }}>
              Professional and research work in device validation, simulation, and quantum error correction.
            </p>
          </ScrollReveal>

          <div className="project-grid">
            {projects.map((p, i) => (
              <ProjectCard key={p.title} {...p} tag="Experience" delay={(i % 3) + 1} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
