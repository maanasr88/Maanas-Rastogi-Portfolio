import DetailPage from '../../components/DetailPage'
import ScrollReveal from '../../components/ScrollReveal'
import StatRow from '../../components/StatRow'
import StickyTOC from '../../components/StickyTOC'
import { IconChip } from '../../components/Icons'

const toc = [
  { id: 'overview',     label: 'Overview' },
  { id: 'architecture', label: 'Gator Memory Architecture' },
  { id: 'targets',      label: 'Targets & Trade-offs' },
  { id: 'pipeline',     label: 'Simulation Pipeline' },
  { id: 'takeaways',    label: 'What I’m Learning' },
]

const specs = [
  { value: '40 nm',    label: 'Node Roadmap' },
  { value: '10¹⁰',     label: 'Cycle Endurance Target' },
  { value: '10 ns',    label: 'Switching Speed Target' },
  { value: '30+',      label: 'Analog States' },
]

export default function Ironlattice() {
  return (
    <>
      <StickyTOC sections={toc} />
      <DetailPage
        backTo="/experience"
        backLabel="Industry & Research Experience"
        tag="Ironlattice · Internship, Aug 2026 – Present"
        title="Gator Memory™ FeFET Device Validation & Simulation"
        icon={<IconChip />}
        software={['COMSOL', 'QuantumATK', 'Synopsys TCAD', 'SPICE']}
        roles={['Validation/Design Intern']}
      >
        <ScrollReveal>
          <div id="overview" className="project-section">
            <h3>Overview</h3>
            <p>
              As a Validation/Design Intern at Ironlattice, I develop simulation pipelines that combine
              continuum device physics, atomistic modeling, and industry-standard process/device
              simulation to characterize ferroelectric memory devices. The work spans gate-stack
              parameter extraction, device physics modeling, and array-level SPICE behavior aimed at a
              40 nm process node roadmap.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <StatRow stats={specs} />
        </ScrollReveal>

        <ScrollReveal>
          <div id="architecture" className="project-section">
            <h3>Gator Memory Architecture</h3>
            <p>
              I model Gator Memory™ 1-FeFET superlattice architectures at a 4F² cell footprint, where
              each memory cell is built around a single ferroelectric field-effect transistor layered
              into a superlattice gate stack. These structures store information in a non-volatile
              polarization state rather than a charge, which is what makes the endurance and
              analog-state targets below meaningful in the first place.
            </p>
            <p>
              A core part of this work is analyzing the ferroelectric switching trade-offs inherent to
              the stack: how gate-stack composition and geometry trade endurance against switching
              speed, and how reliably the device can be driven into intermediate polarization states
              rather than just a binary "on/off."
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div id="targets" className="project-section">
            <h3>Targets &amp; Trade-offs</h3>
            <p>
              The device roadmap targets 10¹⁰-cycle endurance, 10 ns switching speed, and 30+
              distinguishable analog states per cell. That last target is aimed squarely at
              compute-in-memory applications, where a memory array doubles as an analog compute
              substrate: the more cleanly separable analog states a cell can hold, the more precision
              an in-memory multiply-accumulate operation can carry without needing to round down to a
              coarser representation.
            </p>
            <p>
              Hitting all three targets at once is the hard part. Pushing for faster switching tends to
              stress the ferroelectric layer in ways that erode endurance, and packing in more analog
              states means the write and read circuitry has to resolve smaller differences between
              adjacent polarization levels. Most of the simulation work is about quantifying exactly
              where those trade-offs sit for a given gate-stack design before committing to fabrication.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div id="pipeline" className="project-section">
            <h3>Simulation Pipeline</h3>
            <p>
              The pipeline connects three tools at different physical scales. COMSOL handles
              continuum-level device physics and thermal/electrostatic behavior across the gate stack.
              QuantumATK runs atomistic simulations where quantum-mechanical effects at the
              materials/interface level matter most. Synopsys TCAD ties the process and device
              simulation together, feeding extracted device parameters into array-level SPICE models
              so cell-level behavior can be projected up to full-array performance before any silicon
              is built.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div id="takeaways" className="project-section">
            <h3>What I&rsquo;m Learning</h3>
            <p>
              This internship is my first exposure to running a true multi-scale simulation flow, where
              a single design decision at the gate-stack level has to be traced all the way through to
              its effect on array-level SPICE behavior. It has sharpened how I think about trade-off
              analysis: in emerging memory technologies, "better" almost always means better along one
              axis at the cost of another, and the job is to find where a design sits on that curve
              before committing resources to it.
            </p>
          </div>
        </ScrollReveal>
      </DetailPage>
    </>
  )
}
