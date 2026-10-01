import ProjectCard from '../components/ProjectCard'
import ScrollReveal from '../components/ScrollReveal'
import { IconChip, IconHelmet, IconCards } from '../components/Icons'

const projects = [
  {
    icon: <IconChip />,
    title: '32-bit Custom RISC-V Processor',
    description: 'Full-stack ASIC development flow from architectural spec to physical layout: Verilog RTL in Vivado, hardened to silicon via OpenROAD.',
    to: '/projects/vlsi-risc-v',
  },
  {
    icon: <IconHelmet />,
    title: 'Motorcycle Helmet HUD',
    description: 'Raspberry Pi Android Auto head unit with a prism-based optical display, sub-100 ms latency, and 4+ hours of embedded runtime.',
    to: '/projects/helmet-hud',
  },
  {
    icon: <IconCards />,
    title: 'Gamble on the Go',
    description: 'Portable bilingual blackjack game on the TI LP-MSPM0G3507 board — 1st place out of 15+ projects in the class competition.',
    to: '/projects/gamble-on-the-go',
  },
]

export default function PersonalProjects() {
  return (
    <div className="page-wrapper">
      <section className="projects-section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <h2><span className="section-title-accent">Personal Projects</span></h2>
              <div className="section-header-bar" />
            </div>
            <p style={{ color: 'var(--text-secondary)', marginBottom: 40, maxWidth: 600, fontSize: '0.95rem' }}>
              Self-directed builds spanning VLSI design, embedded systems, and hardware prototyping.
            </p>
          </ScrollReveal>

          <div className="project-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))' }}>
            {projects.map((p, i) => (
              <ProjectCard key={p.title} {...p} tag="Personal" delay={i + 1} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
