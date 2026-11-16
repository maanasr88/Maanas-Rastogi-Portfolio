const cellStyle = {
  padding: '12px 16px',
  borderBottom: '1px solid var(--card-border)',
  lineHeight: 1.55,
  verticalAlign: 'top',
}

export default function DataTable({ columns, rows, note }) {
  return (
    <>
      <div style={{ overflowX: 'auto', border: '1px solid var(--card-border)', borderRadius: 'var(--radius-sm)', background: 'var(--card-bg)' }}>
        <table style={{ width: '100%', minWidth: 480, borderCollapse: 'collapse', fontSize: '0.9rem' }}>
          <thead>
            <tr>
              {columns.map((c, i) => (
                <th
                  key={c}
                  style={{
                    ...cellStyle,
                    textAlign: i === 0 ? 'left' : 'left',
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: 'var(--accent-light)',
                  }}
                >
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr key={ri}>
                {row.cells.map((cell, ci) => (
                  <td
                    key={ci}
                    style={{
                      ...cellStyle,
                      color: ci === 0 || row.strong ? 'var(--text-primary)' : 'var(--text-secondary)',
                      fontWeight: row.strong || (ci === 0 && row.boldFirst) ? 600 : 400,
                      borderBottom: ri === rows.length - 1 ? 'none' : '1px solid var(--card-border)',
                      background: row.highlight ? 'rgba(70,130,180,0.08)' : 'transparent',
                    }}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note && (
        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: 8 }}>{note}</p>
      )}
    </>
  )
}
