export function PageHeader({ label, title }) {
  return (
    <div style={{ marginBottom: 40, animation: 'fadeUp 0.5s ease both' }}>
      <p style={{
        fontSize: 11, color: 'var(--text-muted)', letterSpacing: 3,
        textTransform: 'uppercase', marginBottom: 10, fontWeight: 500,
      }}>{label}</p>
      <h2 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 42, fontWeight: 700, color: 'var(--black)',
        lineHeight: 1.1, letterSpacing: '-0.5px',
      }}>{title}</h2>
      <div style={{
        height: 2, width: 48, background: 'var(--black)',
        marginTop: 16, borderRadius: 2,
        transformOrigin: 'left',
        animation: 'lineGrow 0.6s 0.2s ease both',
      }} />
    </div>
  )
}

export function Divider() {
  return <div style={{ height: 1, background: 'var(--border)', margin: '24px 0' }} />
}

export function Card({ children, style, className }) {
  return (
    <div className={className} style={{
      background: 'var(--white)',
      border: '1px solid var(--border)',
      borderRadius: 16,
      padding: '24px 28px',
      ...style,
    }}>{children}</div>
  )
}

export function Tag({ children, dark }) {
  return (
    <span style={{
      background: dark ? 'var(--black)' : 'var(--white3)',
      border: `1px solid ${dark ? 'var(--black)' : 'var(--border-md)'}`,
      color: dark ? 'var(--white)' : 'var(--text-mid)',
      fontSize: 12, padding: '5px 13px', borderRadius: 20,
      fontWeight: 500, letterSpacing: 0.2,
    }}>{children}</span>
  )
}

export function SkillTag({ children }) {
  return (
    <span style={{
      background: 'var(--white)',
      border: '1px solid var(--border-md)',
      color: 'var(--text-mid)',
      fontSize: 12, padding: '5px 14px', borderRadius: 20,
      fontWeight: 400, transition: 'all 0.2s',
    }}>{children}</span>
  )
}

export function TechTag({ children }) {
  return (
    <span style={{
      background: 'var(--black)',
      color: 'var(--white)',
      fontSize: 11, padding: '4px 11px', borderRadius: 6,
      fontWeight: 400, letterSpacing: 0.2,
    }}>{children}</span>
  )
}
