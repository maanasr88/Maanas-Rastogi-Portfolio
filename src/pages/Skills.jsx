import { Link } from 'react-router-dom'
import RadarChart from '../components/RadarChart'
import { projects } from '../data/projects'

// Toolbox: every skill, with the projects that show it in use. `match` lists the
// tool names (from data/projects.js) that count as evidence; it defaults to the
// skill's own name.

// At a glance: my own self-assessment across the areas I use most, 0 to 100
const RADARS = [
  {
    title: 'VLSI & hardware',
    axes: [
      { label: 'Verilog', value: 82 },
      { label: 'RISC-V design', value: 75 },
      { label: 'OpenROAD', value: 65 },
      { label: 'Vivado / FPGA', value: 78 },
      { label: 'PCB design', value: 85 },
      { label: 'Timing closure', value: 68 },
    ],
  },
  {
    title: 'Embedded & programming',
    axes: [
      { label: 'Python', value: 85 },
      { label: 'C / C++', value: 80 },
      { label: 'Assembly', value: 65 },
      { label: 'Java', value: 72 },
      { label: 'Microcontrollers', value: 83 },
      { label: 'Sensor interfacing', value: 78 },
    ],
  },
  {
    title: 'Simulation & research',
    axes: [
      { label: 'COMSOL', value: 70 },
      { label: 'QuantumATK', value: 65 },
      { label: 'Synopsys TCAD', value: 68 },
      { label: 'Stim / PyMatching', value: 75 },
      { label: 'Monte Carlo', value: 80 },
      { label: 'SPICE', value: 72 },
    ],
  },
]

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
      <header className="wrap page-head" data-enter>
        <p className="eyebrow">Skills</p>
        <h1 className="page-title">Skills, with <span className="serif">the work</span> behind them</h1>
        <p className="page-lede">
          Where I&rsquo;m strongest at a glance, then the full toolbox, with every skill linked to
          the projects where I used it.
        </p>
      </header>

      <section className="wrap skills-glance" aria-labelledby="glance-title">
        <h2 id="glance-title" className="sr-only">At a glance</h2>
        <div className="radar-grid">
          {RADARS.map(r => <RadarChart key={r.title} title={r.title} axes={r.axes} />)}
        </div>
        <p className="radar-note mono">Self-assessed, 0&ndash;100. Hover a point to see its value.</p>
      </section>

      <section className="section" aria-labelledby="toolbox-title">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow">Toolbox</p>
              <h2 id="toolbox-title" className="section-title">Everything <span className="serif">I</span> work with</h2>
              <p className="section-lede">
                Highlighted skills link straight to a project that uses them.
              </p>
            </div>
          </div>

          <div className="toolbox-grid">
            {CATEGORIES.map((cat, ci) => {
              const used = new Set(cat.skills.flatMap(sk => evidenceFor(sk).map(p => p.id)))
              return (
                <section key={cat.label} className="toolbox-card" aria-labelledby={`skill-cat-${ci}`}>
                  <div className="toolbox-card-head">
                    <span className="mono toolbox-index">{String(ci + 1).padStart(2, '0')}</span>
                    <h3 id={`skill-cat-${ci}`} className="toolbox-title">{cat.label}</h3>
                    <span className="mono toolbox-count">{used.size} project{used.size === 1 ? '' : 's'}</span>
                  </div>
                  <ul className="toolbox-chips" role="list">
                    {cat.skills.map(skill => {
                      const evidence = evidenceFor(skill)
                      return (
                        <li key={skill.name}>
                          {evidence.length > 0 ? (
                            <Link
                              to={evidence[0].to}
                              className="toolbox-chip has-evidence"
                              title={`Used in: ${evidence.map(p => p.title).join(', ')}`}
                            >
                              <span className="toolbox-dot" aria-hidden="true" />
                              {skill.name}
                              {evidence.length > 1 && <span className="mono toolbox-n">&times;{evidence.length}</span>}
                            </Link>
                          ) : (
                            <span className="toolbox-chip">{skill.name}</span>
                          )}
                        </li>
                      )
                    })}
                  </ul>
                </section>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
