import { Link } from 'react-router-dom'
import { bajaSubprojects } from '../data/projects'
import img from '../img'

// Baja hub: everything I've built for Longhorn Baja Racing in one place

// Competition photos, shown as a masonry gallery
const gallery = [
  { src: 'driver-staging.jpg', alt: 'Car 185 in the staging area with a driver in the seat, next to another team’s car' },
  { src: 'pit-lineup.jpg', alt: 'Car 185 lined up in the pits between other Baja cars under a blue sky' },
  { src: 'rear-sunset.jpg', alt: 'Rear view of car 185 at sunset under power lines' },
  { src: 'side-panel.jpg', alt: 'Close-up of the orange side panel artwork and Fox shocks on car 185' },
  { src: 'cage-sunset.jpg', alt: 'A team member sitting on the roll cage of car 185 at sunset' },
  { src: 'team-photo.jpg', alt: 'The Longhorn Baja Racing team celebrating around car 185, one member holding a helmet up' },
  { src: 'pit-crew.jpg', alt: 'Team members working on car 185 in the paddock' },
  { src: 'car-trees.jpg', alt: 'Low-angle shot of car 185 on grass in front of tall trees' },
  { src: 'loading-truck.jpg', alt: 'Team members loading car 185 into a pickup truck at dusk' },
  { src: 'teammates.jpg', alt: 'Two team members laughing in the paddock at golden hour' },
  { src: 'pit-crew-low.jpg', alt: 'Low-angle shot of the crew around car 185, one member tossing a screwdriver' },
  { src: 'wiring.jpg', alt: 'Hands twisting a red and white wire pair while wiring the car' },
]

// First season, car #185 (25'–26'). Source: team results
const RESULTS = [
  { v: '65th / 83', k: 'Overall finish' },
  { v: 'Passed', k: 'Technical inspection' },
  { v: 'Passed', k: 'Dynamic brake check' },
  { v: '3 laps', k: 'Endurance completed' },
]

// Electronics plans for the 26'–27' car
const NEXT = [
  { t: 'Sensors on the car, for every team', d: 'Integrate the sensor suite into the vehicle so suspension, drivetrain and chassis get real data from testing instead of guesses.' },
  { t: 'Data collection', d: 'Strain gauges on key parts alongside the sensors on this page, logged during test sessions to check loads and failures.' },
  { t: 'Fewer bugs, smoother days', d: 'Streamline the wiring and firmware issues from the first car so electronics stop being the thing that slows testing down.' },
  { t: 'Live-streamed practice', d: 'Stream practice sessions so every member can watch even when they can’t be there, and keep the video as a record.' },
]

const FACTS = [
  { k: 'Role', v: 'Electronics Lead' },
  { k: 'Since', v: 'Aug 2025' },
  { k: 'Team led', v: '10+ members' },
  { k: 'Sub-projects', v: String(bajaSubprojects.length) },
]

export default function Baja() {
  return (
    <div className="page">
      <header className="wrap page-head baja-head" data-enter>
        <p className="eyebrow">Longhorn Baja Racing</p>
        <h1 className="page-title">Car 185, <span className="serif">wired</span> end to end</h1>
        <p className="page-lede">
          I lead electronics for UT Austin&rsquo;s Baja SAE team: power distribution, dashboard hardware,
          a virtual driving coach and the sensor suite that feeds it. Every board and sensor I&rsquo;ve
          worked on is below.
        </p>
        <dl className="baja-facts">
          {FACTS.map(f => (
            <div key={f.k}>
              <dt>{f.k}</dt>
              <dd>{f.v}</dd>
            </div>
          ))}
        </dl>
      </header>

      <div className="wrap">
        <div className="case-hero baja-hero">
          <img
            src={img('/images/baja-racing/competition/side-sunset.jpg')}
            alt="Longhorn Baja car 185 on grass at sunset, orange side panels lit by low sun"
            style={{ objectPosition: 'center 62%' }}
            fetchpriority="high"
            decoding="async"
          />
        </div>
      </div>

      <section className="section" aria-labelledby="baja-overview-title">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow">Start here</p>
              <h2 id="baja-overview-title" className="section-title">The <span className="serif">whole</span> picture</h2>
            </div>
          </div>
          <Link to="/team/baja-racing" className="tile tile-lg baja-overview-tile">
            <div className="tile-media">
              <img src={img('/images/baja-racing/competition/team-photo.jpg')} alt="" loading="lazy" decoding="async" style={{ objectPosition: 'center 40%' }} />
            </div>
            <span className="tile-des mono">LBR · Overview</span>
            <div className="tile-body">
              <p className="tile-org mono">Longhorn Baja Racing · Electronics Lead</p>
              <h3 className="tile-title">Vehicle electronics lead: the full case study</h3>
              <p className="tile-summary">
                Power distribution, the dashboard, the virtual driving coach, control algorithms and
                how I run the electronics team.
              </p>
            </div>
          </Link>
        </div>
      </section>

      <section className="section" aria-labelledby="baja-results-title">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow">First season · Car 185</p>
              <h2 id="baja-results-title" className="section-title">A first car <span className="serif">that</span> finished</h2>
              <p className="section-lede">
                The 25&rsquo;&ndash;26&rsquo; car is the team&rsquo;s first competition vehicle, designed from
                scratch for Baja SAE in Ohio. The goal for a first-year team was to pass technical
                inspection, and it did. In the endurance race the driveshaft came out of the rear
                differential more than once, and the car still completed three full laps.
              </p>
            </div>
          </div>
          <dl className="readout baja-results">
            {RESULTS.map(r => (
              <div key={r.k} className="readout-cell">
                <dt>{r.k}</dt>
                <dd>{r.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section" aria-labelledby="baja-subs-title">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow">Sub-projects</p>
              <h2 id="baja-subs-title" className="section-title">Every board <span className="serif">and</span> sensor</h2>
              <p className="section-lede">
                Each one was researched, scored against the Baja SAE rulebook and our requirements,
                then prototyped and tested before it went on the car.
              </p>
            </div>
          </div>
          <div className="work-grid baja-sub-grid">
            {bajaSubprojects.map((s, i) => (
              <Link key={s.to} to={s.to} className="tile tile-sm baja-sub-tile">
                <div className="tile-media">
                  <img src={s.image} alt="" loading="lazy" decoding="async" style={s.imageStyle} />
                </div>
                <span className="tile-des mono">B{i + 1}</span>
                <div className="tile-body">
                  <h3 className="tile-title">{s.title}</h3>
                  <p className="tile-summary">{s.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="baja-next-title">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow">Next season · 26&rsquo;&ndash;27&rsquo; car</p>
              <h2 id="baja-next-title" className="section-title">Electronics <span className="serif">for</span> the whole team</h2>
              <p className="section-lede">
                The next car keeps the same chassis and focuses on testing, tighter packaging and
                durability, ahead of two competitions in 2027 (Williamsport and Michigan). On the
                electronics side, the goal is to make the car&rsquo;s data and the team&rsquo;s days better.
              </p>
            </div>
          </div>
          <ol className="next-list" role="list">
            {NEXT.map((n, i) => (
              <li key={n.t} className="next-item">
                <span className="next-num mono">0{i + 1}</span>
                <h3 className="next-title">{n.t}</h3>
                <p>{n.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" aria-labelledby="baja-gallery-title">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow">At competition</p>
              <h2 id="baja-gallery-title" className="section-title">The car, the pits <span className="serif">and</span> the team</h2>
            </div>
          </div>
          <div className="photo-gallery photo-gallery-wide">
            {gallery.map(g => (
              <div key={g.src} className="photo-gallery-item">
                <img src={img(`/images/baja-racing/competition/${g.src}`)} alt={g.alt} loading="lazy" decoding="async" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
