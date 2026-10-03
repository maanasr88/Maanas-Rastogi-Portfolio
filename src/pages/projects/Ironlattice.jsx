import DetailPage from '../../components/DetailPage'
import ScrollReveal from '../../components/ScrollReveal'
import StatRow from '../../components/StatRow'
import img from '../../img'

const toc = [
  { id: 'overview',     label: 'Overview' },
  { id: 'about',        label: 'About Ironlattice' },
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
    <DetailPage
        toc={toc}
        backTo="/experience"
        backLabel="Industry & Research Experience"
        tag="Ironlattice · Internship, Aug 2026 – Present"
        status="in-progress"
        title="Gator Memory™ FeFET Device Validation & Simulation"
        heroImage={img('/images/ironlattice/wafer-dark-blue.webp')}
        heroStyle={{ filter: 'brightness(0.4) saturate(1.2)', transform: 'scale(1.15)' }}
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
          <div id="about" className="project-section">
            <h3>About Ironlattice</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16, flexWrap: 'wrap' }}>
              <img
                src={img('/images/ironlattice/ironlattice-icon-color.png')}
                alt="Ironlattice logo mark"
                style={{ width: 48, height: 48 }}
                loading="lazy"
              />
              <img
                src={img('/images/ironlattice/ironlattice-logo-white.png')}
                alt="Ironlattice"
                style={{ height: 22, width: 'auto' }}
                loading="lazy"
              />
            </div>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.1rem', color: 'var(--accent-light)', fontWeight: 600, marginBottom: 4 }}>
              "More Memory. Less Power.™"
            </p>
            <p>
              Ironlattice is a Houston-based, Rice University-born startup building{' '}
              <strong>Gator Memory™</strong>, a nonvolatile memory architecture designed as a drop-in
              replacement for DRAM and HBM. Every computer built so far has had to choose: DRAM is fast
              but forgets everything the instant power drops, while NAND remembers but is far too slow
              to sit in the memory hierarchy DRAM occupies. Gator Memory is built to close that gap,
              fast enough to serve AI and high-performance-computing workloads, persistent like NAND,
              and manufacturable in standard CMOS fabs without exotic materials, new tooling, or
              rare-earth and conflict minerals.
            </p>
            <p>
              The company's device-validation work (what my internship sits inside of) is the layer
              that turns that pitch into something fabricable: proving, cell by cell and then
              array by array, that the physics actually holds up against the 40 nm roadmap below.
            </p>
            <img
              src={img('/images/ironlattice/wafer-dark-blue.webp')}
              alt="Ironlattice Gator Memory wafer"
              className="project-image-single"
              style={{ background: '#fff', maxHeight: 360 }}
              loading="lazy"
            />
          </div>
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
            <img
              src={img('/images/ironlattice/gate-stack-cover.svg')}
              alt="Illustrative diagram of a 1-FeFET superlattice gate-stack array"
              className="project-image-single"
              loading="lazy"
            />
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
  )
}
