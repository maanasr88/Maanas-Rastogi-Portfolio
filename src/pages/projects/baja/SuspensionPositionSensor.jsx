import DetailPage from '../../../components/DetailPage'
import ScrollReveal from '../../../components/ScrollReveal'
import DataTable from '../../../components/DataTable'
import { IconSuspension } from '../../../components/Icons'

export default function SuspensionPositionSensor() {
  return (
    <DetailPage
      backTo="/team/baja-racing"
      backLabel="Longhorn Baja Racing"
      tag="Baja GM-Electronics Research · Sensor Suite"
      title="Suspension Position Sensor"
      icon={<IconSuspension />}
      software={['Linear Potentiometers', 'ESP32 ADC']}
      roles={['Sensor Suite Co-Lead']}
    >
      <ScrollReveal>
        <div className="project-section">
          <h3>Overview</h3>
          <p>
            This sensor measures suspension extension, compression, and travel to support a semi-active
            suspension system that adjusts damping and rebound in real time. A linear potentiometer
            operates as a sealed sliding voltage divider: as the suspension compresses and rebounds, the
            sensor rod moves a wiper along a resistive track, producing an output voltage proportional
            to travel distance that the ESP32's ADC can sample directly. Mounted between the chassis and
            a moving suspension member near the shock, it logs lap-by-lap suspension travel, bottom-out
            events, and motion frequency.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="project-section">
          <h3>System Requirements</h3>
          <DataTable
            columns={['Category', 'Requirement', 'Target']}
            rows={[
              { cells: ['Durability', 'Survive vibration, shock, and mud exposure', 'IP65–67+; rigid steel/aluminum mount'] },
              { cells: ['Accuracy', 'Detect suspension distance travelled', '±10 mm'] },
              { cells: ['Sensor range', 'Maintain reliable reading through vibration', '50–250 mm'] },
              { cells: ['Operating voltage', 'Compatible with vehicle electrical system', '12V DC input'] },
              { cells: ['Output signal', 'Clean digital signal for microcontroller', '0–3.3V, 12-bit resolution'] },
              { cells: ['Response time', 'Track fast suspension changes', '500–1,000 Hz'] },
              { cells: ['Integration', 'Compatible with existing DAQ/microcontroller', '3-wire interface (V+, GND, Signal)'] },
              { cells: ['Weight', 'Minimal added unsprung mass', '<200 g per sensor with mount'] },
            ]}
          />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="project-section">
          <h3>Mechanical &amp; Electrical Design</h3>
          <p>
            The travel range, sampling rate, and packaging constraints are defined first so the sensor
            captures the full suspension stroke without reaching its own mechanical limits. Spherical
            rod ends and bracket geometry keep the sensor rod moving in pure push-pull, preventing side
            loading or binding through the full suspension cycle, with mounting verified at full droop
            and full bump so the bump stop activates before the sensor bottoms out internally.
            Electrically, the 12V rail is stepped down to 5V and then to 0–3.3V through two buck
            converter stages feeding the potentiometer and the ESP32's 12-bit ADC, which firmware then
            converts into a physical travel distance calibrated against known suspension positions.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="project-section">
          <h3>Status</h3>
          <p>
            The sensing approach and electrical architecture are defined; on-vehicle testing and
            calibration against known suspension positions are the next steps, followed by validating
            that mounting stiffness and noise don't degrade the data under full off-road loading.
          </p>
        </div>
      </ScrollReveal>
    </DetailPage>
  )
}
