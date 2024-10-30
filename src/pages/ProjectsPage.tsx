import Container from "../components/Container"
import SectionTitle from "../components/SectionTitle"
import { ReactComponent as CocktailIcon } from "../assets/cocktail-icon.svg"
import { ReactComponent as CloudsIcon } from "../assets/clouds-icon.svg"
import { ReactComponent as BurgerIcon } from "../assets/burger-icon.svg"
import { ReactComponent as NewsFlowIcon } from "../assets/newspaper-icon.svg"
import { ReactComponent as BootcampIcon } from "../assets/boot-icon.svg"
import { ReactComponent as CircleExclamationIcon } from "../assets/circle-exclamation-icon.svg"
import { ReactComponent as LinkIcon } from "../assets/link-icon.svg"

import TheCocktailGeneratorImage from '../assets/the-cocktail-generator.png';
import TheWeatherDashboardImage from '../assets/the-weather-dashboard.png';
import EatTheBurgerImage from '../assets/eat-the-burger.png';

import SkillList from "../components/SkillList"
import Tag from "../components/Tag"

const ProjectsPage = () => {

  // ℹ️ Order of projects displayed correlates to order in this array
  const projectData = [{
    icon: <NewsFlowIcon className="w-5 inline-block fill-primary" />,
    title: "News Flow",
    role: "UI/UX, Full Stack",
    skills: ["Javascript", "CSS", "HTML", "ReactJS", "ExpressJS", "NodeJS", "MongoDB", "MongooseJS", "Auth", "API", "SCSS"],
    content: <YoutubeVideo link="https://www.youtube.com/embed/ev4d_KEowQk" title="News Flow Demo" />,
    isDeprecatedProject: true,
    isBootcampProject: true,
    repoLink: "https://github.com/zehrl/news-flow",
    // liveLink: "",
    description: "News Flow is an app that allows users to interact with google maps and based on where they click, news from that area will populate into the news feed section. Users are able to search and view news without signing into a profile. Once the user creates a profile with a valid email and password they will have the ability to save news articles. These saved articles will be added to the users profile page where they can view or delete previously saved articles.",
  },
  {
    icon: <CocktailIcon className="w-5 inline-block fill-primary" />,
    title: "The Cocktail Generator",
    role: "Backend",
    skills: ["Javascript", "jQuery", "HTML", "API", "Git"],
    content: <img src={TheCocktailGeneratorImage} alt="The Cocktail Generator project demo" />,
    isDeprecatedProject: false,
    isBootcampProject: true,
    repoLink: "https://github.com/zehrl/cocktail-generator",
    liveLink: "https://zehrl.github.io/cocktail-generator/",
    description: "Cocktail Generator is a web application that recommends a list of cocktails that are appropriate to the users location & time zone. A couple of button clicks gets you four, well curated, cocktail suggestions with pictures and recipes.",
  },
  {
    icon: <CloudsIcon className="w-5 inline-block fill-primary" />,
    title: "The Weather Dashboard",
    role: "UI/UX, Full Stack",
    skills: ["Javascript", "CSS", "HTML", "jQuery", "Bootstrap", "Git", "API"],
    content: <img src={TheWeatherDashboardImage} alt="The Weather Dashboard project demo" />,
    isDeprecatedProject: true,
    isBootcampProject: true,
    repoLink: "https://zehrl.github.io/weather-dashboard/",
    // liveLink: "",
    description: "Weather Dashboard is a responsive web application that provides real-time weather data for any city worldwide. Users can search by city (or city and country) to view the current day’s forecast, including temperature, humidity, wind speed, and UV index, along with a 5-day forecast featuring dynamic weather icons. The app uses the OpenWeather API for accurate data and stores search history locally for quick access to recent searches. Built with jQuery, JavaScript, HTML, and Bootstrap, it delivers a seamless and mobile-friendly user experience.",
  },{
    icon: <BurgerIcon className="w-5 inline-block fill-primary" />,
    title: "Eat-The-Burger",
    role: "UI/UX, Full Stack",
    skills: ["Javascript", "CSS", "HTML", "jQuery", "NodeJS", "MongoDB", "Git", "Bootstrap"],
    content: <img src={EatTheBurgerImage} alt="Eat-The-Burger project demo" />,
    isDeprecatedProject: true,
    isBootcampProject: true,
    repoLink: "https://github.com/zehrl/burger",
    // liveLink: "",
    description: "Eat-The-Burger is a pointless web app that allows the user to enter in a burger name and virtually “eat” it. A cumulative amount of burgers eaten is displayed, and interestingly enough, shared among anyone that uses the site.",
  },]

  const Projects = projectData.map((project) => {
    return (<Project
      {...project}
    ></Project>)
  })

  return (<>
    <Container
      theme="dark"
    >
      <SectionTitle
        theme="light"
        name="Personal Projects"
      />

      {Projects}

    </Container>
  </>)
}

const Project = (props: any) => {
  return (
    <div className="text-center p-4 flex flex-col gap-4">
      <div>
        <div>
          {props.icon}
          <h2 className="pl-2 inline-block font-serif text-2xl font-medium">{props.title}</h2>
        </div>
        <span className="font-serif">{props.role}</span>
      </div>
      <SkillList
        skills={props.skills}
      />
      {props.content}
      <div className="flex flex-row justify-between">
        <ul className="flex flex-row flex-wrap gap-x-2.5 gap-y-3 py-1.5 justify-center">
          {props.isBootcampProject && <BootcampProjectTag />}
          {props.isDeprecatedProject && <DeprecatedProjectTag />}
        </ul>
        <div>
          {props.liveLink && <Link link={props.liveLink} text="Live" />}
          {props.liveLink && props.repoLink && "|"}
          {props.repoLink && <Link link={props.repoLink} text="Repo" />}
        </div>
      </div>

      <p className="italic text-justify text-xs font-light leading-5">{props.description}</p>
    </div>
  )
}

const BootcampProjectTag = () => {
  return (
    <Tag
      icon={<BootcampIcon className="w-3 inline-block fill-dark mr-1" />}
      text={"Bootcamp Project"}
      theme={"light"}
    />
  )
}

const DeprecatedProjectTag = () => {
  return (
    <Tag
      icon={<CircleExclamationIcon className="w-3 inline-block fill-primary mr-1" />}
      text={"Deprecated"}
      theme={"warning"}
    />
  )
}

const Link = (props: any) => {
  return (
    <>
      <a className="px-2 inline-block font-serif underline hover:text-primary-light transition ease-in-out duration-200" rel="noreferrer" target="_blank" href={props.link}><LinkIcon className="inline-block mr-1 w-3 fill-primary" />{props.text}</a>
    </>
  )
}

const YoutubeVideo = (props: any) => {
  return (
    <iframe
      className="aspect-video"
      src={props.link}
      title={props.title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    >
    </iframe >
  )
}

export default ProjectsPage
