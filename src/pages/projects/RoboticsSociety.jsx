import DetailPage from '../../components/DetailPage'
import ScrollReveal from '../../components/ScrollReveal'
import StatRow from '../../components/StatRow'
import StickyTOC from '../../components/StickyTOC'
import img from '../../img'

const toc = [
  { id: 'overview',    label: 'Overview' },
  { id: 'stampede',    label: 'About Stampede' },
  { id: 'robots',      label: 'The Robots' },
  { id: 'power',       label: 'Power Delivery Redesign' },
  { id: 'boards',      label: 'Board Design' },
  { id: 'supercap',    label: 'Supercapacitor' },
  { id: 'learned',     label: 'What I Learned' },
]

const specs = [
  { value: '12W → 90W', label: 'Power Output' },
  { value: '20%',        label: 'Runtime Increase' },
  { value: '75%',        label: 'Faster Charging' },
  { value: '6A',         label: 'Charging Current' },
]

const robots = [
  {
    image: img('/images/robotics-society/standard-robot-cad.webp'),
    title: 'Standard (2024)',
    desc: 'An all-round workhorse competing in both 3v3 and 1v1. A 17mm launcher gives it a high rate of fire at moderate damage, and it’s built to be the most maneuverable robot on the team.',
  },
  {
    image: img('/images/robotics-society/hero-robot-render.webp'),
    title: 'Hero (2024)',
    desc: 'Carries a 42mm launcher for heavy damage at a reduced fire rate, with a larger health pool than the rest of the roster. Used correctly, it can swing a match on its own.',
  },
  {
    image: img('/images/robotics-society/sentry-robot-render.webp'),
    title: 'Sentry (2025)',
    desc: 'A dual-turret design for simultaneous targeting, fully autonomous: an NVIDIA Jetson Orin Nano and Intel RealSense cameras handle driving, aiming, and firing with no human operator.',
  },
]

export default function RoboticsSociety() {
  return (
    <>
      <StickyTOC sections={toc} />
      <DetailPage
        backTo="/team"
        backLabel="Team Projects"
        tag="UT Austin Robotics & Automation Society · Stampede (RoboMaster) · Aug 2024 – Aug 2025"
        title="Power Electronics for Stampede's Competition Robots"
        heroImage={img('/images/robotics-society/robots-faceoff.jpg')}
        heroStyle={{ backgroundPosition: 'center 55%' }}
        software={['Power Electronics', 'Supercapacitor Banks', 'Current-Limiting Circuits', 'KiCAD']}
        roles={['Electrical Engineer']}
      >
        <ScrollReveal>
          <div id="overview" className="project-section">
            <h3>Overview</h3>
            <p>
              As an Electrical Engineer with Stampede, UT Austin's competitive RoboMaster team under the
              Robotics &amp; Automation Society, I improved the power delivery and efficiency of our
              robots' electrical systems, boosting total output from 12W to 90W. I redesigned the
              supercapacitor bank and implemented a new current-limiting circuit, which together
              increased runtime by 20% without sacrificing the safety margins the original design relied
              on.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <StatRow stats={specs} />
        </ScrollReveal>

        <ScrollReveal>
          <div id="stampede" className="project-section">
            <h3>About Stampede</h3>
            <p>
              Stampede is UT Austin's RoboMaster team, competing in RoboMaster North America, an
              esports-robotics fusion where custom-built robots fight in physical arenas in
              shooter-style gamemodes against collegiate teams from the U.S., Canada, Europe, and Japan.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div id="robots" className="project-section">
            <h3>The Robots</h3>
            <p>
              Every robot on the roster is purpose-built for a role in the match, and the electrical
              system each one needs scales with that role &mdash; a low-power, high-agility Standard
              draws very differently from an autonomous Sentry running a Jetson and two cameras at once.
            </p>
            <div className="project-image-grid">
              {robots.map(r => (
                <div key={r.title}>
                  <img src={r.image} alt={`${r.title} RoboMaster robot render`} style={{ background: '#fff' }} />
                  <p style={{ marginTop: 8, fontSize: '0.85rem' }}>
                    <strong style={{ color: 'var(--text-primary)' }}>{r.title}</strong>
                    <br />
                    <span style={{ color: 'var(--text-secondary)' }}>{r.desc}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div id="power" className="project-section">
            <h3>Power Delivery Redesign</h3>
            <p>
              Competition rules cap how much power a robot can draw at any instant, which is a hard
              ceiling on how aggressively it can accelerate, spin up its launcher, or run compute for
              autonomy, all at once. I redesigned the supercapacitor bank and implemented a new
              current-limiting circuit on top of it, raising total deliverable output from 12W to 90W
              while keeping every subsystem inside its safety margins. Increasing the charging current to
              6A through a high-efficiency charging circuit also cut charge times by 75%, meaning far
              less downtime between test and competition runs.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div id="boards" className="project-section">
            <h3>Board Design</h3>
            <p>
              Our robots are each built around 3 unique PCBs, designed in KiCAD and hand-assembled with
              both THT and SMD soldering, plus custom wiring for slip rings and RoboMaster-specific
              components. The <strong>chassis board</strong> is the robot's central distribution point:
              it takes power in from the battery and supercapacitor bank, converts it to the specialized
              rails each subsystem needs (including the Orin Nano powering our computer vision), and fans
              +24V out to the chassis, shooter, and gimbal, each behind its own current-limiting
              protection so a fault on one subsystem can't pull down the others.
            </p>
            <div className="project-image-grid">
              <img
                src={img('/images/robotics-society/chassis-board-photo.jpg')}
                alt="Assembled chassis board, 80x80mm, with XT60/XT30 connectors feeding the ESCs, shooter, and gimbal"
              />
              <img
                src={img('/images/robotics-society/chassis-board-pcb-layout.webp')}
                alt="KiCAD PCB layout of the 80x80mm chassis board, showing +24V rails to chassis, shooter, and gimbal, and the supercapacitor input"
              />
            </div>
            <p style={{ marginTop: 16 }}>
              The <strong>turret board</strong> is fully passive by design: it was built as a training
              tool for our newest members to learn PCB design in KiCAD on real hardware. It routes power
              and signal lines coming up through the slip ring from the chassis board out to the
              flywheels, feeder, and waterwheel in the turret, which avoids manual wire-splicing to each
              of those components individually.
            </p>
            <div className="project-image-grid">
              <img
                src={img('/images/robotics-society/turret-board-photo.jpg')}
                alt="Assembled turret board with CAN and UART headers routing to the flywheels, feeder, and waterwheel"
              />
              <img
                src={img('/images/robotics-society/turret-board-pcb-layout.webp')}
                alt="KiCAD PCB layout of the turret board, routing CAN and power to the flywheels, gimbal, feeder, and waterwheel"
              />
            </div>
            <p style={{ marginTop: 16 }}>
              Tying it together is the full power-and-signal map below: every rail, UART/CAN/SWD link,
              and the slip-ring boundary between the chassis and the rotating turret.
            </p>
            <img
              src={img('/images/robotics-society/power-signal-diagram.svg')}
              alt="Full system wiring diagram showing power and signal routing between the Orin Nano, turret PCB, slip ring, chassis, ESCs, PMM, battery, and supercapacitor"
              className="project-image-single"
              style={{ background: '#fff', maxHeight: 600 }}
            />
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div id="supercap" className="project-section">
            <h3>Supercapacitor</h3>
            <p>
              The supercapacitor bank is the team's flagship electrical project: a workaround to the
              competition's hard power-draw limit. Rather than sizing every subsystem to survive
              worst-case draw on battery alone, excess power gets diverted into the supercapacitor while
              the robot is idling, then discharged on demand, especially during hard acceleration, so the
              robot can burst well past its steady-state power budget for the moments that actually
              decide a match.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div id="learned" className="project-section">
            <h3>What I Learned</h3>
            <p>
              Power electronics work on a robotics team is unforgiving about trade-offs: pushing output
              higher without careful current limiting risks damaging the rest of the system, and this
              project was where I learned to treat those constraints as design inputs from the start
              rather than something to patch in afterward.
            </p>
          </div>
        </ScrollReveal>
      </DetailPage>
    </>
  )
}
