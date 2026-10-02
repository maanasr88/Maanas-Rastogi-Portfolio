import DetailPage from '../../components/DetailPage'
import ScrollReveal from '../../components/ScrollReveal'
import StatRow from '../../components/StatRow'
import DataTable from '../../components/DataTable'
import StickyTOC from '../../components/StickyTOC'
import img from '../../img'

const toc = [
  { id: 'overview',   label: 'Overview' },
  { id: 'components', label: 'Mounting & Enclosures' },
  { id: 'motor',      label: 'Motor & Drivetrain' },
  { id: 'drone',      label: 'Drone Motor Control' },
  { id: 'learned',    label: 'What I Learned' },
]

const specs = [
  { value: '5',      label: 'Engineers Directed' },
  { value: '250 lb',  label: 'Wheelchair Platform' },
  { value: '30%',     label: 'Faster Integration' },
  { value: '10 ms',   label: 'Motor Control Latency' },
]

export default function Neurotech() {
  return (
    <>
      <StickyTOC sections={toc} />
      <DetailPage
        backTo="/team"
        backLabel="Team Projects"
        tag="Longhorn Neurotech · Aug 2024 – Aug 2026"
        title="Modular Electronics Mounting for an Assistive Wheelchair Platform"
        heroImage={img('/images/neurotech/electronics-tray.jpg')}
        heroStyle={{ backgroundPosition: 'center 55%' }}
        software={['Mechanical/Electrical Integration', 'SolidWorks FEA', 'Motor Control', 'Team Leadership']}
        roles={['Manufacturing/Design Lead']}
      >
        <ScrollReveal>
          <div id="overview" className="project-section">
            <h3>Overview</h3>
            <p>
              As Manufacturing/Design Lead at Longhorn Neurotech, I directed a team of 5 engineers
              developing modular electronics mounting systems for a 250-lb electric-powered wheelchair.
              The scope covered everything from the joystick housing and arm-mounted controls down to
              the drivetrain: a laser-cut electronics tray, 3D-printed enclosures, and a redesigned motor
              mount validated with FEA before going on the chair. The modular approach meant hardware
              could be swapped or upgraded without re-engineering the whole platform, which cut hardware
              integration time by 30%.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <StatRow stats={specs} />
        </ScrollReveal>

        <ScrollReveal>
          <div id="components" className="project-section">
            <h3>Mounting &amp; Enclosures</h3>
            <p>
              Each control component on the chair got its own enclosure, designed to mount modularly to
              the wheelchair's existing frame rather than requiring custom brackets for every part.
            </p>

            <h4 style={{ marginTop: 20, marginBottom: 8, fontSize: '1rem', color: 'var(--text-primary)' }}>Joystick Box</h4>
            <p>A two-piece housing for the drive joystick, with an internal post that locates and secures the joystick module inside the shell.</p>
            <div className="project-image-grid">
              <img src={img('/images/neurotech/joystick-box-1.jpg')} alt="CAD render of the joystick box lower shell with mounting flanges" loading="lazy" style={{ background: '#fff' }} />
              <img src={img('/images/neurotech/joystick-box-2.jpg')} alt="CAD render of the joystick box upper cover" loading="lazy" style={{ background: '#fff' }} />
            </div>

            <h4 style={{ marginTop: 24, marginBottom: 8, fontSize: '1rem', color: 'var(--text-primary)' }}>Arm Extension &amp; Wheelchair Clasps</h4>
            <p>
              An L-shaped arm-extension bracket carries the joystick box out to a usable position for
              the rider, while a separate clasp part clamps onto the wheelchair's tubular frame to
              anchor it without drilling into the chair itself.
            </p>
            <div className="project-image-grid">
              <img src={img('/images/neurotech/arm-extension.jpg')} alt="CAD render of the L-shaped arm-extension mounting bracket" loading="lazy" style={{ background: '#fff' }} />
              <img src={img('/images/neurotech/wheelchair-clasp.jpg')} alt="CAD render of the wheelchair frame clasp" loading="lazy" style={{ background: '#fff' }} />
            </div>

            <h4 style={{ marginTop: 24, marginBottom: 8, fontSize: '1rem', color: 'var(--text-primary)' }}>Electronics Tray</h4>
            <p>
              A laser-cut plywood tray holds the chair's electronic components, with a 3D-printed clasp
              system (shown in orange/pink) that clamps the tray to the wheelchair frame.
            </p>
            <img
              src={img('/images/neurotech/electronics-tray.jpg')}
              alt="Laser-cut plywood electronics tray with a 3D-printed orange and pink clasp clamping it to the wheelchair frame"
              className="project-image-single"
              loading="lazy"
            />
            <ul style={{ color: 'var(--text-secondary)', paddingLeft: 20, lineHeight: 1.9, fontSize: '0.95rem', marginTop: 12 }}>
              <li>Laser-cut prototype of the tray to hold electronic components.</li>
              <li>Designed a clasp system that clamps the tray to the wheelchair.</li>
              <li>Next steps: CNC the tray to increase weight capacity, and add rubber inserts to reduce rotation.</li>
            </ul>

            <h4 style={{ marginTop: 24, marginBottom: 8, fontSize: '1rem', color: 'var(--text-primary)' }}>ESP Case Design</h4>
            <p>A two-piece snap-fit enclosure for the ESP32 control board, keeping it protected while still accessible for wiring.</p>
            <div className="project-image-grid">
              <img src={img('/images/neurotech/esp-case-1.jpg')} alt="CAD render of the ESP32 case's two shells, showing internal channel detail" loading="lazy" style={{ background: '#fff' }} />
              <img src={img('/images/neurotech/esp-case-2.jpg')} alt="CAD render of the ESP32 case closed and open" loading="lazy" style={{ background: '#fff' }} />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div id="motor" className="project-section">
            <h3>Motor &amp; Drivetrain Integration</h3>
            <p>
              The drivetrain is built around a MY1016Z-W DC gear motor, selected and specified against
              the chair's target speed and torque requirements:
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
              The mount was originally designed to hold the motor in the middle, attached with C-clamps
              on the vertical side of the wheelchair's frame bars.
            </p>
            <img
              src={img('/images/neurotech/motor-mount-cad.jpg')}
              alt="CAD render of the original motor mount: a single flat plate with a central bore for the motor, attached via C-clamps"
              className="project-image-single"
              loading="lazy"
              style={{ background: '#fff' }}
            />
            <p style={{ marginTop: 16 }}>
              Upon testing with FEA, the original mount was found to be at risk of fracturing under the
              motor's weight, since the design put all of that load through a single attachment plane.
              The revised design instead uses two areas of attachment for the motor &mdash; the vertical
              side and below the wheelchair &mdash; distributing the motor's weight more evenly across
              the bracket.
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
              motor's actual operating loads.
            </p>
            <div className="project-image-grid">
              <img src={img('/images/neurotech/fea-von-mises.jpg')} alt="SolidWorks von Mises stress plot on the motor mount bracket, showing peak stress of 2.122e4 N/m^2 against a yield strength of 1.724e8 N/m^2" loading="lazy" style={{ background: '#fff' }} />
              <img src={img('/images/neurotech/fea-displacement.jpg')} alt="SolidWorks resultant displacement plot on the motor mount bracket, showing deflection on the order of 1e-6 mm" loading="lazy" style={{ background: '#fff' }} />
            </div>
            <img
              src={img('/images/neurotech/motor-mounted-reference.jpg')}
              alt="Reference photo of dual hub motors mounted beneath a similar wheelchair platform"
              className="project-image-single"
              loading="lazy"
              style={{ marginTop: 16, maxHeight: 320, objectFit: 'contain' }}
            />
            <p style={{ marginTop: 8, fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Reference image illustrating how dual hub motors integrate beneath a wheelchair platform
              of this type.
            </p>
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
              reliability in a way purely competitive projects don't: every mounting bracket and
              connector has to hold up for a daily user, not just for one competition weekend. Running
              the motor mount through FEA before committing to a redesign, rather than just reasoning
              about it qualitatively, is the same habit that constraint instilled. It shaped both the
              modular mounting design and how I structured reviews across the team.
            </p>
          </div>
        </ScrollReveal>
      </DetailPage>
    </>
  )
}
