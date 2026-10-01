import ProjectCard from '../components/ProjectCard'
import ScrollReveal from '../components/ScrollReveal'
import { IconRacing, IconDroneArm, IconPower } from '../components/Icons'

const projects = [
  {
    icon: <IconRacing />,
    title: 'Longhorn Baja Racing — Electronics Lead',
    description: 'Vehicle electrical integration for the Baja SAE race car: power distribution, dashboard hardware, and a virtual driving coach interfacing 7+ onboard sensors.',
    to: '/team/baja-racing',
  },
  {
    icon: <IconDroneArm />,
    title: 'Longhorn Neurotech — Manufacturing/Design Lead',
    description: 'Directed a team of 5 engineers building modular electronics mounting systems for a 250-lb electric-powered wheelchair, plus drone motor control.',
    to: '/team/neurotech',
  },
  {
    icon: <IconPower />,
    title: 'UT Robotics & Automation Society — Electrical Engineer',
    description: "Redesigned a robotics system's power delivery and control board, boosting output from 12W to 90W and cutting charge time 75%.",
    to: '/team/robotics-society',
  },
]

export default function TeamProjects() {
  return (
    <div className="page-wrapper">
      <section className="projects-section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <h2><span className="section-title-accent">Team Projects</span></h2>
              <div className="section-header-bar" />
            </div>
            <p style={{ color: 'var(--text-secondary)', marginBottom: 40, maxWidth: 600, fontSize: '0.95rem' }}>
              Collaborative engineering work across student organizations: Longhorn Baja Racing, Longhorn
              Neurotech, and the UT Austin Robotics &amp; Automation Society.
            </p>
          </ScrollReveal>

          <div className="project-grid">
            {projects.map((p, i) => (
              <ProjectCard key={p.title} {...p} tag="Team" delay={(i % 3) + 1} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
