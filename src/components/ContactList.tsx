import { ReactComponent as LinkedInIcon } from '../assets/linkedin-icon.svg';
import { ReactComponent as GithubIcon } from '../assets/github-icon.svg';
import { ReactComponent as EmailIcon } from '../assets/email-icon.svg';
import { ReactComponent as DownloadIcon } from '../assets/download-icon.svg';

const ContactList = () => {
  return (
    <div className='flex flex-row items-center'>
      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/logan-j-zehr/" className='p-2 fill-dark ease-in-out hover:fill-light-dark duration-200'>
        <LinkedInIcon></LinkedInIcon>
      </a>

      <a target="_blank" rel="noopener noreferrer" href="https://www.github.com/zehrl" className='p-2 fill-dark ease-in-out hover:fill-light-dark duration-200'>
        <GithubIcon></GithubIcon>
      </a>

      <a target="_blank" rel="noopener noreferrer" href="mailto:zehrl315@outlook.com" className='p-2 fill-dark ease-in-out hover:fill-light-dark duration-200'>
        <EmailIcon></EmailIcon>
      </a>

      <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1e9qUtyy_4BWa2A-cZPNxOQM8le_cFsJY/view?usp=sharing"
        className='
          flex flex-row items-center
          m-2 px-2 py-1 gap-1
          bg-secondary
          rounded-3xl border border-dark
          drop-shadow-flat
          ease-in-out hover:bg-primary duration-200
        '><DownloadIcon className='inline'></DownloadIcon><span className='font-serif text-xs'>Resume</span></a>
    </div>
  )
}

export default ContactList