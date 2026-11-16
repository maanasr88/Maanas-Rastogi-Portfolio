import { Link } from 'react-router-dom'
import { FiDownload } from 'react-icons/fi'
import ProjectCard from '../components/ProjectCard'
import ExperienceList from '../components/ExperienceList'
import { projects, projectCount, experience } from '../data/projects'
import img from '../img'

// Hero readout strip
const READOUT = [
  { k: 'Projects', v: String(projectCount) },
  { k: 'Roles held', v: String(experience.length) },
  { k: 'Teams led', v: '2' },              // Baja electronics, Neurotech
  { k: 'Graduating', v: 'May', unit: ' 2028' },
]

// Homepage bento: which projects appear, and how big
const BENTO = [
  { id: 'baja', span: 'big', size: 'lg' },
  { id: 'risc-v', span: 'tall', size: 'md' },
  { id: 'robotics-society', span: 'half', size: 'md' },
  { id: 'quantum', span: 'half', size: 'md' },
  { id: 'ironlattice', span: 'third', size: 'sm' },
  { id: 'banerjee-lab', span: 'third', size: 'sm' },
  { id: 'neurotech', span: 'third', size: 'sm' },
]

function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid-bg" aria-hidden="true" />
      <div className="hero-beams" aria-hidden="true"><span /><span /><span /></div>

      <div className="wrap hero-inner">
        <div className="hero-copy" data-enter>
          <p className="hero-kicker">
            <span className="hero-kicker-dot" aria-hidden="true" />
            Open to electrical systems &amp; silicon engineering roles
          </p>
          <h1 className="hero-title">
            Maanas Rastogi
            <span className="hero-title-line serif grad">from silicon to race cars.</span>
          </h1>
          <p className="hero-sub">
            Electrical &amp; computer engineering at UT Austin. I design <strong>chips, circuit
            boards and the embedded systems</strong> that put them to work, from a RISC-V core to
            a Baja car&rsquo;s sensor network.
          </p>
          <div className="hero-actions">
            <Link to="/work" className="btn btn-primary">See the work <span aria-hidden="true">→</span></Link>
            <a href={img('/Resume_Maanas_Rastogi.pdf')} download="Resume_Maanas_Rastogi.pdf" className="btn btn-outline">
              <FiDownload size={15} aria-hidden="true" /> Download resume
            </a>
          </div>
        </div>

        <figure className="hero-portrait">
          <img
            src={img('/images/profile/maanas-on-car.jpg')}
            alt="Maanas Rastogi standing on the Longhorn Baja car, number 185"
            width="1333"
            height="2000"
            fetchpriority="high"
            decoding="async"
          />
          <figcaption className="hero-portrait-tag mono">
            <span>Maanas · Electronics Lead</span>
            <span>LBR 185</span>
          </figcaption>
        </figure>
      </div>

      <dl className="readout">
        {READOUT.map(r => (
          <div key={r.k} className="readout-cell">
            <dt>{r.k}</dt>
            <dd>{r.v}{r.unit && <span>{r.unit}</span>}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

function SelectedWork() {
  return (
    <section className="section" aria-labelledby="work-title">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 id="work-title" className="section-title">Hardware with <span className="serif">numbers</span> behind it.</h2>
          </div>
          <Link to="/work" className="btn btn-outline btn-sm">All work <span aria-hidden="true">→</span></Link>
        </div>
        <div className="bento">
          {BENTO.map(({ id, span, size }) => {
            const p = projects.find(x => x.id === id)
            return p ? <ProjectCard key={id} project={p} size={size} className={`bento-${span}`} /> : null
          })}
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section className="section" aria-labelledby="exp-title">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">Experience</p>
            <h2 id="exp-title" className="section-title">Industry, research <span className="serif">and</span> teams.</h2>
          </div>
        </div>
        <ExperienceList />
      </div>
    </section>
  )
}

function AboutTeaser() {
  return (
    <section className="section" aria-labelledby="about-title">
      <div className="wrap about-teaser">
        <div className="about-teaser-photo-wrap">
          <img
            src={img('/images/profile/maanas-photo.jpg')}
            alt="Maanas Rastogi"
            className="about-teaser-photo"
            loading="lazy"
            width="800"
            height="1200"
          />
        </div>
        <div>
          <p className="eyebrow">About</p>
          <h2 id="about-title" className="section-title">Device physics informs <span className="serif">the logic</span> on top of it.</h2>
          <p className="section-lede">
            I&rsquo;m an Electrical and Computer Engineering student at UT Austin focused on integrated
            circuits and systems. I move between device physics and RTL design: understanding how
            a transistor actually fails informs how I architect the logic built on top of it.
          </p>
          <div className="about-teaser-actions">
            <Link to="/about" className="btn btn-outline">More about me</Link>
            <Link to="/skills" className="text-link">Skills and tools <span className="arrow" aria-hidden="true">→</span></Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <div className="page page-home">
      <Hero />
      <SelectedWork />
      <Experience />
      <AboutTeaser />
    </div>
  )
}
