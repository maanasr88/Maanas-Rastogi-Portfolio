import DetailPage from '../../components/DetailPage'
import ScrollReveal from '../../components/ScrollReveal'
import StatRow from '../../components/StatRow'
import StickyTOC from '../../components/StickyTOC'
import CodeBlock from '../../components/CodeBlock'
import { IconQuantum } from '../../components/Icons'
import img from '../../img'

const toc = [
  { id: 'overview',    label: 'Overview' },
  { id: 'background',  label: 'Stim Circuits, Explained' },
  { id: 'methodology', label: 'Methodology' },
  { id: 'source',      label: 'Simulation Pipeline (Source)' },
  { id: 'finding',     label: 'Key Finding' },
  { id: 'takeaways',   label: 'What I Learned' },
]

const specs = [
  { value: '100,000+', label: 'Monte Carlo Simulations' },
  { value: '1%',        label: 'Inter-Chip Noise Modeled' },
  { value: 'Chiplet',   label: 'Modular Architecture' },
]

const SIMULATION_PIPELINE = `import numpy as np
import stim
import sinter

def build_split_lattice_circuit(distance: int, rounds: int, bulk_noise: float, seam_noise: float) -> stim.Circuit:
    # Generate the baseline uniform circuit
    baseline_circuit = stim.Circuit.generated(
        "surface_code:rotated_memory_z",
        distance=distance,
        rounds=rounds,
        after_clifford_depolarization=bulk_noise,
        before_round_data_depolarization=bulk_noise,
        before_measure_flip_probability=bulk_noise,
        after_reset_flip_probability=bulk_noise
    )

    # Extract coordinates to define the chiplet boundary
    coords = baseline_circuit.get_final_qubit_coordinates()
    x_coords = [c[0] for c in coords.values()]
    x_threshold = sum(x_coords) / len(x_coords)

    custom_circuit = stim.Circuit()

    # Unroll loops to iterate instruction by instruction
    for instruction in baseline_circuit.flattened():
        custom_circuit.append(instruction)

        # Identify two-qubit gates
        if instruction.name in ["CX", "CY", "CZ"]:
            targets = instruction.targets_copy()
            boundary_pairs = []

            # Process targets in pairs
            for i in range(0, len(targets), 2):
                t1, t2 = targets[i].value, targets[i+1].value
                x1, x2 = coords[t1][0], coords[t2][0]

                # Check if the gate crosses the midpoint
                if (x1 <= x_threshold and x2 > x_threshold) or (x1 > x_threshold and x2 <= x_threshold):
                    boundary_pairs.extend([t1, t2])

            # Inject localized noise strictly on the interconnects
            if boundary_pairs:
                custom_circuit.append("DEPOLARIZE2", boundary_pairs, seam_noise)

    return custom_circuit

def evaluate_architectures():
    bulk_p = 1e-3
    seam_p = 1e-2 # Exponent-inflated error rate

    # Generate an unmodified baseline for direct comparison
    baseline = stim.Circuit.generated(
        "surface_code:rotated_memory_z",
        distance=3, rounds=3,
        after_clifford_depolarization=bulk_p,
        before_round_data_depolarization=bulk_p,
        before_measure_flip_probability=bulk_p,
        after_reset_flip_probability=bulk_p
    )

    custom = build_split_lattice_circuit(3, 3, bulk_p, seam_p)

    stats = sinter.collect(
        num_workers=4,
        tasks=[
            sinter.Task(circuit=baseline, json_metadata={'type': 'Uniform Baseline'}),
            sinter.Task(circuit=custom, json_metadata={'type': 'Split Chiplet'})
        ],
        decoders=['pymatching'],
        max_shots=100000,
        max_errors=500
    )

    for stat in stats:
        print(f"Architecture: {stat.json_metadata['type']} | Logical Error Rate: {stat.errors / stat.shots}")

if __name__ == '__main__':
    evaluate_architectures()`

export default function QuantumComputing() {
  return (
    <>
      <StickyTOC sections={toc} />
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
          <div id="overview" className="project-section">
            <h3>Overview</h3>
            <p>
              As an undergraduate researcher at UT Austin, I engineered a simulation pipeline to model
              surface-code stabilizer circuits across modular, chiplet-based quantum processors.
              Chiplet architectures split a quantum processor into smaller modules connected by
              inter-chip links rather than fabricating one monolithic chip, which is attractive for
              scaling qubit count but introduces a new noise source at every chip-to-chip connection.
              The pipeline is built on{' '}
              <a href="https://github.com/quantumlib/stim" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-light)' }}>
                Stim
              </a>, Google Quantum AI's high-performance stabilizer circuit simulator.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <StatRow stats={specs} />
        </ScrollReveal>

        <ScrollReveal>
          <div id="background" className="project-section">
            <h3>Stim Circuits, Explained</h3>
            <p>
              Stim represents a quantum program as a circuit of gates, measurements, and resets on a
              grid of qubits, then simulates how errors (randomly injected noise) propagate through it.
              The simplest possible example is a two-qubit Bell pair: a Hadamard gate puts qubit 0 into
              superposition, a controlled-X entangles it with qubit 1, and both qubits are measured.
              Stim can render this directly as a timeline diagram:
            </p>
            <img
              src={img('/images/quantum-computing/bell-pair-circuit.svg')}
              alt="Stim timeline diagram of a two-qubit Bell pair circuit: Hadamard gate, CX entangling gate, two measurements"
              className="project-image-single"
              loading="lazy"
              style={{ background: '#fff', maxWidth: 420, maxHeight: 280, objectFit: 'contain' }}
            />
            <p>
              A surface code (and the simpler repetition code shown below) extends this same idea to
              many qubits: "data" qubits hold the logical information, and interleaved "measurement"
              qubits repeatedly check parity constraints (stabilizers) round after round. Stim renders
              the repeated structure as a timeline of CX gates and measurements across rounds:
            </p>
            <img
              src={img('/images/quantum-computing/repetition-code-timeline.svg')}
              alt="Stim timeline diagram of a distance-9 repetition code circuit across 25 rounds"
              className="project-image-single"
              loading="lazy"
              style={{ background: '#fff' }}
            />
            <p>
              Every measurement round produces a stream of bits. A decoder's job is to look at which
              parity checks ("detectors") fired and infer where the errors most likely occurred. Stim
              compiles the circuit's noise model into a detector error model, which PyMatching turns
              into a graph: each node is a detector, each edge is a possible error, and decoding becomes
              finding the minimum-weight matching across that graph.
            </p>
            <img
              src={img('/images/quantum-computing/repetition-code-matchgraph.svg')}
              alt="PyMatching decoding graph for a repetition code: a ladder of detector nodes with bulk edges (black) and boundary edges (red)"
              className="project-image-single"
              loading="lazy"
              style={{ background: '#fff', maxWidth: 360 }}
            />
            <p>
              A surface code is the 2D generalization of that same repetition-code ladder, with both
              X-type and Z-type stabilizers tiled across a grid of qubits so it can correct both bit-flip
              and phase-flip errors at once. Stim's <code>detslice-svg</code> diagram shows one round of
              that lattice, with the detectors that fire drawn directly alongside the gates that produced
              them:
            </p>
            <img
              src={img('/images/quantum-computing/surface-code-detslice.svg')}
              alt="Stim detector-slice diagram of a surface code round, showing data qubits, measurement qubits, and the detectors each stabilizer check produces"
              className="project-image-single"
              loading="lazy"
              style={{ background: '#fff' }}
            />
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              Diagrams above are generated directly by Stim's own diagramming tools, from the example
              circuits in its official{' '}
              <a href="https://github.com/quantumlib/stim" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-light)' }}>
                getting-started notebook
              </a>.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div id="methodology" className="project-section">
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
          <div id="source" className="project-section">
            <h3>Simulation Pipeline (Source)</h3>
            <p>
              The core of the pipeline generates Stim's built-in rotated surface-code circuit, then
              walks it instruction by instruction to find every two-qubit gate that crosses a chosen
              midline, splitting the lattice into two "chiplets." Those boundary-crossing gates get an
              extra <code>DEPOLARIZE2</code> noise injection at an inflated rate, modeling a noisier
              physical interconnect, while every other gate keeps the uniform bulk noise rate. A second
              function then runs <code>sinter.collect</code> across both the unmodified baseline circuit
              and the split-chiplet version side by side, so the two architectures' logical error rates
              are measured under identical sampling conditions.
            </p>
            <CodeBlock language="Python" title="surface_code_chiplet_sim.py">{SIMULATION_PIPELINE}</CodeBlock>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div id="finding" className="project-section">
            <h3>Key Finding</h3>
            <p>
              The central question was how logical error scales with inter-chip network noise
              specifically: I quantified the impact of a 1% noise rate on the links between chiplets on
              overall fault tolerance. Because every inter-chip link sits inside the same stabilizer
              circuit as the on-chip qubits, noise introduced there doesn't stay localized; it can
              propagate into the syndrome extraction process and degrade the logical error rate of the
              whole modular processor, not just the chiplets directly connected by that link.
            </p>
            <div className="project-image-grid">
              <img
                src={img('/images/quantum-computing/surface-code-error-rate-plot.png')}
                alt="Example plot: surface code logical error rate per round vs. physical error rate, for code distances 3, 5, and 7"
                loading="lazy"
                style={{ background: '#fff' }}
              />
              <img
                src={img('/images/quantum-computing/distance-projection-plot.png')}
                alt="Example plot: projecting the code distance needed to survive a trillion rounds, log-scale logical error rate vs. code distance"
                loading="lazy"
                style={{ background: '#fff' }}
              />
            </div>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              These two plots are reference examples from Stim's own tutorials, showing the shape of
              analysis this kind of pipeline produces (logical error rate vs. physical error rate across
              code distances, and extrapolated distance-vs-reliability scaling), not this project's own
              plotted results.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div id="takeaways" className="project-section">
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
    </>
  )
}
