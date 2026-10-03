const CONFIG = {
  'in-progress': { badgeClass: 'in-progress-badge', dotClass: 'in-progress-dot', label: 'In Progress' },
  'coming-soon': { badgeClass: 'coming-soon-badge', dotClass: 'coming-soon-dot', label: 'Coming Soon' },
  'hiatus':      { badgeClass: 'hiatus-badge',      dotClass: 'hiatus-dot',      label: 'On Hiatus' },
}

export default function StatusBadge({ status }) {
  const cfg = CONFIG[status]
  if (!cfg) return null
  return (
    <span className={cfg.badgeClass}>
      <span className={cfg.dotClass} />
      {cfg.label}
    </span>
  )
}
