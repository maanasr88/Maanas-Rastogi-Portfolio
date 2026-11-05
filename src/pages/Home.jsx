import { Link } from 'react-router-dom'
import { FiDownload } from 'react-icons/fi'
import ScrollReveal from '../components/ScrollReveal'
import HeroCircuit from '../components/HeroCircuit'
import ProjectCard from '../components/ProjectCard'
import { experienceProjects, teamProjects, personalProjects } from '../data/projects'
import img from '../img'

const orgs = [
  { name: 'Banerjee Lab', initials: 'BL' },
  { name: 'Ironlattice', initials: 'IL' },
  { name: 'UT Austin', initials: 'UT' },
  { name: 'Longhorn Baja Racing', initials: 'LBR' },
  { name: 'Longhorn Neurotech', initials: 'LNT' },
  { name: 'Robotics & Automation Society', initials: 'RAS' },
]

const quickLinks = [
  { to: '/experience', label: 'Industry & Research' },
  { to: '/team', label: 'Team Projects' },
  { to: '/projects', label: 'Personal Projects' },
]

const timelineEntries = [
  {
    date: 'Oct 2026 – Present',
    org: 'Banerjee Lab (Nanoelectronics & Novel Devices Lab)',
    role: 'Undergraduate Researcher',
    tag: 'Research',
    to: '/experience/banerjee-lab',
  },
  {
    date: 'Aug 2026 – Present',
    org: 'Ironlattice',
    role: 'Validation/Design Intern',
    tag: 'Internship',
    to: '/experience/ironlattice',
  },
  {
    date: 'Aug 2025 – Present',
    org: 'Longhorn Baja Racing',
    role: 'Racing Team Electronics Lead',
    tag: 'Student Org',
    to: '/team/baja-racing',
  },
  {
    date: 'Oct – Dec 2025',
    org: 'The University of Texas at Austin',
    role: 'Quantum Computing Undergraduate Researcher',
    tag: 'Research',
    to: '/experience/quantum-computing',
  },
  {
    date: 'Aug 2024 – Aug 2026',
    org: 'Longhorn Neurotech',
    role: 'Manufacturing/Design Lead',
    tag: 'Student Org',
    to: '/team/neurotech',
  },
  {
    date: 'Aug 2024 – Aug 2025',
    org: 'UT Austin Robotics & Automation Society',
    role: 'Electrical Engineer',
    tag: 'Student Org',
    to: '/team/robotics-society',
  },
]

const glanceSections = [
  { id: 'glance-experience', prefix: 'Industry & Research', suffix: 'Experience', projects: experienceProjects, tag: 'Experience', to: '/experience' },
  { id: 'glance-team',       prefix: 'Team',                suffix: 'Projects',   projects: teamProjects, tag: 'Team', to: '/team' },
  { id: 'glance-personal',   prefix: 'Personal',             suffix: 'Projects',   projects: personalProjects, tag: 'Personal', to: '/projects' },
]

export default function Home() {
  return (
    <div className="page-wrapper">
      <section className="hero-section hero-centered">
        <HeroCircuit />
        <div className="container hero-section-content">
          <ScrollReveal delay={1} className="hero-avatar-photo-wrap">
            <img
              src={img('/images/profile/maanas-photo.jpg')}
              alt="Maanas Rastogi"
              className="hero-avatar-photo"
            />
          </ScrollReveal>

          <ScrollReveal delay={1} className="hero-credential-row">
            <div className="hero-avatar-stack">
              {orgs.slice(0, 4).map(o => (
                <div key={o.name} className="hero-avatar-chip" title={o.name}>{o.initials}</div>
              ))}
            </div>
            <span className="hero-credential-text">Across 6 engineering teams at UT Austin</span>
          </ScrollReveal>

          <ScrollReveal delay={2}>
            <h1 className="hero-headline">
              From Silicon to <span className="accent-serif">Race Cars</span>,<br />
              I Build It.
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={3}>
            <p className="hero-subtext">
              I'm Maanas Rastogi, an Electrical/Computer Engineering student at the University of
              Texas at Austin focused on Integrated Circuits and Systems. I work across VLSI design,
              embedded electronics, and vehicle systems, from custom RISC-V processors to race-car
              electronics and ferroelectric memory device simulation.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={4} className="hero-actions-centered">
            <a
              href={img('/resume.pdf')}
              download="Resume_Maanas_Rastogi.pdf"
              className="btn btn-primary"
            >
              <FiDownload size={14} />
              Download Resume
            </a>
            <Link to="/experience" className="btn btn-outline">View Work</Link>
          </ScrollReveal>

          <ScrollReveal delay={5} className="hero-quick-links">
            {quickLinks.map(l => (
              <Link key={l.to} to={l.to} className="hero-quick-link">
                {l.label} <span>&rarr;</span>
              </Link>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* Trust strip */}
      <section className="trust-strip-section">
        <div className="container">
          <ScrollReveal>
            <div className="trust-strip-label">Where I&rsquo;ve Worked</div>
            <div className="trust-strip">
              {orgs.map((o) => (
                <div key={o.name} className="trust-strip-item">
                  <div className="trust-strip-avatar">{o.initials}</div>
                  <span className="trust-strip-name">{o.name}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Compact progression timeline */}
      <section style={{ padding: '0 0 80px' }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <ScrollReveal>
            <div className="timeline-compact-label">Progression</div>
          </ScrollReveal>
          <div className="timeline-compact">
            {timelineEntries.map((entry, i) => (
              <ScrollReveal key={entry.org + entry.date} delay={(i % 3) + 1}>
                <Link to={entry.to} className="timeline-compact-item">
                  <div className="timeline-compact-marker">
                    <span className="timeline-compact-dot" />
                    <span className="timeline-compact-line" />
                  </div>
                  <div className="timeline-compact-content">
                    <div className="timeline-compact-top">
                      <span className="timeline-compact-date">{entry.date}</span>
                      <span className="pill">{entry.tag}</span>
                    </div>
                    <span className="timeline-compact-org">{entry.org}</span>
                    <span className="timeline-compact-role">{entry.role}</span>
                  </div>
                  <span className="timeline-compact-arrow">&rarr;</span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* At-a-glance project sections: images + quick descriptions, no click-through required */}
      {glanceSections.map(section => (
        <section key={section.id} id={section.id} style={{ padding: '24px 0 64px' }}>
          <div className="container">
            <ScrollReveal>
              <div className="section-header">
                <h2>
                  <span className="section-title-accent">
                    {section.prefix} <em className="accent-serif">{section.suffix}</em>
                  </span>
                </h2>
                <div className="section-header-bar" />
                <Link to={section.to} className="hero-quick-link">
                  View all <span>&rarr;</span>
                </Link>
              </div>
            </ScrollReveal>

            <div className="project-grid">
              {section.projects.map((p, i) => (
                <ProjectCard key={p.title} {...p} tag={section.tag} delay={(i % 3) + 1} />
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}
