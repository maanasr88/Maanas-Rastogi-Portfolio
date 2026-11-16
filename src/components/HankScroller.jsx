import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import img from '../img'
import { prefersReducedMotion } from '../motion'

// Hank, the Ironlattice gator, walks along the bottom of the screen as you scroll:
// left edge at the top of the page, right edge at the bottom. He turns around when
// you scroll back up. Decorative only, so screen readers skip him.
export default function HankScroller() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (prefersReducedMotion()) {
      el.style.transform = 'translateX(16px)'
      return
    }

    let lastY = window.scrollY
    let facing = 1
    let frame = 0

    const update = () => {
      frame = 0
      const max = document.documentElement.scrollHeight - window.innerHeight
      const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
      const travel = window.innerWidth - el.offsetWidth - 32
      if (window.scrollY > lastY + 1) facing = 1
      else if (window.scrollY < lastY - 1) facing = -1
      lastY = window.scrollY
      el.style.transform = `translateX(${16 + progress * travel}px) scaleX(${facing})`
      el.classList.add('is-walking')
      clearTimeout(el._stop)
      el._stop = setTimeout(() => el.classList.remove('is-walking'), 180)
    }

    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(frame)
      clearTimeout(el._stop)
    }
  }, [])

  // Portal to <body>: page transitions transform the page wrapper, which would
  // otherwise pin this "fixed" element to the page instead of the screen
  return createPortal(
    <div className="hank-scroller" ref={ref} aria-hidden="true">
      <img src={img('/images/ironlattice/hank-sprite.svg')} alt="" width="217" height="96" />
    </div>,
    document.body
  )
}
