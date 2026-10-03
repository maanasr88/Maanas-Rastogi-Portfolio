import DetailPage from '../../../components/DetailPage'
import ScrollReveal from '../../../components/ScrollReveal'
import DataTable from '../../../components/DataTable'
import { IconFuel } from '../../../components/Icons'
import img from '../../../img'
import BajaSensorMap from '../../../components/BajaSensorMap'

const toc = [
  { id: 'overview',  label: 'Overview' },
  { id: 'concepts',  label: 'Concept Selection' },
  { id: 'design',    label: 'Design Implementation' },
  { id: 'prototype', label: 'Prototype Testing' },
  { id: 'next',      label: 'Recommendations' },
]

export default function FuelLevelIndicator() {
  return (
    <DetailPage
        toc={toc}
        backTo="/team/baja-racing"
        backLabel="Longhorn Baja Racing"
        tag="Baja GM-Electronics Research · Sensor Suite"
        title="Fuel Level Indicator"
        icon={<IconFuel />}
        software={['KiCad', 'ESP32', 'Hall-Effect Sensing']}
        roles={['Sensor Suite Co-Lead']}
      >
        <ScrollReveal>
          <div id="overview" className="project-section">
            <h3>Overview</h3>
            <p>
              The goal of this project was a fuel level indicator that tells the driver whether the
              tank is full or approaching empty, rather than a precise level, so ride time can be
              estimated during an endurance race. The 2026 Baja SAE rulebook requires the fuel tank
              (a Pyrotect SFC1000) to stay unmodified and free of injurious defects, which ruled out any
              sensor that mounts inside the tank itself. That constraint shaped the whole design: the
              fuel level has to be measured from outside the tank, without modification.
            </p>
            <p>
              Several approaches were researched and ruled out before landing on the final concept: a
              piston event counter and an RPM-based estimate (both indirect and inaccurate), an in-tank
              float sensor and a cap-mounted pressure sensor (both prohibited by the no-modification
              rule), and a pure time-scaling estimate (no sensor at all, too inaccurate). The design
              that passed every requirement, a turbine flow meter with a built-in Hall-effect sensor
              mounted in the fuel line between the tank and the engine, measures fuel consumption
              without touching the tank, and any line break it could cause occurs above the spill pan
              rather than at the tank.
            </p>
            <BajaSensorMap highlight={2} />
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div id="concepts" className="project-section">
            <h3>Concept Selection</h3>
            <p>
              Seven designs were researched against legality, reliability, ease of implementation, and
              cost. The turbine flow meter and the in-tank float sensor both scored well, but only the
              flow meter satisfied the rule against modifying the fuel tank.
            </p>
            <DataTable
              columns={['Design', 'Legal', 'Reliable', 'Easy', 'Cost Effective']}
              rows={[
                { cells: ['Piston event counter', '✗', '✗', '✗', '✓'] },
                { cells: ['RPM sensor (fuel estimate)', '✗', '✗', '✗', '✓'] },
                { cells: ['In-tank fuel level sensor', '✗', '✓', '✗', '✓'] },
                { cells: ['Pressure sensor (cap-mounted)', '✓', '✗', '✗', '✓'] },
                { cells: ['Time scaling (no sensor)', '✓', '✗', '✓', '✓'] },
                { cells: ['Turbine flow meter', '✓', '✓', '✓', '✗'], strong: true },
                { cells: ['Water-level sensor (external)', '✓', '✓', '✓', '✓'] },
              ]}
              note="Scored against the 2026 Baja SAE rulebook's B.6.5 fuel tank rule, which prohibits any tank modification."
            />
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="project-section">
            <h3>Selected Component</h3>
            <p>
              An inline turbine flow meter with an integrated Hall-effect sensor sits in the fuel line
              outside the tank. Fuel flow spins the turbine at a rate proportional to the flow leaving
              the tank, and the Hall sensor converts that rotation into a digital pulse train an ESP32
              can count directly, with no contact with the fuel itself.
            </p>
            <img
              src={img('/images/baja-racing/fuel-level/turbine-flow-meter.jpg')}
              alt="Inline turbine flow meter with integrated Hall-effect sensor, brass fitting"
              className="project-image-single"
              loading="lazy"
              style={{ background: '#fff', maxHeight: 320, objectFit: 'contain' }}
            />
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div id="design" className="project-section">
            <h3>Design Implementation</h3>
            <p>
              The sensor's Hall-effect output (A1324LLHLT-T) is conditioned with ESD-protection diodes
              and a decoupling capacitor before reaching the ESP32's GPIO, and the whole sensor and
              regulator stage runs off the vehicle's 12V rail stepped down through an LD1117V33
              linear regulator.
            </p>
            <img
              src={img('/images/baja-racing/fuel-level/schematic.jpg')}
              alt="KiCad schematic: Hall-effect flow sensor conditioning circuit feeding an ESP32-WROOM-32"
              className="project-image-single"
              loading="lazy"
              style={{ background: '#fff' }}
            />
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div id="prototype" className="project-section">
            <h3>Prototype Testing</h3>
            <p>
              Before committing fuel-line hardware, the measurement principle was validated with a
              bench rig built from two water cooler jugs, hardware-store brass fittings, and 3/16"
              fuel line matching the rulebook's spec, using bathwater to stand in for fuel. A brass
              splitter divides the simulated tank's output between a sight tube and the prototype
              "engine," so the tube's water level could be compared directly against the tank's actual
              level.
            </p>
            <img
              src={img('/images/baja-racing/fuel-level/prototype-rig.jpg')}
              alt="Bench prototype: two water cooler jugs connected by fuel line and a brass splitter to a sight tube"
              className="project-image-single"
              loading="lazy"
            />
            <div className="project-image-grid" style={{ marginTop: 16 }}>
              <img
                src={img('/images/baja-racing/fuel-level/level-match.jpg')}
                alt="Sight tube level matching the tank level at low flow rate"
                loading="lazy"
              />
              <img
                src={img('/images/baja-racing/fuel-level/level-below.jpg')}
                alt="Sight tube level reading below the tank level at higher flow rate"
                loading="lazy"
              />
            </div>
            <p style={{ marginTop: 12 }}>
              Jostling and movement had little effect on the sight-tube reading, but the reading did
              shift with flow rate: the tube level tracked the tank level at low flow, then dropped
              below it as flow increased. That means the eventual sensor has to stay independent of
              engine flow rate rather than inferring level from a side line, which is exactly why the
              Hall-effect turbine meter, measuring flow directly in the main line rather than a
              secondary line, replaced this sight-tube concept for the final design.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div id="next" className="project-section">
            <h3>Recommendations</h3>
            <p>
              The main risk still to address is sensor independence: the fuel reading should never be
              coupled to the engine's instantaneous flow rate. A future iteration could mount a
              no-contact ultrasonic sensor on top of the tank pointed down into the fuel instead, and
              validate it on a running vehicle rather than a bench rig. Integrating the "low fuel"
              signal into the team's shared driver HUD, rather than a standalone indicator, is the
              next cross-team step.
            </p>
          </div>
        </ScrollReveal>
      </DetailPage>
  )
}
