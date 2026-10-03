import { Link } from 'react-router-dom'
import DetailPage from '../../components/DetailPage'
import ScrollReveal from '../../components/ScrollReveal'
import StatRow from '../../components/StatRow'
import { IconRacing } from '../../components/Icons'
import img from '../../img'
import BajaSensorMap from '../../components/BajaSensorMap'

const toc = [
  { id: 'overview',    label: 'Overview' },
  { id: 'power',       label: 'Power & Dashboard' },
  { id: 'coach',       label: 'Virtual Driving Coach' },
  { id: 'suite',       label: 'Sensor Suite Research' },
  { id: 'control',     label: 'Control Algorithms' },
  { id: 'leadership',  label: 'Leadership' },
]

const subsystems = [
  { to: '/team/baja-racing/fuel-level-indicator',       title: 'Fuel Level Indicator',          desc: 'Turbine flow meter with a built-in Hall-effect sensor, measuring consumption without modifying the fuel tank.', image: img('/images/baja-racing/fuel-level/turbine-flow-meter.jpg') },
  { to: '/team/baja-racing/rpm-sensor',                  title: 'RPM Sensor',                    desc: 'Contactless Hall-effect wheel-speed sensing rated to ±2% accuracy from 0–2,000 RPM.', image: img('/images/baja-racing/rpm-sensor/hall-effect-circuit.jpg') },
  { to: '/team/baja-racing/engine-temperature-sensing',  title: 'Engine Temperature Sensing',     desc: 'Redundant RTD array read through MAX31865 breakouts, with threshold-based driver warnings.', image: img('/images/baja-racing/engine-temp/esp32-rtd-wiring.jpg') },
  { to: '/team/baja-racing/imu-gps',                     title: 'IMU / GPS Vehicle Tracking',     desc: 'Kalman-filtered IMU + GPS fusion to track vehicle position, acceleration, and driver response.', image: img('/images/baja-racing/imu-gps/wiring-diagram.jpg') },
  { to: '/team/baja-racing/driver-input-telemetry',      title: 'Driver Input Telemetry',         desc: 'Pedal-box potentiometer and CAN bus module logging throttle and brake activity in real time.', image: img('/images/baja-racing/driver-inputs/system-wiring.jpg') },
  { to: '/team/baja-racing/suspension-position-sensor',  title: 'Suspension Position Sensor',     desc: 'Linear potentiometer travel sensing for a semi-active suspension, accurate to ±10mm.', image: img('/images/baja-racing/suspension/suspension-assembly-diagram.svg') },
  { to: '/team/baja-racing/telemetry-link',              title: 'Wireless Telemetry Link',        desc: '915 MHz LoRa radio link carrying sensor data from the car to a pit-side dashboard.', image: img('/images/baja-racing/telemetry/signal-flow.jpg') },
]

const specs = [
  { value: '10+',    label: 'Members Led' },
  { value: '7+',     label: 'Onboard Sensors' },
  { value: '<50 ms', label: 'Processing Delay' },
  { value: '20 AWG', label: 'Power Distribution' },
]

export default function BajaRacing() {
  return (
    <DetailPage
        toc={toc}
        backTo="/team"
        backLabel="Team Projects"
        tag="Longhorn Baja Racing · Aug 2025 – Present"
        title="Racing Team Electronics Lead"
        icon={<IconRacing />}
        heroImage={img('/images/baja-racing/car-render.webp')}
        heroStyle={{ backgroundPosition: 'center 65%' }}
        software={['Altium Designer', 'Circuit Theory', 'PCB Design', 'Sensor Integration']}
        roles={['Racing Team Electronics Lead']}
      >
        <ScrollReveal>
          <div id="overview" className="project-section">
            <h3>Overview</h3>
            <p>
              As Electronics Lead for Longhorn Baja Racing, I direct vehicle electrical integration for
              the team's Baja SAE off-road competition car, covering everything from the power
              distribution backbone to driver-assist electronics built on top of it.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <StatRow stats={specs} />
        </ScrollReveal>

        <ScrollReveal>
          <div id="power" className="project-section">
            <h3>Power Distribution &amp; Dashboard</h3>
            <p>
              I designed the car's 20-gauge power distribution system, the wiring backbone that every
              other onboard electronic subsystem draws from, along with custom dashboard hardware that
              puts vehicle telemetry directly in front of the driver during competition runs.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div id="coach" className="project-section">
            <h3>Virtual Driving Coach</h3>
            <p>
              A significant part of the electronics scope is a virtual driving coach system that
              interfaces with 7+ onboard sensors to give the driver real-time feedback during both
              practice runs and competition. Pulling in that many independent sensor streams and fusing
              them into something a driver can actually act on mid-run is the core engineering challenge
              of the system.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div id="suite" className="project-section">
            <h3>Sensor Suite Research (Co-Lead)</h3>
            <p>
              Alongside the vehicle electronics scope, I co-lead the team's Baja GM-Electronics
              Research initiative with Sreekant G, researching and prototyping the 2025–26 sensor suite
              with teammates Clement P, Devak J, Soham M, and Jose V. Each subsystem below went through
              the same process: research existing approaches, score candidate designs against the Baja
              SAE rulebook and our own requirements, then prototype and test before committing to
              vehicle hardware.
            </p>
            <BajaSensorMap />
            <div className="baja-subprojects-grid">
              {subsystems.map(s => (
                <Link key={s.to} to={s.to} className="baja-sub-card">
                  <div className="baja-sub-card-img-wrap">
                    <img src={s.image} alt="" loading="lazy" className="baja-sub-card-img" />
                  </div>
                  <div className="baja-sub-card-body">
                    <div className="baja-sub-card-title-row">
                      <span className="baja-sub-card-title">{s.title}</span>
                    </div>
                    <p className="baja-sub-card-desc">{s.desc}</p>
                    <span className="baja-sub-card-cta">View Research →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div id="control" className="project-section">
            <h3>Control Algorithms</h3>
            <p>
              I'm developing control algorithms that translate 3D spatial mapping data into automated
              steering and throttle inputs, with a processing delay under 50 ms. That latency budget is
              what keeps an automated input responsive enough to be useful on rough off-road terrain
              rather than lagging behind the vehicle's actual position.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div id="leadership" className="project-section">
            <h3>Leadership</h3>
            <p>
              I lead a team of 10+ members, organizing technical workshops on Altium Designer, circuit
              theory, and PCB design so the broader team can contribute to the electrical scope rather
              than bottlenecking on a single person. I also drive design reviews and handle race-day
              telemetry validation, making sure the electronics are actually trustworthy before the car
              goes on course.
            </p>
          </div>
        </ScrollReveal>
      </DetailPage>
  )
}
