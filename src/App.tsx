import pictureOfMe from './assets/logan.jpeg'
import { ReactComponent as LinkedInIcon } from './assets/linkedin-icon.svg';
import { ReactComponent as GithubIcon } from './assets/github-icon.svg';
import { ReactComponent as EmailIcon } from './assets/email-icon.svg';
import { ReactComponent as DownloadIcon } from './assets/download-icon.svg';
import { ReactComponent as UpArrowIcon } from './assets/up-arrow-icon.svg';
import { ReactComponent as ArrowTurnDownIcon } from './assets/arrow-turn-down-icon.svg';
import { ReactComponent as CircleIcon } from './assets/circle-icon.svg';
import SweetwaterLogo from './assets/sweetwater-logo.png';
import IngersollRandLogo from './assets/ingersoll-rand-logo.png';
import HoneywellLogo from './assets/honeywell-logo.png';
import UniversityOfWashingtonLogo from './assets/university-of-washington-logo.png';
import PurdueLogo from './assets/purdue-logo.png';
import AWSCertifiedCloudPractitionerCertification from './assets/aws-certified-cloud-practitioner-certification-icon.png'
import HoneywellLogoCondensed from './assets/honeywell-logo-condensed.png'
import NCEESLogo from './assets/ncees-logo.png'
import { useState } from 'react';

const App = () => {
  return (
    <div className="
      min-h-screen mx-auto
      bg-primary
      text-dark
    ">
      <Header></Header>

      {/* Navbar */}
      <Container
        theme='light'
      >
        <Navbar></Navbar>
      </Container>

      {/* Work Experience */}
      <Container
        theme='dark'
      >

        {/* SectionTitle */}
        <SectionTitle
          name="Work Experience"
        />

        {/* WorkExperience */}
        <WorkExperience
          companyLogo={SweetwaterLogo}
          positionTitle={"Web Software Engineer"}
          company={"Sweetwater Sound"}
          years={"2021-2023"}
          skills={["Javascript", "CSS", "HTML", "PHP", "SQL", "ReactJS", "Laravel", "Redis", "Docker"]}
          experience={[
            "Coded frontend (ReactJS) of checkout microservice, translating UX mockup designs and customer criteria, enabling $1M sales in the first 9 months for GearExchange.com",
            "Led the system design and implementation for the fraud detection service of checkout microservice, featuring Paypal and Slack integration (PHP), preventing $30k in fraudulent orders in the first 6 months",
            "Designed and coded the internal facing admin dashboard of checkout microservice, featuring complex queries and data aggregation (SQL), drastically reducing RCA cycle time",
            "Created table schema and models for customer, tax, and fraud data in the backend of the checkout microservice for 100,000s of checkout sessions"
          ]}
        />
        <WorkExperience
          companyLogo={IngersollRandLogo}
          positionTitle={"Manufacturing Engineer (Contract)"}
          company={"Ingersoll Rand"}
          years={"2020-2021"}
          skills={["Project Management", "Excel", "Six Sigma", "Manufacturing", "RCCA"]}
          experience={[
            "Managed insourcing project initiative, resulting in increased operations and improved employee retention by 25% during Covid"
          ]}
        />
        <WorkExperience
          companyLogo={HoneywellLogo}
          positionTitle={"Product Manufacturing Engineer"}
          company={"Honeywell Aerospace"}
          years={"2017-2020"}
          skills={["Manufacturing", "Design", "Six Sigma", "Statistics", "Technical Writing", "Project Management", "RCCA", "Excel", "Training"]}
          experience={[
            "Implemented and led project initiative to upgrade leak testing for aerospace grade laser welds estimating $50k/yr in savings",
            "Improved welding procedure for new project initiative by using cross-sectional root cause and measurement system analysis to reduce scrapped welded sensors by 60%",
            "Trained and certified operators to aerospace processes increasing factory productivity and expertise"]}
        />

      </Container>

      {/* Education */}
      <Container
        theme='light'
      >
        <SectionTitle
          name="Education"
          theme='dark'
        />
        <Education
          logo={UniversityOfWashingtonLogo}
          degreeName={"Full-Stack Web Development Certification"}
          school={"University of Washington"}
          years={"2021"}
          skills={["Javascript", "CSS", "HTML", "ReactJS", "ExpressJS", "NodeJS", "MongoDB", "Git", "Auth"]}
        />
        <Education
          logo={PurdueLogo}
          degreeName={"BS in Mechanical Engineering"}
          school={"Purdue University"}
          years={"2017"}
          skills={["Calculus", "Excel", "Statistics", "Data Analytics", "System Design", "Physics", "Design"]}
        />
      </Container>

      {/* Certifications */}
      <Container
        theme='dark'
      >
        <SectionTitle
          name="Certifications"
          theme='light'
        />
        <Certification
          logo={AWSCertifiedCloudPractitionerCertification}
          certificationName={"AWS Certified Cloud Practitioner"}
          agency={"Amazon Web Services"}
          years={"2024"}
        />
        <Certification
          logo={HoneywellLogoCondensed}
          certificationName={"Six Sigma Green Belt"}
          agency={"Honeywell Aerospace"}
          years={"2017"}
        />
        <Certification
          logo={NCEESLogo}
          certificationName={"Engineer in Training (Mechanical Engineering)"}
          agency={"NCEES"}
          years={"2017"}
        />
      </Container>

      {/* TakeMeBackUpBtn */}
      <a href="#header" className='flex flex-row justify-center items-center gap-1.5 p-4 bg-dark hover:opacity-90 opacity-100 ease-in-out duration-200'>
        <UpArrowIcon className='fill-primary' />
        <span className='font-serif text-primary'>Take me back up</span>
      </a>

      {/* Footer */}
      <Footer></Footer>

    </div>

  );
}

const Navbar = () => {
  return (
    <nav className='flex flex-row justify-center gap-2.5 flex-wrap px-4'>
      {/* <NavBtn href="/overview" title="Overview" /> */}
      <NavBtn href="/work-experience" title="Work Experience" />
      {/* <NavBtn href="/projects" title="Projects" /> */}
      {/* <NavBtn href="/music" title="Music" /> */}
    </nav>
  )
}

interface NavBtnI {
  href: string;
  title: string;
}

const NavBtn: React.FC<NavBtnI> = (props) => {
  const [selected, setSelected] = useState(false);

  return (
    <a href={props.href}
      className='flex flex-row items-center gap-2 bg-tertiary text-primary py-1 px-2  rounded-full font-serif border border-dark drop-shadow-flat
            hover:bg-tertiary-light duration-200 ease-in-out'
    >
      <CircleIcon className={`${selected ? 'fill-primary' : 'fill-dark'} inline-block`}></CircleIcon>
      <span>{props.title}</span>
    </a>
  )
}

const Footer = () => {
  return (
    <footer className='flex flex-col items-center gap-4 px-4 py-4 bg-secondary'>
      <p className='font-thin italic text-xs'>I would love to connect 💻</p>
      <ContactList></ContactList>
    </footer>
  )
}

interface ContainerI {
  children: React.ReactNode;
  theme?: 'light' | 'dark';
}

const Container: React.FC<ContainerI> = ({ children, theme = 'light' }) => {
  return (
    <div className={`${theme === 'light' ? 'bg-primary text-dark' : 'bg-dark text-primary'}`}>
      <div className="container max-w-xl mx-auto py-4">
        {children}
      </div>
    </div>
  );
}

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

interface CertificationI {
  logo: string;
  certificationName: string;
  agency: string;
  years: string;
}

const Certification = (props: CertificationI) => {
  return (
    <div className='column-3 text-primary py-4 px-4 flex flex-row gap-4'>
      <div className='basis-4/12 text-right'>
        <img className='w-14 inline-block' alt={`${props.logo} logo`} src={props.logo}></img>
      </div>
      <div className='basis-8/12'>
        <p className='font-normal text-sm pb-1'>{props.certificationName}</p>
        <p className='font-light text-xs'>{props.agency} | {props.years}</p>
      </div>
    </div>
  )
}

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
          ">Logan Zehr</p>

          <p>Software Engineer</p>
        </div>

      </div>

      <ContactList></ContactList>

    </header >
  )
}
interface SectionTitleI {
  name: string;
  theme?: 'light' | 'dark';
}

const SectionTitle = (props: SectionTitleI) => {
  const theme = props.theme || 'light';
  return (
    <h1
      className={`
        text-4xl text-center font-serif font
        p-4
        ${theme === 'light' ? 'text-primary' : 'text-dark'}
      `}
    >{props.name}</h1>
  )
}

interface WorkExperienceI {
  companyLogo: string;
  positionTitle: string;
  company: string;
  years: string;
  skills: string[];
  experience: string[];
}

const WorkExperience = (props: WorkExperienceI) => {
  return (
    <div className='flex flex-col px-4 pt-7 pb-4 gap-4 items-center text-primary'>
      <div className='flex flex-col items-center'>
        <img className='w-36' alt={`${props.company} logo`} src={props.companyLogo}></img>
        <p className='font-semibold'>{props.positionTitle}</p>
        <p className='font-light'>{props.company} | {props.years}</p>
        <SkillList skills={props.skills} />
      </div>
      <ul className='italic text-xs font-light list-disc list-inside leading-5 space-y-2.5'>
        {props.experience.map(bulletPoint => {
          return (<li key={bulletPoint}>{bulletPoint}</li>)
        })}
      </ul>
    </div>
  )
}

interface EducationI {
  logo: string;
  degreeName: string;
  school: string;
  years: string;
  skills: string[];
}

const Education = (props: EducationI) => {
  return (
    <div className='flex flex-col px-4 p-7 pb-4 gap-4 items-center'>
      <div className='flex flex-col items-center'>
        <img className='w-36 pb-4' alt={`${props.school} logo`} src={props.logo}></img>
        <p className='font-semibold'>{props.degreeName}</p>
        <p className='font-light'>{props.school} | {props.years}</p>
      </div>
      <SkillList skills={props.skills} theme="dark" />
    </div>
  )
}


interface SkillListI {
  skills: string[];
  theme?: 'light' | 'dark';
}

const SkillList = (props: SkillListI) => {
  const theme = props.theme || 'light';
  return (
    <ul className={`flex flex-row flex-wrap gap-x-2.5 gap-y-3 py-1.5 justify-center font-serif text-xs font-medium ${theme === 'light' ? 'text-dark' : 'text-primary'}`}>
      {props.skills.map((skill: string) => {
        return (<li key={skill} className={`rounded-full py-0.5 px-2.5 ${theme === 'light' ? 'bg-primary' : 'bg-dark'}`}><span>{skill}</span></li>)
      })}
    </ul>
  )
}

export default App;
