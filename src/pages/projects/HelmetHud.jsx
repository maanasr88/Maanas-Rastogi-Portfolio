import DetailPage from '../../components/DetailPage'
import ScrollReveal from '../../components/ScrollReveal'
import StatRow from '../../components/StatRow'
import StickyTOC from '../../components/StickyTOC'
import { IconHelmet } from '../../components/Icons'

const toc = [
  { id: 'overview', label: 'Overview' },
  { id: 'optics',   label: 'Optical Display' },
  { id: 'power',    label: 'Power System' },
  { id: 'takeaways', label: 'What I Learned' },
]

const specs = [
  { value: '<100 ms', label: 'Input Latency' },
  { value: '60 Hz',    label: 'Ride Data Refresh' },
  { value: '20°',      label: 'Field of View' },
  { value: '85%',      label: 'Visor Transparency' },
]

export default function HelmetHud() {
  return (
    <>
      <StickyTOC sections={toc} />
      <DetailPage
        backTo="/projects"
        backLabel="Personal Projects"
        tag="Personal Project · Embedded Systems / Optics"
        title="Motorcycle Helmet Heads-Up Display"
        icon={<IconHelmet />}
        software={['Raspberry Pi', 'Python', 'Optical/Prism Design', 'Power Electronics']}
        roles={['Designer & Builder']}
      >
        <ScrollReveal>
          <div id="overview" className="project-section">
            <h3>Overview</h3>
            <p>
              I built a Raspberry Pi based Android Auto head unit with a 5-inch touchscreen for a
              motorcycle helmet, achieving sub-100 ms input latency so the interface stays responsive
              while riding rather than feeling laggy at the moments it matters most.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <StatRow stats={specs} />
        </ScrollReveal>

        <ScrollReveal>
          <div id="optics" className="project-section">
            <h3>Optical Display</h3>
            <p>
              The core challenge was getting ride data in front of the rider's eye without blocking
              their view of the road. I programmed the controls in Python and designed a prism-based
              optical display that projects 60 Hz ride data across a 20-degree field of view while
              maintaining 85% visor transparency, so the overlay reads as a heads-up display rather than
              an opaque screen sitting in the rider's line of sight.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div id="power" className="project-section">
            <h3>Power System</h3>
            <p>
              Everything runs off a custom-engineered 5V / 3A power network built around a 3000 mAh
              battery, delivering 4+ hours of runtime for the embedded components. The entire power and
              compute package had to fit within a 50 cm³ profile to stay practical for a helmet-mounted
              system, which drove most of the component selection and layout decisions.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div id="takeaways" className="project-section">
            <h3>What I Learned</h3>
            <p>
              This project forced me to treat latency, optics, and power budget as one coupled design
              problem instead of three separate ones. A faster Python control loop doesn't help if the
              optical path introduces its own lag, and neither matters if the battery can't sustain a
              full ride, so every component choice had to be weighed against all three constraints at
              once.
            </p>
          </div>
        </ScrollReveal>
      </DetailPage>
    </>
  )
}
