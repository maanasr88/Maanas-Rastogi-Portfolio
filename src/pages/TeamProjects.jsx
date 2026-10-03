import ProjectCard from '../components/ProjectCard'
import ScrollReveal from '../components/ScrollReveal'
import { IconRacing, IconDroneArm, IconPower } from '../components/Icons'
import img from '../img'

const projects = [
  {
    icon: <IconRacing />,
    image: img('/images/baja-racing/car-render.webp'),
    imageStyle: { objectPosition: 'center 65%' },
    status: 'in-progress',
    title: 'Longhorn Baja Racing — Electronics Lead',
    description: 'Vehicle electrical integration for the Baja SAE race car: power distribution, dashboard hardware, and a virtual driving coach interfacing 7+ onboard sensors.',
    to: '/team/baja-racing',
  },
  {
    icon: <IconDroneArm />,
    image: img('/images/neurotech/wheelchair-render-cover.jpg'),
    title: 'Longhorn Neurotech — Manufacturing/Design Lead',
    description: 'Directed a team of 5 engineers on the LHNT electric wheelchair: joystick, EEG, and ultrasonic sensor fusion on an ESP32, plus the motor/drivetrain and electronics mounting.',
    to: '/team/neurotech',
  },
  {
    icon: <IconPower />,
    image: img('/images/robotics-society/robots-faceoff.jpg'),
    imageStyle: { objectFit: 'cover' },
    title: 'UT Robotics & Automation Society — Electrical Engineer',
    description: "Power electronics for Stampede's RoboMaster robots: redesigned the supercapacitor bank and control board, boosting output from 12W to 90W and cutting charge time 75%.",
    to: '/team/robotics-society',
  },
]

export default function TeamProjects() {
  return (
    <div className="page-wrapper">
      <section className="projects-section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header">
              <h2><span className="section-title-accent">Team Projects</span></h2>
              <div className="section-header-bar" />
            </div>
            <p style={{ color: 'var(--text-secondary)', marginBottom: 40, maxWidth: 600, fontSize: '0.95rem' }}>
              Collaborative engineering work across student organizations: Longhorn Baja Racing, Longhorn
              Neurotech, and the UT Austin Robotics &amp; Automation Society.
            </p>
          </ScrollReveal>

          <div className="project-grid">
            {projects.map((p, i) => (
              <ProjectCard key={p.title} {...p} tag="Team" delay={(i % 3) + 1} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
