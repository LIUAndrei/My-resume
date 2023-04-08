import Article from './Article.jsx'
import Projects from './Projects.jsx'
import Skills from './Skills.jsx'
import About from './About.jsx'
import Education from './Education.jsx'

const Section = ({ section }) => {
  let render
  if (section.section_title === 'Curriculum Vitae') {
    render = <Education />
  }
  if (section.section_title === 'About me') {
    render = <About />
  }
  if (section.section_title === 'Projects') {
    render = <Projects />
  }

  if (section.section_title === 'Skills') {
    render = <Skills />
  }
  if (
    section.section_title === 'Relevant Experience & Courses' ||
    section.section_title === 'Professional History'
  ) {
    render = section.list.map((unit, i) => (
      <Article sectionTitle={section.section_title} unit={unit} key={i} />
    ))
  }

  console.log(section.section_title)
  return (
    <section className='m-0 px-0 py-4 bg-transparent flex-1'>
      <div className='w-full h-[3px] dark:bg-headingForDark bg-headingForLite'></div>
      <h2 className='relative z-10 dark:text-headingForDark text-headingForLite text-lg font-bold top-[-18px] dark:bg-darkColor bg-liteColor max-w-fit pr-5'>
        {section.section_title}
      </h2>
      {render}
    </section>
  )
}

export default Section
