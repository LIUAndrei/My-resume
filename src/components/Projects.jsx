import { projects } from '../assets/constants'

const Projects = () => {
  return (
    <div className='do-not-break w-full flex flex-col justify-evenly items-center'>
      {projects.list.map((project, i) => (
        <a
          href={project[2]}
          key={i}
          className='my-3 w-[90%] outline-dashed outline-1 outline-headingForDark  rounded'
        >
          <p className='bg-headingForDark  font-semibold rounded-br-lg rounded-tl text-darkColor dark:text-liteColor px-3 max-w-fit'>
            {project[0]}
          </p>
          <p className='p-2 text-sm '>{project[1]}</p>
        </a>
      ))}
    </div>
  )
}

export default Projects
