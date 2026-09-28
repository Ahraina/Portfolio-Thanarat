import { useState } from 'react'
import Navbar         from './components/Navbar'
import AboutPage      from './pages/AboutPage'
import EducationPage  from './pages/EducationPage'
import CoursesPage    from './pages/CoursesPage'
import InternshipPage from './pages/InternshipPage'
import MyProjectPage from './pages/MyProjectPage'

const PAGE_MAP = {
  about:   AboutPage,
  edu:     EducationPage,
  courses: CoursesPage,
  intern:  InternshipPage,
  project: MyProjectPage,
}

export default function App() {
  const [active, setActive] = useState('about')
  const CurrentPage = PAGE_MAP[active]

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar active={active} onChange={setActive} />
      <main key={active} style={{ flex: 1, animation: 'fadeUp 0.45s cubic-bezier(0.16,1,0.3,1) both' }}>
        <CurrentPage />
      </main>
    </div>
  )
}
