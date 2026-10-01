import { FiLinkedin, FiMail, FiPhone, FiDownload } from 'react-icons/fi'
import img from '../img'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">MAANAS RASTOGI</div>

        <div className="footer-contact">
          <a href="tel:2148971076">
            <FiPhone size={14} />
            (214) 897-1076
          </a>
          <a href="mailto:maanasrastogi@utexas.edu">
            <FiMail size={14} />
            maanasrastogi@utexas.edu
          </a>
        </div>

        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
          <div className="footer-links">
            <a href="https://www.linkedin.com/in/maanas-rastogi" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FiLinkedin size={16} />
            </a>
          </div>
          <a
            href={img('/resume.pdf')}
            download="Resume_Maanas_Rastogi.pdf"
            className="btn btn-outline"
            style={{ fontSize: '0.72rem', padding: '8px 14px' }}
          >
            <FiDownload size={13} />
            Resume
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Maanas Rastogi, Electrical &amp; Computer Engineering</span>
        <span>University of Texas at Austin</span>
      </div>
    </footer>
  )
}
