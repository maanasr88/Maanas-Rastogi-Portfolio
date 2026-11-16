import img from '../img'

export const experienceProjects = [
  {
    image: img('/images/banerjee-lab/mrc-logo-cover.jpg'),
    status: 'in-progress',
    title: 'Thin Film Growth, Dopant Phase Stabilization & Device Characterization',
    description: 'Banerjee Lab (Nanoelectronics & Novel Devices Lab): Yttrium-doped HfO₂ thin films, Ge substrate integration, and FeFET/MFIS device characterization.',
    to: '/experience/banerjee-lab',
  },
  {
    image: img('/images/ironlattice/hank-cover.svg'),
    status: 'nda',
    title: 'Gator Memory™ FeFET Device Validation',
    description: 'Ironlattice: simulation pipelines modeling 1-FeFET superlattice device physics and array-level SPICE behavior for a 40 nm node roadmap.',
    to: '/experience/ironlattice',
  },
  {
    image: img('/images/quantum-computing/chiplet-render-cover.jpg'),
    title: 'Surface-Code Simulation for Modular Quantum Processors',
    description: 'UT Austin: 100,000+ Monte Carlo simulations quantifying logical error scaling across chiplet-based quantum processors.',
    to: '/experience/quantum-computing',
  },
]

export const teamProjects = [
  {
    image: img('/images/baja-racing/car-course-action.jpg'),
    imageStyle: { objectPosition: 'center 55%' },
    status: 'in-progress',
    title: 'Longhorn Baja Racing — Electronics Lead',
    description: 'Vehicle electrical integration for the Baja SAE race car: power distribution, dashboard hardware, and a virtual driving coach interfacing 7+ onboard sensors.',
    to: '/team/baja-racing',
  },
  {
    image: img('/images/neurotech/wheelchair-render-cover.jpg'),
    title: 'Longhorn Neurotech — Manufacturing/Design Lead',
    description: 'Directed a team of 5 engineers on the LHNT electric wheelchair: joystick, EEG, and ultrasonic sensor fusion on an ESP32, plus the motor/drivetrain and electronics mounting.',
    to: '/team/neurotech',
  },
  {
    image: img('/images/robotics-society/robots-faceoff.jpg'),
    imageStyle: { objectFit: 'cover' },
    title: 'UT Robotics & Automation Society — Electrical Engineer',
    description: "Power electronics for Stampede's RoboMaster robots: redesigned the supercapacitor bank and control board, boosting output from 12W to 90W and cutting charge time 75%.",
    to: '/team/robotics-society',
  },
]

export const personalProjects = [
  {
    image: img('/images/vlsi-risc-v/die-layout-cover.svg'),
    status: 'in-progress',
    title: '32-bit Custom RISC-V Processor',
    description: 'Full-stack ASIC development flow from architectural spec to physical layout: Verilog RTL in Vivado, hardened to silicon via OpenROAD.',
    to: '/projects/vlsi-risc-v',
  },
  {
    image: img('/images/helmet-hud/helmet-hud-render-cover.jpg'),
    status: 'hiatus',
    title: 'Motorcycle Helmet HUD',
    description: 'Raspberry Pi Android Auto head unit with a prism-based optical display, sub-100 ms latency, and 4+ hours of embedded runtime.',
    to: '/projects/helmet-hud',
  },
  {
    image: img('/images/gamble-on-the-go/handheld-cover.svg'),
    title: 'Gamble on the Go',
    description: 'Portable bilingual blackjack game on the TI LP-MSPM0G3507 board — 1st place out of 15+ projects in the class competition.',
    to: '/projects/gamble-on-the-go',
  },
]
