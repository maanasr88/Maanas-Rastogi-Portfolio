const CONFIG = {
  'in-progress': { badgeClass: 'in-progress-badge', dotClass: 'in-progress-dot', label: 'In Progress' },
  'coming-soon': { badgeClass: 'coming-soon-badge', dotClass: 'coming-soon-dot', label: 'Coming Soon' },
  'hiatus':      { badgeClass: 'hiatus-badge',      dotClass: 'hiatus-dot',      label: 'On Hiatus' },
  'nda':         { badgeClass: 'nda-badge',         label: 'NDA' },
}

function LockIcon() {
  return (
    <svg className="nda-lock-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4.5" y="11" width="15" height="10" rx="1.5" />
      <path d="M7.5 11V7a4.5 4.5 0 0 1 9 0v4" />
    </svg>
  )
}

export default function StatusBadge({ status }) {
  const cfg = CONFIG[status]
  if (!cfg) return null
  return (
    <span className={cfg.badgeClass}>
      {cfg.dotClass ? <span className={cfg.dotClass} /> : <LockIcon />}
      {cfg.label}
    </span>
  )
}
