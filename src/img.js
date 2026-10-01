const base = import.meta.env.BASE_URL
export default function img(path) {
  return base + (path.startsWith('/') ? path.slice(1) : path)
}
