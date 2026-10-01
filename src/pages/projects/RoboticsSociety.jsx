import DetailPage from '../../components/DetailPage'
import ScrollReveal from '../../components/ScrollReveal'
import StatRow from '../../components/StatRow'
import { IconPower } from '../../components/Icons'

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
