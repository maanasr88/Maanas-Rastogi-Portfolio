import { useState, useEffect, useRef } from 'react'
import { scrollBehavior } from '../motion'

// "On this page" index. A sticky sidebar on desktop; a sticky, horizontally
// scrolling strip under the nav on small screens (see .case-toc in case.css).
export default function StickyTOC({ sections }) {
  const [active, setActive] = useState(sections[0]?.id)
  const listRef = useRef(null)

  // On small screens the list is a horizontal strip: keep the active chip in view
  useEffect(() => {
    const list = listRef.current
    const item = list?.querySelector('.toc-item.active')
    if (!list || !item || list.scrollWidth <= list.clientWidth) return
    const target = item.offsetLeft - (list.clientWidth - item.offsetWidth) / 2
    list.scrollTo({ left: Math.max(0, target), behavior: scrollBehavior() })
  }, [active])

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
    <nav className="toc" aria-label="On this page">
      <p className="toc-title">On this page</p>
      <ol className="toc-list" ref={listRef}>
        {sections.map(({ id, label }, i) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`toc-item${active === id ? ' active' : ''}`}
              aria-current={active === id ? 'location' : undefined}
              onClick={e => {
                // HashRouter owns the URL hash, so scroll manually
                e.preventDefault()
                document.getElementById(id)?.scrollIntoView({ behavior: scrollBehavior() })
                setActive(id)
              }}
            >
              <span className="toc-num">{String(i + 1).padStart(2, '0')}</span>
              {label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}
