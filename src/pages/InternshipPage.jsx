import { useState } from 'react'
import { PageHeader, TechTag } from '../components/UI'

const INTERNS = [
  {
    company: 'Full - Stack Developer Intern',
    role:    'Intern at The Administrative Court of Thailand',
    period:  '9 June 2025 – 31 March 2026',
    duration:'10 Month',
    desc:    'Responsibilities',
    tasks: [
      'Developed a full-stack Inventory Management System for IT Support staff to manage equipment requests, borrowing, and return processes.',
      'Designed and implemented front-end and back-end functionalities, database structures, and REST API integration to support system operations.',
      'Gathered user requirements from IT Support staff and improved system workflows based on operational needs and feedback.',
      'Performed bug fixing, system maintenance, and continuous feature enhancements based on user testing throughout the internship period.',
    ],
    techs: ['JavaScript','Google Apps Script','HTML5','Tailwind CSS','Google Sheets','RESTful API','Authentication System','Role-Based Access Control','Inventory Tracking','Agile Development'],
  },
  {
    company: 'IT Support & Network Technician Intern',
    role:    'Intern at The Administrative Court of Thailand',
    period:  '9 June 2025 – 31 March 2026',
    duration:'10 Month',
    desc:    'Responsibilities',
    tasks: [
      'Provided technical support for computers, printers, and related hardware through ticket-based troubleshooting and maintenance.',
      'Configured and supported network systems, including TCP/IP configuration, VPN connectivity, and basic network troubleshooting.',
      'Managed and supported conference systems for remote meetings, courtroom conferencing, and online communication sessions.',
      'Installed, configured, and maintained software, hardware, and network devices to ensure stable daily operations.',
      'Assisted users in diagnosing and resolving hardware, software, and connectivity issues.'
    ],
    techs: ['TCP/IP','VPN','Network Configuration','Windows Support','Hardware Troubleshooting','Network Troubleshooting'],
  },
]

function InternCard({ company, role, period, duration, desc, tasks, techs, index }) {
  const [hov, setHov] = useState(false)
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: 'var(--white)',
        border: `1px solid ${hov ? 'var(--black)' : 'var(--border)'}`,
        borderRadius: 20, padding: '32px 32px 28px',
        marginBottom: 20, position: 'relative', overflow: 'hidden',
        transition: 'border-color 0.25s, box-shadow 0.25s, transform 0.25s',
        boxShadow: hov ? '0 16px 48px rgba(0,0,0,0.1)' : '0 2px 8px rgba(0,0,0,0.04)',
        transform: hov ? 'translateY(-2px)' : 'translateY(0)',
        animation: `fadeUp 0.5s ${index * 0.1}s ease both`,
      }}
    >
      {/* Top accent line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 3,
        background: 'var(--black)',
        transformOrigin: 'left',
        transform: hov ? 'scaleX(1)' : 'scaleX(0)',
        transition: 'transform 0.35s ease',
      }} />

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
        <div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 700, marginBottom: 4 }}>{company}</h3>
          <p style={{ fontSize: 14, color: 'var(--text-mid)' }}>{role}</p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{
            background: 'var(--white3)', border: '1px solid var(--border)',
            borderRadius: 8, padding: '5px 14px',
            fontSize: 12, color: 'var(--text-muted)', marginBottom: 4,
          }}>{period}</div>
          <p style={{ fontSize: 11, color: 'var(--text-muted)' }}>{duration}</p>
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: 1, background: 'var(--border)', margin: '16px 0' }} />

      {/* Desc */}
      <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.85, marginBottom: 18 }}>{desc}</p>

      {/* Tasks */}
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20 }}>
        {tasks.map((t, i) => (
          <li key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 13, color: 'var(--text-mid)' }}>
            <span style={{
              width: 18, height: 18, borderRadius: '50%', border: '1.5px solid var(--black)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 9, fontWeight: 700, flexShrink: 0, marginTop: 1,
            }}>{i + 1}</span>
            {t}
          </li>
        ))}
      </ul>

      {/* Tech tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {techs.map(t => <TechTag key={t}>{t}</TechTag>)}
      </div>
    </div>
  )
}

export default function InternshipPage() {
  return (
    <section style={{ padding: '56px 48px', maxWidth: 960, margin: '0 auto' }}>
      <PageHeader label="Work Experience" title="INTERNSHIP" />
      {INTERNS.map((intern, i) => <InternCard key={i} index={i} {...intern} />)}
    </section>
  )
}
