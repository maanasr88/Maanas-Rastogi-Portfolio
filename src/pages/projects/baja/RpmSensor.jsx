import DetailPage from '../../../components/DetailPage'
import ScrollReveal from '../../../components/ScrollReveal'
import StatRow from '../../../components/StatRow'
import DataTable from '../../../components/DataTable'
import { IconChip } from '../../../components/Icons'
import img from '../../../img'

const specs = [
  { value: '±2%',      label: 'Accuracy, 0–2,000 RPM' },
  { value: '1–2 mm',   label: 'Sensing Air Gap' },
  { value: '<1 ms',     label: 'Response Time' },
  { value: '<100 g',    label: 'Weight per Sensor' },
]

export default function RpmSensor() {
  return (
    <DetailPage
      backTo="/team/baja-racing"
      backLabel="Longhorn Baja Racing"
      tag="Baja GM-Electronics Research · Sensor Suite"
      title="RPM Sensor"
      icon={<IconChip />}
      software={['Hall-Effect Sensing', 'CAD Mounting Design']}
      roles={['Sensor Suite Co-Lead']}
    >
      <ScrollReveal>
        <div className="project-section">
          <h3>Overview</h3>
          <p>
            Accurate wheel-speed and drivetrain RPM measurement is essential for Baja SAE data logging
            and performance tuning. The team selected Hall-effect sensors for durability, dust
            resistance, and fully contactless operation under harsh off-road conditions. A Hall sensor
            detects magnetic field changes from a nearby ferrous target or magnet on the rotating part
            and produces a digital pulse train proportional to rotation, which a microcontroller can
            count directly. Automotive-grade options like the Honeywell 1GT101DC and ZF Cherry
            GS100502 were identified as suitable references for sealing and compact size.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <StatRow stats={specs} />
      </ScrollReveal>

      <ScrollReveal>
        <div className="project-section">
          <h3>System Requirements</h3>
          <DataTable
            columns={['Category', 'Requirement', 'Target']}
            rows={[
              { cells: ['Durability', 'Survive vibration, shock, and mud exposure', 'IP67+; rigid steel/aluminum mount'] },
              { cells: ['Accuracy', 'Detect wheel speed from low to high RPM', '±2% error, 0–2,000 RPM'] },
              { cells: ['Sensing distance', 'Reliable detection over a small air gap', '1–2 mm'] },
              { cells: ['Response time', 'Track fast rotation without missing pulses', '<1 ms switching time'] },
              { cells: ['Temperature range', 'Operate reliably outdoors', '−40 °C to +125 °C'] },
              { cells: ['Integration', 'Compatible with existing DAQ/microcontroller', '3-wire interface (V+, GND, Signal)'] },
              { cells: ['Weight', 'Minimal added unsprung mass', '<100 g per sensor with mount'] },
            ]}
          />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="project-section">
          <h3>Prototype Circuit</h3>
          <p>
            A bench version of the Hall-effect signal chain was built around a Honeywell SS443R sensor
            feeding an LM339 comparator network, with a bank of pull-up/bias resistors tuned for a clean
            digital edge and an onboard indicator LED, before the signal reaches the data-acquisition
            microcontroller.
          </p>
          <img
            src={img('/images/baja-racing/rpm-sensor/hall-effect-circuit.jpg')}
            alt="Hall-effect sensor circuit: Honeywell SS443R feeding an LM339 comparator with bias resistor network"
            className="project-image-single"
            loading="lazy"
            style={{ background: '#fff' }}
          />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="project-section">
          <h3>Design &amp; Test Process</h3>
          <p>
            The process follows an iterative, test-driven approach: select a sensor model for
            durability and sensing range, design a small mounting bracket holding it 1–2 mm from the
            rotating target, route shielded wiring to the data-acquisition microcontroller, and count
            pulses with a firmware timer interrupt. Bench testing with a drill or lathe simulates wheel
            rotation to confirm clean pulse detection at low and high speed before the sensor goes on
            the vehicle. If noise or false triggers appear, the air gap, bracket stiffness, or software
            filtering gets adjusted and retested.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="project-section">
          <h3>Recommendations</h3>
          <p>
            Future iterations should focus on mount stiffness and placement to minimize vibration
            exposure, with molded polymer housings or CNC aluminum brackets for durability. Onboard
            filtering or debouncing would improve noise immunity, and CAN-based logging would let RPM
            data integrate directly with the drivetrain and suspension telemetry the rest of the sensor
            suite collects.
          </p>
        </div>
      </ScrollReveal>
    </DetailPage>
  )
}
