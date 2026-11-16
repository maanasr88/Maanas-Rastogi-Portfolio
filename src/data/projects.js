import img from '../img'

// Single source of truth for every project on the site. The homepage, the Work
// index, the Skills evidence links and each case study's "next project" link all
// read from here. Facts and figures are taken from the case-study pages themselves.

export const DOMAINS = [
  { id: 'silicon',  label: 'Silicon & Devices',   blurb: 'Ferroelectric memory, thin films, RTL to GDSII.' },
  { id: 'pcb',      label: 'PCB & Embedded',      blurb: 'Boards, sensors, firmware and power electronics.' },
  { id: 'robotics', label: 'Robotics & Vehicles', blurb: 'Race-car electronics, competition robots, mobility.' },
  { id: 'quantum',  label: 'Quantum',             blurb: 'Surface-code error correction at scale.' },
]

export const CONTEXTS = {
  industry: 'Industry',
  research: 'Research',
  team: 'Team',
  personal: 'Personal',
}

export const projects = [
  {
    id: 'baja',
    code: 'LBR',
    to: '/team/baja-racing',
    title: 'Baja SAE vehicle electronics',
    org: 'Longhorn Baja Racing',
    role: 'Electronics Lead',
    period: 'Aug 2025 – Present',
    start: '2025-08',
    context: 'team',
    domains: ['pcb', 'robotics'],
    status: 'in-progress',
    featured: true,
    image: img('/images/baja-racing/car-course-action.jpg'),
    imagePosition: 'center 55%',
    summary: 'Power distribution, dashboard hardware and a virtual driving coach fed by 7+ onboard sensors, for an off-road competition car.',
    metrics: [
      { value: '7+', label: 'Onboard sensors' },
      { value: '<50 ms', label: 'Control latency' },
      { value: '10+', label: 'Members led' },
    ],
    tools: ['Altium Designer', 'KiCad', 'PCB Design', 'Circuit Theory', 'Power Distribution', 'ESP32', 'CAN Bus', 'LTspice', 'Sensor Integration', 'Kalman Filtering', 'LoRa'],
  },
  {
    id: 'risc-v',
    code: 'RV32',
    to: '/projects/vlsi-risc-v',
    title: '32-bit custom RISC-V processor',
    org: 'Personal project',
    role: 'Designer',
    period: 'Ongoing',
    context: 'personal',
    domains: ['silicon'],
    status: 'in-progress',
    featured: true,
    image: img('/images/vlsi-risc-v/die-layout-cover.svg'),
    screen: true,
    summary: 'A full ASIC flow from architectural spec to physical layout: Verilog RTL in Vivado, hardened to silicon with OpenROAD.',
    metrics: [
      { value: 'RTL→GDS', label: 'Full ASIC flow' },
      { value: '50 MHz', label: 'Target clock' },
      { value: '15%', label: 'Area overhead cut' },
    ],
    tools: ['Verilog', 'Vivado', 'OpenROAD', 'RISC-V Architecture', 'Timing Closure', 'Physical Design', 'FPGA Synthesis'],
  },
  {
    id: 'robotics-society',
    code: 'RAS',
    to: '/team/robotics-society',
    title: 'Supercapacitor power system for competition robots',
    org: 'UT Robotics & Automation Society',
    role: 'Electrical Engineer',
    period: 'Aug 2024 – Aug 2025',
    start: '2024-08',
    context: 'team',
    domains: ['pcb', 'robotics'],
    featured: true,
    image: img('/images/robotics-society/robots-faceoff.jpg'),
    summary: "Redesigned the supercapacitor bank and control board for Stampede's RoboMaster robots.",
    metrics: [
      { value: '12→90 W', label: 'Power output' },
      { value: '−75%', label: 'Charge time' },
      { value: '+20%', label: 'Runtime' },
    ],
    tools: ['Power Electronics', 'KiCad', 'PCB Design', 'Supercapacitor Banks', 'Current-Limiting Circuits'],
  },
  {
    id: 'quantum',
    code: 'QEC',
    to: '/experience/quantum-computing',
    title: 'Surface-code simulation for modular quantum processors',
    org: 'UT Austin',
    role: 'Undergraduate Researcher',
    period: 'Oct – Dec 2025',
    start: '2025-10',
    context: 'research',
    domains: ['quantum'],
    featured: true,
    image: img('/images/quantum-computing/chiplet-render-cover.jpg'),
    summary: 'Quantified how logical error rates scale when a surface code is split across chiplet-based quantum processors.',
    metrics: [
      { value: '100k+', label: 'Monte Carlo runs' },
      { value: '1%', label: 'Inter-chip noise modeled' },
    ],
    tools: ['Stim', 'Sinter', 'PyMatching', 'Python', 'Surface-Code QEC', 'Stabilizer Circuits', 'Monte Carlo Simulation', 'Fault-Tolerance Analysis'],
  },
  {
    id: 'ironlattice',
    code: 'IL',
    to: '/experience/ironlattice',
    title: 'Gator Memory™ FeFET device validation',
    org: 'Ironlattice',
    role: 'Validation/Design Intern',
    period: 'Aug 2026 – Present',
    start: '2026-08',
    context: 'industry',
    domains: ['silicon'],
    status: 'nda',
    image: img('/images/ironlattice/wafer-dark-blue.webp'),
    summary: 'Simulation pipelines modeling 1-FeFET superlattice device physics and array-level SPICE behavior for a 40 nm node roadmap.',
    metrics: [
      { value: '40 nm', label: 'Node roadmap' },
      { value: '10 ns', label: 'Switching target' },
      { value: '30+', label: 'Analog states' },
    ],
    tools: ['COMSOL', 'QuantumATK', 'Synopsys TCAD', 'SPICE Modeling', 'Device Physics'],
  },
  {
    id: 'banerjee-lab',
    code: 'NNDL',
    to: '/experience/banerjee-lab',
    title: 'Thin-film growth and FeFET characterization',
    org: 'Banerjee Lab, UT Austin',
    role: 'Undergraduate Researcher',
    period: 'Oct 2026 – Present',
    start: '2026-10',
    context: 'research',
    domains: ['silicon'],
    status: 'in-progress',
    image: img('/images/banerjee-lab/wafer-characterization-cover.jpg'),
    summary: 'Yttrium-doped HfO₂ thin films on germanium, and FeFET / MFIS device characterization in the Microelectronics Research Center cleanroom.',
    metrics: [
      { value: 'Y:HfO₂', label: 'Ferroelectric film' },
      { value: '10–20 h', label: 'Cleanroom per week' },
    ],
    tools: ['Atomic Layer Deposition', 'X-ray Diffraction', 'Probe-Station Characterization', 'Cleanroom Protocol', 'Wafer Handling'],
  },
  {
    id: 'neurotech',
    code: 'LHNT',
    to: '/team/neurotech',
    title: 'Sensor-fused electric wheelchair',
    org: 'Longhorn Neurotech',
    role: 'Manufacturing/Design Lead',
    period: 'Aug 2024 – Aug 2026',
    start: '2024-08',
    context: 'team',
    domains: ['pcb', 'robotics'],
    image: img('/images/neurotech/wheelchair-render-cover.jpg'),
    summary: 'Led 5 engineers fusing joystick, EEG and ultrasonic sensing on an ESP32, plus the motor, drivetrain and electronics mounting.',
    metrics: [
      { value: '20 ms', label: 'Wireless control latency' },
      { value: '5', label: 'Engineers directed' },
      { value: '−30%', label: 'Integration time' },
    ],
    tools: ['ESP32', 'Embedded C', 'SolidWorks', 'Mechanical/Electrical Integration', 'Team Leadership'],
  },
  {
    id: 'helmet-hud',
    code: 'HUD',
    to: '/projects/helmet-hud',
    title: 'Motorcycle helmet heads-up display',
    org: 'Personal project',
    role: 'Designer & Builder',
    period: 'On hiatus',
    context: 'personal',
    domains: ['pcb'],
    status: 'hiatus',
    image: img('/images/helmet-hud/helmet-hud-render-cover.jpg'),
    summary: 'A Raspberry Pi Android Auto head unit with a prism-based optical display and 4+ hours of runtime.',
    metrics: [
      { value: '<100 ms', label: 'Input latency' },
      { value: '20°', label: 'Field of view' },
      { value: '60 Hz', label: 'Ride data refresh' },
    ],
    tools: ['Raspberry Pi', 'Python', 'Optical/Prism Design', 'Power Electronics'],
  },
  {
    id: 'gamble-on-the-go',
    code: 'MSPM0',
    to: '/projects/gamble-on-the-go',
    title: 'Gamble on the Go: handheld blackjack',
    org: 'Personal project',
    role: 'Designer & Builder',
    period: 'Class competition',
    context: 'personal',
    domains: ['pcb'],
    image: img('/images/gamble-on-the-go/handheld-cover.svg'),
    screen: true,
    summary: 'A portable bilingual blackjack game on the TI LP-MSPM0G3507 board, first place of 15+ projects in the class competition.',
    metrics: [
      { value: '1st', label: 'Of 15+ projects' },
      { value: 'EN / ES', label: 'Bilingual UI' },
    ],
    tools: ['TI MSPM0', 'Embedded C', 'ADC'],
  },
]

export const featuredProjects = projects.filter(p => p.featured)

// Experience timeline: roles with dates, newest first
export const experience = [...projects]
  .filter(p => p.start)
  .sort((a, b) => b.start.localeCompare(a.start))

export function projectsInDomain(domainId) {
  return domainId ? projects.filter(p => p.domains.includes(domainId)) : projects
}

export function findProjectByPath(pathname) {
  return projects.find(p => p.to === pathname)
}

export function nextProject(pathname) {
  const i = projects.findIndex(p => p.to === pathname)
  if (i === -1) return null
  return projects[(i + 1) % projects.length]
}
