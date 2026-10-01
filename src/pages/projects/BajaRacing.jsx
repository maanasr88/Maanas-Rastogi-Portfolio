import DetailPage from '../../components/DetailPage'
import ScrollReveal from '../../components/ScrollReveal'
import StatRow from '../../components/StatRow'
import StickyTOC from '../../components/StickyTOC'
import { IconRacing } from '../../components/Icons'

const toc = [
  { id: 'overview',    label: 'Overview' },
  { id: 'power',       label: 'Power & Dashboard' },
  { id: 'coach',       label: 'Virtual Driving Coach' },
  { id: 'fusion',      label: 'CVT Sensor Fusion' },
  { id: 'control',     label: 'Control Algorithms' },
  { id: 'leadership',  label: 'Leadership' },
]

const specs = [
  { value: '10+',    label: 'Members Led' },
  { value: '7+',     label: 'Onboard Sensors' },
  { value: '<50 ms', label: 'Processing Delay' },
  { value: '20 AWG', label: 'Power Distribution' },
]

export default function BajaRacing() {
  return (
    <>
      <StickyTOC sections={toc} />
      <DetailPage
        backTo="/team"
        backLabel="Team Projects"
        tag="Longhorn Baja Racing · Aug 2025 – Present"
        title="Racing Team Electronics Lead"
        icon={<IconRacing />}
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
          <div id="fusion" className="project-section">
            <h3>CVT Sensor Fusion: RPM + Belt Temperature</h3>
            <p>
              One concrete use of the sensor array is tuning the car's CVT (continuously variable
              transmission), which every Baja SAE car relies on to keep its engine in its usable power
              band. The spec Briggs &amp; Stratton engine used across the Baja SAE field is governed to
              roughly 3,800 RPM, and the CVT's primary clutch is tuned to engage somewhere around
              2,000&ndash;2,400 RPM so the engine climbs straight into its torque band instead of bogging
              down off the line. Reading engine RPM alone can't tell the difference between a clean
              engagement and a clutch that's slipping, since both can briefly show the same engine speed.
            </p>
            <p>
              Pairing the RPM signal with a temperature sensor at the belt housing closes that gap.
              Rubber/aramid CVT belts are typically rated up to roughly 250&ndash;300&deg;F before they
              start to glaze and lose grip, so a belt temperature that climbs faster than engine load
              would predict, alongside an RPM trace that's holding higher than the primary clutch's
              engagement point suggests it should, is the fused signature of a slipping, overheating
              belt rather than a normal shift. Flagging that combination mid-run, instead of after a
              belt failure on course, is what turns two raw sensor channels into an actual tuning and
              reliability tool for the drivetrain.
            </p>
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
    </>
  )
}
