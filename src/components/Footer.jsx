import { Link } from 'react-router-dom'
import { FiArrowUpRight, FiDownload, FiMail, FiPhone, FiLinkedin } from 'react-icons/fi'
import img from '../img'
import EmailButton from './EmailButton'
import { EMAIL, EMAIL_COMPOSE, LINKEDIN, PHONE, PHONE_HREF } from '../contact'

const RESUME = img('/Resume_Maanas_Rastogi.pdf')

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-glow" aria-hidden="true" />
      <div className="wrap">
        <div className="footer-cta" id="contact">
          <p className="eyebrow">Contact</p>
          <h2 className="footer-title">Let&rsquo;s work <span className="serif grad">together.</span></h2>
          <p className="footer-lede">Looking for electrical systems and silicon engineering roles.</p>

          {/* The main ways to reach me, as large cards so they're hard to miss */}
          <ul className="contact-cards" role="list">
            <li className="contact-card is-primary">
              <span className="contact-card-label mono"><FiMail aria-hidden="true" /> Email</span>
              <a href={EMAIL_COMPOSE} target="_blank" rel="noopener noreferrer" className="contact-card-value">{EMAIL}</a>
              <EmailButton label="Write to me" className="btn btn-primary btn-sm" />
            </li>
            <li className="contact-card">
              <span className="contact-card-label mono"><FiPhone aria-hidden="true" /> Phone</span>
              <a href={PHONE_HREF} className="contact-card-value">{PHONE}</a>
              <a href={PHONE_HREF} className="btn btn-outline btn-sm">Call or text</a>
            </li>
            <li className="contact-card">
              <span className="contact-card-label mono"><FiLinkedin aria-hidden="true" /> LinkedIn</span>
              <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="contact-card-value">maanas-rastogi</a>
              <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
                Connect <FiArrowUpRight size={14} aria-hidden="true" />
              </a>
            </li>
            <li className="contact-card">
              <span className="contact-card-label mono"><FiDownload aria-hidden="true" /> Resume</span>
              <a href={RESUME} download="Resume_Maanas_Rastogi.pdf" className="contact-card-value">One-page PDF</a>
              <a href={RESUME} download="Resume_Maanas_Rastogi.pdf" className="btn btn-outline btn-sm">
                Download <FiDownload size={14} aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-meta">
          <div className="footer-cols">
            <div className="footer-col">
              <p className="footer-col-title">Site</p>
              <ul>
                <li><Link to="/work">Work</Link></li>
                <li><Link to="/baja">Baja</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/skills">Skills</Link></li>
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
