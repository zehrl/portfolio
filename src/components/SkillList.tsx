import Tag from "./Tag";

interface SkillListI {
  skills: string[];
  theme?: 'light' | 'dark';
}

const SkillList = (props: SkillListI) => {
  const theme = props.theme || 'light';
  return (
    <ul className={`flex flex-row flex-wrap gap-x-2.5 gap-y-3 py-1.5 justify-center`}>
      {props.skills.map((skill: string) => {
        return (<Tag text={skill} theme={theme}/>)
      })}
    </ul>
  )
}

export default SkillList