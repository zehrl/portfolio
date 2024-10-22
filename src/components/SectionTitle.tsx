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

export default SectionTitle