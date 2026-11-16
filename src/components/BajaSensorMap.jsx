import img from '../img'

const LEGEND = [
  { n: 1, label: 'Driver Input Telemetry', desc: 'Pedal box & steering area', to: '/team/baja-racing/driver-input-telemetry' },
  { n: 2, label: 'Fuel Level Indicator', desc: 'Rear compartment, behind the cockpit', to: '/team/baja-racing/fuel-level-indicator' },
  { n: 3, label: 'Engine Temperature Sensing', desc: 'Engine bay, behind the cockpit', to: '/team/baja-racing/engine-temperature-sensing' },
  { n: 4, label: 'RPM Sensor', desc: 'Wheel hub', to: '/team/baja-racing/rpm-sensor' },
  { n: 5, label: 'Suspension Position Sensor', desc: 'Shock strut', to: '/team/baja-racing/suspension-position-sensor' },
  { n: 6, label: 'IMU / GPS Vehicle Tracking', desc: 'Chassis centerline, under the seat', to: '/team/baja-racing/imu-gps' },
  { n: 7, label: 'Wireless Telemetry Link', desc: 'Roll cage apex, for antenna line-of-sight', to: '/team/baja-racing/telemetry-link' },
]

export default function BajaSensorMap({ highlight }) {
  return (
    <div className="sensor-map">
      <div className="sensor-map-img-wrap">
        <img
          src={img('/images/baja-racing/sensor-map/sensor-placement-map.png')}
          alt="Approximate sensor-mounting locations on the Baja car, numbered 1 through 7"
          className="sensor-map-img"
          loading="lazy"
        />
      </div>
      <ul className="sensor-map-legend">
        {LEGEND.map(item => (
          <li key={item.n} className={highlight === item.n ? 'active' : ''}>
            <span className="sensor-map-num">{item.n}</span>
            <span className="sensor-map-text">
              <strong>{item.label}</strong>
              <span className="sensor-map-desc">{item.desc}</span>
            </span>
          </li>
        ))}
      </ul>
      <p className="sensor-map-note">
        Approximate sensor zones for illustration — exact mounting points are finalized during vehicle integration.
      </p>
    </div>
  )
}
