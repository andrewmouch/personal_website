const navLinkClasses = 'mx-3 cursor-pointer transition duration-75 ease-in transform hover:scale-105 active:scale-100 select-none'

type NavbarProps = {
  scrollToTop: () => void
  scrollToExperience: () => void
  scrollToProjects: () => void
  scrollToInterests: () => void
}

export const Navbar = (props: NavbarProps) => {
  const { scrollToTop, scrollToExperience, scrollToProjects, scrollToInterests } = props
  return (
    <div className={'py-3 flex justify-between align-middle sticky bg-black top-0 z-10'}>
      <div className={'mt-3 cursor-pointer transition duration-75 ease-in transform hover:scale-105 active:scale-100 select-none'}>
        <img onClick={() => { scrollToTop() }} className={'w-10'} src={'logo.svg'} />
      </div>
      <div className={'flex font-bold text-3xl align-middle mt-3'}>
        <div onClick={() => { scrollToExperience() }} className={navLinkClasses}>
          Experience
        </div>
        <div onClick={() => { scrollToProjects() }} className={navLinkClasses}>
          Projects
        </div>
        <div onClick={() => { scrollToInterests() }} className={navLinkClasses}>
          Interests
        </div>
        <div className={navLinkClasses}>
          <a target="_blank" href={'https://github.com/andrewmouch'}>
            <img src={"github.svg"} className={'w-9'} />
          </a>
        </div>
        <div className={navLinkClasses}>
          <a target="_blank" href={'https://www.linkedin.com/in/andrewmouch/'}>
            <img src={"linkedin.svg"} className={'w-9'} />
          </a>
        </div>
        <div className={navLinkClasses}>
          <a target="_blank" href={'mailto:andrewmouchantaf@gmail.com'}>
            <img src={"email.svg"} className={'w-9'} />
          </a>
        </div>
      </div>
    </div>
  )
}
