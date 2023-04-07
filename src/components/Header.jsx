import { FaTelegram } from 'react-icons/fa/index.js'
import { MdMail } from 'react-icons/md/index.js'
import { BsPhoneVibrate } from 'react-icons/bs/index.js'
import { BiSun } from 'react-icons/bi/index.js'

const Header = () => {
  const darkModeToggle = () => {
    document.documentElement.classList.toggle('dark')
  }

  return (
    <header className='relative z-1 w-full flex flex-row justify-between m-0 p-0 pb-8 bg-transparent'>
      <div
        onClick={(event) => darkModeToggle()}
        className='absolute top-[-15px] left-[-15px] cursor-pointer'
      >
        <BiSun />
      </div>
      <div className='photo w-[12%] flex justify-center items-center'>
        <img
          src='./src/assets/small_mypicture.jpg'
          alt='My picture'
          className='rounded-2xl w-[100%] border dark:border-headingForDark border-headingForLite '
        />
      </div>
      <div className='left flex flex-col max-w-full  m-0 p-0 pl-6'>
        <h1 className='name dark:text-headingForDark text-headingForLite text-4xl font-medium'>
          Andrei Liubinski
        </h1>
        <p className='position'>Full-Stack Developer</p>
        <div className='contacts flex flex-row'>
          <a
            href='mailto:box@aliubinski.us'
            className='text-sm flex flex-row justify-center items-center'
          >
            <MdMail />
            <p>:box@aliubinski.us</p>
          </a>
          <span className='dark:text-headingForDark text-headingForLite'>
            &nbsp;//&nbsp;
          </span>
          <a
            href='tel:+375257112405'
            className='text-sm flex flex-row justify-center items-center'
          >
            <BsPhoneVibrate />
            <p>:(+375)25-711-2405</p>
          </a>
          <span className='dark:text-headingForDark text-headingForLite'>
            &nbsp;//&nbsp;
          </span>
          <a
            href='https://t.me/alxdrvnsk'
            className='text-sm flex flex-row justify-center items-center'
          >
            <FaTelegram />
            <p>:@alxdrvnsk</p>
          </a>
        </div>
      </div>
      <nav className='right w-1/4 m-0 p-0 pl-2'>
        <ul className='list w-full h-max flex flex-col list-none justify-start'>
          <li className='linkedin flex flex-row justify-between'>
            <span className='dark:text-headingForDark text-headingForLite font-bold'>
              LinkedIn
            </span>
            <a
              href='https://www.linkedin.com/in/andrei-liubinski/'
              className='text-sm'
            >
              /in/andrei-liubinski/
            </a>
          </li>
          <li className='github flex flex-row justify-between'>
            <span className='dark:text-headingForDark text-headingForLite font-bold'>
              GitHub
            </span>
            <a href='https://github.com/LIUAndrei' className='text-sm'>
              /LIUAndrei
            </a>
          </li>
          {/* <!-- <li className="codepen flex flex-row justify-between">
    <span className="">CodePen</span><a href="" className=""></a>
  </li> --> */}
          <li className='codewars flex flex-row justify-between'>
            <span className='dark:text-headingForDark text-headingForLite font-bold'>
              CodeWars
            </span>
            <a
              href='https://www.codewars.com/users/LIUAndrei'
              className='text-sm'
            >
              /LIUAndrei
            </a>
          </li>
          <li className='portfolio flex flex-row justify-between'>
            <span className='dark:text-headingForDark text-headingForLite font-bold'>
              Website
            </span>
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
