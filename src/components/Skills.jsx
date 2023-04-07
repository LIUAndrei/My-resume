import { skills } from '../assets/constants'

const Skills = () => {
  const widthVariants = 'w-1/5 w-2/5 w-3/5 w-4/5'
  return (
    <div className='do-not-break w-full flex flex-col justify-evenly items-center'>
      {skills.list.map((skill) => (
        <div
          key={skill[0]}
          className='relative rounded my-3 w-[90%] h-6 pl-2 flex items-center justify-start  outline-dashed outline-1 outline-heading'
        >
          <div
            className={`z-0 rounded-l absolute top-0 left-0 bg-heading h-full 
            ${skill[1] === 5 ? 'w-full' : `w-${skill[1]}/5`}
            `}
          ></div>
          <p className='z-1 absolute text-base text-liteColor dark:text-darkColor font-semibold tracking-wide'>
            {skill[0]}
          </p>
        </div>
      ))}
    </div>
  )
}

export default Skills
