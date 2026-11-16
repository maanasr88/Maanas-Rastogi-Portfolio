import { Link } from 'react-router-dom'
import { FiArrowUpRight, FiDownload } from 'react-icons/fi'
import img from '../img'

const EMAIL = 'maanasrastogi@utexas.edu'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-cta">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 className="footer-title">Building something with hardware? Let&rsquo;s talk.</h2>
            <a href={`mailto:${EMAIL}`} className="footer-email">{EMAIL}</a>
          </div>

          <div className="footer-cols">
            <div className="footer-col">
              <p className="footer-col-title">Site</p>
              <ul>
                <li><Link to="/work">Work</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/skills">Skills</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <p className="footer-col-title">Elsewhere</p>
              <ul>
                <li>
                  <a href="https://www.linkedin.com/in/maanas-rastogi" target="_blank" rel="noopener noreferrer">
                    LinkedIn <FiArrowUpRight size={14} aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a href={img('/Resume_Maanas_Rastogi.pdf')} download="Resume_Maanas_Rastogi.pdf">
                    Resume (PDF) <FiDownload size={14} aria-hidden="true" />
                  </a>
                </li>
                <li><a href="tel:+12148971076">(214) 897-1076</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Maanas Rastogi</span>
          <span>Electrical &amp; Computer Engineering · UT Austin</span>
        </div>
      </div>
    </footer>
  )
}
