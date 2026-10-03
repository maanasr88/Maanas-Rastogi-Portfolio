import { Link } from 'react-router-dom'
import { FiLinkedin, FiDownload } from 'react-icons/fi'
import ScrollReveal from '../components/ScrollReveal'
import HeroCircuit from '../components/HeroCircuit'
import img from '../img'

const orgs = [
  { name: 'Ironlattice', role: 'Validation/Design Intern', initials: 'IL' },
  { name: 'UT Austin', role: 'Quantum Computing Researcher', initials: 'UT' },
  { name: 'Longhorn Baja Racing', role: 'Electronics Lead', initials: 'LBR' },
  { name: 'Longhorn Neurotech', role: 'Manufacturing/Design Lead', initials: 'LNT' },
  { name: 'Robotics & Automation Society', role: 'Electrical Engineer', initials: 'RAS' },
]

const timelineEntries = [
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

export default function Home() {
  return (
    <div className="page-wrapper">
      <section className="hero-section">
        <HeroCircuit />
        <div className="container hero-section-content">
          <div className="hero-grid bento-grid">

            {/* Profile card */}
            <ScrollReveal className="hero-profile card" delay={1}>
              <img
                src={img('/images/profile/maanas-photo.jpg')}
                alt="Maanas Rastogi working on electronics trackside at a Baja Racing event"
                className="hero-photo"
              />
              <div className="hero-name">Maanas Rastogi</div>
              <div className="hero-title">Electrical/Computer Engineering Student</div>
              <div className="hero-education">
                <div className="company-logo-initials" style={{ height: 44, width: 56 }}>UT</div>
                <div className="hero-edu-text">
                  <span className="hero-edu-degree">B.S. Electrical/Computer Engineering</span>
                  <span className="hero-edu-years">Expected May 2028</span>
                </div>
              </div>
              <div className="hero-social-links">
                <a href="https://www.linkedin.com/in/maanas-rastogi" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FiLinkedin />
                </a>
              </div>
              <div className="hero-fun-fact" title="March 2026">
                Survived a motorcycle accident in March 2026 — didn't miss a beat.
              </div>
            </ScrollReveal>

            {/* Bio card */}
            <ScrollReveal className="hero-bio card" delay={2}>
              <div className="hero-bio-label">Portfolio</div>
              <h1 className="hero-bio-heading">
                From Silicon<br />
                to <span style={{ color: 'var(--accent)' }}>Race Cars</span>,<br />
                I Build It.
              </h1>
              <p className="hero-bio-text">
                I'm Maanas Rastogi, an Electrical/Computer Engineering student at the University of
                Texas at Austin focused on Integrated Circuits and Systems. I work across VLSI design,
                embedded electronics, and vehicle systems, from custom RISC-V processors to race-car
                electronics and ferroelectric memory device simulation.
              </p>
              <div className="hero-bio-actions">
                <a
                  href={img('/resume.pdf')}
                  download="Resume_Maanas_Rastogi.pdf"
                  className="btn btn-primary"
                >
                  <FiDownload size={14} />
                  Download Resume
                </a>
                <Link to="/experience" className="btn btn-outline">View Work</Link>
              </div>
            </ScrollReveal>

            {/* CTA cards */}
            <ScrollReveal delay={3} className="hero-cta-industry">
              <Link to="/experience" className="card-link" style={{ height: '100%', display: 'block' }}>
                <div className="cta-card card" style={{ height: '100%' }}>
                  <div className="cta-card-number">01</div>
                  <div className="cta-card-title">Industry &amp;<br />Research</div>
                </div>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={4} className="hero-cta-team">
              <Link to="/team" className="card-link" style={{ height: '100%', display: 'block' }}>
                <div className="cta-card card" style={{ height: '100%' }}>
                  <div className="cta-card-number">02</div>
                  <div className="cta-card-title">Team<br />Projects</div>
                </div>
              </Link>
            </ScrollReveal>

            <ScrollReveal delay={5} className="hero-cta-personal">
              <Link to="/projects" className="card-link" style={{ height: '100%', display: 'block' }}>
                <div className="cta-card card" style={{ height: '100%' }}>
                  <div className="cta-card-number">03</div>
                  <div className="cta-card-title">Personal<br />Projects</div>
                </div>
              </Link>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Org strip */}
      <section style={{ padding: '64px 0 64px' }}>
        <div className="container">
          <ScrollReveal>
            <div className="company-strip">
              {orgs.map((o) => (
                <div key={o.name} className="company-badge">
                  <div className="company-logo-wrap">
                    <div className="company-logo-initials">{o.initials}</div>
                  </div>
                  <div className="company-badge-name">{o.name}</div>
                  <div className="company-badge-role">{o.role}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Experience Timeline */}
      <section style={{ padding: '0 0 100px' }}>
        <div className="container">
          <ScrollReveal>
            <div className="section-header" style={{ marginBottom: 48 }}>
              <h2><span className="section-title-accent">Experience</span></h2>
              <div className="section-header-bar" />
            </div>
          </ScrollReveal>

          <div className="zz-timeline">
            <div className="zz-spine" />
            {timelineEntries.map((entry, i) => {
              const isLeft = i % 2 === 0
              const inner = (
                <div className={`zz-card card${entry.to ? ' zz-card-link' : ''}`}>
                  <div className="zz-card-top">
                    <span className="pill">{entry.tag}</span>
                    {entry.to && <span className="zz-arrow">→</span>}
                  </div>
                  <div className="zz-date">{entry.date}</div>
                  <div className="zz-org">{entry.org}</div>
                  <div className="zz-role">{entry.role}</div>
                </div>
              )
              return (
                <ScrollReveal key={entry.org + entry.date} delay={(i % 3) + 1} className={`zz-entry ${isLeft ? 'zz-left' : 'zz-right'}`}>
                  {isLeft ? (
                    <>
                      <div className="zz-side">
                        {entry.to ? <Link to={entry.to} className="card-link">{inner}</Link> : inner}
                      </div>
                      <div className="zz-dot-col"><div className="zz-dot" /></div>
                      <div className="zz-side" />
                    </>
                  ) : (
                    <>
                      <div className="zz-side" />
                      <div className="zz-dot-col"><div className="zz-dot" /></div>
                      <div className="zz-side">
                        {entry.to ? <Link to={entry.to} className="card-link">{inner}</Link> : inner}
                      </div>
                    </>
                  )}
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
