const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function IconChip(props) {
  return (
    <svg {...base} {...props}>
      <rect x="6" y="6" width="12" height="12" rx="1.5" />
      <rect x="9" y="9" width="6" height="6" rx="0.5" />
      <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
    </svg>
  )
}

export function IconQuantum(props) {
  return (
    <svg {...base} {...props}>
      <ellipse cx="12" cy="12" rx="9" ry="3.6" />
      <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function IconRacing(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3 13l2-5a2 2 0 0 1 2-1.3h10A2 2 0 0 1 19 8l2 5" />
      <path d="M2 13h20v3a1 1 0 0 1-1 1h-2v-2H5v2H3a1 1 0 0 1-1-1v-3z" />
      <circle cx="7" cy="17.5" r="1.6" />
      <circle cx="17" cy="17.5" r="1.6" />
      <path d="M7 10h10" />
    </svg>
  )
}

export function IconCircuitBoard(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8" cy="8" r="1.4" />
      <circle cx="16" cy="8" r="1.4" />
      <circle cx="8" cy="16" r="1.4" />
      <path d="M9.4 8H14a2 2 0 0 1 2 2v4.6M8 9.4V16h4.6" />
    </svg>
  )
}

export function IconDroneArm(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="2.4" />
      <path d="M12 9.6V5M12 14.4V19M9.6 12H5M14.4 12H19" />
      <circle cx="5" cy="5" r="1.6" />
      <circle cx="19" cy="5" r="1.6" />
      <circle cx="5" cy="19" r="1.6" />
      <circle cx="19" cy="19" r="1.6" />
      <path d="M6.1 6.1l3.5 3.5M17.9 6.1l-3.5 3.5M6.1 17.9l3.5-3.5M17.9 17.9l-3.5-3.5" />
    </svg>
  )
}

export function IconHelmet(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 14a8 8 0 0 1 16 0v3a2 2 0 0 1-2 2h-1v-4h-3v4H10v-4H7v4H6a2 2 0 0 1-2-2v-3z" />
      <path d="M8 11h3M16 9.5l2 1" />
    </svg>
  )
}

export function IconCards(props) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="5" width="10" height="14" rx="1.5" transform="rotate(-8 9 12)" />
      <rect x="10" y="5" width="10" height="14" rx="1.5" transform="rotate(8 15 12)" />
    </svg>
  )
}

export function IconPower(props) {
  return (
    <svg {...base} {...props}>
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" />
    </svg>
  )
}

export function IconFuel(props) {
  return (
    <svg {...base} {...props}>
      <path d="M5 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16" />
      <path d="M3 21h12" />
      <path d="M15 8h1.5a1.5 1.5 0 0 1 1.5 1.5V12l2 2v4a1.5 1.5 0 0 1-3 0" />
      <path d="M7 7h6" />
    </svg>
  )
}

export function IconThermometer(props) {
  return (
    <svg {...base} {...props}>
      <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
    </svg>
  )
}

export function IconSatellite(props) {
  return (
    <svg {...base} {...props}>
      <path d="M13 7 9 3 5 7l4 4" />
      <path d="M17 11l4 4-4 4-4-4" />
      <path d="M8 12l4 4" />
      <path d="M2 22l5.5-5.5" />
      <path d="M14 5l1.5-1.5a2.12 2.12 0 0 1 3 3L17 8" />
    </svg>
  )
}

export function IconRadio(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 2v6" />
      <path d="M8.5 5.5a5 5 0 0 0 0 7M15.5 5.5a5 5 0 0 1 0 7" />
      <path d="M5 8.5a9 9 0 0 0 0 12M19 8.5a9 9 0 0 1 0 12" />
      <circle cx="12" cy="20" r="1.4" />
    </svg>
  )
}

export function IconPedal(props) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="4" width="16" height="7" rx="1.5" />
      <path d="M8 11v9M16 11v9" />
      <path d="M7 14h2M15 14h2M7 17h2M15 17h2" />
    </svg>
  )
}

export function IconSuspension(props) {
  return (
    <svg {...base} {...props}>
      <path d="M7 3v4M7 17v4" />
      <path d="M7 7l3 1-3 1 3 1-3 1 3 1-3 1 3 1-3 1" />
      <circle cx="17" cy="6" r="2.5" />
      <path d="M17 8.5V21" />
    </svg>
  )
}

export function IconTeam(props) {
  return (
    <svg {...base} {...props}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
