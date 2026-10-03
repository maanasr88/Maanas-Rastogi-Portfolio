import DetailPage from '../../../components/DetailPage'
import ScrollReveal from '../../../components/ScrollReveal'
import DataTable from '../../../components/DataTable'
import { IconSatellite } from '../../../components/Icons'
import img from '../../../img'
import BajaSensorMap from '../../../components/BajaSensorMap'

const toc = [
  { id: 'overview', label: 'Overview' },
  { id: 'kalman',   label: 'Sensor Fusion' },
  { id: 'design',   label: 'Design Implementation' },
  { id: 'utility',  label: 'Utility' },
]

export default function ImuGps() {
  return (
    <DetailPage
        toc={toc}
        backTo="/team/baja-racing"
        backLabel="Longhorn Baja Racing"
        tag="Baja GM-Electronics Research · Sensor Suite"
        title="IMU / GPS Vehicle Tracking"
        icon={<IconSatellite />}
        software={['Kalman Filtering', 'ESP32', 'I²C / UART']}
        roles={['Sensor Suite Co-Lead']}
      >
        <ScrollReveal>
          <div id="overview" className="project-section">
            <h3>Overview</h3>
            <p>
              This system integrates an IMU (Inertial Measurement Unit) and a GPS into the Baja vehicle
              to track position and acceleration. A 9-DOF IMU combines accelerometers, gyroscopes, and
              a magnetometer to measure 3-axis acceleration plus yaw, pitch, and roll, while the GPS
              contributes position, time, speed, satellite count, and altitude. Combined with a driver
              trigger button and an ESP32 for data acquisition, the system is built to analyze how the
              vehicle actually responds to driver input, not just where it is.
            </p>
            <div className="project-image-grid">
              <img
                src={img('/images/baja-racing/imu-gps/wiring-diagram.jpg')}
                alt="ESP32 wired to a BN0055 9-axis IMU and a NEO-6M GPS module, with a push button to trigger data collection"
                loading="lazy"
                style={{ background: '#fff' }}
              />
              <img
                src={img('/images/baja-racing/imu-gps/pcb-render.jpg')}
                alt="PCB render integrating an ESP32-class microcontroller with a Quectel GPS module"
                loading="lazy"
              />
            </div>
            <BajaSensorMap highlight={6} />
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div id="kalman" className="project-section">
            <h3>Sensor Fusion</h3>
            <p>
              GPS and IMU data streams correct each other: GPS is accurate over time but updates
              slowly and can drop out, while an IMU updates fast but drifts. A Kalman filter combines
              the two by predicting the next state from the current state, the state's bias, and the
              previous estimate, weighted by a covariance matrix that tracks the uncertainty in
              position. A university study (Michigan State) cited in the team's research found that
              periodically correcting IMU drift with GPS fixes outperforms simply buying a more
              expensive single sensor — the architecture matters more than the part number.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div id="design" className="project-section">
            <h3>Design Implementation</h3>
            <p>
              The driver controls data collection through a console-mounted button, which triggers the
              combined GPS/IMU module to begin logging into the ESP32. Power integrity was treated as a
              first-class concern: Schottky and TVS diodes protect the input rail, ferrite beads and
              decoupling caps suppress noise, and a ground plane keeps the analog front end quiet.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="project-section">
            <h3>Bill of Materials</h3>
            <DataTable
              columns={['Part', 'Qty', 'Price']}
              rows={[
                { cells: ['ESP32', '1', '$15.99'] },
                { cells: ['BN0055 IMU module', '1', '$15.25'] },
                { cells: ['NEO-6M GPS module', '1', '$11.39'] },
                { cells: ['Push button', '1', '$11.99'] },
                { cells: ['Rechargeable battery', '2', '$9.99'] },
                { cells: ['Wiring', 'N/A', '~$10.00'] },
                { cells: ['Total', '', '< $75.00'], strong: true },
              ]}
            />
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div id="utility" className="project-section">
            <h3>Utility</h3>
            <p>
              Beyond tracking speed and estimating fuel efficiency, the clearest use case is evaluating
              how the vehicle actually reacts to driver input: combined with a steering-angle and brake
              sensor, the fused position/acceleration data can help the team understand oversteer and
              understeer tendencies directly, the same approach a University of Rochester Baja team
              used to calculate handling gradients and tune their own driver inputs. Next steps include
              evaluating a joint GPS/IMU module with a built-in Kalman filter, building a position
              visualization dashboard, and syncing this data stream with the team's pedal telemetry.
            </p>
          </div>
        </ScrollReveal>
      </DetailPage>
  )
}
