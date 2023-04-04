const Header = () => {
  return (
    <header className='relative z-1 w-full flex flex-row justify-between m-0 p-0 pb-8 bg-transparent'>
      <div className='photo w-[12%] flex justify-center items-center'>
        <img
          src='./src/assets/small_mypicture.jpg'
          alt='My picture'
          className='rounded-2xl w-[100%] border border-heading '
        />
      </div>
      <div className='left flex flex-col max-w-full  m-0 p-0 pl-6'>
        <h1 className='name text-heading text-4xl font-medium'>
          Andrei Liubinski
        </h1>
        <p className='position'>Full-Stack Developer</p>
        <div className='contacts'>
          <a href='mailto:box@aiubinski.us' className='text-sm'>
            box@aiubinski.us
          </a>
          <span className='text-heading'>&nbsp;//&nbsp;</span>
          <a href='tel:+375257112405' className='text-sm'>
            tel:+375257112405
          </a>
          <span className='text-heading'>&nbsp;//&nbsp;</span>
          <a href='https://t.me/alxdrvnsk' className='text-sm'>
            Telegram:@alxdrvnsk
          </a>
        </div>
      </div>
      <nav className='right w-1/4 m-0 p-0 pl-2'>
        <ul className='list w-full h-max flex flex-col list-none justify-start'>
          <li className='linkedin flex flex-row justify-between'>
            <span className='text-heading font-bold'>LinkedIn</span>
            <a
              href='https://www.linkedin.com/in/andrei-liubinski/'
              className='text-sm'
            >
              /in/andrei-liubinski/
            </a>
          </li>
          <li className='github flex flex-row justify-between'>
            <span className='text-heading font-bold'>GitHub</span>
            <a href='https://github.com/LIUAndrei' className='text-sm'>
              /LIUAndrei
            </a>
          </li>
          {/* <!-- <li className="codepen flex flex-row justify-between">
    <span className="">CodePen</span><a href="" className=""></a>
  </li> --> */}
          <li className='codewars flex flex-row justify-between'>
            <span className='text-heading font-bold'>CodeWars</span>
            <a
              href='https://www.codewars.com/users/LIUAndrei'
              className='text-sm'
            >
              /LIUAndrei
            </a>
          </li>
          <li className='portfolio flex flex-row justify-between'>
            <span className='text-heading font-bold'>Website</span>
            <a href='https://www.aliubinski.us/' className='text-sm'>
              www.aliubinski.us
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
