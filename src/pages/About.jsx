import { Link } from 'react-router-dom'
import { FiArrowUpRight, FiDownload, FiMail } from 'react-icons/fi'
import ExperienceList from '../components/ExperienceList'
import { DOMAINS, projectsInDomain } from '../data/projects'
import img from '../img'

export default function About() {
  return (
    <div className="page">
      <header className="wrap page-head">
        <p className="eyebrow">About</p>
        <h1 className="page-title">Hardware, from <span className="serif">the transistor</span> up.</h1>
      </header>

      <section className="wrap about-intro" aria-label="Introduction">
        <img
          src={img('/images/profile/maanas-photo.jpg')}
          alt="Maanas Rastogi"
          className="about-photo"
          width="800"
          height="1200"
          decoding="async"
        />
        <div className="about-copy">
          <p className="about-lead">
            I&rsquo;m Maanas Rastogi, an Electrical and Computer Engineering student at the
            University of Texas at Austin focused on integrated circuits and systems.
          </p>
          <p>
            My work runs across VLSI design, embedded electronics and vehicle systems: from a
            custom RISC-V processor I&rsquo;m taking from RTL to physical layout, to race-car electronics, to
            ferroelectric memory devices simulated at Ironlattice and grown in the cleanroom at the
            Microelectronics Research Center.
          </p>
          <p>
            I move between device physics and RTL design. Understanding how a transistor actually
            fails informs how I architect the logic built on top of it.
          </p>
          <p>
            On teams I tend to end up leading the electrical side. At Longhorn Baja Racing I lead
            10+ members and run workshops on Altium Designer, circuit theory and PCB design so the
            whole team can contribute to the electrical scope. At Longhorn Neurotech I directed five
            engineers building a sensor-fused electric wheelchair.
          </p>

          <dl className="about-facts">
            <div>
              <dt>Studying</dt>
              <dd>Electrical &amp; Computer Engineering, UT Austin</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>Integrated circuits and systems</dd>
            </div>
            <div>
              <dt>Now</dt>
              <dd>Validation/Design Intern at Ironlattice · Researcher at Banerjee Lab</dd>
            </div>
          </dl>

          <div className="about-actions">
            <a href="mailto:maanasrastogi@utexas.edu" className="btn btn-primary">
              <FiMail size={14} aria-hidden="true" /> Email me
            </a>
            <a href={img('/Resume_Maanas_Rastogi.pdf')} download="Resume_Maanas_Rastogi.pdf" className="btn btn-outline">
              <FiDownload size={14} aria-hidden="true" /> Resume
            </a>
            <a href="https://www.linkedin.com/in/maanas-rastogi" target="_blank" rel="noopener noreferrer" className="text-link">
              LinkedIn <FiArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="interests-title">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow">Interests</p>
              <h2 id="interests-title" className="section-title">What I want to keep building.</h2>
            </div>
          </div>
          <ul className="interest-list" role="list">
            {DOMAINS.map((d, i) => {
              const items = projectsInDomain(d.id)
              return (
                <li key={d.id} className="interest-row">
                  <span className="interest-index mono">0{i + 1}</span>
                  <div>
                    <h3 className="interest-title">{d.label}</h3>
                    <p className="interest-blurb">{d.blurb}</p>
                  </div>
                  <ul className="interest-projects" role="list">
                    {items.map(p => (
                      <li key={p.id}>
                        <Link to={p.to} className="text-link">{p.title} <span className="arrow" aria-hidden="true">→</span></Link>
                      </li>
                    ))}
                  </ul>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="timeline-title">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow">Experience</p>
              <h2 id="timeline-title" className="section-title">Where I&rsquo;ve worked.</h2>
            </div>
          </div>
          <ExperienceList />
        </div>
      </section>
    </div>
  )
}
