import DetailPage from '../../components/DetailPage'
import ScrollReveal from '../../components/ScrollReveal'
import StatRow from '../../components/StatRow'
import DataTable from '../../components/DataTable'
import img from '../../img'

// Company figures below come from IronLattice's public Gator Memory spec sheet (Nov 2026).
// My own internship work stays at the level the NDA allows.

const toc = [
  { id: 'overview',     label: 'Overview' },
  { id: 'about',        label: 'About Ironlattice' },
  { id: 'device',       label: 'The Device' },
  { id: 'specs',        label: 'Gator vs. Today' },
  { id: 'scaling',      label: 'Scaling Up' },
  { id: 'roadmap',      label: 'Roadmap' },
  { id: 'pipeline',     label: 'Simulation Pipeline' },
  { id: 'dell',         label: 'Dell AI Memory Talk' },
  { id: 'takeaways',    label: 'What I’m Learning' },
]

const specs = [
  { value: '10 ns',   label: 'Read & Write' },
  { value: '10¹⁰',    label: 'Cycles, No Fatigue' },
  { value: '30+',     label: 'Stable Analog States' },
  { value: '125 °C',  label: 'Retention Held' },
]

export default function Ironlattice() {
  return (
    <DetailPage
        toc={toc}
        backTo="/work"
        backLabel="All work"
        tag="Ironlattice · Internship, Aug 2026 – Present"
        status={['in-progress', 'nda']}
        title="Gator Memory™ FeFET Device Validation & Simulation"
        heroImage={img('/images/ironlattice/wafer-cutout.webp')}
        heroFit="contain"
        software={['COMSOL', 'QuantumATK', 'Synopsys TCAD', 'SPICE']}
        roles={['Validation/Design Intern']}
      >
        <ScrollReveal>
          <div id="overview" className="project-section">
            <h3>Overview</h3>
            <p>
              As a Validation/Design Intern at Ironlattice, I build simulation pipelines that combine
              continuum device physics, atomistic modeling and process/device simulation to
              characterize ferroelectric memory devices. The work covers gate-stack parameter
              extraction, device physics modeling and array-level SPICE behavior for Gator Memory, the
              company&rsquo;s capacitor-free ferroelectric memory.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <StatRow stats={specs} />
        </ScrollReveal>

        <ScrollReveal>
          <div id="about" className="project-section">
            <h3>About Ironlattice</h3>
            {/* The wordmark is white-only, so it sits on a dark plate */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 16, marginBottom: 16, flexWrap: 'wrap', padding: '12px 18px', background: 'var(--screen)', borderRadius: 'var(--radius)', border: '1px solid var(--rule)' }}>
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
            <p>
              Ironlattice is a fabless, DRAM-class memory company spun out of Rice University. Its
              product, <strong>Gator Memory™</strong>, removes the capacitor from the memory cell and
              stores each bit in a ferroelectric superlattice instead: DRAM speed with flash-style
              persistence, built on the standard CMOS logic lines that fabs already run.
            </p>
            <p>
              The pitch rests on four tests for the next memory: low cost (no capacitor, no new fab,
              no refresh), high performance (one tier that replaces both DRAM and NAND), resilience
              (data held hot or cold without wearing out) and manufacturability (no new
              infrastructure, now in manufacturing at NY CREATES). Modeled at the module against DDR5,
              Gator uses about 42% of the memory-plus-cooling power, because nothing has to be
              refreshed and nothing leaks.
            </p>
            <figure className="project-image-single-fig">
              <img
                src={img('/images/ironlattice/chart-power.svg')}
                alt="Bar chart: memory plus cooling power indexed against DDR5, conventional 100 percent versus Gator Memory 42 percent"
                className="project-image-single chart-plate"
                loading="lazy"
              />
              <figcaption>Modeled at the module against DDR5 and its cooling.</figcaption>
            </figure>
            <figure className="hank-figure">
              <img src={img('/images/ironlattice/hank-sprite.svg')} alt="Hank, the Ironlattice alligator mascot" loading="lazy" />
              <figcaption>Meet Hank, the Gator behind Gator Memory.</figcaption>
            </figure>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div id="device" className="project-section">
            <h3>The Device</h3>
            <p>
              Each cell is a single ferroelectric FeFET with no capacitor (1T&nbsp;&middot;&nbsp;0C)
              at a 4F² footprint. The bit is a polarization direction rather than stored charge, so
              nothing leaks, holding a bit takes no power, and reading it doesn&rsquo;t erase it. The
              same film can also build a ferroelectric capacitor (FeCAP) and a ferroelectric tunnel
              junction (FTJ), and all three are tested.
            </p>
            <p>
              The superlattice is the invention. Ferroelectric films usually wear out somewhere between
              10⁵ and 10⁸ cycles as oxygen vacancies migrate and the two polarization states drift
              together. Gator&rsquo;s gate stack is built from ultra-thin layers, confirmed by TEM and
              XRD, and every interface blocks that migration. Because there&rsquo;s no stored charge to
              disturb, the usual particle-strike upset mechanism doesn&rsquo;t apply either, which
              matters for defense and space use.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div id="specs" className="project-section">
            <h3>Gator vs. Today</h3>
            <p>
              Published figures for Gator Memory against what ferroelectric memory and DRAM typically
              achieve today.
            </p>
            <DataTable
              columns={['Metric', 'Gator Memory', 'Typical today']}
              rows={[
                { cells: ['Endurance', '10¹⁰ cycles, no fatigue (path to 10¹³)', 'Ferroelectric: 10⁶–10⁸; NAND: 10³–10⁵'], strong: true },
                { cells: ['Write switching', '10 ns', 'Ferroelectric: 50 ns – 1 µs'] },
                { cells: ['Energy per bit written', '< 0.1 pJ', '≈ 1,000× more for a DRAM row access'] },
                { cells: ['ON/OFF current ratio', '> 10⁵', 'Wide margin for the read circuit'] },
                { cells: ['Analog states', '30+ stable states', 'Ferroelectric: about 2 bits, noisy'] },
                { cells: ['Retention', '10+ years, power off', 'Ferroelectric: degrades after cycling'] },
                { cells: ['Hot retention', 'Held through 125 °C bakes', 'DRAM refresh doubles past 85 °C'] },
              ]}
              note="Source: IronLattice Gator Memory spec sheet, November 2026. Retention measured after 10⁶ cycles; 10¹⁰-cycle endurance cycled at 125 °C."
            />
            <figure className="project-image-single-fig">
              <img
                src={img('/images/ironlattice/chart-endurance-compare.svg')}
                alt="Range chart of endurance before fatigue: NAND flash 10^3 to 10^5 cycles, ferroelectric memory today 10^6 to 10^8, Gator Memory 10^10 with a path to 10^13"
                className="project-image-single chart-plate"
                loading="lazy"
              />
              <figcaption>Endurance against today’s nonvolatile memories.</figcaption>
            </figure>
            <div className="project-image-grid chart-grid">
            <figure className="chart-fig">
              <img
                src={img('/images/ironlattice/chart-endurance-current.svg')}
                alt="Line chart: ON and OFF currents stay more than five orders of magnitude apart from 1 to 10^10 cycles at 125 °C"
                className="project-image-single chart-plate"
                loading="lazy"
              />
              <figcaption>ON/OFF current out to 10¹⁰ cycles.</figcaption>
            </figure>
            <figure className="chart-fig">
              <img
                src={img('/images/ironlattice/chart-retention.svg')}
                alt="Line chart: ON and OFF currents hold flat through 10^4 second bakes at 85 °C and 125 °C after 10^6 cycles"
                className="project-image-single chart-plate"
                loading="lazy"
              />
              <figcaption>Retention through 85 °C and 125 °C bakes.</figcaption>
            </figure>
            </div>
            <p className="chart-note mono">Charts redrawn from the IronLattice spec sheet, November 2026. Current axes are in arbitrary units, as published.</p>
            <p>
              The 30+ analog states are what make compute-in-memory interesting: the more cleanly
              separable levels a cell can hold, the more precision an in-memory multiply-accumulate can
              carry without rounding down. Holding speed, endurance and analog precision at the same
              time is the hard part, and it&rsquo;s exactly where device-level simulation earns its keep.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div id="scaling" className="project-section">
            <h3>Scaling Up</h3>
            <p>
              Without a capacitor the cell shrinks, and the design is meant to stack up to 32 memory
              tiers on one die above the CMOS logic. Stacking is still proposed rather than
              demonstrated; the capacity model below assumes a 4F² cell, a 100 mm² die and 75% final
              yield.
            </p>
            <DataTable
              columns={['Per good die', '28 nm', '20 nm', '14 nm']}
              rows={[
                { cells: ['1 tier', '2.19 GB', '4.30 GB', '8.78 GB'], strong: true },
                { cells: ['4 tiers', '8.75 GB', '17.2 GB', '35.1 GB'] },
                { cells: ['32 tiers (long term)', '70.0 GB', '138 GB', '281 GB'] },
              ]}
              note="For scale, the largest DRAM die today is 4 GB. From 20 nm, every single-tier Gator die passes it."
            />
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div id="roadmap" className="project-section">
            <h3>Roadmap</h3>
            <p>
              Three years from license to mass production. I joined in August 2026, as the company was
              heading into fab validation.
            </p>
            <DataTable
              columns={['When', 'Milestone']}
              rows={[
                { cells: ['May 2026', 'Rice University license'] },
                { cells: ['Sep 2026', 'Fab validation'], strong: true },
                { cells: ['Jan 2027', 'FeCAP on 300 mm wafers'] },
                { cells: ['Feb 2027', '40 nm arrays'] },
                { cells: ['Mar 2027', '28 nm FeFET'] },
                { cells: ['Late 2027', '14 nm samples'] },
                { cells: ['2028', 'First production'] },
                { cells: ['2029', 'Mass production'] },
              ]}
            />
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div id="pipeline" className="project-section">
            <h3>Simulation Pipeline</h3>
            <p>
              The pipeline connects tools at three physical scales. COMSOL handles continuum device
              physics and thermal and electrostatic behavior across the gate stack. QuantumATK runs
              atomistic simulations where quantum-mechanical effects at material interfaces matter
              most. Synopsys TCAD ties process and device simulation together, and the extracted device
              parameters feed array-level SPICE models, so cell behavior can be projected up to the
              full array before any silicon is built.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div id="dell" className="project-section">
            <h3>Dell AI Memory Talk</h3>
            <p>
              In November 2026 the Ironlattice team visited Dell Technologies in Round Rock, where our
              CEO, Tawfik Jarjour, spoke at the Dell AI &amp; Robotics Club Guest Speaker Series on
              &ldquo;The Future of AI Memory&rdquo;: as AI moves into robotics and on-device
              applications, memory, power and data movement matter more than ever.
            </p>
            <div className="project-image-grid">
              <figure>
                <img
                  src={img('/images/ironlattice/dell-event/team-portrait.jpg')}
                  alt="Maanas Rastogi with Ironlattice CEO Tawfik Jarjour, Lola Foord and fellow intern Diana Ruiz in front of the Dell Technologies sign"
                  loading="lazy"
                  style={{ objectFit: 'cover', height: 420, background: 'var(--panel-2)' }}
                />
              </figure>
              <figure>
                <img
                  src={img('/images/ironlattice/dell-event/group.jpg')}
                  alt="Ironlattice team and Dell AI and Robotics Club members after the talk"
                  loading="lazy"
                  style={{ objectFit: 'cover', height: 420, background: 'var(--panel-2)' }}
                />
              </figure>
            </div>
            <p className="project-image-caption mono" style={{ marginTop: 10, fontSize: 'var(--text-xs)', color: 'var(--ink-subtle)' }}>
              With CEO Tawfik Jarjour, Lola Foord and fellow intern Diana Ruiz at Dell Technologies, and
              with the club after the talk.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div id="takeaways" className="project-section">
            <h3>What I&rsquo;m Learning</h3>
            <p>
              This internship is my first real multi-scale simulation flow, where one decision at the
              gate-stack level has to be traced all the way to its effect on array-level SPICE
              behavior. It has sharpened how I think about trade-offs: in emerging memory,
              &ldquo;better&rdquo; almost always means better on one axis at the cost of another, and
              the job is to find where a design sits on that curve before committing a fab run to it.
            </p>
          </div>
        </ScrollReveal>
      </DetailPage>
  )
}
