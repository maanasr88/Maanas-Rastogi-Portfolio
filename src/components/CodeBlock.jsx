export default function CodeBlock({ language, title, children }) {
  return (
    <div className="code-block">
      {(title || language) && (
        <div className="code-block-header">
          {title && <span className="code-block-title">{title}</span>}
          {language && <span className="code-block-lang">{language}</span>}
        </div>
      )}
      <pre className="code-block-pre"><code>{children}</code></pre>
    </div>
  )
}
