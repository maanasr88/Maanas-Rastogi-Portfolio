import DetailPage from '../../components/DetailPage'
import ScrollReveal from '../../components/ScrollReveal'
import StatRow from '../../components/StatRow'
import img from '../../img'

const specs = [
  { value: '1st',   label: 'Place of 15+ Projects' },
  { value: '4',     label: 'Tactile Buttons' },
  { value: '10 kΩ', label: 'Slide Potentiometer' },
  { value: 'EN / ES', label: 'Bilingual Interface' },
]

export default function GambleOnTheGo() {
  return (
    <DetailPage
      backTo="/projects"
      backLabel="Personal Projects"
      tag="Personal Project · Embedded Systems"
      title="Gamble on the Go — Portable Blackjack Game"
      heroImage={img('/images/gamble-on-the-go/handheld-cover.svg')}
      software={['TI LP-MSPM0G3507', 'Embedded C', 'ADC / Sound Design']}
      roles={['Designer & Builder']}
    >
      <ScrollReveal>
        <div className="project-section">
          <h3>Overview</h3>
          <p>
            I engineered a portable blackjack game built on the TI LP-MSPM0G3507 microcontroller board,
            designed from the start to be accessible to a wider range of players rather than assuming a
            single language or a mouse-and-keyboard style interface.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <StatRow stats={specs} />
      </ScrollReveal>

      <ScrollReveal>
        <div className="project-section">
          <h3>Accessibility</h3>
          <p>
            The game includes a user-selectable English and Spanish interface, improving accessibility
            and the overall user experience for players more comfortable in either language.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="project-section">
          <h3>Hardware UI</h3>
          <p>
            Rather than a touchscreen, the physical interface uses 4 tactile buttons and a 10 k&Omega;
            slide potentiometer for input, with sound design integrated through the board's ADC to give
            the game audible feedback on deals, hits, and wins.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="project-section">
          <h3>Result</h3>
          <p>
            The project won 1st place out of 15+ projects in the class competition, a strong signal
            that the combination of a genuinely novel hardware interface and a bilingual, accessible
            design stood out against more conventional entries.
          </p>
        </div>
      </ScrollReveal>
    </DetailPage>
  )
}
