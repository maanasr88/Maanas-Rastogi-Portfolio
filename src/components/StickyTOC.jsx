import { useState, useEffect } from 'react'

export default function StickyTOC({ sections }) {
  const [active, setActive] = useState(sections[0]?.id)

  useEffect(() => {
    const observers = sections.map(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { rootMargin: '-30% 0px -60% 0px' }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(obs => obs?.disconnect())
  }, [sections])

  return (
    <nav className="sticky-toc">
      <div className="sticky-toc-label">On this page</div>
      {sections.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          className={`sticky-toc-item${active === id ? ' active' : ''}`}
          onClick={e => {
            e.preventDefault()
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          {label}
        </a>
      ))}
    </nav>
  )
}
