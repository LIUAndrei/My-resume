import { education } from '../assets/constants.js'

const Education = () => {
  return (
    <div className='flex justify-evenly items-center'>
      <ul className='pl-4'>
        {education.list.map((part, i) => (
          <li key={i} className='text-base'>
            <span className='text-headingForLite font-medium'>{part[0]}: </span>
            <span className='text-sm'>{part[1]}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Education
