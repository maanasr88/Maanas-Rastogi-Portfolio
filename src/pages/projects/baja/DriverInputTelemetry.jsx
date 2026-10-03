import DetailPage from '../../../components/DetailPage'
import ScrollReveal from '../../../components/ScrollReveal'
import DataTable from '../../../components/DataTable'
import { IconPedal } from '../../../components/Icons'
import img from '../../../img'
import BajaSensorMap from '../../../components/BajaSensorMap'

const toc = [
  { id: 'overview',  label: 'Overview' },
  { id: 'concepts',  label: 'Concept Selection' },
  { id: 'design',    label: 'Design Implementation' },
  { id: 'testing',   label: 'Testing' },
]

export default function DriverInputTelemetry() {
  return (
    <DetailPage
        toc={toc}
        backTo="/team/baja-racing"
        backLabel="Longhorn Baja Racing"
        tag="Baja GM-Electronics Research · Sensor Suite"
        title="Driver Input Telemetry (Pedal Box)"
        icon={<IconPedal />}
        software={['LTspice', 'ESP32', 'CAN Bus (MCP2515)']}
        roles={['Sensor Suite Co-Lead']}
      >
        <ScrollReveal>
          <div id="overview" className="project-section">
            <h3>Overview</h3>
            <p>
              This system records throttle and brake activity in real time so drivers and engineers
              can analyze pedal usage, throttle response, and braking performance, and compare it
              against lap times and other metrics. Potentiometers measure pedal position and pressure,
              an ESP32 reads and digitizes the signal, and the result is sent out over a CAN bus for
              visualization, laying the groundwork for future integration with the car's ECU.
            </p>
            <BajaSensorMap highlight={1} />
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div id="concepts" className="project-section">
            <h3>Concept Selection</h3>
            <p>
              Three pedal-sensing options were scored on accuracy, cost, durability, and ease of
              integration. A linear load cell scored highest on raw accuracy, but the rotary
              potentiometer won on total score for its low cost, proven reliability, and easy
              mechanical mounting directly on the pedal axle.
            </p>
            <DataTable
              columns={['Criteria', 'Hall Sensor', 'Potentiometer', 'Load Cell (Brake)']}
              rows={[
                { cells: ['Accuracy', '9/10', '8/10', '10/10'] },
                { cells: ['Cost', '5/10', '10/10', '7/10'] },
                { cells: ['Durability', '9/10', '6/10', '8/10'] },
                { cells: ['Ease of Integration', '7/10', '9/10', '6/10'] },
                { cells: ['Total', '30', '33', '31'], strong: true },
              ]}
              note="Rotary potentiometer selected for throttle: low cost, proven reliability, easy mounting on the pedal axle."
            />
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div id="design" className="project-section">
            <h3>Design Implementation</h3>
            <p>
              A 12V input is stepped down through a Texas Instruments LM1117 regulator to the 3.3V the
              pedal potentiometer runs on. The potentiometer's wiper voltage is proportional to pedal
              angle (<code>Vout = Vin × θ/θmax</code>, about 0.11V per degree of a 30° pedal sweep on a
              3.3V system), optionally passed through an active RC low-pass filter, then read by the
              ESP32's ADC. Firmware calibrated to the pot converts that analog reading into a digital
              SPI packet for an MCP2515 CAN bus module, which outputs the differential CAN_H/CAN_L
              signals the rest of the vehicle's CAN network uses.
            </p>
            <img
              src={img('/images/baja-racing/driver-inputs/system-wiring.jpg')}
              alt="Overview of connections: 12V battery, pedal potentiometer, ESP32, and MCP2515 CAN bus module"
              className="project-image-single"
              loading="lazy"
            />
            <div className="project-image-grid" style={{ marginTop: 16 }}>
              <img
                src={img('/images/baja-racing/driver-inputs/pedal-pcb.jpg')}
                alt="Completed pedal-box PCB layout"
                loading="lazy"
                style={{ background: '#fff' }}
              />
              <img
                src={img('/images/baja-racing/driver-inputs/pedal-brackets.jpg')}
                alt="3D-printed yellow pedal-box brackets stamped LBR"
                loading="lazy"
              />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="project-section">
            <h3>Bill of Materials</h3>
            <DataTable
              columns={['Item', 'Cost']}
              rows={[
                { cells: ['ESP32 dev module', '$9.00'] },
                { cells: ['MCP2515 CAN bus module', '$8.00'] },
                { cells: ['Capacitors and resistors', '~$0.40'] },
                { cells: ['Rotary potentiometer', '~$3.50'] },
                { cells: ['PCB', '~$7.00'] },
                { cells: ['Mounting hardware', '~$3.00'] },
              ]}
            />
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div id="testing" className="project-section">
            <h3>Testing</h3>
            <p>
              The voltage-regulator stage was validated first in LTspice: with the potentiometer at its
              halfway point, the simulation confirmed the analog output sits at roughly half the 3.3V
              supply, exactly as the <code>Vout = Vin × θ/θmax</code> model predicts. The PCB design is
              complete and the completed pedal brackets have been 3D-printed and test-fit into the
              3D-printed pedal box; remaining work is bringing up the ESP32, MCP2515, and firmware on
              the board itself, and evaluating an optional low-pass filter or swapping the potentiometer
              for a Hall sensor to reduce mechanical wear.
            </p>
          </div>
        </ScrollReveal>
      </DetailPage>
  )
}
