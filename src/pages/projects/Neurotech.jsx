import DetailPage from '../../components/DetailPage'
import ScrollReveal from '../../components/ScrollReveal'
import StatRow from '../../components/StatRow'
import DataTable from '../../components/DataTable'
import StickyTOC from '../../components/StickyTOC'
import img from '../../img'

const toc = [
  { id: 'overview',     label: 'Overview' },
  { id: 'architecture', label: 'System Architecture' },
  { id: 'manual',       label: 'Manual Input & Mounting' },
  { id: 'sensing',      label: 'Neural & Spatial Sensing' },
  { id: 'power',        label: 'Power System & Safety' },
  { id: 'drivetrain',   label: 'Motor Driver & Drivetrain' },
  { id: 'drone',        label: 'Drone Motor Control' },
  { id: 'learned',      label: 'What I Learned' },
]

const specs = [
  { value: '5',      label: 'Engineers Directed' },
  { value: '80 lbs', label: 'Target Chassis Weight' },
  { value: '20 ms',  label: 'Wireless Control Latency' },
  { value: '30%',    label: 'Faster Integration' },
]

export default function Neurotech() {
  return (
    <>
      <StickyTOC sections={toc} />
      <DetailPage
        backTo="/team"
        backLabel="Team Projects"
        tag="Longhorn Neurotech · Aug 2024 – Aug 2026"
        title="LHNT Electric Wheelchair — Control System & Electronics Integration"
        heroImage={img('/images/neurotech/wheelchair-render-cover.jpg')}
        heroStyle={{ filter: 'brightness(0.55) saturate(1.1)', transform: 'scale(1.1)' }}
        software={['Mechanical/Electrical Integration', 'SolidWorks FEA', 'ESP32 / Embedded C', 'Team Leadership']}
        roles={['Manufacturing/Design Lead']}
      >
        <ScrollReveal>
          <div id="overview" className="project-section">
            <h3>Overview</h3>
            <p>
              As Manufacturing/Design Lead at Longhorn Neurotech, I directed a team of 5 engineers
              designing the propulsion and control electronics for the LHNT electric wheelchair, an
              assistive mobility platform built for users with severe neuromuscular impairments. Most
              medical brain-computer-interface wheelchairs rely on proprietary sensors that cost tens of
              thousands of dollars; our goal was a responsive, secure platform built almost entirely from
              affordable, off-the-shelf components instead, centered on an ESP32 that fuses a manual
              joystick, a wireless EEG headset, and an ultrasonic sensor array into a single navigation
              system. My own scope covered the mechanical integration &mdash; mounting hardware, the
              electronics tray, and the motor/drivetrain &mdash; while coordinating with the team's
              hardware-software implementation (HSI) group on the control logic that ties it together.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <StatRow stats={specs} />
        </ScrollReveal>

        <ScrollReveal>
          <div id="architecture" className="project-section">
            <h3>System Architecture</h3>
            <p>
              The control system takes in three input streams &mdash; manual joystick position, EEG
              signals, and ultrasonic range data &mdash; and fuses them on an ESP32 before driving the
              motor controller. An ADC digitizes the joystick's analog output, while the EEG headset and
              ultrasonic sensors already transmit digital data directly to the microcontroller. Power is
              tiered the same way the logic is: a 24V battery bank runs the motors directly and feeds two
              buck converters that step down to 3.3V for the microcontroller and 5V for the motor
              driver, so the high-current drivetrain rail never touches the sensitive logic supply
              directly.
            </p>
            <img
              src={img('/images/neurotech/system-architecture-diagram.png')}
              alt="Wheelchair control system block diagram: joystick, EEG headset, and spatial sensors feed an ESP32 microcontroller powered by a tiered 24V/5V/3.3V supply, which drives a motor controller and brushed motors"
              className="project-image-single"
              style={{ background: '#fff' }}
            />
            <p style={{ marginTop: 16 }}>
              Two constraints shaped every decision downstream of that diagram. First, the EEG and
              ultrasonic streams run at different frequencies and had to be fused without introducing
              navigational lag, which is why the ESP32's dual-core architecture splits neural signal
              decoding onto its own core, in parallel with the drivetrain control loop. Second, safety
              had to be deterministic rather than best-effort: a stop command from the ultrasonic array
              must be able to override user intent immediately, not queue behind other traffic on the
              same loop.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div id="manual" className="project-section">
            <h3>Manual Input &amp; Mounting</h3>
            <p>
              The manual interface is a JH-D202X-R2 dual-axis potentiometer joystick. A 12-bit ADC
              digitizes its output to a 0&ndash;4095 range, and the software applies a &plusmn;120-unit
              deadzone around center so mechanical tolerance and electrical noise in the resting joystick
              can't trigger the 250W motors on their own. Conditioned coordinates are packaged into a
              single JoyPkt struct and broadcast over ESP-NOW, a connectionless wireless protocol chosen
              specifically to skip the standard Wi-Fi handshake; that keeps the gap between user intent
              and motor response to about 20 ms.
            </p>

            <h4 style={{ marginTop: 20, marginBottom: 8, fontSize: '1rem', color: 'var(--text-primary)' }}>Joystick Box</h4>
            <p>
              The joystick is secured inside a custom two-piece 3D-printed enclosure with an internal
              post that locates and secures the potentiometer module, isolating its leads and analog
              wiring from the vibration the geared motors put through the frame.
            </p>
            <div className="project-image-grid">
              <img src={img('/images/neurotech/joystick-box-1.jpg')} alt="CAD render of the joystick box lower shell with mounting flanges" loading="lazy" style={{ background: '#fff' }} />
              <img src={img('/images/neurotech/joystick-box-2.jpg')} alt="CAD render of the joystick box upper cover" loading="lazy" style={{ background: '#fff' }} />
            </div>

            <h4 style={{ marginTop: 24, marginBottom: 8, fontSize: '1rem', color: 'var(--text-primary)' }}>Arm Extension &amp; Wheelchair Clasps</h4>
            <p>
              An L-shaped arm-extension bracket carries the joystick box out to a usable position for
              the rider, while a separate wrap-around clasp clamps onto the wheelchair's tubular armrest
              rail to anchor it. The modular clamp allows the whole assembly to slide to a new position
              along the frame without any permanent structural modification to the chair.
            </p>
            <div className="project-image-grid">
              <img src={img('/images/neurotech/arm-extension.jpg')} alt="CAD render of the L-shaped arm-extension mounting bracket" loading="lazy" style={{ background: '#fff' }} />
              <img src={img('/images/neurotech/wheelchair-clasp.jpg')} alt="CAD render of the wheelchair frame clasp" loading="lazy" style={{ background: '#fff' }} />
            </div>

            <h4 style={{ marginTop: 24, marginBottom: 8, fontSize: '1rem', color: 'var(--text-primary)' }}>ESP Case Design</h4>
            <p>A two-piece snap-fit enclosure for the ESP32 control board, keeping it protected while still accessible for wiring.</p>
            <div className="project-image-grid">
              <img src={img('/images/neurotech/esp-case-1.jpg')} alt="CAD render of the ESP32 case's two shells, showing internal channel detail" loading="lazy" style={{ background: '#fff' }} />
              <img src={img('/images/neurotech/esp-case-2.jpg')} alt="CAD render of the ESP32 case closed and open" loading="lazy" style={{ background: '#fff' }} />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div id="sensing" className="project-section">
            <h3>Neural &amp; Spatial Sensing</h3>
            <p>
              A wireless EEG headset detects microvolt-level scalp activity and transmits it to the ESP32
              over Bluetooth, eliminating a physical tether between the headset and the chair. That
              stream is decoded on its own ESP32 core precisely so high-bandwidth neural signal
              processing can run in parallel with the drivetrain loop without introducing lag; further
              refining that decoding into a fully seamless neural-control mode is the team's next phase
              of work on top of this foundation.
            </p>
            <p>
              Spatial awareness comes from a symmetrical array of four HC-SR04 ultrasonic sensors at the
              corners of the frame, each emitting 40 kHz pulses to measure distance on both forward and
              reverse maneuvers. That spatial data feeds a high-priority safety interrupt: if an object
              crosses a predefined proximity threshold, a STOP command preempts whatever the user is
              doing, which is the one case in the whole system where the software is deliberately allowed
              to override driver intent.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div id="power" className="project-section">
            <h3>Power System &amp; Safety</h3>
            <p>
              Two 24V 10Ah lithium batteries wired in parallel supply 20Ah of total capacity, enough
              current headroom to run both drive motors simultaneously without exceeding the control
              electronics' voltage limits. Buck converters bridge that 24V rail down to 3.3V for the
              ESP32 and 5V for the motor driver logic. Three hardware fail-safes sit on top of that:
              a 30A waterproof toggle switch for an immediate manual power-kill, and two 30A inline blade
              fuses on the battery rails that break the circuit during a motor stall or short before it
              can reach thermal runaway.
            </p>
            <p>
              All of that sits in a laser-cut plywood electronics tray, mounted beneath the seat to keep
              the system's center of gravity low. Wood was chosen deliberately: it insulates and damps
              vibration without the weight of a metal enclosure, shielding the ESP32 and motor drivers
              from the oscillation the geared motors put through the frame. A 3D-printed clasp system
              (shown in orange/pink) clamps the tray to the chair without drilling into it.
            </p>
            <img
              src={img('/images/neurotech/electronics-tray.jpg')}
              alt="Laser-cut plywood electronics tray with a 3D-printed orange and pink clasp clamping it to the wheelchair frame"
              className="project-image-single"
              loading="lazy"
            />
            <ul style={{ color: 'var(--text-secondary)', paddingLeft: 20, lineHeight: 1.9, fontSize: '0.95rem', marginTop: 12 }}>
              <li>Laser-cut prototype of the tray to hold the battery, ESP32, and motor drivers.</li>
              <li>3D-printed clasp system clamps the tray to the wheelchair frame without drilling.</li>
              <li>Next steps: CNC the tray to increase weight capacity, and add rubber inserts to reduce rotation.</li>
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div id="drivetrain" className="project-section">
            <h3>Motor Driver &amp; Drivetrain</h3>
            <p>
              The ESP32's 3.3V logic can't directly energize the 250W drive motors, so a BTS7960 H-bridge
              driver sits between them: four MOSFETs arranged in a bridge let the low-power PWM signal
              from the microcontroller switch the much larger current flowing from the battery, while
              also protecting the logic board from the motors' back-EMF. PWM runs at 20,000 Hz, both to
              push the motor's acoustic signature above human hearing and to keep torque response linear
              across the full duty cycle, and each driver carries its own aluminum heatsink to stay
              thermally stable at that switching frequency.
            </p>
            <p>
              The drivetrain itself is built around a MY1016Z-W DC gear motor, selected against the
              chair's target speed and torque requirements:
            </p>
            <img
              src={img('/images/neurotech/motor-drawing-data.jpg')}
              alt="MY1016Z-W motor drawing and datasheet table: 250W rated output, 24V DC, 75/120 RPM no-load speed, 0.98/0.64 N·m rated torque, 1:37.98 gear ratio"
              className="project-image-single"
              loading="lazy"
              style={{ background: '#fff' }}
            />
            <DataTable
              columns={['Specification', 'Value']}
              rows={[
                { cells: ['Rated output power', '250 W'] },
                { cells: ['Rated voltage', '24V DC'] },
                { cells: ['No-load speed', '75 RPM / 120 RPM'] },
                { cells: ['Full load current', '≤14.8 A / ≤13.7 A'] },
                { cells: ['Rated torque', '0.98 N·m / 0.64 N·m'] },
                { cells: ['Efficiency', '≥70%'] },
                { cells: ['Gear ratio', '1:37.98'] },
              ]}
              note="Dual rating reflects the motor's two no-load-speed configurations."
            />

            <h4 style={{ marginTop: 24, marginBottom: 8, fontSize: '1rem', color: 'var(--text-primary)' }}>Motor Key</h4>
            <p>
              The motor shaft connects to the wheel hub through a keyed adapter rather than a
              friction-only coupling. A steel key locks the rotation between shaft and hub: it ensures
              reliable torque transmission from the motor shaft to the wheel hub by preventing relative
              rotation (slip), and provides a positive mechanical lock that's more reliable than a pure
              friction-based connection for high-load wheelchair use.
            </p>
            <div className="project-image-grid">
              <img src={img('/images/neurotech/motor-key-reference.jpg')} alt="Reference diagram of a direct-drive shaft adapter with key, labeling the motor shaft, steel key, adapter spacer, and wheel hub" loading="lazy" style={{ background: '#fff' }} />
              <img src={img('/images/neurotech/motor-key-ours-photo.jpg')} alt="Render of the team's own steel key" loading="lazy" style={{ background: '#fff' }} />
            </div>
            <p style={{ marginTop: 12, fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Left: a reference diagram of the shaft-adapter/key concept. Right: the team's own key,
              dimensioned at 6mm × 6mm × 60mm to match the motor's shaft keyway.
            </p>
            <img
              src={img('/images/neurotech/motor-key-ours-dims.jpg')}
              alt="Dimensioned drawing of the team's steel key: 6mm width, 6mm height, 60mm length"
              className="project-image-single"
              loading="lazy"
              style={{ background: '#fff', marginTop: 12 }}
            />

            <h4 style={{ marginTop: 24, marginBottom: 8, fontSize: '1rem', color: 'var(--text-primary)' }}>Motor Mount Redesign</h4>
            <p>
              The motors attach to the chassis through custom CNC-machined L-brackets. The first
              iteration mounted the motor in the middle of a single flat plate, held on with C-clamps on
              the frame's vertical bar.
            </p>
            <img
              src={img('/images/neurotech/motor-mount-cad.jpg')}
              alt="CAD render of the original motor mount: a single flat plate with a central bore for the motor, attached via C-clamps"
              className="project-image-single"
              loading="lazy"
              style={{ background: '#fff' }}
            />
            <p style={{ marginTop: 16 }}>
              FEA on that first design showed it was at risk of fracturing under the motor's weight,
              since the single mounting plane concentrated all the load at one attachment point. The
              revised L-bracket instead attaches at two points &mdash; the frame's vertical bar and the
              bar underneath &mdash; distributing the motor's weight across both the vertical and lower
              members of the chassis.
            </p>
            <img
              src={img('/images/neurotech/motor-mount-revised-cad.jpg')}
              alt="CAD render of the revised motor mount: an L-shaped bracket attaching both to the vertical frame member and underneath it"
              className="project-image-single"
              loading="lazy"
              style={{ background: '#fff' }}
            />

            <h4 style={{ marginTop: 24, marginBottom: 8, fontSize: '1rem', color: 'var(--text-primary)' }}>Stress Validation</h4>
            <p>
              The revised bracket was checked with a static FEA study: a von Mises stress plot shows
              where load concentrates around the bracket's cutouts and bolt holes, topping out around
              2.1×10⁴ N/m² against the material's 1.7×10⁸ N/m² yield strength &mdash; roughly four orders
              of magnitude of margin. A companion displacement plot shows resultant deflection on the
              order of 10⁻⁶ mm under the same load, confirming the bracket is effectively rigid at the
              motor's actual operating loads and keeps motor alignment stable during high-torque
              maneuvers.
            </p>
            <div className="project-image-grid">
              <img src={img('/images/neurotech/fea-von-mises.jpg')} alt="SolidWorks von Mises stress plot on the motor mount bracket, showing peak stress of 2.122e4 N/m^2 against a yield strength of 1.724e8 N/m^2" loading="lazy" style={{ background: '#fff' }} />
              <img src={img('/images/neurotech/fea-displacement.jpg')} alt="SolidWorks resultant displacement plot on the motor mount bracket, showing deflection on the order of 1e-6 mm" loading="lazy" style={{ background: '#fff' }} />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div id="drone" className="project-section">
            <h3>Drone Motor Control</h3>
            <p>
              Alongside the wheelchair platform, I implemented motor control for a drone using a
              potentiometer and wireless signals to regulate motor speed. The system precisely maps
              analog input to motor output with a latency of 10 milliseconds, which directly improved
              flight responsiveness and stability by keeping the control loop tight enough to react to
              pilot input in near real time.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div id="learned" className="project-section">
            <h3>What I Learned</h3>
            <p>
              Leading a 5-person team on hardware meant for an assistive device raised the bar on
              reliability in a way purely competitive projects don't: every mounting bracket, wireless
              link, and failsafe has to hold up for a daily user, not just for one competition weekend.
              Running the motor mount through FEA before committing to a redesign, rather than just
              reasoning about it qualitatively, is the same habit that constraint instilled, and it's the
              same reason the safety-override logic was built to be deterministic rather than
              best-effort. It shaped both the modular mounting design and how I structured reviews across
              the team.
            </p>
          </div>
        </ScrollReveal>
      </DetailPage>
    </>
  )
}
