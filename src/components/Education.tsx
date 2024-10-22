import SkillList from "./SkillList";

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

export default Education