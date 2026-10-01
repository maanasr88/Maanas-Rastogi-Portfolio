export default function StatRow({ stats }) {
  return (
    <div className="stat-row">
      {stats.map(({ value, label }) => (
        <div key={label} className="stat-card">
          <div className="stat-value">{value}</div>
          <div className="stat-label">{label}</div>
        </div>
      ))}
    </div>
  )
}
