import Article from './Article'
import Projects from './Projects'
import Skills from './Skills'

const Section = ({ section }) => {
  let render
  if (section.section_title === 'Projects') {
    render = <Projects />
  }

  if (section.section_title === 'Skills') {
    render = <Skills />
  }
  if (
    section.section_title === 'Development Experience & Courses' ||
    section.section_title === 'Professional History'
  ) {
    render = section.list.map((unit, i) => (
      <Article sectionTitle={section.section_title} unit={unit} key={i} />
    ))
  }

  console.log(section.section_title)
  return (
    <section className='m-0 px-0 py-8 bg-transparent'>
      <div className='w-full h-[3px] bg-heading'></div>
      <h2 className='relative z-10 text-heading text-lg font-bold top-[-18px] bg-darkColor dark:bg-liteColor max-w-fit pr-5'>
        {section.section_title}
      </h2>
      {render}
    </section>
  )
}

export default Section
