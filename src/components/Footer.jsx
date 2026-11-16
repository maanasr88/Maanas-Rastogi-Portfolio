import { Link } from 'react-router-dom'
import { FiArrowUpRight, FiDownload } from 'react-icons/fi'
import img from '../img'

const EMAIL = 'maanasrastogi@utexas.edu'
const LINKEDIN = 'https://www.linkedin.com/in/maanas-rastogi'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-glow" aria-hidden="true" />
      <div className="wrap">
        <div className="footer-cta">
          <p className="eyebrow">Contact</p>
          <h2 className="footer-title">Let&rsquo;s build <span className="serif grad">something.</span></h2>
          <div className="footer-actions">
            <a href={`mailto:${EMAIL}`} className="btn btn-primary">{EMAIL}</a>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              LinkedIn <FiArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="footer-meta">
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
                  <a href={img('/Resume_Maanas_Rastogi.pdf')} download="Resume_Maanas_Rastogi.pdf">
                    Resume (PDF) <FiDownload size={14} aria-hidden="true" />
                  </a>
                </li>
                <li><a href="tel:+12148971076">(214) 897-1076</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} Maanas Rastogi</span>
            <span>Electrical &amp; Computer Engineering · UT Austin</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
