import DetailPage from '../../components/DetailPage'
import ScrollReveal from '../../components/ScrollReveal'
import StatRow from '../../components/StatRow'
import { IconQuantum } from '../../components/Icons'

const specs = [
  { value: '100,000+', label: 'Monte Carlo Simulations' },
  { value: '1%',        label: 'Inter-Chip Noise Modeled' },
  { value: 'Chiplet',   label: 'Modular Architecture' },
]

export default function QuantumComputing() {
  return (
    <DetailPage
      backTo="/experience"
      backLabel="Industry & Research Experience"
      tag="UT Austin · Undergraduate Research, Oct – Dec 2025"
      title="Surface-Code Simulation for Modular Quantum Processors"
      icon={<IconQuantum />}
      software={['Stim', 'Sinter', 'PyMatching', 'Python']}
      roles={['Quantum Computing Undergraduate Researcher']}
    >
      <ScrollReveal>
        <div className="project-section">
          <h3>Overview</h3>
          <p>
            As an undergraduate researcher at UT Austin, I engineered a simulation pipeline to model
            surface-code stabilizer circuits across modular, chiplet-based quantum processors.
            Chiplet architectures split a quantum processor into smaller modules connected by
            inter-chip links rather than fabricating one monolithic chip, which is attractive for
            scaling qubit count but introduces a new noise source at every chip-to-chip connection.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <StatRow stats={specs} />
      </ScrollReveal>

      <ScrollReveal>
        <div className="project-section">
          <h3>Methodology</h3>
          <p>
            The pipeline was built on Stim for fast stabilizer-circuit simulation, PyMatching for
            minimum-weight perfect-matching decoding of the resulting syndrome data, and sinter to
            automate sampling across many configurations and error rates. Together these tools let me
            run large sweeps without hand-rolling the decoding or sampling logic from scratch.
          </p>
          <p>
            I executed over 100,000 Monte Carlo simulations to build up statistically meaningful
            estimates of logical error rate at each tested configuration, since a surface code's
            logical error rate only becomes a reliable number once enough random error patterns have
            been sampled and decoded.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="project-section">
          <h3>Key Finding</h3>
          <p>
            The central question was how logical error scales with inter-chip network noise
            specifically: I quantified the impact of a 1% noise rate on the links between chiplets on
            overall fault tolerance. Because every inter-chip link sits inside the same stabilizer
            circuit as the on-chip qubits, noise introduced there doesn't stay localized; it can
            propagate into the syndrome extraction process and degrade the logical error rate of the
            whole modular processor, not just the chiplets directly connected by that link.
          </p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="project-section">
          <h3>What I Learned</h3>
          <p>
            This project was my introduction to quantum error correction research as an engineering
            discipline rather than just a theoretical one: real decoders, real sampling statistics, and
            real trade-offs between simulation scale and runtime. It also gave me a much clearer view
            of why modular, chiplet-based quantum computing is being pursued at all, and what has to be
            true about inter-chip connectivity for it to actually pay off at scale.
          </p>
        </div>
      </ScrollReveal>
    </DetailPage>
  )
}
