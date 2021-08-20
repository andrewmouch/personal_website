import { Container } from '../components/Container';
import { Dropdown } from 'components/Dropdown';
import Image from 'next/image'
import icon from 'public/icon.png'
import { experiences } from 'utils/data'
import { useRef } from "react"

type HomeProps = {
  wordData?: Array<object>
}

const testArray = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget mauris ullamcorper, dapibus elit vel, accumsan odio. Etiam porttitor, nisi eget mattis bibendum.",
  "Phasellus vitae tellus interdum, tempus odio nec, placerat urna. Morbi laoreet nec nunc quis rutrum. Nulla quis dui lobortis libero pellentesque hendrerit a at nisi.",
  "Nam viverra sem sit amet leo ultricies posuere. Vestibulum pulvinar vulputate velit ut sollicitudin. Maecenas porttitor blandit lorem, eu semper nisi pellentesque ut."
]

export default function Home(props: HomeProps) {
  const homeRef = useRef(null)
  const experienceRef = useRef(null)
  const projectsRef = useRef(null)
  const interestsRef = useRef(null)

  const scrollToExperience = () => {
    const id = 'experience';
    const yOffset = -80;
    const element = document.getElementById(id);
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  }

  const scrollToTop = () => homeRef.current.scrollIntoView({ behavior: "smooth" })
  // const scrollToExperience = () => {
  //   experienceRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" })
  // }
  const scrollToProjects = () => projectsRef.current.scrollIntoView({ behavior: "smooth" })
  const scrollToInterests = () => interestsRef.current.scrollIntoView({ behavior: "smooth" })

  return (
    <div ref={homeRef}>
      <Container
        scrollToTop={scrollToTop}
        scrollToExperience={scrollToExperience}
        scrollToProjects={scrollToProjects}
        scrollToInterests={scrollToInterests}
      >
        <div className={'text-5xl font-bold'}>
          Hey I'm Andrew Mouchantaf,
        </div>
        <div className={'mt-5 flex justify-between'} >
          <div className={'flex-none w-52'}>
            <Image src={icon} width={200} height={200} />
          </div>
          <div className={'flex-grow ml-5 mt-2 text-xl font-light'}>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget mauris ullamcorper, dapibus elit vel, accumsan odio.
              Etiam porttitor, nisi eget mattis bibendum, metus lectus pretium sem, nec sodales nulla turpis in risus.
              Phasellus in tempus justo, ac congue lacus. In lacinia ante et massa suscipit imperdiet. Morbi ut purus.
            </div>

            <div className={'mt-3'} >
              Donec sed volutpat magna. Donec ante tellus, iaculis sed nulla id, sodales bibendum lacus. Suspendisse potenti.
              In in tortor maximus risus ornare bibendum. Ut consectetur nisi quis quam imperdiet, eu sagittis mi viverra.
              Praesent eu velit in turpis lacinia vehicula sit amet ac lorem.
              Ut sed erat aliquam, condimentum diam quis, consequat elit. Cras at elit auctor, molestie magna in, maximus justo.
            </div>
          </div>
        </div>
        <div id={'experience'} ref={experienceRef} className={'mt-10 mb-8 text-5xl font-bold scroll'} >
          Experience
        </div>
        <Dropdown year={2021} experiences={experiences[2021]} />
        <Dropdown year={2020} experiences={experiences[2020]} />
        <Dropdown year={2019} experiences={experiences[2019]} />
        <Dropdown year={2018} experiences={experiences[2018]} />
        <div id={'projects'} ref={projectsRef} className={'mt-10 text-5xl font-bold'}>
          Projects
        </div>
        <div className={'px-3 mt-1 mb-8'}>
          <div className={'flex font-bold text-2.5xl'}>
            <div className={'pr-1'}>Project Name</div>
          </div>
          <ul className={'list-disc pl-3'}>
            {testArray.map(point => {
              return <li>{point}</li>
            })}
          </ul>
        </div>
        <div className={'px-3'}>
          <div className={'flex font-bold text-2.5xl'}>
            <div className={'pr-1'}>Project Name</div>
          </div>
          <ul className={'list-disc pl-3'}>
            {testArray.map(point => {
              return <li>{point}</li>
            })}
          </ul>
        </div>
        <div id={'interests'} ref={interestsRef} className={'mt-10 text-5xl font-bold'}>
          Interests
        </div>
        <ul className={'list-disc pl-6'}>
          <li>{'Music & Guitar'}</li>
          <li>Brazilian Jiu Jitsu</li>
          <li>Philosophy</li>
          <li>Fitness</li>
        </ul>
      </Container>
    </div >
  )
}