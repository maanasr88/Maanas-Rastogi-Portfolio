import { Link } from 'react-router-dom'
import { FiDownload } from 'react-icons/fi'
import ScrollReveal from '../components/ScrollReveal'
import HeroCircuit from '../components/HeroCircuit'
import { experienceProjects, teamProjects, personalProjects } from '../data/projects'
import { useTypewriterSegments } from '../hooks/useTypewriter'
import img from '../img'

const HEADLINE_SEGMENTS = [
  { text: 'From Silicon to ' },
  { text: 'Race Cars', className: 'accent-serif' },
  { text: ',' },
  { break: true },
  { text: 'I Build It.' },
]

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

const quickListGroups = [
  { label: 'Industry & Research', items: experienceProjects },
  { label: 'Team Projects', items: teamProjects },
  { label: 'Personal Projects', items: personalProjects },
]

export default function Home() {
  const { ref: headlineRef, done: headlineDone } = useTypewriterSegments(HEADLINE_SEGMENTS, 45)

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
            <h1 className={`hero-headline${headlineDone ? '' : ' typing'}`} ref={headlineRef} />
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

      {/* Quick list: hover a title for a one-line description, click to go there */}
      <section style={{ padding: '0 0 100px' }}>
        <div className="container" style={{ maxWidth: 640 }}>
          {quickListGroups.map(group => (
            <ScrollReveal key={group.label}>
              <div className="quick-list-group">
                <div className="quick-list-label">{group.label}</div>
                {group.items.map(item => (
                  <Link key={item.title} to={item.to} className="quick-item">
                    <div className="quick-item-row">
                      <span className="quick-item-title">{item.title}</span>
                      <span className="quick-item-arrow">&rarr;</span>
                    </div>
                    <div className="quick-item-desc-wrap">
                      <div className="quick-item-desc-inner">
                        <img src={item.image} alt="" className="quick-item-photo" />
                        <p className="quick-item-desc">{item.description}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  )
}
