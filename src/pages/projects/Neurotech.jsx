import DetailPage from '../../components/DetailPage'
import ScrollReveal from '../../components/ScrollReveal'
import StatRow from '../../components/StatRow'
import { IconDroneArm } from '../../components/Icons'

const specs = [
  { value: '5',      label: 'Engineers Directed' },
  { value: '250 lb',  label: 'Wheelchair Platform' },
  { value: '30%',     label: 'Faster Integration' },
  { value: '10 ms',   label: 'Motor Control Latency' },
]

export default function Neurotech() {
  return (
    <DetailPage
      backTo="/team"
      backLabel="Team Projects"
      tag="Longhorn Neurotech · Aug 2024 – Aug 2026"
      title="Modular Electronics Mounting for an Assistive Wheelchair Platform"
      icon={<IconDroneArm />}
      software={['Mechanical/Electrical Integration', 'Motor Control', 'Team Leadership']}
      roles={['Manufacturing/Design Lead']}
    >
      <ScrollReveal>
        <div className="project-section">
          <h3>Overview</h3>
          <p>
            As Manufacturing/Design Lead at Longhorn Neurotech, I directed a team of 5 engineers
            developing modular electronics mounting systems for a 250-lb electric-powered wheelchair.
            The modular approach meant hardware could be swapped or upgraded without re-engineering the
            whole platform, which cut hardware integration time by 30%.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <StatRow stats={specs} />
      </ScrollReveal>

      <ScrollReveal>
        <div className="project-section">
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
        <div className="project-section">
          <h3>What I Learned</h3>
          <p>
            Leading a 5-person team on hardware meant for an assistive device raised the bar on
            reliability in a way purely competitive projects don't: every mounting bracket and
            connector has to hold up for a daily user, not just for one competition weekend. That
            constraint shaped both the modular mounting design and how I structured reviews across the
            team.
          </p>
        </div>
      </ScrollReveal>
    </DetailPage>
  )
}
