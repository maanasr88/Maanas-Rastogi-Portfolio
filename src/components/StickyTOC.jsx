import { useState, useEffect } from 'react'
import { scrollBehavior } from '../motion'

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
    <nav className="sidebar-card sticky-toc">
      <h4>On This Page</h4>
      {sections.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          className={`sticky-toc-item${active === id ? ' active' : ''}`}
          aria-current={active === id ? 'location' : undefined}
          onClick={e => {
            e.preventDefault()
            const target = document.getElementById(id)
            target?.scrollIntoView({ behavior: scrollBehavior() })
            setActive(id)
          }}
        >
          {label}
        </a>
      ))}
    </nav>
  )
}
