import DetailPage from '../../../components/DetailPage'
import ScrollReveal from '../../../components/ScrollReveal'
import DataTable from '../../../components/DataTable'
import { IconRadio } from '../../../components/Icons'
import img from '../../../img'

export default function TelemetryLink() {
  return (
    <DetailPage
      backTo="/team/baja-racing"
      backLabel="Longhorn Baja Racing"
      tag="Baja GM-Electronics Research · Sensor Suite"
      title="Wireless Telemetry Link"
      icon={<IconRadio />}
      software={['LoRa (RFM95W)', 'ESP32']}
      roles={['Sensor Suite Co-Lead']}
    >
      <ScrollReveal>
        <div className="project-section">
          <h3>Overview</h3>
          <p>
            With fuel, RPM, temperature, suspension, and pedal sensors all generating data on the car,
            the team needed a way to get that data off the vehicle and onto a pit-side dashboard in
            real time without wiring a physical link to a moving race car. Three wireless options were
            compared: LoRa at 915 MHz, a custom RF link using FSK modulation, and cellular.
          </p>
          <img
            src={img('/images/baja-racing/telemetry/signal-flow.jpg')}
            alt="Signal flow: sensor to ESP32 transmitter to LoRa TX, over the air to an antenna, to LoRa RX, ESP32 receiver, and a dashboard"
            className="project-image-single"
            loading="lazy"
            style={{ background: '#fff' }}
          />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="project-section">
          <h3>Why LoRa</h3>
          <p>
            All three options could handle the sensor suite's data rate; the decision came down to
            noise immunity, development time, and reliability at race venues with no existing network
            coverage.
          </p>
          <DataTable
            columns={['Criteria', 'LoRa @ 915 MHz', 'Custom RF (FSK)', 'Cellular']}
            rows={[
              { cells: ['Range', '5–15 km at 100 mW', '1–3 km', 'Unlimited if coverage exists'] },
              { cells: ['Noise immunity', 'Built-in — 20 dB better than FSK', 'Moderate — manual work needed', 'Good'] },
              { cells: ['Data rate headroom', '14× the need', '3,500× the need', 'Extreme overkill'] },
              { cells: ['Easiest to build', 'Arduino library, done in a day', 'Write framing/sync from scratch', 'SIM + API setup'] },
              { cells: ['Works at competition', 'Fully self-contained', 'Fully self-contained', 'Fails at rural venues'] },
              { cells: ['Cost', '~$30 total for TX/RX pair', 'Cheap chip, high time cost', 'Ongoing SIM plan'] },
              { cells: ['FCC compliance', 'Pre-certified, zero extra work', 'Needs custom certification', 'Carrier handles it'] },
              { cells: ['Verdict', 'Recommended', 'Too much dev risk', 'Eliminated'], strong: true },
            ]}
          />
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="project-section">
          <h3>Implementation</h3>
          <p>
            Each sensor node pairs an ESP32 with an RFM95W transceiver (Semtech SX1276) running LoRa's
            long-range spread-spectrum modulation on the 915 MHz US ISM band, a pre-certified,
            license-free band that needed no extra regulatory work. A regulated 3.3V rail keeps the RF
            section's signal stable, and the same radio pairs transmitter-side (reading a sensor) with
            receiver-side (feeding a pit-side dashboard) to close the link.
          </p>
        </div>
      </ScrollReveal>
    </DetailPage>
  )
}
