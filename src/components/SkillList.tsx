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

export default SkillList