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
            I&rsquo;m Maanas Rastogi, an Electrical and Computer Engineering student at UT Austin
            focused on semiconductor devices, integrated circuits, and chip design.
          </p>
          <p>
            My work spans from atomic-scale device physics to physical hardware systems. At
            IronLattice, I simulate ferroelectric memory architectures and 1-FeFET cells, while in the
            cleanroom at UT&rsquo;s Microelectronics Research Center, I work on thin-film growth for
            next-generation devices. On the digital side, I&rsquo;m taking a custom RISC-V accelerator
            from RTL through physical layout and floorplanning.
          </p>
          <p>
            Outside the lab, I lead the electronics team for Longhorn Baja Racing&mdash;designing custom
            PCBs in Altium, building vehicle telemetry, and running hardware workshops for over a dozen
            teammates. Previously, I led electronics and drivetrain integration for Longhorn
            Neurotech&rsquo;s motorized wheelchair project. Whether I&rsquo;m debugging a CAN bus in the
            pits or analyzing transistor failure modes, knowing how the silicon behaves makes me a
            better architect.
          </p>

          <dl className="about-facts">
            <div>
              <dt>Studying</dt>
              <dd>Electrical &amp; Computer Engineering, UT Austin</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>Integrated Circuits &amp; Chip Design</dd>
            </div>
            <div>
              <dt>Now</dt>
              <dd>Device Modeling at IronLattice &bull; Thin-Film Research at UT MRC</dd>
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
