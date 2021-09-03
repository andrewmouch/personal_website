import { Container } from '../components/Container';
import { Dropdown } from '../components/Dropdown';
import Image from 'next/image'
import icon from '../public/icon.png'
import { experiences, projects } from '../utils/data'
import { useRef } from "react"

type HomeProps = {
  wordData?: Array<object>
}

console.log(projects)

export default function Home(props: HomeProps) {
  const homeRef = useRef(null)
  const experienceRef = useRef(null)
  const projectsRef = useRef(null)
  const interestsRef = useRef(null)

  const scrollToTop = () => homeRef.current.scrollIntoView({ behavior: "smooth" })

  const scrollToExperience = () => {
    const id = 'experience';
    const yOffset = -80;
    const element = document.getElementById(id);
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  }

  const scrollToProjects = () => {
    const id = 'projects';
    const yOffset = -80;
    const element = document.getElementById(id);
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  }

  // const scrollToInterests = () => {
  //   const id = 'interests';
  //   const yOffset = -80;
  //   const element = document.getElementById(id);
  //   const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

  //   window.scrollTo({ top: y, behavior: 'smooth' });
  // }

  return (
    <div ref={homeRef}>
      <Container
        scrollToTop={scrollToTop}
        scrollToExperience={scrollToExperience}
        scrollToProjects={scrollToProjects}
      // scrollToInterests={scrollToInterests}
      >
        <div className={'text-4xl md:text-5xl font-bold text-center'}>
          Hey I'm Andrew Mouchantaf,
        </div>
        <div className={'flex md:hidden mt-3 justify-center'}>
          <div className={'mx-3 cursor-pointer'}>
            <a target="_blank" href={'https://github.com/andrewmouch'}>
              <img src={"github.svg"} className={'w-9'} />
            </a>
          </div>
          <div className={'mx-3 cursor-pointer'}>
            <a target="_blank" href={'https://www.linkedin.com/in/andrewmouch/'}>
              <img src={"linkedin.svg"} className={'w-9'} />
            </a>
          </div>
          <div className={'mx-3 cursor-pointer'}>
            <a target="_blank" href={'mailto:andrewmouchantaf@gmail.com'}>
              <img src={"email.svg"} className={'w-9'} />
            </a>
          </div>
        </div>
        <div className={'mt-5 flex justify-between'} >
          <div className={'my-auto flex-none w-52 hidden lg:block'}>
            <Image src={icon} width={200} height={200} />
          </div>
          <div className={'flex-grow lg:ml-5 mt-2 text-lg md:text-xl font-light'}>
            <div>
              A curious kid in my final year of mechatronics engineering at the University of Waterloo. I'm interested in
              solving problems with software, analyzing the world and my actions through philosophy, making music and
              playing guitar, and fitness through weightlifting and long distance running.
            </div>
            <div className={'mt-3'} >
              Currently exploring server engine optimized web applications (through Next.js) leveraging
              the benefits of GraphQL APIs.
            </div>
            <div className={'mt-3'} >
              Feel like working? <a href={'mailto:andrewmouchantaf@gmail.com'} className={'underline'}>Don't hesitate to reach out!</a>
            </div>
          </div>
        </div>
        <div id={'experience'} ref={experienceRef} className={'mt-10 mb-8 text-4xl md:text-5xl font-bold scroll'} >
          Experience
        </div>
        <Dropdown year={2021} experiences={experiences[2021]} />
        <Dropdown year={2020} experiences={experiences[2020]} />
        <Dropdown year={2019} experiences={experiences[2019]} />
        <Dropdown year={2018} experiences={experiences[2018]} />
        <div id={'projects'} ref={projectsRef} className={'mt-10 text-4xl md:text-5xl font-bold'}>
          Projects
        </div>
        {projects.map(project => (
          <div className={'px-3 mt-1 mb-8'}>
            <div className={'flex font-bold text-2.5xl'}>
              <a href={project.applicationUrl} className={'pr-1 underline'}>{project.projectName}</a>
            </div>
            <ul className={'list-disc pl-3'}>
              {project.projectPoints.map(point => {
                return <li>{point}</li>
              })}
            </ul>
          </div>
        ))}
        {/* <div id={'interests'} ref={interestsRef} className={'mt-10 text-4xl md:text-5xl font-bold'}>
          Interests
        </div>
        <ul className={'list-disc pl-6'}>
          <li>{'Music & Guitar'}</li>
          <li>Brazilian Jiu Jitsu</li>
          <li>Philosophy</li>
          <li>Fitness</li>
          <li>Learning Languages</li>
        </ul> */}
      </Container>
    </div >
  )
}