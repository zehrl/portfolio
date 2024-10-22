import { ReactComponent as ArrowTurnDownIcon } from '../assets/arrow-turn-down-icon.svg';
import { ReactComponent as CircleIcon } from '../assets/circle-icon.svg';
import ContactList from './ContactList';
import Container from './Container';
import pictureOfMe from '../assets/logan.jpeg'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="
      flex flex-col items-center
      pb-2 gap-2
    "
      id='header'>
      <div className="
        flex flex-col items-center
        gap-2
      ">

        <div>
          <div className='flex flex-row justify-end items-start relative left-6 top-2 rotate-12 hover:scale-125 hover:cursor-default ease-in-out duration-200'>
            <span className='font-handwriting text-dark'>me</span>
            <div className='pt-4 rotate-12'>
              <ArrowTurnDownIcon className='w-6 h-6 fill-dark' />
            </div>
          </div>
          <img alt="Logan Zehr" src={pictureOfMe} className="
          w-36 h-36
          rounded-3xl border border-dark
          drop-shadow-flat
          "/>
        </div>

        <div className="text-center">
          <p className="
            text-3xl font-medium
          ">Full Stack Engineer</p>

          <p>Logan Zehr</p>
        </div>

      </div>

      <ContactList></ContactList>

      {/* Navbar */}
      <Container
        theme='light'
      >
        <Navbar></Navbar>
      </Container>

    </header >
  )
}

const Navbar = () => {
  return (
    <nav className='flex flex-row justify-center gap-2.5 flex-wrap px-4'>
      {/* <NavBtn href="/overview" title="Overview" /> */}
      <NavBtn href="/" title="Work Experience" />
      <NavBtn href="/projects" title="Projects" />
      {/* <NavBtn href="/music" title="Music" /> */}
    </nav>
  )
}

interface NavBtnI {
  href: string;
  title: string;
}

const NavBtn: React.FC<NavBtnI> = (props) => {

  return (
    <NavLink to={props.href}
      className='flex flex-row items-center gap-2 bg-tertiary text-primary py-1 px-2  rounded-full font-serif border border-dark drop-shadow-flat
            hover:bg-tertiary-light duration-200 ease-in-out'
    >
      {({ isActive }) => (<>
        <CircleIcon className={`${isActive ? 'fill-primary' : 'fill-dark'} inline-block w-4`}></CircleIcon>
        <span>{props.title}</span>
      </>)}

    </NavLink>
  )
}

export default Header