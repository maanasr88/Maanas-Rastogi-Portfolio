// Shared motion helpers so JS-driven animation honours the same
// prefers-reduced-motion setting as the CSS.
export function prefersReducedMotion() {
  return typeof window !== 'undefined'
    && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
}

export function scrollBehavior() {
  return prefersReducedMotion() ? 'auto' : 'smooth'
}
