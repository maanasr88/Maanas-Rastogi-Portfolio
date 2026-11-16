import { useState } from 'react'
import { FiMail, FiCopy, FiCheck } from 'react-icons/fi'
import { EMAIL, EMAIL_COMPOSE } from '../contact'

// Primary "email me" action: opens a new Gmail draft addressed to me in a new tab,
// with a small copy button beside it for people who use another mail app.
export default function EmailButton({ label = EMAIL, className = 'btn btn-primary' }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${EMAIL}`
    }
  }

  return (
    <span className="email-action">
      <a href={EMAIL_COMPOSE} target="_blank" rel="noopener noreferrer" className={className}>
        <FiMail size={15} aria-hidden="true" /> {label}
      </a>
      <button type="button" className="btn btn-outline email-copy" onClick={copy} aria-label={copied ? 'Email address copied' : 'Copy email address'}>
        {copied ? <FiCheck size={15} aria-hidden="true" /> : <FiCopy size={15} aria-hidden="true" />}
        <span className="email-copy-text" aria-live="polite">{copied ? 'Copied' : 'Copy'}</span>
      </button>
    </span>
  )
}
