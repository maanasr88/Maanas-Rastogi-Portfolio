export default function DataTable({ columns, rows, note }) {
  return (
    <>
      <div className="data-table-wrap" tabIndex={0} role="region" aria-label={columns.join(', ')}>
        <table className="data-table">
          <thead>
            <tr>
              {columns.map(c => <th key={c} scope="col">{c}</th>)}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr key={ri} className={row.highlight ? 'is-highlight' : undefined}>
                {row.cells.map((cell, ci) => (
                  <td
                    key={ci}
                    className={[
                      ci === 0 || row.strong ? 'is-primary' : '',
                      row.strong || (ci === 0 && row.boldFirst) ? 'is-strong' : '',
                    ].filter(Boolean).join(' ') || undefined}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {note && <p className="data-table-note">{note}</p>}
    </>
  )
}
