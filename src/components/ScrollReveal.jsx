// Formerly faded every block in as it scrolled into view. Content now appears
// immediately (scroll fades slow reading and hide content from some visitors), so
// this is a plain wrapper kept for the many project pages that still use it.
export default function ScrollReveal({ children, className = '', style }) {
  return <div className={className || undefined} style={style}>{children}</div>
}
