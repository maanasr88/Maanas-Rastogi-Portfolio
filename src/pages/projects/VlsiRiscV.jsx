import DetailPage from '../../components/DetailPage'
import ScrollReveal from '../../components/ScrollReveal'
import StatRow from '../../components/StatRow'
import StickyTOC from '../../components/StickyTOC'
import { IconChip } from '../../components/Icons'

const toc = [
  { id: 'overview',  label: 'Overview' },
  { id: 'rtl',       label: 'RTL & Simulation' },
  { id: 'physical',  label: 'Physical Design' },
  { id: 'takeaways', label: 'What I Learned' },
]

const specs = [
  { value: '32-bit', label: 'Custom ISA' },
  { value: '50 MHz', label: 'Target Clock Frequency' },
  { value: '15%',    label: 'Area Overhead Reduced' },
  { value: 'RTL→GDS', label: 'Full ASIC Flow' },
]

export default function VlsiRiscV() {
  return (
    <>
      <StickyTOC sections={toc} />
      <DetailPage
        backTo="/projects"
        backLabel="Personal Projects"
        tag="Personal Project · VLSI / Digital Design"
        title="32-bit Custom RISC-V Processor — RTL to Physical Layout"
        icon={<IconChip />}
        software={['Verilog', 'Vivado', 'OpenROAD']}
        roles={['Designer']}
      >
        <ScrollReveal>
          <div id="overview" className="project-section">
            <h3>Overview</h3>
            <p>
              I'm designing a 32-bit custom RISC-V processor to drive a full-stack ASIC development
              flow, from architectural specification all the way through to physical layout. Rather
              than stopping at a working simulation, the goal is to carry a single design through every
              stage a real chip would go through before fabrication.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <StatRow stats={specs} />
        </ScrollReveal>

        <ScrollReveal>
          <div id="rtl" className="project-section">
            <h3>RTL &amp; Simulation</h3>
            <p>
              The processor's datapath and control logic are written in Verilog, with HDL programming,
              simulation, and synthesis all carried out inside the Vivado environment. Working at the
              RTL level means every architectural decision, from instruction decode to the pipeline's
              control signals, has to be verified in simulation before it ever reaches the physical
              design stage.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div id="physical" className="project-section">
            <h3>Physical Design</h3>
            <p>
              Once the RTL is verified, I harden the digital design into physical silicon using
              OpenROAD, an open-source RTL-to-GDSII toolchain. The physical design stage is built around
              two explicit optimization constraints: hitting a target clock frequency of 50 MHz and
              reducing area overhead by 15% relative to an unoptimized baseline. Those two goals pull in
              different directions, a tighter floorplan can hurt timing closure, so a meaningful part of
              the work is iterating on placement and routing constraints to satisfy both at once.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div id="takeaways" className="project-section">
            <h3>What I Learned</h3>
            <p>
              Carrying a processor design through the full RTL-to-GDS flow, rather than stopping at
              simulation, has been the clearest way to understand how architectural choices actually
              cash out in silicon. Decisions that look free in Verilog, like adding another pipeline
              stage or a wider register file, show up immediately as area and timing pressure once the
              design hits physical implementation in OpenROAD.
            </p>
          </div>
        </ScrollReveal>
      </DetailPage>
    </>
  )
}
