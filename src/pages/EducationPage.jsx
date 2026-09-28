import { PageHeader, Card } from '../components/UI'

const EDU_DATA = [
  {
    year:   '2564 – 2568',
    school: "King Mongkut's University of Technology North Bangkok",
    degree: 'Bachelor of Science in Technical Education : Computer Technology',
    detail: 'Bachelor’s Degree',
    gpa:    '2.18',
    status: 'Graduation',
  },
  {
    year:   '2561 – 2563',
    school: 'Pongsawadi Technological College',
    degree: 'Business Information Technology',
    detail: 'Vocational Certificate',
    gpa:    '3.36',
    status: 'Graduation',
  },
   {
    year:   '2558 – 2560',
    school: 'Potisarn Pittayakorn School',
    degree: 'Regular Program',
    detail: 'Lower Secondary Education',
    gpa:    '2.48',
    status: 'Graduation',
  },
]

const staggerClass = ['stagger-1','stagger-2']

export default function EducationPage() {
  return (
    <section style={{ padding: '56px 48px', maxWidth: 960, margin: '0 auto' }}>
      <PageHeader label="Academic Background" title="EDUCATIONAL RECORD" />

      <div style={{ position: 'relative', paddingLeft: 28 }}>
        {/* Vertical line */}
        <div style={{
          position: 'absolute', left: 8, top: 8, bottom: 8, width: 1,
          background: 'linear-gradient(to bottom, var(--black), transparent)',
          transformOrigin: 'top',
          animation: 'lineGrow 0.8s 0.3s ease both',
        }} />

        {EDU_DATA.map((item, i) => (
          <div
            key={i}
            className={staggerClass[i]}
            style={{
              position: 'relative', marginBottom: 28,
              animation: 'fadeUp 0.5s ease both',
            }}
          >
            {/* Dot */}
            <div style={{
              width: 16, height: 16, borderRadius: '50%',
              border: '2px solid var(--black)',
              background: i === 0 ? 'var(--black)' : 'var(--white)',
              position: 'absolute', left: -32, top: 26,
              transition: 'transform 0.2s',
            }} />

            <Card style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 16, alignItems: 'start' }}>
              <div>
                <p style={{ fontSize: 11, color: 'var(--text-muted)', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 8 }}>{item.year}</p>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 700, marginBottom: 4 }}>{item.school}</h3>
                <p style={{ fontSize: 14, color: 'var(--text-mid)', marginBottom: 14 }}>{item.degree}</p>
                <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.8 }}>{item.detail}</p>
              </div>
              <div style={{ textAlign: 'right', flexShrink: 0 }}>
                <div style={{
                  background: i === 0 ? 'var(--black)' : 'var(--white3)',
                  color: i === 0 ? 'var(--white)' : 'var(--text-mid)',
                  fontSize: 11, padding: '4px 12px', borderRadius: 20,
                  fontWeight: 500, marginBottom: 12, whiteSpace: 'nowrap',
                }}>{item.status}</div>
                 {/* <p style={{ fontSize: 11, color: 'var(--text-muted)', marginBottom: 2 }}></p> 
                <p style={{ fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 700, letterSpacing: '-1px' }}>{item.gpa}</p>  */}
              </div>
            </Card>
          </div>
        ))}
      </div>
    </section>
  )
}
