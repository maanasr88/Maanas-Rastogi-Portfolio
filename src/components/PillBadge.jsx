export default function PillBadge({ label }) {
  return <span className="pill">{label}</span>
}

export function PillGroup({ items }) {
  return (
    <div className="pill-group">
      {items.map((item, i) => <PillBadge key={i} label={item} />)}
    </div>
  )
}
