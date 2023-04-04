import Header from './components/Header'
import Section from './components/Section'
import { courses, jobs, skills, projects } from './assets/constants'

function App() {
  return (
    <div className='wrapper h-full w-full p-8 bg-background'>
      <Header />
      <main className='w-full flex flex-row'>
        <div className='w-3/4 pr-2'>
          <Section section={courses} />
          <Section section={jobs} />
        </div>
        <div className='w-1/4 pl-2'>
          <Section section={skills} />
          <Section section={projects} />
        </div>
      </main>
    </div>
  )
}

export default App
