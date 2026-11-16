import { useEffect, useRef, useState } from 'react'
import { prefersReducedMotion } from '../motion'

// These hooks only animate a visual copy of the text. Callers must also render the
// full text for assistive tech and crawlers (e.g. in a .sr-only span) and mark the
// typed element aria-hidden. Under prefers-reduced-motion the text appears at once.

// Types out plain text into the returned ref's element once it scrolls into view.
export function useTypewriter(text, speed = 18) {
  const ref = useRef(null)
  const triggered = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (prefersReducedMotion()) {
      el.textContent = text
      return
    }

    el.textContent = ''
    let interval
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !triggered.current) {
        triggered.current = true
        let i = 0
        interval = setInterval(() => {
          if (i < text.length) { el.textContent += text[i]; i++ }
          else clearInterval(interval)
        }, speed)
      }
    }, { threshold: 0.5 })

    observer.observe(el)
    return () => { observer.disconnect(); clearInterval(interval) }
  }, [text, speed])

  return ref
}

function renderSegments(segments, typed) {
  let remaining = typed
  let html = ''
  for (const seg of segments) {
    if (seg.break) {
      if (remaining >= 0) html += '<br/>'
      continue
    }
    const take = Math.max(0, Math.min(seg.text.length, remaining))
    const chunk = seg.text.slice(0, take)
    html += seg.className ? `<span class="${seg.className}">${chunk}</span>` : chunk
    remaining -= seg.text.length
  }
  return html
}

// Types out a sequence of segments ({ text, className? } or { break: true }) into the
// returned ref's element, preserving inline styling and line breaks. Also returns
// whether typing has finished, so callers can hide a blinking cursor once done.
export function useTypewriterSegments(segments, speed = 40) {
  const ref = useRef(null)
  const triggered = useRef(false)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const totalChars = segments.reduce((sum, s) => sum + (s.text ? s.text.length : 0), 0)

    if (prefersReducedMotion()) {
      el.innerHTML = renderSegments(segments, totalChars)
      setDone(true)
      return
    }

    el.innerHTML = ''
    let interval
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !triggered.current) {
        triggered.current = true
        let typed = 0
        interval = setInterval(() => {
          typed++
          el.innerHTML = renderSegments(segments, typed)
          if (typed >= totalChars) {
            clearInterval(interval)
            setDone(true)
          }
        }, speed)
      }
    }, { threshold: 0.5 })

    observer.observe(el)
    return () => { observer.disconnect(); clearInterval(interval) }
  }, [])

  return { ref, done }
}
