import pictureOfMe from './assets/logan.jpeg'
import { ReactComponent as LinkedInIcon } from './assets/linkedin-icon.svg';
import { ReactComponent as GithubIcon } from './assets/github-icon.svg';
import { ReactComponent as EmailIcon } from './assets/email-icon.svg';
import { ReactComponent as DownloadIcon } from './assets/download-icon.svg';

const App = () => {
  return (
    <div className="
      min-h-screen max-w-xl mx-auto
      bg-primary
      px-4
      text-dark
    ">

      <Header></Header>

      {/* Navbar */}

      {/* SectionTitle */}
      {/* WorkExperience */}
      {/* WorkExperience */}
      {/* WorkExperience */}

      {/* SectionTitle */}
      {/* Education */}
      {/* Education */}

      {/* SectionTitle */}
      {/* Certification */}
      {/* Certification */}
      {/* Certification */}

      {/* TakeMeBackUpBtn */}

      {/* Footer */}

    </div>

  );
}

const Header = () => {
  return (
    <header className="
      flex flex-col items-center
      pt-24 pb-2 gap-2
    ">
      <div className="
        flex flex-col items-center
        gap-2
      ">

        <img alt="Logan Zehr" src={pictureOfMe} className="
          w-36 h-36
          rounded-3xl border border-dark
          drop-shadow-flat
        "/>

        <div className="text-center">
          <p className="
            text-3xl font-medium
          ">Logan Zehr</p>

          <p>Software Engineer</p>
        </div>

      </div>

      <div className='
        flex flex-row items-center
      '>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/logan-j-zehr/" className='p-2'>
          <LinkedInIcon></LinkedInIcon>
        </a>

        <a target="_blank" rel="noopener noreferrer" href="https://www.github.com/zehrl" className='p-2'>
          <GithubIcon></GithubIcon>
        </a>

        <a target="_blank" rel="noopener noreferrer" href="mailto:zehrl315@outlook.com" className='p-2'>
          <EmailIcon></EmailIcon>
        </a>

        <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1e9qUtyy_4BWa2A-cZPNxOQM8le_cFsJY/view?usp=sharing"
          className='
            flex flex-row items-center
            m-2
            px-2
            py-1
            gap-1
            bg-secondary
            rounded-3xl border border-dark
            drop-shadow-flat
        '><DownloadIcon className='inline'></DownloadIcon><span className='font-serif text-xs'>Resume</span></a>
      </div>
    </header >
  )
}

export default App;
