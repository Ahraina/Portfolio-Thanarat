import { useState } from 'react'
import { PageHeader } from '../components/UI'

const COURSES = [
  { cat: 'Mathematics',       name: 'Discrete Mathematics',               grade: 'B+', pct: 90  },
  { cat: 'COMPUTER',          name: 'Basic Computer for Education',       grade: 'B+',  pct: 90 },
  { cat: 'Management',        name: 'Innovation & Information Technology Learning Management',        grade: 'B', pct: 80  },
  { cat: 'Programming',       name: 'Computer & Programming',             grade: 'B',  pct: 80 },
  { cat: 'AI/DL/ML',          name: 'Artificial Intelligence',            grade: 'B',  pct: 80 },
  { cat: 'attitude',          name: 'Design Thinking',                    grade: 'B',  pct: 80  },
  { cat: 'Education',         name: 'Teaching Practice',                  grade: 'B',  pct: 80  },
  { cat: 'Education',         name: 'Principles of Education for Sustainable Development', grade: 'B', pct: 80 },
  { cat: 'Programming',       name: 'Object-Oriented Programming',        grade: 'C+', pct: 70  },
  { cat: 'Business',          name: 'Business & Management Economics',    grade: 'C+', pct: 70 },
  { cat: 'Database',          name: 'Database System',                    grade: 'C+', pct: 70 },
  { cat: 'Programming',       name: 'Software Engineer',                  grade: 'C', pct: 60 },
  { cat: 'AI/DL/ML',          name: 'Data Mining',                        grade: 'C', pct: 60 },
  { cat: 'Programming',       name: 'Mobile Application Development',     grade: 'C', pct: 60 },
  { cat: 'Network',           name: 'Data Communication and Computer Network Technology', grade: 'C', pct: 60 },
  { cat: 'Engineer',          name: 'Digital Circuit',                    grade: 'C', pct: 60 },
  { cat: 'Engineer',          name: 'Electronic Devices and Instruments', grade: 'C', pct: 60 },
  { cat: 'Engineer',          name: 'Computer-Aided Design and Manufacturing',  grade: 'C', pct: 60 },
  { cat: 'Management',        name: 'Management Information System',    grade: 'C', pct: 60 },

  
]

const staggerClasses = ['stagger-1','stagger-2','stagger-3','stagger-4','stagger-5','stagger-6','stagger-7','stagger-8']

function CourseCard({ cat, name, code, grade, pct, stagger }) {
  const [hov, setHov] = useState(false)

  return (
    <div
      className={stagger}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? 'var(--black)' : 'var(--white)',
        border: '1px solid var(--border-md)',
        borderRadius: 16, padding: '20px 22px',
        transition: 'all 0.25s ease',
        transform: hov ? 'translateY(-3px)' : 'translateY(0)',
        boxShadow: hov ? '0 12px 32px rgba(0,0,0,0.12)' : '0 1px 4px rgba(0,0,0,0.04)',
        animation: 'fadeUp 0.45s ease both',
        cursor: 'default',
      }}
    >
      <p style={{
        fontSize: 10, letterSpacing: 1.5, textTransform: 'uppercase',
        marginBottom: 8, fontWeight: 600,
        color: hov ? 'rgba(255,255,255,0.5)' : 'var(--text-muted)',
        transition: 'color 0.25s',
      }}>{cat}</p>
      <p style={{
        fontSize: 14, fontWeight: 500, lineHeight: 1.45, marginBottom: 4,
        color: hov ? 'var(--white)' : 'var(--text)',
        transition: 'color 0.25s',
      }}>{name}</p>
      <p style={{
        fontSize: 12, marginBottom: 16,
        color: hov ? 'rgba(255,255,255,0.4)' : 'var(--text-muted)',
        transition: 'color 0.25s',
      }}>{code}</p>

      {/* Grade bar */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
          <span style={{ fontSize: 11, color: hov ? 'rgba(255,255,255,0.5)' : 'var(--text-muted)', transition: 'color 0.25s' }}>Grade</span>
          <span style={{
            fontSize: 13, fontWeight: 700, fontFamily: 'var(--font-display)',
            color: hov ? 'var(--white)' : 'var(--black)', transition: 'color 0.25s',
          }}>{grade}</span>
        </div>
        <div style={{
          height: 3, borderRadius: 2, overflow: 'hidden',
          background: hov ? 'rgba(255,255,255,0.15)' : 'var(--white3)',
          transition: 'background 0.25s',
        }}>
          <div style={{
            height: '100%',
            width: `${pct}%`,
            background: hov ? 'var(--white)' : 'var(--black)',
            borderRadius: 2,
            transition: 'background 0.25s, width 0.7s ease',
          }} />
        </div>
      </div>
    </div>
  )
}

export default function CoursesPage() {
  return (
    <section style={{ padding: '56px 48px', maxWidth: 960, margin: '0 auto' }}>
      <PageHeader label="Academic Curriculum" title="RELEVANT COURSEWORK" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 14 }}>
        {COURSES.map((c, i) => <CourseCard key={c.code} stagger={staggerClasses[i]} {...c} />)}
      </div>
    </section>
  )
}
