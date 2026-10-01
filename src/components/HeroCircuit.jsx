// Decorative animated circuit-board backdrop for the hero section.
// Used in place of a project photo carousel, since no project photography exists yet.
const PATHS = [
  'M -50 120 H 260 L 300 160 H 560',
  'M -50 260 H 180 L 220 300 H 460 L 500 260 H 900',
  'M -50 400 H 340 L 380 360 H 700',
  'M 120 -50 V 180 L 160 220 V 500',
  'M 760 -50 V 140 L 720 180 V 460 L 760 500',
]

const NODES = [
  [260, 120], [560, 160], [180, 260], [460, 300], [900, 260],
  [340, 400], [700, 360], [120, 180], [160, 220], [760, 140], [720, 180],
]

export default function HeroCircuit() {
  return (
    <div className="hero-circuit-bg" aria-hidden="true">
      <svg viewBox="0 0 900 540" preserveAspectRatio="xMidYMid slice">
        {PATHS.map((d, i) => (
          <path key={i} id={`circuit-path-${i}`} className="hero-circuit-line" d={d} />
        ))}
        {NODES.map(([x, y], i) => (
          <circle key={i} className="hero-circuit-node" cx={x} cy={y} r="3.2" />
        ))}
        {PATHS.map((_, i) => (
          <circle
            key={`pulse-${i}`}
            className="hero-circuit-pulse"
            r="3.6"
            style={{
              offsetPath: `path('${PATHS[i]}')`,
              animation: `circuit-travel ${6 + i * 1.5}s linear infinite`,
              animationDelay: `${i * 1.1}s`,
            }}
          />
        ))}
      </svg>
    </div>
  )
}
