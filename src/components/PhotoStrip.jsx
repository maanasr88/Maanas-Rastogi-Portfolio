import { useMemo } from 'react'
import img from '../img'

// Real photos from the lab, the pits and the field. Shuffled on each visit, then
// scrolled continuously as one long strip. Hovering pauses it; with reduced motion
// it becomes a plain row you can scroll by hand.
const PHOTOS = [
  { src: '/images/baja-racing/competition/side-sunset.jpg', w: 2000, h: 1333, label: 'Baja SAE · Car 185', alt: 'Longhorn Baja car 185 on grass at sunset' },
  { src: '/images/baja-racing/competition/driver-staging.jpg', w: 2000, h: 1333, label: 'Baja SAE · Staging', alt: 'Car 185 with a driver in the staging area' },
  { src: '/images/baja-racing/competition/team-photo.jpg', w: 2000, h: 1333, label: 'Longhorn Baja Racing', alt: 'The Longhorn Baja Racing team celebrating around the car' },
  { src: '/images/baja-racing/competition/wiring.jpg', w: 1333, h: 2000, label: 'Wiring the car', alt: 'Hands twisting a red and white wire pair on the car' },
  { src: '/images/baja-racing/competition/pit-lineup.jpg', w: 1333, h: 2000, label: 'Baja SAE · Pits', alt: 'Car 185 lined up in the pits with other Baja cars' },
  { src: '/images/profile/maanas-on-car.jpg', w: 1333, h: 2000, label: 'Me · Car 185', alt: 'Maanas Rastogi standing on the Baja car' },
  { src: '/images/ironlattice/dell-event/team-portrait.jpg', w: 1333, h: 2000, label: 'Ironlattice · Dell Technologies', alt: 'Maanas with the Ironlattice team at Dell Technologies' },
  { src: '/images/robotics-society/robots-faceoff.jpg', w: 1600, h: 1361, label: 'RoboMaster · Competition robots', alt: 'Competition robots facing off' },
  { src: '/images/robotics-society/chassis-board-photo.jpg', w: 1024, h: 726, label: 'RoboMaster · Chassis board', alt: 'Assembled chassis power board' },
  { src: '/images/robotics-society/turret-board-photo.jpg', w: 1024, h: 724, label: 'RoboMaster · Turret board', alt: 'Assembled turret power board' },
  { src: '/images/neurotech/electronics-tray.jpg', w: 1536, h: 2048, label: 'Neurotech · Electronics tray', alt: 'Wheelchair electronics tray' },
  { src: '/images/banerjee-lab/wafer-characterization-cover.jpg', w: 1600, h: 1066, label: 'Banerjee Lab · Wafers', alt: 'Wafer samples for characterization' },
  { src: '/images/baja-racing/competition/rear-sunset.jpg', w: 2000, h: 1333, label: 'Baja SAE · Golden hour', alt: 'Rear of car 185 at sunset' },
]

function shuffle(list) {
  const a = [...list]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function PhotoStrip() {
  const photos = useMemo(() => shuffle(PHOTOS), [])

  return (
    <div className="photo-strip" role="region" aria-label="Photos from the lab, the pits and the field">
      <ul className="photo-strip-track" role="list">
        {/* Two copies back to back, so the loop has no seam; the copy is hidden from screen readers */}
        {[...photos, ...photos].map((p, i) => (
          <li key={i} className="photo-strip-item" aria-hidden={i >= photos.length || undefined}>
            <img src={img(p.src)} alt={i < photos.length ? p.alt : ''} width={p.w} height={p.h} loading="lazy" decoding="async" />
            <span className="photo-strip-label mono">{p.label}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
