import { useEffect, useRef, useState } from 'react'

// Types out plain text into the returned ref's element once it scrolls into view.
export function useTypewriter(text, speed = 18) {
  const ref = useRef(null)
  const triggered = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.textContent = ''

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !triggered.current) {
        triggered.current = true
        let i = 0
        const interval = setInterval(() => {
          if (i < text.length) { el.textContent += text[i]; i++ }
          else clearInterval(interval)
        }, speed)
      }
    }, { threshold: 0.5 })

    observer.observe(el)
    return () => observer.disconnect()
  }, [text, speed])

  return ref
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
    el.innerHTML = ''

    const totalChars = segments.reduce((sum, s) => sum + (s.text ? s.text.length : 0), 0)

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !triggered.current) {
        triggered.current = true
        let typed = 0
        const interval = setInterval(() => {
          typed++
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
          el.innerHTML = html
          if (typed >= totalChars) {
            clearInterval(interval)
            setDone(true)
          }
        }, speed)
      }
    }, { threshold: 0.5 })

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return { ref, done }
}
