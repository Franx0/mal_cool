import type { ReactElement } from 'react'
import Image from 'next/image'

type Announcement = {
  alt: string,
  url: string,
  imageUrl: string,
  width: number,
  height: number,
}

export default function Announcements({dictionary}: any) {
  if(!dictionary) return null

  const announcements = (announcements: Array<Announcement>): Array<ReactElement> => {
    return announcements.map((announcement: Announcement, i: number) => {
      return(
        <a key={i} className="flex m-6 lg:" target="_blank" href={announcement.url}>
          <Image
            src={announcement.imageUrl}
            alt={announcement.alt}
            width={announcement.width}
            height={announcement.height}
            priority
          />
        </a>
      )
    })
  }

  return (
    <div className="flex flex-wrap w-full max-w-7xl mb-10 lg:pl-10 items-center justify-between text-lg text-justify">
      <div className="flex flex-wrap grow w-full mb-6 justify-left lg:justify-center lg:text-justify text-justify lg:text-2xl text-xl">
        { dictionary.date && <span className="flex flex-wrap w-full lg:justify-center text-blue-400 lg:text-xl text-base">{ dictionary.date }</span> }
        { dictionary.title }
      </div>
      <div className="flex flex-wrap grow w-full text-lg text-gray-600">
        { dictionary.subtitle }
      </div>
      <div className="flex flex-wrap grow w-full justify-center text-justify">
        {announcements(dictionary.all)}
      </div>
    </div>
  )
}
