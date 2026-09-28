import { useState, useRef, useCallback } from 'react'
import { Divider, SkillTag } from '../components/UI'

const SKILLS = {
  'Front-end': [
    'JavaScript',
    'TypeScript',
    'HTML5', 
    'CSS',
  ],
  'Back-end': [
   'Java',
    'Python',
    'C#',
    'REST API',
    'Authentication / JWT',
  ],
  'Libraries & Frameworks': [
    'React',
    'Vite',
    'Tailwind CSS',
    'Google Apps Script',
  ],
  'Database': [
    'SQL',
    'PostgreSQL',
    'MySQL',
    'Database Design',
    'Relational Database',
  ],
  'Tools & Others': [
    'Tableau',
    'VSCode',
    'GitHub',
    'Git',
    'Figma',
    'Postman',
    'Excel',
    'Google Colab (ML & DL)',
    'Vmware',
  ],
  'Operating System & Network': [
    'Windows',
    'Linux',
    'Ubuntu',
    'Kali Linux',
    'Debian',
  ],
}

const INFO_ROWS = [
  ['ฺBirthday',  '10 November 2002'],
  ['Address',  'Bangkok , Taling Chan, 10170'],
  ['Email',    'thanaratpanlampark4510@gmail.com'],
  ['contact', '081-406-8043'],
]

export default function AboutPage() {
  const [imgSrc, setImgSrc] = useState(null)
  const [imgHov, setImgHov] = useState(false)
  const fileRef = useRef()

  const handleFile = useCallback((e) => {
    const file = e.target.files[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (ev) => setImgSrc(ev.target.result)
    reader.readAsDataURL(file)
  }, [])

  return (
    <section style={{ padding: '56px 48px', maxWidth: 960, margin: '0 auto' }}>

      {/* ── Hero row ── */}
      <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 52, alignItems: 'start' }}>

        {/* Avatar */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
          <div
        onMouseEnter={() => setImgHov(true)}
        onMouseLeave={() => setImgHov(false)}
          style={{
            width: 200,
            height: 200,
            borderRadius: 20,
            border: '2px solid var(--black)',
            overflow: 'hidden',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            transform: imgHov ? 'scale(1.03)' : 'scale(1)',
            boxShadow: imgHov ? '0 16px 40px rgba(0,0,0,0.14)': '0 4px 16px rgba(0,0,0,0.07)',}}
>             <img
                src="/profile.png"
                alt="Profile"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
          </div>
          <input ref={fileRef} type="file" accept="image/*" onChange={handleFile} style={{ display: 'none' }} />

          {/* Status */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 7,
            background: 'var(--black)', color: 'var(--white)',
            fontSize: 12, padding: '6px 16px', borderRadius: 20, fontWeight: 400,
            animation: 'fadeUp 0.5s 0.15s ease both',
          }}>
            <span style={{
              width: 7, height: 7, borderRadius: '50%', background: '#4ade80',
              display: 'inline-block', animation: 'pulse 2s infinite',
            }} />
            Ready to accept work
          </div>
        </div>

        {/* Info */}
        <div style={{ paddingTop: 8 }}>
          <p style={{
            fontSize: 11, color: 'var(--text-muted)', letterSpacing: 3,
            textTransform: 'uppercase', marginBottom: 10,
            animation: 'fadeUp 0.4s 0.05s ease both',
          }}>
            Profile
          </p>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 52, fontWeight: 700, lineHeight: 1.05,
            letterSpacing: '-1px', marginBottom: 6,
            animation: 'fadeUp 0.5s 0.08s ease both',
          }}>
            Mr. Thanarat Panlampark
          </h1>
          <p style={{
            fontSize: 15, color: 'var(--text-mid)', marginBottom: 28,
            animation: 'fadeUp 0.5s 0.1s ease both',
          }}>
            Nickname : Joe
          </p>

          {/* Info grid */}
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 32px',
            animation: 'fadeUp 0.5s 0.14s ease both',
          }}>
            {INFO_ROWS.map(([label, value]) => (
              <div key={label} style={{ marginBottom: 18 }}>
                <p style={{ fontSize: 10, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 3, fontWeight: 600 }}>{label}</p>
                <p style={{ fontSize: 14, color: 'var(--text-mid)' }}>{value}</p>
              </div>
            ))}
          </div>

          <Divider />

          <p style={{ fontSize: 10, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 10, fontWeight: 600 }}>About Me</p>
          <p style={{ fontSize: 14, color: 'var(--text-mid)', lineHeight: 1.9, animation: 'fadeUp 0.5s 0.18s ease both' }}>
            System Analyst with hands-on experience in System Analysis, Solution Design, UX/UI Design, Web Application Development, System Testing, and AI-related projects. 
            Experienced in enterprise and government projects involving AI-powered camera monitoring,
            machinery detection, e-Service platforms, road inspection systems, and AI-based road 
            condition classification. Skilled in SQL, Python, JavaScript, TypeScript, HTML, and CSS, 
            with experience in database management, API integration, workflow analysis, and software development processes.
            <br></br>
            <br></br>
            <p>Experienced in analyzing business and user requirements, designing system workflows and user interfaces, supporting front-end and back-end development, 
              conducting system testing, and providing feedback to development teams. Also experienced in preparing technical documentation, User Manuals, training materials, and presentation 
              slides, as well as working with GPS coordinates and camera location data for 
              system implementation. Able to collaborate effectively with users, stakeholders, and development teams throughout the software development lifecycle.
            </p>
            <br></br>
            <p>Strong analytical thinking, problem-solving, and communication skills, with the ability to understand business requirements and translate them into 
              practical technical solutions. Possess a strong technical foundation combined with experience in AI, web application development, system testing, and UX/UI design. 
              Passionate about applying technology to improve business processes, develop effective solutions, and support digital transformation and innovation.
            </p>

          </p>

          <Divider />

<p
  style={{
    fontSize: 10,
    color: 'var(--text-muted)',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
    marginBottom: 12,
    fontWeight: 600,
  }}
>
  Skills
</p>

<div
  style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 18,
    animation: 'fadeUp 0.5s 0.22s ease both',
  }}
>
  {Object.entries(SKILLS).map(([category, skills]) => (
    <div
      key={category}
      style={{
        border: '1px solid rgba(0,0,0,0.08)',
        borderRadius: 16,
        padding: 16,
        background: 'rgba(255,255,255,0.55)',
      }}
    >
      <p
        style={{
          fontSize: 11,
          color: 'var(--black)',
          textTransform: 'uppercase',
          letterSpacing: 1.4,
          marginBottom: 10,
          fontWeight: 700,
        }}
      >
        {category}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {skills.map(skill => (
          <SkillTag key={skill}>{skill}</SkillTag>
        ))}
      </div>
    </div> ))}
      </div>
    </div>
  </div>
    </section>
  )
}
