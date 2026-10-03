import DetailPage from '../../../components/DetailPage'
import ScrollReveal from '../../../components/ScrollReveal'
import DataTable from '../../../components/DataTable'
import { IconThermometer } from '../../../components/Icons'
import img from '../../../img'
import BajaSensorMap from '../../../components/BajaSensorMap'

const toc = [
  { id: 'overview',  label: 'Overview' },
  { id: 'concepts',  label: 'Concept Selection' },
  { id: 'design',    label: 'Design Implementation' },
  { id: 'next',      label: 'Recommendations' },
]

export default function EngineTemperatureSensing() {
  return (
    <DetailPage
        toc={toc}
        backTo="/team/baja-racing"
        backLabel="Longhorn Baja Racing"
        tag="Baja GM-Electronics Research · Sensor Suite"
        title="Engine Temperature Sensing"
        icon={<IconThermometer />}
        software={['LTspice', 'ESP32', 'SPI / RTD Sensing']}
        roles={['Sensor Suite Co-Lead']}
      >
        <ScrollReveal>
          <div id="overview" className="project-section">
            <h3>Overview</h3>
            <p>
              The goal was a temperature monitoring and warning system to protect the engine from
              overheating-related damage, with sensors at critical engine points for continuous thermal
              data collection. Previous designs on the team relied on a single analog temperature
              sensor, which proved vulnerable to sensor failure, and commercial systems were either too
              costly or not tailored to Baja-scale heat levels. The design that followed introduces an
              analog sensor redundancy scheme so the system can cross-verify readings and keep
              operating even if one sensor fails, with a digital threshold circuit that triggers a
              driver warning when a preset safety limit is crossed.
            </p>
            <BajaSensorMap highlight={3} />
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div id="concepts" className="project-section">
            <h3>Concept Selection</h3>
            <p>
              Two concepts were compared on a weighted scorecard: a low-level Concept 1 built from
              discrete RTDs, op-amps, and digital comparator logic doing median calculation and
              sensor-failure detection entirely in analog/digital hardware, and a high-level Concept 2
              using RTDs read through dedicated MAX31865 RTD-to-digital breakout boards into an ESP32.
            </p>
            <DataTable
              columns={['Concept', 'Cost', 'Ease of Build (2×)', 'Familiarity', 'Compact', 'Total']}
              rows={[
                { cells: ['Concept 1 — low-level (RTDs + op-amps)', '4', '1', '3', '3', '12'] },
                { cells: ['Concept 2 — high-level (RTDs + microcontroller)', '3', '4', '2', '4', '17'], strong: true },
              ]}
              note="Scored 1 (worst) to 5 (best); ease of build weighted ×2. Concept 2 was selected for further development."
            />
            <p>
              Concept 1 was useful for conceptualizing the approach, but Concept 2 is more practical,
              using the ESP32's own logic to replace a large discrete comparator/logic network.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div id="design" className="project-section">
            <h3>Design Implementation</h3>
            <p>
              Three RTD probes feed three MAX31865 breakout boards, each handling precision excitation
              and analog-to-digital conversion internally and relaying data to the ESP32 — which
              comfortably supports up to 8 such slaves, meaning the same architecture could scale to 8
              temperature points across the vehicle. A 3-wire RTD configuration was chosen over 2-wire
              to reduce the effect of lead resistance over long cable runs, and an LM2596 buck converter
              steps the 12V rail down to a clean supply for the ESP32 and breakouts.
            </p>
            <img
              src={img('/images/baja-racing/engine-temp/esp32-rtd-wiring.jpg')}
              alt="ESP32 wired to three MAX31865 RTD breakout boards and an LM2596 buck converter from a 12V source"
              className="project-image-single"
              loading="lazy"
              style={{ background: '#fff' }}
            />
            <p style={{ marginTop: 16 }}>
              Decoupling capacitors were added outside the microcontroller's input, the MAX breakout
              inputs, and the buck converter's output, as recommended by each part's datasheet, to
              reduce the electrical noise that would otherwise interfere with the RTD readings.
            </p>
            <img
              src={img('/images/baja-racing/engine-temp/esp32-rtd-decoupling.jpg')}
              alt="Refined wiring diagram with decoupling capacitors added at the microcontroller, RTD breakouts, and buck converter"
              className="project-image-single"
              loading="lazy"
              style={{ background: '#fff' }}
            />
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="project-section">
            <h3>Bill of Materials</h3>
            <DataTable
              columns={['Item', 'Qty']}
              rows={[
                { cells: ['ESP32 dev board', '1'] },
                { cells: ['MAX31865 RTD breakout', '3'] },
                { cells: ['PT100 RTD probe', '3'] },
                { cells: ['LM2596 step-down buck module', '1'] },
                { cells: ['Electrolytic capacitor, 100 µF, 25 V', '1–2'] },
                { cells: ['Ceramic capacitor, 0.1 µF (100 nF), 50 V', '4+'] },
                { cells: ['Electrolytic/tantalum, 10–47 µF, 6.3–16 V', '1–2'] },
              ]}
            />
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div id="next" className="project-section">
            <h3>Discussion &amp; Recommendations</h3>
            <p>
              Trading up to MAX31865 breakouts over a direct voltage-divider measurement improves
              accuracy, linearity, and noise immunity, but the shared power rail introduces its own
              risks: switching noise from the buck converter coupling into sensitive analog circuitry,
              transient spikes causing voltage droop, and possible SPI conflicts if breakout boards
              don't properly tri-state their MISO line when not selected. Planned redesign paths include
              ferrite beads or LC filtering, a dedicated low-noise LDO for the analog front end, and
              migrating to 3- or 4-wire RTD wiring with shielded, twisted-pair cabling throughout.
              Validation is still pending, focused on power-rail stability, SPI reliability across
              multiple slaves, and temperature accuracy against a calibrated reference.
            </p>
          </div>
        </ScrollReveal>
      </DetailPage>
  )
}
