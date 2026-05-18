import { useState } from 'react'
import { PageHeader, TechTag } from '../components/UI'

const PROJECTS = [
  {
    title: 'Inventory Management System - Demo',
    type: 'Full-Stack Web Application',
    period: '2026',
    image: '/stock.PNG',
    desc:
      'A React-based demonstration version recreated from the original internal inventory management system developed during the internship at The Administrative Court of Thailand. The application is fully interactive and available for live demonstration.',
    features: [
      'Authentication & Role-Based Access Control',
      'Supabase Database Integration',
      'Equipment Request Management',
      'Borrowing & Return Workflow',
      'Inventory Tracking Dashboard',
      'Barcode Scanning Support',
      'REST API Integration',
      'Responsive User Interface',
      'Stock Quantity Management',
      'Admin & User Permission System',
      'Real-Time Equipment Status Tracking',
      'Real-Time Data Management',
    ],
    demo: 'https://inventory-management-system-72oboomby-joes-projects-4b01cb1f.vercel.app/',
    github: 'https://github.com/Ahraina/Inventory-Management-System',
    techs: [
      'React',
      'Vite',
      'JavaScript',
      'Tailwind CSS',
      'PostgreSQL',
      'REST API',
      'Authentication',
      'Supabase'
    ],
  },
  {
    title: 'Graduation Game Project Website',
    type: 'Frontend Web Application',
    period: '2025',
    image: '/game.PNG', 
    desc:
      'A responsive graduation project website developed to present game information, project details, and multimedia content.',
    features: [
      'Media, Information, and Digital Literacy Content',
      'Interactive User Interface',
      'Modern UI/UX Design',
      'Educational Game Project Presentation',
      'Multimedia Content Presentation',
      'Cross-Device Responsive Layout',
      'Smooth Navigation Experience',
      'Gameplay Instruction Page',
      'Story Overview Section',
    ],
    demo: 'https://gameproject-qr3r.onrender.com/index.html',
    github: 'https://github.com/Ahraina/GameProject',
    techs: ['HTML5', 'CSS3', 'Responsive Design'],
  },
  {
    title: 'Internship Portfolio Website',
    type: 'Personal Academic Portfolio Website',
    period: '2025-2026',
    image: '/intern.PNG',
    desc:
      'A responsive internship portfolio website developed to showcase internship experience, technical skills, responsibilities, and project outcomes during the internship period at The Administrative Court of Thailand.',
    features: [
      'Internship Experience Presentation',
      'Project & Technical Skills Showcase',
      'Responsive Web Layout',
      'Interactive Navigation System',
      'Modern UI/UX Design',
      'Portfolio-Style Presentation',
    ],
    demo: 'https://internship-report-kmutnb-6402041620-three.vercel.app/',
    github: 'https://github.com/Ahraina/internship-report-KMUTNB-6402041620043',
    techs: ['React', 'JavaScript', 'CSS Modules', 'Vite','Responsive Design','Frontend Development']
  },
]

function ProjectCard({
  title,
  type,
  period,
  image,
  desc,
  features,
  demo,
  github,
  techs,
  index,
}) {
  const [hov, setHov] = useState(false)

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: 'var(--white)',
        border: `1px solid ${hov ? 'var(--black)' : 'var(--border)'}`,
        borderRadius: 20,
        padding: '32px 32px 28px',
        marginBottom: 22,
        position: 'relative',
        overflow: 'hidden',
        transition: 'border-color 0.25s, box-shadow 0.25s, transform 0.25s',
        boxShadow: hov
          ? '0 16px 48px rgba(0,0,0,0.1)'
          : '0 2px 8px rgba(0,0,0,0.04)',
        transform: hov ? 'translateY(-3px)' : 'translateY(0)',
        animation: `fadeUp 0.5s ${index * 0.1}s ease both`,
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: 'var(--black)',
          transformOrigin: 'left',
          transform: hov ? 'scaleX(1)' : 'scaleX(0)',
          transition: 'transform 0.35s ease',
        }}
      />

      <div
        style={{
          width: '100%',
          height: 240,
          borderRadius: 16,
          border: '1px solid var(--border)',
          background: 'var(--white3)',
          overflow: 'hidden',
          marginBottom: 24,
        }}
      >
        <img
          src={image}
          alt={title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: hov ? 'scale(1.03)' : 'scale(1)',
            transition: 'transform 0.35s ease',
          }}
        />
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: 24,
          marginBottom: 16,
        }}
      >
        <div>
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 26,
              fontWeight: 700,
              marginBottom: 4,
            }}
          >
            {title}
          </h3>

          <p style={{ fontSize: 14, color: 'var(--text-mid)' }}>{type}</p>
        </div>

        <div
          style={{
            background: 'var(--white3)',
            border: '1px solid var(--border)',
            borderRadius: 8,
            padding: '5px 14px',
            fontSize: 12,
            color: 'var(--text-muted)',
            whiteSpace: 'nowrap',
          }}
        >
          {period}
        </div>
      </div>

      <div style={{ height: 1, background: 'var(--border)', margin: '16px 0' }} />

      <p
        style={{
          fontSize: 13,
          color: 'var(--text-muted)',
          lineHeight: 1.85,
          marginBottom: 18,
        }}
      >
        {desc}
      </p>

      <p
        style={{
          fontSize: 13,
          fontWeight: 700,
          color: 'var(--black)',
          marginBottom: 10,
        }}
      >
        Key Features
      </p>

      <ul
        style={{
          listStyle: 'none',
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
          marginBottom: 20,
          padding: 0,
        }}
      >
        {features.map((feature, i) => (
          <li
            key={i}
            style={{
              display: 'flex',
              gap: 12,
              alignItems: 'flex-start',
              fontSize: 13,
              color: 'var(--text-mid)',
            }}
          >
            <span
              style={{
                width: 18,
                height: 18,
                borderRadius: '50%',
                border: '1.5px solid var(--black)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 9,
                fontWeight: 700,
                flexShrink: 0,
                marginTop: 1,
              }}
            >
              {i + 1}
            </span>
            {feature}
          </li>
        ))}
      </ul>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {techs.map((t) => (
          <TechTag key={t}>{t}</TechTag>
        ))}
      </div>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 12,
          marginTop: 26,
        }}
      >
        <a
          href={demo}
          target="_blank"
          rel="noreferrer"
          style={{
            background: 'var(--black)',
            border: '1px solid var(--black)',
            color: 'var(--white)',
            borderRadius: 10,
            padding: '10px 18px',
            fontSize: 13,
            fontWeight: 600,
            textDecoration: 'none',
          }}
        >
          View Website
        </a>

        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          style={{
            background: 'var(--white)',
            border: '1px solid var(--border)',
            color: 'var(--black)',
            borderRadius: 10,
            padding: '10px 18px',
            fontSize: 13,
            fontWeight: 600,
            textDecoration: 'none',
          }}
        >
          GitHub
        </a>
      </div>
    </div>
  )
}

export default function MyProjectPage() {
  return (
    <section style={{ padding: '56px 48px', maxWidth: 960, margin: '0 auto' }}>
      <PageHeader label="PROJECTS" title="MY PROJECTS" />

      <p
        style={{
          fontSize: 14,
          color: 'var(--text-muted)',
          lineHeight: 1.8,
          marginTop: -10,
          marginBottom: 32,
        }}
      >
        Selected works, systems, and applications I developed during my academic
        and internship experience.
      </p>

      {PROJECTS.map((project, i) => (
        <ProjectCard key={i} index={i} {...project} />
      ))}
    </section>
  )
}
