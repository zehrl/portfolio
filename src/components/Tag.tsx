

const Tag = (props: any) => {
  let themeBgStyling, themeTextStyling
  switch (props.theme) {
    case "light":
      themeBgStyling = "bg-primary"
      themeTextStyling = "text-dark"
      break
    case "dark":
      themeBgStyling = "bg-dark"
      themeTextStyling = "text-primary"
      break
    case "warning":
      themeBgStyling = "bg-warning"
      themeTextStyling = "text-primary"
      break
  }

  return (
    <li key={props.text} className={`text-xs rounded-full py-0.5 px-2.5 ${themeBgStyling}`}>
      {props.icon}
      <span className={`${themeTextStyling} font-serif font-medium`}>{props.text}</span>
    </li>
  )
}

export default Tag