import { Link } from 'react-router-dom'
import { FiDownload } from 'react-icons/fi'
import ProjectCard from '../components/ProjectCard'
import ExperienceList from '../components/ExperienceList'
import { DOMAINS, featuredProjects, projectsInDomain } from '../data/projects'
import img from '../img'

const NOW = [
  { k: 'Now', v: 'Validation/Design Intern', at: 'Ironlattice', to: '/experience/ironlattice' },
  { k: 'Leading', v: 'Vehicle electronics', at: 'Longhorn Baja Racing', to: '/team/baja-racing' },
  { k: 'Research', v: 'FeFET thin films', at: 'Banerjee Lab', to: '/experience/banerjee-lab' },
]

const SENSORS = [
  { n: '01', label: 'Driver input', to: '/team/baja-racing/driver-input-telemetry' },
  { n: '02', label: 'Fuel level', to: '/team/baja-racing/fuel-level-indicator' },
  { n: '03', label: 'Engine temp', to: '/team/baja-racing/engine-temperature-sensing' },
  { n: '04', label: 'Wheel RPM', to: '/team/baja-racing/rpm-sensor' },
  { n: '05', label: 'Suspension', to: '/team/baja-racing/suspension-position-sensor' },
  { n: '06', label: 'IMU / GPS', to: '/team/baja-racing/imu-gps' },
  { n: '07', label: 'Telemetry', to: '/team/baja-racing/telemetry-link' },
]

function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy" data-enter>
          <p className="eyebrow">Electrical &amp; Computer Engineering · UT Austin</p>
          <h1 className="hero-title">Maanas Rastogi</h1>
          <p className="hero-lede">I build hardware, from silicon to race cars.</p>
          <p className="hero-body">
            Integrated circuits and systems student working across VLSI design, ferroelectric
            memory devices, PCB and embedded design, robotics and quantum error correction.
          </p>
          <div className="hero-actions">
            <Link to="/work" className="btn btn-primary">View work <span aria-hidden="true">→</span></Link>
            <a href={img('/Resume_Maanas_Rastogi.pdf')} download="Resume_Maanas_Rastogi.pdf" className="btn btn-outline">
              <FiDownload size={14} aria-hidden="true" /> Download resume
            </a>
          </div>
          <dl className="hero-now">
            {NOW.map(row => (
              <div key={row.k} className="hero-now-row">
                <dt className="mono">{row.k}</dt>
                <dd>
                  <Link to={row.to} className="hero-now-link">
                    {row.v} <span className="hero-now-at">· {row.at}</span>
                  </Link>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <figure className="instrument" aria-labelledby="instrument-title">
          <div className="instrument-bar mono">
            <span id="instrument-title">LBR-26 · Sensor suite</span>
            <span className="instrument-live"><span aria-hidden="true" className="in-progress-dot" />7 channels</span>
          </div>
          <Link to="/team/baja-racing" className="instrument-screen" aria-label="Longhorn Baja Racing case study">
            <img
              src={img('/images/baja-racing/sensor-map/sensor-placement-map.png')}
              alt="Render of the Longhorn Baja car with seven numbered sensor locations"
              width="1286"
              height="1154"
              decoding="async"
              fetchpriority="high"
            />
          </Link>
          <ol className="instrument-legend" role="list">
            {SENSORS.map(s => (
              <li key={s.n}>
                <Link to={s.to} className="instrument-chip">
                  <span className="mono">{s.n}</span>{s.label}
                </Link>
              </li>
            ))}
          </ol>
        </figure>
      </div>
    </section>
  )
}

function Domains() {
  return (
    <section className="section" aria-labelledby="domains-title">
      <div className="wrap">
        <div className="section-head">
          <div>
            <p className="eyebrow">Focus areas</p>
            <h2 id="domains-title" className="section-title">Four fields, one stack: from device physics up to the vehicle.</h2>
          </div>
        </div>
        <ul className="domain-grid" role="list">
          {DOMAINS.map((d, i) => {
            const count = projectsInDomain(d.id).length
            return (
              <li key={d.id}>
                <Link to={`/work?domain=${d.id}`} className="domain-tile">
                  <span className="domain-index mono">0{i + 1}</span>
                  <span className="domain-label">{d.label}</span>
                  <span className="domain-blurb">{d.blurb}</span>
                  <span className="domain-count mono">{count} project{count === 1 ? '' : 's'} <span aria-hidden="true">→</span></span>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
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
            <h2 id="work-title" className="section-title">Projects with numbers behind them.</h2>
          </div>
          <Link to="/work" className="text-link">All projects <span className="arrow" aria-hidden="true">→</span></Link>
        </div>
        <div className="work-grid work-grid-featured">
          {featuredProjects.map(p => <ProjectCard key={p.id} project={p} size="lg" />)}
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
            <h2 id="exp-title" className="section-title">Industry, research and team roles.</h2>
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
        <img
          src={img('/images/profile/maanas-photo.jpg')}
          alt="Maanas Rastogi"
          className="about-teaser-photo"
          loading="lazy"
          width="800"
          height="1200"
        />
        <div>
          <p className="eyebrow">About</p>
          <h2 id="about-title" className="section-title">Device physics informs the logic built on top of it.</h2>
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
    <div className="page">
      <Hero />
      <Domains />
      <SelectedWork />
      <Experience />
      <AboutTeaser />
    </div>
  )
}
