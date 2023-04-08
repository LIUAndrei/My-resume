import { about } from '../assets/constants.js'

const About = () => {
  return (
    <div>
      <ul className='list-disc pl-4'>
        <li className='text-xs'>{about.list[0]}</li>
        <li className='text-xs'>{about.list[1]}</li>
      </ul>
    </div>
  )
}

export default About
