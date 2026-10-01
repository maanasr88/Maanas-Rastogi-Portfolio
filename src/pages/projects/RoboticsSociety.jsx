import DetailPage from '../../components/DetailPage'
import ScrollReveal from '../../components/ScrollReveal'
import StatRow from '../../components/StatRow'
import { IconPower } from '../../components/Icons'
import img from '../../img'

const specs = [
  { value: '12W → 90W', label: 'Power Output' },
  { value: '20%',        label: 'Runtime Increase' },
  { value: '75%',        label: 'Faster Charging' },
  { value: '6A',         label: 'Charging Current' },
]

export default function RoboticsSociety() {
  return (
    <DetailPage
      backTo="/team"
      backLabel="Team Projects"
      tag="UT Austin Robotics & Automation Society · Aug 2024 – Aug 2025"
      title="Power Electronics for Competition Robotics"
      icon={<IconPower />}
      software={['Power Electronics', 'Supercapacitor Banks', 'Current-Limiting Circuits']}
      roles={['Electrical Engineer']}
    >
      <ScrollReveal>
        <div className="project-section">
          <h3>Power Delivery Redesign</h3>
          <p>
            As an Electrical Engineer with the UT Austin Robotics &amp; Automation Society, I improved
            the power delivery and efficiency of a robotics system, boosting total output from 12W to
            90W. I redesigned the supercapacitor bank and implemented a new current-limiting circuit,
            which together increased the system's runtime by 20% without sacrificing the safety margins
            the original design relied on.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <StatRow stats={specs} />
      </ScrollReveal>

      <ScrollReveal>
        <div className="project-section">
          <h3>Control Board Redesign</h3>
          <p>
            I also redesigned the main control board to improve accessibility and maintenance for the
            rest of the team. Increasing the charging current to 6A through a high-efficiency charging
            circuit cut system charging times by 75%, meaning far less downtime between test and
            competition runs.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="project-section">
          <h3>Board Design</h3>
          <p>
            Both boards were laid out at 80 mm × 80 mm to fit the robot's existing mounting footprint.
            The chassis board brings the supercapacitor bank's output into separate +24V rails feeding
            the chassis, shooter, and gimbal subsystems, each behind its own current-limiting protection
            so a fault or stall on one subsystem can't pull down the others. The turret board carries
            that same rail structure up through a slip ring to the rotating turret assembly, along with
            CAN bus, UART, and SWD headers for telemetry and in-system debugging.
          </p>
          <div className="project-image-grid">
            <img
              src={img('/images/robotics-society/chassis-board-supercap-v1.webp')}
              alt="Chassis board with supercapacitor bank, V1 — PCB layout with +24V rails to chassis, shooter, and gimbal"
              loading="lazy"
            />
            <img
              src={img('/images/robotics-society/turret-board.webp')}
              alt="Turret board PCB layout — slip ring interface, CAN/UART/SWD headers, and +24V distribution to chassis, shooter, and gimbal"
              loading="lazy"
            />
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="project-section">
          <h3>What I Learned</h3>
          <p>
            Power electronics work on a robotics team is unforgiving about trade-offs: pushing output
            higher without careful current limiting risks damaging the rest of the system, and this
            project was where I learned to treat those constraints as design inputs from the start
            rather than something to patch in afterward.
          </p>
        </div>
      </ScrollReveal>
    </DetailPage>
  )
}
