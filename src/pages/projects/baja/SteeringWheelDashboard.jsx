import DetailPage from '../../../components/DetailPage'
import ScrollReveal from '../../../components/ScrollReveal'
import StatRow from '../../../components/StatRow'
import DataTable from '../../../components/DataTable'
import { IconCircuitBoard } from '../../../components/Icons'
import img from '../../../img'

const toc = [
  { id: 'overview',     label: 'Overview' },
  { id: 'layout',       label: 'Board Layout' },
  { id: 'wireless',     label: 'Wireless Link' },
  { id: 'power',        label: 'Power' },
  { id: 'interface',    label: 'Wheel Team Interface' },
  { id: 'plan',         label: 'Build Plan' },
]

const specs = [
  { value: 'Rev E',     label: 'Board Revision' },
  { value: '320 × 240', label: 'TFT Resolution' },
  { value: '20–50 Hz',  label: 'Telemetry Rate' },
  { value: '4–6+ h',    label: 'Target Runtime' },
]

export default function SteeringWheelDashboard() {
  return (
    <DetailPage
      toc={toc}
      backTo="/team/baja-racing"
      backLabel="Longhorn Baja Racing"
      tag="Longhorn Baja Racing · Steering Wheel Dashboard"
      status="in-progress"
      title="Steering Wheel Dashboard PCB"
      icon={<IconCircuitBoard />}
      software={['Altium Designer', 'ESP32-S3', 'ESP-NOW', 'SPI', 'ILI9341', 'PCB Design']}
      roles={['Electronics Lead', 'PCB & Firmware']}
    >
      <ScrollReveal>
        <div id="overview" className="project-section">
          <h3>Overview</h3>
          <p>
            A compact, double-sided carrier board that turns the steering wheel into the driver&rsquo;s
            dashboard. The driver side carries a 2.8&Prime; ILI9341 colour display, two 16&nbsp;mm thumb
            buttons and red and green status LEDs. The hub side carries a plug-in ESP32-S3-DevKitC-1,
            stacked directly behind the display so the wheel doesn&rsquo;t grow any wider.
          </p>
          <p>
            Telemetry arrives wirelessly from the under-seat ESP32 over ESP-NOW, so there are no slip
            rings or cables running through the steering column. I&rsquo;m designing the board in
            Altium alongside the team that owns the wheel enclosure, hub and grips.
          </p>
          <figure className="project-image-single-fig">
            <img
              src={img('/images/baja-racing/steering-wheel/wheel-dash-rev-e-layout.png')}
              alt="Rev E layout of the steering wheel dashboard PCB. Top: driver side with the 14-pin display header on the left edge, two stacked 16 mm button footprints and red and green LEDs in the right wing. Bottom: hub side with two 22-pin sockets for the ESP32-S3-DevKitC-1, support passives, and LBR and Maanas Rastogi silkscreen."
              className="project-image-single"
              style={{ maxHeight: 640 }}
            />
            <figcaption>Rev E in Altium: driver side (top) and hub side, mirrored (bottom).</figcaption>
          </figure>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <StatRow stats={specs} />
      </ScrollReveal>

      <ScrollReveal>
        <div id="layout" className="project-section">
          <h3>Board Layout</h3>
          <p>
            Rev E removes the left-hand wing entirely. The left edge now ends flush with the display
            header, which narrows the board and clears the left grip, and every driver control sits
            in one right-hand wing under the right thumb.
          </p>
          <DataTable
            columns={['Side', 'Components', 'Why it’s there']}
            rows={[
              { cells: ['Driver (top)', '2.8″ ILI9341 TFT on a 14-pin header (J2), stacked buttons SW3 / SW4, LEDs D4 (red) and D5 (green), mounting holes H1–H4', 'All controls and indicators in the right wing; nothing overhangs the left grip'], strong: true },
              { cells: ['Hub (bottom)', 'Two 22-pin sockets (J5, J6) for the ESP32-S3-DevKitC-1, protection and support passives, LBR and name silkscreen', 'The DevKit brings its own 3.3 V regulator, USB-C and boot/reset, stacked behind the display'] },
            ]}
          />
          <p>
            The DevKit&rsquo;s antenna end sits behind the right wing, away from the display&rsquo;s copper,
            and its USB-C end faces inward so the board can be flashed and debugged on the bench.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="wireless" className="project-section">
          <h3>Wireless Link</h3>
          <p>
            The under-seat ESP32 broadcasts a fixed-size binary telemetry packet to the wheel&rsquo;s
            ESP32 over ESP-NOW at 20&ndash;50&nbsp;Hz. Talking directly by MAC address avoids Wi-Fi router
            handshakes and reconnect stalls in a noisy off-road environment. The link runs both ways,
            so button presses on the wheel can be sent back to the car.
          </p>
          <p>
            On the wheel, the ESP32-S3 drives the 320&times;240 display over hardware SPI with DMA, while
            the ESP-NOW receiver runs on the other core.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="power" className="project-section">
          <h3>Power</h3>
          <p>
            The battery lives inside the wheel next to the board. The display and the DevKit share a
            regulated 5&nbsp;V rail, and the DevKit&rsquo;s onboard regulator supplies 3.3&nbsp;V to the
            ESP32-S3. The whole wheel draws about 200&ndash;250&nbsp;mA, so a 1000&ndash;1500&nbsp;mAh
            single-cell LiPo with a 5&nbsp;V boost gives roughly 4&ndash;6 hours or more of runtime.
          </p>
          <p>
            An inline disconnect switch on the enclosure cuts power for storage and transport, and an
            optional filtered divider lets the ESP32 read the battery voltage and show it on screen.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="interface" className="project-section">
          <h3>Wheel Team Interface</h3>
          <p>
            The board is designed around the wheel team&rsquo;s enclosure. They get the Rev E STEP and DXF
            files to check the narrower, asymmetric outline, the stack height of the display, button
            bodies and DevKit, and that the switch bodies clear the DevKit antenna. For sealing,
            silicone boots go around the buttons and LEDs at the faceplate, and the board is conformally
            coated with the headers and switch contacts masked.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div id="plan" className="project-section">
          <h3>Build Plan</h3>
          <DataTable
            columns={['Phase', 'Work', 'Done when']}
            rows={[
              { cells: ['1. Envelope', 'Display fit, button spacing, LED holes, battery pocket, telemetry packet format', 'Signed-off Rev E envelope and shared packet header'] },
              { cells: ['2. Layout check', 'J2 against the display pinout, J5 / J6 against the DevKit, LED resistors, switch clearances', 'Zero ERC/DRC errors and no 3D collisions'], strong: true },
              { cells: ['3. Bring-up', 'Order and assemble boards; check rails, LEDs, buttons and a display test pattern', 'Stable 5 V and 3.3 V at ~250 mA; clean display refresh'] },
              { cells: ['4. Firmware', 'Dashboard UI, LED states, two-button controls, ESP-NOW receiver', 'Under 20 ms packet latency; no dropped frames on the bench'] },
              { cells: ['5. On the car', 'Vibration, sunlight legibility, mud and dust splash testing', 'Glove-friendly buttons, visible LEDs, zero RF dropouts'] },
            ]}
          />
        </div>
      </ScrollReveal>
    </DetailPage>
  )
}
