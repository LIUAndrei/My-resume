import { education } from '../assets/constants.js'

const Education = () => {
  return (
    <div className='flex justify-evenly items-center'>
      <ul className='list-disc pl-4'>
        {education.list.map((part, i) => (
          <li key={i} className='text-base'>
            {part}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Education
