import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

// Skills are listed with the projects that show them in use, instead of
// self-rated percentages. `match` lists the tool names (from data/projects.js)
// that count as evidence for a skill; it defaults to the skill's own name.
const CATEGORIES = [
  {
    label: 'VLSI & digital design',
    skills: [
      { name: 'Verilog' },
      { name: 'RISC-V architecture', match: ['RISC-V Architecture'] },
      { name: 'Vivado' },
      { name: 'FPGA synthesis', match: ['FPGA Synthesis'] },
      { name: 'OpenROAD' },
      { name: 'Timing closure', match: ['Timing Closure'] },
      { name: 'Physical design', match: ['Physical Design'] },
    ],
  },
  {
    label: 'Circuit & PCB design',
    skills: [
      { name: 'Altium Designer' },
      { name: 'KiCad' },
      { name: 'PCB layout', match: ['PCB Design'] },
      { name: 'Power electronics', match: ['Power Electronics', 'Supercapacitor Banks', 'Current-Limiting Circuits'] },
      { name: 'Power distribution', match: ['Power Distribution'] },
      { name: 'Circuit simulation (LTspice)', match: ['LTspice'] },
      { name: 'Circuit theory', match: ['Circuit Theory'] },
      { name: 'Analog circuit design' },
      { name: 'Soldering' },
    ],
  },
  {
    label: 'Embedded systems',
    skills: [
      { name: 'ESP32' },
      { name: 'Embedded C', match: ['Embedded C'] },
      { name: 'TI MSPM0', match: ['TI MSPM0'] },
      { name: 'Raspberry Pi' },
      { name: 'CAN bus', match: ['CAN Bus'] },
      { name: 'Sensor integration', match: ['Sensor Integration', 'ADC'] },
      { name: 'Kalman filtering', match: ['Kalman Filtering'] },
      { name: 'LoRa telemetry', match: ['LoRa'] },
    ],
  },
  {
    label: 'Devices, simulation & fabrication',
    skills: [
      { name: 'COMSOL' },
      { name: 'QuantumATK' },
      { name: 'Synopsys TCAD' },
      { name: 'SPICE modeling', match: ['SPICE Modeling'] },
      { name: 'Device physics', match: ['Device Physics'] },
      { name: 'Atomic layer deposition', match: ['Atomic Layer Deposition'] },
      { name: 'X-ray diffraction', match: ['X-ray Diffraction'] },
      { name: 'Probe-station characterization', match: ['Probe-Station Characterization'] },
      { name: 'Cleanroom protocol (Class 100/1000)', match: ['Cleanroom Protocol'] },
      { name: 'Wafer handling', match: ['Wafer Handling'] },
    ],
  },
  {
    label: 'Quantum computing',
    skills: [
      { name: 'Stim' },
      { name: 'Sinter' },
      { name: 'PyMatching' },
      { name: 'Surface-code QEC', match: ['Surface-Code QEC'] },
      { name: 'Stabilizer circuits', match: ['Stabilizer Circuits'] },
      { name: 'Monte Carlo simulation', match: ['Monte Carlo Simulation'] },
      { name: 'Fault-tolerance analysis', match: ['Fault-Tolerance Analysis'] },
    ],
  },
  {
    label: 'Programming',
    skills: [
      { name: 'Python' },
      { name: 'C / C++', match: ['Embedded C'] },
      { name: 'Verilog' },
      { name: 'Java' },
      { name: 'Assembly' },
      { name: 'Git' },
    ],
  },
  {
    label: 'Mechanical & integration',
    skills: [
      { name: 'SolidWorks' },
      { name: 'Mechanical/electrical integration', match: ['Mechanical/Electrical Integration'] },
      { name: 'Optical / prism design', match: ['Optical/Prism Design'] },
    ],
  },
  {
    label: 'Leadership',
    skills: [
      { name: 'Team leadership (10+ members)', match: ['Team Leadership'], also: ['baja'] },
      { name: 'Technical workshops', also: ['baja'] },
      { name: 'Design reviews', also: ['baja'] },
    ],
  },
]

function evidenceFor(skill) {
  const names = (skill.match || [skill.name]).map(s => s.toLowerCase())
  const found = projects.filter(p =>
    (skill.also || []).includes(p.id) ||
    (p.tools || []).some(t => names.includes(t.toLowerCase()))
  )
  return found
}

export default function Skills() {
  return (
    <div className="page">
      <header className="wrap page-head">
        <p className="eyebrow">Skills</p>
        <h1 className="page-title">Skills, with the work behind them</h1>
        <p className="page-lede">
          Each skill links to the projects where I used it, so you can see the work instead of a
          self-rating.
        </p>
      </header>

      <div className="wrap skills" style={{ paddingBottom: 'var(--space-9)' }}>
        {CATEGORIES.map((cat, ci) => (
          <section key={cat.label} className="skill-group" aria-labelledby={`skill-cat-${ci}`}>
            <div className="skill-group-head">
              <span className="mono skill-group-index">{String(ci + 1).padStart(2, '0')}</span>
              <h2 id={`skill-cat-${ci}`} className="skill-group-title">{cat.label}</h2>
            </div>
            <ul className="skill-rows" role="list">
              {cat.skills.map(skill => {
                const evidence = evidenceFor(skill)
                return (
                  <li key={skill.name} className="skill-row">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-evidence">
                      {evidence.length > 0 ? (
                        evidence.map(p => (
                          <Link key={p.id} to={p.to} className="skill-chip" title={p.title}>
                            <span className="mono">{p.code}</span>
                            <span className="skill-chip-label">{p.title}</span>
                          </Link>
                        ))
                      ) : (
                        <span className="skill-none">No write-up yet</span>
                      )}
                    </span>
                  </li>
                )
              })}
            </ul>
          </section>
        ))}
      </div>
    </div>
  )
}
