import Header from './components/Header.jsx'
import Section from './components/Section.jsx'
import { courses, jobs, skills, projects } from './assets/constants.js'

function App() {
  return (
    <div className='wrapper h-full w-full p-8 dark:bg-darkColor dark:text-liteColor text-darkColor bg-liteColor'>
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
