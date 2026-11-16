// Contact details used across the site
export const EMAIL = 'maanasrastogi88@gmail.com'

// Opens a new message in Gmail in the browser, which works even when no desktop
// mail app is set up (a plain mailto: link silently does nothing in that case)
export const EMAIL_COMPOSE = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(EMAIL)}`

export const LINKEDIN = 'https://www.linkedin.com/in/maanas-rastogi'

export const PHONE = '(214) 897-1076'
export const PHONE_HREF = 'tel:+12148971076'

// Scrolls to the contact block in the footer, which is on every page
export function goToContact(e) {
  const el = document.getElementById('contact')
  if (!el) return
  e?.preventDefault()
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' })
}
