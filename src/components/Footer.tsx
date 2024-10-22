import ContactList from "./ContactList"

const Footer = () => {
  return (
    <footer className='flex flex-col items-center gap-4 px-4 py-4 bg-secondary mt-auto'>
      <p className='font-thin italic text-xs'>I would love to connect 💻</p>
      <ContactList></ContactList>
    </footer>
  )
}

export default Footer