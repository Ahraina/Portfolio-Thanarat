import { useState } from 'react'
import styles from './Navbar.module.css'

const PAGES = [
  { id: 'about',   label: 'PROFILE' },
  { id: 'edu',     label: 'EDUCATION'       },
  { id: 'courses', label: 'COURSEWORK'   },
  { id: 'intern',  label: 'EXPERIENCE'         },
  { id: 'project', label: 'PROJECT'},
]

export default function Navbar({ active, onChange }) {
  return (
    <nav className={styles.nav}>
      <span className={styles.logo}>PORTFOLIO</span>
      <div className={styles.links}>
        {PAGES.map(p => (
          <NavBtn
            key={p.id}
            active={active === p.id}
            onClick={() => onChange(p.id)}
          >
            {p.label}
          </NavBtn>
        ))}
      </div>
    </nav>
  )
}

function NavBtn({ active, onClick, children }) {
  const [hov, setHov] = useState(false)
  return (
    <button
      className={styles.btn}
      data-active={active}
      data-hov={hov}
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {children}
    </button>
  )
}
