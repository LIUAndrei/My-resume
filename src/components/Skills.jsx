import { skills } from '../assets/constants.js'

const Skills = () => {
  return (
    <div className='do-not-break  skills-container w-full flex flex-row flex-wrap gap-2 place-items-center justify-around'>
      {skills.list.map((skill) => (
        <div className='border dark:border-headingForDark border-headingForLite p-[3px] text-sm'>
          {skill[0]}
        </div>
      ))}
    </div>
  )
}

export default Skills
