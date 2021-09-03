import upcaret from '../public/upcaret.svg'
import downcaret from '../public/downcaret.svg'
import Image from 'next/image'
import { useState } from 'react'

export type Experience = {
  name: string
  companyName?: string
  companyIconPath?: string
  small?: boolean
  large?: boolean
  term: string // 'WINTER' | 'SUMMER' | 'FALL'
  location: string
  points: string[]
}

type DropdownProps = {
  year: number;
  experiences: Experience[];
}


export const Dropdown = (props: DropdownProps) => {
  const [open, setOpen] = useState(false)

  const getDateRange = (term: string) => {
    switch (term) {
      case "WINTER":
        return "January - April"
      case "SUMMER":
        return "May - August"
      case "FALL":
        return "September - December"

    }
  }

  const getIconSize = (experience: Experience) => {
    const name = experience.companyName
    if (name == "data.world") return 'w-40';
    if (name == "Sony") return 'w-32 mt-1';
    if (name == "IBM") return 'w-20 mt-1';
    return 'w-28';
  }

  const { year, experiences } = props;
  return (
    <>
      <div className={' border-b border-t md:py-2 px-3 text-3xl md:text-4xl flex justify-between cursor-pointer select-none'} onClick={() => { setOpen(!open) }}>
        <div>
          {year}
        </div>
        <div className={'mb-2'}>
          <Image src={open ? downcaret : upcaret} width={24} height={18} />
        </div>
      </div>
      {/* Perhaps make this an accordion in the future? */}
      {open && (
        experiences.map(experience => {
          return (
            <div className={'px-6 py-4'}>
              <div className={'font-semibold underline text-1xl md:text-2xl'}>
                {getDateRange(experience.term)}
              </div>
              <div className={'md:flex justify-between'}>
                <div className={'md:flex font-bold text-2xl md:text-2.5xl'}>
                  <div className={'pr-1'}>{experience.name}<span className={'hidden md:inline'}>{' - '}</span></div>
                  <div>
                    {experience.companyIconPath && <img className={getIconSize(experience)} src={experience.companyIconPath} />}
                    {experience.companyName == "ESI" && <div className={'font-medium'}> {experience.companyName} </div>}
                  </div>
                </div>
                <div className={'hidden md:flex'}>
                  <div className={'flex font-medium text-xl mb-1 md:mb-0'}>
                    <img className={'w-5 md:w-6'} src={'location.svg'} />
                    <div className={'ml-1 md:mt-2'}>{experience.location}</div>
                  </div>
                </div>
              </div>
              <ul className={'list-disc text-lg pl-3'}>
                {experience.points.map(point => {
                  return <li>{point}</li>
                })}
              </ul>
            </div>
          )
        })
      )}
    </>
  )
}

// Make company clickable --DREW--
