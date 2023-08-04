import { projects } from '../assets/constants.js'

import { MdOutlineOpenInNew } from 'react-icons/md'

const Projects = () => {
  return (
    <div className='do-not-break w-full flex flex-row gap-4 justify-evenly items-center'>
      {projects.list.map((project, i) => (
        <a
          href={project[2]}
          key={i}
          className='my-2 flex-1 outline-dashed outline-1 outline-headingForDark self-stretch rounded'
        >
          <p className='bg-headingForDark flex flex-row gap-1 items-center font-semibold rounded-br-lg rounded-tl text-darkColor dark:text-liteColor px-3 max-w-fit'>
            <span className='flex'>{project[0]}</span>
            <MdOutlineOpenInNew />
          </p>
          <p className='p-2 text-sm '>{project[1]}</p>
        </a>
      ))}
    </div>
  )
}

export default Projects
